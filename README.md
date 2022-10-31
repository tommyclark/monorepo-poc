# monorepo-poc

## Prerequisites
Need installed: node, yarn, [git subrepo](https://github.com/ingydotnet/git-subrepo)

## What's the point of this?
We have two lerna monorepos and want to combine them in to one monorepo. 
We might do this because, for example the two monorepos have dependencies on each other, and we want to build them as one rather than having to carefully manage merges between both repositories.
We also want to do this whilst leaving the underlying repositories completely intact, without affecting any ongoing active development happening in them.

## How does it work?
This repo has two lerna monorepos pulled in with git-subrepo. It uses turborepo to build the packages in both repositories (it could use Lerna, Nx, etc). 
PRs can either be opened against this parent repository, or they can be opened against either of the two subrepos.

To pull ongoing changes from the subrepos in to this parent repo, we would run:
```
git subrepo pull --all
```

If we have made changes to this parent monorepo and want to push those changes to the subrepos we would run
```
git subrepo push --all
```
The repositories this monorepo is building are [here](https://github.com/tommyclark/lerna-repo-a) and [here](https://github.com/tommyclark/lerna-repo-b)
