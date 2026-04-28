import { useEffect, useState } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

const Editor = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const ydoc = new Y.Doc();

    const provider = new WebsocketProvider(
      "ws://localhost:1234",
      "google-doc-room",
      ydoc
    );

    const yText = ydoc.getText("shared-text");

    // Listen changes from other users
    yText.observe(() => {
      setText(yText.toString());
    });

    return () => {
      provider.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      style={{
        flex: 1,
        height: "90vh",
        padding: "20px",
        fontSize: "16px"
      }}
    />
  );
};

export default Editor;