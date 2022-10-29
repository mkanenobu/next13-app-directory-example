import Link from "next/link";
import { getBestItems, type Item } from "../src/request";

const App = async () => {
  const bestItems = await getBestItems();
  const filteredItems = bestItems.filter(Boolean) as Item[];

  return (
    <div>
      <div>Best</div>
      {filteredItems.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default App;
