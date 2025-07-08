# Projeto Contatos

This is a web contact manager application built with **Angular** (frontend), **Bootstrap** (styling), and **Spring Boot** (backend). The project provides a solution for contact registration and management, with a responsive user interface and robust backend services. The project includes a clean Dockerized architecture with a Dokerfile and Docker Compose, fully prepared for cloud-native deployment on AWS EC2 and AWS Amplify.

---

## Features

- **Contact Management:** Add, edit, delete, and view your contacts easily.
- **Modern UI:** Responsive and intuitive interface built with Angular and Bootstrap.
- **RESTful API:** Backend powered by Spring Boot, providing secure and efficient REST endpoints.
- **Scalable Architecture:** Designed for easy deployment and scalability using Docker and AWS EC2.

---

## Tech Stack

- **Frontend:** [Angular](https://angular.io/) (TypeScript), [Bootstrap](https://getbootstrap.com/)
- **Backend:** [Spring Boot](https://spring.io/projects/spring-boot) (Java)
- **Styling:** Bootstrap, CSS
- **Containerization:** Docker
- **Deployment:** AWS EC2 (planned)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for frontend)
- [Angular CLI](https://angular.io/cli)
- [Java 21](https://adoptopenjdk.net/) (for backend)
- [Maven](https://maven.apache.org/) (or compatible build tool)
- [Docker](https://www.docker.com/) (optional, for containerization)

### Clone the repository

```bash
git clone https://github.com/h-and-rod/projeto-contatos.git
cd projeto-contatos
```

---

### Frontend Setup (Angular)

```bash
cd frontend  # adjust if your frontend folder has a different name
npm install
ng s -o
```
Visit `http://localhost:4200` to access the app.

---

### Backend Setup (Spring Boot)

```bash
cd backend  # adjust if your backend folder has a different name
mvn spring-boot:run
```
The backend API will be available at `http://localhost:8080`.

---

### Docker (Optional)

You can run the application using Docker for easier deployment and consistency:

```bash
# From the project root
docker-compose up --build
```
> Ensure you have a valid `docker-compose.yml` in the project.

---

## Project Structure

```
projeto-contatos/
├── frontend/         # Angular app
├── backend/          # Spring Boot app
└── README.md
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.
