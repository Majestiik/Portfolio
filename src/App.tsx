import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { PersonalProjects } from './Pages/PersonalProjects';
import { Profile } from './Pages/Profile';
import { SchoolProjects } from './Pages/SchoolProjects';

export default function App(props: any) {
  return (
	<div className="base">
		<Navigation />
		<Routes>
			<Route path="/" element={<Profile />} />
			<Route path="/SchoolProjects" element={<SchoolProjects />} />
			<Route path="/PersonalProjects" element={<PersonalProjects />} />
		</Routes>
	</div>
  );
}
