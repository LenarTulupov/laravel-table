import { FC } from "react"
import styles from './Pagination.module.scss'

interface IPagination {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    onPageChange: (page: number) => void
}

const Pagination: FC<IPagination> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    }
    return (
        <div className={styles.pagination}>
            <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
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
                onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination