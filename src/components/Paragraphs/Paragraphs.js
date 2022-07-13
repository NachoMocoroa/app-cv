import './Paragraphs.css';
import { Translation } from '../../languages/components/Translation';

function Paragraphs({ data }) {
  
  const translationItem = (param) => <Translation>{param}</Translation>;

  return (
    <>
      {data.items.map((item, index) => (
        <p key={`${item.label}-${index}`}>
          <span className="text-highlighted">{translationItem(item.label)}</span>
          {translationItem(item.value)}.
        </p>
      ))}
    </>
  );
};

export default Paragraphs;
