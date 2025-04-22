import React from 'react'
import style from './form.module.css'

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className={style.topContainer}>
      <form className={style.midContainer} onSubmit={handleSubmit}>
        <label>First Name</label>
        <input className={style.inputLabel} type="text" name='firstName' />
        <label>Last Name</label>
        <input className={style.inputLabel} type="text" name='lastName' />
        <button className={style.submitButton} type='submit'>Submit</button>
      </form>
      </div>
  )
}

export default Form