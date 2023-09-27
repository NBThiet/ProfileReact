import style from './Banner.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

function Banner({ bgr, name, avt }) {
    return (
        <div class="banner">
            <img className={cx('img_bgr2')} src={bgr} alt="" srcset="" />
            <p className={cx('name')}>{name}</p>
            <img className={cx('img-avt')} src={avt} alt="" srcset="" />
        </div>
    );
}

export default Banner;
