import React, { useEffect, useState} from 'react'
import SingleHistory from './SingleHistory'
import { Container, Table } from 'react-bootstrap'
import uniqBy from 'lodash/uniqBy'

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
    let uniqHistories = uniqBy(histories, 'title')
    console.log(uniqHistories)
     return (
    <div className='histories-container'>
      <Container>
        <h4 style={{backgroundColor: "rgb(251,247,241)"}}>My search history</h4>
        <Table striped bordered variant='light'>
          <thead>
            <th></th>
            <th><h5>Title</h5></th>
          </thead>
          <tbody>
             {uniqHistories.map((history, index )=> <SingleHistory history= {history} index={index}/>)}
          </tbody>
        </Table>
      </Container> 
    </div>
  )
  }
 
}

export default SearchHistories