import style from '../Screen.module.scss';
import className from 'classnames/bind';
import Infor from '../../../Infor';
import Experience from '../../../Experience';
import Project from '../../../Project';

const cx = className.bind(style);
function TabOne() {
    return (
        <div className={cx('screen1')}>
            <div className={cx('Inf')}>
                <Infor />
                <Experience />
            </div>
            <Project />
        </div>
    );
}

export default TabOne;
