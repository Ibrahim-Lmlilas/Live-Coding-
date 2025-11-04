# 🎯 Guide Live Coding - TodoList React - Step by Step

## 📋 Scénario Complet (45 minutes)

---

## ÉTAPE 1 : Introduction & Setup (10 min)

### 1.1 - Présenter la structure du projet
```
src/
├── App.tsx          # Composant principal
├── App.css          # Styles CSS
├── main.tsx         # Point d'entrée
└── components/      # On va créer ce dossier
    └── TodoApp.tsx  # Composant TodoList
```

### 1.2 - Nettoyer le code de base
- Supprimer les logos (react.svg, vite.svg)
- Supprimer les styles inutiles dans App.css
- Créer le dossier `components/`

---

## ÉTAPE 2 : Live Coding Principal (30 min)

### STEP 1 : Créer le dossier components/ (1 min)
```bash
mkdir src/components
```

---

### STEP 2 : Créer TodoApp.tsx - Structure de base (5 min)

**Dans `src/components/TodoApp.tsx`** :

```tsx
import { useState } from 'react'

function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Your To Do</h1>
    </div>
  )
}

export default TodoApp
```

**Points à expliquer :**
- Import de `useState` depuis React
- Structure de base d'un composant fonctionnel
- Export default pour l'utiliser ailleurs
- `className` pour le styling CSS

---

### STEP 3 : Ajouter les états avec useState (5 min)

**Modifier `TodoApp.tsx`** :

```tsx
import { useState } from 'react'

function TodoApp() {
  // État pour la liste des tâches
  const [todos, setTodos] = useState<any[]>([])
  
  // État pour le texte de la nouvelle tâche
  const [newTodo, setNewTodo] = useState('')
  
  // État pour savoir quelle tâche est en cours d'édition
  const [editingId, setEditingId] = useState(null)
  
  // État pour le texte en cours d'édition
  const [editingText, setEditingText] = useState('')

  return (
    <div className="todo-app">
      <h1>Your To Do</h1>
    </div>
  )
}

export default TodoApp
```

**Points à expliquer :**
- `useState<any[]>([])` : état initial = array vide (avec type any pour simplifier)
- `useState('')` : état initial = string vide
- `useState(null)` : état initial = null (pour l'édition)
- `todos` = valeur actuelle
- `setTodos` = fonction pour modifier la valeur

---

### STEP 4 : Ajouter le formulaire d'ajout (5 min)

**Modifier le return** :

```tsx
return (
  <div className="todo-app">
    <h1>Your To Do</h1>
    
    {/* Formulaire d'ajout */}
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
  </div>
)
```

**Points à expliquer :**
- `value={newTodo}` : input contrôlé par React
- `onChange={(e) => setNewTodo(e.target.value)}` : mettre à jour l'état à chaque frappe
- `onKeyPress` : ajouter avec la touche Enter
- `onClick={handleAddTodo}` : fonction qu'on va créer après
- `className` : pour le styling CSS

---

### STEP 5 : Créer la fonction handleAddTodo (5 min)

**Avant le return, ajouter** :

```tsx
const handleAddTodo = () => {
  if (newTodo.trim() !== '') {
    const newTask = {
      id: Date.now(),  // ID unique basé sur le timestamp
      text: newTodo,
      completed: false  // Par défaut, la tâche n'est pas complétée
    }
    setTodos([...todos, newTask])  // Ajouter au tableau
    setNewTodo('')  // Réinitialiser le champ
  }
}
```

**Points à expliquer :**
- `trim()` : enlever les espaces vides
- `Date.now()` : ID unique basé sur le timestamp
- `[...todos, newTask]` : spread operator pour ajouter sans muter l'array
- `setNewTodo('')` : vider le champ après ajout
- `completed: false` : état initial de la tâche

---

### STEP 6 : Afficher la liste des tâches (5 min)

**Modifier le return, ajouter après le formulaire** :

```tsx
{/* Liste des tâches */}
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
        <span className="todo-text">{todo.text}</span>
      </div>
    ))
  )}
</div>
```

**Note :** La fonction `handleToggle` sera créée dans STEP 7. Pour l'instant, le checkbox ne fonctionnera pas encore.

**Points à expliquer :**
- Rendu conditionnel : `todos.length === 0 ? ... : ...`
- `map()` : transformer chaque élément en JSX
- `key={todo.id}` : obligatoire pour les listes (React)
- Checkbox : pour marquer comme complétée (fonctionnalité à venir)
- `className` dynamique : ajouter "completed" si la tâche est complétée

---

### STEP 7 : Ajouter la fonction handleToggle (3 min)

**Avant le return, ajouter** :

```tsx
const handleToggle = (id: any) => {
  setTodos(todos.map((todo: any) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ))
}
```

**Points à expliquer :**
- `map()` : créer un nouveau array avec les tâches modifiées
- `{ ...todo, completed: !todo.completed }` : copier la tâche et inverser completed
- `!todo.completed` : true devient false, false devient true

---

### STEP 8 : Ajouter la fonction de suppression (5 min)

**Avant le return, ajouter** :

```tsx
const handleDelete = (id: any) => {
  setTodos(todos.filter((todo: any) => todo.id !== id))
}
```

**Modifier l'affichage de la liste** :

```tsx
todos.map((todo) => (
  <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <input
      type="checkbox"
      className="todo-checkbox"
      checked={todo.completed}
      onChange={() => handleToggle(todo.id)}
    />
    <span className="todo-text">{todo.text}</span>
    <div className="todo-actions">
      <button className="todo-modify-btn" onClick={() => handleEdit(todo.id, todo.text)}>
        Modifier
      </button>
      <button className="todo-delete-btn" onClick={() => handleDelete(todo.id)}>
        ×
      </button>
    </div>
  </div>
))
```

**Points à expliquer :**
- `filter()` : créer un nouveau array sans l'élément à supprimer
- `onClick={() => handleDelete(todo.id)}` : passer l'ID à la fonction
- Icône "×" : pour supprimer

---

### STEP 9 : Ajouter les fonctions d'édition (5 min)

**Avant le return, ajouter** :

```tsx
const handleEdit = (id: any, text: any) => {
  setEditingId(id)
  setEditingText(text)
}

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
```

**Modifier l'affichage de la liste pour gérer l'édition** :

```tsx
{editingId === todo.id ? (
  // Mode édition
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
  // Mode normal
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
```

**Points à expliquer :**
- Rendu conditionnel : `editingId === todo.id ? ... : ...`
- `handleEdit` : entrer en mode édition
- `handleUpdate` : sauvegarder les modifications
- `handleCancelEdit` : annuler l'édition
- Keyboard support : Enter pour sauvegarder, Escape pour annuler

---

### STEP 10 : Ajouter le compteur (2 min)

**Ajouter en bas du return** :

```tsx
{todos.length > 0 && (
  <div className="todo-footer">
    <p className="todo-footer-text">
      Your remaining todos: <strong>{todos.filter(t => !t.completed).length}</strong>
    </p>
  </div>
)}
```

**Points à expliquer :**
- Rendu conditionnel : `todos.length > 0 && ...`
- `filter(t => !t.completed)` : compter les tâches non complétées
- Afficher le nombre de tâches restantes

---

### STEP 11 : Utiliser TodoApp dans App.tsx (2 min)

**Modifier `src/App.tsx`** :

```tsx
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  )
}

export default App
```

---

## ÉTAPE 3 : Stylisation (5 min)

Ajouter le CSS dans `App.css` pour le styling moderne et minimaliste.

**Caractéristiques du design :**
- Background gris clair (#f8f9fa)
- Cards blanches avec bordures noires 4px
- Coins arrondis (12px, 16px)
- Boutons avec bordures 2px
- Couleurs d'accent (vert, bleu, rouge)
- Design moderne et minimaliste

---

## 🎯 Checklist pour le Live Coding

### ✅ Ce qu'il faut faire dans l'ordre :

1. [ ] Créer le dossier `components/`
2. [ ] Créer `TodoApp.tsx` avec structure de base
3. [ ] Ajouter `useState` pour `todos`, `newTodo`, `editingId`, `editingText`
4. [ ] Ajouter le formulaire (input + button "+")
5. [ ] Créer `handleAddTodo` fonction
6. [ ] Connecter `handleAddTodo` au bouton et Enter key
7. [ ] Afficher la liste avec `map()`
8. [ ] Ajouter checkbox et créer `handleToggle`
9. [ ] Créer `handleDelete` fonction
10. [ ] Ajouter bouton supprimer (icône "×")
11. [ ] Créer `handleEdit`, `handleUpdate`, `handleCancelEdit`
12. [ ] Ajouter mode édition avec rendu conditionnel
13. [ ] Ajouter le compteur (remaining todos)
14. [ ] Importer `TodoApp` dans `App.tsx`
15. [ ] Ajouter le CSS styling

---

## 💡 Points Clés à Expliquer Pendant le Live Coding

1. **useState** : "On utilise useState pour gérer l'état local du composant"
2. **Immutable Updates** : "On ne modifie jamais directement l'array, on crée un nouveau"
3. **Spread Operator** : "`[...todos, newTask]` copie l'ancien array et ajoute le nouveau"
4. **filter()** : "`filter()` retourne un nouveau array sans l'élément qu'on veut supprimer"
5. **map()** : "`map()` transforme chaque élément en élément JSX et crée un nouveau array"
6. **Key prop** : "La `key` aide React à identifier chaque élément de la liste"
7. **Rendu conditionnel** : "On affiche différents éléments selon l'état (édition ou normal)"
8. **Controlled Components** : "Les inputs sont contrôlés par React via `value` et `onChange`"

---

## 🚀 Fonctionnalités Implémentées

1. ✅ **Ajouter des tâches** - Input + bouton "+" ou Enter
2. ✅ **Afficher la liste** - Rendu dynamique avec `map()`
3. ✅ **Marquer comme complétée** - Checkbox avec `handleToggle`
4. ✅ **Supprimer une tâche** - Bouton "×" avec `handleDelete`
5. ✅ **Éditer une tâche** - Mode édition avec `handleEdit`, `handleUpdate`, `handleCancelEdit`
6. ✅ **Compteur** - Afficher le nombre de tâches restantes
7. ✅ **Keyboard support** - Enter pour ajouter/sauvegarder, Escape pour annuler
8. ✅ **Styling moderne** - Design minimaliste avec bordures et couleurs d'accent

---

## 🎨 Améliorations Possibles (à mentionner à la fin)

1. **localStorage** : Sauvegarder les tâches dans le navigateur
2. **useEffect** : Charger les tâches au démarrage
3. **Filtres** : Afficher "faites" / "à faire" / "toutes"
4. **Drag & Drop** : Réorganiser les tâches
5. **useReducer** : Pour un état plus complexe
6. **Animations** : Transitions douces pour l'ajout/suppression
7. **Validation** : Empêcher les tâches vides ou dupliquées
