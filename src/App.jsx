import React, { useEffect } from 'react'
import { RouterProvider, usePath, useDocumentTitle } from './lib/router.jsx'
import { useReveal } from './hooks/useReveal.js'
import { getProject } from './data/projects.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectCase from './pages/ProjectCase.jsx'
import NotFound from './pages/NotFound.jsx'

const HOME_TITLE = 'Shahid Raza — Software Developer | React, JavaScript, Node.js & MongoDB'

function Routes() {
  const path = usePath()
  const isHome = path === '/' || path === ''
  useDocumentTitle(isHome ? HOME_TITLE : undefined)
  useReveal([path])

  // On a fresh load with a #hash (shared link), scroll to that section.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      setTimeout(() => document.getElementById(id)?.scrollIntoView(), 80)
    }
  }, [path])

  const projectMatch = path.match(/^\/projects\/([a-z0-9-]+)\/?$/)
  let page
  if (isHome) page = <Home />
  else if (projectMatch && getProject(projectMatch[1])) page = <ProjectCase slug={projectMatch[1]} />
  else page = <NotFound />

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header />
      <main id="main" className="flex-1">{page}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  )
}
