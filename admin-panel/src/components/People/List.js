import React from 'react'
import {connect} from 'react-redux'

import {userSelector} from '../../ducks/people'

class List extends React.Component {
    render() {
        const {people} = this.props;
        if (!people || !people.length) return <h3>No Users yet</h3>;
        return (
            <ul>
                {people.map( item => (<li key={item.id}>
                    <p>
                        <b>id</b>: {item.id}
                    </p>
                    <p>
                        <b>firstName</b>: {item.firstName}
                    </p>
                    <p>
                        <b>lastName</b>: {item.lastName}
                    </p>
                    <p>
                        <b>email</b>: {item.email}
                    </p>
                </li>))}
            </ul>
        )
    }
}

export default connect(
    state => ({people: userSelector(state)})
)(List)