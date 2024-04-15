import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styleMainComponent from "./MainComponent.module.css";

library.add(fas)

const MainComponent = () => {

  const icons = Object.keys(fas);
  const [icon, setIcon] = useState(icons[0]);
  const [disabled, setDisabled] = useState(false);
  
  let timerId: NodeJS.Timeout | null = null;

  function handleIconChange() {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  
    if (timerId) {
      clearTimeout(timerId);
    }
  
    timerId = setTimeout(() => {
      setIcon(randomIcon);
      setDisabled(true);
      setDisabled(false);
    }, 3000);
  }
  
  return (
    <div className={styleMainComponent.wrap}>
      <span className={styleMainComponent.icon}><FontAwesomeIcon icon={fas[icon]} /></span>
      <span className={styleMainComponent.iconName}>{icon}</span>
      <button className={styleMainComponent.iconChangeButton} disabled={disabled} onClick={()=>{handleIconChange()}}>next Icon</button>
    </div>
  );
}

export default MainComponent;






