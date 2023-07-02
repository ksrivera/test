import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
  studentNumber: {
    type: String,
    required: true,
    default: generateStudentNumber,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  age: {
    type: String,
    required: true,
  }
});

// Generate an auto-generated student number in the format "YY-XXXXX"
function generateStudentNumber() {
  const currentYear = new Date().getFullYear().toString().slice(-2);
  const randomDigits = Math.floor(10000 + Math.random() * 90000).toString();
  return `${currentYear}-${randomDigits}`;
}

const Student = mongoose.models.Student || mongoose.model('Student', StudentSchema);
export default Student;