const addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let carry = 0;
  let curr = dummy;
  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = carry + x + y;
    carry = parseInt(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
