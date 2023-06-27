import { authRoute } from "./src/Auth/Auth.route.js";
import { noteRoute } from "./src/Note/Note.route.js";
import express from "express";
import cors from "cors";
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

const corOptions = {
	origin: "http://localhost:5173",
};
app.use("/", authRoute);
app.use("/", noteRoute);
app.get("/", (req, res) => {
	console.log("Testing");
	res.send("<h1>Hello</h1>");
});
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
