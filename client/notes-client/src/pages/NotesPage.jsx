import Sidebar from "../components/Sidebar";
import NotesEditor from "../components/NotesEditor";
import Navbar from "../components/Navbar";

const NotesPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <NotesEditor />
      </div>
    </div>
  );
};

export default NotesPage;