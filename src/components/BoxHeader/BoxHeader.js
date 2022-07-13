import './BoxHeader.css';
import { Translation } from '../../languages/components/Translation';

function BoxHeader() {
  return (
    <div className="box-header">
      <h1><Translation>name</Translation></h1>
      <h2 className="f-b"><Translation>position</Translation></h2>
    </div>
  );
};

export default BoxHeader;
