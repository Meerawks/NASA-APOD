import React from 'react'

export default function SideBar(props) {
    const {displayModal, data}= props
  return (
    <div className='sideBar'>
        <div className='bgOverlay' onClick={displayModal}></div>
        <div className='sideBarContent'>
        <h2>{data?.title}</h2>
        <div className='description'>
            <p className='descriptionHead'>{data?.date}</p>
            <p>{data?.explanation}
        
                 </p>
        </div>
        <button onClick={displayModal}>
        <i className="fa-solid fa-arrow-right-long"></i>
        </button>
        </div>
    </div>
  )
}
