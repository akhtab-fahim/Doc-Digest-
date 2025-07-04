import mammoth from "mammoth"


export const extractText = ()=>{
    mammoth.extractRawText({path: "public"})
        .then(function(result){
            var text = result.value; // The raw text
            var messages = result.messages;
        })
        .catch(function(error) {
            console.error(error);
        });
    
}