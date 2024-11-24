import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        phoneNumber: {
            type: String,
        },
        adress: {
            type: String,
        },
        job: {
            type: String,
        },
        bio: {
            type: String,
        },
        password: {
            type: String,
            require: true,
        },
        confirmPassword: {
            type: String,
            require: true,
        },
        emailVerified: {
            type: String,
            default: null,
        }
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);