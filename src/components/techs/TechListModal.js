import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// actions
import { getTechs } from '../../actions/techActions';
// Components
import TechItem from './TechItem';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='modal' id='tech-list-modal'>
			<div className='modal-content'>
				<h4>Technician List</h4>
				<ul className='collection'>
					{!loading &&
						techs !== null &&
						techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	tech: PropTypes.object.isRequired,
	getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	tech: state.tech
});

export default connect(
	mapStateToProps,
	{ getTechs }
)(TechListModal);
