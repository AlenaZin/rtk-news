import { NewsType } from "../../api/apiNews";
import { NewsItem } from "../NewsItem/NewsItem";
import s from "./styles.module.css"

type NewsListType = {
  news: NewsType[]
}

export const NewsList = ({news}: NewsListType) => {
  return (
    <ul className={s.list}>
      {news.map(item => {
        return (
          <NewsItem key={item.id} item={item}/>
        )
      })}
    </ul>
  );
};
