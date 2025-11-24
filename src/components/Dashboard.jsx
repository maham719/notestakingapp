import { useState, useEffect } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { auth,db } from "../config/firebase.js";
import { collection, addDoc ,onSnapshot,updateDoc,doc,deleteDoc} from "firebase/firestore"; 

const Dashboard = ({ currentUser }) => {
  const [button, setButton] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [note, setNote] = useState([]);
  

  const handleLogout=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
  }
  
const addData = async () => {
  if (!currentUser) return;

  try {
    const docRef = await addDoc(
      collection(db, "users", currentUser.uid, "notes"),
      {
        title: title,
        detail: detail,
        createdAt: new Date(),
      }
    );

    console.log("Note saved with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding note:", e);
  }
};

useEffect(() => {
  if (!currentUser) return;

  const unsub = onSnapshot(
    collection(db, "users", currentUser.uid, "notes"),
    (snapshot) => {
      const userNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
         disabled: true,
        ...doc.data(),
      }));
      setNote(userNotes);
    }
  );

  return () => unsub();
}, [currentUser]);

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
  const deleteNote = async (id) => {
  try {
    await deleteDoc(doc(db, "users", currentUser.uid, "notes", id));
  } catch (err) {
    console.error("Delete error:", err);
  }
};

  // Edit note
 const editNote = (id) => {
  const updated = note.map((n) =>
    n.id === id ? { ...n, disabled: false } : n
  );
  setNote(updated);
};
  // update note 
const updateNote = async (id, updatedValue) => {
  try {
    await updateDoc(doc(db, "users", currentUser.uid, "notes", id), {
      title: updatedValue.title,
      detail: updatedValue.details, 
    });

  
    setNote((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, title: updatedValue.title, detail: updatedValue.details, disabled: true } : n
      )
    );

  } catch (err) {
    console.error("Update error:", err);
  }
};
  return (
    <div>
      <div className="relative bg-[#f7f6f9] h-full min-h-screen">
        <div className="flex items-start">
          
         
          <section className="main-content w-full px-6 flex flex-col gap-4">

            {/* Header starting */}
            <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-4">
              <div className="flex items-center justify-between px-6 py-2 bg-white shadow-md min-h-14 rounded-md w-full relative tracking-wide">
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
     
                  </div>
                </div>
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
                    className="px-6 py-2.5 rounded-md text-white text-sm cursor-pointer tracking-wider font-medium border-0 outline-0 bg-linear-to-tr from-blue-700 to-blue-400 hover:from-blue-600 hover:to-blue-300 w-1/6 self-end"
                    onClick={addData}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2.5 rounded-md text-white text-sm cursor-pointer tracking-wider font-medium border-0 outline-0 bg-linear-to-tr from-black to-[#888]"
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
          {note.map((val) => (
<Card
  key={val.id}
  value={val}
  delet={deleteNote}
  edit={editNote}
  update={(id, updatedVal) => updateNote(id, { title: updatedVal.title, details: updatedVal.details })}
/>
))}

              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
