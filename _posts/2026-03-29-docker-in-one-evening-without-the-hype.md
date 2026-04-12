---
title: "Docker in one evening (without the hype)"
subtitle: A container packages your app and its dependencies—predictably
date: 2026-03-29
description: >-
  Beginner introduction to Docker: images vs containers, Dockerfile basics,
  build and run, and why containers matter for Cloud & DevOps learning.
---

**Docker** helps you package an application so it runs **the same way** on your laptop, a teammate’s laptop, and (later) a server—because the package includes dependencies and runtime assumptions.

## Words that confuse beginners (made simple)

- **Image** — A blueprint: filesystem layers + how to start the app.
- **Container** — A running instance created from an image.
- **Dockerfile** — A text recipe that describes how to build an image.

## The smallest hands-on path

1. Install Docker Desktop (or Docker Engine on Linux) from official docs.
2. Run a tiny public image:

```bash
docker run --rm hello-world
```

3. Create a folder with a file named `Dockerfile`:

```dockerfile
FROM alpine:3.20
CMD ["echo", "Hello from my first image"]
```

4. Build and run:

```bash
docker build -t my-first .
docker run --rm my-first
```

## Why this connects to Cloud

Cloud services often run **containers** (directly or through Kubernetes). If you understand “build once, run many times,” you understand a big part of modern deployments.

## A practical warning

Containers are not automatic security. Treat them like processes: **least privilege**, patch base images, and never put secrets in images.

---

*Next step: containerize a tiny static website or a one-file Python/Node app and run it locally.*
