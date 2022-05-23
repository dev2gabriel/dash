# Git Deploy
Step 1 - Cd build
Step 2 - Git init
Step 3 - Add new remote repository
```
    git remote add production ssh://root@177.153.59.10/var/www/dash.grupostra.com/repo
```
Step 4 - Create new branch production
```
    git chegout -b production
```

Step 5 - Push
```
    git push production production
```