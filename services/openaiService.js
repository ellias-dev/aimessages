const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateHokku(name, meal, season) {
    try {
        const response = await client.responses.create({
            model: "gpt-5.5",
            input: `Write a short hokku in English about ${name} eating or cooking ${meal} during ${season}.`,
        });

        return response.output_text;
    } catch (err) {
        console.error("OpenAI error:", err);
        throw new Error("Failed to generate hokku");
    }
}

module.exports = { generateHokku };