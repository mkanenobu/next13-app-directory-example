import Link from "next/link";
import {
  getItems,
  getNewItemIds,
  getTopItemIds,
  getBestItemIds,
  type Item,
  ItemId,
} from "../src/request";
import type { SideMenuItem } from "../src/components/SideMenu";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const fetcherMap: Record<SideMenuItem["queryParam"], () => Promise<ItemId[]>> =
  {
    new: getNewItemIds,
    top: getTopItemIds,
    best: getBestItemIds,
  };

const App = async ({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { q: SideMenuItem["queryParam"] };
}) => {
  const q = searchParams.q || "new";
  const items = await getItems((await fetcherMap[q]()).slice(0, 20));
  const filteredItems = items.filter(Boolean) as Item[];

  return (
    <div>
      <div>{capitalize(q)}</div>
      <ol>
        {filteredItems.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
