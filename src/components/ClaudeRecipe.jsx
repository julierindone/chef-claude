import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
	return (
		<section class="recipe-section">
			<p>Chef Claude Recommends:</p>
			<article className="suggested-recipe-container"
				aria-live="polite">
					<ReactMarkdown>
				{props.recipe}
					</ReactMarkdown>
			</article>
		</section>
	)
}