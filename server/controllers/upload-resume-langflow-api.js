const langFlowGetScore = async (resumeText = "", jobDescription = "") => {
  try {
    const safeResume = resumeText?.trim() || "No resume text provided";
    const safeJob = jobDescription?.trim() || "No job description provided";

    const payload = {
      input_value: `Resume:\n${safeResume}\n\nJob Description:\n${safeJob}`,
      input_type: "text",
      output_type: "chat",
    };

    const response = await fetch(
      "https://api.langflow.astra.datastax.com/lf/8ded5825-8746-44f2-b978-5816d6f72c9f/api/v1/run/b5df6798-d2c4-4f4a-98e0-2ee64fe760cf",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.AUTH_TOKEN,
        },
        body: JSON.stringify(payload),
      }
    );

    const text = await response.text();
    console.log("LangFlow raw response:", text);

    if (!text) return { score: null, suggestions: [], analysis: {}, raw: null };

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.log("LangFlow did not return JSON:", text);
      return { score: null, suggestions: [], analysis: {}, raw: text };
    }

    const langflowOutput = data?.outputs?.[0]?.outputs?.[0]?.artifacts?.message;
    if (!langflowOutput) return { score: null, suggestions: [], analysis: {}, raw: data };

    console.log("LangFlow extracted message:", langflowOutput);

    // --- Remove any leading/trailing whitespace and optional Markdown ```
    let cleanedMessage = langflowOutput.trim();

    // Remove ```json ... ``` if present
    const markdownMatch = cleanedMessage.match(/```json([\s\S]*?)```/);
    if (markdownMatch) {
      cleanedMessage = markdownMatch[1].trim();
    }

    // Try parsing as JSON
    let parsed;
    try {
      parsed = JSON.parse(cleanedMessage);
    } catch (e) {
      console.log("Failed to parse JSON from LangFlow output:", cleanedMessage);
      return { score: null, suggestions: [], analysis: {}, raw: cleanedMessage };
    }

    // Return structured response
    return {
      score: parsed?.resume_match_score ?? null,
      suggestions: parsed?.improvement_suggestions ?? [],
      analysis: parsed?.analysis ?? {},
      raw: parsed, // full parsed object for debugging
    };

  } catch (err) {
    console.error("LangFlow Parse Error:", err);
    return { score: null, suggestions: [], analysis: {}, raw: null };
  }
};

module.exports = langFlowGetScore;
