import ChatBox from "./ChatBox";
import ConversationBox from "./ConversationBox";
import "./Chat.css";

const Chat = () => {
  return (
    <>
      <div className="flex justify-center mt-11 mx-14 gap-2">
        <h1 className="text-3xl font-semibold text-white mr-[66px]">Chat</h1>
        <ConversationBox />
        <ChatBox />
      </div>
    </>
  );
};

export default Chat;
