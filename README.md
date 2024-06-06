# E-Commmerce-Kubernet-with-Docker
E-commerce Project - Networks and Systems
Project Description
This project is part of the Networks and Systems course and involves deploying an E-commerce application using modern containerization and orchestration technologies. The application consists of a web client, a REST API backend, and a relational database.

Technologies Used
Web Client: React
Backend: Golang
Database: PostgreSQL
Containerization: Docker
Orchestration: Kubernetes
Local Development: Docker Compose
Project Structure

.
├── client/                 # React web client code
├── api/                    # Golang backend code
├── db/                     # Database configuration scripts
├── k8s/                    # Kubernetes configurations (pods, services, deployments)
├── docker-compose.yml      # Docker Compose configuration for local development
├── Dockerfile              # Dockerfile to create the client image
├── README.md               # This file

# Setup and Deployment

Prerequisites
Docker
Docker Compose
Kubernetes (Minikube for local development or a Kubernetes cluster)


##Initial Setup
Deploy on Kubernetes

##Start Minikube (if used for local development)

minikube start
Apply Kubernetes configurations


##Build Docker images
docker-compose up
Start services with Docker Compose (for local development)

Using the Application
Access the Web Client

Open your browser and go to http://localhost:3000 (or the corresponding URL if using Kubernetes).

Interact with the Backend

The REST API is exposed at http://localhost:8080 (or the corresponding URL if using Kubernetes).

Contributing
Fork the repository
Create a new branch for your feature (git checkout -b new-feature)
Make your changes and commit them (git commit -am 'Add new feature')
Push your branch (git push origin new-feature)
Open a Pull Request
