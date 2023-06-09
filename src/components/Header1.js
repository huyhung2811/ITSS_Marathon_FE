import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header1.css';
import logo from '../assets/img/logo.png';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import axios from 'axios';

function Header() {
    const [activeButton, setActiveButton] = useState(null);
    const [userInfo, setUserInfo] = useState({});
    const user_id = localStorage.getItem('userid');
    console.log('user_id', user_id);
    const handleClickedOption = (buttonName) => {
        setActiveButton(buttonName);
    };
    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const response = await axios.get(
                    `https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/users/${user_id}`,
                );
                setUserInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserInfo();
    }, [user_id]);

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/list-teacher">
                        <img src={logo} alt="Marathon edu Logo" />
                    </Link>
                </div>

                <div className="navigation">
                    <div className="list">
                        <button
                            className={activeButton === 'search' ? 'active' : 'navigation-options'}
                            onClick={() => handleClickedOption('search')}
                        >
                            <Link to="/list-teacher">ホームページ</Link>
                        </button>
                        <button
                            className={activeButton === 'prices' ? 'active' : 'navigation-options'}
                            onClick={() => handleClickedOption('prices')}
                        >
                            <Link to="/bookmark">好きな先生</Link>
                        </button>
                    </div>

                    <div className="notification-bell">
                        {/* <FontAwesomeIcon icon={faBell} style={{ color: '#000000' }} className="fa-3x" /> */}
                        <NotificationsNoneIcon sx={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                    </div>
                    <div className="user">
                        <Link to="/profile">
                            <div className="avatar">
                                {userInfo.avatar ? (
                                    <img src={userInfo.avatar} alt="avatar" />
                                ) : (
                                    <img
                                        src="https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png"
                                        alt="avatar"
                                    />
                                )}
                            </div>
                        </Link>
                    </div>
                    {/* <span>
                        <button className="profile">プロフィール</button>
                    </span> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
