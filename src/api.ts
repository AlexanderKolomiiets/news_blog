import { Article } from './types/article';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url;

  return fetch(fullURL)
    .then(res => res.json());
}

export const getArticles = () => get<Article[]>('/articles');
