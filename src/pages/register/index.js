import Link from 'next/link';
import React from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { BsFillLockFill } from 'react-icons/bs';

const Index = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="px-4 py-6 bg-white border rounded-md w-full sm:w-96 md:w-1/2 lg:w-1/3">
        <h3 className="text-xl font-semibold text-center mb-4">User Registration</h3>
        <form className="px-4 py-8">
          <div className="mb-4">
            <label htmlFor="Username" className="text-base font-light flex items-center gap-2">
              <BiSolidUser /> Username
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              className="border w-full px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="text-base font-light flex items-center gap-2">
              <MdEmail /> Email
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="border w-full px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="text-base font-light flex items-center gap-2">
              <BsFillLockFill /> Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="border w-full px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Confirm Password" className="text-base font-light flex items-center gap-2">
              <BsFillLockFill /> Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="border w-full px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <input type="submit" value="Sign up" className="bg-blue-400 text-white px-2 py-2 rounded-md w-full" />
          </div>
          <div className="flex items-center justify-between">
            <Link href="/login" className="text-xs text-blue-600">
              Already have an Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
