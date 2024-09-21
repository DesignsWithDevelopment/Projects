import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="border rounded shadow-lg h-60 m-4 p-4 w-1/4">
          <h3 className="text-2xl font-semibold mb-4">Login</h3>
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="" className="font-semibold">
              Username
            </label>
            <input type="email" className="border border-black col-span-2" />
            <label htmlFor="" className="row-start-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              className="border border-black row-start-2 col-span-2"
            />
            <button className="col-span-3 font-semibold border mt-4 rounded h-8 w-28 ml-1 col-start-2">
              Login
            </button>
            <a href="#" className="col-span-3 font-semibold  col-start-2">
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
