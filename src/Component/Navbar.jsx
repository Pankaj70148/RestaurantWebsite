import React from 'react'

export default function Navbar({filterdata,uniqueList}) {
  return (
    <>
     <nav className="navbar">
      <div className="btn-group">
               
         {
           uniqueList.map((cur)=>{
                return (
                    
                    <button className="btn-group__item" onClick={()=>filterdata(cur)}>{cur}</button>
                    
                
                )
            })
         }
                
                {/* <button className="btn-group__item" onClick={()=>Filterdata("lunch")}>lunch  </button>
                <button  className="btn-group__item" on onClick={()=>Filterdata("evening")}>evening </button>
                <button className="btn-group__item" onClick={()=>Filterdata("dinner")}>dinner </button> */}
                {/* <button className="btn-group__item" onClick={ ()=>setMenuData(MenuApi)}>All </button> */}

               
                
        </div>

        </nav>  
    </>
  )
}
