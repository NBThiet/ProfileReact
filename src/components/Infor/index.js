import style from './Infor.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPlaceOfWorship, faJedi } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(style);

const data = [
    {
        title: 'Study At :',
        content: 'Đại Học CNTT Và Truyền Thông Việt-Hàn',
        icon: faGraduationCap,
    },
    {
        title: 'Live In :',
        content: 'Nghệ An, Việt Nam',
        icon: faPlaceOfWorship,
    },
    {
        title: 'Name :',
        content: 'Nguyễn Bá Thiết',
        icon: faJedi,
    },
];
function Infor() {
    return (
        <div className={cx('Inf1')}>
            <p className={cx('Intro')}>Introduction</p>
            {data.map((data, index) => {
                return (
                    <li key={index}>
                        <FontAwesomeIcon icon={data.icon} />
                        {data.title}
                        <span className={cx('IF')}>{data.content}</span>
                    </li>
                );
            })}
        </div>
    );
}

export default Infor;
