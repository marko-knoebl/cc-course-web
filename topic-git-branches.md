# Git branches

## Creating and switching branches

list all available branches:

```bash
git branch
```

create a new branch named _foo_:

```bash
git branch foo
```

switch between branches:

```bash
git switch foo
```

```bash
git switch main
```

## Combining main branch changes into a feature branch (optional)

during development: Get recent _main_ branch changes from other developers, merge them into the feature branch:

get recent changes:

```bash
git pull
```

switch to feature branch:

```bash
git switch foo
```

merge the changes from the main branch:

```bash
git merge main
```

## Combining a feature branch into the main branch

on GitHub, go to the feature branch and create a _pull request_

Another developer should review the pull request - they could suggest changes or approve it right away
