# Mango Melt – Starter (MVP: Events & Workshops)

Monorepo for React (MUI) + FastAPI + Postgres with Docker services. Includes basic auth, Events and Workshops listing, and placeholder Stripe checkout/webhook endpoints.

## Quickstart (Dev)
Prereqs: Docker, Node 20 + pnpm, Python 3.11

```bash
# 1) Boot backend stack
docker compose -f infra/docker-compose.yml up --build -d
# 2) Populate API env
cp apps/api/.env.example apps/api/.env
# 3) Run API in dev (hot reload)
(cd apps/api && ./dev.sh)
# 4) Frontend
cp apps/web/.env.example apps/web/.env
(cd apps/web && pnpm install && pnpm dev)
```

Visit API docs: http://localhost:8000/docs
Visit web: http://localhost:5173

## Stripe (Test)
- Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` to `apps/api/.env`
- Replace placeholder endpoint logic in `routers/checkout.py`
- Run a local webhook forwarder (e.g., Stripe CLI)

## Database
SQLModel creates tables on startup. Use Alembic for production migrations.

## Next Milestones
- Add Booking model + endpoint: POST /events/{id}/book (creates Stripe Checkout Session)
- Artist auth + role-based pages
- File uploads to MinIO via signed URL endpoint
- Builder.io SDK in web (marketing blocks)
- Stripe Connect for 25% commission on artwork sales
