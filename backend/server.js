import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.log("API KEY Missing");
  process.exit(1);
}

app.post("/chat", async (req, res) => {
  try {
    const { message, scores } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message required" });
    }

    const prompt = `
You are a sustainability AI assistant.

Composite: ${scores?.composite ?? "N/A"}
Carbon: ${scores?.carbon ?? "N/A"}
Water: ${scores?.water ?? "N/A"}
Energy: ${scores?.energy ?? "N/A"}
Waste: ${scores?.waste ?? "N/A"}
Lifestyle: ${scores?.lifestyle ?? "N/A"}

User Question:
${message}

Give concise sustainability advice.
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response";

    res.json({ reply });

  } catch (error) {
    res.status(500).json({
      reply: "Server Error",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
