import mongoose from "mongoose";

const ToSSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }
);

const ToS = mongoose.models.ToS || mongoose.model("ToS", ToSSchema);
export default ToS;