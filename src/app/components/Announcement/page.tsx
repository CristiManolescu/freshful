"use client";
import useAnnounce from "@/app/hooks/useAnnounce";
import { useAppSelector } from "@/app/redux/store";

import styles from "./announcement.module.css";

import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { closeAnnounce } from "@/app/redux/announceSlice";

const Announcement = () => {
  useAnnounce();
  const announcement = useAppSelector(
    (store) => store.announcement.announceText
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.announcement}>
      <div>{announcement}</div>
      <div className={styles.button} onClick={() => dispatch(closeAnnounce())}>
        <MdOutlineClose />
      </div>
    </div>
  );
};

export default Announcement;
