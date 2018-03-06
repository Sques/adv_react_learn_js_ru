import React from 'react'

import AddForm from '../People/AddForm'
import List from '../People/List'

function People(props) {
      return (
          <div>
              <h1>Peoples</h1>
              <AddForm />
              <br/><br/>
              <List />
          </div>
      )
}

export default People