"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

type Props = { totalPage: number };

const Pagination = (props: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className="flex justify-end my-5">
      <div className="flex gap-8">
        <Link
          href={createPageURL(currentPage - 1)}
          className={`${
            currentPage === 1
              ? "pointer-events-none text-blue-400"
              : "text-blue-700 font-semibold"
          }`}
        >
          Previous
        </Link>
        <div>
          Page <span className="text-blue-700">{currentPage}</span> of{" "}
          {props.totalPage}
        </div>
        <Link
          href={createPageURL(currentPage + 1)}
          className={`${
            currentPage === props.totalPage
              ? "pointer-events-none text-blue-400"
              : "text-blue-700 font-semibold"
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
