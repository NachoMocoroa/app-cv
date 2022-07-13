import './HeaderApp.css';
import LanguageSelector from '../../languages/components/LanguageSelector';
import BoxHeader from '../../components/BoxHeader/BoxHeader';

function HeaderApp({ headerRef }) {
  return (
    <div ref={headerRef} className="header-wrapper">
      <div className="header-content">
        <BoxHeader />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default HeaderApp;
