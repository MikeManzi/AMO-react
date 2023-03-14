import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { FormContainer } from '../molecules/FormContainer';

const RegistrationForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    onSubmit(data);
  };

  return (
    <FormContainer>
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="firstName" placeholder="First Name" required />
        <Input type="text" name="lastName" placeholder="Last Name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" required />
        <Button type="submit">Sign up</Button>
      </form>
    </FormContainer>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm
