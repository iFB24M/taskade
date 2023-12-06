import { lazy } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/home/page'))
const Tasks = lazy(() => import('./pages/tasks/page'))
const Task = lazy(() => import('./pages/task/page'))
const Layout = lazy(() => import('./pages/Layout'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/tasks/:status" element={<Tasks />}></Route>
          <Route path="/task/*" element={<Task />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App