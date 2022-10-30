import { type FC, type PropsWithChildren } from "react";
import "@/styles/global.css";
import { SideMenu, type SideMenuItem } from "./SideMenu";
import styles from "./BaseLayout.module.css";

export const BaseLayout: FC<
  PropsWithChildren<{ selectedSideMenuItem?: SideMenuItem["name"] }>
> = ({ children, selectedSideMenuItem }) => {
  return (
    <div className={styles.container}>
      <SideMenu selected={selectedSideMenuItem} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
