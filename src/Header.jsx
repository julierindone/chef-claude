import claudeIcon from './assets/chef-claude-icon.png'

export default function Header() {
	return (
		<header>
			<img className="chef-icon" src ={claudeIcon} alt="chef claude icon" />
			{/* <img className="chef-icon" src ='../images/chef-claude-icon.png' alt="chef claude icon" /> */}
			<h1>Chef Claude</h1>
		</header>

	)
}