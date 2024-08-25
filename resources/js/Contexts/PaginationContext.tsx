import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IPaginationContext {
  // currentPage: number;
  // setCurrentPage: (page: number) => void;
  ITEMS_PER_PAGE: number;
}

const PaginationContext = createContext<IPaginationContext>(
  {} as IPaginationContext,
);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 25;

  return (
    <PaginationContext.Provider
      value={{
        // currentPage,
        // setCurrentPage,
        ITEMS_PER_PAGE,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => useContext(PaginationContext);
