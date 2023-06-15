import { useState } from "react";

export function useForm(inputValues = {}) {
  const [error, setError] = useState(false);
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setError(false)
  };
  return { values, handleChange, setError, error };
}
