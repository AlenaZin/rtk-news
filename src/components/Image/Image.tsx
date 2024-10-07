import s from "./styles.module.css"

type ImageType = {
  image: string
}

export const Image = ({image}: ImageType) => {
  return (
    <div className={s.wrapper}>
      {image ? <img src={image} alt="news" className={s.image}/> : null}
    </div>
  );
};
