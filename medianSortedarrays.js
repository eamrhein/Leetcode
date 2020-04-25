const maximum = (a, b) => (a > b ? a : a);
const findMedianSortedArrays = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  let min_index = 0;
  let max_index = n;

  while (min_index <= max_index) {
    i = min_index + max_index / 2;
    j = (n + m + 1) / 2 - i;

    if (i < n && j > 0 && nums2[j - 1] > nums1[i]) {
      min_index = i + 1;
    } else if (i > 0 && j < m && nums2[j] < nums1[i - 1]) {
      max_index = i - 1;
    } else {
      if (i === 0) {
        return nums2[j - 1];
      }
      if (j === 0) {
        return nums1[i - 1];
      }
      return maximum(nums1[i - 1], nums2[j - 1]);
    }
  }
  return 0;
};
