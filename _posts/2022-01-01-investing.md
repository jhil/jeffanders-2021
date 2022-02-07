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
	{% for investing in site.data.investing %}
	{% if investing.type contains "angel" %}
		<a href="{{ investing.link }}"><li class="compact-card compact-card-medium"><img src="{{ investing.image }}" alt="{{ investing.company }} logo"><h3>{{ investing.company }}</h3><p class="card-secondary">{{ investing.round }}</p></li></a>
	{% endif %}
	{% endfor %}
</ul>

## Secondary & Crowdfunding

<ul class="card-grid card-grid-compact">
	{% for investing in site.data.investing %}
	{% if investing.type contains "crowdfunding" %}
		<a href="{{ investing.link }}"><li class="compact-card compact-card-medium"><img src="{{ investing.image }}" alt="{{ investing.company }} logo"><h3>{{ investing.company }}</h3></li></a>
	{% endif %}
	{% endfor %}
</ul>

Equities, cryptocurrencies, and alternatives breakdowns coming soon.
