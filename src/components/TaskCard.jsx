import React, { useState } from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";

const TaskCard = ({
  title,
  tags,
  handleDelete,
  handleEdit,
  index,
  setActiveCard,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedTags, setEditedTags] = useState(tags);

  const handleSave = () => {
    handleEdit(index, editedTitle, editedTags);
    setIsEditing(false);
  };
  return (
    <div
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="edit_input"
        />
      ) : (
        <p className="task_text">{title}</p>
      )}
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true}></Tag>
          ))}
        </div>
        <div className="task_actions">
          {isEditing ? (
            <button onClick={handleSave} className="save_button">
              Save
            </button>
          ) : (
            <img
              src={editIcon}
              className="edit_icon"
              alt="Edit"
              onClick={() => setIsEditing(true)}
            />
          )}
          <div className="task_delete" onClick={() => handleDelete(index)}>
            <img src={deleteIcon} className="delete_icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
