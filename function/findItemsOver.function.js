export default function(itemList, threshold) {
    const result = [];
  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    if (item.qty > threshold) {
      result.push(item);
    }
  }
  return result;
}
