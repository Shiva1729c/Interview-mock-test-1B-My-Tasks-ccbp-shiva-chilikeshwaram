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
    taskList: [
      {id: 1, task: 'Go to gym', tag: 'Health'},
      {id: 2, task: 'Prepare for the exam', tag: 'Education'},
    ],
    inputText: '',
    selectedOption: 'Health',
    isFiltered: false,
  }

  componentDidMount() {
    const {tagsList} = this.props
    this.setState({tagsList})
  }

  filterTag = optionId => {
    //   need to implement filtering
  }

  onSubmittingForm = event => {
    event.preventDefault()

    const {inputText, selectedOption} = this.state

    const newTask = {
      id: uuidv4(),
      task: inputText,
      tag: selectedOption,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      inputText: '',
      selectedOption: 'Health',
    }))
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
            <TagOption key={eachTag.optionId}>{eachTag.displayText}</TagOption>
          ))}
        </TagSelectContainer>
        <SubmitButton type="submit">Add Task</SubmitButton>
      </TaskCreationForm>
    )
  }

  renderTagItem = () => {
    const {tagsList, isFiltered} = this.state

    return (
      <TagsItemContainer>
        {tagsList.map(eachTag => (
          <TagItem
            tagDetails={eachTag}
            key={eachTag.optionId}
            filterTag={this.filterTag}
            isActive={isFiltered}
          />
        ))}
      </TagsItemContainer>
    )
  }

  renderTaskItem = () => {
    const {taskList} = this.state
    return (
      <TaskItemContainer>
        {taskList.map(eachTask => (
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
