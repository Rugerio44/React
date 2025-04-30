import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  { username: "Cristiano", nickname: "Gianni44", isFollowing: true },
  { username: "elonmusk", nickname: "gianni", isFollowing: false },
  { username: "elxokas", nickname: "XOKAS", isFollowing: true },
  { username: "DebRyanShow", nickname: "Sarah", isFollowing: false },
  { username: "realkarime", nickname: "Kent", isFollowing: true }
];

function App() {

  return (
    <>
    <div className='App'>
      <h1>Twitter Follow Card</h1>
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
    </div>
    </>
  )
}
 
export default App
