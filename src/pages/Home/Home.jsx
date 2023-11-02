import React from 'react'
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';
import requests from '../../requests/requests';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner/>
      <Row title="MOVIES ORIGINALS" fetchUrl={requests.fetchMoviesOriginals}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ACTIONS MOVIES" fetchUrl={requests.fetchActionMovies}/>
      






    </div>
  )
}


export default Home