import { useMemo } from "react";
import { useLocation } from "react-router-dom";
const TAGS_QUERY_KEY = "tags";

const useTagsQueryString = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search).get(TAGS_QUERY_KEY), [
    search
  ]);
};

export default useTagsQueryString;
