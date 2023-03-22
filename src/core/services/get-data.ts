const baseUrl = "https://gateway.marvel.com:443/v1/public/";
const apiKey = "&apikey=fbc247f09976b45abd4137fe0cbc71b2";

export const fetchDataAsync = async <T>(path: string) => {
  const res: Promise<T> = (await fetch(baseUrl + path + apiKey)).json();
  return res;
};
