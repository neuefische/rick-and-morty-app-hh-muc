import { useState } from "react";

import styled from "styled-components/macro";

export default function SearchForm({ onSendForm }) {
  const [searchValue, setSearchValue] = useState({
    name: "",
    gender: "female",
    toc: false,
  });

  function sendForm(event) {
    event.preventDefault();
    onSendForm(searchValue);
  }

  function handleChange(event) {
    const fieldValue =
      event.target.name === "toc" ? event.target.checked : event.target.value;

    setSearchValue({
      ...searchValue,
      [event.target.name]: fieldValue,
    });
  }

  return (
    <FormWrapper onSubmit={sendForm}>
      <h1>Search</h1>
      <div>
        <label htmlFor="name">
          <strong>Name</strong>
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={searchValue.name}
        />
      </div>

      <h4>Gender</h4>
      <Fieldset>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={searchValue.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={searchValue.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="genderless"
            checked={searchValue.gender === "genderless"}
            onChange={handleChange}
          />
          Genderless
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="unknown"
            checked={searchValue.gender === "unknown"}
            onChange={handleChange}
          />
          Unknown
        </label>
      </Fieldset>

      <label>
        <input type="checkbox" name="toc" onChange={handleChange} />
        <small>
          I'm aware of the TOC and will use the fetched knowledge wisely
        </small>
      </label>

      <div>
        <Button disabled={!searchValue.toc}>go fetch!</Button>
      </div>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: grid;
  gap: 1.25rem;
  max-width: 380px;
  font-family: sans-serif;
  margin: 0 auto;
  h4 {
    margin-bottom: 0.5rem;
  }
  fieldset {
    border: none;
    padding: 0;
  }
  small {
    color: #999;
  }
  input[type="text"],
  input[type="email"] {
    display: block;
  }
  input[type="radio"] {
    margin: 0 0.5rem 1rem 0;
    padding: 0;
    transform: scale(1.5);
  }
  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 0.5rem;
  }
  button:disabled {
    background-color: grey;
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: #8dbf41;
  color: ivory;
  font-size: 1.25rem;
  padding: 1rem 2rem;
`;
