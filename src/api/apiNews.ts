import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (): Promise<NewsType[]> => {
  try {
    const response = await axios.get<NewsResponsType>(
      `${BASE_URL}latest-news`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data.news;
  } catch (error) {
    console.log(error);
    return []
    //throw error
  }
};

export type NewsResponsType = {
  news: NewsType[]
};

export type NewsType = {
  id: string;
  title: string;
  image: string;
  published: string;
  description: string;
  category: string;
  author: string;
}