import { useState,useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { fetchListMovie } from "./duck/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function ListMovie() {
  const props = useSelector((state) => {
    return state.listMovieReducer
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchListMovie())
  }, [])
  if (props.loading) return <p>Loading...</p>

  console.log(props);
  const renderListMovie = () => {
    const {data} = props
    if (data && data.length > 0) {
      return data.map((movie) => <Movie key={movie.maPhim} movie={movie}/>)
    }
  }

  
  return (
    <div>
      <h1>ListMovie</h1>
      <div className="grid grid-cols-4 gap-5">
        {renderListMovie()}
      </div>
    </div>
  );
}
