const BASE_URL =
  "https://raw.githubusercontent.com/SocialSocialTrading/crypto-icons/master/src/images";

export function getTokenImgUrl(token: string): string {
  return `${BASE_URL}/${token}.png`;
}
