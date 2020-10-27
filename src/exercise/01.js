// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

const Globe = React.lazy(() => import('../globe'))

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  const loadingGlobe = (
    <React.Suspense fallback={<p>loading glerbe</p>}>
      <Globe />
    </React.Suspense>
  )
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{marginBottom: '1rem'}}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        {showGlobe ? loadingGlobe : null}
      </div>
    </div>
  )
}

export default App
