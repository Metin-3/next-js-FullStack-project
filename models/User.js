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
            require: true,
        },
        adress: {
            type: String,
            require: true,
        },
        job: {
            type: String,
            require: true,
        },
        bio: {
            type: String,
            require: true,
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