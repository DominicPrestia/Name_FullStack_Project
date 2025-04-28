import React, { useState } from 'react'
import style from './dataDisplay.module.css'
import DataItem from './DataItem'

const DataDisplay = () => {

    const [displayData, setDisplayData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5001/names',{method:'GET'});

            const data = await response.json();

            console.log(data);
            setDisplayData(data);

        } catch (error) {
            console.log("Error fetching data: ", error)
        }
    }

    const getData = () => {
        fetchData();
    }

    return (
        <div className={style.topContainer}>
            <h2>MongoDB Data</h2>
            <button className={style.getDataButton} onClick={getData}>Get Data</button>
            <div className={style.dataOutput}>
                {displayData &&
                    displayData.map((nameData, index) => {
                       
                        return <DataItem key={index} nameData={nameData}/>
                    })
                }
            </div>
        </div>
    )
}

export default DataDisplay