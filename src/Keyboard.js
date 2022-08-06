import { useEffect } from "react";
import firstSounds from "./firstSounds";
import KeyboardKey from "./KeyboardKey";
import SecondSounds from './secondSounds';


const Keyboard = ({play, sounds, switcher}) => {

return    sounds.map(sound => {

return    <KeyboardKey sound={sound} play={play} switcher={switcher}/>        
    });
}
 
export default Keyboard;