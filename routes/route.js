const express = require('express');
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controller/controller');
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;