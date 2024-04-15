import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


library.add(fas)


const MainComponent = () => {

  const icons = Object.keys(fas);
  const [icon, setIcon] = useState(icons[0]);
  const [disabled, setDisabled] = useState(false);
  
  let timerId:any = null;

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
    <div>
      <div>
        <FontAwesomeIcon icon={fas[icon]} />
        {icon}
      </div>
      <div>
        <button disabled={disabled} onClick={()=>{handleIconChange()}}>next Icon</button>
      </div>
    </div>
  );
}

export default MainComponent;






