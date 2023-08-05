import React, { useEffect, useState} from 'react'
import SingleHistory from './SingleHistory'
import { Container, Table } from 'react-bootstrap'

const SearchHistories = () => {

  const [histories, setHistories] = useState(null)

  async function fetchHistories(){
    let response = await fetch("/my-history")
    if(response.ok){
      let fetchedHistories = await response.json();
      setHistories([...fetchedHistories])
      console.log("ok")
    }else{
      console.log(response)
    }
  }

  useEffect(() => {
    fetchHistories()
  }, [])
  if(histories){
     return (
    <div className='histories-container'>
      <Container>
        <h4>My search history</h4>
        <Table>
          <thead>
            <th></th>
            <th><h5>Title</h5></th>
          </thead>
          <tbody>
             {histories.map(history => <SingleHistory history= {history}/>)}
          </tbody>
        </Table>
      </Container> 
    </div>
  )
  }
 
}

export default SearchHistories