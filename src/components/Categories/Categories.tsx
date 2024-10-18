import s from "./styles.module.css"

type CategoriesProps = {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (selectedCategory: string)=> void
}

export const Categories = ({categories, selectedCategory, setSelectedCategory}: CategoriesProps) => {
  return (
    <div className={s.categories}>
      {categories.map((category) => {
        return (
          <button onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? s.active : s.item}
          key={category}
          >{category}</button>
        )
      })}
    </div>
  );
};
