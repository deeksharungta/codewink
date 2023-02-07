import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/3024-day.css";
import "codemirror/addon/wrap/hardwrap";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { MdClear } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdOpenInFull } from "react-icons/md";
import { MdCloseFullscreen } from "react-icons/md";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import classes from "./Editor.module.css";
import copy from "copy-to-clipboard";

const Editor = (props) => {
  const { value, language, onChange } = props;
  const [open, setopen] = useState(true);

  const copyToClipboard = () => {
    copy(value);
    alert(`Copied to Clipboard`);
  };

  const openClass = open ? "" : "collapsed";
  const handleChange = (editor, data, value, e) => {
    onChange(value);
  };

  const clearCode = () => {
    onChange("");
  };

  return (
    <div className={`card  ${openClass} `}>
      <div className={`${classes.title}`}>
        <div>
          {language === "xml" && (
            <SiHtml5 className={classes["language-icon"]} />
          )}
          {language === "css" && (
            <SiCss3 className={classes["language-icon"]} />
          )}
          {language === "javascript" && (
            <SiJavascript className={classes["language-icon"]} />
          )}
        </div>
        <div className={classes.ficons}>
          <MdContentCopy
            onClick={copyToClipboard}
            className={classes["func-icon"]}
          />
          <MdClear onClick={clearCode} className={classes["func-icon"]} />

          {open ? (
            <MdCloseFullscreen
              onClick={() => setopen((prevOpen) => !prevOpen)}
              className={classes["func-icon"]}
            />
          ) : (
            <MdOpenInFull
              onClick={() => setopen((prevOpen) => !prevOpen)}
              className={classes["func-icon"]}
            />
          )}
        </div>
      </div>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className={classes["code-mirror-wrapper"]}
        options={{
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
        }}
      />
    </div>
  );
};

export default Editor;
