import style from './Menu.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouseChimney,
    faBookJournalWhills,
    faFilePen,
    faLocationDot,
    faImage,
    faCalendar,
} from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(style);
const data = [
    {
        title: 'Home',
        icon: faHouseChimney,
    },
    {
        title: 'Latest News',
        icon: faBookJournalWhills,
    },
    {
        title: 'Files',
        icon: faFilePen,
    },
    {
        title: 'Explore',
        icon: faLocationDot,
    },
    {
        title: 'Galery',
        icon: faImage,
    },
    {
        title: 'Events',
        icon: faCalendar,
    },
];
function MenuItem() {
    return (
        <ul>
            {data.map((data, index) => {
                return (
                    <li className={cx('child_menu')} key={index}>
                        <FontAwesomeIcon className={cx('menuIcon')} icon={data.icon} />
                        {data.title}
                    </li>
                );
            })}
        </ul>
    );
}

export default MenuItem;
