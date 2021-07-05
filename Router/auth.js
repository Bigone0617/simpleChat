// global import
import express from 'express';

// local import
import * as authController from '../Controller/auth.js';

const router = express.Router();

// 로그인
router.post('/signIn', authController.signIn);
// 회원가입
router.post('/signUp', authController.signUp);
// 모든 회원 정보 가져오기
router.get('/allUsers', authController.getAllUser);
// 회원 정보 수정
router.put('/updateUser', authController.updateUser);
// 회원 탈퇴
router.delete('/deleteUser', authController.deleteUser);

export default router;
