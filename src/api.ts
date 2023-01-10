const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

export interface Article {
  id: 0,
  featured: false,
  title: 'string',
  url: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: 'string',
  launches: [
    {
      id: 'string',
      provider: 'string'
    },
  ],
  events: [
    {
      id: 'string',
      provider: 'string'
    },
  ]
}

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url;

  return fetch(fullURL)
    .then(res => res.json());
}

export const getArticles = () => get<Article[]>('/articles');
