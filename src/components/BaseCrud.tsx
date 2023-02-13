import DynamicForm from "./BaseForm";
import React, {FC} from "react";
import Table from './Table'
import {BaseCrudProps} from '../interfaces'

const DynamicCrudBaseView: FC<BaseCrudProps> = ({ 
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