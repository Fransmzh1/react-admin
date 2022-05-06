import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." /><SearchRoundedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon/>English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon/>English
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon/>English
          </div>
          <div className="item">
            <NotificationsOutlinedIcon/>English
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar