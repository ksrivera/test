import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema (
    {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    }
);

const FAQ = mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
export default FAQ;