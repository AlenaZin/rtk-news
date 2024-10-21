import { formatDate } from "../../helpers/formatDate";
import s from "./styles.module.css";

type SearchProps = {
  keywords: string;
  setKeywords: (Value: string) => void;
};

export const Search = ({ keywords, setKeywords }: SearchProps) => {
  return (
    <div className={s.search}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={s.input}
        placeholder="Search..."
      />
    </div>
  );
};
