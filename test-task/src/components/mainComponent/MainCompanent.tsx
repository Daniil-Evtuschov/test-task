import { faSnowplow } from "@fortawesome/free-solid-svg-icons";
import styleMainMainComponent from "./MainComponent.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainComponent = () => {
  return (
    <div className={styleMainMainComponent.wrap}>
      <div>
      <FontAwesomeIcon icon={faSnowplow} />
      </div>
      <div>
        <button>next Icon</button>
      </div>

    </div>
  )
}

export default MainComponent