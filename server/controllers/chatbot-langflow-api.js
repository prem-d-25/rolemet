const LANGFLOW_API_URL =
  "https://astra.datastax.com/api/v1/run/6b381684-754f-4598-a8ca-1af8c8e74996?stream=false";

const AUTH_TOKEN =
  "Bearer AstraCS:fdoMyyFIRAgxCBHKNzbrkeEj:21fb8fbc5ef487abb2017931f2231150647e9467a8fd205efd21cd0378b19324";

const chatBotResponse = async (data) => {
  try {
    const response = await fetch(LANGFLOW_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": AUTH_TOKEN,
      },
      body: JSON.stringify({
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "ChatInput-jhfhH": {
            background_color: "",
            chat_icon: "",
            files: "",
            input_value: "ass a fresher can i get job in react ?",
            sender: "User",
            sender_name: "User",
            session_id: "",
            should_store_message: true,
            text_color: "",
          },
          "Prompt-kjp9U": {
            template: "You are chat Bot \ngive me text answer ",
            tool_placeholder: "",
          },
          "ChatOutput-HPxfa": {
            background_color: "",
            chat_icon: "",
            clean_data: true,
            data_template: "{text}",
            input_value: "",
            sender: "Machine",
            sender_name: "AI",
            session_id: "",
            should_store_message: true,
            text_color: "",
          },
          "HuggingFaceModel-smXCj": {
            huggingfacehub_api_token: "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",
            inference_endpoint: "https://api-inference.huggingface.co/models/",
            input_value: "",
            max_new_tokens: 512,
            model_id: "mistralai/Mistral-7B-Instruct-v0.3",
            model_kwargs: {},
            repetition_penalty: null,
            retry_attempts: 1,
            stream: false,
            system_message: "",
            task: "text-generation",
            temperature: 0.8,
            top_k: null,
            top_p: 0.95,
            typical_p: 0.95,
          },
        },
      }),
    });
    const result = await response.json();
    let langflowOutput = result?.outputs?.[0]?.outputs?.[0]?.artifacts?.message;

    console.log(langflowOutput)

    return {
      result: langflowOutput
    };
  } catch (error) {
    console.error("Error calling Langflow API:", error);
    throw error;
  }
};

module.exports = chatBotResponse;
