#!/usr/bin/env bash
echo "┏━━━ 📦 Storybook ━━━━━━━━━━━━━━━━━━━"
yarn tsc -b packages
npx start-storybook "$1"