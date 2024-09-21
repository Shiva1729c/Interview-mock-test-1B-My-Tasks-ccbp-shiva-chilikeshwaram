import styled from 'styled-components'

export const TagListItem = styled.li`
  border: 1px solid #f3aa4e;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  margin-right: 5px;
  border-radius: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 3px;
  padding-bottom: 3px;
`
export const TagButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  color: #f1f5f9;
`
