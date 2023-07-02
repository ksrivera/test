import mongoose from 'mongoose'

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const College = mongoose.models.College || mongoose.model('College', CollegeSchema);
export default College;