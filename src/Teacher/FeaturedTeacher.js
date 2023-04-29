import "./featuredteacher.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import "react-circular-progressbar/dist/styles.css"
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
export default function FeaturedTeacher() {
  return (
    <div className="Featured">
    <div className="top"></div>
   <h1  className ="title">Total Present
   <MoreVertOutlinedIcon  fontSize="medium"/></h1>
    <div className="bottom">
        <div className="featuredChart">
<CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
<p className="title">Total Attendance</p>
 

    </div>
</div>
        </div>
   
  )
}
