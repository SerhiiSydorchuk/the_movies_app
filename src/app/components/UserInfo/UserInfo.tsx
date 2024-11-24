import React from 'react';
import './userInfo.css'

const UserInfo = () => {
    return (
        <div className={'userWrap'}>
            <div>
                <img width="32" height="32"
                     src="https://img.icons8.com/?size=100&id=7820&format=png&color=FFFFFF"
                     alt="external-user-web-flaticons-flat-circular-flat-icons"/>
            </div>
            <p>Welcome User</p>
        </div>
    )
        ;
};

export default UserInfo;