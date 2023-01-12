const BASE_URL = "https://raw.githubusercontent.com/SocialSocialTrading/crypto-icons/master/src/images";

function getTokenImgUrl(token: string): string {
  switch (token) {
    case "inj":
      return `${BASE_URL}/${token}.jpg`;
    default:
      return "";
  }
}

export default {
  getTokenImgUrl
}