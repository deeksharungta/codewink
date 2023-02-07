import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import classes from "./EditorList.module.css";

import useLocalStorage from "../hooks/useLocalStorage";

export default function EditorList(props) {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [javascript, setJavascript] = useLocalStorage("javascript", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(` 
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
      </html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <>
      <div className={`${classes.pane} ${classes["top-pane"]}`}>
        <Editor language="xml" value={html} onChange={setHtml} />
        <Editor language="css" value={css} onChange={setCss} />
        <Editor
          language="javascript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className={classes.pane}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
