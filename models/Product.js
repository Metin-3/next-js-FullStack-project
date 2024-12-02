import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            maxlength: 60,
        },
        desc:{
            type: String,
            require: true,
            maxlength: 300,
        },
        desc:{
            type: [Number],
            require: true,
        },
        category: {
            type: String,
            require: true,
        },
        img: {
            type: String,
            require: true,
        },
        extraOptions:{
            type:[
                {
                    text: {type: String},
                    price: {type: Number},
                }
            ]
        }
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);