import React from 'react'
import '../App.css'
import {SideBarData} from './SideBarData'

function SideBar() {
  return (
    <>
    <div className='SideBar'> 
    <ul className='SideBarList'>
    {SideBarData.map((val,key)=>{
        return(
            <li 
            key={key} 
            className=''
            id={window.location.pathname== val.link ? 'active' : ""}
            onClick={()=>{window.location.pathname=val.link}}>
                <div id="icon">{val.icone}</div><div id="title">{val.title}</div>
                
            </li>
        )
    }
    )} 
    </ul>
    </div>
    </>
  )
}

export default SideBar