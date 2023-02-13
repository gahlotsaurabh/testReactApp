import {BaseFormFieldDefinitions, InitialValues, Callback} from './Common' 


export interface TableData{
  [field: string]: any;
}

export interface TableColumns{
    [field: string]: any;
}

export interface FormData{
    [field: string]: any;
}

export interface ShowForm{
    [field: string]: boolean;
}

 
export interface BaseCrudProps {
  fieldDefinitions: BaseFormFieldDefinitions[];
  data:TableData,
  columns:TableColumns,
  formData:InitialValues,
  showForm:ShowForm,
  handleSubmit:Callback,
  handleCreate:Callback,
}