const jwt = require("jsonwebtoken");

function auth(req, res, next) {
	const token = req.header("x-auth-token");
	if (!token) return res.status(401).send("denied. no token provided");

	try {
		const decoded = jwt.verify(token, process.env.SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(400).send("invalid token");
	}
}

module.exports = auth;
