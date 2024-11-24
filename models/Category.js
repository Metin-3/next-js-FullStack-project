import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            maxlength: 60,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);