import { useEffect, useState } from 'react';
import './App.css';
import firstSounds from './firstSounds';
import Keyboard from './Keyboard';
import SecondSounds from './secondSounds';




function App() {

  const soundGroup = {
    heaterKit: firstSounds,
    smoothPianoKit: SecondSounds
  }
 
 
const [soundType, setSoundType] = useState("heaterKit");
const [sounds, setSounds] = useState(soundGroup[soundType]);
const [name, setName] = useState("HeaterKit");
const [volume, setVolume] = useState(0);
const [switcher, setSwitcher] = useState("false");


const play = (key , id) => {
  const audio = new Audio(key);
  audio.play();
  audio.volume = volume;
  setName(id);
  
};

const changeSoundGroup = () =>{
   if(name === "Chord_1") { 
      setName("HeaterKit")}
   else setName("SmoothPianoKit");

  if (soundType === "heaterKit"){
    setSoundType("smoothPianoKit");
    setSounds(soundGroup.smoothPianoKit);
  }
  else{

    setSoundType("heaterKit");
    setSounds(soundGroup.heaterKit);
  }
}


const handleVolumeChange = (event) =>{
setVolume(event.target.value);
}

const turnOffOn = () => {
  const swiching = document.getElementById('togBtn');
  console.log('Receiving ' + typeof(swiching.value));
  if(swiching.value == "true"){
    setSwitcher("false");
  }
  else setSwitcher("true")

  swiching.value = switcher;
  console.log(swiching.value);
}

  return (
   
    <div className="App">
      <div id="drum-machine"> 
        <Keyboard play={play} sounds={sounds} switcher={switcher}/>
        <span>Volume</span>
        <div className="vol">{Math.floor(volume*100)}</div><br/>
        <div id="display">{name}</div> 
      </div>

     <div>
        <input className= "volumeControl" 
        max="1"
        min="0"
        step="0.01"
        type="range"
        volume={volume}
        onChange={handleVolumeChange}
        />
       <button onClick={changeSoundGroup}>Change Sound </button>
    </div>

    <label class="switch">
 <input type="checkbox" id="togBtn" value={switcher} name="disableYXLogo" onChange={turnOffOn}/>
 <div class="slider round"></div>
 </label>
    </div>  //End of App
  
  );
}

export default App;


//https://forum.freecodecamp.org/t/drum-machine-sound-urls/231516

    /*   <div className="drum-pad" id="q" onClick={wDrum}> Q
        
        </div>*/
