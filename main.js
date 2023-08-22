import { mainEle, renderUserInfo } from "./scripts/ui.js";
import { getLocal } from "./scripts/helpers.js";

// !Olay izleyicileri

//sayfanın yüklenmesi
document.addEventListener("DOMContentLoaded", () => {
  const user = getLocal("user");
  renderUserInfo(user);
});

//çıkış butonuna tıklanma
mainEle.logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location = "/auth.html";
});
