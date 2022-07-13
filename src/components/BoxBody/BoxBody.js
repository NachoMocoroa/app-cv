import './BoxBody.css';

function BoxBody({ header, children }) {
  return (
    <div className="box-body">
      <h3 className="box-body-heading">{header}</h3>
      <>{children}</>
    </div>
  );
};

export default BoxBody;
