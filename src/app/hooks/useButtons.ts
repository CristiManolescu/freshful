"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HOMEPAGE_API } from "../utils/APIs";
import { addButtons } from "../redux/buttonsMenuSlice";
import { useAppSelector } from "../redux/store";

const useButtons = () => {
  const dispatch = useDispatch();
  const buttons = useAppSelector((store) => store.menuButton.buttons);

  useEffect(() => {
    buttons.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOMEPAGE_API);
    const json = await data.json();
    dispatch(addButtons(json.slots[1].buttons));
  };
};

export default useButtons;
