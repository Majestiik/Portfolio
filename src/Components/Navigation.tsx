import { NavLink } from "react-router-dom";

export const Navigation = (props: any) => {
	const routes = {
		'/': 'Profile',
		'/SchoolProjects' : 'School Projects',
		'/PersonalProjects': 'Personal Projects',
	};

	return (
		<nav>
			<ul className="navigation">
				<div className="nav-button">➡</div>
				<li className="nav-title">Developper</li>
				<li className="nav-title">Identity</li>
				<li className="nav-list">
				{Object.entries(routes).map(([route, name]) => (
					<li className="nav-link" key={route}>
						<NavLink end to={route} className={({ isActive }) => (isActive ? " activated" : " desactivated")}>
							{name}
						</NavLink>
					</li>
				))}
				</li>
			</ul>
		</nav>
	);
};