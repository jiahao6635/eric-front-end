import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Tab from "@/components/Tab";

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

  const [tabData, setTabData] = useState([
    {
      id: 1,
      name: "Preview",
    },
    {
      id: 2,
      name: "Assets",
    },
  ]);
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <div className="w-full flex relative px-[24px] flex-col">
      <div className="flex items-center mt-[16px] mb-[16px]">
        {tabData?.map((tab) => (
          <div
            onClick={() => {
              setActiveTab(tab);
            }}
            className="mr-[32px] font-medium w-[194px] text-center text-[#fff] cursor-pointer relative"
            style={{
              fontSize: activeTab?.name === tab?.name ? "18px" : "16px",
              color: activeTab?.name === tab?.name ? "#09fff0" : "#6f7373",
              fontWeight: activeTab?.name === tab?.name ? "bold" : "normal",
            }}
          >
            {tab?.name}

            {activeTab?.name === tab?.name && (
              <div className="absolute bottom-[-16px] left-[50%] translate-x-[-50%] w-[30px] h-[3px] bg-[#09fff0]"></div>
            )}
          </div>
        ))}
      </div>

      <div className="w-[645px] h-[597px]  bg-[#000000] mt-[24px]">
        <iframe
          ref={iframeRef}
          title="output"
          style={{
            width: "100%",
            height: "300px",
            marginTop: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default CodeEditorRenderer;

{
  /* <div className=" flex-1">
        <Editor
          height="100%"
          defaultLanguage="html"
          value={code}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div> */
}
