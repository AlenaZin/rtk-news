import { Image } from "../Image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import s from "./styles.module.css"
import { withSkeleton } from "../../helpers/hocs/withSkeleton";

type NewsBannerType = {
  item: {
    title: string
    published: string
    author: string
    image: string
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

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'bunner', 1)

export default NewsBannerWithSkeleton
