const router = require("express").Router();
const {createUser, getUserById,getUsers,updateUser,deleteUser} = require("./user.controller");

router.post("/",createUser);
router.get("/", getUsers);
router.get("/:id",getUserById);
router.patch("/",updateUser);
router.delete("/",deleteUser);

module.exports=router;
