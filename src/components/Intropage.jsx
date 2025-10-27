import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from './Navbar';
const Intropage = ({isClicked}) => {
  return (
    <div>
        <Navbar clicked={isClicked}/>
     <div className="max-w-7xl mx-auto pt-4">
  <div className="grid lg:grid-cols-2 items-center gap-8">
    <div className="max-lg:order-1 max-lg:text-center z-50 relative max-lg:max-w-screen-sm max-lg:mx-auto">
      <h2 className="text-slate-900 lg:text-5xl md:text-5xl text-3xl font-bold mb-4 md:leading-[65px]">
        <span className="text-[#0776F1]">The smarter</span> way to{" "}
        <span className="text-[#0776F1]">Remember</span> 
      </h2>
      <p className="text-slate-600 mt-6 text-base leading-relaxed">
        Simple. Fast. Distraction-free.
A note-taking app designed to help you think clearly and stay organized. No clutter, no chaos — just a smooth, minimal experience built for focus.
      </p>
      <button
        type="button"
        className="mt-8 bg-[#0776F1] hover:bg-transparent hover:text-[#0776F1] border-2 border-[#0776F1] transition-all text-white font-semibold text-base tracking-wide rounded-full px-6 py-3 cursor-pointer"
        onClick={isClicked}
      >
        Get Started
      </button>
    
    </div>
    
 <DotLottieReact src={"/Notesanimation.lottie"} autoplay loop className="w-fit h-full" />
    
  </div>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 z-50 relative my-8 max-lg:mt-12">
    <div className="bg-white p-6 shadow-sm border border-gray-300 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="w-11 h-11 mb-4 inline-block bg-blue-100 p-2.5 rounded-lg text-[#0776F1]"
      >
      <path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"></path>
       
      </svg>
      <h3 className="text-slate-900 text-lg font-semibold mb-2">
        Clutter-Free Design
      </h3>
      <p className="text-sm text-slate-600">
Focus only on your thoughts, not on distractions.      </p>
      <a
        href="javascript:void(0);"
        className="text-blue-600 font-semibold inline-block text-sm hover:underline mt-4"
      >
        Learn more
      </a>
    </div>

    <div className="bg-white p-6 shadow-sm border border-gray-300 rounded-lg">
      <svg
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="w-11 h-11 mb-4 inline-block bg-blue-100 p-2.5 rounded-lg text-[#0776F1]"
      >
        <path d="M4 3H18L20.7071 5.70711C20.8946 5.89464 21 6.149 21 6.41421V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM7 4V9H16V4H7ZM6 12V19H18V12H6ZM13 5H15V8H13V5Z"></path>
      </svg>
      <h3 className="text-slate-900 text-lg font-semibold mb-2">Auto Save
</h3>
      <p className="text-sm text-slate-600">
Never lose your work — everything saves automatically.      </p>
      <a
        href="javascript:void(0);"
        className="text-blue-600 font-semibold inline-block text-sm hover:underline mt-4"
      >
        Learn more
      </a>
    </div>
    <div className="bg-white p-6 shadow-sm border border-gray-300 rounded-lg">
      <svg
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="w-11 h-11 mb-4 inline-block bg-blue-100 p-2.5 rounded-lg text-[#0776F1]"
      >
        <g fillRule="evenodd" clipRule="evenodd">
         <path d="M8 7C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H16C18.7614 17 21 14.7614 21 12C21 9.23858 18.7614 7 16 7H8ZM8 5H16C19.866 5 23 8.13401 23 12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12C1 8.13401 4.13401 5 8 5ZM8 15C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9C9.65685 9 11 10.3431 11 12C11 13.6569 9.65685 15 8 15Z"></path>
          <path
            d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
            data-original="#000000"
          />
         
        </g>
      </svg>
      <h3 className="text-slate-900 text-lg font-semibold mb-2">Dark & Light Modes
</h3>
      <p className="text-sm text-slate-600">
Write comfortably, day or night.
      </p>
      <a
        href="javascript:void(0);"
        className="text-blue-600 font-semibold inline-block text-sm hover:underline mt-4"
      >
        Learn more
      </a>
    </div>
  </div>
</div>


    </div>
  )
}

export default Intropage
