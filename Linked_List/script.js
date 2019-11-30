// INSERT
// Add(value)
//   Pre: value is the value to add to the list
//   Post: value has been placed at the tail of the list
//   n ← node(value)
//   if head = ø
//     head ← n
//     tail ← n
//   else
//     tail.next ← n
//     tail ← n
//   end if
// end Add
const head = Symbol("head")

class LinkedListNode {
    constructor(data)  {
        this[head] = null 
    }

    add(data) {

        //create a new node
        const newNode = new LinkedListNode(data)

        //special case: no items in list
        if (this[head] === null) {

            // set to new node
            this[head] === newNode
        } else {
            // start by looking at the first node
            let current = this[head]

            // follow "next" links until you reach the end
            while (current.next !== null) {
                current = current.next
            }

            current.next =newNode
        }

    }
}



console.log(head.next = new LinkedListNode(39))
// Prepend(value)
//  Pre: value is the value to add to the list
//  Post: value has been placed at the head of the list
//  n ← node(value)
//  n.next ← head
//  head ← n
//  if tail = ø
//    tail ← n
//  end
// end Prepend

//SEARCH
// Contains(head, value)
//   Pre: head is the head node in the list
//        value is the value to search for
//   Post: the item is either in the linked list, true; otherwise false
//   n ← head
//   while n != ø and n.value != value
//     n ← n.next
//   end while
//   if n = ø
//     return false
//   end if
//   return true
// end Contains

//DELETE
// Remove(head, value)
//   Pre: head is the head node in the list
//        value is the value to remove from the list
//   Post: value is removed from the list, true, otherwise false
//   if head = ø
//     return false
//   end if
//   n ← head
//   if n.value = value
//     if head = tail
//       head ← ø
//       tail ← ø
//     else
//       head ← head.next
//     end if
//     return true
//   end if
//   while n.next != ø and n.next.value != value
//     n ← n.next
//   end while
//   if n.next != ø
//     if n.next = tail
//       tail ← n
//     end if
//     n.next ← n.next.next
//     return true
//   end if
//   return false
// end Remove

//TRAVERSE
// Traverse(head)
//   Pre: head is the head node in the list
//   Post: the items in the list have been traversed
//   n ← head
//   while n != ø
//     yield n.value
//     n ← n.next
//   end while
// end Traverse

//TRAVERSE IN REVERSE
// ReverseTraversal(head, tail)
//   Pre: head and tail belong to the same list
//   Post: the items in the list have been traversed in reverse order
//   if tail != ø
//     curr ← tail
//     while curr != head
//       prev ← head
//       while prev.next != curr
//         prev ← prev.next
//       end while
//       yield curr.value
//       curr ← prev
//     end while
//    yield curr.value
//   end if
// end ReverseTraversal