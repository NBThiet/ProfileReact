import style from './Menu.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

function Menu({ children }) {
    return (
        <div className={cx('menu')}>
            <h4 className={cx('titleMenu')}>MENU</h4>
            {children}
        </div>
    );
}

export default Menu;
