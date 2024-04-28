

function Github({ isDarkMode }) {
    return (
          <div className={`Card Github ${isDarkMode ? "Dark": null}`} id="Github"> 
                    <h2 className="text-5xl h2 font-bold text-purple-200 mb-4 uppercase tracking-wide">
          Github Activity Chart</h2>
<img src="https://ghchart.rshah.org/4D3C8F/maddiejeanie"   style={{ padding: '1rem', background: 'lightpurple', width: '100%' }}
 alt="Mad's Github Chart" />
</div>
  );
}

export default Github;