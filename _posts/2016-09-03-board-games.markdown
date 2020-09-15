---
layout: post
category: post
title: "Board Games"
date: 2016-09-03
link: www.boardgamegeek.com/user/jhilmd
color: "#1d265c"
thumb: board-games_thumbnail.jpg
hero: false
---

I love collecting board games and sharing fun times with friends and family. These are the games in my personal collection right now. Check out my [BoardGameGeek profile](https://www.boardgamegeek.com/user/jhilmd) for more games and ratings.

---

<ul class="list article-list list-grid">
  {% for boardgame in site.data.boardgames %}
  <li class="list-item">
    <a href="{{ boardgame.link }}">
      <img src="/img/board-games/{{ boardgame.title | slugify }}.jpg" class="list-image list-image-nonuniform">
      <h3 class="list-title">{{ boardgame.title }}</h3>
      <h5 class="list-detail">{{ boardgame.rating }}<span class="subsub">/10</span></h5>
    </a>
  </li>
  {% endfor %}
</ul>

{% include button-link.html text="See more games on BoardGameGeek" %}
