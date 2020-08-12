import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import Landing from './page/Landing';
import ToDoList from './page/ToDoList'
import CreateItem from './page/CreateItem'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/to-do-list" component={ToDoList} />
      <Route path="/criar-novo-item" component={CreateItem} />
    </BrowserRouter>
  )
}

export default Routes;