/*
  Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

  Implement the MyQueue class:

  void push(int x) Pushes element x to the back of the queue.
  int pop() Removes the element from the front of the queue and returns it.
  int peek() Returns the element at the front of the queue.
  boolean empty() Returns true if the queue is empty, false otherwise.
  Notes:

  You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
  Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

  Solution by TribalK
*/

class MyQueue {

    // Create two stacks, one to represent our queue,
    // the other to be the initial stack work.
    private Stack<Integer> initialStack;
    private Stack<Integer> stackToQueue;

    // Initialize both stacks
    public MyQueue() {
        initialStack = new Stack<Integer>();
        stackToQueue = new Stack<Integer>();
    }

    // Push to initial stack
    public void push(int x) {
        initialStack.push(x);
    }

    // If there are no elements in our queue stack,
    // Flush the initial stack and insert all elements into
    // the queue stack, pop the top element
    public int pop() {
        if(stackToQueue.empty()) {
            while(!initialStack.empty()) {
                int topElem = initialStack.peek();

                initialStack.pop();
                stackToQueue.push(topElem);
            }
        }

        int topElem = stackToQueue.peek();
        stackToQueue.pop();

        return topElem;
    }

    // If there are no elements in our queue stack,
    // Flush the initial stack and insert all elements into
    // the queue stack, return the top element
    public int peek() {
        if(stackToQueue.empty()) {
            while(!initialStack.empty()) {
                int topElem = initialStack.peek();

                initialStack.pop();
                stackToQueue.push(topElem);
            }
        }

        return stackToQueue.peek();
    }

    // If there are no elements in our queue stack,
    // Flush the initial stack and insert all elements into
    // the queue stack, check if the queue stack is empty
    public boolean empty() {
        if(stackToQueue.empty()) {
            while(!initialStack.empty()) {
                int topElem = initialStack.peek();

                initialStack.pop();
                stackToQueue.push(topElem);
            }
        }

        return stackToQueue.empty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
