# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2025-01-25

### Changed
- Updated development dependencies to latest versions:
  - @eslint/js: 9.33.0 → 9.36.0
  - @types/node: 24.3.0 → 24.5.2
  - @types/react: 19.1.10 → 19.1.13
  - @types/react-dom: 19.1.7 → 19.1.9
  - axios: 1.11.0 → 1.12.2
  - concurrently: 9.2.0 → 9.2.1
  - eslint: 9.33.0 → 9.36.0
  - globals: 16.3.0 → 16.4.0
  - lefthook: 1.12.3 → 1.13.4
  - lint-staged: 16.1.5 → 16.2.0
  - release-it: 19.0.4 → 19.0.5
  - tsx: 4.20.4 → 4.20.5
  - typescript-eslint: 8.40.0 → 8.44.1
- Updated React peerDependencies from `>=17` to `>=18` for better ecosystem compatibility

### Fixed
- Improved React 18 and 19 compatibility
- Enhanced security with latest dependency versions
- Better TypeScript type definitions

## [1.2.1] - 2025-01-25

### Changed
- Updated all development dependencies to latest versions
- Improved build configuration and development tooling
- Enhanced linting and testing setup

## [1.1.5] - 2025-01-12

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

## [1.1.1] - Earlier Release

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