import {useContext, useState} from 'react'
import {GlobalContext} from '../../../context/GlobalState'
import {MdCheck} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import './TaskListItem.scss'
import Loader from '../../loader/Loader'

const TaskListItem = ({id, title, completed}) => {
  const {deleteTask, completeTask} = useContext(GlobalContext)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await deleteTask(id)
    setLoading(false)
  }

  const handleComplete = async () => {
    setLoading(true)
    await completeTask(id)
    setLoading(false)
  }

  return (
    <div className='list-item' key={id}>
      <p className={completed ? 'list-item--is-done' : ''}>{title}</p>
      <div>
        {!completed && !loading && (
          <button className='action-button' onClick={handleComplete}>
            <MdCheck />
          </button>
        )}
        {!loading ? (
          <button className='action-button' onClick={handleDelete}>
            <MdDeleteOutline />
          </button>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default TaskListItem
