import { Router } from "express";
import { logOutUser, registerUser,loginUser, refreshAccessToken, changeCurrentPassword } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )
router.route("/login").post(loginUser)
router.route("/changePassword").post(verifyJWT,changeCurrentPassword)


//secured routes
router.route("/logout").post(verifyJWT,logOutUser)
router.route("/refresh-Token").post(refreshAccessToken)
export default router