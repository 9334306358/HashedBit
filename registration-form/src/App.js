// RegistrationForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Capture registration date
    const currentDate = new Date().toLocaleString();
    localStorage.setItem('registrationDate', currentDate);

    // Handle other form submission logic (e.g., API calls)
    console.log('User registered:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('name')} />
      <input type="email" placeholder="Email" {...register('email')} />
      <input type="password" placeholder="Password" {...register('password')} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
