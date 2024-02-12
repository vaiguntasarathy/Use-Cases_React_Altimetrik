// import React from "react";
// import "./logo.css";
// import { useState } from "react";

// const Logo = () => {
//   const logos = [
//     { id: 1, name: "Logo 1", url: "" },
//     { id: 2, name: "Logo 2" },
//     { id: 3, name: "Logo 3" },
//     { id: 1, name: "Logo 1" },
//     { id: 2, name: "Logo 2" },
//     { id: 3, name: "Logo 3" },

//     { id: 4, name: "Logo 4" },
//     { id: 5, name: "Logo 5" },
//     { id: 6, name: "Logo 6" },
//     { id: 7, name: "Logo 7" },
//     { id: 8, name: "Logo 8" },
//     { id: 9, name: "Logo 9" },
//     { id: 10, name: "Logo 10" },
//     { id: 11, name: "Logo 12" },
//     { id: 12, name: "Logo 13" },

//     // Add more logos as needed
//   ];
//   // Other data for ResultPage filters

//   const [model, setModel] = useState(false);
//   const [formData,setFormData] = useState([]);
  

//   const clic = () => {
//    setModel(true);
//   };
//   const formInput=(e)=>{setFormData(e.target.value)

//   }
//   const submit=()=>{setFormData()}
//   return (
//     <div>
//       <div className="logos">
//         {logos.map((logo, id) => {
//           return (
//             <div onClick={clic} className="logo" key={id}>
//               {logo.name}
//             </div>
//           );
//         })}
//       </div>
// {model&&
//       <form onSubmit={submit}>
//         <label>model</label>
//         <input type="text"   value={formData} onchange={formInput}></input>
//         <input type="text"></input>

//         <label>color</label>
//         <input type="text"   value={color} onchange={formInput}></input>
//         <label>location</label>

//         <input type="text"   value={location} onchange={formInput}></input>


//         <label>year</label>
//         <input type="text"   value={year} onchange={formInput}></input>
//         {/* <label>model</label>
//         <input type="text"   value={formData} onchange={formInput}></input>


//         <label>model</label>
//         <input type="text"   value={formData} onchange={formInput}></input>
//         <input type="text"></input>
        
//         <input type="text"></input>
//         <label>model</label>
//         <input type="text"></input>
//         <label>model</label>
//         <input type="text"></input> */}
//       </form >}
//     </div>
//   );
// };

// export default Logo;
