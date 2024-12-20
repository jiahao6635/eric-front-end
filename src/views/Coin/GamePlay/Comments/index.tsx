import CustomTextarea from "@/components/Textarea";
import { useState } from "react";
import { CommentList } from "./CommentList";
import ForgeButton from "@/components/GlowButton";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");
  return (
    <div className="w-full h-full flex flex-col items-center pt-[16px]">
      <div className="w-[749px] h-[112px] relative">
        <CustomTextarea
          placeholder="Write your comments..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <ForgeButton
          className="absolute bottom-[14px] right-[16px] !w-[88px] !h-[30px] !text-[12px] !rounded-[8px]"
          onClick={() => {}}
        >
          Submit
        </ForgeButton>
      </div>

      <CommentList />
    </div>
  );
};

export default Comments;
