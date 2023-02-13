import React, { useState } from 'react';

interface Field {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {
  fields: Field[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const BaseForm: React.FC<Props> = ({ fields, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BaseForm;
