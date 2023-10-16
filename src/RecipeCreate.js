import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleName = ({ target }) => {
    setName(target.value);
  }
  const handleCuisine = ({ target }) => {
    setCuisine(target.value);
  }
  const handlePhoto = ({ target }) => {
    setPhoto(target.value);
  }
  const handleRating = ({ target }) => {
    setRating(target.value);
  }
  const handleIngredients = ({ target }) => {
    setIngredients(target.value);
  }
  const handlePreparation = ({ target }) => {
    setPreparation(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ name, cuisine, photo, rating, ingredients, preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setRating("");
    setIngredients("");
    setPreparation("");
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" value={name} type="text" placeholder="Name" required={true} onChange={handleName}/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" value={cuisine} type="text" placeholder="Cuisine" required={true} onChange={handleCuisine}/>
            </td>
            <td>
              <input id="photo" name="photo" value={photo} type="url" placeholder="URL" required={true} onChange={handlePhoto}/>              
            </td>
            <td>
              <select
                id="rating"
                name="rating"
                onChange={handleRating}
                value={rating}
              >
                <option value="">-- Select Rating --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" value={ingredients} placeholder="Ingredients" required={true} rows={3} onChange={handleIngredients}/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" value={preparation} placeholder="Preparation" required={true} rows={3} onChange={handlePreparation}/>
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
