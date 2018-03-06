import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import {errorSelector, loadingSelector} from '../../ducks/auth'

class SignInForm extends Component {
    static propTypes = {

    };

    render() {
        const {authError, loading} = this.props;
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        email: <Field name='email' component='input'/>
                    </div>
                    <div>
                        password: <Field name='password' component='input' type='password'/>
                    </div>
                    <input type='submit' />
                </form>
                {loading && <h1>loading...</h1>}
                {authError && <h3 style={{color: 'red'}}>{authError.message}</h3>}
            </div>
        )
    }
}

export default connect(state => ({
    loading: loadingSelector(state),
    authError: errorSelector(state)
}))(reduxForm({
    form: 'auth'
})(SignInForm))