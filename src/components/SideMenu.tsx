import Link from "next/link";
import styles from "./SideMenu.module.css";

const items = [
  {
    name: "New",
    queryParam: "new",
  },
  {
    name: "Top",
    queryParam: "top",
  },
  {
    name: "Best",
    queryParam: "best",
  },
] as const;

export type SideMenuItem = typeof items[number];

export const SideMenu = ({ selected }: { selected?: SideMenuItem["name"] }) => {
  return (
    <div className={styles.sideMenu}>
      {items.map((item) => {
        return (
          <div key={item.queryParam}>
            {item.name === selected ? (
              <div>{item.name}</div>
            ) : (
              <Link href={{ pathname: "/", query: { q: item.queryParam } }}>
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};
