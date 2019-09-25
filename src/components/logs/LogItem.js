import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteLog, setCurrent } from '../../actions/logActions';

const LogItem = ({
	log: { id, tech, date, attention, message },
	deleteLog,
	setCurrent
}) => {
	const onDelete = () => {
		deleteLog(id);
		M.toast({ html: 'Log deleted' });
	};

	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
					onClick={() => setCurrent({ id, tech, date, attention, message })}
				>
					{message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{id} </span>
					last updated by <span className='black-text'>{tech}</span>
				</span>{' '}
				on <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
				<a href='#!' onClick={onDelete} className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired
};

export default connect(
	null,
	{ deleteLog, setCurrent }
)(LogItem);
