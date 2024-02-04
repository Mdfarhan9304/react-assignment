import React, { useState, useEffect } from 'react';

const Formcomponent = ({ name, language, date }) => {
  const [data1, setdata1] = useState('');
  const [data2, setdata2] = useState('');
  const [data3, setdata3] = useState('');

  function change1(event) {
    const value = event.target.value;
    setdata1(value);
    localStorage.setItem('Name', value);
  }

  function change2(event) {
    const value = event.target.value;
    setdata2(value);
    localStorage.setItem('Email', value);
  }

  function change3(event) {
    const value = event.target.value;
    setdata3(value);
    localStorage.setItem('Age', value);
  }

  useEffect(() => {
    const savedata1 = localStorage.getItem('Name');
    const savedata2 = localStorage.getItem('Email');
    const savedata3 = localStorage.getItem('Age');
    if (savedata1) setdata1(savedata1);
    if (savedata2) setdata2(savedata2);
    if (savedata3) setdata3(savedata3);
  }, []); // Run only on mount

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.setItem('Name', data1);
      localStorage.setItem('Email', data2);
      localStorage.setItem('Age', data3);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [data1, data2, data3]); // Run whenever data1, data2, or data3 changes

  return (
    <div className="bg-white rounded-lg text-black p-4 my-2">
      <p>You have selected the following details:</p>
      <ul>
        <li>Movie: {name}</li>
        <li>Language: {language}</li>
        <li>Date: {date}</li>
        <li>Price: 8$</li>
      </ul>
      <input
        type="text"
        placeholder="Your Name"
        value={data1}
        onChange={change1}
        className="w-full border outline-dashed my-2 rounded-md"
      />
      <input
        type="email"
        placeholder="Email address"
        value={data2}
        onChange={change2}
        className="w-full border outline-dashed my-2 rounded-md"
      />
      <input
        type="number"
        placeholder="Your Age"
        value={data3}
        onChange={change3}
        className="w-full border outline-dashed my-2 rounded-md"
      />
      <p>Press confirm booking to book your ticket </p>
    </div>
  );
};

export default Formcomponent;
