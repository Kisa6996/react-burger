import { ChangeEvent, useState } from "react";

interface IInput {
  password?: string;
  email?: string;
  sms?: string;
  name?: string
}
export function useForm() {
  const [error, setError] = useState<boolean>(false);
  const [values, setValues] = useState<IInput>({ email: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
    setError(false);
  };
  return { values, handleChange, setError, error };
}
