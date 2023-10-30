import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';
import requests from '../../requests/requests';

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header></Header>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>

      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>




    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
   
  },
}));

export default Home