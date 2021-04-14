const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
let PDFParser = require("pdf2json");


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    }, 
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload = multer({storage: storage}).single('avatar');



//homepage
app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.get('/',(req,res)=>{
   res.render('index')
});
//upload
app.get('/loading',(req,res)=>{
    res.render('file')
 });
 app.get('/views',(req,res)=>{
    res.render('F1040EZ')
 });
 
 app.get('/download', (req, res)=>{
    const file = "./views/F1040EZ.ejs";
    res.download(file, 'F1040EZ.json'); // Set disposition and send it.
  });

  app.post('/upload',(req,res)=>{
    upload(req,res,res => {
        console.log(req.file.originalname);     
        let pdfParser = new PDFParser(this,1);
        pdfParser.on("pdfParser_dataReady", pdfData => {
            fs.writeFile("./views/F1040EZ.ejs", JSON.stringify(pdfData),(err)=>
            {
                if(err){
                    console.log(err);
                }
            });
        });
        pdfParser.loadPDF(`./uploads/${req.file.originalname}`);
    });
    res.redirect('/loading');
});

//listen  
const PORT = 5000 || process.env.PORT
app.listen(PORT,()=>{
    console.log('Listening on '+PORT);
}); 
