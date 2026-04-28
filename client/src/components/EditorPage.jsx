import Navbar from "../components/Navbar";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";

const EditorPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;