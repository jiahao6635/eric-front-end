import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

function CodeEditorRenderer() {
  const [code, setCode] = useState("<h1>Hello World</h1>");
  const iframeRef = useRef<any>();

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const iframeDocument =
      iframe?.contentDocument || iframe?.contentWindow?.document;
    iframeDocument.open();
    iframeDocument.write(code); // 向 iframe 写入代码
    iframeDocument.close();
  };

  return (
    <div className="w-full flex relative">
      <div className=" h-[100vh] flex-1">
        <Editor
          height="100%"
          defaultLanguage="html"
          value={code}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>

      <div className="flex-1 h-[100vh] bg-[#e9e9e9]">assets</div>

      <button
        onClick={runCode}
        className="absolute left-[200px] top-[100px] text-[red]"
      >
        运行代码
      </button>

      {/* iframe 用于渲染代码 */}
      <div className="flex-1">
        <iframe
          ref={iframeRef}
          title="output"
          style={{
            width: "100%",
            height: "300px",
            border: "1px solid #ddd",
            marginTop: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default CodeEditorRenderer;
