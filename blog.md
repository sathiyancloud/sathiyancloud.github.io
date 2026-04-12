---
layout: default
title: Blog
description: Tutorials, career notes, and lessons for learners starting in Cloud & DevOps—sathiyancloud.
---

# Blog

Practical write-ups, career notes, and lessons learned—written for learners who are early in their Cloud &amp; DevOps journey.

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <p class="post-list__meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <h2 class="post-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {% if post.excerpt %}
      <p class="post-list__excerpt">{{ post.excerpt | strip_html | truncatewords: 32 }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p>No posts yet—check back soon.</p>
{% endif %}
