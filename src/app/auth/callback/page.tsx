"use client"
import React, { useEffect } from 'react'
import { supabase } from '../../../../lib/SupabaseClient';
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const handleAuth = async () => {
            //checking if user has registered
            const {error: userError, data: {user}} = await supabase.auth.getUser()
            if(userError || !user){
                router.replace("/auth/signup")
                return;
            }
        }
    }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-background max-w-[300px] w-[95%] py-12 rounded-lg">
        <h2 className="font-bold text-3xl text-primary-text mb-12">
          Setup Profile
        </h2>
        {/*{message && (<p className="bg-primary py-1 mb-4 font-semibold text-center">
          {message}
        </p>)} */}

        <form >
            <input
          
          type="text"
          placeholder="Full Name"
          className="mb-6 w-full bg-background outline-none rounded-md p-4 placeholder-secondary-text border border-border text-white"
        />
        <input
          
          type="text"
          placeholder="Username"
          className="mb-4 w-full bg-background outline-none rounded-md p-4 placeholder-secondary-text border border-border text-white"
        />
        <label htmlFor="avatar">Profile Pic</label>
        <input
          id= 'avatar'
          type="file"
          
          className="mb-4 w-full bg-background outline-none rounded-md p-4 placeholder-secondary-text border border-border text-white"
        />
        <button className="text-black w-full mt-8 rounded-full h-10 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 font-semibold bg-white">
          Continue
        </button>
        </form>

        
      </div>
    </div>
  )
}
