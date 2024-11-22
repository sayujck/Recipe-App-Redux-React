import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


const RecipeDetails = () => {
    const [recipe,setRecipe] = useState({})
    const {id} = useParams()
    console.log(id);
    console.log(recipe);
    
    
    useEffect(()=>{
      if(sessionStorage.getItem("allRecipes")){
        const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
        setRecipe(allRecipes.find(item=>item.id==id))
      }
    },[])


  return (
    <>
      <div style={{ paddingTop: '200px' }} className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
           <img width={'100%'} height={'auto'} src={recipe?.image} alt={recipe?.image} className="rounded shadow" style={{ maxWidth: '400px' }}/>
           <p className="mt-4">Difficulty: {recipe?.difficulty}</p>
           <p>Time Required: {recipe?.prepTimeMinutes}min</p>
          </div>
          <div style={{width:'500px'}} className="col-lg-6">
            <h2 className="mb-5 fw-bold">{recipe?.name}</h2>
            <h4 className="mb-3 fw-bold"> Cuisine: <span className='fw-semibold'>{recipe?.cuisine}</span></h4>
            <h4 className="mb-3 fw-bold">Ingredients: <span className='fs-5 fw-semibold'>{recipe?.ingredients?.join(', ')}</span></h4>
            <h4 className="fw-bold">Instructions: <span className='fs-5 fw-light'>{recipe?.instructions}</span></h4>
          </div>
        </div>
      </div>
    </>
  )

}

export default RecipeDetails