import multer from "multer"

//stores file in server for a short point of time 
//retuns filepath 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp") 
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
      console.log(file)
    }
  })
  
export const upload = multer({ storage: storage })