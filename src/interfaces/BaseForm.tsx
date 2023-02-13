import {BaseFormFieldDefinitions, InitialValues} from './Common' 
  
  
  export interface BaseFormProps {
    fieldDefinitions: BaseFormFieldDefinitions[];
    initialValues: InitialValues;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }