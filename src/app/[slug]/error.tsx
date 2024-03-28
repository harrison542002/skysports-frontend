"use client";

import PageContainer from "@/components/container/PageContainer";
import React from "react";

function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <>
      <PageContainer title="Something Went Wrong!" subtitle={error.message}>
        <div>
          <h5>Please check if the url is correct or not !</h5>
        </div>
      </PageContainer>
    </>
  );
}

export default Error;
