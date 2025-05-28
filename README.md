# 🧑‍💼 Expo React Native - User Profile Manager

This is a simple Expo React Native application that manages a list of user profiles with nested address attributes. Users can add, update, and delete profiles. Updates to nested fields are handled immutably.

---

## 📦 Features

- Add new user profiles with:
  - Name
  - Email
  - Address (Street, City, Country)
- Display list of all profiles
- Delete a profile
- Update a profile’s address
- Unique ID generation for each profile using `uuid`

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Expo CLI (install using `npm install -g expo-cli`)

### Installation

1. **Clone the repository** or initialize a new Expo app:

```bash
npx create-expo-app UserProfileApp
cd UserProfileApp
