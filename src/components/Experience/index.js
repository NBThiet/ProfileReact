import style from './Experience.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(style);

function Experience() {
    return (
        <div className={cx('Inf2')}>
            <p className={cx('Intro')}>Experience:</p>
            <div className={cx('Inf-Icon')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faReact} className={cx('fa-html5')} />

                    <p>REACT</p>
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faFigma} className={cx('fa-css3-alt')} />

                    <p>FIGMA</p>
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faNodeJs} className={cx('fa-js-square')} />

                    <p>NODE</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
