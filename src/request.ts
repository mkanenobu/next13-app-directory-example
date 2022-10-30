export type ItemId = number;

export const getBestItemIds = (): Promise<ItemId[]> =>
  fetch("https://hacker-news.firebaseio.com/v0/beststories.json").then((r) =>
    r.json()
  );

export const getNewItemIds = (): Promise<ItemId[]> =>
  fetch("https://hacker-news.firebaseio.com/v0/newstories.json").then((r) =>
    r.json()
  );

export const getTopItemIds = (): Promise<ItemId[]> =>
  fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then((r) =>
    r.json()
  );

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

export const getItems = async (
  itemIds: ItemId[]
): Promise<Array<Item | undefined>> => {
  return Promise.all(itemIds.map(getItemDetail));
};
