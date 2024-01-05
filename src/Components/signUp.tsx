import { Mail, Lock } from "lucide-react";

export function SignUp() {
  return (
    <div className="bg-gradient-to-r from-white to-blue-500 w-screen h-screen flex justify-center items-center">
      <div
        className={`bg-mountains rounded-3xl w-[50%] h-[75%] flex items-center bg-cover bg-center bg-no-repeat justify-center`}
      >
        <div className="flex items-center flex-col gap-8 rounded-xl w-[50%] h-[75%] max-lg:w-full p-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-2xl">
          <h1 className="text-xl font-bold">SIGNUP</h1>
          <div className="flex border-2 items-center gap-3 rounded-full border-gray-500 w-full pr-2">
            <input
              type="text"
              placeholder="Enter email"
              className="bg-transparent h-fit p-2 rounded-s-full border-none w-full outline-none placeholder-slate-800"
            />
            <Mail />
          </div>
          <div className="flex border-2 items-center gap-3 rounded-full border-gray-500 w-full pr-2">
            <input
              type="password"
              placeholder="Enter Password"
              className="bg-transparent h-fit p-2 rounded-s-full border-none w-full outline-none placeholder-slate-800"
            />
            <Lock />
          </div>
          <div className="flex border-2 items-center gap-3 rounded-full border-gray-500 w-full pr-2">
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent h-fit p-2 rounded-s-full border-none w-full outline-none placeholder-slate-800"
            />
            <Lock />
          </div>
          <button className="border w-full bg-white text-black py-4 rounded-full shadow-lg">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
