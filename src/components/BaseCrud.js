// import React, { useState } from "react";
// import { Formik, Form } from "formik";
// // import { useHistory } from "react-router-dom";

// const DynamicCrudBaseView = (props) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedData, setSelectedData] = useState({});
//   // const history = useHistory();

//   const handleEdit = (data) => {
//     setIsEditing(true);
//     setSelectedData(data);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setSelectedData({});
//   };

//   const handleSubmit = (values) => {
//     // Call the appropriate CRUD operation based on the current state
//     if (isEditing) {
//       // Update the existing data
//       console.log("Updating data: ", values);
//     } else {
//       // Create a new data
//       console.log("Creating new data: ", values);
//     }
//     setIsEditing(false);
//     setSelectedData({});
//   };

//   const handleDelete = (data) => {
//     console.log("Deleting data: ", data);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <Formik
//           initialValues={selectedData}
//           onSubmit={handleSubmit}
//           enableReinitialize
//         >
//           {({ values, handleChange, handleBlur, handleSubmit }) => (
//             <Form>
//               {props.fieldDefinitions.map((field, index) => (
//                 <div key={index}>
//                   <label htmlFor={field.name}>{field.label}</label>
//                   <input
//                     type={field.type}
//                     name={field.name}
//                     id={field.name}
//                     value={values[field.name]}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                 </div>
//               ))}
//               <button type="submit">Save</button>
//               <button type="button" onClick={handleCancel}>
//                 Cancel
//               </button>
//             </Form>
//           )}
//         </Formik>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               {props.fieldDefinitions.map((field, index) => (
//                 <th key={index}>{field.label}</th>
//               ))}
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.data.map((data) => (
//               <tr key={data.id}>
//                 {props.fieldDefinitions.map((field, index) => (
//                   <td key={index}>{data[field.name]}</td>
//                 ))}
//                 <td>
//                   <button onClick={() => handleEdit(data)}>Edit</button>
//                   <button onClick={() => handleDelete(data)}>Delete</button>
//                 </td>     </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <button onClick={() => setIsEditing(true)}>Add</button>
//     </div>
//   );
// };

// export default DynamicCrudBaseView;


import DynamicForm from "./BaseForm";
import React, { useState, useEffect } from "react";

const DynamicCrudBaseView = (props) => {
  const [formData, setFormData] = useState(props.initialValues);
  const [dataList, setDataList] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (values) => {
    if (selectedData) {
      const updatedList = dataList.map((item) => {
        if (item.id === selectedData.id) {
          return { ...item, ...values };
        }
        return item;
      });
      setDataList(updatedList);
      setSelectedData(null);
    } else {
      setDataList([...dataList, { id: dataList.length + 1, ...values }]);
    }
    setFormData(props.initialValues);
    setShowForm(false);
  };

  const handleCreate = () => {
    setFormData(props.initialValues);
    setShowForm(true);
  };

  const handleUpdate = (data) => {
    setFormData(data);
    setSelectedData(data);
    setShowForm(true);
  };

  const handleDelete = (data) => {
    setDataList(dataList.filter((item) => item.id !== data.id));
  };

  useEffect(()=>{

  },[dataList])

  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      {showForm && (
        <DynamicForm
          fieldDefinitions={props.fieldDefinitions}
          initialValues={formData}
          handleSubmit={handleSubmit}
        />
      )}
      <table>
        <thead>
          <tr>
            {props.fieldDefinitions.map((field) => (
              <th key={field.name}>{field.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data) => (
            <tr key={data.id}>
              {props.fieldDefinitions.map((field) => (
                <td key={field.name}>{data[field.name]}</td>
              ))}
              <td>
                <button onClick={() => handleUpdate(data)}>Update</button>
                <button onClick={() => handleDelete(data)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicCrudBaseView;