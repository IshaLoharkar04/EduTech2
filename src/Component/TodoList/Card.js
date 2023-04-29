import React from 'react'
import"./card.css"
 const Card=({taskObj,index,deleteTask})=> {
  const color=[
    {
primaryColor:"#5D93E1",
SecondaryColor:"#ECF3FC"

},
{
primaryColor:"#F9D288",
SecondaryColor:"#FEFAF1"
},

{
primaryColor:"#5DC250",
SecondaryColor:"#F2FAF1"
},
{
primaryColor:"#F4864F7",
SecondaryColor:"#FDF1F1"

},
{
  primaryColor:"#B964F7",
  SecondaryColor:"#F3F0FD"
  
  }
]

    const handleDelete=()=>{
        deleteTask(index)
    }
  return (
   
    <div class="card-wrapper mr-4">
    <div class="card-top" style={{"background-color": color[index%5].primaryColor}}></div>
    <div class="task-holder">
        <span class="card-header" style={{"background-color":color[index%5].SecondaryColor,"border-radius":"10px"}}>{taskObj.Name}</span>
        <p>{taskObj.Description}</p>
        <div style={{position:"absolute",right:"20px",bottom:"20px"}}>
            <i class="far  fa-edit mr-3" style={{"color":color[index%5].primaryColor, }}></i>{"  "}
            <i class="fas fa-trash-alt" style={{"color":color[index%5].primaryColor}}></i>
    </div>
    </div>
    </div>
  )
}
export default Card














