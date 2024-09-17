import React from 'react'

export default function Menu({MenuData}) {
    console.log(MenuData)
  return (
    <>

<section className='main-card--cointainer'>
     {

       MenuData.map((curr)=>{

        
            return (
                <>
<div className="card-container" >
 <div className="card " key={curr.id}>
   <div className="card-body">
     <span className="card-number card-circle subtle">{curr.id}</span>
     <span className="card-author subtle">{curr.category}</span>
     <h2 className="card-title"> {curr.name}</h2>
     <img src={curr.image} alt="images" className='card-media igm'/>
   </div>
   </div>
</div>
     

                </>
            )


        })
     }   
      </section>

    </>
  )
}
