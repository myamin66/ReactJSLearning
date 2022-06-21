import React from 'react'
import {useContext} from 'react'
import { DataContext } from '../DataProvider';

function Head1() {
  const value = useContext(DataContext)
  return (
    <>

    <div>Head1</div>
    <h2>{value.user.email}</h2>
    
    </>
  )
}

export default Head1;