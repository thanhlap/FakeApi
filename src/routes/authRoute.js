const express = require("express");
import * as authControllers from '../controllers';

const router = express.Router();

router.post("/login", authControllers.login);

module.exports = router;
