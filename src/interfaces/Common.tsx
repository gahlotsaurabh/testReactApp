import {FormEvent} from "react";


export interface BaseFormFieldDefinitions {
    label: string;
    type: string;
    name: string;
}

  
export interface InitialValues extends FormEvent<HTMLFormElement> {
    [field: string]: any| FormEvent<HTMLFormElement>;
}

export interface Callback {
    (data: any): void;
}