import { NewsType } from "../../api/apiNews";
import BanersList from "../BanersList/BanersList";
import s from "./styles.module.css"

type LatestNewsProps = {
  banners: NewsType[] | null
  isLoading: boolean
}

export const LatestNews = ({banners, isLoading}: LatestNewsProps) => {
  return (
    <section className={s.section}>
      <BanersList banners={banners} isLoading={isLoading}/>
    </section>
  );
};
