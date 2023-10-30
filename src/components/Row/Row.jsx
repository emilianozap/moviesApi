import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Poster, Posters, RowRoot } from './RowStyled';

const Row = ({title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const base_url = "http://image.tmdb.org/t/p/original";


  useEffect(() => {
    const fetchData = async()=>{
      const request = await axios.get(fetchUrl)
      setMovies(request.data.result)
      return request
    };
    fetchData();
  
  
  }, [fetchUrl])
  


  return (
    <RowRoot>
      
      <h2>{title}</h2>
      <Posters>
        {
          movies.map((movie)=>
            <Poster 
            key={movie.id}
            src={`${base_url}`} 
            alt={movie?.name} />
          ) 
        }


      </Posters>

      </RowRoot>
  )
}



export default Row