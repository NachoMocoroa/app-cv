import './Skill.css';

function Skill({ skill, value }) {
  return (
    <div className="skill_wrapper">
      <p className="skill_text">{ skill }</p>
      <div className="skill_meter">
        <span className="skill_bar">
          <span className="skill_value" style={{ width: value }}>{ value }</span>
        </span>
      </div>
    </div>
  );
};

export default Skill;
