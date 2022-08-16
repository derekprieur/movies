import React, { useState } from "react"
import { Route, Routes } from 'react-router-dom'
import { useEffect } from "react"
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard"
import Home from "./pages/Home"
import MovieDetail from './pages/MovieDetail'

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
    )
}

export default App