"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { createClient } from "@/prismicio";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import React, { useCallback } from "react";

type BlogPaginationProps = {
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
  classname?: string;
};

const BlogPagination = ({
  totalPages,
  itemsPerPage,
  currentPage,
  classname,
}: BlogPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const pageElements = Array.from({ length: totalPages }, (_, index) => (
    <PaginationItem
      key={index}
      className={clsx("", {
        "rounded-md bg-neutral-300": currentPage === index + 1,
      })}
    >
      <PaginationLink
        onClick={() => {
          setPageNumber(index + 1);
        }}
      >
        {index + 1}
      </PaginationLink>
    </PaginationItem>
  ));

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const setPageNumber = (pageNumber: number) => {
    const selectedPageNumber = String(pageNumber);
    router.push(pathname + "?" + createQueryString("page", selectedPageNumber));
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const nextpageNumber = String(currentPage - 1);
      router.push(pathname + "?" + createQueryString("page", nextpageNumber));
    } else {
      console.log("do something else first");
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const nextpageNumber = String(currentPage + 1);
      router.push(pathname + "?" + createQueryString("page", nextpageNumber));
    } else {
      console.log("cant update the page because you are already at the end");
    }
  };

  return (
    <div className={clsx(classname)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className="cursor-pointer"
            />
          </PaginationItem>
          {pageElements}
          <PaginationItem>
            <PaginationNext onClick={handleNext} className="cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
