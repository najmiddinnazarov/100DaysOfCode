// 19. Remove Nth Node From End of List
/* var removeNthFromEnd = function (head, n) {
  var node = new ListNode();
  var rep = node;
  var hash = [];
  while (head !== null) {
    hash.push(head.val);
    head = head.next;
  }
  var count = hash.length - n;
  let i = 0;
  while (i < hash.length) {
    if (count !== 0) {
      node.next = new ListNode(hash[i]);
      count--;
      node = node.next;
    } else {
      count += n - 1;
    }
    i++;
  }
  return rep.next;
};
console.log(removeNthFromEnd([1, 2], 1));
 */
