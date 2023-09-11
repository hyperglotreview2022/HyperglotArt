import { makeRequest } from "../pages/makeRequest";
import { useEffect, useState } from "react";

const usefetch = (url) => {

  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
  try{
    setLoading(true)
    const res = await makeRequest.get(url);
    setData(res.data.data);
    console.log(res.data.data)
  } catch(err) {
    setError(true)
  }
  setLoading(false)
};
fetchData();
}, [url]);

return{data,loading,error};

};

export default usefetch;