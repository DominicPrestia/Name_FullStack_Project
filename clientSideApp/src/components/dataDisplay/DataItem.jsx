import React from 'react'
import style from './dataItem.module.css'

const DataItem = () => {
    return (
        <div className={style.topContainer}>
            <div className={style.dataID}>ID: {'X'}</div>
            <div className={style.names}>
                <div>First Name: {'x'}</div>
                <div>Last Name: {'x'}</div>
            </div>
        </div>
    )
}

export default DataItem