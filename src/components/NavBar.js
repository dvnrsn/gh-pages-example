import React from 'react'
import { NavLink } from 'react-router-dom';
import { Scoped } from "kremling";

const css = `
  & ul {
      padding: 0;
    }
    
  & li {
      list-style-type: none;
    }
  & .nav {
      display: flex;
    }

  & .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    
  & .nav li {
      margin-left: 30px;
    }
  & img {
    height: 60px;
    margin-left: -20px;
  }
  & .selected {
    font-weight: bold;
  }
  & a {
    text-decoration: none;
    color: #d0021b;
  }
  & .header-subtext {
    margin-bottom: 10px;
  }
`

const NavBar = () => {
  return (
    <Scoped css={css}>
      <div className="nav-container">
        
        <img src={require('../images/DevinRasmussen.PNG')} alt="" />
        <h3>on Canopy open source</h3>
        <ul className="nav">
          <li><NavLink activeClassName="selected" exact to={process.env.PUBLIC_URL +"/"}>Home</NavLink></li>
          <li><NavLink activeClassName="selected" to={process.env.PUBLIC_URL +"/kremling"}>Kremling</NavLink></li>
        </ul>
      </div>
    </Scoped>
  )
}

export default NavBar;