import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


export const App = () => {

let heroData  = [
  {text1:"dive into ", text2: "what you love"},
  {text1:"indulge ", text2: "your passions"},
  {text1:"Give in to  ", text2: "your  paasions"}

]
const [heroCount, setHeroCount] = useState(2);
const [playStatus, setPlayStatus] = useState(false);

useEffect(() => {
  setInterval(() => {
setHeroCount((count)=>{return count === 2 ? 0 : count + 1})
  },3000)

},[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App;