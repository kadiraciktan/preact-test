import { signal, computed } from "@preact/signals";

const todos = signal([]);

const text = signal("");
function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
function addTodo() {
  todos.value = [...todos.value, { text: text.value, completed: false }];
  text.value = "";
}

export function TodoComponent() {
  const onInput = (event) => (text.value = event.target.value);
  return (
    <>
      <input value={text.value} onInput={onInput} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.value.map((todo) => (
          <li>
            {todo.text} <button onClick={() => removeTodo(todo)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
