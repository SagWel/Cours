# Appels API en JavaScript

## 1. Introduction aux APIs
### Qu'est-ce qu'une API ?

**API** (Application Programming Interface) : interface qui permet à différentes applications de communiquer entre elles.

**API REST** : architectural style pour créer des services web :
- Utilise HTTP/HTTPS
- Format de données JSON/XML
- Stateless (sans état)

**Exemple d'API publique**
- JSONPlaceholder : API de démonstration
- OpenWeatherMap : données météo
- GitHub API : données GitHub

## 2. Les méthodes HTTP

Méthode	| Description  |
--------|--------------|
GET     | Récupérer des données 
POST    |	Créer une nouvelle ressource
PUT     |	Mettre à jour une ressource existante
PATCH   |	Modification partielle
DELETE  |	Supprimer une ressource

## 3. Fetch API
**Syntaxe de base**

```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));
```
**Exemple GET**
```js
// Récupérer des utilisateurs
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur réseau');
    }
    return response.json();
  })
  .then(users => {
    console.log(users);
    displayUsers(users);
  })
  .catch(error => {
    console.error('Erreur:', error);
  });

function displayUsers(users) {
  const container = document.getElementById('users-container');
  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
    `;
    container.appendChild(userElement);
  });
}
```

**Exemple POST**
```js
// Créer un nouvel utilisateur
const newUser = {
  name: 'John Doe',
  email: 'john@example.com',
  username: 'johndoe'
};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser)
})
.then(response => response.json())
.then(data => {
  console.log('Utilisateur créé:', data);
})
.catch(error => {
  console.error('Erreur:', error);
});
```
**Options de fetch**
```js
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token-ici'
  },
  body: JSON.stringify(data),
  mode: 'cors',
  cache: 'no-cache'
};
```

## 4. Async/Await

**Syntaxe async/await**
```js
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur:', error);
  }
}
```

**Exemple complet**

```js
class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getUsers() {
    try {
      const response = await fetch(`${this.baseURL}/users`);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Erreur lors de la récupération:', error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this.baseURL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const newUser = await response.json();
      return newUser;
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      throw error;
    }
  }

  async updateUser(userId, userData) {
    try {
      const response = await fetch(`${this.baseURL}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const updatedUser = await response.json();
      return updatedUser;
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const response = await fetch(`${this.baseURL}/users/${userId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      return { success: true, message: 'Utilisateur supprimé' };
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      throw error;
    }
  }
}

// Utilisation
const api = new ApiService('https://jsonplaceholder.typicode.com');

// Récupérer tous les utilisateurs
async function loadUsers() {
  try {
    const users = await api.getUsers();
    displayUsers(users);
  } catch (error) {
    showError('Impossible de charger les utilisateurs');
  }
}

// Créer un utilisateur
async function handleCreateUser() {
  const userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value
  };

  try {
    const newUser = await api.createUser(userData);
    console.log('Utilisateur créé:', newUser);
    loadUsers(); // Recharger la liste
  } catch (error) {
    showError('Erreur lors de la création');
  }
}
```

## 5. Gestion des erreurs
**Gestion complète des erreurs**

```js
class ErrorHandler {
  static handleApiError(error) {
    if (error instanceof TypeError) {
      // Erreur réseau
      return 'Erreur de connexion. Vérifiez votre connexion internet.';
    } else if (error.response) {
      // Erreur HTTP
      switch (error.response.status) {
        case 400:
          return 'Requête invalide';
        case 401:
          return 'Non autorisé';
        case 403:
          return 'Accès refusé';
        case 404:
          return 'Ressource non trouvée';
        case 500:
          return 'Erreur serveur';
        default:
          return `Erreur ${error.response.status}`;
      }
    } else {
      return 'Erreur inconnue';
    }
  }
}

// Utilisation avec interception
async function fetchWithErrorHandling(url, options = {}) {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const error = new Error(`HTTP Error: ${response.status}`);
      error.response = response;
      throw error;
    }
    
    return await response.json();
  } catch (error) {
    const userMessage = ErrorHandler.handleApiError(error);
    showNotification(userMessage, 'error');
    throw error;
  }
}
```
## 6. Axios

**Installation et configuration**

```js
npm install axios
# ou inclusion via CDN
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
**Utilisation d'Axios**
```js
// Configuration globale
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.timeout = 10000;

// Intercepteurs
axios.interceptors.request.use(
  config => {
    console.log('Requête envoyée:', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log('Réponse reçue:', response);
    return response;
  },
  error => {
    console.error('Erreur réponse:', error);
    return Promise.reject(error);
  }
);

// Exemples avec Axios
class AxiosApiService {
  async getUsers() {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createUser(userData) {
    try {
      const response = await axios.post('/users', userData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getUserById(id) {
    try {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (axios.isCancel(error)) {
      return new Error('Requête annulée');
    }
    return error;
  }
}
```
## 7. Bonnes pratiques

### 1. Gestion des timeouts
```js
// Avec fetch + AbortController
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

fetch(url, {
  signal: controller.signal
})
.then(response => {
  clearTimeout(timeoutId);
  return response.json();
});

// Avec Axios
const source = axios.CancelToken.source();
axios.get(url, {
  cancelToken: source.token,
  timeout: 5000
});
```
### 2. Cache et revalidation

```js
// Stratégies de cache
const cache = new Map();

async function fetchWithCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  
  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  
  return data;
}
```
### 3. Sécurité
```js
// Validation des entrées
function sanitizeInput(input) {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

// Headers de sécurité
const secureHeaders = {
  'Content-Security-Policy': "default-src 'self'",
  'X-Content-Type-Options': 'nosniff'
};
```

### 4. Performance
```js
// Requêtes parallèles
async function loadAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/users').then(r => r.json()),
      fetch('/posts').then(r => r.json()),
      fetch('/comments').then(r => r.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('Erreur lors du chargement:', error);
  }
}

// Pagination
async function loadPaginatedData(page = 1, limit = 10) {
  const response = await fetch(`/data?page=${page}&limit=${limit}`);
  const data = await response.json();
  
  return {
    data: data.items,
    totalPages: data.totalPages,
    currentPage: data.currentPage
  };
}
```