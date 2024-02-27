import {useState, FormEvent} from "react";

interface FormValues {
  [key: string]: string | boolean | null;
}

interface Validation {
  [key: string]: string;
}

const useCustomForm = (defaultValues: FormValues = {}, validation: Validation = {}) => {
  const [form, setForm] = useState<FormValues>({...defaultValues});
  const [errors, setErrors] = useState<Validation>({});

  const resetForm = () => {
    setForm({...defaultValues});
  };

  const handleBlur = (inputName: string, inputValue: string | boolean | null) => {
    let oldErrors = {...errors};

    if (inputValue) {
      if (Array.isArray(inputValue) && inputValue.length === 0) {
        oldErrors[inputName] = validation[inputName];
      }
      errors &&
        Object.entries(errors)?.forEach(([key]) => {
          if (key === inputName && inputValue) {
            delete oldErrors[key];
          }
        });
    } else {
      oldErrors[inputName] = validation[inputName];
    }

    return oldErrors;
  };

  const handleChange = (name: string, value: string | boolean | null) => {
    setForm({...form, [name]: value});
    let oldErrors = handleBlur(name, value);

    setErrors({...oldErrors});
  };

  const changeSelectedOption = (name: string, value: string | boolean | null) => {
    setForm({...form, [name]: value});
    let oldErrors = handleBlur(name, value);

    setErrors({...oldErrors});
  };

  const checkFormValidation = async (form: FormValues, validation: Validation) => {
    let newError: Validation = {};

    if (Object.entries(validation).length > 0) {
      validation &&
        Object.entries(validation)?.forEach(([validationKey, validationValue]) => {
          form &&
            Object.entries(form)?.forEach(([formKey, formValue]) => {
              if (
                validationKey === formKey &&
                ((typeof formValue === "string" && formValue.length === 0) ||
                  formValue === false ||
                  formValue === "")
              ) {
                newError[validationKey] = validationValue;
              }
            });
        });
    }

    return newError;
  };

  const handleSubmit = async (e: FormEvent, onSubmit: (form: FormValues) => void) => {
    e.preventDefault();
    let checkResponse = await checkFormValidation(form, validation);

    if (Object.keys(checkResponse).length > 0) {
      setErrors({...checkResponse});
    } else {
      await onSubmit(form);
    }
  };

  const prepareFormData = (formData: FormValues) => {
    let form = new FormData();

    formData &&
      Object.entries(formData)?.forEach(([key, value]) => {
        form.append(key, String(value));
      });

    return form;
  };

  const showFormDataAllElement = (formData: FormData) => {
    let newData: FormValues = {};

    // @ts-ignore
    for (var pair of formData.entries()) {
      newData[pair[0]] = String(pair[1]);
    }

    return newData;
  };

  return {
    form,
    errors,
    resetForm,
    handleChange,
    checkFormValidation,
    setErrors,
    setForm,
    changeSelectedOption,
    handleSubmit,
    prepareFormData,
    showFormDataAllElement,
  };
};

export default useCustomForm;

/*
const validationRules = {
  username: 'Username is required',
  password: 'Password is required',
};

const { form, errors, handleChange, handleSubmit } = useForm({ username: '', password: '' }, validationRules);

<form onSubmit={(e) => handleSubmit(e, submitForm)}>
  <input name="username" value={form.username} onChange={(e) => handleChange(e.target.name, e.target.value)} />
  {errors.username && <p>{errors.username}</p>}

  <input name="password" type="password" value={form.password} onChange={(e) => handleChange(e.target.name, e.target.value)} />
  {errors.password && <p>{errors.password}</p>}

  <button type="submit">Submit</button>
</form>


<form onSubmit={(e) => handleSubmit(e, submitForm)}>
  <input name="username" value={form.username} onChange={(e) => handleChange(e.target.name, e.target.value)} />
  {errors.username && <p>{errors.username}</p>}

  <input name="password" type="password" value={form.password} onChange={(e) => handleChange(e.target.name, e.target.value)} />
  {errors.password && <p>{errors.password}</p>}

  <button type="submit">Submit</button>
</form>

const submitForm = (form) => {
  if (Object.keys(errors).length > 0) {
    console.log('Form has errors, not submitting');
  } else {
    console.log('Submitting form', form);
  }
};
*/
