import React from 'react';
import module from './Header.module.scss'


function Header(props) {
    return (
        <header className={module.header}>
            <div className={module.header_content}>
                <h3>
                    ПОГОДА SEARCHER
                </h3>
            </div>
        </header>
    );
}

export default Header;