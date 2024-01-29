"use client";
import React from "react";

// The next will pass the error as a props to our error page
type IProps = {
  error: Error; // Error - the nextjs will pass the Object Error, which will be the type of our error
  reset: () => void;
};

const ErrorPage = ({ error, reset }: IProps) => {
  // reset => nextjs will automatically pass the reset prop to our component, since some errors are temporary, this reset function will allow the user to retry the page

  // In a real world application we have to log the error type to register it, to identify the error and fix it, since the console is just showing to the client it's not useful for production. One good service for register log of the site is a service called `Sentry`
  console.log("Error", error);
  return (
    <>
      <div>An unexpected error has occured.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
