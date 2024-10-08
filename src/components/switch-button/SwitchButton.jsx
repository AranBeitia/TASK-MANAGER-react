import {useState} from 'react'
import './SwitchButton.scss'

const SwitchButton = ({onClick}) => {
  const [isActive, setIsActive] = useState(false)

  const toggleSwitch = () => setIsActive(!isActive)

  return (
    <div className='switch-button__wrapper'>
      <label className='switch-button'>
        <input
          type='checkbox'
          checked={isActive}
          onChange={toggleSwitch}
          onClick={onClick}
        />
        <span className='switch-button__slider'></span>
      </label>
    </div>
  )
}

export default SwitchButton
