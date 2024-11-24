
import React, {FC} from 'react';
import Link from "next/link";
import './pagination.css'

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    };
const MyPagination: FC<PaginationProps> = ({currentPage, totalPages}) => {

    return (
        <footer>


            {currentPage > 1 && (
                <div className={'prev_page'}><Link href={`./${currentPage - 1}`}>
                    <button className={'btn_pag'}><img
                        src="https://img.icons8.com/?size=25&id=LqMxwgRyD4p2&format=png&color=FFFFFF"
                        alt="arrow left"/></button>
                    <div className={'page side_page'}><h3>{currentPage-1}</h3></div>
                </Link></div>
            )}

            <Link href={`./${currentPage}`}><div className={'page'}><h3>{currentPage}</h3></div></Link>

            {currentPage < totalPages && (
                <div className={'next_page'}><Link href={`./${currentPage + 1}`}>
                    <div className={'page side_page'}><h3>{currentPage + 1}</h3></div>
                    <button className={'btn_pag'}>
                        <img src="https://img.icons8.com/?size=25&id=12X5DB0j5Olg&format=png&color=000000"
                             alt="arrow right"/>
                    </button>
                </Link></div>)}

        </footer>
    );
};
export default MyPagination;
