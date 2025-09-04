// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import kikLogo from './assets/logokik.png';
import sezLogo from './assets/logosez.png';

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-brand-50 flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-brand-700 text-4xl font-bold">Kawasan Industri Kendal</h1>
            <a href="/experience" className="text-brand-800 w-fit rounded border bg-white p-2">
              Experience
            </a>
          </div>
          <div className="bg-brand-700 flex h-32 gap-4 rounded-lg p-8">
            <img src={kikLogo} className="h-full w-auto" alt="KIK logo" />
            <img src={sezLogo} className="h-full w-auto" alt="SEZ logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
