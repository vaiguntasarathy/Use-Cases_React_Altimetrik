import React, { useState } from "react";
import "./logo.css";

const Logo = () => {
  const logos = [
    {
      id: 1,
      name: "maruti",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg",
    },
    {
      id: 2,
      name: "TATA",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg",
    },
    {
      id: 3,
      name: "kia",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg",
    },
    {
      id: 4,
      name: "toyata",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg",
    },
    {
      id: 5,
      name: "hyndai",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg",
    },
    {
      id: 6,
      name: "mahindra",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg",
    },

    {
      id: 7,
      name: "honda",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/honda.jpg",
    },
    {
      id: 8,
      name: "mg",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mg.jpg",
    },
    {
      id: 9,
      name: "skoda",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/skoda.jpg",
    },
    {
      id: 10,
      name: "jeep",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/jeep.jpg",
    },
    {
      id: 11,
      name: "renault",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/renault.jpg",
    },
    {
      id: 12,
      name: "nissan",
      url: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/nissan.jpg",
    },
  ];

  const [model, setModel] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    color: "",
    location: "",
    year: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const clic = (clickedModel) => {
    setModel(true);
    setFormData((prevData) => ({ ...prevData, brand: clickedModel }));
  };
  console.log("1", formData);
  const formInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("2", formData);
  const submit = (e) => {
    e.preventDefault();
    if (formData.brand == "") {
      alert("click brand");
      return;
    }
    if (formData.model == "" || formData.color=="" || formData.location=="") {
      alert("ENTER ALL DETAILSs");
      return;
    }

    // Handle form submission logic here

    setSubmittedData((prevData) => [...prevData, formData]);

    setFormData({ brand: "", model: "", color: "", location: "", year: "" });

    console.log("Submitted for model:", formData.model);
  };

  return (
    <div>
      <div className="logos">
        {logos.map((logo, id) => (
          <div onClick={() => clic(logo.name)} className="logo" key={id}>
            <img src={logo.url} />
          </div>
        ))}
      </div>

      {model && (
        <div className="form-container">
          <form onSubmit={submit}>
                <div>
                  <label>Model</label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={formInput}
                  />
                </div>
                <div>
                  <label>Color</label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={formInput}
                  />
                </div>

                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={formInput}
                  />
                </div>
                <div>
                  <label>Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={formInput}
                  />
                </div>

                <div>
                  <label>No of Owners</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Year of manufacture</label>
                  <input type="text" />
                </div>

                <div>
                  <label>Tranmission</label>
                  <input type="text" />
                </div>
                <div>
                  <label>kms</label>
                  <input type="text" />
                </div>
                
                <button  type="submit">Submit</button>
                

            
            <input
                type="text"
                name="model"
                value={formData.brand}
                onChange={formInput}
                style={{ display: "none" }}
              />
          </form>
        </div>
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
