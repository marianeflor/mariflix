import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const key = e.target.getAttribute('name');
    const { value } = e.target;

    setValues({
      ...values,
      [key]: value, // name: 'valor'
    });
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    handleChange,
    values,
    clearForm,
  };
};

export default useForm;
