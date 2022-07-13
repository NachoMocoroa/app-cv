import './BodyApp.css';

function BodyApp({ paddingTopValue, children }) {
  return (
    <div 
      className="body-content" 
      style={{ 
        paddingTop: `${paddingTopValue}` 
      }}
    >
      {children}
    </div>
  );
};

export default BodyApp;
