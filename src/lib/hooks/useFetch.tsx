import { useEffect, useState } from "react";
import axios from "axios";
import type { IFetch } from "../types/components";

export const useFetch = ({ url, method = "GET", body, headers }: IFetch) => {
  const [data, setData] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setisLoading(true);
        const res = await axios({
          url,
          method,
          data: body,
          headers,
        });

        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
