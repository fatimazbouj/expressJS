const mongoose=require("mongoose");

async function connectDB(){
    try{

        await mongoose.connect('mongodb+srv://fatimazbouj:Fati1239058\'\'\'@cluster0.v5vcjbk.mongodb.net/',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to DB")

    }catch (error) {        d
        console.error('Error Mongo DB',error);
        process.exit(1);
    }
}

module.exports = connectDB;