// global import
import express from 'express';

// local import
import * as authReposiroty from '../Controller/auth.js';

const router = express.Router();

// 로그인
router.post('/signIn', authReposiroty.signIn);
// 회원가입
router.post('/signUp', authReposiroty.signUp);
// 모든 회원 정보 가져오기
router.get('/allUsers', authReposiroty.getAllUser);
// 회원 정보 수정
router.put('/updateUser', authReposiroty.updateUser);
// 회원 탈퇴
router.delete('/deleteUser', authReposiroty.deleteUser);

export default router;
