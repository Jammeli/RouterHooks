import * as React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import Home from './Components/Home';
import Description from './Components/Description';
import Nav from './Components/Nav';
import MoviesList from './Components/MoviesList';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [movies, setMovies]= useState ( 
    [
      {id:1,Title:'Titanic',Description:'mdlmsldmlsmdms',  URL:'www.titanic.com', Trailer:"https://www.youtube.com/embed/tgbNymZ7vqY"},
      {id:2,Title:'Prison Break',Description:'mdlmsldmlsmdms',  URL:'www.prisonb.com', Trailer: "https://www.youtube.com/watch?v=AL9zLctDJaU&ab_channel=KonstantinPichugin"},
      {id:3,Title:'Saw III',Description:'mdlmsldmlsmdms', URL:'www.sawwIII.com', Trailer:"https://www.youtube.com/watch?v=eZwnZqKfvzw&ab_channel=TheFilmArchives"},
      {id:4,Title:'The cube',Description:'mdlmsldmlsmdms',  URL:'www.thecube.com', Trailer:"https://www.youtube.com/watch?v=cVwCBGhD9H8&ab_channel=GardenofGore"},
      {id:5,Title:'No body',Description:'mdlmsldmlsmdms',  URL:'www.nobody.com', Trailer:"https://www.youtube.com/watch?v=wZti8QKBWPo&ab_channel=UniversalPictures"},
      {id:6,Title:'the man',Description:'mdlmsldmlsmdms',  URL:'www.theman.com', Trailer:"https://www.youtube.com/watch?v=qwbFCkMF4e4&ab_channel=shadowfax6264"},
      {id:7,Title:'Scream',Description:'mdlmsldmlsmdms',  URL:'www.scream.com', Trailer:"https://www.youtube.com/watch?v=beToTslH17s&ab_channel=ParamountPictures"},
      {id:8,Title:'No escape',Description:'mdlmsldmlsmdms',  URL:'www.noescape.com', Trailer:"https://www.youtube.com/watch?v=DOjj07EuO50&ab_channel=MovieclipsTrailers"},
      {id:9,Title:'The Dead',Description:'mdlmsldmlsmdms', URL:'www.theman.com', Trailer:"https://www.youtube.com/watch?v=qwbFCkMF4e4&ab_channel=shadowfax6264"},
      {id:10,Title:'The Hill',Description:'mdlmsldmlsmdms',  URL:'www.theman.com', Trailer:"https://www.youtube.com/watch?v=qwbFCkMF4e4&ab_channel=shadowfax6264"},
      {id:11,Title:'Blood',Description:'mdlmsldmlsmdms',  URL:'www.scream.com', Trailer:"https://www.youtube.com/watch?v=beToTslH17s&ab_channel=ParamountPictures"},
      {id:12,Title:'Mr Horse',Description:'mdlmsldmlsmdms',  URL:'www.noescape.com', Trailer:"https://www.youtube.com/watch?v=DOjj07EuO50&ab_channel=MovieclipsTrailers"},

    ]
  )
  const [movie_add, setMovie_Add]= useState ( 
    {Title:"",Description:"", URL:"", Trailer:""},  
  )

  const handleAddContact=(val)=>{
    setMovies([...movies,val])
}

  return (
    <div>
    <Router>
        <Nav/>
        <Routes>
            <Route path="/" exact element={ <Home/> } /> 
            <Route path='*' element={<NotFound/>}/>
            <Route path="/movies" element={<MoviesList movieList={movies}/>}/>
            <Route path="/movies/:id" element={<Description prodList={movies}/>}/>
            <Route path="/addmovie" element={<AddContact handleAddContact={handleAddContact}/>}/>
        </Routes>      
    </Router>
    </div>
  );
}

export default App;
