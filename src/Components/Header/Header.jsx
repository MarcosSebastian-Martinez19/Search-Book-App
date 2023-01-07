import React from 'react'
import NavBar from "../NavBar/NavBar.jsx"
import SearchForm from "../SearchForm/SearchForm.jsx"
import "./Header.css"

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <NavBar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">find your book of choice.</h2><br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut, dolorem ullam unde dolorum qui est molestias quae et sit voluptates ipsam. Alias dolor ullam libero enim saepe, adipisci omnis aliquid iusto veniam amet in a aut animi.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header