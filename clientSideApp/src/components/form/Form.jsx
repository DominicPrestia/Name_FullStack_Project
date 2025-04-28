import React, { useState } from 'react'
import style from './form.module.css'

const Form = () => {

  const [personName, setPersonName] = useState();


  const fetchData = async (person) => {
    try {
      const response = await fetch('http://localhost:5001/names', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(person)
      });

      if (!response.ok) {
        throw new Error("HTTP error! status: ", response.status);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log("Error fetching data: ", error)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const nameData = new FormData(e.target);

    const firstName = nameData.get('firstName');
    const lastName = nameData.get('lastName');

    const person = {
      firstName,
      lastName,
    }

    setPersonName(person)
    fetchData(person);

  }


  return (
    <div className={style.topContainer}>
      <form className={style.midContainer} onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          className={style.inputLabel}
          type="text"
          name='firstName'
        />
        <label>Last Name</label>
        <input
          className={style.inputLabel}
          type="text"
          name='lastName'
        />
        <button className={style.submitButton} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form