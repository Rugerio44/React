import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  return (
    <>
      <TwitterFollowCard username="midudev" nickname="gianni44" />
      <TwitterFollowCard username="pheralb" nickname="gianni44" />
    </>
  )
}

export default App
