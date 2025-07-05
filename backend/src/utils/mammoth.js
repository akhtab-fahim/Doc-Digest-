import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import pdf from "pdf-parse";

export const extractText = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".pdf") {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(dataBuffer);
    return pdfData.text;
  }

  if (ext === ".docx") {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }

  if (ext === ".txt") {
    return fs.readFileSync(filePath, "utf8");
  }

  throw new Error("Unsupported file type");
};
