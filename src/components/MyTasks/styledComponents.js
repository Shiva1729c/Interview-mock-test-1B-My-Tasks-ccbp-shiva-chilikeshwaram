import styled from 'styled-components'

export const MyTasksContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  //   border: 1px solid red;
  background-color: #131213;
  //   margin-top: 50px;
  //   margin-bottom: 50px;
`

export const TaskCreationContainer = styled.div`
  background-color: #1a171d;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TaskCreationMainHeading = styled.h1`
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #f3aa4e;
`
export const TaskCreationForm = styled.form`
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const InputLabel = styled.label`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
`

export const TaskInput = styled.input`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  color: #64748b;
  height: 34px;
  padding-left: 10px;
  margin-bottom: 30px;
`

export const TagSelectContainer = styled.select`
  width: 100%;
  height: 34px;
  margin-bottom: 20px;
  padding-left: 10px;
  font-size: 12px;
`

export const TagOption = styled.option`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  color: #000000;
  padding-left: 10px;
`

export const SubmitButton = styled.button`
  border: none;
  background-color: #f3aa4e;
  color: #f8f8f8;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  outline: none;
  cursor: pointer;
  width: 80px;
  height: 28px;
  border-radius: 3px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
`

export const TasksDisplayContainer = styled.div`
  padding-left: 10px;
  padding-top: 50px;
  padding-right: 10px;
  width: 100%;
`

export const TasksDisplayContainerSectionTitle = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
`
export const TagsItemContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
`

export const TaskItemContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const EmptyTaskViewInstruction = styled(
  TasksDisplayContainerSectionTitle,
)`
  text-align: center;
  margin-top: 100px;
`
