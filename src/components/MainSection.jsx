/**
 * Challenge: clean up our code!
 * Let's make a couple new components to make things a little cleaner.
 *
 * 1. Move the entire recipe <section> into its own ClaudeRecipe component.
 * 2. Move the list of ingredients <section> into its own IngredientsList component.
 *
 * While you're considering how to structure things, consider where state is.
 * Think about if it makes sense or not to move it somewhere else, how you'll communicate between the parent/child components, etc.
 *
 * The app should function as it currently does when you're done, so there will likely be some extra work to be done beyond what I've listed above. */


import React from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
	const [ingredients, setIngredients] = React.useState([])

	const [recipeShown, setRecipeShown] = React.useState(false)

	function addIngredient(formData) {
		const newIngredient = formData.get("ingredient")
		setIngredients(prevIngredients => [...prevIngredients, newIngredient])
	}

	function toggleRecipeShown() {
		setRecipeShown(prevStatus => !prevStatus)
	}

	return (
		<main>
			<form action={addIngredient} className="add-ingredient-form">
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
					name="ingredient"
				/>
				<button>Add ingredient</button>
			</form>
			{/* TODO: Ready for Recipe div might be better as a different component. */}
			{ingredients.length > 0 &&
				<IngredientsList
					ingredients={ingredients}
					toggleRecipeShown={toggleRecipeShown}
				/>}
			{recipeShown && <ClaudeRecipe />}
		</main>
	)
}