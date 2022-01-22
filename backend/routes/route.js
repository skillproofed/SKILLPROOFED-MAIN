// import express
import express from "express";

// import function from controller
import {
  showUsers,
  showUserById,
  createUser,
  updateUser,
  registerUser,
  loginUser,
  forgot_password,
  // deleteUser,
} from "../controllers/user.js";

// init express router
const router = express.Router();

// Get All Product
router.get("/users", showUsers);

// Get Single Product
router.get("/users/:id", showUserById);

// Create New Product
router.post("/users", createUser);
router.post("/login_signup", registerUser);
router.post("/login_signin", loginUser);

// Update Product
router.put("/users/:id", updateUser);

router.post("/forgot_pwd",forgot_password);


// Delete Product
// router.delete("/users/:id", deleteUser);

// export default router
export default router;
