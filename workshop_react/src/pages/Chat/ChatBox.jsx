import DefaultImage from "../../assets/images/defaultImage.png";

const ChatBox = () => {
  return (
    <div className="flex flex-col rounded-2xl border border-blue-100 bg-white mt-6 w-[767px] h-[672px]">
      <div className="flex conversationHeader items-center justify-between rounded-tl-lg rounded-tr-lg bg-white px-6 pt-7 pb-7">
        <div className="ml-2 flex items-center justify-center gap-6">
          <img className="w-10 h-10" src={DefaultImage} alt="defaultImage" />
          <div className="flex flex-col gap-1">
            <h5 className="text-black font-public-sans text-xl font-bold">
              Doctor
            </h5>
            <p className="text-black font-public-sans text-xs font-normal">
              #CLIT154ZDH
            </p>
          </div>
        </div>
        <div className="flex gap-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col px-6 pt-7 pb-7">
        {/* This is a message */}
        <div className="flex gap-7">
          <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full bg-green-600 mt-[13px]">
            <p className="text-white mb-[1px] font-roboto text-xl font-normal leading-5">
              S
            </p>
          </div>
          <div className="flex flex-col max-w-xs">
            <div className="rounded-lg border border-blue-900 bg-white text-black font-normal font-roboto text-xs leading-[20px] tracking-[0.14px] px-3 py-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </div>
            <p className="text-gray-700 font-normal font-public-sans text-xs leading-normal mt-[10px]">
              8:00 PM
            </p>
          </div>
        </div>
        {/* End of the message */}
        {/* This is a message */}
        <div className="flex gap-7 self-end">
          <div className="flex flex-col max-w-[362px]">
            <div className="rounded-lg bg-green-600 text-white font-normal font-roboto text-xs leading-[20px] tracking-[0.14px] px-3 py-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </div>
            <p className="self-end text-gray-700 font-normal font-public-sans text-xs leading-normal mt-[10px]">
              8:00 PM
            </p>
          </div>
          <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full mt-[13px]">
            <img src={DefaultImage} alt="defaultImage" className="" />
          </div>
        </div>
        {/* End of the message */}
        {/* This is a message */}
        <div className="flex gap-7">
          <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full bg-green-600 mt-[13px]">
            <p className="text-white mb-[1px] font-roboto text-xl font-normal leading-5">
              S
            </p>
          </div>
          <div className="flex flex-col max-w-xs">
            <div className="rounded-lg border border-blue-900 bg-white text-black font-normal font-roboto text-xs leading-[20px] tracking-[0.14px] px-3 py-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </div>
            <p className="text-gray-700 font-normal font-public-sans text-xs leading-normal mt-[10px]">
              8:00 PM
            </p>
          </div>
        </div>
        {/* End of the message */}
        {/* This is a message */}
        <div className="flex gap-7 self-end">
          <div className="flex flex-col max-w-[362px]">
            <div className="rounded-lg bg-blue-500 text-white font-normal font-roboto text-xs leading-[20px] tracking-[0.14px] px-3 py-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </div>
            <p className="self-end text-gray-700 font-normal font-public-sans text-xs leading-normal mt-[10px]">
              8:00 PM
            </p>
          </div>
          <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full mt-[13px]">
            <img src={DefaultImage} alt="defaultImage" className="" />
          </div>
        </div>
        {/* End of the message */}
      </div>
      <div className="flex flex-col px-6 h-[170px] justify-end mb-5">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mt-[6px]"
          >
            <path
              d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              fill="black"
              fillOpacity="0.54"
            />
          </svg>
          <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full bg-green-600">
            <p className="text-white mb-[1px] font-roboto text-xl font-normal leading-5">
              S
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 rounded-xl border border-blue-200 bg-white px-2 py-2 mt-4">
          <input
            type="text"
            className="placeholder-gray-400 font-public-sans text-xs font-normal px-6 py-3 w-full"
            placeholder="Digite a mesangem"
          />
          <div className="flex gap-4 px-2">
            <button className="flex justify-center items-center flex-shrink-0 rounded-[10px] w-10 h-10 bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z"
                  fill="black"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
