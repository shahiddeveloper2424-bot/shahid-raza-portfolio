import React, { createContext, useContext, useEffect, useState } from 'react'

const RouterCtx = createContext({ path: '/' })

export function usePath() {
  return useContext(RouterCtx).path
}

export function navigate(to) {
  const [pathPart, hash] = to.split('#')
  const targetPath = pathPart || window.location.pathname
  if (targetPath !== window.location.pathname) {
    window.history.pushState({}, '', targetPath)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  if (hash) {
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  } else {
    window.scrollTo({ top: 0 })
  }
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return <RouterCtx.Provider value={{ path }}>{children}</RouterCtx.Provider>
}

/** Internal link: handles plain paths, `/#section` anchors and external URLs. */
export function Link({ href, children, className, onClick, ariaLabel }) {
  const isExternal = /^https?:\/\//.test(href)
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    )
  }
  const handle = (e) => {
    e.preventDefault()
    onClick?.()
    navigate(href)
  }
  return (
    <a href={href} className={className} aria-label={ariaLabel} onClick={handle}>
      {children}
    </a>
  )
}

export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = title
  }, [title])
}
