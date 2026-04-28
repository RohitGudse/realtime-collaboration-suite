import { useEffect, useRef, useState } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

const NotesEditor = () => {
  const [text, setText] = useState("");
  const yTextRef = useRef(null);

  useEffect(() => {
    const doc = new Y.Doc();

    const provider = new WebsocketProvider(
      "ws://localhost:1234",
      "notes-room",
      doc
    );

    const yText = doc.getText("notes");
    yTextRef.current = yText;

    yText.observe(() => {
      setText(yText.toString());
    });

    return () => provider.disconnect();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const yText = yTextRef.current;

    yText.delete(0, yText.length);
    yText.insert(0, value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      style={{ flex: 1, height: "90vh", padding: "20px" }}
    />
  );
};

export default NotesEditor;