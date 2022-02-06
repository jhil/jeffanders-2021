---
layout: post
category: list
title: "Board Games"
date: 2016-09-03
link: https://boardgamegeek.com/user/jhilmd
color: "#1d265c"
thumbnail: dice-5
---

{% contentfor intro %}
I love collecting board games and sharing fun times with friends and family. These are the games in my personal collection right now. Check out my [BoardGameGeek profile](https://www.boardgamegeek.com/user/jhilmd) for more games and ratings.
{% endcontentfor %}

---

<ul class="list article-list list-grid">
  {% for boardgame in site.data.boardgames %}
  <li class="list-item">
    <a href="{{ boardgame.link }}">
      <img src="/img/board-games/{{ boardgame.title | slugify }}.jpg" class="list-image list-image-nonuniform" loading="lazy">
      <h3 class="list-title">{{ boardgame.title }}</h3>
      <h5 class="list-detail">{{ boardgame.rating }}<span class="sub">/10</span></h5>
    </a>
  </li>
  {% endfor %}
</ul>
