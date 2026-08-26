from typing import Any

from vacuum_map_parser_base.map_data import OutputObject


def path_extractor(json: dict[str, Any] | list[Any], path: str) -> Any | None:
    def extractor_arr(json_obj: dict[str, Any] | list[Any], path_array: list[str]) -> Any | None:
        if json_obj is None:
            return None
        if path_array[0].isdigit():
            current_index = int(path_array[0])
            if current_index >= len(json_obj):
                return None
            if len(path_array) > 1:
                return extractor_arr(json_obj[current_index], path_array[1:])
            return json_obj[current_index]
        if path_array[0] not in json_obj:
            return None
        if len(path_array) > 1:
            return extractor_arr(json_obj[path_array[0]], path_array[1:])
        return json_obj[path_array[0]]

    try:
        return extractor_arr(json, path.split("."))
    except Exception:
        return None


def as_dict_of_dict(o_dict: dict[Any, OutputObject] | None) -> dict[Any, dict[str, Any]]:
    if o_dict is None:
        return {}
    return {k: v.as_dict() for k, v in o_dict.items()}
