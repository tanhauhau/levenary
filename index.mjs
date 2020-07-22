import leven from 'fastest-levenshtein';

export default function levenArray(str, array) {
  let minLeven = Number.POSITIVE_INFINITY;
  let result = undefined;
  for(const item of array) {
    const distance = leven.distance(str, item);
    if (distance < minLeven) {
      minLeven = distance;
      result = item;
    }
  }
  return result;
}