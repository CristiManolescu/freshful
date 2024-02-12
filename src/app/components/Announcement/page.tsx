"use client";
import useAnnounce from "@/app/hooks/useAnnounce";
import { useAppSelector } from "@/app/redux/store";

import styles from "./announcement.module.css";

import { MdOutlineClose } from "react-icons/md";

const Announcement = () => {
  useAnnounce();
  const announcement = useAppSelector(
    (store) => store.announcement.announceText
  );

  return (
    <div className={styles.announcement}>
      <div>{announcement}</div>
      <div className={styles.button}>
        <MdOutlineClose />
      </div>
    </div>
  );
};

export default Announcement;
