const prefixJob = 'job-';
const prefixAcademic = 'academic-';
const prefixOnline = 'online-';
const prefixOnsite = 'on-site-';
const prefixLanguage = 'language-';
const subfixLabel = 'label';
const subfixValue = 'value';
const subfixCompany = 'company';
const subfixDate = 'date';
const subfixPosition = 'position';

const getJobs = (param) => {
  let jobObj = [];
  for (let i = 0; i < param.items.length; i++) {
    const jobItem = {
      company: `${prefixJob}${i + 1}-${subfixCompany}`,
      date: `${prefixJob}${i + 1}-${subfixDate}`,
      position: `${prefixJob}${i + 1}-${subfixPosition}`,
      value: `${prefixJob}${i + 1}-${subfixValue}`
    }
    jobObj.push(jobItem);
  }
  return jobObj;
};

const getStudiesLabelByType = (param) => {
  let label = '';
  switch (param) {
    case 0: label = prefixAcademic; break;
    case 1: label = prefixOnline; break;
    case 2: label = prefixOnsite; break;
    default: label = prefixAcademic; break;
  }
  return label;
};

const getStudiesByType = (param, num) => {
  let studyObj = [];
  for (let i = 0; i < param.length; i++) {
    const studyItem = {
      value: getStudiesLabelByType(num) + (i + 1)
    }
    studyObj.push(studyItem);
  }
  return studyObj;
};

const getStudiesLabel = (param) => {
  let label = '';
  switch (param) {
    case 0: label = `${prefixAcademic}${subfixLabel}`; break;
    case 1: label = `${prefixOnline}${subfixLabel}`; break;
    case 2: label = `${prefixOnsite}${subfixLabel}`; break;
    default: label = `${prefixAcademic}${subfixLabel}`; break;
  }
  return label;
};

const getStudies = (param) => {
  let studyObj = [];
  for (let i = 0; i < param.items.length; i++) {
    const studyItem = {
      value: getStudiesLabel(i),
      items: getStudiesByType(param.items[i].items, i)
    }
    studyObj.push(studyItem);
  }
  return studyObj;
};

const getLanguages = (param) => {
  let langObj = { items: [] };
  for (let i = 0; i < param.items.length; i++) {
    const jobItem = {
      label: `${prefixLanguage}${i + 1}-${subfixLabel}`,
      value: `${prefixLanguage}${i + 1}-${subfixValue}`
    }
    langObj.items.push(jobItem);
  }
  return langObj;
};

const parseFunctions = {
  getJobs,
  getStudies,
  getLanguages
};

export default parseFunctions;