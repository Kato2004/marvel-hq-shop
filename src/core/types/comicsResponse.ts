interface IApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: IComicData<T>;
  etag: string;
}

interface IComicData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T;
}

interface IComics {
  isbn: string;
  issn: string;
  upc: string;
  id: number;
  title: string;
  pageCount: number;
  resourceURI: string;
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  modified: Date;
  format: string;
  textObjects: { type: string; language: string; text: string }[];
  urls: { type: string; url: string }[];
  series: { resourceURI: string; name: string }[];
  variants: { resourceURI: string; name: string }[];
  collections: {
    resourceURI: string;
    name: string;
  }[];
  collectedIssues: {
    resourceURI: string;
    name: string;
  }[];
  dates: { types: string; date: Date }[];
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
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string; role: string }[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string; role: string }[];
  };
}

type a = { [data: string]: IComics | IComics[] };
