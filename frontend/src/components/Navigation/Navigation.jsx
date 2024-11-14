import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navigation({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    onClose()
  }

  const handleLinkClick = () => {
    handleClose()
  }

  const overlayClass = isOpen ? 'opacity-90' : 'opacity-0 pointer-events-none'
  const translateClass = isOpen ? 'translate-x-0' : 'translate-x-full'

  return (
    <section id='nav' className='transition-all'>
      <div
        className={`fixed inset-0 z-30 bg-black ${overlayClass} backdrop-blur-2xl backdrop-filter duration-500 ease-in-out`}
        onClick={handleClose}
      />
      <nav
        className={`fixed inset-y-0 right-0 z-40 flex w-10/12 flex-col justify-center gap-8 bg-green bg-opacity-75 p-8 shadow-lg backdrop-blur-2xl duration-1000 ease-in-out md:w-1/3 ${translateClass}`}
      >
        <ul className='flex flex-col gap-4'>
          <li>
            <a
              href='#inicio'
              onClick={handleLinkClick}
              className='text-4xl font-semibold uppercase text-white hover:text-pink hover:underline'
            >
              Início
            </a>
          </li>
          <li>
            <a
              to='/sobre'
              onClick={handleLinkClick}
              className='text-4xl font-semibold uppercase text-white hover:text-pink hover:underline'
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href='#servicos'
              onClick={handleLinkClick}
              className='text-4xl font-semibold uppercase text-white hover:text-pink hover:underline'
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href='#contatos'
              onClick={handleLinkClick}
              className='text-4xl font-semibold uppercase text-white hover:text-pink hover:underline'
            >
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navigation