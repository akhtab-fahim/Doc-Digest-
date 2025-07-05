import dotenv from "dotenv";

dotenv.config()

export const getSummary = async(text)=>{
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
            "role": "user",
            "content": [
            {
                "type": "text",
                "text": `Summarize the following text : ${text}`
            }]
        }
        ]
    })
});

if(!response.ok){
    throw new Error("API error");
}
//console.log(response);

const data = await response.json()
//console.log(data);
const summary = data.choices[0].message.content;
return summary;

}