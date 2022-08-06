import { useEffect } from "react";

const KeyboardKey = ({sound, play, switcher}) => {

    const handleKeydown = (event) =>{
    if(event.keyCode === sound.keyCode){
        play(sound.url)
    }
    }  
   
    useEffect (()=>{
    document.addEventListener("keydown", handleKeydown)
    },[]);
    if(switcher == "true"){
        return (    
            <div className="drum-pad" id={sound.key} onClick={() => play(sound.url , sound.id)}> {sound.key}     
            <audio className="clip" src={sound.url}/>
            </div> );  
    }

    else{
        return(
            <div className="drum-pad" id={sound.key} onClick={() => play("#", sound.id)}> {sound.key}      
            <audio className="clip" src={sound.url}/>
            </div> );  
    }
 
}
 
export default KeyboardKey;