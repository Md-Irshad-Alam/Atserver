const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

async function connectDatabase() {

    // const result = await mongoose.connect(`mongodb://0.0.0.0:27017/attrybcollection`)
    const result = await mongoose.connect(`mongodb+srv://Alam:alam123@cluster0.2w6rsvv.mongodb.net/?retryWrites=true&w=majority`)
    .then((responce)=> console.log("server is connected with database"))
    .catch((error)=> console.log("server is disconnected "))

  }
  
  

module.exports = connectDatabase;