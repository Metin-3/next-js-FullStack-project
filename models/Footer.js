import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        phoneNumber: {
            type: String,
            require: true,
        },
        desc: {
            type: String,
            require: true,
        },
        socialMedia: {
            type: [
                {
                    icon: { type: String },
                    link: { type: String },
                }
            ],
        },
        openingHours: {
            type: {
                day: { type: String },
                hour: { type: String },
            },
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.Footer || mongoose.model("Footer", FooterSchema);