//local storage'a eleman ekler/elemanı günceller
export const setLocal = (key, data) => {
  const strData = JSON.stringify(data);

  localStorage.setItem(key, strData);
};

//local'dan eleman alma
export const getLocal = (key) => {
  const strData = localStorage.getItem(key);
  const data = JSON.parse(strData);
  return data;
};
