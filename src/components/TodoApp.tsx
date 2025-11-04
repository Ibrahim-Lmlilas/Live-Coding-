import { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState<any[]>([])

    const [newTodo, setNewTodo] = useState('')

    const [editingId, setEditingId] = useState(null)

    const [editingText, setEditingText] = useState('')

    const handleDelete = (id: any) => {
        setTodos(todos.filter((todo: any) => todo.id !== id))
    }

    const handleToggle = (id: any) => {
        setTodos(todos.map((todo: any) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const handleEdit = (id: any, text: any) => {
        setEditingId(id)
        setEditingText(text)
    }

    // Fonction pour sauvegarder les modifications
    const handleUpdate = (id: any) => {
        if (editingText.trim() !== '') {
            setTodos(todos.map((todo: any) =>
                todo.id === id ? { ...todo, text: editingText } : todo
            ))
            setEditingId(null)
            setEditingText('')
        }
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setEditingText('')
    }

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const newTask = {
                id: Date.now(),  // ID unique
                text: newTodo,
                completed: false
            }
            setTodos([...todos, newTask])  // Ajouter au tableau
            setNewTodo('')  // Réinitialiser le champ
        }
    }

    return (
        <div className="todo-app">
            <h1>Your To Do</h1>

            <div className="todo-input-section">
                <div className="todo-input-container">
                    <input
                        type="text"
                        className="todo-input-field"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                        placeholder="Add new task"
                    />
                    <button className="todo-add-btn" onClick={handleAddTodo}>
                        +
                    </button>
                </div>
            </div>

            <div className="todo-list">
                {todos.length === 0 ? (
                    <p className="todo-empty">Aucune tâche pour le moment. Ajoutez-en une !</p>
                ) : (
                    todos.map((todo) => (
                        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                className="todo-checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggle(todo.id)}
                            />
                            {editingId === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        className="todo-edit-input"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') handleUpdate(todo.id)
                                            if (e.key === 'Escape') handleCancelEdit()
                                        }}
                                    />
                                    <div className="todo-edit-buttons">
                                        <button className="todo-edit-btn" onClick={() => handleUpdate(todo.id)}>
                                            Update
                                        </button>
                                        <button className="todo-cancel-btn" onClick={handleCancelEdit}>
                                            ×
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <span className="todo-text">{todo.text}</span>
                                    <div className="todo-actions">
                                        <button className="todo-modify-btn" onClick={() => handleEdit(todo.id, todo.text)}>
                                            Modifier
                                        </button>
                                        <button className="todo-delete-btn" onClick={() => handleDelete(todo.id)}>
                                            ×
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>

            {todos.length > 0 && (
                <div className="todo-footer">
                    <p className="todo-footer-text">
                        Your remaining todos: <strong>{todos.filter(t => !t.completed).length}</strong>
                    </p>
                </div>
            )}
        </div>
    )
}

export default TodoApp;