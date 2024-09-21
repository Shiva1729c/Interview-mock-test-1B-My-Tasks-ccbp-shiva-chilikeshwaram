import {TaskListItem, TaskText, TaskTag} from './styledComponents'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails

  return (
    <TaskListItem>
      <TaskText>{task}</TaskText>
      <TaskTag>{tag}</TaskTag>
    </TaskListItem>
  )
}

export default TaskItem
