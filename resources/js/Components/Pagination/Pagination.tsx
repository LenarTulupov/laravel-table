import { FC } from "react"
<<<<<<< HEAD
import scrollToTop from "@/utils/scrollToTop"
import styles from './Pagination.module.scss'

interface IPagination {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<IPagination> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange
}) => {
=======
import styles from './Pagination.module.scss'

interface IPagination {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    onPageChange: (page: number) => void
}

const Pagination: FC<IPagination> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (page: number) => {
        if (page < 1 || page > totalPages) return;
<<<<<<< HEAD
        scrollToTop();
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
        onPageChange(page);
    }
    return (
        <div className={styles.pagination}>
<<<<<<< HEAD
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
=======
            <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
            {Array.from({ length: totalPages }, (_, index) => (

                <button
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    className={currentPage === index + 1 ? styles.active : ""}
                >
                    {index + 1}
                </button>
            ))}
            <button
<<<<<<< HEAD
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
=======
                onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
            >
                Next
            </button>
        </div>
    )
}

export default Pagination