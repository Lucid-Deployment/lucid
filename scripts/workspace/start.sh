#!/usr/bin/env bash
echo "┏━━━ 🚀 STARTING SERVER ━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn tsc -b packages
lerna run dev --scope @lucid/app1 --stream