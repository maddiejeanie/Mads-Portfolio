

function GitHub({ isDarkMode }) {
    return (
          <div className={`hidden md:block`} id="Github"> 
                    <h2 className={`text-5xl h2 font-bold  ${isDarkMode ? 'text-purple-200' : 'text-purple-800'} mb-4 uppercase tracking-wide`}>
          Github Activity Chart</h2>
<img src="https://ghchart.rshah.org/4D3C8F/maddiejeanie"     className={`p-4 ${isDarkMode ? 'bg-transparent' : 'bg-violet-200'}  w-full`}

 alt="Mad's Github Chart" />
</div>
  );
}

export default GitHub;