import React from "react";
import BaseCRUD from "./BaseCrud";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
];

const displayField = "name";

const formData = {
  name: "",
  email: "",
  password: "",
};

const endpoint = "http://localhost:3000/users";

const Users = () => {
  return (
    <div>
      <BaseCRUD
        entityName="User"
        fields={fields}
        displayField={displayField}
        formData={formData}
        endpoint={endpoint}
      />
    </div>
  );
};

export default Users;
