import { NewsType } from "../../api/apiNews";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { NewsItem } from "../NewsItem/NewsItem";
import s from "./styles.module.css"

type NewsListType = {
  news: NewsType[]
}

const NewsList = ({news}: NewsListType) => {
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

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton;
