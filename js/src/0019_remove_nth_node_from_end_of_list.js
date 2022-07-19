/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let a = head;
  let b = head;

  while (n--) {
    a = a.next;
  }

  if (!a) {
    return head.next;
  }

  while (a.next) {
    a = a.next;
    b = b.next;
  }

  b.next = b.next.next;

  return head;
};
