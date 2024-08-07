const Contact = () => {
  return (
    <div className="bg-black opacity-95 flex h-screen flex-col">
      <h1 className="text-2xl font-bold text-white pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        CONTACT
      </h1>
      <div className="flex justify-center items-center flex-col">

        <div className="pt-10 flex flex-col justify-center items-center">
          <p className="text-white pl-3 pb-3 w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            veritatis eos nulla sit iusto vitae quidem obcaecati assumenda
            consequatur ex. Vel illo natus quis at asperiores, eos aperiam
            quidem nostrum?
          </p>
          <p className="text-white pl-3 w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            veritatis eos nulla sit iusto vitae quidem obcaecati assumenda
            consequatur ex. Vel illo natus quis at asperiores, eos aperiam
            quidem nostrum?
          </p>

          <div className="w-1/2">
            <p className="text-white pl-3 pt-4">
              <span className="text-md font-bold pr-2">Email:</span>
              jason@gmail.com
            </p>
            <p className="text-white pl-3">
              <span className="text-md font-bold pr-2">Phone:</span>
              (909) 123-4567
            </p>
            <p className="text-white pl-3">
              <span className="text-md font-bold pr-2">Fax:</span>
              (909) 123-4567
            </p>
          </div>

          <div className="text-zinc-400 pt-16 w-1/2 pl-10 shadow-2xl rounded-lg">
            <form action="">
              <div className="flex flex-col">
                <div className="flex pb-3">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="placeholder-zinc-400 border-zinc-400 rounded-md shadow-md bg-transparent border-2 mr-2 px-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="placeholder-zinc-400 border-zinc-400 rounded-md shadow-md bg-transparent border-2 pl-2"
                  />
                </div>

                <div className="pb-3">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="placeholder-zinc-400 border-zinc-400 rounded-md shadow-md bg-transparent border-2 mr-2 px-2"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                  <select
                    name=""
                    id=""
                    className="placeholder-zinc-400 border-zinc-400 rounded-md shadow-md bg-transparent border-2 pl-2"
                  >
                    <option value="" disabled selected>
                      Services
                    </option>
                    <option value="" className="bg-black">
                      TV
                    </option>
                    <option value="" className="bg-black">
                      Internet
                    </option>
                    <option value="" className="bg-black">
                      Doorbells
                    </option>
                    <option value="" className="bg-black">
                      Garages
                    </option>
                    <option value="" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <textarea
                name=""
                id=""
                placeholder="Enter your message"
                className="placeholder-zinc-400 border-zinc-400 rounded-md shadow-md 
                bg-transparent border-2 w-5/6 min-h-32 pl-2 resize-none"
              ></textarea>
            </form>
            <div className="flex w-3/4 justify-center pt-2">
              <button className="bg-gray-700 text-white rounded-lg py-2 px-8 
              hover:cursor-pointer hover:border-2 hover:bg-transparent hover:border-zinc-400">
                Submit
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
