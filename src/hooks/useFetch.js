import { useState, useEffect } from 'react';

function useFetch(url) {
  const API_BASE = 'https://gorest.co.in/public/v1';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/${url}`).then((res) =>
        res.json(),
      );
      if (response.data) {
        setData(response.data);
      }
      if (response.meta) {
        setMeta(response.meta.pagination);
      }
    } catch (err) {
      setError('Something went wrong');
    }

    setLoading(false);
  };

  return { data, meta, loading, error };
}

export default useFetch;
