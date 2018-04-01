andrew68@aliyun.com
git add README.md
git commit -m "add email."
git config --global user.email "andrew68@aliyun.com"
git config --global user.name "andrewgzl"
git commit -m "add email"
git push -u origin master

Quick setup — if you’ve done this kind of thing before
or	
HTTPS
SSH

https://github.com/andrewgzl/test.git
We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
 echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/andrewgzl/test.git
git push -u origin master
…or push an existing repository from the command line
 git remote add origin https://github.com/andrewgzl/test.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

Import code

