import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  const fields = {
    type,
    value,
    onChange,
  };

  return {
    fields,
    value,
    reset,
  };
};
