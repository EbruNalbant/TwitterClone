const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6891b1e5fdmshfa921e7cae49f65p1d4e64jsn5b5b876c6bbd",
    "X-RapidAPI-Host": "twitter-api45.p.rapidapi.com",
  },
};

export class API {
  constructor() {}

  //kullanıcı detaylarını alma
  async getUser(username) {
    try {
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${username} `,
        options
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  //diğer api istekleri tanımlanacak
}
