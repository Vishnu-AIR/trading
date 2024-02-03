const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
require("dotenv").config()


class MessageService{
    static async saveMessage(name, email, password, phone){
        try {             
            const createUser = new UserModel({name, email, password, phone});
            
            await createUser.save();

            return createUser;

        } catch (error) {
            return error
        }
    }

    static async getMessages(sid,rid){
        try{
            //console.log("ByEmail")
            return await UserModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }

    static async getMessagesbefore(time){
        try {
            //console.log("ByPhone")
            return await UserModel.findOne({phone});
        } catch (error) {
            throw error;
        }
    }

    
}


module.exports = UserService;