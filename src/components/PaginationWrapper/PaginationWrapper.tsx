import { Pagination } from "../Pagination/Pagination";

type Props = {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
  totalPages: number;
  HandlerNextPage: () => void;
  HandlerPreviousPage: () => void;
  HandlerPageClick: (pageNumber: number) => void;
  currentPage: number;
};

export const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};
