---
title: "Git basics for students (the smallest useful slice)"
subtitle: Track changes, collaborate, and build a habit you will use everywhere
date: 2026-03-22
description: >-
  Beginner Git workflow: init, status, add, commit, log, remote, push, pull—
  explained without jargon overload.
---

**Git** is a version control tool. **GitHub/GitLab/Bitbucket** are places to host Git repositories and collaborate. You can learn Git locally first—no cloud account required.

## Why this matters for Cloud & DevOps

Almost every team stores infrastructure and application code in Git. Interviews often assume you can **clone**, **branch**, **commit**, and **open a pull request** (or merge request).

## The smallest workflow that still counts

Inside a project folder:

1. **`git init`** — Start tracking a folder (only once per project).
2. **`git status`** — See what changed.
3. **`git add .`** — Stage changes (start with “stage everything” while learning; learn finer control next).
4. **`git commit -m "Describe the change"`** — Save a snapshot with a message.
5. **`git log --oneline`** — See history.

## Working with a remote (GitHub example)

After you create an empty repository online:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

Later, when you work on another machine:

```bash
git pull
```

## Good commit messages (beginner rule)

Finish this sentence: “This commit **…**” Examples: “add README,” “fix typo in lab steps,” “create Dockerfile.”

## Common beginner pain

Merge conflicts. They are normal. The goal is not to avoid them forever—it is to **read the conflict markers**, understand what changed, and resolve calmly.

---

*Next step: create a repo for your lab notes and commit small improvements weekly.*
