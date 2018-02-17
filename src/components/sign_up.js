import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderInput } from '../helpers';
import { connect } from 'react-redux';
import { signUp } from '../actions';

class SignUp extends Component {

    handleSignUp(values) {
        console.log('sign up submitted :', values);

        this.props.signUp(values);
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center-align">Sign Up</h1>
                <div className="row justify-content-center center-align">
                    <div className="col s6 offset-s3">
                        <div className="card amber lighten-5">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignUp.bind(this))} >
                                    <Field component={renderInput} name="email" placeholder="Enter your email" />
                                    <Field component={renderInput} name="password" placeholder="Choose a password" type="password" />
                                    <Field component={renderInput} name="confirmPassword" placeholder="Confirm password" type="password" />
                                    <button className="btn amber darken-2">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const error = {};

    if (!values.email) {
        error.email = 'Please input an email'
    }
    if (!values.password) {
        error.password = 'Please choose a password'
    }
    if (values.password !== values.confirmPassword) {
        error.confirmPassword = 'Paswords do not match'
    }
    return error;
}


SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, { signUp })(SignUp);