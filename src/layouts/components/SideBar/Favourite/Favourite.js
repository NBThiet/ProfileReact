import style from './Favourite.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

function Favourite({ children }) {
    return (
        <div className={cx('menu2')}>
            <h4 className={cx('titleMenu')}>MY FAVOURITE</h4>
            {children}
        </div>
    );
}

export default Favourite;
