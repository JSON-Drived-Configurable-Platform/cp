#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build-website

barnch="$1"
echo "$1"
if [ -z "$1" ]
then barnch='origin'
fi

# 获得远程代码仓库，默认origin
url=$(git remote get-url $barnch)
#echo $url
# 进入生成的文件夹
cd gh-pages/

git init
git add -A
git commit -m 'deploy'

git remote add origin "$url"
git push origin -f master:gh-pages

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 手动部署
# git push -f git@github.com:"$username"/form-generator-iview.git master:gh-pages
# 自动部署
#git push -f "https://${access_token}@github.com/${username}/form-generator-iview.git" master:gh-pages

cd -
