import './AsideApp.css';
import BoxInfo from '../../components/BoxInfo/BoxInfo';

function AsideApp({ screenWidth, screenHeight, topValue, githubUrl }) {
  
  const topValueParsed = parseInt(topValue, 10);
  const secureSpace = 22;
  const getHeightValue = () => `${screenHeight - (topValueParsed + secureSpace)}px`;
  const getAsideHeight = () => (screenWidth >= 900) ? getHeightValue() : 'auto';
  
  return (
    <section 
      className="info-section" 
      style={{ 
        top: `${topValue}`, 
        height: `${getAsideHeight()}` 
      }}
    >
      <BoxInfo isSlogan />
      <BoxInfo 
        data={{
          value: 'personal-label',
          items: [
            { label: 'birthDate-label', value: 'birthDate-value' }, 
            { label: 'nationality-label', value: 'nationality-value' }
          ]
        }}
      />
      <BoxInfo 
        data={{
          value: 'contact-label',
          items: [
            { label: 'email-label', value: 'email-value' }, 
            { label: 'phone-label', value: 'phone-value' }
          ]
        }}
      />
      <BoxInfo 
        isLink 
        data={{ link: 'github-link', githubUrl: githubUrl.value }}
      />
    </section>
  );
};

export default AsideApp;
