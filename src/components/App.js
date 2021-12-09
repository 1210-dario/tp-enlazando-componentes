import React from 'react';
import SideBar from './SideBar';
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import Error from './NotFound';
function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
          <Route path="/GenresInDb" element={<GenresInDb />} />
          <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
          <Route path="/notFound" element={<Error />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
