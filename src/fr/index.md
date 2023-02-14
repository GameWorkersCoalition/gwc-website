---
name: index
layout: default
---

::: <!--+ #description .text-block -->
## À propos de GWC

Game Workers Coalition (Coalition des Travailleur‧ses du Jeu vidéo) est un réseau international de communication entre organisations de travailleur‧ses et syndicats du jeu vidéo.

Depuis 2017, nous avons assisté à un énorme essor du syndicalisme dans l'industrie du jeu vidéo, d'une croissance de l'intérêt et du soutien à la syndicalisation à des débrayages, des grèves et la fondation de nouveaux syndicats dans le monde entier, dans des studios de toutes tailles. Alors que l'industrie du jeu vidéo, qui a toujours été internationale, opère de plus en plus sans frontières par le biais de fusions et d'acquisitions et par l'adoption progressive du télétravail, l'objectif de GWC est de coordonner les organisations syndicales locales du jeu vidéo afin de faciliter la coopération dans nos efforts pour améliorer les conditions de travail et rendre le pouvoir aux travailleur‧ses de notre industrie.

Game Workers Coalition a été formée par plusieurs organisations syndicales à travers le monde, comme un réseau décentralisé dans un esprit de solidarité internationale. Veuillez contacter directement les organisations membres si vous souhaitez entrer en contact.
:::

::: <!--+ #orgs-list -->
## Organisations membres:

{% for regionname, region in orgs -%}
  {% if region.length %}
  - ### {{ regionname | i18n }} <!--+ .region-name -->
    {% for org in region %}
    - [{{ org.name }}]({{ org.link }}){% if org.location %} <span>({{ org.location }})</span>{% endif %}
    {%- endfor %}
  {%- endif %}
{%- endfor %}
:::

::: <!--+ #bottom-text .text-block -->
Il y a beaucoup d'autres organisations de travailleur‧ses du jeu vidéo dans le monde qui ne sont pas membres de GWC pour le moment. Si vous cherchez à joindre une organisations dans votre pays ou région et n'en avez pas trouvé, les organisations listées ici pourraient vous aider.

Si vous représentez une organisation qui souhaite rejoindre le réseau, veuillez contacter l'une des organisations de cette liste pour lui demander comment devenir membre de GWC.
:::
