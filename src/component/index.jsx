import React, { useState } from "react";
import "../App.css";
const Index = () => {
  const [value, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);
  const handleFirstName = (event) => {
    event.persist();
    setValues((value) => ({
      ...value,
      firstName: event.target.value,
    }));
  };
  const handleLastName = (event) => {
    event.persist();
    setValues((value) => ({
      ...value,
      lastName: event.target.value,
    }));
  };
  const handleEmail = (event) => {
    event.persist();
    setValues((value) => ({
      ...value,
      email: event.target.value,
    }));
  };
  const handlePasssword = (event) => {
    event.persist();
    setValues((value) => ({
      ...value,
      password: event.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.firstName && value.lastName && value.email && value.password) {
      setValid(true);
    }

    setValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setSubmitted(false);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {setValid && valid ? (
          <div class="success-message">Successfull Thank you!</div>
        ) : null}
        <input
          value={value.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFirstName}
        />
        {submitted && !value.firstName && <span>Enter a first name</span>}
        <input
          value={value.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastName}
        />
        {submitted && !value.lastName && <span>Enter a last name</span>}
        <input
          value={value.email}
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleEmail}
        />
        {submitted && !value.email && <span> Enter an email address</span>}
        <input
          value={value.password}
          id="password"
          class="form-field"
          type="password"
          placeholder="password"
          name="password"
          onChange={handlePasssword}
        />
        {submitted && !value.password && <span> Enter a password</span>}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Index;
