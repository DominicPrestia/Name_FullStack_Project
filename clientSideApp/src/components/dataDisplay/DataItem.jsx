import React from 'react'
import style from './dataItem.module.css'

const DataItem = ({ nameData }) => {

    const { _id, firstName, lastName } = { ...nameData };


    // console.log(data);

    return (
        <div className={style.topContainer}>
            <div className={style.names}>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
            </div>
            <div className={style.dataID}>
                <div>ID:</div>
                <div><span>{_id}</span></div>
            </div>
        </div>
    )
}

export default DataItem