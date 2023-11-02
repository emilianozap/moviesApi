import axios from "axios";
import React, { useEffect, useState } from "react";
import { Poster, Posters, RowRoot } from "./RowStyled";
import { useDispatch } from "react-redux";
import { setIdMovie } from "../../redux/slice/heroSlice";

const Row = ({ key, title, fetchUrl, isLargeRow }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

   useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        console.log(fetchUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    dispatch(setIdMovie(movie));
  };

  return (
    <RowRoot>
      <h2>{title}</h2>
      <Posters>
        {movies.map(
          (movie) =>
            (
              <Poster
                key={movie.id}
                src={`${base_url}${movie?.poster_path}`}
                alt={movie?.name}
                movie = {[
                  movie.id

                
                ]}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </Posters>
    </RowRoot>
  );
};

export default Row;
