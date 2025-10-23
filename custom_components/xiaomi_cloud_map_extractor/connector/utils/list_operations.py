from functools import reduce
from typing import Any
from vacuum_map_parser_base.map_data import OutputObject


def as_list_dict(o: list[OutputObject] | None) -> list[dict[str, Any]]:
    if o is None:
        return []
    return list(map(lambda mo: mo.as_dict(), o))


def len_len(d: list[list[Any]] | None) -> int:
    return reduce(lambda c, l: c + len(l), d or [], 0)
