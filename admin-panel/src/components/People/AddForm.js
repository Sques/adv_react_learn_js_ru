import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'

import {addPeople, ADD_PEOPLE} from '../../ducks/people'
import ErrorField from '../common/ErrorField'

class AddForm extends React.Component {

    render () {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div>
                    firstName: <Field component={ErrorField} type="text" name="firstName" />
                </div>
                <div>
                    lastName: <Field component={ErrorField} type="text" name="lastName" />
                </div>
                <div>
                    email: <Field component={ErrorField} type="email" name="email" />
                </div>
                <input type='submit' />
            </form>
        )
    }
    
    handleSubmit = data => this.props.addPeople(data)
}

export default connect(
    null,
    {addPeople}
)(reduxForm({
    form: ADD_PEOPLE
})(AddForm))