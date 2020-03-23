import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ApplicationState} from '../../store/index'
import * as RepositoryActions from '../../store/ducks/repositories/actions'
import RepositoryItem from '../RepositoryItem'

const RepositoryListHooks: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(RepositoryActions.loadRequest())
  })

  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data
  )

  return (
    <ul>
      {repositories.map(repository => (
        <RepositoryItem key={repository.id} repository={repository}>
          {repository.name}
        </RepositoryItem>
      ))}
    </ul>
  )
}

export default RepositoryListHooks
