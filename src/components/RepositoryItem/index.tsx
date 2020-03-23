import React from 'react'
import {Repository} from '../../store/ducks/repositories/types'
interface OwnProps {
  repository: Repository
}

const RepositoryItem: React.FC<OwnProps> = props => {
  return <li>{props.repository.name}</li>
}

export default RepositoryItem
