const fetchData = async () => {
    try {
        //The http://localhost:5001 is the 'API' endpoint and the /names is specifying what within the endpoint you want to access essentially. So you could expose the /names while putting the http://localhost:5001 behind a .env file. 
        const data = await fetch('http://localhost:5001/ndfsf',{method:'GET'});
        data.json();
    } catch (error) {
        console.log("Error fetching data: ", error)
    }
}