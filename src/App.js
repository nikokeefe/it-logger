import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

// Components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import Addbtn from './components/layout/Addbtn';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';

const App = () => {
	useEffect(() => {
		// Initialize Materialize javascript
		M.AutoInit();
	});
	return (
		<Fragment>
			<SearchBar />
			<div className='container'>
				<Addbtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<Logs />
			</div>
		</Fragment>
	);
};

export default App;
