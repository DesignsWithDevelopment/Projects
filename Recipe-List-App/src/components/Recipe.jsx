function Recipe({ name, ingredients, instructions }) {
    return (
      <div className="recipe-card">
        <h2>{name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{instructions}</p>
      </div>
    );
  }
  
  export default Recipe;
  