import React from "react";
import "./DepartmentCard.css";

const DepartmentCard = ({ department, onDeleteAchievement }) => {
  return (
    <div className="dept-card">
      <h3>{department.name}</h3>

      {department.achievements.length === 0 ? (
        <p className="no-ach">No achievements yet</p>
      ) : (
        <ul className="ach-list">
          {department.achievements.map((ach) => (
            <li key={ach._id} className="ach-item">
              <strong>{ach.title}</strong>
              <span>{ach.description}</span>
              <button
                className="delete-btn"
                onClick={() => onDeleteAchievement(ach._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DepartmentCard;