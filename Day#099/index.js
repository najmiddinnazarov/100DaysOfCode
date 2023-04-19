// 83. Remove Duplicates from Sorted List
/* var deleteDuplicates = function (head) {
  var temp = head;
  while (temp !== null) {
    if (temp.next !== null && temp.val === temp.next.val) {
      var next_next = temp.next.next;
      var nodeToDelete = temp.next;
      temp.next = next_next;
      delete nodeToDelete;
    } else {
      temp = temp.next;
    }
  }
  return head;
}; */
