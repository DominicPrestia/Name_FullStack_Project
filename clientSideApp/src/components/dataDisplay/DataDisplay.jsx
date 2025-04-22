import React from 'react'
import style from './dataDisplay.module.css'
import DataItem from './DataItem'

const DataDisplay = () => {
    return (
        <div className={style.topContainer}>
            <h2>MongoDB Data</h2>
            <div className={style.dataOutput}>
                <DataItem/>
            </div>
        </div>
    )
}

export default DataDisplay