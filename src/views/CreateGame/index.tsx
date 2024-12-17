import Chat from "@/components/chatView";
import CodeEditor from "@/components/EditorView";

const CreateGame = () => {
  return (
    <div className="flex items-center">
      <div className="w-[50%]">
        <Chat></Chat>
      </div>

      <div className="w-[50%]">
        <CodeEditor></CodeEditor>
      </div>
    </div>
  );
};

export default CreateGame;
