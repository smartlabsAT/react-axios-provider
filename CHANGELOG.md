# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.3] - 2025-01-12

### Security
- Updated axios peer dependency from ^1.5.1 to ^1.8.2 to fix critical SSRF vulnerability

### Changed
- Updated TypeScript configuration for better modern JavaScript support
  - Added `target: "ES2022"`
  - Updated lib to use `["ES2022", "DOM", "DOM.Iterable"]`
  - Added `forceConsistentCasingInFileNames`, `resolveJsonModule`, and `isolatedModules`
- Fixed TypeScript exports to use separate type exports for `isolatedModules` compatibility
- Updated development dependencies to latest minor versions:
  - @eslint/js: 9.20.0 → 9.31.0
  - @testing-library/react: 16.2.0 → 16.3.0
  - eslint: 9.20.0 → 9.31.0
  - eslint-plugin-react: 7.37.4 → 7.37.5
  - prettier: 3.5.0 → 3.6.2
  - typescript-eslint: 8.24.0 → 8.36.0

### Added
- CHANGELOG.md for tracking version history
- Requirements section to README.md
- pnpm installation instructions in README.md

## [1.1.1] - Previous Release

### Features
- Provides a shared Axios instance via React Context
- Allows dynamic updates to the Axios instance at runtime
- Full TypeScript support
- Simple integration with existing React applications

### Initial Implementation
- `AxiosProvider` component for wrapping React applications
- `useAxiosContext` hook for accessing the Axios instance
- TypeScript interfaces for type safety
- 100% test coverage with Vitest
- ESM and CommonJS dual package support