#!/usr/bin/env bash
# ================================================================
# Nooblax Breaks – Manual Supabase Keep-Alive Ping Script
# Run this anytime to test connection or keep Supabase active:
#   chmod +x scripts/ping-supabase.sh
#   ./scripts/ping-supabase.sh
# ================================================================

SUPABASE_URL="${SUPABASE_URL:-https://mcsqzwjleebxjrqayuha.supabase.co}"
SUPABASE_ANON_KEY="${SUPABASE_ANON_KEY:-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc3F6d2psZWVieGpycWF5dWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMDIwNTYsImV4cCI6MjEwNjg3ODA1Nn0.LgagB9mRgpjjrL_l7wk_TrBvT9sSuimpdpL5rljrRe8}"

echo "========================================================"
echo "Pinging Supabase: $SUPABASE_URL"
echo "Timestamp: $(date)"
echo "========================================================"

echo -n "1. Testing Database API (/rest/v1/cards)... "
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X GET \
  "$SUPABASE_URL/rest/v1/cards?select=id&limit=1" \
  -H "apikey: $SUPABASE_ANON_KEY" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  --max-time 15 || echo "FAILED")
echo "HTTP $HTTP_CODE"

echo -n "2. Testing Auth Service (/auth/v1/health)... "
AUTH_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X GET \
  "$SUPABASE_URL/auth/v1/health" \
  -H "apikey: $SUPABASE_ANON_KEY" \
  --max-time 15 || echo "FAILED")
echo "HTTP $AUTH_CODE"

echo -n "3. Testing Settings Table (/rest/v1/settings)... "
SETTINGS_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X GET \
  "$SUPABASE_URL/rest/v1/settings?select=id&limit=1" \
  -H "apikey: $SUPABASE_ANON_KEY" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  --max-time 15 || echo "FAILED")
echo "HTTP $SETTINGS_CODE"

echo "========================================================"
if [ "$HTTP_CODE" = "200" ] || [ "$SETTINGS_CODE" = "200" ] || [ "$AUTH_CODE" = "200" ]; then
  echo "✅ Supabase project is active and healthy!"
else
  echo "⚠️ Warning: Response was not HTTP 200."
  echo "If your project is currently PAUSED, log in to https://supabase.com/dashboard and click 'Restore project'."
fi
echo "========================================================"
