/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head;
  let last;
  let carry = 0;
  let a = l1;
  let b = l2;
  while (a || b) {
    const v = (a?.val || 0) + (b?.val || 0) + carry;
    const node = { val: v % 10, next: null };
    carry = Math.floor(v / 10);
    if (!head) {
      head = node;
      last = node;
    }
    else {
      last.next = node;
      last = node;
    }
    a = a?.next;
    b = b?.next;
  }
  if (carry) {
    last.next = { val: carry, next: null };
  }
  return head;
};
