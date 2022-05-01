const express = require("express");
const { getPosts, onLogin } = require("../controller/post.controller");
const { ensureToken } = require("../middleware/ensure.token");

const router = express.Router();

// http://localhost:9090/views/login
router.get("/Home", onSubmit)

module.exports = router;