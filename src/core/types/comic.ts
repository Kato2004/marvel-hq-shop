export interface IComics {
  isbn: string;
  issn: string;
  upc: string;
  id: number;
  title: string;
  pageCount: number;
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  format: string;
  urls: { type: string; url: string }[];
  images: { path: string; extension: string }[];
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string; role: string }[];
  };
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string; role: string }[];
  };
  rare: boolean;
}
