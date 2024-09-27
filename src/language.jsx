
import './language.css'; // Make sure to create and link the CSS file

const LanguageSection = () => {
  return (

    <div className="container-fluid language-section">

     <div className='lang_head text-white d-flex justify-content-start w-100 ps-3'>
        <h2>Explore by Languages</h2>
     </div>


      <div className="language-row" style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}>
        <p className="language-text">हिन्दी</p> {/* Hindi */}
      </div>
      <div className="language-row" style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}>
        <p className="language-text">English</p> {/* English */}
      </div>
      <div className="language-row" style={{ background: "linear-gradient(to right, #ee9ca7, #ffdde1)" }}>
        <p className="language-text">Español</p> {/* Spanish */}
      </div>
      <div className="language-row" style={{ background: "linear-gradient(to right, #00c6ff, #0072ff)" }}>
        <p className="language-text">Français</p> {/* French */}
      </div>
      <div className="language-row" style={{ background: "linear-gradient(to right, #f7971e, #ffd200)" }}>
        <p className="language-text">தமிழ்</p> {/* Tamil */}
      </div>
      
    </div>
  );
};

export default LanguageSection;
