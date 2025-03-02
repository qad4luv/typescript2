A simple Todo List application using TypeScript
===============================================
1. Create an interface TodoItem with the following properties:

   - id: number

   - task: string

   - completed: boolean

2. Implement a TodoList class with the following methods:

   - `addTodo(task: string): void` - Adds a new todo item

   - `completeTodo(id: number): void` - Marks a todo item as completed

   - `removeTodo(id: number): void` - Removes a todo item

   - `listTodos(): TodoItem[]` - Returns all todo items

3. The TodoList class should maintain an array of TodoItem objects.

4. Add a method to filter todos by their completed status.

5. Implement a method to update the task description of a todo item.

6. Add a method to clear all completed todos.

7. Extend the TodoItem interface to include a `dueDate property of type Date`. Update relevant methods to accommodate this new property.
