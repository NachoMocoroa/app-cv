import './StudiesList.css';
import { Translation } from '../../languages/components/Translation';

function StudiesList({ data }) {
  
  const translationItem = (param) => <Translation>{param}</Translation>;

  return (
    <ul className="double-list section-scroll">
      {data.map((item, index) => ( 
        <li key={`double-list-${index}`} className="double-list-item">
          <h4>{translationItem(item.value)}</h4>
          <ul className="double-list-item-level">
            {item.items.map((sub, id) =>
              <li key={`double-list-child-${id}`} className="double-list-item-level-item">
                <p>{translationItem(sub.value)}</p>
              </li>
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default StudiesList;
