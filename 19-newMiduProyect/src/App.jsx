import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  { username: "midudev", nickname: "Gianni44", isFollowing: true },
  { username: "pheralb", nickname: "PabloH", isFollowing: false },
  { username: "dan_abramov", nickname: "Dan", isFollowing: true },
  { username: "sarah_edo", nickname: "Sarah", isFollowing: false },
  { username: "kentcdodds", nickname: "Kent", isFollowing: true }
];

function App() {

  return (
    <>
    <section className='box'>
      {
        users.map(user => {
          const {username,name,isFollowing} = user
          return(
            <TwitterFollowCard
              key={username}
              username={username}
              initialIsfollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
    </>
  )
}
 
export default App
