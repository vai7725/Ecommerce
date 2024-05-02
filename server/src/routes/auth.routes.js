import { Router } from 'express';
import {
  loginUser,
  logoutUser,
  refreshUserToken,
  registerUser,
  changeUserPass,
  getCurrentUser,
  updateAccountDetails,
  forgotPassword,
  emailVerify,
  forgotPasswordLink,
} from '../controllers/auth.controllers.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(verifyJWT, logoutUser);

router.route('/refreshToken').post(refreshUserToken);
router.route('/user').post(verifyJWT, getCurrentUser);

router.route('/changePassword').post(verifyJWT, changeUserPass);
router.route('/updateAccount').post(verifyJWT, updateAccountDetails);

router.route('/forgotPasswordLink').post(forgotPasswordLink);

router.route('/forgotPassword').post(forgotPassword);
router.route('/emailVerify').post(emailVerify);

export default router;
