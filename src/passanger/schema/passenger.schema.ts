import mongoose from "mongoose";

export const PassengerSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
},{
    timestamps:true
}
);

PassengerSchema.index({name:1}, {unique:true});
PassengerSchema.index({email:1}, {unique:true});