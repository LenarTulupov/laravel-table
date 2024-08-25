<<<<<<< HEAD
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IPaginationContext {
  // currentPage: number;
  // setCurrentPage: (page: number) => void;
=======
import { ReactNode, createContext, useContext, useState } from "react";

interface IPaginationContext {
  currentPage: number;
  setCurrentPage: (page: number) => void;
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  ITEMS_PER_PAGE: number;
}

const PaginationContext = createContext<IPaginationContext>(
  {} as IPaginationContext,
);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
<<<<<<< HEAD
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 25;

  return (
    <PaginationContext.Provider
      value={{
        // currentPage,
        // setCurrentPage,
=======
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 25;
  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
        ITEMS_PER_PAGE,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => useContext(PaginationContext);
