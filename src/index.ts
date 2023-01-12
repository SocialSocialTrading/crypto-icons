const BASE_URL = "https://raw.githubusercontent.com/SocialSocialTrading/crypto-icons/master/src/images";

export function getTokenImgUrl(token: string): string {
  switch (token) {
    case "inj":
      return `${BASE_URL}/${token}.png`;
    default:
      return "";
  }
}