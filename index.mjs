import express from "express";
import path from "path";
import "dotenv/config";

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, "./web/build")));
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})