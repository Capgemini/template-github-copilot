---
applyTo: "**/*.java, **/*.py, **/*.cs"
---
<!-- The above section is called 'frontmatter' and is used to define metadata for the document -->
<!-- The main content of the markdown file starts here -->
# Backend Development Guidelines

## General Guidelines

Follow idiomatic practices for the chosen programming language and framework. Prioritize writing clean, maintainable, and secure code.

- **Consistency**: Adhere to the existing code style and patterns in the project.
- **Security**: Implement security best practices, such as input validation, parameterized queries (to prevent SQL injection), and proper authentication/authorization.
- **Error Handling**: Implement robust error handling and logging to ensure system stability and ease of debugging.
- **Configuration Management**: Externalize configuration from code. Use environment variables or configuration files. Do not commit secrets to version control.
- **Testing**: Write unit tests for business logic and integration tests for critical paths. Aim for high test coverage, especially on new code.

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

<!-- Removed duplicated placeholder sections to avoid conflicts; guidance above already covers Flask, Django, and ASP.NET Core. -->

## API Development

1. **Endpoint Design**: Design RESTful APIs with clear and consistent endpoint structures.
2. **Request/Response Formats**: Follow the API guidelines for request/response formats (e.g., JSON).
3. **Versioning**: Implement the API versioning strategy defined in the docs to ensure backward compatibility.

## Performance Optimization

1. **Caching**: Implement caching strategies to reduce database load and improve response times.
2. **Database Optimization**: Optimize database queries and use indexing where appropriate.
3. **Asynchronous Processing**: Use asynchronous processing for long-running tasks to improve API responsiveness.

<a name="backend-architecture"></a>
## Architecture & Structure

Adopt a simple, layered architecture to keep boundaries clear and testable:
- Entry (HTTP/CLI/Queue) → Controller/Handler → Service (business logic) → Repository (data access) → External systems.
- Keep DTOs separate from domain models; map at edges.
- Inject dependencies through constructors. Avoid singletons and global state.

Framework-specific notes:
- Spring Boot: Controllers (`@RestController`) → Services (`@Service`) → Repos (`@Repository`). Use packages by feature when helpful.
- Django: Views/ViewSets → Services (plain modules) → ORM Models/Managers. Keep fat models thin services as needed; avoid business logic in views.
- ASP.NET Core: Controllers → Services (DI) → Repositories (EF Core). Prefer interfaces for services/repositories for testability.

Testing guidance: unit-test services with fakes; integration-test controllers and repositories. See `.github/copilot-instructions.md#quality-policy` for coverage expectations.

<a name="backend-error-handling"></a>

## Error Handling

##### Example: Global Exception Handler (Spring)
```java
@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<ApiError> handleNotFound(EntityNotFoundException ex) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new ApiError("not_found", ex.getMessage()));
	}
}
```

### Python

- **Dependency Management**: Use `pip` with `requirements.txt` or a tool like Poetry or Pipenv.
- **Coding Style**: Follow PEP 8.
- **Virtual Environments**: Always use a virtual environment (e.g., `venv`).

#### Django

- **Project Structure**: Follow the standard Django project structure (`manage.py`, project folder, app folders).
- **ORM**: Use the Django ORM for database interactions.
- **Settings**: Manage settings for different environments carefully (e.g., `settings/base.py`, `settings/dev.py`, `settings/prod.py`).
- **Security**: Use Django's built-in security features (e.g., CSRF protection, XSS protection).

##### Example: Logging Errors via Middleware (Django)
```python
# core/middleware.py
class ErrorLoggingMiddleware:
	def __init__(self, get_response):
		self.get_response = get_response

	def __call__(self, request):
		return self.get_response(request)

	def process_exception(self, request, exception):
		import logging
		logger = logging.getLogger(__name__)
		logger.exception("Unhandled error", extra={"path": request.path})
		return None  # let default handlers run
```

Add to `MIDDLEWARE` in settings to enable.

#### Flask

- **Project Structure**: Use Blueprints to organize larger applications.
- **ORM**: Use SQLAlchemy with Flask-SQLAlchemy for database interactions.
- **Configuration**: Use instance folders for configuration.

##### Example: Error Handler (Flask)
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.errorhandler(ValueError)
def handle_value_error(err):
	return jsonify({"error": "invalid_input", "message": str(err)}), 400
```

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

##### Example: Centralized Exception Handling (ASP.NET Core)
```csharp
// In Program.cs
app.UseExceptionHandler(appError =>
{
	appError.Run(async context =>
	{
		context.Response.StatusCode = StatusCodes.Status500InternalServerError;
		await context.Response.WriteAsJsonAsync(new { error = "internal_error" });
	});
});
```

<a name="backend-error-handling"></a>
## Error Handling

- Fail fast on invalid inputs; validate at boundaries (controllers) and in domain invariants.
- Map known exception types to stable error responses; emit machine-parsable `code` fields.
- Use global exception handling (Spring `@ControllerAdvice`, Django middleware, Flask `errorhandler`, ASP.NET Core `UseExceptionHandler`).
- Log errors with context (no secrets/PII), include correlation/trace IDs, and prefer structured logs (JSON).
- Tests must cover error and exception paths (see `.github/copilot-instructions.md#quality-policy`).

<a name="backend-observability"></a>
## Observability

- Logging: structured, leveled logs; include correlation/trace IDs.
	- Spring: use SLF4J + MDC; Micrometer for metrics (`@Timed`).
	- Python: stdlib `logging` with structured formatter; expose health endpoints.
	- .NET: `ILogger<T>` with scopes; OpenTelemetry exporters for traces/metrics.
- Metrics: instrument hot paths, DB calls, external requests; standard RED/USE metrics.
- Tracing: propagate trace headers (W3C TraceContext). Use OpenTelemetry SDKs where available.

Return consistent error shapes (code, message, correlationId) and map exceptions to appropriate status codes. Do not leak stack traces to clients.

Examples:
```java
// Spring: add correlation ID to MDC
try (MDC.MDCCloseable c = MDC.putCloseable("correlationId", cid)) {
	log.info("Processing request");
}
```

```csharp
// .NET: log scope with correlation id
using (logger.BeginScope(new Dictionary<string, object>{{"correlationId", cid}}))
{
		logger.LogInformation("Processing request");
}
```

<a name="backend-security"></a>
## Security Essentials

- Authentication & Authorization: enforce least privilege; guard all sensitive endpoints.
- Input validation & output encoding: prevent injection and XSS; use parameterized queries only.
- Secrets management: never commit secrets; load from env/managed secret stores; rotate regularly.
- Transport security: enforce HTTPS; set secure headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).
- CSRF/CORS: configure appropriately for web apps and APIs.
- Dependency hygiene: pin versions; scan with SCA tools; review transitive risks.
- Data protection: avoid logging PII/secrets; encrypt at rest/in transit where applicable.

References:
- Branch/PR workflow and conventions: `.github/copilot-instructions.md`.
- Coverage and critical-path rules: `.github/copilot-instructions.md#quality-policy`.
