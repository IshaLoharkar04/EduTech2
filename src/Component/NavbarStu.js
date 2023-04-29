import "./NavbarStu.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
export default function NavbarStu() {
  return (
    <div className ='navbar'>
<div className ='wrapper'>
<div className='search'>
  <li><input type="text" placeholder="search..."/>
  <SearchOutlinedIcon/></li>
</div>
<div className="item">
<div className="item">
<LanguageIcon fontSize="10px" className="icon"/>
English
</div>
<div className="item">
  <DarkModeOutlinedIcon fontSize="10" className="icon"/>
</div>
<div className="item">
  <FullscreenExitOutlinedIcon fontSize="10px" className="icon"/>
</div>
<div className="item">
  <NotificationsNoneOutlinedIcon fontSize="10px" className="icon" />
  
</div>
<div className="item">
  <ChatBubbleOutlineOutlinedIcon fontSize="10px" className="icon"/>
  
</div>
<div className="item">
  <FilterListOutlinedIcon fontSize="10px" className="icon"/>
</div>
<div className="item">
<img fontSize="10px"
src="https://tse3.mm.bing.net/th?id=OIP.FVHGk_PkGsFzAfiFDDL0zQHaG9&pid=Api&P=0"
alt=""
className="avatar"/>
</div>

</div>
</div>
    </div>
  )
}
