# React.js pour Développeur Web et Web Mobile (DWWM)

## 1. Introduction à React

### Qu'est-ce que React?

React est une bibliothèque JavaScript créée par Facebook pour construire des interfaces utilisateur interactives.

Caractéristiques principales:

- Composants réutilisables
- DOM virtuel pour des performances optimales
- Syntaxe JSX pour écrire du HTML dans JavaScript
- Flux de données unidirectionnel

### Configuration de l'environnement
#### Méthode 1: Create React App (Recommandée)
```bash

npx create-react-app mon-app
cd mon-app
npm start
```
#### Méthode 2: Configuration manuelle
```bash

mkdir mon-app-react
cd mon-app-react
npm init -y
npm install react react-dom
npm install --save-dev @babel/core @babel/preset-react webpack webpack-cli
```
## 2. Concepts Fondamentaux
### Architecture de React
```javascript

// Structure de base d'une application React
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, React!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```
### Le DOM Virtuel

Le DOM virtuel est une représentation JavaScript du DOM réel. React compare le DOM virtuel avec le DOM réel et ne met à jour que les parties qui ont changé.
## 3. JSX et Rendering
### Syntaxe JSX
```jsx

// JSX de base
const element = <h1>Bonjour, monde!</h1>;

// JSX avec expressions
const name = 'Marie';
const element = <h1>Bonjour, {name}!</h1>;

// JSX avec attributs
const element = <div className="container" id="main">Contenu</div>;
```
### Règles JSX
```jsx

// 1. Retourner un seul élément parent
const bonExemple = (
  <div>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </div>
);

// 2. Fermer toutes les balises
const bonExemple = <img src="image.jpg" alt="description" />;

// 3. className au lieu de class
const bonExemple = <div className="ma-classe">Contenu</div>;
```
### Rendering Conditionnel
```jsx

function WelcomeMessage({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenue, {username}!</h1>
      ) : (
        <h1>Veuillez vous connecter</h1>
      )}
    </div>
  );
}

// Avec l'opérateur &&
function Notification({ message, show }) {
  return (
    <div>
      {show && <div className="notification">{message}</div>}
    </div>
  );
}
```
### Listes et Keys
```jsx

function ListeUtilisateurs({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
```
## 4. Composants et Props
### Composants Fonctionnels
```jsx

// Composant fonctionnel de base
function Welcome(props) {
  return <h1>Bonjour, {props.name}!</h1>;
}

// Avec destructuring
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Bonjour, {name}!</h1>
      <p>Vous avez {age} ans.</p>
    </div>
  );
}
```
### Composants Classe (Legacy)
```jsx

class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}!</h1>;
  }
}
```
### Props
```jsx

// Passage de props
function App() {
  return (
    <div>
      <Welcome name="Alice" age={25} />
      <Welcome name="Bob" age={30} />
    </div>
  );
}

// Props par défaut
function Button({ text, color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Cliquez-moi",
  color: "gray"
};

// Validation des props avec PropTypes
import PropTypes from 'prop-types';

function UserProfile({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Âge: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired
};
```
### Composition vs Héritage
```jsx

// Composition avec children
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Card title="Mon Titre">
      <p>Ceci est le contenu de la carte.</p>
      <button>Action</button>
    </Card>
  );
}
```
## 5. State et Événements
### State avec useState Hook
```jsx

import React, { useState } from 'react';

function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
```
### Gestion des Événements
```jsx

function Formulaire() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom:', nom, 'Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Votre nom"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre email"
      />
      <button type="submit">Soumettre</button>
    </form>
  );
}
```
### State avec Objets
```jsx

function ProfilUtilisateur() {
  const [user, setUser] = useState({
    nom: '',
    age: 0,
    ville: ''
  });

  const updateField = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <div>
      <input
        value={user.nom}
        onChange={(e) => updateField('nom', e.target.value)}
        placeholder="Nom"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => updateField('age', parseInt(e.target.value))}
        placeholder="Âge"
      />
      <input
        value={user.ville}
        onChange={(e) => updateField('ville', e.target.value)}
        placeholder="Ville"
      />
    </div>
  );
}
```
## 6. Cycle de Vie et Hooks
### useEffect Hook
```jsx

import React, { useState, useEffect } from 'react';

function ExempleUseEffect() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // équivalent à componentDidMount
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Tableau de dépendances vide = exécution une seule fois

  // équivalent à componentDidUpdate
  useEffect(() => {
    document.title = `Données chargées: ${data ? data.length : 0}`;
  }, [data]); // Exécuté quand data change

  if (loading) return <div>Chargement...</div>;
  return <div>Données: {JSON.stringify(data)}</div>;
}
```
### useRef Hook
```jsx

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus sur l'input</button>
    </div>
  );
}
```
### useCallback et useMemo
```jsx

function CalculLourd({ number }) {
  const calculComplexe = useMemo(() => {
    console.log('Calcul en cours...');
    return number * 2; // Simulation d'un calcul lourd
  }, [number]);

  const handleClick = useCallback(() => {
    console.log('Nombre:', number);
  }, [number]);

  return (
    <div>
      <p>Résultat: {calculComplexe}</p>
      <button onClick={handleClick}>Afficher</button>
    </div>
  );
}
```
### Création de Hooks Personnalisés
```jsx

// Hook personnalisé pour les requêtes API
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Utilisation du hook personnalisé
function ComposantAvecAPI() {
  const { data, loading, error } = useApi('https://api.example.com/users');

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  return <div>Données: {JSON.stringify(data)}</div>;
}
```
## 7. Gestion d'État Avancée
### useReducer Hook
```jsx

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Compteur: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```
### Context API
```jsx

// Création du contexte
const ThemeContext = React.createContext();

// Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer avec useContext
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      Thème {theme}
    </button>
  );
}

// Application
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}
```
## 8. Routing avec React Router
### Installation et Configuration
```bash

npm install react-router-dom
```
### Routes de Base
```jsx

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<ProfilUtilisateur />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Accueil() {
  return <h1>Page d'accueil</h1>;
}

function APropos() {
  return <h1>À propos de nous</h1>;
}

function Contact() {
  return <h1>Contactez-nous</h1>;
}

function ProfilUtilisateur() {
  const { id } = useParams();
  return <h1>Profil de l'utilisateur {id}</h1>;
}

function NotFound() {
  return <h1>404 - Page non trouvée</h1>;
}
```

### Navigation Programmatique
```jsx

import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de connexion
    if (credentials.email && credentials.password) {
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        placeholder="Email"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        placeholder="Mot de passe"
      />
      <button type="submit">Se connecter</button>
    </form>
  );
}
```
## 9. Tests et Déploiement
### Tests avec Jest et React Testing Library
```jsx

// Compteur.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Compteur from './Compteur';

test('affiche le compteur initial à 0', () => {
  render(<Compteur />);
  const countElement = screen.getByText(/vous avez cliqué 0 fois/i);
  expect(countElement).toBeInTheDocument();
});

test('incrémente le compteur quand on clique', () => {
  render(<Compteur />);
  const button = screen.getByText(/cliquez ici/i);
  
  fireEvent.click(button);
  
  const countElement = screen.getByText(/vous avez cliqué 1 fois/i);
  expect(countElement).toBeInTheDocument();
});
```
### Déploiement
```bash

# Création de la build de production
npm run build

# Déploiement sur Netlify
# - Drag & drop du dossier build sur Netlify

# Déploiement sur Vercel
npm install -g vercel
vercel --prod

# Déploiement sur GitHub Pages
npm install --save-dev gh-pages
# Ajouter dans package.json:
# "homepage": "https://votre-username.github.io/votre-repo",
# "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build" }
npm run deploy
```
### Projet Pratique: Gestionnaire de Tâches
```jsx

// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Gestionnaire de Tâches</h1>
      
      <div className="task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nouvelle tâche..."
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Ajouter</button>
      </div>

      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTask(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </div>
        ))}
      </div>

      <div className="stats">
        Tâches totales: {tasks.length} | 
        Tâches complétées: {tasks.filter(t => t.completed).length}
      </div>
    </div>
  );
}

export default App;
```
```css

/* App.css */
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.task-form {
  display: flex;
  margin-bottom: 20px;
}

.task-form input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.task-form button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
}

.task-item.completed span {
  text-decoration: line-through;
  color: #888;
}

.task-item span {
  cursor: pointer;
  flex: 1;
}

.task-item button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.stats {
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  text-align: center;
}
```
## Bonnes Pratiques et Patterns
### 1. Structure de Projet
```text

src/
  components/
    common/
      Button.js
      Input.js
    features/
      auth/
      tasks/
  hooks/
  services/
  utils/
  styles/
```
### 2. Règles de Code
- Un composant = un fichier
- Noms de composants en PascalCase
- Props immuables
- Éviter les effets de bord dans le rendu

### 3. Performance
- Utiliser React.memo pour les composants purs
- Éviter les recréations de fonctions avec useCallback
- Mémoriser les calculs coûteux avec useMemo

### Ressources d'Apprentissage
#### Documentation Officielle
- React Documentation
- React Beta Docs

#### Outils Recommandés
- Create React App pour débuter
- Vite pour les projets plus avancés
- React DevTools pour le debugging
- ESLint + Prettier pour la qualité de code

#### Prochaines Étapes

- Next.js pour le SSR
- React Native pour le mobile
- State Management (Redux, Zustand)
- Testing Avancé (Cypress, React Testing Library)

Ce cours couvre l'essentiel de React.js pour un développeur DWWM. Pratiquez régulièrement en construisant des projets concrets pour maîtriser ces concepts !
