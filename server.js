var express = require('express')
var multer  = require('multer')
var mime = require('mime')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now()+ '.' + mime.getExtension(file.mimetype))
    }
  })
  
var upload = multer({ storage: storage })

// var upload = multer({ dest: 'uploads/' })
var app = express()

app.post('/upload', upload.single('file'), function (req, res, next) {
  console.log("Reached endpoint");
  res.send("file saved on server");
})

app.listen(8000,()=>console.log("server started on 8000"))
