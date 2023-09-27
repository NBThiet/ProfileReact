import style from './SideBar.scss';
import className from 'classnames/bind';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import Favourite from './Favourite/Favourite';
import FavouriteItem from './Favourite/FavouriteItem';

const cx = className.bind(style);

function SideBar() {
    return (
        <div>
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

export default SideBar;
