import style from './Project.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

const data = [
    {
        link: 'https://github.com/NBThiet/webnhalam.git',
        img: 'https://airnfts.s3.amazonaws.com/nft-images/20211006/Naruto_Uzumaki_1633519650803.jpg',
        name: 'Anime Blog',
        time: '5 - 2021',
    },
    {
        link: 'https://github.com/NBThiet/animewebDA2.git',
        img: 'https://news.artnet.com/app/news-upload/2022/03/Trance-Utopia-Dividing-the-universe.jpg',
        name: 'Anime Story',
        time: '12 - 2021',
    },
    {
        link: 'https://github.com/NBThiet/BookAppReact.git',
        img: 'https://static01.nyt.com/images/2021/08/15/fashion/TEEN-NFTS--fewocious/TEEN-NFTS--fewocious-videoSixteenByNineJumbo1600.jpg',
        name: 'Book App',
        time: '4- 2022',
    },
];

function Project() {
    return (
        <div className={cx('project')}>
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('project_child_1')}>
                        <a href={data.link} className={cx('project_link')}>
                            <img src={data.img} alt="" srcset="" />
                            <div className={cx('InfPro')}>
                                <h4 className={cx('projectName')}>{data.name}</h4>
                                <p className={cx('projectTime')}>{data.time}</p>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Project;
