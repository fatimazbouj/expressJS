# 📝 Express Todo API (avec MongoDB, JWT et validation)

## 📌 Description

### 🇫🇷 Français

Cette API simple a été développée avec **Express.js** et **MongoDB**. Elle permet aux utilisateurs de :

- S'inscrire et se connecter avec une authentification via **JWT**
- Créer, lire, mettre à jour et supprimer des tâches (CRUD)
- Valider les entrées avec `express-validator`

Toutes les routes liées aux tâches sont protégées par une authentification. Le projet est conçu pour être simple, clair, et facilement extensible.

---

### 🇬🇧 English

This is a simple **Express.js** and **MongoDB** based API that allows users to:

- Register and log in using **JWT** authentication
- Create, read, update, and delete tasks (CRUD)
- Validate inputs using `express-validator`

All task-related routes are protected by authentication. The project is designed to be clean, simple, and easily extendable.

---

## 🚀 Technologies utilisées

- Node.js
- Express.js
- MongoDB avec Mongoose
- express-validator
- JWT (jsonwebtoken)
- bcryptjs

---

## 🧪 Endpoints

### Authentification

| Méthode | URL           | Description            |
|--------|----------------|------------------------|
| POST   | /auth/register | Créer un compte        |
| POST   | /auth/login    | Se connecter (JWT)     |

### Tâches (nécessite un token JWT)

| Méthode | URL          | Description                |
|--------|---------------|----------------------------|
| GET    | /tasks        | Obtenir toutes les tâches  |
| POST   | /tasks        | Créer une nouvelle tâche   |
| PUT    | /tasks/:id    | Mettre à jour une tâche    |
| DELETE | /tasks/:id    | Supprimer une tâche        |

---

## ✅ Installation & Lancement

```bash
git clone https://github.com/ton-utilisateur/express-todolist.git
cd express-todolist
npm install
npm run dev
