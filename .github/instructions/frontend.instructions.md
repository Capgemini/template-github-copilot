<!-- The following section is called 'frontmatter' and is used to define metadata for the document -->
---
applyTo: "**/*.js, **/*.ts, **/*.tsx"
---

<!-- The main content of the markdown file starts here -->
# Frontend Instructions

## General Guidelines

1. **Code Structure**: Organize your code into modules and components for better maintainability.
2. **Styling**: Follow the project's styling guidelines. Use the provided CSS/SCSS files and avoid inline styles.
3. **Accessibility**: Ensure your components are accessible. Use semantic HTML and ARIA roles where appropriate.
4. **Testing**: Write unit tests for your components. Use the provided testing framework and follow the testing guidelines.

## Component Development

1. **Props**: Clearly define the props for your components. Use TypeScript interfaces for type safety.
2. **State Management**: Use the provided state management solution (e.g., Redux, Context API) for managing component state.
3. **API Calls**: Use the provided API service for making HTTP requests. Follow the API guidelines for request/response formats.

## Performance Optimization

1. **Lazy Loading**: Implement lazy loading for large components and routes.
2. **Memoization**: Use memoization techniques (e.g., React.memo, useMemo) to optimize performance.
3. **Code Splitting**: Use code splitting to reduce the initial bundle size.
4. **Avoid Re-renders**: Minimize unnecessary re-renders by using shouldComponentUpdate or React.memo.