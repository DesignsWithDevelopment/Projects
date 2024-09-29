import RecipeList from './components/RecipeList';

function App() {
  const recipes = [
    {
      name: "Pasta",
      ingredients: ["Pasta", "Tomato Sauce", "Cheese"],
      instructions: "Boil pasta. Add sauce. Sprinkle cheese."
    },
    {
      name: "Grilled Cheese",
      ingredients: ["Bread", "Butter", "Cheese"],
      instructions: "Butter the bread. Add cheese. Grill until golden brown."
    }
  ];

  return (
    <div>
      <h1>Recipe List</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;

