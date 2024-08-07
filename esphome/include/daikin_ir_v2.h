#include "esphome.h"
#include "IRremoteESP8266.h"
#include "IRsend.h"
#include "ir_Daikin.h"

const uint16_t kIrLed = 14;
IRDaikinESP ac(kIrLed);

class DaikinAC : public Component, public Climate {
  public:
    sensor::Sensor *sensor_{nullptr};

    void set_sensor(sensor::Sensor *sensor) { this->sensor_ = sensor; }

    void setup() override
    {
      if (this->sensor_) {
        this->sensor_->add_on_state_callback([this](float state) {
          this->current_temperature = state;
          this->publish_state();
        });
        this->current_temperature = this->sensor_->state;
      } else {
        this->current_temperature = NAN;
      }

      auto restore = this->restore_state_();
      if (restore.has_value()) {
        restore->apply(this);
      } else {
        this->mode = climate::CLIMATE_MODE_OFF;
        this->target_temperature = roundf(clamp(this->current_temperature, 18.0f, 30.0f));
        this->fan_mode = climate::CLIMATE_FAN_AUTO;
        this->swing_mode = climate::CLIMATE_SWING_OFF;
      }

      if (isnan(this->target_temperature)) {
        this->target_temperature = 23;
      }

      ac.begin();
      ac.on();
      if (this->mode == CLIMATE_MODE_OFF) {
        ac.off();
      } else if (this->mode == CLIMATE_MODE_AUTO) {
        ac.setMode(kDaikinAuto);
      } else if (this->mode == CLIMATE_MODE_COOL) {
        ac.setMode(kDaikinCool);
      } else if (this->mode == CLIMATE_MODE_HEAT) {
        ac.setMode(kDaikinHeat);
      } else if (this->mode == CLIMATE_MODE_FAN_ONLY) {
        ac.setMode(kDaikinFan);
      } else if (this->mode == CLIMATE_MODE_DRY) {
        ac.setMode(kDaikinDry);
      }
      ac.setTemp(this->target_temperature);
      if (this->fan_mode == CLIMATE_FAN_AUTO) {
        ac.setFan(kDaikinFanAuto);
      } else if (this->fan_mode == CLIMATE_FAN_LOW) {
        ac.setFan(kDaikinFanMin);
      } else if (this->fan_mode == CLIMATE_FAN_MEDIUM) {
        ac.setFan(kDaikinFanMed);
      } else if (this->fan_mode == CLIMATE_FAN_HIGH) {
        ac.setFan(kDaikinFanMax);
      //} else if (this->fan_mode == CLIMATE_FAN_MIDDLE) {
      //  ac.setFan(kDaikinFanMiddle);
      //} else if (this->fan_mode == CLIMATE_FAN_FOCUS) {
      //  ac.setFan(kDaikinFanPowerful);
      } else if (this->fan_mode == CLIMATE_FAN_DIFFUSE) {
        ac.setFan(kDaikinFanQuiet);
      }
      if (this->swing_mode == CLIMATE_SWING_OFF) {
        ac.setSwingVertical(false);
      } else if (this->swing_mode == CLIMATE_SWING_VERTICAL) {
        ac.setSwingVertical(true);
      }
      ac.send();

      ESP_LOGD("DEBUG", "Daikin A/C remote is in the following state:");
      ESP_LOGD("DEBUG", "  %s\n", ac.toString().c_str());
    }

    climate::ClimateTraits traits() {
      auto traits = climate::ClimateTraits();
      traits.set_supported_modes({
          climate::CLIMATE_MODE_OFF,
          climate::CLIMATE_MODE_AUTO,
          climate::CLIMATE_MODE_COOL,
          climate::CLIMATE_MODE_HEAT,
          climate::CLIMATE_MODE_FAN_ONLY,
          climate::CLIMATE_MODE_DRY,
      });
      traits.set_supported_fan_modes({
          climate::CLIMATE_FAN_AUTO,
          climate::CLIMATE_FAN_HIGH,
          climate::CLIMATE_FAN_LOW,
          climate::CLIMATE_FAN_MEDIUM,
          climate::CLIMATE_FAN_DIFFUSE,
      });
      //traits.set_supports_fan_mode_middle(true);
      //traits.set_supports_fan_mode_focus(true);
      traits.set_supported_swing_modes({
          climate::CLIMATE_SWING_OFF,
          climate::CLIMATE_SWING_VERTICAL,
      });
      traits.set_supports_current_temperature(this->sensor_ != nullptr);
      traits.set_supports_two_point_target_temperature(false);
      traits.set_visual_max_temperature(30);
      traits.set_visual_min_temperature(18);
      traits.set_visual_temperature_step(1);

      return traits;
    }

  void control(const ClimateCall &call) override {
    if (call.get_mode().has_value()) {
      ClimateMode mode = *call.get_mode();
      if (mode == CLIMATE_MODE_OFF) {
        ac.off();
      } else if (mode == CLIMATE_MODE_AUTO) {
        ac.on();
        ac.setMode(kDaikinAuto);
      } else if (mode == CLIMATE_MODE_COOL) {
        ac.on();
        ac.setMode(kDaikinCool);
      } else if (mode == CLIMATE_MODE_HEAT) {
        ac.on();
        ac.setMode(kDaikinHeat);
      } else if (mode == CLIMATE_MODE_FAN_ONLY) {
        ac.on();
        ac.setMode(kDaikinFan);
      } else if (mode == CLIMATE_MODE_DRY) {
        ac.on();
        ac.setMode(kDaikinDry);
      }
      this->mode = mode;
    }

    if (call.get_target_temperature().has_value()) {
      float temp = *call.get_target_temperature();
      ac.setTemp(temp);
      this->target_temperature = temp;
    }

    if (call.get_fan_mode().has_value()) {
      ClimateFanMode fan_mode = *call.get_fan_mode();
      if (fan_mode == CLIMATE_FAN_AUTO) {
        ac.setFan(kDaikinFanAuto);
      } else if (fan_mode == CLIMATE_FAN_LOW) {
        ac.setFan(kDaikinFanMin);
      } else if (fan_mode == CLIMATE_FAN_MEDIUM) {
        ac.setFan(kDaikinFanMed);
      } else if (fan_mode == CLIMATE_FAN_HIGH) {
        ac.setFan(kDaikinFanMax);
      //} else if (fan_mode == CLIMATE_FAN_MIDDLE) {
      //  ac.setFan(kDaikinFanMiddle);
      //} else if (fan_mode == CLIMATE_FAN_FOCUS) {
      //  ac.setFan(kDaikinFanPowerful);
      } else if (fan_mode == CLIMATE_FAN_DIFFUSE) {
        ac.setFan(kDaikinFanQuiet);
      }
      this->fan_mode = fan_mode;
    }

    if (call.get_swing_mode().has_value()) {
      ClimateSwingMode swing_mode = *call.get_swing_mode();
      if (swing_mode == CLIMATE_SWING_OFF) {
        ac.setSwingVertical(false);
      } else if (swing_mode == CLIMATE_SWING_VERTICAL) {
        ac.setSwingVertical(true);
      }
      this->swing_mode = swing_mode;
    }

    ac.send();

    this->publish_state();

    ESP_LOGD("DEBUG", "Daikin A/C remote is in the following state:");
    ESP_LOGD("DEBUG", "  %s\n", ac.toString().c_str());
  }
};