import React from "react";
// import  { Skill } from "../types";
import type { Skill } from "../types";

interface SkillListProps {
  skills: Skill[];
  onDeleteSkill: (id: number) => void;
  onEditSkill: (skill: Skill) => void;    // edit
}

const SkillList: React.FC<SkillListProps> = ({ skills, onDeleteSkill,onEditSkill }) => {
  return (
    <ul className="mt-4 space-y-2">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className="flex justify-between items-center bg-gray-100 p-3 rounded"
        >
          <div>
            <p className="font-semibold">{skill.name}</p>
            <p className="text-sm text-gray-600">{skill.level}</p>
          </div>
          {/* edit  */}
           <button
              onClick={() => onEditSkill(skill)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </button>






          <button
            onClick={() => onDeleteSkill(skill.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;











