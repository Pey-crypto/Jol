# Jol
pdf jpeg into text with font properties

Jol is web based application which is run on bare bones npm and without any fancy frameworks.
It is conceptualized to have the minimal system impact and server impact. 
The application runs independent of the server. To achieve the aim of identifying errors in guidelines provided by a company, 
we decided to fundamentally examine what a image and pdf file. Image is composed of pixels of varying intensity to represent a whole picture,
while pdf uses a open standard in streams to display content. OCR came into mind and that is the direction for images while PDF'S will be converted to JSON which will be parsed
to check for fallacies against brand guidelines. This particular approach is as precise as a knife as the JSON describes the properties of the font such as color,size,font used
,postion in the document etc. We are designing a custom parser for this JSON output.This application can be used to check quality of incoming quotations,
Letter heads, sales approvals, Letter of credit etc.

The implementation uses nodejs and a couple modules:
* "ejs" (Prevents injections attacks) * 
"express"(displays files to the browser) * 
"multer"(uploads files for analysis) * 
"pdf2json (converts pdf to JSON) * 
"tesseract"(extracts text)
