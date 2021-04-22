#!/usr/bin/env bash
echo "┏━━━ 📦 Building Workspace ━━━━━━━━━━━━━━━━━━━"
yarn tsc -b packages
lerna run build --scope @lucid/app1
lerna run start --scope @lucid/app1 --stream