---
title: "What is “the cloud”? A simple mental model"
subtitle: Someone else’s computer—with APIs, bills, and shared responsibility
date: 2026-03-15
description: >-
  Beginner-friendly explanation of cloud computing: on-demand resources, regions,
  pay-as-you-go pricing, and what you still own (security, backups, architecture).
---

If you are new to IT, “cloud” can sound like magic. In practice, it is mostly **computers and networks you rent**, accessed through a browser or API, run by providers like AWS, Azure, or Google Cloud.

## The mental model in one paragraph

Instead of buying servers upfront, you request **capacity when you need it**—compute, storage, databases, load balancers—and you typically pay for **what you use** (with caveats: always read pricing pages).

## Three ideas that help early

1. **Regions and zones** — Providers host data centers around the world. “Region” is a broad location; inside it, isolated “zones” help with availability.
2. **Shared responsibility** — The provider secures *their* building and hypervisor layers; *you* still configure access rules, patches for your VMs, secrets handling, and backups for your data—depending on the service.
3. **An API-first world** — Cloud work is often “click in console” at first, then “automate with code” as you grow.

## What beginners should not worry about yet

Picking “the best cloud” on day one. Pick **one** free-tier-friendly account for practice, learn fundamentals (networking, Linux, automation mindset), and translate skills across providers later.

## A honest note on free tiers

Free tiers are great for learning, but **cost surprises happen** when resources are left running. Set budgets/alerts early if your provider supports them.

---

*Next step: create a practice account and spin up the smallest Linux VM you can—then log in with SSH.*
