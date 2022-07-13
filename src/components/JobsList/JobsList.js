import './JobsList.css';
import { Translation } from '../../languages/components/Translation';
import { TranslationParsed } from '../../languages/components/TranslationParsed';

function JobsList({ data }) {
  
  const translationItem = (param) => <Translation>{param}</Translation>;
  const translationParsedItem = (param) => <TranslationParsed>{param}</TranslationParsed>;

  return (
    <ul className="list section-scroll">
      {data.map((item, index) =>
        <li key={`list-item-${index}`} 
          className="list-item" 
        >
          <div className="list-item-div">
            <span className="list-item-div-date">{translationItem(item.date)}</span>
            <h5 className="list-item-div-position">{translationItem(item.position)}</h5>
            <h4 className="list-item-div-company">{translationItem(item.company)}</h4>
            {translationParsedItem(item.value)}
          </div>
        </li>
      )}
    </ul>
  );
};

export default JobsList;
