import React from 'react'
import "./Tag.css"

const Tag = ({tagName,selectTag,selected}) => {
  const tagStyle = {
    HTML: { backgroundColor: "#ff69b4" },
    CSS: { backgroundColor: "#db7093" },
    JavaScript: { backgroundColor: "#9854CB" },
    React: { backgroundColor: " #da70d6" },
    default: { backgroundColor: "#e6e6fa" },
  };
  return (
    <button
      type='button'
      className='tag'
      style={selected? tagStyle[tagName]: tagStyle.default}
      onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  )
}

export default Tag
