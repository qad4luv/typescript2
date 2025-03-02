interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate
        };
        this.todos.push(newTodo);
        console.log(`Added: "${task}" (Due: ${dueDate.toDateString()})`);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(item => item.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Marked as completed: "${todo.task}"`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    removeTodo(id: number): void {
        const index = this.todos.findIndex(item => item.id === id);
        if (index !== -1) {
            console.log(`Removed: "${this.todos[index].task}"`);
            this.todos.splice(index, 1);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    listTodos(): TodoItem[] {
        return this.todos;
    }

    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find(item => item.id === id);
        if (todo) {
            console.log(`Updated: "${todo.task}" to "${newTask}"`);
            todo.task = newTask;
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("Cleared all completed tasks.");
    }
}

// Example usage
const myTodoList = new TodoList();
myTodoList.addTodo("Complete TypeScript assignment", new Date("2025-03-02"));
myTodoList.addTodo("Attend SOTU 11", new Date("2025-03-03"));
myTodoList.listTodos();
myTodoList.completeTodo(1);
myTodoList.updateTodo(2, "Watch Learnable Video of the week");
myTodoList.removeTodo(1);
myTodoList.clearCompleted();
