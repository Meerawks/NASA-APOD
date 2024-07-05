import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"

function App() {
  const [data,setData]=useState(null)
  const [showModal, setShowModal]=useState(false)
  function displayModal(){
      setShowModal(!showModal)
  }

  useEffect(()=>{
      async function fetchAPIData(){
        const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
        const url= 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
        try{
            const res=await fetch(url)
            const apiData=await res.json()
            localStorage.setItem(localdata,JSON.stringify(apiData))
            setData(apiData)
            console.log('FETCHED FROM API: ' ,apiData)

        }
        catch (err){
          console.log(err)
        }

      }
        const today=(new Date().toDateString())
        const date=new Date()
        const localdata=`NASA-${today}`
      if(localStorage.getItem(localdata)){
        const apiData=JSON.parse(localStorage.getItem(localdata))
        console.log("fetched from cache: ", apiData)
        setData(apiData)
      }
      else {
        fetchAPIData()
      }
     
  },[])
  return (
    <>
        
        {data ?(<Main data={data}/>):(
          <div className="loading">
            <i className="fa-solid fa-spinner"></i>
            <p>Fetching data from NASA API</p>
          </div>
        )}
        {showModal && 
        (<SideBar data={data} displayModal={displayModal}/>)}
        {data &&(<Footer data={data} displayModal={displayModal}/>)}
    </>
  )
}

export default App
