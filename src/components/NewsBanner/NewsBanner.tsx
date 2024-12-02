import { Image } from "../Image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import s from "./styles.module.css"

export type NewsBannerType = {
  item: {
    title: string
    published: string
    author: string
    image: string
    id: string
  }
}

const NewsBanner = ({item}: NewsBannerType) => {
  return (
    <div className={s.banner}>
      <Image image={item.image}/>
      <h1 className={s.title}>{item.title}</h1>
      <p className={s.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  );
};

export default NewsBanner
