import { getAuth, signOut } from "firebase/auth";

const Sidebar = () => {
  const auth = getAuth();
const handleLogout=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

}
  return (
     <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
      <div
        id="sidebar-collapse-menu"
        className="bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-99 lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500"
      >
        <div className="flex items-center gap-2 pt-6 pb-2 px-4 sticky top-0 bg-white min-h-16 z-100">
          <h1 className='uppercase text-3xl font-bold'>Lite Note</h1>
          <button id="close-sidebar" className="lg:hidden ml-auto">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="py-4 px-4">
          <ul className="space-y-2">
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-blue-100 rounded-md px-3 py-2.5 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
                    data-original="#000000"
                  />
                  <path
                    d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
                    data-original="#000000"
                  />
                </svg>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Dashboard
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                  viewBox="0 0 451.847 451.847"
                >
                  <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="sub menu max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ml-8">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-blue-100 rounded-md px-3 py-2 transition-all duration-300"
                  >
                    <span>Analytics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-blue-100 rounded-md px-3 py-2 transition-all duration-300"
                  >
                    <span>Logistics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-slate-800 text-[15px] font-medium block cursor-pointer hover:bg-blue-100 rounded-md px-3 py-2 transition-all duration-300"
                  >
                    <span>Academy</span>
                  </a>
                </li>
              </ul>
            </li>
           
       
            
            
          </ul>
          <div className="mt-6">
            <h6 className="text-blue-600 text-sm font-bold px-3">
              General Settings
            </h6>
            <ul className="mt-3 space-y-2">
     
               <a
                      href="javascript:void(0)"
                      className="text-[15px] text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-blue-100 dropdown-item transition duration-300 ease-in-out"
                      onClick={handleLogout}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[18px] h-[18px] mr-3 fill-current"
                        viewBox="0 0 6 6"
                      >
                        <path
                          d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                          data-original="#000000"
                        />
                      </svg>
                      Logout
                    </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
