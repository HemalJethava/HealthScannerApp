# AI Coding Rules & Guardrails

1. **Always Read First:** Before writing any code, read `docs/SPEC.md`, `docs/ARCHITECTURE.md`, and `docs/TASKS.md`.
2. **One Step at a Time:** Only implement the single task/step requested by the user in `docs/TASKS.md`. Do NOT jump ahead to future steps.
3. **Do Not Break Existing Code:** Never modify or delete already completed files unless fixing a specific bug or explicitly instructed.
4. **Zero-Cost Constraint:** Use ONLY free, on-device, or free public APIs (Open Food Facts + ML Kit OCR + Local Storage). Never add paid APIs or cloud servers.
5. **Update Progress:** After completing a step, tell the user which checkbox `[x]` to mark done in `docs/TASKS.md`.
6. **Health Safety:** Always include a clear non-medical disclaimer whenever displaying health or sugar warnings.