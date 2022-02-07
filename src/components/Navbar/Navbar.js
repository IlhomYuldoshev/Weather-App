import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputAction} from "../../redux/actions/actions";
import {SubmitHandler} from "./navbarFunctions";

function Navbar(props) {
  const state = useSelector(state => state.weather)
  const dispatch = useDispatch()

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <h1 className="navbar-logo">Weather App</h1>
          <form className="search-form" onSubmit={(e) => {
            e.preventDefault()
            SubmitHandler(state.inputValue, dispatch)
          }}>
            <input className="search-input"
                   onChange={(e) => {
                     dispatch(inputAction(e.target.value))
                   }}
                   value={state.inputValue}
                   type="search"/>
            <button className="btn" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
