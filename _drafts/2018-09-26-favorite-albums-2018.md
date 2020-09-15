---
layout: post
category: post
title: "Favorite Albums 2018 (So Far)"
date: 2018-09-26
thumb: Glitter.jpeg
hero: false
full: true
color: "#180E27"
---

<ul class="list article-list list-grid list-grid-numbered list-shadow">
  {% for 2018-album in site.data.2018-albums limit:50 %}
  <li class="list-item">
    <a href="{{ 2018-album.link }}">
      <h5 class="list-rank"></h5>
      <img src="/img/albums/{{ 2018-album.album }}.jpeg" class="list-image">
      <h3 class="list-title">{{ 2018-album.album }}</h3>
      <h5>{{ 2018-album.artist }}</h5>
    </a>
  </li>
  {% endfor %}
</ul>
