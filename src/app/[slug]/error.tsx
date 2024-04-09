"use client";

import PageContainer from "@/components/container/PageContainer";
import React from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(`${error.digest}: ${error.message}`);

  return (
    <>
      <PageContainer title="Something Went Wrong!" subtitle={""}>
        <div>
          <h5>Please check if the url is correct or not !</h5>
          <button
            className="bg-red-600 text-slate-100 p-2 rounded-md my-2"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </PageContainer>
    </>
  );
}

export default Error;
