import {  makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Poster, Posters, RowRoot } from './RowStyled';

const Row = ({title, fetchUrl, isLargeRow }) => {
    const classes = useStyles();
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
          ((isLargeRow && movie.posters_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
            <Poster
            className={`${classes.poster} ${
              isLargeRow && classes.posterLarge
            }`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.posters_path : movie?.backdrop_path
            }`} 
            alt={movie?.name} />
          ) 
          )
        }


      </Posters>

      </RowRoot>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      color: "#fff",
      marginLeft: theme.spacing(4)
    
    },
    posters:{
      display: "flex",
      overflowY: "hidden",
      overflowX: "scroll",
      "&::-webkit-scrollbar":{
        display: "none",
      },
    },
    poster:{
      maxHeight: "12rem",
      objectFit: "contain",
      marginRight: theme.spacing(1),
      transition: "transform 450ms",
      "&:hover":{
        transform: "scale(1.1)"
      },
    },
  }));

export default Row