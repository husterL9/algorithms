//给你一个整数数组 nums 。
//如果任一值在数组中出现 至少两次 ，返回 true ；
//如果数组中每个元素互不相同，返回 false 。
type Dict = { [k: string]: any };
function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}
function containsDuplicate(nums: number[]): boolean {
  const count: object = {};
  for (let index = 0; index < nums.length; index++) {
    if (!count.hasOwnProperty(nums[index])) {
      const temp: string = nums[index].toString();
      // Object.defineProperty(count, temp, {
      //   value: 1,
      //   enumerable: true,
      // });
      count[temp] = nums[index];
      (count as Dict)[temp] = nums[index];
    } else {
      console.log(count);
      return true;
    }
  }
  console.log(count);
  return false;
}
console.log(containsDuplicate([5, 6, 7]));
