import './MainApp.css';
import parseFunctions from './parseFunctions';
import BoxBody from '../../components/BoxBody/BoxBody';
import SkillsGroup from "../../components/Skill/SkillsGroup";
import JobsList from "../../components/JobsList/JobsList";
import StudiesList from "../../components/StudiesList/StudiesList";
import Paragraphs from '../../components/Paragraphs/Paragraphs';
import { Translation } from '../../languages/components/Translation';
import { TranslationParsed } from '../../languages/components/TranslationParsed';

function MainApp({ mainRef, data }) {

  const skillsLayoutName = 'layout';
  const skillsProgrammingName = 'programming';
  const profileLabel = 'profile-label';
  const profileValue = 'profile-value';
  const technologiesLayoutLabel = 'technologies-layout-label';
  const technologiesProgrammingLabel = 'technologies-programming-label';
  const jobLabel = 'job-label';
  const studiesLabel = 'studies-label';
  const languagesLabel = 'languages-label';

  const { technologies, jobs, studies, languages } = data;
  
  const translationItem = (param) => <Translation>{param}</Translation>;
  const translationParsedItem = (param) => <TranslationParsed>{param}</TranslationParsed>;

  return (
    <section ref={mainRef} className="data-section">
      <BoxBody header={translationItem(profileLabel)}>
        {translationParsedItem(profileValue)}
      </BoxBody>
      <div className="boxes">
        <BoxBody header={translationItem(technologiesLayoutLabel)}>
          <SkillsGroup 
            skillsArray={technologies.layout.items} 
            name={skillsLayoutName} 
          />
        </BoxBody>
        <BoxBody header={translationItem(technologiesProgrammingLabel)}>
          <SkillsGroup 
            skillsArray={technologies.programming.items} 
            name={skillsProgrammingName} 
          />
        </BoxBody>
      </div>
      <BoxBody header={translationItem(jobLabel)}>
        <JobsList data={parseFunctions.getJobs(jobs)} />
      </BoxBody>
      <BoxBody header={translationItem(studiesLabel)}>
        <StudiesList data={parseFunctions.getStudies(studies)} />
      </BoxBody>
      <BoxBody header={translationItem(languagesLabel)}>
        <Paragraphs data={parseFunctions.getLanguages(languages)} />
      </BoxBody>
    </section>
  );
};

export default MainApp;
