import React from 'react';
import Layout from '../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = props => {
	console.log(props.profile);

	return (
		<Layout>
			<div className="container vh-100">
				<div className="row vh-100 align-items-center">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<h1 className="text-center header">App</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

const mapStateToProps = state => ({
	auth: state.firebase.auth,
	profile: state.firebase.profile
});

export default compose(
	connect(mapStateToProps),
	withFirebase,
	withRouter
)(Home);
