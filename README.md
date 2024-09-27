# IoC Pattern with InversifyJS

This repository was created as part of a presentation to demonstrate the advantages of using the **Inversion of Control (IoC)** pattern with **InversifyJS** in Node.js applications. The goal is to showcase how IoC improves modularity, maintainability, and testability by decoupling dependencies in a scalable architecture.

## Features

- **Dependency Injection (DI)**: Simplifies management of dependencies between components.
- **Loose Coupling**: Components are more flexible and easier to modify or extend.
- **Testability**: Easily mock dependencies for unit testing.
- **TypeScript Decorators**: Uses decorators and metadata for clearer and more maintainable code.
  
## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/srdn25/ioc-pattern.git
   cd ioc-pattern
   ```

2. Install dependencies
    ```
    npm install
    ```

2. Build the project
    ```
    npm run build
    ```

2. Run the project
    ```
    npm run start
    ```

## Project Structure

- src/components/: Main application classes and services
- src/interfaces/: Defines the interfaces for dependency injection
- src/inversify.config.ts: Configuration for setting up the IoC container and bindings
- src/types.ts: Contains symbols for managing dependency injection types

## Key Concepts
- InversifyJS: A dependency injection library for TypeScript and JavaScript
- Inversion of Control (IoC): A design principle where the control of object creation is transferred to a container
- Dependency Injection (DI): A pattern that helps decouple object creation from its usage, making systems more modular

## Purpose
This repository was created to accompany a talk on the benefits of the IoC pattern in JavaScript/TypeScript applications. The demonstration focuses on using InversifyJS to handle dependency management effectively in Node.js projects

## License
This project is licensed under the GNU GENERAL PUBLIC LICENSE see in LICENCE file