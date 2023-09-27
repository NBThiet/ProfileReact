import style from './Tabbar.module.scss';
import className from 'classnames/bind';
import TabOne from '../../components/Tabbar/TabItem/TabOne';
import TabTwo from '../../components/Tabbar/TabItem/TabTwo';
import TabThree from '../../components/Tabbar/TabItem/TabThree';
import { useState, useEffect } from 'react';

const cx = className.bind(style);

const data = [
    {
        id: 0,
        name: 'TimeLine',
        content: <TabOne />,
    },
    {
        id: 1,
        name: 'About',
        content: <TabTwo />,
    },
    {
        id: 2,
        name: 'Photo',
        content: <TabThree />,
    },
];

function TabBar() {
    const [type, setType] = useState(0);
    const [showTab, setShowTab] = useState([]);
    console.log(showTab);

    useEffect(() => {
        setShowTab(data[type]);
    }, [type]);
    return (
        <nav>
            <div className={cx('tabbar')}>
                {data.map((data, index) => {
                    return (
                        <li
                            key={index}
                            className={cx('tab_child')}
                            style={
                                type === data.id
                                    ? {
                                          backgroundColor: 'rgb(27, 29, 46)',
                                          borderBottom: '3px solid rgb(18, 112, 235)',
                                      }
                                    : {}
                            }
                            onClick={() => setType(data.id)}
                        >
                            {data.name}
                        </li>
                    );
                })}
                ;
            </div>
            {showTab.content}
        </nav>
    );
}

export default TabBar;
