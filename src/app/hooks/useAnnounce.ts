"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAnnounce } from "../redux/announceSlice";
import { ANNOUNCEMENT_API } from "../utils/APIs";
import { useAppSelector } from "../redux/store";

const useAnnounce = () => {
  const dispatch = useDispatch();

  const announcement = useAppSelector(
    (store) => store.announcement.announceText
  );

  useEffect(() => {
    announcement === "" && fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(ANNOUNCEMENT_API);
    const json = await data.json();
    dispatch(addAnnounce(json.announcement));
  };
};

export default useAnnounce;
