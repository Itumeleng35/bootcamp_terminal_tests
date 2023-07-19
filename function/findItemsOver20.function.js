export default function(itemList) {
    const result = [];
    for (let i = 0; i < itemList.length; i++) {
      const item = itemList[i];
      if (item.qty > 20) {
        result.push(item);
      }
    }
    return result;
  };