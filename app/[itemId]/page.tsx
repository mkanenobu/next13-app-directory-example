import { notFound } from "next/navigation";
import { getItemDetail } from "../../src/request";
import Link from "next/link";

const parseId = (v: string) => {
  const id = parseInt(v, 10);
  return isNaN(id) ? null : id;
};

const Item = async ({
  params,
  searchParams,
}: {
  params: { itemId: string };
  searchParams: {};
}) => {
  console.log(params, searchParams);
  const itemId = parseId(params.itemId);

  if (!itemId) {
    console.log(itemId);
    notFound();
    return null;
  }

  const item = await getItemDetail(itemId);
  if (!item) {
    notFound();
    return null;
  }

  return (
    <div>
      <div>
        <Link href={item.url} target="_blank">
          {item.title}
        </Link>
      </div>
      <div>by {item.by}</div>
      <div>score {item.score}</div>
      <div>posted at {new Date(item.time * 1000).toLocaleString()}</div>
    </div>
  );
};

export default Item;
