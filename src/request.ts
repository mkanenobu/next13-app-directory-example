export type ItemId = number;

const getBestItemIds = (): Promise<ItemId[]> => {
  return fetch("https://hacker-news.firebaseio.com/v0/beststories.json").then(
    (r) => r.json()
  );
};

export type Item = {
  by: string;
  descendants: number;
  id: ItemId;
  kids: ItemId[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export const getItemDetail = (id: ItemId): Promise<Item | undefined> => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((r) => r.json())
    .catch((e) => {
      console.error(e);
      throw e;
    });
};

export const getBestItems = async (): Promise<Array<Item | undefined>> => {
  const bestItemIds = await getBestItemIds();
  return Promise.all(bestItemIds.map(getItemDetail));
};
