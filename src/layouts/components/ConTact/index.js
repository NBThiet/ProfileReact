import style from './ConTact.scss';
import className from 'classnames/bind';
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = className.bind(style);

var date = new Date();

var day = date.getDay();
var date_child = date.getDate();
var months = date.getMonth() + 1;
var year = date.getFullYear();
const dayArray = ['MonDay', 'TueDay', 'WedDay', 'ThuDay', 'FriDay', 'Sat', 'Sun'];

function ConTact() {
    return (
        <nav>
            <FontAwesomeIcon className={cx('fa-address-card')} icon={faAddressCard} />
            <div className={cx('ContainerEmail')}>
                <div className={cx('myEmail')}>
                    <h4>CONTACT</h4>
                    <div className={cx('boxEmail')}>
                        <FontAwesomeIcon className={cx('fa-envelope')} icon={faEnvelope} />
                        <div className={cx('Email')}>nguyenbathiet2312@gmail.com</div>
                    </div>
                    <div className={cx('btn_contact')}>
                        <a href="https://mail.google.com/">Send Mail</a>
                    </div>
                </div>

                <div className={cx('calendar')}>
                    <h2 className={cx('day')}>{dayArray[day - 1]}</h2>
                    <h1 className={cx('date')}>{date_child}</h1>
                    <h4 className={cx('month')}>{months + '-' + year}</h4>
                </div>
            </div>
        </nav>
    );
}

export default ConTact;
