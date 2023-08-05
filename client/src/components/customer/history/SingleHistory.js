import React from 'react'

const SingleHistory = ({history}) => {
  return (
    <tr>
      <td>{history.id}</td>
      <td><h5>{history.title}</h5></td>
    </tr>
  )
}

export default SingleHistory