//sort data reverse by data
export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
  return sortedData;
};
