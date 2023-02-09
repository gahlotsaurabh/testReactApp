// import React from "react";

// const Table = ({ items, fields, onEdit, onDelete }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           {fields.map((field) => (
//             <th key={field.name}>{field.label}</th>
//           ))}
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map((item) => (
//           <tr key={item[displayField]}>
//             {fields.map((field) => (
//               <td key={field.name}>{item[field.name]}</td>
//             ))}
//             <td>
//               <button onClick={() => onEdit(item)}>Edit</button>
//               <button onClick={() => onDelete(item)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
