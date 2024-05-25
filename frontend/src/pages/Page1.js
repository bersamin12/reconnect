import React from 'react';

const Page1 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-iphone-gray text-iphone-blue">
      <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-center iphone-14-pro-max:bg-red-500 iphone-14-pro-max:p-8">
        <h1 className="text-3xl font-bold iphone-14-pro-max:text-5xl">
          Welcome to iPhone 14 Pro Max View
        </h1>
        <p className="mt-4 iphone-14-pro-max:mt-8">
          This is a customized view for iPhone 14 Pro Max.
        </p>
      </div>
    </div>
  );
};


export default Page1;
