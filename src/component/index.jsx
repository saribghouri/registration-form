import React, { useState } from "react";
import "../App.css";
const Index = () => {
  const [value, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(true);
  const [firstName, setfirstName] = useState(true);
  const [lastName, setlastName] = useState(true);
  const [email, setemail] = useState(true);
  const [password, setpassword] = useState(true);

  const [valid, setValid] = useState(false);
  const handleFirstName = (event) => {
    event.persist();
    if (event.target.value) {
      setValues((value) => ({
        ...value,
        firstName: event.target.value,
      }));
      setfirstName(true);
    } else {
      setfirstName(false);
    }
  };
  const handleLastName = (event) => {
    event.persist();
    if (event.target.value) {
      setValues((value) => ({
        ...value,
        lastName: event.target.value,
      }));
      setlastName(true);
    } else {
      setlastName(false);
    }
  };
  const handleEmail = (event) => {
    event.persist();
    if (event.target.value) {
      setValues((value) => ({
        ...value,
        email: event.target.value,
      }));
      setemail(true);
    } else {
      setemail(false);
    }
  };
  const handlePasssword = (event) => {
    event.persist();
    if (event.target.value) {
      setValues((value) => ({
        ...value,
        password: event.target.value,
      }));
      setpassword(true);
    } else {
      setpassword(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.firstName && value.lastName && value.email && value.password) {
      setValid(true);
      setfirstName(true);
      setlastName(true);
      setemail(true);
      setpassword(true);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } else {
      if (!value.firstName) {
        setfirstName(false);
      }
      if (!value.lastName) {
        setlastName(false);
      }
      if (!value.email) {
        setemail(false);
      }
      if (!value.password) {
        setpassword(false);
      }
    }
    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
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
        {/* {submitted && !value.firstName && <span>Enter a first name</span>} */}
        {firstName != true ? <span>Enter a first name</span> : null}
        <input
          value={value.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastName}
        />

        {lastName != true ? <span>Enter a last name</span> : null}
        <input
          value={value.email}
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleEmail}
        />
        {email != true ? <span>Enter a email</span> : null}
        <input
          value={value.password}
          id="password"
          class="form-field"
          type="password"
          placeholder="password"
          name="password"
          onChange={handlePasssword}
        />
        {password != true ? <span>Enter a password</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Index;
