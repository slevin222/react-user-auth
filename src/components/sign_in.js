import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderInput } from '../helpers';
import { connect } from 'react-redux';
import { signIn } from '../actions';

class SignIn extends Component {
    handleSignIn(values) {
        console.log('sign in submitted :', values)
        this.props.signIn(values);
    }


    render() {
        const { handleSubmit, authError } = this.props;
        return (
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className="row justify-content-center center-align">
                    <div className="col s6 offset-s3">
                        <div className="card amber lighten-5">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))} >
                                    <Field component={renderInput} name="email" placeholder="Enter your email" />
                                    <Field component={renderInput} name="password" placeholder="Enter your password" type="password" />
                                    <Field component={renderInput} name="confirmPassword" placeholder="Confirm password" type="password" />
                                    <button className="btn amber darken-2">Sign In</button>
                                    <p className="red-text center-align">{authError}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


SignIn = reduxForm({
    form: 'sign-in-from'
})(SignIn);


function mapStateToProps(state) {
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, { signIn })(SignIn);