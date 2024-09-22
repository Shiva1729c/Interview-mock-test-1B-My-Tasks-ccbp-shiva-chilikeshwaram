import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import {
  MyTasksContainer,
  ResponsiveContainer,
  TaskCreationContainer,
  TaskCreationMainHeading,
  TaskCreationForm,
  InputLabel,
  TaskInput,
  TagSelectContainer,
  TagOption,
  SubmitButton,
  TasksDisplayContainer,
  TasksDisplayContainerSectionTitle,
  TagsItemContainer,
  TaskItemContainer,
  EmptyTaskViewInstruction,
} from './styledComponents'

class MyTasks extends Component {
  state = {
    tagsList: [],
    taskList: [],
    inputText: '',
    selectedOption: '',
    activeTag: '',
  }

  componentDidMount() {
    const {tagsList} = this.props
    const option = tagsList[0].displayText
    this.setState({tagsList, selectedOption: option})
  }

  filterTag = optionId => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === optionId ? '' : optionId,
    }))
  }

  onSubmittingForm = event => {
    event.preventDefault()

    const {inputText, selectedOption} = this.state

    const newTask = {
      id: uuidv4(),
      task: inputText,
      tag: selectedOption,
    }

    if (inputText.trim()) {
      this.setState(prevState => ({
        taskList: [...prevState.taskList, newTask],
        inputText: '',
        selectedOption: '',
      }))
    }
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  renderTaskCreationForm = () => {
    const {tagsList, inputText, selectedOption} = this.state
    return (
      <TaskCreationForm onSubmit={this.onSubmittingForm}>
        <InputLabel htmlFor="taskInput">Task</InputLabel>
        <TaskInput
          id="taskInput"
          type="text"
          placeholder="Enter the task here"
          onChange={this.onChangeInputText}
          value={inputText}
        />
        <InputLabel htmlFor="tags">Tags</InputLabel>
        <TagSelectContainer
          id="tags"
          onChange={this.onChangeOption}
          value={selectedOption}
        >
          {tagsList.map(eachTag => (
            <TagOption key={eachTag.optionId} value={eachTag.optionId}>
              {eachTag.displayText}
            </TagOption>
          ))}
        </TagSelectContainer>
        <SubmitButton type="submit">Add Task</SubmitButton>
      </TaskCreationForm>
    )
  }

  renderTagItem = () => {
    const {tagsList, activeTag} = this.state

    return (
      <TagsItemContainer>
        {tagsList.map(eachTag => (
          <TagItem
            tagDetails={eachTag}
            key={eachTag.optionId}
            filterTag={this.filterTag}
            isActive={eachTag.optionId === activeTag}
          />
        ))}
      </TagsItemContainer>
    )
  }

  renderTaskItem = () => {
    const {taskList, activeTag} = this.state

    const filteredTaskList = activeTag
      ? taskList.filter(
          eachTask => eachTask.tag.toLowerCase() === activeTag.toLowerCase(),
        )
      : taskList

    return (
      <TaskItemContainer>
        {filteredTaskList.map(eachTask => (
          <TaskItem taskDetails={eachTask} key={eachTask.id} />
        ))}
      </TaskItemContainer>
    )
  }

  render() {
    const {taskList} = this.state
    const emptyTaskListView = taskList.length === 0

    return (
      <MyTasksContainer>
        <ResponsiveContainer>
          <TaskCreationContainer>
            <TaskCreationMainHeading>Create a Task!</TaskCreationMainHeading>
            {this.renderTaskCreationForm()}
          </TaskCreationContainer>
          <TasksDisplayContainer>
            <TasksDisplayContainerSectionTitle>
              Tags
            </TasksDisplayContainerSectionTitle>
            {this.renderTagItem()}
            <TasksDisplayContainerSectionTitle>
              Tasks
            </TasksDisplayContainerSectionTitle>
            {!emptyTaskListView ? (
              this.renderTaskItem()
            ) : (
              <EmptyTaskViewInstruction as="p">
                No Tasks Added Yet
              </EmptyTaskViewInstruction>
            )}
          </TasksDisplayContainer>
        </ResponsiveContainer>
      </MyTasksContainer>
    )
  }
}

export default MyTasks
