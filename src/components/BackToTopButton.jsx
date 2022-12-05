import { useEffect, useState } from 'react'

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div id="back2top-btn-main" className="fixed bottom-2 right-2">
      <button
        id="back2top-btn"
        type="button"
        aria-label="back2top-button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex animate-bounce items-center rounded bg-gray-200 p-3 text-black shadow-sm transition-opacity hover:bg-gray-400 hover:text-white focus:outline-none'
        )}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="chevron-doubleup"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          ></path>
        </svg>
      </button>
    </div>
  )
}
