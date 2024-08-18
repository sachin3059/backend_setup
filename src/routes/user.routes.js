import { Router } from "express";
import { userLogin, userSignup, userDelete } from "../controllers/user.controller.js";

const router = Router();

router.get("/login", userLogin);

router.get("/signup", userSignup);

router.get("/delete", userDelete);




export default router;