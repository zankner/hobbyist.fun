import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import SignupSchema from '../modules/schemas/SignupSchema';
import { parse } from 'query-string';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { alert: null };
		this.onSubmit = this.onSubmit.bind(this);
		this.signUpWithProvider = this.signUpWithProvider.bind(this);
	}

	onSubmit(values, actions) {
		const { firstName, lastName, email, password } = values;
		this.setState({ alert: null });

		this.props.firebase.createUser({ email, password }, {
			email: email,
			name: `${firstName} ${lastName}`,
			firstName: firstName,
			lastName: lastName,
			joined: Date.now()
		}).then(() => {
			this.props.firebase.auth().currentUser.sendEmailVerification();

			const query = parse(this.props.location.search);
			if (query.redirect) {
				return this.props.history.push(
					query.redirect.includes('?')
						? `${query.redirect}&modal=welcomeModal&confetti=true`
						: `${query.redirect}?modal=welcomeModal&confetti=true`
				);
			}

			this.props.history.push('/?modal=welcomeModal&confetti=true');
		}).catch(err => {
			switch (err.code) {
				case 'auth/invalid-email':
					this.setState({ alert: 'Are you sure that\'s your email?' });
					break;

				case 'auth/weak-password':
					this.setState({ alert: 'Make sure your password is at least 6 characters!' });
					break;

				case 'auth/email-already-in-use':
					this.setState({ alert: 'That email address is already in use.' });
					break;

				default:
					this.setState({ alert: 'Something went wrong. Please try again.' });
			}

			return actions.setSubmitting(false);
		});
	}

	render() {
		return (
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: ''
				}}
				validationSchema={SignupSchema}
				onSubmit={this.onSubmit}
				render={({ errors, isSubmitting, touched }) => (
					<Form className="form-validate" autoComplete="off">
						<div className="form-row">
							<div className="form-group col-md-6">
								<label className="form-label">First name</label>
								<Field name="firstName" placeholder="John"
											 className={getIn(errors, 'firstName') && getIn(touched, 'firstName')
												 ? 'form-control is-invalid'
												 : 'form-control'
											 }
								/>
								<ErrorMessage name="firstName" component="span" className="mt-1 text-danger small" />
							</div>
							<div className="form-group col-md-6">
								<label className="form-label">Last name</label>
								<Field name="lastName" placeholder="Doe"
											 className={getIn(errors, 'lastName') && getIn(touched, 'lastName')
												 ? 'form-control is-invalid'
												 : 'form-control'
											 }
								/>
								<ErrorMessage name="lastName" component="span" className="mt-1 text-danger small" />
							</div>
						</div>
						<div className="form-group">
							<label className="form-label">Email address</label>
							<Field name="email" placeholder="name@address.com"
										 className={getIn(errors, 'email') && getIn(touched, 'email')
											 ? 'form-control is-invalid'
											 : 'form-control'
										 }
							/>
							<ErrorMessage name="email" component="span" className="mt-1 text-danger small" />
						</div>
						<div className="form-group">
							<label className="form-label">Password</label>
							<Field name="password" placeholder="Password" type="password"
										 className={getIn(errors, 'password') && getIn(touched, 'password')
											 ? 'form-control is-invalid'
											 : 'form-control'
										 }
							/>
							<ErrorMessage name="password" component="span" className="mt-1 text-danger small" />
						</div>
						<button type="submit" className="btn btn-lg btn-block btn-primary" disabled={isSubmitting}>Sign up</button>
						<hr className="my-3" />
						<div role="alert" className="alert alert-danger mt-3 animate bounceIn" hidden={!this.state.alert}>{this.state.alert}</div>
						<p className="text-sm text-muted">Already have an account with us? <Link to={`/login${this.props.location.search}`}>Sign in</Link></p>
					</Form>
				)}
			/>
		);
	}
}

export default compose(
	withFirebase,
	withRouter
)(SignupForm);
