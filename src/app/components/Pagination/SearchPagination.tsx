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
        <footer>

            {currentPage > 1 && (
                <div><Link
                    href={{
                        pathname: '/search',
                        query: queryBuild(currentPage - 1) ,
                    }}
                >
                    <button>
                        Previous Page
                    </button>
                </Link></div>
            )}
            {currentPage < totalPages && (
                <div><Link
                    href={{
                        pathname: '/search',
                        query: queryBuild(currentPage + 1),
                    }}
                >
                    <button>
                        Next Page
                    </button>
                </Link></div>)}


        </footer>
    );
};

export default SearchPagination;