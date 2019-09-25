import React, { useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';

// Styling
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
import store from './store';

const App = () => {
	useEffect(() => {
		// Initialize Materialize javascript
		M.AutoInit();
	});
	return (
		<Provider store={store}>
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
		</Provider>
	);
};

export default App;
