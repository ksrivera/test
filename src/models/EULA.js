import mongoose from "mongoose";

const EULASchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
        },
        description: [{
            type: String,
            required: true,
        }],
    }
);

const EULA = mongoose.models.EULA || mongoose.model("EULA", EULASchema);
export default EULA;