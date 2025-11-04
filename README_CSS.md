# 🎨 Documentation CSS - TodoApp Styling

## 📋 Structure du fichier `App.css`

Ce fichier contient tous les styles CSS pour l'application TodoList. Le design est moderne, minimaliste, avec des bordures épaisses et des coins arrondis.

---

## 🎯 Structure Générale

### 1. Reset CSS (lignes 1-18)
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: #f8f9fa;
}
```

**Explication :**
- Reset CSS pour éliminer les styles par défaut du navigateur
- Font system moderne (sans-serif)
- Background gris clair (#f8f9fa)

---

## 🎨 Classes CSS Principales

### 2. `.App` (lignes 20-24)
```css
.App {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
```

**Usage :** Container principal de l'application

---

### 3. `.todo-app` (lignes 27-34)
```css
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 16px;
  border: 4px solid #000000;
}
```

**Caractéristiques :**
- Background blanc
- Bordure noire épaisse (4px)
- Coins arrondis (16px)
- Centré avec `margin: 0 auto`

---

### 4. `.todo-app h1` (lignes 36-42)
```css
.todo-app h1 {
  color: #1a1a1a;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: left;
}
```

**Usage :** Titre "Your To Do"

---

## 📝 Section Input (Ajouter une tâche)

### 5. `.todo-input-section` (lignes 45-47)
```css
.todo-input-section {
  margin-bottom: 1.5rem;
}
```

### 6. `.todo-input-container` (lignes 49-52)
```css
.todo-input-container {
  display: flex;
  gap: 0.75rem;
}
```

**Explication :** Flexbox pour aligner input et bouton horizontalement

---

### 7. `.todo-input-field` (lignes 54-64)
```css
.todo-input-field {
  flex: 1;
  padding: 0.875rem 1rem;
  font-size: 0.95rem;
  border: 4px solid #000000;
  border-radius: 12px;
  outline: none;
  background-color: white;
  color: #1a1a1a;
  transition: all 0.2s;
}
```

**Caractéristiques :**
- `flex: 1` : prend tout l'espace disponible
- Bordure noire épaisse (4px)
- Coins arrondis (12px)
- Transition douce pour les changements

**Focus state :**
```css
.todo-input-field:focus {
  border-color: #10b981;  /* Vert au focus */
}
```

---

### 8. `.todo-add-btn` (lignes 74-90)
```css
.todo-add-btn {
  padding: 0.875rem 1.25rem;
  font-size: 1.5rem;
  background-color: #10b981;
  color: white;
  border: 2px solid #000000;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  line-height: 1;
}
```

**Caractéristiques :**
- Background vert (#10b981)
- Bordure noire fine (2px)
- Icône "+" centrée
- Hover : background plus foncé (#059669)

---

## 📋 Liste des Tâches

### 9. `.todo-list` (lignes 102-104)
```css
.todo-list {
  margin-bottom: 1.5rem;
}
```

### 10. `.todo-empty` (lignes 106-112)
```css
.todo-empty {
  text-align: center;
  color: #9ca3af;
  padding: 3rem 2rem;
  font-style: italic;
  font-size: 0.95rem;
}
```

**Usage :** Message quand aucune tâche n'existe

---

### 11. `.todo-item` (lignes 114-124)
```css
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background-color: white;
  border: 4px solid #000000;
  border-radius: 12px;
  transition: all 0.2s;
}
```

**Caractéristiques :**
- Flexbox pour aligner checkbox, texte et boutons
- Bordure noire épaisse (4px)
- Coins arrondis (12px)
- Hover : bordure grise

**État completed :**
```css
.todo-item.completed {
  background-color: #f9fafb;
  opacity: 0.9;
}
```

---

### 12. `.todo-checkbox` (lignes 135-167)
```css
.todo-checkbox {
  width: 22px;
  height: 22px;
  cursor: pointer;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  flex-shrink: 0;
  background-color: white;
  transition: all 0.2s;
}
```

**Caractéristiques :**
- Checkbox personnalisé (pas le style par défaut)
- Bordure grise (2px)
- Coins arrondis (6px)
- Hover : bordure verte

**État checked :**
```css
.todo-checkbox:checked {
  background-color: #10b981;  /* Vert */
  border-color: #10b981;
}

.todo-checkbox:checked::after {
  content: '✓';  /* Checkmark blanc */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}
```

---

### 13. `.todo-text` (lignes 169-180)
```css
.todo-text {
  flex: 1;
  font-size: 0.95rem;
  color: #1a1a1a;
  word-break: break-word;
  line-height: 1.5;
}
```

**État completed :**
```css
.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #6b7280;
}
```

---

## ✏️ Mode Édition

### 14. `.todo-edit-input` (lignes 183-192)
```css
.todo-edit-input {
  flex: 1;
  padding: 0.625rem 0.875rem;
  font-size: 0.95rem;
  border: 4px solid #10b981;  /* Bordure verte */
  border-radius: 8px;
  outline: none;
  background-color: white;
  color: #1a1a1a;
}
```

**Caractéristiques :**
- Bordure verte épaisse (4px) pour indiquer le mode édition
- Coins arrondis (8px)

---

### 15. `.todo-edit-buttons` (lignes 194-197)
```css
.todo-edit-buttons {
  display: flex;
  gap: 0.5rem;
}
```

---

### 16. `.todo-edit-btn` (lignes 199-209)
```css
.todo-edit-btn {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: #10b981;
  color: white;
  border: 2px solid #000000;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}
```

**Usage :** Bouton "Update" (vert)

---

### 17. `.todo-cancel-btn` (lignes 215-231)
```css
.todo-cancel-btn {
  padding: 0.3rem;
  font-size: 1.25rem;
  background-color: #f3f4f6;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 50px;  /* Cercle */
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 1;
}
```

**Caractéristiques :**
- Bouton circulaire (border-radius: 50px)
- Icône "×" centrée
- Background gris clair

---

### 18. `.todo-actions` (lignes 238-242)
```css
.todo-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
```

---

### 19. `.todo-modify-btn` (lignes 244-254)
```css
.todo-modify-btn {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: transparent;
  color: #6366f1;  /* Bleu */
  border: 2px solid #000000;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}
```

**Usage :** Bouton "Modifier" (bleu avec bordure)

**Hover :**
```css
.todo-modify-btn:hover {
  background-color: #6366f1;
  color: white;
}
```

---

### 20. `.todo-delete-btn` (lignes 261-282)
```css
.todo-delete-btn {
  padding: 0.5rem;
  font-size: 1.25rem;
  background-color: transparent;
  color: #ef4444;  /* Rouge */
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: normal;
  line-height: 1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}
```

**Usage :** Bouton "×" pour supprimer (rouge)

**Hover :**
```css
.todo-delete-btn:hover {
  background-color: #fef2f2;  /* Rouge très clair */
  color: #dc2626;
}
```

---

## 📊 Footer

### 21. `.todo-footer` (lignes 285-290)
```css
.todo-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 4px solid #e5e7eb;
  text-align: left;
}
```

### 22. `.todo-footer-text` (lignes 292-302)
```css
.todo-footer-text {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
  font-weight: 500;
}

.todo-footer-text strong {
  color: #10b981;  /* Vert pour le nombre */
  font-weight: 600;
}
```

**Usage :** Afficher "Your remaining todos: X"

---

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Noir** : `#000000` - Bordures principales
- **Gris foncé** : `#1a1a1a` - Texte principal
- **Gris clair** : `#6b7280` - Texte secondaire
- **Gris très clair** : `#9ca3af` - Placeholder, texte vide
- **Background gris** : `#f8f9fa` - Background de la page

### Couleurs d'Accent
- **Vert** : `#10b981` - Boutons principaux, checkboxes, accents
- **Vert foncé** : `#059669` - Hover sur boutons verts
- **Bleu** : `#6366f1` - Bouton "Modifier"
- **Rouge** : `#ef4444` - Bouton "Supprimer"
- **Rouge foncé** : `#dc2626` - Hover sur bouton supprimer

### Backgrounds
- **Blanc** : `#ffffff` - Cards, inputs
- **Gris très clair** : `#f3f4f6` - Boutons secondaires
- **Gris clair** : `#f9fafb` - Tâches complétées

---

## 📐 Dimensions et Espacements

### Bordures
- **Épaisses** : `4px` - Cards, inputs, items
- **Fines** : `2px` - Boutons, checkboxes

### Border Radius
- **Grand** : `16px` - Container principal
- **Moyen** : `12px` - Cards, inputs, boutons principaux
- **Petit** : `8px` - Boutons secondaires
- **Cercle** : `50px` - Bouton cancel
- **Très petit** : `6px` - Checkbox

### Padding
- **Grand** : `2rem` - Container principal
- **Moyen** : `1rem` - Items, inputs
- **Petit** : `0.5rem` - Boutons, gaps

### Marges
- **Bottom** : `1.5rem` - Sections principales
- **Bottom** : `0.75rem` - Items de liste

---

## 🎯 États et Interactions

### Hover States
- **Boutons** : Changement de couleur de background
- **Items** : Changement de couleur de bordure
- **Checkbox** : Bordure verte au hover

### Focus States
- **Input** : Bordure verte au focus

### Active States
- **Boutons** : `transform: scale(0.97)` pour effet de pression

### Transitions
- **Toutes** : `transition: all 0.2s` pour animations douces

---

## 📱 Responsive Design

L'application est centrée avec `max-width: 600px` et `margin: 0 auto`, ce qui la rend responsive sur tous les écrans.

---

## 💡 Conseils d'Utilisation

1. **Bordures** : Utilisez 4px pour les éléments principaux, 2px pour les boutons
2. **Couleurs** : Le vert (#10b981) est la couleur principale, utilisez-le pour les actions importantes
3. **Coins arrondis** : Utilisez 12px pour les cards, 8px pour les boutons
4. **Transitions** : Toutes les interactions ont des transitions douces (0.2s)

---

## 🔧 Modifications Possibles

Pour personnaliser le design :
1. **Changer les couleurs** : Modifiez les valeurs hex dans les variables
2. **Ajuster les bordures** : Changez les valeurs `border: Xpx`
3. **Modifier les border-radius** : Ajustez les valeurs `border-radius`
4. **Changer les espacements** : Modifiez `padding` et `margin`

