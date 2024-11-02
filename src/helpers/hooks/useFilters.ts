import { useState } from "react";
import { ParamsType } from "../../api/apiNews";

export const useFilters = (initialyFilters: ParamsType) => {
  const [filters, setFilters] = useState<ParamsType>(initialyFilters);

  const changeFilter = (key: string, value: any) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilter }
};
