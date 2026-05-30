# Guía de Contribución

Este proyecto sigue un modelo de desarrollo basado en Git Flow con un estándar adaptado a nuestras necesidades de seguridad y auditoría.

---

## 🚀 Flujo de trabajo (Git Flow Adaptado)

1. **Rama principal:**  
   - `main` — siempre estable; solo se permite merge de versiones probadas vía Pull Request y revisión.
2. **Desarrollo activo:**  
   - `develop` — integración de nuevas funcionalidades, no estable en todo momento.

### Ramas de trabajo

- **Feature branches:**  
  Para nuevas funcionalidades.  
  Formato: `feature/{descripción-corta}`  
  Ejemplo: `feature/biometria-facial`

- **Hotfix branches:**  
  Para correcciones rápidas en producción.  
  Formato: `hotfix/{descripción-corta}`  
  Ejemplo: `hotfix/api-rate-limit`

- **Release branches:**  
  Para preparar versiones productivas.  
  Formato: `release/{versión}`  
  Ejemplo: `release/v1.2.0`

- **Bugfix branches:**  
  Para solucionar bugs detectados en desarrollo o QA.  
  Formato: `bugfix/{descripción-corta}`  
  Ejemplo: `bugfix/websocket-timeout`

- **Experiment branches:**  
  Para pruebas o propuestas experimentales.  
  Formato: `experiment/{descripción-corta}`

---

## 📝 Estándar de Commits: Conventional Commits

Se exige el uso estricto del estándar [Conventional Commits](https://www.conventionalcommits.org).

**Estructura:**
```
<tipo>[alcance opcional]: <descripción breve>
```
- Ejemplos:
  - `feat(auth): agregar endpoint FIDO2`
  - `fix(bio): corregir lógica de hash biométrico`
  - `docs(readme): añadir diagrama de arquitectura`
  - `chore(ci): actualizar pipeline`

### Tipos permitidos:

- `feat` — Una nueva característica.
- `fix` — Corrección de bug.
- `docs` — Cambios en la documentación (README, etc).
- `style` — Formatos/cambios sin afectar funcionalidad.
- `refactor` — Reestructuración interna (sin cambiar comportamiento).
- `perf` — Cambios que mejoran el performance.
- `test` — Añadir/corregir tests.
- `chore` — Tareas menores (configs, toolchain, build).

---

## 🗂️ Bitácora de Cambios (CHANGELOG.md)

1. Se utiliza **changelog** bajo el estándar de Conventional Commits.
2. Todo merge requiere actualización de `CHANGELOG.md` reflejando los cambios principales.

---

**¡Gracias por contribuir de forma segura y ordenada!**
