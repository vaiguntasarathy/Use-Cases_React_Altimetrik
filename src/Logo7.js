import React, { useState } from "react";
import "./logo.css";

const Logo = () => {
  const logos = [
    { id: 1, name: "Logo 1", url: "" },
    { id: 2, name: "Logo 2" },
    { id: 3, name: "Logo 3" },
    { id: 1, name: "Logo 1" },
    { id: 2, name: "Logo 2" },
    { id: 3, name: "Logo 3" },

    { id: 4, name: "Logo 4" },
    { id: 5, name: "Logo 5" },
    { id: 6, name: "Logo 6" },
    { id: 7, name: "Logo 7" },
    { id: 8, name: "Logo 8" },
    { id: 9, name: "Logo 9" },
    { id: 10, name: "Logo 10" },
    { id: 11, name: "Logo 12" },
    { id: 12, name: "Logo 13" },
  ];

  const [model, setModel] = useState(false);
  const [formData, setFormData] = useState({
    model: "",
    color: "",
    location: "",
    year: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const clic = () => {
    setModel(true);
  };

  const formInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({ model: "", color: "", location: "", year: "" });
  };

  return (
    <div>
      <div className="logos">
        {logos.map((logo, id) => (
          <div onClick={clic} className="logo" key={id}>
            {logo.name}
          </div>
        ))}
      </div>

      {model && (
        <form onSubmit={submit}>
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={formInput}
          />

          <label>Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={formInput}
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={formInput}
          />

          <label>Year</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={formInput}
          />

          <button type="submit">Submit</button>
        </form>
      )}

      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>{JSON.stringify(data)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Logo;
