# demo-mobile

App demo móvil **Quotes Swipe** (Expo + React Native).

> Nota: este proyecto fue **generado 100% por IA (OpenClaw / agentes)** a partir de instrucciones en chat, con **dirección y decisiones** del humano (Alex). No se escribieron archivos “a mano” fuera del flujo asistido.

## Qué hace
- Muestra una cita (quote) en pantalla.
- Permite **swipe horizontal** para pasar a la siguiente.
- No hay like/dislike, match ni chat (no es Tinder).

## Estructura
- `apps/mobile` — Expo (React Native)
- `apps/api` — API (FastAPI stub; preparado para validar Firebase ID tokens)
- `packages/shared` — placeholder para tipos/contratos compartidos
- `docs` — ADRs/decisiones y notas
- `infra` — placeholder para CI/CD / EAS

## Decisiones base
- **Idioma demo:** Español
- **Offline:** solo lectura (cache)
- **Auth:** Firebase Auth (Google/Apple) — documentado como ADR base (aunque no es necesario para el demo actual)

## Proceso (alto nivel) — cómo lo generó la IA
1) **Definición del equipo de agentes (SRP):** se asignaron responsabilidades (Astro=FE móvil, Forge=EAS, Galan=API+contratos, Cesar=QA móvil, Sentinel=seguridad, Martin=ADRs, Dan=PRD).
2) **Bootstrapping del repo:** se creó la carpeta `demo-mobile/` con estructura monorepo y un ADR inicial.
3) **Scaffold móvil con Expo:** se generó `apps/mobile` y se configuró `expo-router`.
4) **Implementación del core demo:** dataset local de quotes + componente `SwipeQuoteDeck` con animación/gesto (PanResponder).
5) **Simplificación para demo:** se removió i18n y dependencias no usadas; se corrigieron referencias de plugins.
6) **Fixes de tooling:** se resolvieron conflictos de dependencias npm (peer deps) usando `--legacy-peer-deps` donde aplicó.
7) **Control de versión:** se inicializó git, se corrigió un issue de submodule accidental en `apps/mobile`, y se creó/push un repo público en GitHub.

## Cómo correr (dev)
```bash
cd apps/mobile
npx expo start
```

## Repo
https://github.com/eidast/demo-mobile
