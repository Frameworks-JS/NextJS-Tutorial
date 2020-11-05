import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.first_name} {user.last_name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
