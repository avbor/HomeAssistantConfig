#include "esphome.h"
#include "IRremoteESP8266.h"
#include "IRsend.h"
#include "ir_Daikin.h"

const uint16_t kIrLed = 14;
IRDaikinESP ac(kIrLed);

class DaikinAC : public PollingComponent, public Climate { // Используем PollingComponent для самопроверки
  public:
    sensor::Sensor *sensor_{nullptr};

    // Обновляем раз в 30 секунд на случай, если данные "зависли"
    DaikinAC() : PollingComponent(30000) {} 

    void set_sensor(sensor::Sensor *sensor) { this->sensor_ = sensor; }

    void setup() override {
      ac.begin();

      // 1. Сразу ставим значения, чтобы HA не видел null
      this->mode = climate::CLIMATE_MODE_OFF;
      this->target_temperature = 24.0f;
      this->current_temperature = 22.0f; 

      // 2. Восстанавливаем из памяти
      auto restore = this->restore_state_();
      if (restore.has_value()) {
        restore->apply(this);
      }

      // 3. Коллбэк на изменение сенсора
      if (this->sensor_) {
        this->sensor_->add_on_state_callback([this](float state) {
          if (!std::isnan(state)) {
            ESP_LOGD("daikin_custom", "Sensor callback: %.1f", state);
            this->current_temperature = state;
            this->publish_state();
          }
        });
      }

      // 4. Первая публикация через 5 секунд (даем время API HA проснуться)
      this->set_timeout("initial_sync", 5000, [this]() {
        this->publish_state();
        ESP_LOGI("daikin_custom", "Initial state published");
      });
    }

    // Периодическая проверка (раз в 30 сек), если вдруг данные в HA пропали
    void update() override {
      if (this->sensor_ && !std::isnan(this->sensor_->get_state())) {
          this->current_temperature = this->sensor_->get_state();
      }
      this->publish_state();
    }

    climate::ClimateTraits traits() override {
      auto traits = climate::ClimateTraits();
      traits.set_supported_modes({
          climate::CLIMATE_MODE_OFF, climate::CLIMATE_MODE_AUTO,
          climate::CLIMATE_MODE_COOL, climate::CLIMATE_MODE_HEAT,
          climate::CLIMATE_MODE_FAN_ONLY, climate::CLIMATE_MODE_DRY,
      });
      traits.set_supported_fan_modes({
          climate::CLIMATE_FAN_AUTO, climate::CLIMATE_FAN_HIGH,
          climate::CLIMATE_FAN_LOW, climate::CLIMATE_FAN_MEDIUM,
          climate::CLIMATE_FAN_DIFFUSE,
      });
      traits.set_supported_swing_modes({
          climate::CLIMATE_SWING_OFF, climate::CLIMATE_SWING_VERTICAL,
      });

      traits.set_supports_current_temperature(true);
      traits.set_visual_max_temperature(30);
      traits.set_visual_min_temperature(18);
      traits.set_visual_temperature_step(1.0f);

      return traits;
    }

    void control(const ClimateCall &call) override {
      if (call.get_mode().has_value()) this->mode = *call.get_mode();
      if (call.get_target_temperature().has_value()) this->target_temperature = *call.get_target_temperature();
      if (call.get_fan_mode().has_value()) this->fan_mode = *call.get_fan_mode();
      if (call.get_swing_mode().has_value()) this->swing_mode = *call.get_swing_mode();

      this->transmit_state_();
      this->publish_state();
    }

  private:
    void transmit_state_() {
      if (this->mode == climate::CLIMATE_MODE_OFF) {
        ac.off();
      } else {
        ac.on();
        if (this->mode == climate::CLIMATE_MODE_AUTO) ac.setMode(kDaikinAuto);
        else if (this->mode == climate::CLIMATE_MODE_COOL) ac.setMode(kDaikinCool);
        else if (this->mode == climate::CLIMATE_MODE_HEAT) ac.setMode(kDaikinHeat);
        else if (this->mode == climate::CLIMATE_MODE_FAN_ONLY) ac.setMode(kDaikinFan);
        else if (this->mode == climate::CLIMATE_MODE_DRY) ac.setMode(kDaikinDry);
      }
      ac.setTemp(this->target_temperature);
      if (this->fan_mode == climate::CLIMATE_FAN_AUTO) ac.setFan(kDaikinFanAuto);
      else if (this->fan_mode == climate::CLIMATE_FAN_LOW) ac.setFan(kDaikinFanMin);
      else if (this->fan_mode == climate::CLIMATE_FAN_MEDIUM) ac.setFan(kDaikinFanMed);
      else if (this->fan_mode == climate::CLIMATE_FAN_HIGH) ac.setFan(kDaikinFanMax);
      else if (this->fan_mode == climate::CLIMATE_FAN_DIFFUSE) ac.setFan(kDaikinFanQuiet);
      ac.setSwingVertical(this->swing_mode == climate::CLIMATE_SWING_VERTICAL);

      ac.send();
      ESP_LOGD("daikin_custom", "IR Sent: %s", ac.toString().c_str());
    }
};