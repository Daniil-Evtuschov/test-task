import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useRef, useState } from 'react';
import styleMainComponent from "./MainComponent.module.css";
import { memo } from "react";

const MainComponent = memo((props: { icons: string[] }) => {
  
  const [icon, setIcon] = useState(props.icons[Math.floor(Math.random() * props.icons.length)]);
  
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const handleIconChange = useCallback(() => {
    const randomIcon = props.icons[Math.floor(Math.random() * props.icons.length)];
  
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    
    timerId.current = setTimeout(() => {
      setIcon(randomIcon);
    }, 3000);
  }, [props.icons]);
  
  return (
    <div className={styleMainComponent.wrap}>
      <span className={styleMainComponent.icon}><FontAwesomeIcon icon={fas[icon]} /></span>
      <span className={styleMainComponent.iconName}>{icon}</span>
      <button className={styleMainComponent.iconChangeButton} onClick={()=>{handleIconChange()}}>next Icon</button>
    </div>
  );
})

export default MainComponent;






