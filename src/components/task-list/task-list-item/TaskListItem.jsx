import {useContext, useState} from 'react'
import {GlobalContext} from '../../../context/GlobalState'
import {MdCheck} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import {ListItem} from './TaskListItem.styles.js'
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
    <ListItem key={id}>
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
    </ListItem>
  )
}

export default TaskListItem
