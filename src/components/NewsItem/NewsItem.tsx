
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import s from "./styles.module.css";

type NewsItemType = {
  item: {
    title: string;
    published: string;
    author: string;
    image: string;
  };
};

export const NewsItem = ({ item }: NewsItemType) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper} style={{backgroundImage: `url(${item.image})`}}>

      </div>
      <div className={s.info}>
        <h1 className={s.title}>{item.title}</h1>
        <p className={s.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};
