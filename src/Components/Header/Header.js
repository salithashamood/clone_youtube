import './Header.css'
import { Link } from 'react-router-dom';
import { SearchSharp, MicSharp, MenuSharp, VideoCallSharp, NotificationsNoneSharp, AccountCircleSharp } from '@mui/icons-material';


export default function Header({theme}) {
    return (
        <div className= {`header ${theme}`}>
            <div className="header_left" >
                <MenuSharp />
                <Link to='/' className={`header_left_brand ${theme}`}><img
                    alt='youtube'
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                    width='30'
                    height='30'
                    className="header_left_logo"
                />
                    {' '}YouTube </Link>
                
            </div>
            <div className="header_search">
                <div className='header_search_bar'><input type="text" placeholder='Search' />
                <SearchSharp className='search_icon' /></div>
                <MicSharp />
            </div>
            <div className="header_icon">
                <Link className={`icon_link ${theme}`} to='/'><VideoCallSharp /></Link>
                <Link className={`icon_link ${theme}`} to='/'><NotificationsNoneSharp /></Link>
                <Link className={`icon_link ${theme}`} to='/'><AccountCircleSharp /></Link>
            </div>
        </div>
    );
}
