import React,{useState} from 'react'
import H1 from './audio/Heater-1.mp3'
import H2 from './audio/Heater-2.mp3'
import H3 from './audio/Heater-3.mp3'
import H4 from './audio/Heater-4_1.mp3'
import C from './audio/Heater-6.mp3'
import OHH from './audio/Dsc_Oh.mp3'
import KH from './audio/Kick_n_Hat.mp3'
import K from './audio/RP4_KICK_1.mp3'
import CHH from './audio/Cev_H2.mp3'


const App = () => {
  const drumKeys ={
    Q : "Heater 1",
    W : "Heater 2",
    E : "Heater 3",
    A : "Heater 4",
    S : "Clap",
    D : "Open-HH",
    Z : "Kick-n'-Hat",
    X : "Kick",
    C : "Closed-HH"
  }

  const [isPlayed,setIsPlayed] = useState('_______')

  const playAudio = (char) => {
    if (['Q','W','E','A','S','D','Z','X','C'].includes(char)){
    setIsPlayed(drumKeys[char])}
    const audio = document.getElementById(char)
    if (audio){
      audio.currentTime = 0
      audio.play()
    }
    
  }
  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    playAudio(key);
  }
  window.addEventListener('keydown', handleKeyDown);
  
  return (
    <div className="drums" id='drum-machine' align="center">
      <div className="drumsDisplay" id='display'>{isPlayed}</div>
      <div className="drum-pad" id="Heater 1"     onClick={()=>playAudio('Q')}>Q<audio src={H1}  id='Q' className='clip'></audio></div>
      <div className="drum-pad" id="Heater 2"     onClick={()=>playAudio('W')}>W<audio src={H2}  id='W' className='clip'></audio></div>
      <div className="drum-pad" id="Heater 3"     onClick={()=>playAudio('E')}>E<audio src={H3}  id='E' className='clip'></audio></div>
      <div className="drum-pad" id="Heater 4"     onClick={()=>playAudio('A')}>A<audio src={H4}  id='A' className='clip'></audio></div>
      <div className="drum-pad" id="Clap"         onClick={()=>playAudio('S')}>S<audio src={C}   id='S' className='clip'></audio></div>
      <div className="drum-pad" id="Open-HH"      onClick={()=>playAudio('D')}>D<audio src={OHH} id='D' className='clip'></audio></div>
      <div className="drum-pad" id="Kick-n'-Hat"  onClick={()=>playAudio('Z')}>Z<audio src={KH}  id='Z' className='clip'></audio></div>
      <div className="drum-pad" id="Kick"         onClick={()=>playAudio('X')}>X<audio src={K}   id='X' className='clip'></audio></div>
      <div className="drum-pad" id="Closed-HH"    onClick={()=>playAudio('C')}>C<audio src={CHH} id='C' className='clip'></audio></div>
    </div>
  )
}

export default App