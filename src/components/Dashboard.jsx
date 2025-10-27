import { useState, useEffect } from "react";
import Card from "./Card";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const [button, setButton] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [note, setNote] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Load current user & notes from localStorage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        setCurrentUser(userData);
        localStorage.setItem("currentUser", JSON.stringify(userData));

        // Load notes for this user from localStorage
        const savedNotes = localStorage.getItem(`notes_${user.uid}`);
        if (savedNotes) {
          setNote(JSON.parse(savedNotes));
        }
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });

    return () => unsubscribe();
  }, []);

  // Save note
  const submitHandler = () => {
    const copyNote = [...note, { title, detail, disabled: true }];
    setNote(copyNote);
    setTitle("");
    setDetail("");

    if (currentUser) {
      localStorage.setItem(`notes_${currentUser.uid}`, JSON.stringify(copyNote));
    }
  };

  // Delete note
  const deleteNote = (idx) => {
    const copyNote = [...note];
    copyNote.splice(idx, 1);
    setNote(copyNote);

    if (currentUser) {
      localStorage.setItem(`notes_${currentUser.uid}`, JSON.stringify(copyNote));
    }
  };

  // Edit note
  const editNote = (idx) => {
    let copyNote = [...todo];
          copyNote.splice(i, 1, {...note, disabled: false})
          setTodo(copyNote)

    if (currentUser) {
      localStorage.setItem(`notes_${currentUser.uid}`, JSON.stringify(copyNote));
    }
  };

  return (
    <div>
      <div className="relative bg-[#f7f6f9] h-full min-h-screen">
        <div className="flex items-start">
          <Sidebar />
          <button
            id="open-sidebar"
            className="lg:hidden ml-4 mt-4 fixed top-0 left-0 bg-white z-50"
          >
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
          <section className="main-content w-full px-6 flex flex-col gap-4">

            {/* Header starting */}
            <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-4">
              <div className="flex flex-wrap items-center px-6 py-2 bg-white shadow-md min-h-14 rounded-md w-full relative tracking-wide">
                <div className="flex items-center flex-wrap gap-x-8 gap-y-4 z-50 w-full">
                  <div className="flex items-center gap-4 py-1 outline-none border-none">
                    <button className="flex hover:cursor-pointer gap-2" onClick={() => setButton(true)}> 
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 cursor-pointer fill-current"
                      >
                        <path d="M4 1V4H1V6H4V9H6V6H9V4H6V1H4ZM3 20.0066V11H5V19H13V14C13 13.45 13.45 13 14 13L19 12.999V5H11V3H20.0066C20.5552 3 21 3.45576 21 4.00247V15L15 20.996L4.00221 21C3.4487 21 3 20.5551 3 20.0066ZM18.171 14.999L15 15V18.169L18.171 14.999Z"></path>
                      </svg> Add Note
                    </button>

                    <Profile />
                  </div>
                </div>
              </div>
            </header>

            {/* Note form */}
            {button && (
              <div className="w-full bg-white p-6 shadow-md rounded-md flex flex-col gap-3 transition-all duration-200 ease">
                <input
                  type="text"
                  placeholder="Add title"
                  className="w-2/3 px-3 py-2 focus:outline-none border border-gray-300 rounded-md"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <textarea
                  placeholder="Add details"
                  className="w-2/3 h-52 rounded-md focus:outline-none border border-gray-300 p-3 transition-all"
                  style={{ resize: "none" }}
                  onChange={(e) => setDetail(e.target.value)}
                  value={detail}
                />
                <div className="w-1/2 flex gap-4 self-end items-center justify-end">
                  <button
                    type="button"
                    className="px-6 py-2.5 rounded-md text-white text-sm cursor-pointer tracking-wider font-medium border-0 outline-0 bg-gradient-to-tr from-blue-700 to-blue-400 hover:from-blue-600 hover:to-blue-300 w-1/6 self-end"
                    onClick={submitHandler}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2.5 rounded-md text-white text-sm cursor-pointer tracking-wider font-medium border-0 outline-0 bg-gradient-to-tr from-black to-[#888]"
                    onClick={() => setButton(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Notes list */}
            <div className="my-6 ">
              <div className="flex items-start  gap-4 flex-wrap">
                {/* Map directly over saved notes from localStorage */}
                {currentUser && JSON.parse(localStorage.getItem(`notes_${currentUser.uid}`) || "[]").map((val, idx) => (
                  <Card
                    key={idx}
                    value={val}
                    delet={() => deleteNote(idx)}
                    edit={() => editNote(idx)}
                  />
                ))}
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
