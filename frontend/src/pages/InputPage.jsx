import { useState, useContext } from "react";
import { SustainabilityContext } from "../context/SustainabilityContext";
import { calculateScore } from "../utils/calculateScore";
import "./InputPage.css";

function InputPage() {

  const { setScores } = useContext(SustainabilityContext);

  const [formData, setFormData] = useState({
    travel: "car",
    electricity: 10,
    water: 20,
    waste: "plastic",
    food: "veg",
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    const result = calculateScore(formData);

    setScores(result);

    alert("Scores Updated!");
  };

  return (

    <div className="inputContainer">

      <form
        className="inputForm"
        onSubmit={handleSubmit}
      >

        <h1>Daily Sustainability Input</h1>
      
        {/* Travel */}

        <div className="formGroup">

          <label>Travel Mode</label>

          <select
            onChange={(e)=>
              setFormData({
                ...formData,
                travel:e.target.value
              })
            }
          >
            <option value="car">Car</option>
            <option value="metro">Metro</option>
            <option value="walk">Walk</option>
          </select>

        </div>


        {/* Electricity */}

        <div className="formGroup">

          <label>Electricity Units</label>

          <input
            type="number"

            onChange={(e)=>
              setFormData({
                ...formData,
                electricity:Number(e.target.value)
              })
            }
          />

        </div>


        {/* Water */}

        <div className="formGroup">

          <label>Water Usage</label>

          <input
            type="number"

            onChange={(e)=>
              setFormData({
                ...formData,
                water:Number(e.target.value)
              })
            }
          />

        </div>


        {/* Waste */}

        <div className="formGroup">

          <label>Waste Type</label>

          <select

            onChange={(e)=>
              setFormData({
                ...formData,
                waste:e.target.value
              })
            }
          >
            <option value="plastic">Plastic</option>
            <option value="organic">Organic</option>
          </select>

        </div>


        {/* Food */}

        <div className="formGroup">

          <label>Food Type</label>

          <select
            onChange={(e)=>
              setFormData({
                ...formData,
                food:e.target.value
              })
            }
          >
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>

        </div>


        <button type="submit">

          Calculate Sustainability Score

        </button>

      </form>

    </div>

  );

}

export default InputPage;
