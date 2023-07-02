import mongoose from 'mongoose'

const UserLevelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const UserLevel = mongoose.models.UserLevel || mongoose.model('UserLevelSchema', UserLevelSchema);
export default UserLevel;