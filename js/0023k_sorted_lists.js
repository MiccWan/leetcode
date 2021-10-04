import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let q = new MinPriorityQueue({ priority: (node) => node.val });
    for (let i = 0; i < lists.length; ++i) {
        if (lists[i]) {
            q.enqueue(lists[i]);
        }
    }

    const first = q.front()?.element || null;
    let current = {};
    while (!q.isEmpty()) {
        const el = q.dequeue().element;
        current.next = el;
        current = current.next;
        if (current.next) {
            q.enqueue(current.next);
        }
    }

    return first;
};

function makeLinkList(arr) {
    if (arr.length) {
        return {
            val: arr[0],
            next: makeLinkList(arr.slice(1))
        };
    }
}

const input = [[1, 4, 5], [1, 3, 4], [2, 6]].map(makeLinkList);

// const res = mergeKLists(input);
const res = mergeKLists([]);
console.log(res);