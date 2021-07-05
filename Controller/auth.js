import * as userRepository from '../Repository/auth.js'

// 로그인
export async function signIn(req, res){
    const {id, pw} = req.body;
    const user = await userRepository.signIn(id, pw);

    // id가 없는 경우
    if(!user) {
        return res.status(401).json({ message: 'Invalid user or password' });
    }

    // id는 맞지만 비밀번호가 틀린경우
    if(user.pw !== pw){
        return res.status(401).json({ message: 'Invalid user or password' });
    }

    res.status(200).json({user});
};

// 회원가입
export async function signUp(req, res) {
    const { id } = req.body;

    const duplicated = await userRepository.findById(id);

    // 중복된 ID가 존재
    if(duplicated){
        return res.status(409).json({ message: `${id} already exists` });
    }

    const newUser = await userRepository.createUser(req.body);

    res.status(201).json(newUser);
}

// 회원 정보 수정
export async function updateUser(req, res){
    // updateData(req.body) -> id, userName, email, profileUrl
    const updated = await userRepository.updateUser(req.body);

    res.status(200).json(updated);
}

// 회원 탈퇴
export async function deleteUser(req, res) {
    const { id , pw} = req.body;
    const user = await userRepository.findById(id);

    if(!user){
        return res.status(404).json({message: `${id} is not found`});
    }

    if(user.pw !== pw){
        return res.status(403).json({message: `password is not correct`});
    }
    await userRepository.deleteUser(id);
    res.sendStatus(204);
}

// 모든 회원정보 가져오기
export async function getAllUser(req, res) {
    const allUsers = await userRepository.getAllUser();
    res.status(200).json(allUsers);
}
