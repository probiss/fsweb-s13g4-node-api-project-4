const { v1: uuidv1 } = require("uuid");

function createId() {
    return uuidv1();
}

const initialUsers = () => {
    let initialUserList = [
        { id: createId(), kullaniciadi: "cihat", sifre: "cht12" },
        { id: createId(), kullaniciadi: "mücahit", sifre: "mcht12" },
        { id: createId(), kullaniciadi: "mustafa", sifre: "mstf12" },
        { id: createId(), kullaniciadi: "mehmet", sifre: "mhmt12" },
        { id: createId(), kullaniciadi: "abdullah", sifre: "abd12" }
    ];
    return initialUserList;
};

let users = initialUsers();

const getAllUsers = () => {
    return users;
};

const createUser = (user) => {
    user.id = createId();
    users.push(user);

    return Promise.resolve(user);
};

const findUser = (user) => {
    let isExistUser = false;
    users.forEach((userItem) => {
        if (
            userItem.kullaniciadi == user.kullaniciadi &&
            userItem.sifre == user.sifre
            
        ) {
            isExistUser = true;
            return isExistUser;
        }
    });
    /*for (let i = 0; i < users.length; i++) {
          const userItem = users[i];
          if(userItem.kullaniciadi == user.kullaniciadi && userItem.sifre == user.sifre){
              isExistUser = true;
              break;
          } 
      }
      let findedList= users.filter(userItem=>userItem.kullaniciadi == user.kullaniciadi && userItem.sifre==user.sifre);
      if(findedList.length>0){
          isExistUser =true;
      }
      let findUser = users.find(userItem=>userItem.kullaniciadi == user.kullaniciadi && userItem.sifre==user.sifre);
      if(findUser){
          isExistUser = true;
      }*/

    return isExistUser;
};

const checkUserName = (kullaniciadi) => {
    let isExistUserName = false;
    for (let i = 0; i < users.length; i++) {
        const userItem = users[i];
        if (userItem.kullaniciadi == kullaniciadi) {
            isExistUserName = true;
            break;
        }
    }
    return isExistUserName;
};

module.exports = {
    getAllUsers,
    createUser,
    findUser,
    checkUserName,
};