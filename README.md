# CI/CD Demo with GitHub Actions

A simple Node.js project demonstrating an automated **CI/CD pipeline** using **Jest** and **GitHub Actions**.

---

## 💡 What Was Implemented

1. **Continuous Integration (CI):**
   * **Trigger:** Runs automatically when a **Pull Request** is opened or updated targeting the `main` branch.
   * **Action:** Spins up a clean Ubuntu VM, runs `npm ci` to install exact dependencies, and executes `npm test` using Jest.
   * **Goal:** Prevents broken code or failing tests from being merged into production.

2. **Continuous Deployment (CD):**
   * **Trigger:** Runs automatically on every **`push`** or **`merge`** to the `main` branch.
   * **Action:** Installs dependencies, runs `npm run build`, and simulates deploying the app to a production server.
   * **Goal:** Ensures that verified code on `main` is automatically built and ready for production deployment.

---

## 🛠️ Tech Stack

* **Node.js** & **Express.js** (Web Server)
* **Jest** & **Supertest** (Unit Testing)
* **GitHub Actions** (CI/CD Automation)