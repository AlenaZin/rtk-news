
import s from "./styles.module.css"

type SkeletonType = {
  counte: number
  type: 'bunner' | 'item'
}

export const Skeleton = ({counte=1, type='bunner'}: SkeletonType) => {
  return (
    <>
      {counte > 1 ? (
        <ul className={s.list}>
          {[...Array(counte)].map((_, index) => (
            <li key={index}
            className={type === 'bunner' ? s.bunner : s.item}></li>
          ))}
        </ul>
      ): (
        <li className={type === 'bunner' ? s.bunner : s.item}></li>
      )}
    </>
  );
};
