import { registerUser, validateUser } from "./Auth.services.js";

export const createUser = async (req, res) => {
	const { name, password } = req.body;
	const user = await registerUser(name, password);
	if (user) {
		res.json({
			status: "1",
			message: "Successfully registered user",
			user: user,
		});
	} else {
		res.json({
			status: "0",
			message: "Successfully unable to register user",
			user: user,
		});
	}
};

export const checkUser = async (req, res) => {
	const { name, password } = req.body;
	const user = await validateUser(name, password);
	console.log(user);
	console.log("Checking the user");
	if (user != null) {
		console.log("Hello");
		res.json({ status: "1", user: user });
	} else {
		res.json({ status: "0" });
	}
};
