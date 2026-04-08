"use client";

import { PaginationProps } from "@/types/Pagination.types";
import React, { useEffect, useState } from "react"; // Add React import
import Button from "./Button";

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: PaginationProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Track window width (SSR-safe)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Mobile: show first, last, current ±1
  const mobilePages = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
  );

  const displayedPages = windowWidth && windowWidth < 640 ? mobilePages : pages;

  return (
    <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      {/* Prev Button */}
      <Button
        disabled={currentPage === 1}
        className="cursor-not-allowed"
        onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
      >
        Prev
      </Button>

      {/* Page Buttons */}
      <div className="flex items-center gap-1">
        {displayedPages.map((page, idx) => {
          // Ellipsis for skipped pages
          if (idx > 0 && page - displayedPages[idx - 1] > 1) {
            return (
              <span key={`dots-${page}`} className="px-2 hidden sm:inline">
                ...
              </span>
            );
          }

          return (
            <Button
              key={page}
              size="sm"
              variant={page === currentPage ? "primary" : "default"}
              onClick={() => onPageChange?.(page)}
            >
              {page}
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      <Button
        disabled={currentPage === totalPages}
        onClick={() =>
          currentPage < totalPages && onPageChange?.(currentPage + 1)
        }
      >
        Next
      </Button>
    </div>
  );
};

export default React.memo(Pagination);
