const mongoose=require('mongoose')
require('dotenv').config()



const connectData=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Kết nối thành công');
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports=connectData