import mongoose from "mongoose";

const TimelineSchema = new mongoose.Schema (
    {
        year: {
            type: Number,
            required: true,
        },
        event: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    }
);

const Timeline = mongoose.models.Timeline || mongoose.model("Timeline", TimelineSchema);
export default Timeline;