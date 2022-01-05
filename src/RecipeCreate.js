import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  
  const [formData, setFormData] = useState({...initialFormState})
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
  };
  
  const handleSubmission = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initialFormState})
  };
  
  return (
    <form name="create" onSubmit={handleSubmission}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" placeholder="Name" required={true} onChange={handleChange} value={formData.name} size="10"/>
            </td>
              
              <td>
                <input id="cuisine" name="cuisine" type="text" placeholder="cuisine" required={true} onChange={handleChange} value={formData.cuisine} size="10"/>
              </td>
              
              <td>
                <input id="photo" name="photo" type="url" placeholder="url" required={true} onChange={handleChange} value={formData.photo} size="10"/>
              </td>
              
            <td>
              <textarea id="ingredients" name="ingredients" type="text" placeholder="ingredients" required={true} onChange={handleChange} value={formData.ingredients} size="10"/>
            </td>
            
             <td>
              <textarea id="preparation" name="preparation" type="text" placeholder="preparation" required={true} onChange={handleChange} value={formData.preparation} size="10"/>
            </td>
         
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
