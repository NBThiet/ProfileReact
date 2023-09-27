import style from './Home.scss';
import className from 'classnames/bind';
import Banner from '../../components/Banner';
import TabBar from '../../components/Tabbar';
import Bgr from '../../image/bgr.jpg';
import Avt from '../../image/avt.jpg';

const cx = className.bind(style);

function Home() {
    return (
        <div className={cx('boxInf')}>
            <Banner bgr={Bgr} name="Ba Thiet" avt={Avt} />

            <TabBar />
        </div>
    );
}

export default Home;
