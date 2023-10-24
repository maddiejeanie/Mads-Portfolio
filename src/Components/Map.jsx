
function Map({ isDarkMode }) {
  return (
        <div className={`Card Map ${isDarkMode ? "Dark": null}`} id="map"> 
      <img src="images/map.png" />
      </div>
  );
}

export default Map;
