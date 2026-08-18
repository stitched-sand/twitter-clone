"use client";
import Link from "next/link";
import { useState } from "react";
import { signUpUser } from "../../../../services/auth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signup = async (e:React.FormEvent) => {
    e.preventDefault();
    if(!email.trim() || !password.trim()) {
        setMessage("All fields are required!");
        return;
    }

    const result = await signUpUser(email, password)
    if(result?.error){
        setMessage(result.error)
    } else{
        setMessage("Signup successful")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-background max-w-[300px] w-[95%] py-12 rounded-lg">
        <h2 className="font-bold text-3xl text-primary-text mb-12">
          Sign up to X
        </h2>
        {message && (<p className="bg-primary py-1 mb-4 font-semibold text-center">
          {message}
        </p>)}

        <form onSubmit={signup}>
            <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="mb-6 w-full bg-background outline-none rounded-md p-4 placeholder-secondary-text border border-border text-white"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="mb-4 w-full bg-background outline-none rounded-md p-4 placeholder-secondary-text border border-border text-white"
        />
        <button className="text-black w-full mt-8 rounded-full h-10 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 font-semibold bg-white">
          Continue
        </button>
        </form>

        <div className="text-secondary-text mt-8">
          <span className="mr-1">Already have an account?</span>
          <Link href="/" className="text-primary">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
