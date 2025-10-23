from typing import Any


def path_extractor(json: dict[str, Any], path: str) -> Any | None:
    def extractor_arr(json_obj: dict[str, Any], path_array: list[str]) -> Any | None:
        if json_obj is None:
            return None
        if path_array[0] not in json_obj:
            return None
        if len(path_array) > 1:
            return extractor_arr(json_obj[path_array[0]], path_array[1:])
        return json_obj[path_array[0]]

    try:
        return extractor_arr(json, path.split("."))
    except:
        return None
