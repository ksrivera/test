
import mongoose from "mongoose";

let isConnected = false; //Track the connection status

const connect = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    } 

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        throw new Error('Connection Failed. Error: ' + error);
    }
}

export default connect;