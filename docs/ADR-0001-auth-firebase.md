# ADR-0001: Autenticación base con Firebase Auth

## Estado
Propuesto

## Contexto
Necesitamos auth rápida y estándar para demo móvil (Expo) con Google/Apple.

## Decisión
Usar Firebase Auth como proveedor de identidad por defecto.

## Consecuencias
- El cliente enviará `Authorization: Bearer <firebase_id_token>`.
- El backend validará tokens con Firebase Admin SDK.
- Cambiar a otro IdP requiere ADR explícita.
