let users = [
    {
        id : 'bigone', 
        pw : '12345',
        userName : 'taeil',
        email : 'xodlfsha@naver.com',
        profileUrl : 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjVfMTAx/MDAxNTg3ODE5MDEzNTA5.p3hCGnZHNY3jPLMhrHy1aXH9t20SLMsdfbnQMAbzY-wg.xfA_E3X5uMPOq3zabKoaITYGZXKkgw5TxEtMjPUmCsAg.PNG.thirdsky30/CropArea0002.png?type=w800'
    }
]

//! ========================== CRUD START==========================//

// 로그인
export async function signIn(id){
    const user = findById(id);

    return user;
}

//새로운 user 만들기
export async function createUser(userData){
    const {id, pw, userName, email, profileUrl} = userData;

    const newUser = { id, pw, userName, email, profileUrl };

    users.push(newUser);

    return newUser;
}


// 회원 정보 수정
export async function updateUser(updateData) {
    const user = await findById(updateData.id);

    if(user){
        user.userName = updateData.userName;
        user.email = updateData.email;
        user.profileUrl = updateData.profileUrl;
    }
    return user;
}

// 회원 탈퇴
export async function deleteUser(id){
    users = users.filter(user => (user.id !== id));
    
}

//! ========================== CRUD END==========================//


// id로 데이터 찾기
export async function findById(id){
    const find = users.find(data => {
        if(data.id === id){
            return data;
        }

        return null;
    });

    return find;
}

// 모든 유저 정보 가져오기
export async function getAllUser(){
    return users;
}