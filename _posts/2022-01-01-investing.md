---
layout: post
category: list
title: "Investing"
date: 2022-01-01
thumbnail: circle-multiple
---

## Angel

Emily and I have angel invested small checks in a few startups. We like adding value as advisors and generally being there to support founders. <a href="mailto:jahilnbrand@gmail.com" target="_blank" rel="noopener">Contact me</a> if you'd like to discuss.

<ul class="card-grid card-grid-compact">
{% for angel in site.data.angel %}
<a href="{{ angel.link }}"><li class="compact-card"><img src="{{ angel.image }}" alt="{{ angel.company }} logo"><h3>{{ angel.company }}</h3><p class="card-secondary">{{ angel.round }}</p></li></a>
{% endfor %}
</ul>

<a class="button-link" href="mailto:jahilnbrand@gmail.com">Discuss Opportunity</a>

## Secondary & Crowdfunding
