---
applyTo: "**/*.java, **/*.py, **/*.cs"
---
<!-- The above section is called 'frontmatter' and is used to define metadata for the document -->

<!-- The main content of the markdown file starts here -->
# Backend Instructions

## General Guidelines

Follow idiomatic practices for the chosen programming language and framework. Prioritize writing clean, maintainable, and secure code.

- **Consistency**: Adhere to the existing code style and patterns in the project.
- **Security**: Implement security best practices, such as input validation, parameterized queries (to prevent SQL injection), and proper authentication/authorization.
- **Error Handling**: Implement robust error handling and logging to ensure system stability and ease of debugging.
- **Configuration Management**: Externalize configuration from code. Use environment variables or configuration files. Do not commit secrets to version control.

## Language-Specific Guidelines

### Java

- **Build Tools**: Use Maven or Gradle for dependency management.
- **Coding Style**: Follow the Google Java Style Guide or the Oracle Code Conventions for the Java Programming Language.
- **Null Handling**: Use `Optional` to avoid `NullPointerException`.

#### Spring Boot

1.  **Project Structure**: Follow the standard Spring Boot project structure (e.g., `src/main/java`, `src/main/resources`).
2.  **Dependency Management**: Use Spring Boot Starters to simplify dependency management.
3.  **Configuration**: Use `application.properties` or `application.yml` for configuration settings. Use profiles (`application-{profile}.yml`) for environment-specific configurations.
4.  **Database Access**: Use Spring Data JPA for database interactions with repositories.
5.  **REST APIs**: Use `@RestController` for creating RESTful services and DTOs (Data Transfer Objects) to decouple API contracts from domain models.
6.  **Security**: Use Spring Security for authentication and authorization.

### Python

- **Dependency Management**: Use `pip` with `requirements.txt` or a tool like Poetry or Pipenv.
- **Coding Style**: Follow PEP 8.
- **Virtual Environments**: Always use a virtual environment (e.g., `venv`).

#### Django

- **Project Structure**: Follow the standard Django project structure (`manage.py`, project folder, app folders).
- **ORM**: Use the Django ORM for database interactions.
- **Settings**: Manage settings for different environments carefully (e.g., `settings/base.py`, `settings/dev.py`, `settings/prod.py`).
- **Security**: Use Django's built-in security features (e.g., CSRF protection, XSS protection).

#### Flask

- **Project Structure**: Use Blueprints to organize larger applications.
- **ORM**: Use SQLAlchemy with Flask-SQLAlchemy for database interactions.
- **Configuration**: Use instance folders for configuration.

### C#/.NET

- **Project Structure**: Follow the standard .NET project structure.
- **Dependency Management**: Use NuGet for package management.
- **Coding Style**: Follow the Microsoft C# Coding Conventions.
- **Async/Await**: Use `async` and `await` for non-blocking I/O operations.

#### ASP.NET Core

1.  **Configuration**: Use `appsettings.json` and environment-specific variants (`appsettings.Development.json`).
2.  **Dependency Injection**: Use the built-in dependency injection container.
3.  **ORM**: Use Entity Framework Core for database access.
4.  **API Development**: Use controllers for API endpoints and follow RESTful principles.
5.  **Security**: Use ASP.NET Core Identity for authentication and authorization.

#### Flask

TODO standard blocks of instructions for backend development for each language to be deleted as necessary

#### Django

1. **Project Structure**: Follow the Django project structure conventions.
2. **Settings Management**: Use environment variables for sensitive settings.
3. **Database Migrations**: Manage database schema changes with migrations.
4. **Static Files**: Serve static files using Django's built-in mechanisms.

### .NET Core & C#

TODO standard blocks of instructions for backend development for each language to be deleted as necessary

#### ASP.NET Core

TODO standard blocks of instructions for backend development for each language to be deleted as necessary

## API Development

1. **Endpoint Design**: Design RESTful APIs with clear and consistent endpoint structures.
2. **Request/Response Formats**: Follow the API guidelines for request/response formats (e.g., JSON).
3. **Versioning**: Implement the API versioning strategy defined in the docs to ensure backward compatibility.

## Performance Optimization

1. **Caching**: Implement caching strategies to reduce database load and improve response times.
2. **Database Optimization**: Optimize database queries and use indexing where appropriate.
3. **Asynchronous Processing**: Use asynchronous processing for long-running tasks to improve API responsiveness.

