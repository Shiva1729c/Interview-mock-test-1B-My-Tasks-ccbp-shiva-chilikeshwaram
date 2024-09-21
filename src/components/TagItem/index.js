import {TagListItem, TagButton} from './styledComponents'

const TagItem = props => {
  const {tagDetails, filterTag, isActive} = props
  const {displayText, optionId} = tagDetails

  const onClickTagButton = () => {
    filterTag(optionId)
  }

  return (
    <TagListItem isActive={isActive}>
      <TagButton type="button" onClick={onClickTagButton}>
        {displayText}
      </TagButton>
    </TagListItem>
  )
}

export default TagItem
