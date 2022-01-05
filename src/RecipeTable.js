import React from "react";

function RecipeTable({recipes, deleteRecipe}) {
  return recipes.map((recipes, index) => {
    return (
      <tr key={index}>
        <td>{recipes.name}</td>
         <td>{recipes.cuisine}</td>
         <td><img src={recipes.photo} alt ={`${recipes.name}`}/></td>
        <td className="content_td"><p>{recipes.ingredients}</p></td>
        <td className="content_td"><p>{recipes.preparation}</p></td>
        <td><button name="delete" onClick={() =>deleteRecipe(index)}>Delete</button></td> 
      </tr>
    )

  })
  
}

export default RecipeTable;