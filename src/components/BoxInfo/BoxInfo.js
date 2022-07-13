import './BoxInfo.css';
import Paragraphs from '../Paragraphs/Paragraphs';
import { Translation } from '../../languages/components/Translation';

function BoxInfo({ isSlogan, isLink, data }) {
  
  const translationItem = (param) => <Translation>{param}</Translation>;

  return (
    <div className="box-info">
      {isSlogan && (
        <h4 className="slogan">{translationItem('slogan')}</h4>
      )}
      {isLink && (
        <a 
          href={data.githubUrl} 
          target="_blank" 
          rel="noreferrer noopener" 
          className="italic"
        >
          {translationItem(data.link)}
        </a>
      )}
      {!isSlogan && !isLink && (
        <>
          <h3 className="box-info-heading">{translationItem(data.value)}</h3>
          <Paragraphs data={data} />
        </>
      )}
    </div>
  );
};

export default BoxInfo;
