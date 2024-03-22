import React, { useEffect, useState } from "react";
import axios from "axios";

const useAxiosFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async()=>{
        try {
            const response = await axios.get(url,{
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                }});
                console.log(response.data);
                 setData(response.data);
        } catch (error) {
            setError(error);
        }finally{
            setLoading(false)
        }
    }
    fetchData();
  }, [url]);

  return {loading,error,data}
};

export default useAxiosFetch;
