import { useState } from "react";

export const usePagination = (data: any[], perPage = 5) => {
  const [page, setPage] = useState(1);

  const totalPages = data && Math.ceil(data.length / perPage);

  const start = (page - 1) * perPage;
  const currentdata = data && data.slice(start, start + perPage);

  return {
    pagedata: currentdata,
    currentPage: page,
    totalPages: totalPages,
    next: () => {
      page < totalPages && setPage(page + 1);
    },
    prev: () => {
      page > 1 && setPage(page - 1);
    },
  };
};
