import { getLatestNews, NewsResponsType, NewsType } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BanersList from "../BanersList/BanersList";
import s from "./styles.module.css"


export const LatestNews = () => {

  const { data, isLoading } = useFetch<NewsResponsType>(getLatestNews);

  return (
    <section className={s.section}>
      <BanersList banners={data && data.news} isLoading={isLoading}/>
    </section>
  );
};
