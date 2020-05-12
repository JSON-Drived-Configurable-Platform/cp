#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build-website

# 进入生成的文件夹
cd docs/

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 手动部署
# git push -f git@github.com:Neveryu/web-bookmarks.git master:gh-pages
# 自动部署
git push -f "https://${access_token}@github.com/${username}/form-generator-iview.git" master:gh-pages

cd -
