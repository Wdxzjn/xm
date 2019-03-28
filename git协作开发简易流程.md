

1. 把远程仓库clone到本地

```bash
git clone 远程仓库路径
```

2. 从master上切出来一个新的分支，在其上面做开发

```bash
git checkout -b 分支名
```

3. 把开发完成的功能做提交

```bash
git add .
git commit -m 'sssss'

# 反复执行提交操作
```

4. 切回master分支，从服务器获取master分支最新的内容

```bash
git checkout master
```

5. 合并刚才的临时开发分支到master之上

```bash
git merge 临时的开发分支
```

6. 把合并之后的master分支推送到服务器

```bash
git push
```

