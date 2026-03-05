import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
import { seedInitialProducts } from "./service/productService.js";
const app = express();
const port = 3001;
app.use(express.json());
mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
app.use('/user', router);
// Seed initial products
seedInitialProducts();
app.listen(port, () => {
    console.log(`server is running at : http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map