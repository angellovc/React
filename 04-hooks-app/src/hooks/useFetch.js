import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {

  const [state, setState] = useState({data: null, loading: true, error: null});
  const mounted = useRef(true);

  useEffect(() => {
    return () => mounted.current = false;
  }, []);


  useEffect(() => {

    setState({loading: true, data: null, error: null});

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      if (mounted.current === true) {
          setState({
            loading: false,
            error: null,
            data
        });
      } else {
        console.log('setState has been prevented to be called once it was dismounted')
      }
    })
  }, [url]);


  return state;
}

export default useFetch
