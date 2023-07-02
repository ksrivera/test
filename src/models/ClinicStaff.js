import mongoose from "mongoose";

const ClinicStaffSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
  });

  const ClinicStaff = mongoose.models.ClinicStaff || mongoose.model('ClinicStaff', ClinicStaffSchema);
  export default ClinicStaff;