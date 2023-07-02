import mongoose, { mongo } from 'mongoose'

const CourseSchema = new mongoose.Schema({
  // Add other fields as needed
  name: {
    type: String,
    required: true,
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
});

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);
export default Course;