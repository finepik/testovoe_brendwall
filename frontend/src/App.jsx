import './App.css'
import { useState } from 'react'
import { PageGeneric } from './components/PageGeneric'
import { PageBaseView } from './components/PageBaseView'

function App() {

  const [page, setPage] = useState('generic')
  return (
    <>
    <div className='button_div'>
      <button className={page === "generic" ? "active" : ''} onClick={() => setPage('generic')}>Пример с generic</button>
      <button className={page === "base" ? "active" : ''} onClick={() => setPage('base')}>Пример с базовым view</button>
    </div>
    {page === 'generic' ? (
      <PageGeneric/>
    ): (
      <PageBaseView/>
    )}
    </>
  )
}

export default App
