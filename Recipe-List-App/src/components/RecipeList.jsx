import Recipe from './Recipe';

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Recipe 
          key={index} 
          name={recipe.name} 
          ingredients={recipe.ingredients} 
          instructions={recipe.instructions} 
        />
      ))}
    </div>
  );
}

export default RecipeList;
