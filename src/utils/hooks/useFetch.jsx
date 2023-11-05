import axios from "axios";
import { useEffect } from "react";

export const useFetch = (endpoint, initial) => {
  //prefijo use para poder usar fx en react

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Algo salió mal");

  useEffect(() => {
    setIsLoading(true);
    const getData = axios.get(endpoint);
    getData
      .then((res) => setData(res.data))
      .catch((error) => setErrorMessage(error))
      .finally(() => setIsLoading(false));
  }, [endpoint]);

  return { data, isLoading, errorMessage };
};
