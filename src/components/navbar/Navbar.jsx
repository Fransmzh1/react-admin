import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

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
        </div>
      </div>
    </div>
  )
}

export default Navbar