import { useState } from 'react';

/**
 * CustomHook that allows the handling of forms
 * @param {T} initialState Initial value of the form
 * @param {(form: T) => void} onSubmit Event to submit the form
 * @returns form & setForm & handleInputChange & clearForm & submitForm
 */

const useForm = <T>(initialState: T, onSubmit: (form: T) => void) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const getValue = () => {
      if (target instanceof HTMLTextAreaElement) return target.value;

      if (target instanceof HTMLSelectElement) return target.value;

      switch (target.type) {
        case 'checkbox':
          return target.checked;

        default:
          return target.value;
      }
    };

    setForm({
      ...form,
      [target.name]: getValue(),
    });
  };

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(form);
  };

  const clearForm = (clearValues?: T) => setForm(clearValues || initialState);

  return { form, setForm, handleInputChange, clearForm, submitForm };
};

export default useForm;
