import style from '../Screen.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

const data = [
    {
        title: 'Education:',
        content: [
            ' Student at Vietnam-Korea School of IT and Communication,Specialized in Multimedia Communication',
            ' Experience working with HTML, CSS, JavaScript, ReactJS and Got myself a few projects',
            'Moving on to learn more about TypeScript',
            'Know how to use some basic functions of GitHub to manage projects',
            'Ability to read and understand English at a basic level',
        ],
    },
    {
        title: 'Career goals:',
        content: [
            'Want to follow the field of web programming and start from Front-End and then develop to Full-Stack',
            ' Continuously learning, absorbing new knowledge and technologies to keep up with the development of the profession',
            'With the knowledge I have, first I want to find a business to practice,In real battle, see what aspects you are lacking in to improve and perfect',
        ],
    },
];

function TabTwo() {
    return (
        <div className={cx('screen2')}>
            <div className={cx('boxContent')}>
                {data.map((data) => {
                    return (
                        <nav>
                            <h3>{data.title}</h3>

                            {data.content.map((content, ind) => {
                                return (
                                    <li className={cx('content')} key={ind}>
                                        + {content}
                                    </li>
                                );
                            })}
                        </nav>
                    );
                })}
            </div>
        </div>
    );
}

export default TabTwo;
