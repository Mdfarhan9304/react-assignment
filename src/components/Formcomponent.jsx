import React from 'react'

const Formcomponent = ({name, language, date}) => {
  return (
    <div className='bg-white rounded-lg text-black p-4 mt-4'>
       <p>You have selected the following details:</p>
      <ul>
        <li>Movie: {name}</li>
        <li>Language: {language}</li>
        <li>Date: {date}</li>
        <li>Price: 8$</li>
        <p>Press confirm booking to book your ticket </p>
      </ul>
    </div>
  )
}

export default Formcomponent
