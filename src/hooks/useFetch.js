import { useEffect, useState } from "react";
import { fetchApi } from "./fetchApi";

  const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchApi.get(endpoint);
        setData(res.data.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false)
    }
    fetchData()
  }, [endpoint]);
  return {data, loading ,error}
};
export default useFetch