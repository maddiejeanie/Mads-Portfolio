

function Github({ isDarkMode }) {
    return (
          <div className={`Card Github ${isDarkMode ? "Dark": null}`} id="Github"> 
                <h2>Github Activity Chart</h2>
<img src="https://ghchart.rshah.org/4D3C8F/maddiejeanie"   style={{ padding: '1rem', background: 'white', width: '100%' }}
 alt="Mad's Github Chart" />
</div>
  );
}

export default Github;