import React, { useState } from "react";
import SkillForm from "./Components/SkillForm";
import SkillList from "./Components/SkillList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import type { Skill } from "./types";
const App: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

  const addSkill = (skill: Skill) => {
    setSkills((prev) => [...prev, skill]);
  };

// save logic
  const handleSaveSkill = (skill: Skill) => {
    if (editingSkill) {
      // Update existing skill
      setSkills((prev) =>
        prev.map((s) => (s.id === skill.id ? skill : s))
      );
      setEditingSkill(null);
    } else {
      // Add new skill
      setSkills((prev) => [...prev, skill]);
    }
  };

// edit logic
const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill);
  };



  const deleteSkill = (id: number) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  return (
       
          <div className="min-h-screen bg-gray-50 p-6">
            <Header />
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl font-bold mb-4 text-center">Skills Tracker</h1>
              <SkillForm onAddSkill={addSkill}
                //  onSave={handleSaveSkill} 
                 onSave={handleSaveSkill}
                 editingSkill={editingSkill} />
              <SkillList skills={skills}
               onDeleteSkill={deleteSkill}
                onEditSkill={handleEditSkill}
              />
            </div>
            <Footer />
    </div>
  );
};

export default App;




