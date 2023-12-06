import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'

const App = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<>Loading...</>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
)
