
import React, {FC} from 'react';
import Link from "next/link";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    };
const Pagination:FC<PaginationProps> = ({currentPage,totalPages}) => {

    return (
        <div>

            {currentPage > 1 && (
                <Link href={`./${currentPage-1}`}>
                    <button>Previous Page</button>
                </Link>
            )}
            {currentPage < totalPages && (
                <Link href={`./${currentPage+1}`}
                >
                    <button>
                        Next Page
                    </button>
                </Link>)}


        </div>
    );
};

export default Pagination;