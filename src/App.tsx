
import { Suspense, lazy } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/home/page'))
const Tasks = lazy(() => import('./pages/tasks/page'))
const Task = lazy(() => import('./pages/task/page'))
const Layout = lazy(() => import('./pages/Layout'))

export const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/task/*" element={<Task />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}