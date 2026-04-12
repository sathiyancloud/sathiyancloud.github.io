---
title: "Networking basics every cloud learner should know"
subtitle: IP, DNS, ports, HTTP—enough to debug real issues
date: 2026-04-05
description: >-
  Beginner networking for Cloud & DevOps: packets, IP addresses, DNS, ports,
  TCP vs UDP at a high level, and SSH—so cloud concepts click faster.
---

Cloud is not “floating compute.” It is **computers on networks** with rules. A little networking vocabulary prevents a lot of confusion later.

## IP addresses and DNS

- An **IP address** identifies a host on a network (like a street address).
- **DNS** maps human names (`example.com`) to addresses. When DNS is wrong, everything looks broken even if the server is fine.

## Ports and services

A **port** is not a cable—it is a number that helps the operating system route traffic to the right program. Example: **22** often carries SSH, **443** often carries HTTPS.

When something “does not connect,” beginners learn to ask: **right host? right port? firewall? service running?**

## TCP vs UDP (one sentence each)

- **TCP** — Reliable delivery (web browsing, SSH, many APIs).  
- **UDP** — Fast, “best effort” (many real-time scenarios). You do not need details on day one—just know they exist.

## Why SSH matters for learners

**SSH** lets you remotely access a Linux shell securely. Most early cloud labs are: create VM → **SSH in** → run commands.

## A tiny troubleshooting mindset

When a connection fails, split the problem:

1. Can you **resolve** the name? (`ping` / `dig` / `nslookup`—tools vary by OS)
2. Can you reach the **host** at all?
3. Is the **port** open and listening?
4. Is an **application** bound correctly (often `0.0.0.0` vs `127.0.0.1`)?

You will not master this in a day. You **will** recognize these questions in interviews and incidents.

---

*Next step: from your laptop, trace what happens when you open an HTTPS site (conceptually: DNS → TCP 443 → TLS → HTTP).*
