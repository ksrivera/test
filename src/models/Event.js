import mongoose from "mongoose";

const EventSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
        },
        author: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        }
    }
);

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);
export default Event;