import axios from "axios"
import fs from 'fs'
import FromData from 'form-data'
import userModel from "../models/userModel.js"

//controller function to remove bg from image
const removeBgImage = async (req,res) => {

    try {
        const imagePath = req.file.path;

        const imageFile = fs.createReadStream(imagePath)

        const fromdata = new FromData()
        fromdata.append('image_file' , imageFile)

        const { data } = await axios.post('https://clipdrop-api.co/remove-background/v1',fromdata,{
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data,'binary').toString('base64')

        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`
        
        res.json({ success: true, message: "Background Removed", resultImage})
        
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: 'user not found'})
    }
}

export {removeBgImage}