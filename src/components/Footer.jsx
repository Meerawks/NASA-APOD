import React from 'react'

export default function Footer(props) {
    const {displayModal, data}=props
  return (
    <footer>
        <div className='bgGradient'></div>
        <div>
        <h1>NASA Picture of the day</h1>
            <h2>{data?.title}</h2>
           
        </div>
        <button onClick={displayModal}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
