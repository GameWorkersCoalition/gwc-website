---
name: index
layout: default
---

::: <!--+ #description .text-block -->
## About the GWC

The Game Workers Coalition is a communication network for worker-led labour organizations and unions in the games industry.

Since 2017 we have seen an enormous upswell in organizing in the games industry, from a growth of interest in and support for unionization to walkouts, strikes, and the foundation of new unions all around the world, in studios of all sizes. As the historically international games industry increasingly operates across borders through mergers and acquisitions and the gradual adoption of remote work, the purpose of the GWC is to coordinate between local games labour organizations to facilitate cooperation in our efforts to improve working conditions and build worker power in our industry.

The Game Workers Coalition was formed by several labour organizations across the world, as a decentralized network in the spirit of international solidarity. Please contact the member organizations directly if you'd like to get in touch.
:::

::: <!--+ #orgs-list -->
## Member organizations:

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
If you represent an organization that is interested in joining the network, please reach out to any of the orgs in this list to ask about becoming a GWC member.
:::
