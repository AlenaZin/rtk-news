
import s from "./styles.module.css"

type SkeletonType = {
  count: number
  type: 'bunner' | 'item'
  direction: 'column' | 'row'
}

export const Skeleton = ({count=1, type='bunner', direction='column'}: SkeletonType) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? s.columnList : s.rowList}>
          {[...Array(count)].map((_, index) => (
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
