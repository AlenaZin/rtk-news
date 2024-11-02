import s from "./styles.module.css"

type CategoriesProps = {
  categories: string[]
  selectedCategory: string | null
  setSelectedCategory: (selectedCategory: string | null)=> void
}

export const Categories = ({categories, selectedCategory, setSelectedCategory}: CategoriesProps) => {
  return (
    <div className={s.categories}>
      <button onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? s.active : s.item}
          >All</button>
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
