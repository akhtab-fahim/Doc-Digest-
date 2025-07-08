import dotenv from "dotenv"
dotenv.config()

export const chatWithAi = async(question,context)=>{
    
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.LLM_API}`,
            // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
            // "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "mistralai/mistral-small-3.2-24b-instruct:free",
            "messages": [
        {
        "role": "system",
        "content": `
                You are a helpful, concise assistant. 
                You must only answer questions that are relevant to the given context. 
                If the user says something offensive, hateful, or irrelevant, politely refuse to answer.
                If the question cannot be answered from the context, say: 
                "I'm sorry, but the information you asked for is not available in the provided document context."
                Always keep your answers short and clear.
                If the question includes inappropriate or abusive language, refuse to answer and remind the user to be respectful.
                    `.trim()
        },
        {
        "role": "user",
        "content": `What will be the answer to this question: ${question}
                    Answer using this context: ${context} also try to anwer beside the context if you can`
        }]
    })

})

    if(!response.ok){
    throw new Error("API error");
    }
    //console.log(response);

    const data = await response.json()
    //console.log(data);
    const summary = data.choices[0].message.content;
    return summary;
}