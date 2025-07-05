import multer from "multer"
import path from "path"
//stores file in server for a short point of time 
//retuns filepath 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp") 
    },
    filename: function (req, file, cb) {
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName)
      console.log(file)
    }
  })
  
export const upload = multer({ storage: storage })