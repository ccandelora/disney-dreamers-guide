import React from 'react'

export default function Header() {
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xLinkHref="#bootstrap"></use></svg>
        <span className="fs-4 mouse-text text-white">Disney Dreamer's Guide</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/" className="nav-link active text-white home" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="/magic-kingdom-queue-times" className="nav-link text-white wait-times">Wait Times</a></li>
        <li className="nav-item"><a href="/" className="nav-link text-white articles">Articles</a></li>
        
      </ul>
    </header>
  </div>
  )
}
