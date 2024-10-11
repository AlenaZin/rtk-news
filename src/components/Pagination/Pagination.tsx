import s from "./styles.module.css";

type PaginationType = {
  totalPages: number;
  HandlerNextPage: () => void;
  HandlerPreviousPage: () => void;
  HandlerPageClick: (pageNumber: number) => void;
  currentPage: number;
};

export const Pagination = ({
  totalPages,
  HandlerNextPage,
  HandlerPreviousPage,
  HandlerPageClick,
  currentPage,
}: PaginationType) => {
  return (
    <div className={s.pagination}>
      <button 
        className={s.arrow} 
        onClick={HandlerPreviousPage} 
        disabled={currentPage <= 1}>
        {"<"}
      </button>
      <div className={s.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={currentPage === index + 1 ? s.currentPage : s.pageNumber}
              onClick={() => HandlerPageClick(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button 
        className={s.arrow} 
        onClick={HandlerNextPage} 
        disabled={currentPage >= totalPages}>
        {">"}
      </button>
    </div>
  );
};
