from abc import ABC
from typing import Self

from .vacuum_base import BaseXiaomiCloudVacuum
from ...utils.dict_operations import path_extractor


class BaseXiaomiCloudVacuumV2(BaseXiaomiCloudVacuum, ABC):

    async def get_map_url(self: Self, map_name: str) -> str | None:
        url = self._connector.get_api_url(self._server) + '/v2/home/get_interim_file_url'
        params = {
            "data": f'{{"obj_name":"{self._user_id}/{self._device_id}/{map_name}"}}'
        }
        api_response = await self._connector.execute_api_call_encrypted(url, params)
        url = path_extractor(api_response, "result.url")
        if url is None:
            return await self.get_fallback_map_url(map_name)
        return url

    async def get_fallback_map_url(self: Self, map_name: str) -> str | None:
        url = self._connector.get_api_url(self._server) + '/v2/home/get_interim_file_url_pro'
        params = {
            "data": f'{{"obj_name":"{self._user_id}/{self._device_id}/{map_name}"}}'
        }
        api_response = await self._connector.execute_api_call_encrypted(url, params)
        return path_extractor(api_response, "result.url")
