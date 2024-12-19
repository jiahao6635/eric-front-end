import ModelPopup from "@/components/ModelPopup";
import CustomTextarea from "@/components/Textarea";
import { useState } from "react";

// 评论类型定义
type Comment = {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
  isCreator?: boolean;
};

// 单个评论组件
const CommentItem = ({
  comment,
  onReply,
  level = 0,
}: {
  comment: Comment;
  onReply: (parentId: string, content: string) => void;
  level?: number;
}) => {
  const [showReplyInput, setShowReplyInput] = useState(true);
  const [replyContent, setReplyContent] = useState("");

  const handleReply = () => {
    if (replyContent.trim()) {
      onReply(comment.id, replyContent);
      setReplyContent("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className={`${level > 0 ? "ml-[20px]" : " "} mt-[16px]`}>
      <div className="flex items-start gap-3 pb-[16px] border-b-[1px] border-solid border-[#272c2c]">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] rounded-full bg-[#d9d9d9]"></div>
            <span className="font-medium text-[#09fff0] text-[14px]">
              {comment.name}
            </span>
            {comment.isCreator && (
              <span className="text-[#09fff0] text-[12px] rounded-[6px]  px-[10px] h-[23px] bg-[#0f2c2b] font-thin flex items-center justify-center">
                Creator
              </span>
            )}
            <span className="text-[#767A7A] text-sm">{comment.createdAt}</span>
          </div>
          <p className="mt-[8px] text-[12px] text-[#9fa1a1]">
            {comment.content}
          </p>
        </div>
        <button
          onClick={() => setShowReplyInput(!showReplyInput)}
          className="w-[51px] h-[30px] rounded-[8px] text-[12px] bg-[#0f1515] text-[#fff] hover:bg-[#323737] border-[1px] border-solid border-[#404444]"
        >
          Reply
        </button>

        <ModelPopup
          open={showReplyInput}
          onClose={() => setShowReplyInput(false)}
          title="Reply"
          onClickSubmit={handleReply}
        >
          <div className="w-full h-[100px]">
            <CustomTextarea
              className="!w-full !h-[100px]"
              placeholder="Write your reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
            ></CustomTextarea>
          </div>
        </ModelPopup>
      </div>

      {comment.replies?.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          onReply={onReply}
          level={level + 1}
        />
      ))}
    </div>
  );
};

// 评论列表组件
export const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Name",
      content:
        "this descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a description...",
      createdAt: "2min ago",
      isCreator: true,
      replies: [],
    },
    // ... 其他评论
  ]);

  const handleReply = (parentId: string, content: string) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      const addReply = (comments: Comment[]) => {
        for (let comment of comments) {
          if (comment.id === parentId) {
            comment.replies = [
              ...(comment.replies || []),
              {
                id: Date.now().toString(),
                name: "User", // 这里可以替换为实际用户名
                content,
                createdAt: "just now",
                replies: [],
              },
            ];
            return true;
          }
          if (comment.replies?.length) {
            if (addReply(comment.replies)) return true;
          }
        }
        return false;
      };
      addReply(newComments);
      return newComments;
    });
  };

  return (
    <div className="w-[745px]">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onReply={handleReply} />
      ))}
    </div>
  );
};
