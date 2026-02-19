import { useState, useContext } from "react";
import { SustainabilityContext } from "../context/SustainabilityContext";
import { calculateScore } from "../utils/calculateScore";

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
    <form onSubmit={handleSubmit}>
      <h2>Daily Input</h2>

      <label>Travel Mode:</label>
      <select
        onChange={(e) =>
          setFormData({ ...formData, travel: e.target.value })
        }
      >
        <option value="car">Car</option>
        <option value="metro">Metro</option>
        <option value="walk">Walk</option>
      </select>

      <br /><br />

      <label>Electricity Units:</label>
      <input
        type="number"
        onChange={(e) =>
          setFormData({ ...formData, electricity: Number(e.target.value) })
        }
      />

      <br /><br />

      <label>Water Usage:</label>
      <input
        type="number"
        onChange={(e) =>
          setFormData({ ...formData, water: Number(e.target.value) })
        }
      />

      <br /><br />

      <label>Waste Type:</label>
      <select
        onChange={(e) =>
          setFormData({ ...formData, waste: e.target.value })
        }
      >
        <option value="plastic">Plastic</option>
        <option value="organic">Organic</option>
      </select>

      <br /><br />

      <label>Food Type:</label>
      <select
        onChange={(e) =>
          setFormData({ ...formData, food: e.target.value })
        }
      >
        <option value="veg">Veg</option>
        <option value="nonveg">Non-Veg</option>
      </select>

      <br /><br />

      <button type="submit">Calculate</button>
    </form>
  );
}

export default InputPage;
