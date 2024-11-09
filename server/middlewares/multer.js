import multer from "multer"

//createing multer middlewere for parsing fromdata

const storage = multer.diskStorage({})

const upload = multer({storage})

export default upload