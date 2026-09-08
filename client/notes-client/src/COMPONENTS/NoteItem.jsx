import React from "react";

const NoteItem = ({ title, description, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(title);
    }
  };

  return (
    <article
      className="note-item"
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="note-item__content">
        <h3 className="note-item__title">
          {title || "Untitled Note"}
        </h3>

        {description && (
          <p className="note-item__description">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default NoteItem;