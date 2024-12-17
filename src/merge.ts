
export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    const merged: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1;
  
    while (i < collection_1.length && j < collection_2.length) {
      if (collection_1[i] <= collection_2[j]) {
        merged.push(collection_1[i++]);
      } else {
        merged.push(collection_2[j++]);
      }
    }
    while (i < collection_1.length) merged.push(collection_1[i++]);
    while (j < collection_2.length) merged.push(collection_2[j++]);
  
  
    while (k >= 0) {
      let pos = merged.findIndex((x) => x > collection_3[k]);
      if (pos === -1) {
        merged.push(collection_3[k--]);
      } else {
        merged.splice(pos, 0, collection_3[k--]);
      }
    }
  
    return merged;
  }
  