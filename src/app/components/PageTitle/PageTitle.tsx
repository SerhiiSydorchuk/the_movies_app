import React, {FC} from 'react';
import './PageTitle.css'

type TitleProps = {
    title: string
    name:string
}
const PageTitle:FC<TitleProps> = ({title,name}) => {
    return (
        <div className={'page_title'}>
             <h3>{title} {name}</h3>
        </div>
    );
};

export default PageTitle;