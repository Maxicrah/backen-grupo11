import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://maxicrah:${password}@galerias-cluster.ebemena.mongodb.net/?retryWrites=true&w=majority&appName=galerias-cluster`;

const client = new MongoClient(connectionString);

const connectToDatabase = async () => {
    try {
        const connection = await client.connect();
        console.log("Connected successfully to server");
        const db = connection.db("galeriasdb");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default connectToDatabase;
