import { authEle } from "./ui.js";
import { API } from "./api.js";
import { setLocal } from "./helpers.js";

const api = new API();
//şifre için kuralları içeren tanım
//min 1 küçük harf
//min 1 büyük harf
//min 1 sayı
//min 1 özel karakter
//min 8 karakter

const regex =
  "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$";

//uyarıları ekrana basma
const renderWarns = (namerWarn, passWarn) => {
  //isim uyarısı varsa ekrana basma yoksa eski uyarıyı silme
  if (namerWarn) {
    authEle.nameArea.innerHTML = `
        <p class="warning"> ${namerWarn} </p>`;
  } else {
    authEle.nameArea.innerHTML = "";
  }
  //şifre uyarısı varsa ekrana basma yoksa eski uyarıyı silme
  if (passWarn) {
    authEle.passArea.innerHTML = ` <p class="warning"> ${passWarn} </p>`;
  } else {
    authEle.passArea.innerHTML = "";
  }
};

//formun gönderilme olayını izleme
authEle.loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let namerWarn = null;
  let passWarn = null;

  //değerlere erişme
  const name = authEle.nameInp.value;
  const pass = authEle.passInp.value;

  //ismi kontrol etme
  if (!name) {
    namerWarn = "Please fill out name field";
  } else if (name.length <= 3) {
    namerWarn = "Name cannot be shorter than 4 characters ";
  } else {
    namerWarn = null;
  }

  //şifre kontrol etme
  if (!pass) {
    passWarn = "Please fill out password field";
  } else if (pass.length < 8) {
    passWarn = "Password  cannot be shorter than 8 characters";
  } else if (!pass.match(regex)) {
    passWarn =
      "Password is not strong enough </br> (Your password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.)";
  } else {
    passWarn = null;
  }

  //uyarıları ekrana basma
  renderWarns(namerWarn, passWarn);

  //uyarı yoksa formu gönderme
  if (!namerWarn && !passWarn) {
    const userData = await api.getUser(name);
    // kullanıcıyı lokal'e ekleme
    setLocal("user", userData);
    // kullanıcıyı anasayfaya yönlendirme
    window.location = "/";
  }
});
