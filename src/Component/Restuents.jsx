import React ,{useState}from 'react'
import "./App.css"
import Menu from './Menu'
import MenuApi from './MenuApi'
import Navbar from './Navbar'

const uniquelist = [ 
               ...new Set (MenuApi.map((curr)=>{
               return curr.category
})),"All"]

export default function Restuents() {
  const [MenuData,setMenuData]= useState(MenuApi)
  const [Unique,setUnique]= useState(uniquelist)


  const Filterdata= (category)=>{

    if(category==="All"){
      setMenuData(MenuApi)
      return
    }
     const data= MenuApi.filter((cur)=>{
      return cur.category === category
     })

     
      setMenuData(data)

  }

  
  return (
    <>
     <Navbar filterdata={Filterdata} uniqueList= {Unique}/>
      <Menu MenuData={MenuData}/>
        
      
      
    </>
  )
}
