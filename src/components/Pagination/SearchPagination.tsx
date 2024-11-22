import React, {FC} from 'react';
import Link from "next/link";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    query: { [key: string]: string | string[] | undefined }
};
const SearchPagination:FC<PaginationProps> = ({currentPage,totalPages,query}) => {
    const queryBuild =(page:number) => {
        return {...query, page:page.toString() }
    }
    return (
        <div>

            {currentPage > 1 && (
                <Link
                    href={{
                        pathname: '/search',
                        query: queryBuild(currentPage-1),

                    }}
                >
                    <button>
                        Previous Page
                    </button>
                </Link>
            )}
            {currentPage < totalPages && (
                <Link
                    href={{
                        pathname: '/search',
                        query: queryBuild(currentPage+1),
                    }}
                >
                    <button>
                        Next Page
                    </button>
                </Link>)}


        </div>
    );
};

export default SearchPagination;