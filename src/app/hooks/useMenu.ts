"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CATEGORIES_API } from "../utils/APIs";
import { addMenus } from "../redux/menuSlice";
import { useAppSelector } from "../redux/store";

const useMenu = () => {
  const dispatch = useDispatch();
  const menu = useAppSelector((store) => store.menu.menus);

  useEffect(() => {
    menu.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CATEGORIES_API);
    const json = await data.json();
    dispatch(addMenus(json));
  };
};

export default useMenu;
