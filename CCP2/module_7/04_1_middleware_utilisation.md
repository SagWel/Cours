```js
// Route pour login (renvoie un token JWT)
app.post('/api/login', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username requis' });
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Route protégée
app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: 'Accès autorisé', user: decoded, token: token });
  } catch (error) {
    res.status(403).json({ message: 'Token invalide' });
  }
});
```