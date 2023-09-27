import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVolleyball,
    faStarOfDavid,
    faMusic,
    faMicrophone,
    faTree,
    faMotorcycle,
    faPaw,
    faFishFins,
} from '@fortawesome/free-solid-svg-icons';
import style from './Favourite.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

const data = [
    {
        title: 'Volleyball',
        icon: faVolleyball,
        color: "color:'rgb(250, 175, 36)'",
    },
    {
        title: 'Anime',
        icon: faStarOfDavid,
        color: "color:'rgb(10, 230, 238)'",
    },
    {
        title: 'Music',
        icon: faMusic,
        color: "color:'rgb(240, 88, 42)'",
    },
    {
        title: 'Sing',
        icon: faMicrophone,
        color: "color:'rgb(245, 12, 206)'",
    },
    {
        title: 'Nature',
        icon: faTree,
        color: "color:'rgb(8, 129, 14)'",
    },
    {
        title: 'Motobike',
        icon: faMotorcycle,
        color: "color:'rgb(98, 186, 204)'",
    },
    {
        title: 'Dog',
        icon: faPaw,
        color: "color:'rgb(218, 233, 15)'",
    },
    {
        title: 'Fishing',
        icon: faFishFins,
        color: "color:'rgb(49, 62, 245)'",
    },
];
function FavouriteItem() {
    return (
        <ul>
            {data.map((data, index) => {
                const color = data.color;
                return (
                    <li className={cx('child_menu')} key={index}>
                        <FontAwesomeIcon icon={data.icon} style={{ color }} className={cx('favouriteIcon')} />
                        {data.title}
                    </li>
                );
            })}
        </ul>
    );
}

export default FavouriteItem;
