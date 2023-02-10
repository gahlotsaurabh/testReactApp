import DynamicForm from "./BaseForm";
import React, { useState, useEffect } from "react";
import Table from './Table'

const DynamicCrudBaseView = ({
  fieldDefinitions,
  data,
  columns,
  formData,
  showForm,
  handleSubmit,
  handleCreate,
}) => {

  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      {showForm && (
        <DynamicForm
          fieldDefinitions={fieldDefinitions}
          initialValues={formData}
          handleSubmit={handleSubmit}
        />
      )}
      <Table
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default DynamicCrudBaseView;