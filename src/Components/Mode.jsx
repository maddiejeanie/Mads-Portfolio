

function Mode({ isDarkMode, toggleDarkMode }) {

  return (

    
<div className={`Card Mode ${isDarkMode ? "Dark" : null}`}>
  <div className="toggle">
    <input type="checkbox" id="switch" className="hidden" onChange={toggleDarkMode} checked={isDarkMode} />
    <label htmlFor="switch" className="toggle-label">
      <i className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"}`}></i>
    </label>
  </div>
</div>

  );
}

export default Mode;
