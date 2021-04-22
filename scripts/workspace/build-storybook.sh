#!/usr/bin/env bash
echo "┏━━━ 📦 Building Storybook ━━━━━━━━━━━━━━━━━━━"
yarn tsc -b packages
npx build-storybook "$1"