import "./Widgets.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
export default function Widgets({type}) {
  let data;
  //temporary
  const amount=100;
  const diff=20;
  switch(type){
    case"Profile":
    data={
      title:"PROFILE",
      isMoney:false,
      link:"Profile Details",
      icon:<PersonOutlineOutlinedIcon
       className="icon"
       style={{
        color:"crimson",
        backgroundColor:"rgba(255,0,0,0.2)",

       }
       }
       />,
    }
    break;
    case"Home Work":
    data={
      title:"HOME WORK",
      isMoney:false,
      link:"To Do List",
      icon:<MenuBookOutlinedIcon 
      className="icon"
      style={{backgroundColor:"rgba(0,128,0,0.2)",color:"green" }}
      />,
    }
    break;
    case"Exam Result":
    data={
      title:"EXAM RESULT",
      isMoney:false,
      link:"See All Marks",
      icon:<TaskOutlinedIcon
       className="icon"
       style={{backgroundColor:"rgba(0,128,0,0.2)",color:"blue" }}
       />,
    }
    break;
    case"Fees Pending":
    data={
      title:"FEES PENDING",
      isMoney:false,
      link:"See Pending Fees",
      icon:<CurrencyRupeeOutlinedIcon  
      className="icon"
      style={{backgroundColor:"rgba(128,0,128,0.2)",color:"purple" }}
   
      />,
    }
    break;
    default:
      break;
  }
  return (
    <div className="Widgets">
         <div className="left">
             <span className="title">{data.title}</span>
             <span className="Counter">{data.isMoney && "$"}{amount}</span>
             <span className="link">{data.link}</span>
           </div>
         <div className="right">
           <div className="percentage positive">
             < KeyboardArrowUpIcon />
             {diff}%
          </div>
            {data.icon}
        </div>
        
    
    </div>
  )
}
