import Skill from "./Skill";

function SkillsGroup({ skillsArray, name }) {
  return (
    <>
      {skillsArray.map((item, index) => (
        <Skill 
          key={`skill-${name}-${index}`} 
          skill={item.tech} 
          value={item.value} 
        />
      ))}
    </>
  );
};

export default SkillsGroup;
