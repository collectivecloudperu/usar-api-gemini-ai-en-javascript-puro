const API_KEY = "12345";

async function consultarGemini(prompt) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    },
  );
  const data = await res.json();
  console.log(
    data.candidates?.[0]?.content?.parts?.[0]?.text || "Sin respuesta",
  );
}

consultarGemini("Donde está Egipto?");
