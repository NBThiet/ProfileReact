import style from './DefaultLayout.scss';
import classNames from 'classnames/bind';
import SideBar from '../components/SideBar';
import Content from '../components/ConTent';
import ConTact from '../components/ConTact';
import MenuMB from '../components/MenuMB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={cx('root')}>
            <FontAwesomeIcon className={cx('fa-bars')} icon={faBars} onClick={() => setShowMenu(!showMenu)} />
            <h4 className={cx('titleHead')}>S H I S U I</h4>

            {showMenu ? <MenuMB /> : <></>}
            <div className={cx('mainMenu')}>
                <SideBar />
            </div>
            <div className={cx('containerInf')}>
                <Content>{children}</Content>
            </div>
            <div className={cx('mainList')}>
                <ConTact />
            </div>
        </div>
    );
}

export default DefaultLayout;
