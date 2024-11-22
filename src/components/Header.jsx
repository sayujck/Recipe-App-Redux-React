import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/recipeSlice';
import { Link } from 'react-router-dom'


const Header = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
      const searchItem = e.target.value;
      // console.log(searchItem);
      dispatch(setSearch(searchItem));
  };
      
  return (
    <nav className='d-flex justify-content-between align-items-center bg-success p-3'>
      <Link style={{textDecoration:'none'}} className='text-white fs-1 fw-bolder' to={'/'}> <i className='fa-solid fa-utensils ms-1 me-3'></i>Recipe App</Link>
      <input style={{width:'350px',height:'50px'}} onChange={handleSearch} className='ps-3' type="text" placeholder='Search by Cuisine' />
    </nav>
  )
}

export default Header