import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";


export const extractText = async (filePath) => {
  console.log(filePath);
  
  try {
    // Check if file exists=
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const ext = path.extname(filePath).toLowerCase();

    if (ext === ".pdf") {
      const data = new Uint8Array(fs.readFileSync(filePath));
      const pdf = await pdfjsLib.getDocument(data).promise;

      let text = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(item => item.str).join(" ") + "\n";
      }
      return text;
   }

    if (ext === ".docx") {
      const result = await mammoth.extractRawText({ path: filePath });
      return result.value;
    }

    if (ext === ".txt") {
      return fs.readFileSync(filePath, "utf8");
    }

    throw new Error(`Unsupported file type :: extractText.js`);
    
  } catch (error) {
    console.error(`Error extracting text: ${error.message}`);
    throw error;
  }
};
