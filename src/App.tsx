import React from 'react'
import {Provider} from 'react-redux'
import RepositoryList from './components/RepositoryList'
import RepositoryListHooks from './components/RepositoryList/hooks'

import store from './store'

const App = () => (
  <Provider store={store}>
    {/* <RepositoryList /> */}
    <RepositoryListHooks />
  </Provider>
)

export default App
