import { useState } from "react";

const useUpdateInputs = (initialState) => {
  const [fields, setFields] = useState(initialState);

  const updateFields = (event) => {
    const { name, value } = event.target;
    if (!name || !value) return;

    setFields((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  return [fields, updateFields, setFields];
};

export default useUpdateInputs;
