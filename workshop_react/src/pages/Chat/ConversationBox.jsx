import DefaultImage from "../../assets/images/defaultImage.png";

const ConversationBox = () => {
  return (
    <div className="flex gap-3 mt-6">
      <div className="flex flex-col rounded-lg border border-blue-200 bg-white px-4 py-4 gap-2">
        <p className="text-black font-public-sans text-2xl font-normal mb-3">
          Chat
        </p>
        <div className="flex">
          <div className="flex searchBarChat gap-5 py-3 px-3 rounded-lg bg-white filter drop-shadow-0 0 3px rgba-225-226-255-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <path
                d="M16.8947 14H16.0631L15.7684 13.73C16.8 12.59 17.421 11.11 17.421 9.5C17.421 5.91 14.3579 3 10.5789 3C6.79997 3 3.73682 5.91 3.73682 9.5C3.73682 13.09 6.79997 16 10.5789 16C12.2737 16 13.8316 15.41 15.0316 14.43L15.3158 14.71V15.5L20.5789 20.49L22.1473 19L16.8947 14ZM10.5789 14C7.95787 14 5.84208 11.99 5.84208 9.5C5.84208 7.01 7.95787 5 10.5789 5C13.2 5 15.3158 7.01 15.3158 9.5C15.3158 11.99 13.2 14 10.5789 14Z"
                fill="#ADADAD"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="focus:border-white font-roboto text-xs font-normal"
            />
          </div>
          <button className="flex items-center justify-center gap-2 mx-4 my-2">
            <p className="text-black font-roboto text-base font-medium leading-6 uppercase">
              CHAT
            </p>
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.8332 10.8333H10.8332V15.8333H9.1665V10.8333H4.1665V9.16666H9.1665V4.16666H10.8332V9.16666H15.8332V10.8333Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {/* Start Conversation Card */}
          <div className="flex items-center justify-between conversationCard px-[14px] py-4 rounded-lg bg-white">
            <div className="flex items-center justify-between gap-[18px]">
              <div className="w-10 h-10 relative">
                <img className="" src={DefaultImage} alt="defaultImage" />
                <div className="flex absolute bottom-0 right-0 rounded-full bg-primary-main bg-white p-[2px]">
                  <span className="w-2 h-2 rounded-md bg-blue-500 bg-opacity-100"></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <h5 className="text-black font-public-sans text-base font-semibold">
                  Doctor
                </h5>
                <p className="text-gray-400 font-public-sans text-xs font-normal">
                  Chat
                </p>
              </div>
            </div>
            <div className="flex gap-7 h-[48px]">
              <p className="text-black font-public-sans text-xs font-normal self-end">
                00:31:00
              </p>
              <svg
                className="self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="black" />
              </svg>
            </div>
          </div>
          {/* End Conversation Card */}

          {/* Start Conversation Card */}
          <div className="flex items-center justify-between px-[14px] py-4 rounded-lg bg-white">
            <div className="flex items-center justify-between gap-[18px]">
              <div className="w-10 h-10 relative">
                <img className="" src={DefaultImage} alt="defaultImage" />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <h5 className="text-black font-public-sans text-base font-semibold">
                  Doctor
                </h5>
                <p className="text-gray-400 font-public-sans text-xs font-normal">
                  Chat
                </p>
              </div>
            </div>
            <div className="flex gap-7 h-[48px]">
              <p className="text-black font-public-sans text-xs font-normal self-end">
                00:31:00
              </p>
              <svg
                className="self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="black" />
              </svg>
            </div>
          </div>
          {/* End Conversation Card */}

          {/* Start Conversation Card */}
          <div className="flex items-center justify-between px-[14px] py-4 rounded-lg bg-white">
            <div className="flex items-center justify-between gap-[18px]">
              <div className="w-10 h-10 relative">
                <img className="" src={DefaultImage} alt="defaultImage" />
                <div className="flex absolute bottom-0 right-0 rounded-full bg-primary-main bg-white p-[2px]">
                  <span className="w-2 h-2 rounded-md bg-blue-500 bg-opacity-100"></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <h5 className="text-black font-public-sans text-base font-semibold">
                  Doctor
                </h5>
                <p className="text-gray-400 font-public-sans text-xs font-normal">
                  Chat
                </p>
              </div>
            </div>
            <div className="flex gap-7 h-[48px]">
              <p className="text-black font-public-sans text-xs font-normal self-end">
                00:31:00
              </p>
              <svg
                className="self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="black" />
              </svg>
            </div>
          </div>
          {/* End Conversation Card */}

          {/* Start Conversation Card */}
          <div className="flex items-center justify-between px-[14px] py-4 rounded-lg bg-white">
            <div className="flex items-center justify-between gap-[18px]">
              <div className="w-10 h-10 relative">
                <img className="" src={DefaultImage} alt="defaultImage" />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <h5 className="text-black font-public-sans text-base font-semibold">
                  Doctor
                </h5>
                <p className="text-gray-400 font-public-sans text-xs font-normal">
                  Chat
                </p>
              </div>
            </div>
            <div className="flex gap-7 h-[48px]">
              <p className="text-black font-public-sans text-xs font-normal self-end">
                00:31:00
              </p>
              <svg
                className="self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="black" />
              </svg>
            </div>
          </div>
          {/* End Conversation Card */}

          {/* Start Conversation Card */}
          <div className="flex items-center justify-between px-[14px] py-4 rounded-lg bg-white">
            <div className="flex items-center justify-between gap-[18px]">
              <div className="w-10 h-10 relative">
                <img className="" src={DefaultImage} alt="defaultImage" />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <h5 className="text-black font-public-sans text-base font-semibold">
                  Doctor
                </h5>
                <p className="text-gray-400 font-public-sans text-xs font-normal">
                  Chat
                </p>
              </div>
            </div>
            <div className="flex gap-7 h-[48px]">
              <p className="text-black font-public-sans text-xs font-normal self-end">
                00:31:00
              </p>
              <svg
                className="self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="black" />
              </svg>
            </div>
          </div>
          {/* End Conversation Card */}

          {/* Start Conversation Card */}
          <div className="flex items-center justify-between px-[14px] py-4 rounded-lg bg-white">
            <div className="flex items-center justify-between gap-[18px]">
              <div className="w-10 h-10 relative">
                <img className="" src={DefaultImage} alt="defaultImage" />
                <div className="flex absolute bottom-0 right-0 rounded-full bg-primary-main bg-white p-[2px]">
                  <span className="w-2 h-2 rounded-md bg-blue-500 bg-opacity-100"></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <h5 className="text-black font-public-sans text-base font-semibold">
                  Doctor
                </h5>
                <p className="text-gray-400 font-public-sans text-xs font-normal">
                  Chat
                </p>
              </div>
            </div>
            <div className="flex gap-7 h-[48px]">
              <p className="text-black font-public-sans text-xs font-normal self-end">
                00:31:00
              </p>
              <svg
                className="self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="black" />
              </svg>
            </div>
          </div>
          {/* End Conversation Card */}
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
