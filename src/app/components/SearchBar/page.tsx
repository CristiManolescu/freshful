import { useEffect, useState } from "react";

import styles from "./searchBar.module.css";
import { SEARCH_API } from "@/app/utils/APIs";

import { IoSearchOutline } from "react-icons/io5";

import { cacheResults } from "@/app/redux/searchSlice";
import { useAppSelector } from "@/app/redux/store";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useAppSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className={styles.component}>
      <div className={styles.searchForm}>
        <input
          placeholder="Caută ceva fresh...ful"
          className={styles.input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        <IoSearchOutline className={styles.icon} />
      </div>
      {showSuggestions && (
        <div className={styles.suggestions}>
          <ul className={styles.list}>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className={styles.item}
                onClick={() => {
                  setSearchQuery(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
