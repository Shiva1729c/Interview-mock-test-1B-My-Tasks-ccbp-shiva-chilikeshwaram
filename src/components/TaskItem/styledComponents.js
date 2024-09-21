import styled from 'styled-components'

export const TaskListItem = styled.li`
  background-color: #1a171d;
  display: flex;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0.2);
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`

export const TaskText = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
`

export const TaskTag = styled.p`
  background-color: #f3aa4e;
  margin-right: 5px;
  border-radius: 16px;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 3px;
  padding-bottom: 3px;
  color: #000000;
`
