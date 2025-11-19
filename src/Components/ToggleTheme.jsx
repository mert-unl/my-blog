
function ToggleTheme({change,theme}) {

  return (
    <div>
   <label className="toggle text-base-content">
  <input type="checkbox" onClick={change} checked={theme==="light"}  />
              
                <svg
                  className="w-4 h-4 text-[#000000] "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
                
                <svg
                  className="w-4 h-4 text-[#000000]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3
             m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707
             m12.728 0l-.707.707M6.343 17.657l-.707.707
             M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
</label>
</div>)
}

export default ToggleTheme