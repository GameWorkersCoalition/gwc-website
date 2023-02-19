---
name: index
layout: default
---

::: <!--+ #description .text-block -->
## Che cos’è GWC

La Game Workers Coalition è una rete di comunicazione dedicata alle organizzazioni del lavoro gestite da lavoratorǝ e ai sindacati dell’industria del videogioco.

A partire dal 2017 abbiamo visto un enorme aumento nel numero di iniziative indirizzate all’organizzazione dellǝ lavoratorǝ nell’industria del videogioco. Ci sono statǝ una crescita di interesse, e un maggior supporto, per i processi di sindacalizzazione, astensioni dal lavoro, scioperi, e nuovi sindacati in ogni angolo del mondo e in studi di ogni dimensione. In un contesto in cui l’industria dei videogiochi, storicamente internazionale, opera sempre più su scala globale grazie a fusioni e acquisizioni e alla graduale adozione del lavoro da remoto, lo scopo di GWC è di coordinare le organizzazioni locali che si occupano di lavoro nel mondo videoludico per facilitare la cooperazione nello sforzo comune di migliorare le condizioni dellǝ lavoratorǝ e incrementare il loro potere nel nostro settore.

La Game Workers Coalition è stata formata da diverse organizzazioni del lavoro sparse per il mondo, come rete decentralizzata nello spirito della solidarietà internazionale. Se vuoi contattare GWC, ti preghiamo di rivolgerti direttamente alle organizzazioni che ne fanno parte.
:::

::: <!--+ #orgs-list -->
## Membri:

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
Ci sono molte altre organizzazioni del lavoro nel settore videoludico che potrebbero non essere ancora parte di GWC. Se hai in mente di unirti a un’organizzazione locale ma non sei riuscitǝ a trovarne una vicina, una delle organizzazioni elencate qui potrebbero essere in grado di aiutarti.

Se rappresenti un’organizzazione che è interessata a unirsi alla rete, ti preghiamo di metterti in contatto con una qualsiasi delle organizzazioni in questa lista per avere informazioni su come diventare membro di GWC.
:::
