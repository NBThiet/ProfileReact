import style from '../Screen.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

const data = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_lKWFRetC46wG3iUPbm6KWua3xvtMx2zmvm7_ZG5tfJ8ieizzXjuXbuswmN-Fx1RBIo&usqp=CAU',
    },
    {
        img: 'https://cdn.vox-cdn.com/thumbor/wvbsLhkHRCP0y53Hbn1JYn6jr3c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22383046/acastro_210319_1777_nft_0001.jpg',
    },
    {
        img: 'https://tunicastudio.com/tunica/wp-content/uploads/2021/06/Screen-Shot-2021-07-07-at-7.22.34-PM-e1625711146517.png',
    },
    {
        img: 'https://lh3.googleusercontent.com/hY97V-enbB5rz2GMm9RuQvnvkl0y7DKUd5HMUeOlO1TGvmmvJ6g20c9zw05I9kXEUPRZvLtuDJOpMeMvJA6qcM_s6Z9i5UApvc9BHA=w600',
    },
    {
        img: 'https://lh3.googleusercontent.com/60wMzGCXvRMWpVeH9g5ikUcCD1hd_-skgI016Rfnl5rn3LNMmvmYiLC0C21J-Eggj0t3pCJx9auFhd2PHk9HnfaNMAR5awW1wN8uRZY=w600',
    },
    { img: 'https://tnaf20art.files.wordpress.com/2021/08/artblocks_paolo-tonon_26_of_525_minted.png' },
];

function TabThree() {
    return (
        <div className={cx('screen3')}>
            {/* {data.map((data) => (
                <img src={data.img} alt="" srcset="" />
            ))} */}
        </div>
    );
}

export default TabThree;
