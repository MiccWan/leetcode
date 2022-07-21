/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function (head) {
  let a = head.next;
  let b = head;

  while (a) {
    a = a.next?.next;
    b = b.next;
  }

  return b;
};
