import style from './MenuMB.module.scss';
import className from 'classnames/bind';
import Menu from '../SideBar/Menu/Menu';
import MenuItem from '../SideBar/Menu/MenuItem';
import Favourite from '../SideBar/Favourite/Favourite';
import FavouriteItem from '../SideBar/Favourite/FavouriteItem';

const cx = className.bind(style);

function MenuMB() {
    return (
        <div className={cx('MenuMB')}>
            <div className={cx('boxMenu')}>
                <Menu>
                    <MenuItem />
                </Menu>
                <Favourite>
                    <FavouriteItem />
                </Favourite>
            </div>
        </div>
    );
}

export default MenuMB;
