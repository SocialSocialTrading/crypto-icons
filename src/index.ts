const BASE_URL = "https://raw.githubusercontent.com/SocialSocialTrading/crypto-icons/master/src/images";

export default function getTokenImgUrl(token: string): string {
  switch (token) {
    case "inj":
      return `${BASE_URL}/${token}.jpg`;
    default:
      return "";
  }
}