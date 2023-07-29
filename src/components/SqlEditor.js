import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";

const SqlEditor = ({ code, handleChange, handleClick }) => {
  return (
    <div className="app-editor">
      <AceEditor
        id="editor"
        aria-label="editor"
        mode="mysql"
        theme="twilight"
        name="editor"
        fontSize={16}
        minLines={15}
        maxLines={10}
        width="100%"
        showPrintMargin={false}
        showGutter
        placeholder="Write your Query here..."
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={code}
        onChange={handleChange}
        showLineNumbers
      />
      <button onClick={handleClick}>Run Query</button>
    </div>
  );
};

export default SqlEditor;
