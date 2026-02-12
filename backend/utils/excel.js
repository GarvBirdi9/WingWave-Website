import fs from "fs";
import path from "path";
import XLSX from "xlsx";

export function saveToExcel(fileName, data) {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  const filePath = path.join(dataDir, fileName);

  let workbook;
  let worksheet;
  let jsonData = [];

  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    worksheet = workbook.Sheets[sheetName];
    jsonData = XLSX.utils.sheet_to_json(worksheet);
  } else {
    workbook = XLSX.utils.book_new();
  }

  jsonData.push({
    ...data,
    submittedAt: new Date().toISOString(),
  });

  worksheet = XLSX.utils.json_to_sheet(jsonData);

  // ⚠️ IMPORTANT: overwrite sheet instead of appending
  workbook.Sheets["Responses"] = worksheet;
  workbook.SheetNames = ["Responses"];

  XLSX.writeFile(workbook, filePath);
}
