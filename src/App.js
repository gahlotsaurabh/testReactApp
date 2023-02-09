import logo from './logo.svg';
import './App.css';
import DynamicCrudBaseView from './components/BaseCrud';

function App() {
  const fieldDefinitions = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "age",
      label: "Age",
      type: "number",
    },
    {
      name: "birthday",
      label: "Birthday",
      type: "date",
    },
    {
      name: "newsletter",
      label: "Subscribe to Newsletter",
      type: "checkbox",
    },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    birthday: "",
    newsletter: false,
  };

  return (
    <div className="App">
      <DynamicCrudBaseView
        initialValues={initialValues}
        fieldDefinitions={fieldDefinitions}
      />
    </div>
  );
}

export default App;
