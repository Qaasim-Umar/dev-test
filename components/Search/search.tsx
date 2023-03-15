const search = () => {
    return (
      <div className=" flex justify-center">
        <div className=" flex items-center gap-2 max-w-md rounded-lg">
          <div className="flex bg-white p-2 w-4/5 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="bg-gray-100 w-4/5 outline-none"
              type="text"
              placeholder="Article name or keyword..."
            />
          </div>
  
          <div className="py-2 px-2 text-white font-semibold bg-grey rounded-lg cursor-pointer">
            <span>Search</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default search;
  