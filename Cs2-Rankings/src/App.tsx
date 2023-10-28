import { useState } from 'react';
import './App.css';
import { GithubFileViewer } from './components/GithubFileViewer';

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <>
      <h1>Counter Strike 2 regional rankings</h1>
      
      {/* Display buttons */}
      <div className="buttonsContainer">
        <button className='buttonRegion' onClick={() => setSelectedRegion('europe')}>Europe</button>
        <button className='buttonRegion' onClick={() => setSelectedRegion('asia')}>Asia</button>
        <button className='buttonRegion' onClick={() => setSelectedRegion('americas')}>Americas</button>
      </div>
      
      {/* Conditionally display the rankings based on selected region */}
      {selectedRegion && <GithubFileViewer region={selectedRegion} />}
    </>
  );
}

export default App;
