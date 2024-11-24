
import React, {FC} from 'react';
import Link from "next/link";
import './pagination.css'

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    };
const MyPagination: FC<PaginationProps> = ({currentPage, totalPages}) => {

    return (
        <footer >
            <div>

                {currentPage > 1 && (
                    <Link href={`./${currentPage - 1}`}>
                        <button>Previous Page</button>
                    </Link>
                )}
            </div>
            <div>
                {currentPage < totalPages && (
                    <Link href={`./${currentPage + 1}`}
                    >
                        <button>
                            Next Page
                        </button>
                    </Link>)}
            </div>
        </footer>
    );
};
export default MyPagination;

