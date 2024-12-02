import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({page_number= 1, page_size= 10, category, keywords}: ParamsType): Promise<NewsResponsType> => {
  try {
    const response = await axios.get<NewsResponsType>(
      `${BASE_URL}search`,
      {
        params: {
          apiKey: API_KEY,
          page_number,
          page_size, 
          category, 
          keywords
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    //throw error
  } 

  return { status: 'ERROR', news: [] }
};

export const getCategories = async (): Promise<CategoriesResponsType> => {
  try {
    const response = await axios.get<CategoriesResponsType>(
      `${BASE_URL}available/categories`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    //throw error
  }

  return { status: 'ERROR', categories: [] }
};

export type NewsResponsType = {
  status: string
  news: NewsType[]
};

export type CategoriesResponsType = {
  status: string
  categories: string[]
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

export type ParamsType = {
  page_number: number 
  page_size: number
  category: string | null
  keywords: string
}