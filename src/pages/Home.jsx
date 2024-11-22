import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../redux/recipeSlice'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
    const dispatch = useDispatch()
    const {allRecipes,loading,setSearch} = useSelector(state=>state.recipeReducer)
  
    useEffect(()=>{
      dispatch(fetchRecipes())
    },[])

    const filteredRecipes = allRecipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(setSearch.toLowerCase())
    );

    // console.log(setSearch);
    
  return (
    <>
      <Header/>
      {
        setSearch ? <div className='mt-4 ms-5'><span className="fs-4 fw-semibold text-danger">Search results for '{setSearch}' cuisine</span>
        <div style={{paddingTop:'60px'}} className='container'>
        <>
        { loading ?
          <div className="d-flex justify-content-center mt-5 fs-2">
            <img width={'70px'} height={'70px'} className='me-3' src="https://i.gifer.com/ZKZg.gif" alt="" />Loading...
          </div>
          :
          <div className="row">
          {
          filteredRecipes?.length>0 ?
          filteredRecipes?.map(recipes=>(
          <div className='col-lg-2 m-3 rounded border shadow'>
          <img width={'100%'} height={'200px'} src={recipes?.image} alt="" />
              <div className="text-center p-2">
              <h3 className="text-xl font-bold">{recipes?.name}</h3>
              <Link to={`recipes/${recipes?.id}`} className='bg-violet-600 rounded p-1 mt-3 inline-block' ><button>Get Recipe</button></Link>
              </div>
          </div>
          ))
          :
          <div className='d-flex justify-content-center align-items-center fw-bolder fs-3 text-danger my-5'>
            No Recipes are available!!!
          </div>
          }
      </div>}
        </>
        </div>
        </div> 
        
     :
     <div style={{paddingTop:'60px'}} className='container'>
        <>
        { loading ?
          <div className="d-flex justify-content-center mt-5 fs-2">
            <img width={'70px'} height={'70px'} className='me-3' src="https://i.gifer.com/ZKZg.gif" alt="" />Loading...
          </div>
          :
          <div className="row">
          {
          filteredRecipes?.length>0 ?
          filteredRecipes?.map(recipes=>(
          <div className='col-lg-2 m-3 rounded border shadow'>
          <img width={'100%'} height={'200px'} src={recipes?.image} alt="" />
              <div className="text-center p-2">
              <h3 className="text-xl font-bold">{recipes?.name}</h3>
              <Link to={`recipes/${recipes?.id}`} className='bg-violet-600 rounded p-1 mt-3 inline-block' ><button>Get Recipe</button></Link>
              </div>
          </div>
          ))
          :
          <div className='d-flex justify-content-center align-items-center fw-bolder fs-3 text-danger my-5'>
              No Recipes are available!!!
          </div>
          }
      </div>}
        </>
     </div>

      }
      
    </>
  )
}

export default Home
