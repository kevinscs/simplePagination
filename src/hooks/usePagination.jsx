import { useEffect, useState } from "react";
import qs from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

export default function usePagination() {
  const location = useLocation();
  const navigate = useNavigate();
  const [actualPage, setActualPage] = useState(getActualPage() || 1);

  function getActualPage() {
    const queryParams = qs.parse(location.search);
    const page = queryParams.page;

    return page ? Number(page) : undefined;
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search);

    navigate({
      search: qs.stringify({
        ...queryParams,
        page: actualPage,
      }),
    });
  }, [actualPage, location.search, navigate]);

  return {
    actualPage,
    setActualPage
  };
};
