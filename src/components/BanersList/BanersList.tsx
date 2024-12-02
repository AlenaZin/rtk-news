import s from "./styles.module.css"
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import { NewsType } from "../../api/apiNews";

type BanersListType = {
  banners: NewsType[]
}

const BanersList = ({banners}: BanersListType) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner}/>
      })}
    </ul>
  );
};

const BanersListWithSkeleton = withSkeleton(BanersList, 'bunner', 10, 'row')

export default BanersListWithSkeleton
