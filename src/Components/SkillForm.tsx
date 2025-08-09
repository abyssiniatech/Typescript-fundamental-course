import React, { useState ,useEffect} from "react";
import type { Skill } from "../types";
interface SkillFormProps {
  onAddSkill: (skill: Skill) => void;
  onSave: (skill: Skill) => void;
   editingSkill?: Skill | null;
}
const SkillForm: React.FC<SkillFormProps> = ({ onAddSkill, onSave, editingSkill}) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Select  your Level");
   // Update form fields when editingSkill changes
   useEffect(() => {
    if (editingSkill) {
      setName(editingSkill.name);
      setLevel(editingSkill.level);
    } else {
      // Clear form if no skill is being edited
      setName("");
      setLevel("");
    }
  }, [editingSkill]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !level.trim()) return;
     onSave({
    id: editingSkill ? editingSkill.id : Date.now(),
    name,
    level,
  });
    const newSkill: Skill = {
      id: Date.now(),
      name,
      level,
    };

    onAddSkill(newSkill);
    setName("");
    setLevel("Select  your Level");
    // setLevel("Beginner");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Enter skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      >

        <option>Select  your Level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded py-2 hover:bg-blue-700"
      >
        Add Skill
      </button>
    </form>
  );
};

export default SkillForm;










