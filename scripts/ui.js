export const authEle = {
  loginForm: document.querySelector("#login"),
  nameInp: document.querySelector("#name"),
  passInp: document.querySelector("#pass"),
  nameArea: document.querySelector(".name-warning"),
  passArea: document.querySelector(".pass-warning"),
};

export const mainEle = {
  pics: document.querySelectorAll("#profile-pic"),
  userName: document.querySelector(".user-info #user-name"),
  userTag: document.querySelector(".user-info #user-tag"),
  logoutBtn: document.querySelector("#logout-btn"),
};

//kullanıcı bilgilerini ekrana basma
export const renderUserInfo = (user) => {
  //kullancıı resimlerini ekrana basma
  mainEle.pics.forEach((img) => (img.src = user.avatar));
  //kullanıcı isimlerini ekrana basma
  mainEle.userName.innerText = user.name;
  mainEle.userTag.innerText = "@" + user.profile;
};
