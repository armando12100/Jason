const Review = () => {

  const handleSubmit = () => {
    console.log("Working!");
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          <div className="font-bold text-black text-lg">Create Review</div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-1/2 flex">
          <h1 className="mr-10">Park Image</h1>
          <h1 className="italic text-gray-500">Park Description</h1>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          <h1 className="mr-10 font-bold text-md">Overall Rating</h1>
          <h1 className="italic text-gray-500">Park Rating</h1>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          <h1 className="mr-10 font-bold text-md">Add a Title</h1>
          <h1 className="italic text-gray-500">Title Box</h1>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          <h1 className="mr-10 font-bold text-md">Add a Written Review</h1>
          <h1 className="italic text-gray-500">Review Box</h1>
        </div>
      </div>

      <div className="flex justify-center my-5">
        <button
          className="hover:bg-orange-300 font-bold hover:text-white px-5 py-3 my-2 
            rounded-md bg-yellow-300 cursor-pointer text-black
            transition border-2 border-brown duration-200 ml-4"
          onClick={handleSubmit}
        >
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default Review;
