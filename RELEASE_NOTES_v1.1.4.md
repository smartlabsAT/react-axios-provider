# Release Notes - v1.1.4

## 🔒 Security Update

This release addresses a critical security vulnerability in the axios peer dependency.

### What's Changed

#### Security
- **Critical**: Updated axios peer dependency from ^1.5.1 to ^1.8.2 to fix [SSRF vulnerability (GHSA-jr5f-v2jv-69x6)](https://github.com/advisories/GHSA-jr5f-v2jv-69x6)

#### Improvements
- **TypeScript Configuration**: Modernized TypeScript setup for better performance and compatibility
  - Added ES2022 target
  - Updated lib configuration to modern standards
  - Added `isolatedModules` support with proper type exports

#### Dependencies
- Updated all development dependencies to latest minor versions
- Fixed compatibility issues with latest TypeScript compiler

#### Documentation
- Added requirements section to README
- Added pnpm installation instructions
- Fixed import examples to use package name instead of relative paths
- Created comprehensive CHANGELOG.md

### Breaking Changes
None - This is a backward-compatible patch release.

### Migration Guide
Simply update your package.json:

```json
"react-axios-provider": "^1.1.4"
```

And ensure your axios version is at least 1.8.2:

```bash
npm install axios@^1.8.2
# or
pnpm add axios@^1.8.2
```

### Full Changelog
See [CHANGELOG.md](./CHANGELOG.md) for detailed changes.

---

**Full test coverage maintained at 100%** ✅