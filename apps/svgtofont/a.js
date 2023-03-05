const arr = [1, 2, 3, 5, 6, 1];
const result = [];
const cache = [];

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  let sum = 9;
  let temp = [];

  let [left, right] = [i + 1, arr.length - 1];

  while (left < right) {
    let s = arr[i] + arr[left] + arr[right];
    if (s === sum) {
      cache.push(`${arr[i]}${arr[left]}${arr[right]}`);

      if (`${arr[i]}${arr[left]}${arr[right]}`.includes(cache)) {
        left++;
        right--;
        continue;
      } else {
        console.log(`${arr[i]}${arr[left]}${arr[right]}`, cache)
        temp.push([arr[i], arr[left], arr[right]]);
      }



      left++;
      right--;
    } else if (s < sum) {
      left++;
    } else {
      right--;
    }
  }

  if (temp.length) {
    result.push(...temp);
  }
}

console.log(result);