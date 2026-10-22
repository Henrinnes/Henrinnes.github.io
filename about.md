---
layout: page
title: About
lede: PhD researcher in machine learning for ransomware detection.
---

Hi, I'm Henry Kabuye. I'm a PhD researcher in Computer and Information Sciences at Northumbria University, in the Faculty of Engineering and Environment. My research is on machine learning for ransomware detection, especially uncertainty-aware, multi-agent detectors such as [Agentic SABRE]({% post_url 2025-10-30-agentic-sabre %}), and datasets such as [RansKnow]({% post_url 2026-07-14-ransknow %}). I also work on privacy-preserving federated learning for UAV networks as part of the EU [COVER project]({% post_url 2026-05-13-cover-fl-dp-uav %}).

## Background

Before my PhD I studied at Teesside University, earning a BSc (Hons) in Cyber Security & Networks and then an MSc in Cybersecurity. Earlier, I studied software engineering and information systems management at Aptech Worldwide.

From 2008 to 2017 I was Director of Technical Services at Computer Bytes Uganda. Since moving to the UK I have worked as an IT technician and as a contact centre adviser at Citizens Advice.

## Publications

<ol class="pub-list">
{% for pub in site.data.publications %}
  <li>
    <span class="pub-year">{{ pub.year }}</span>
    <div>
      <h3>{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</h3>
      <p>{{ pub.venue }}</p>
    </div>
  </li>
{% endfor %}
</ol>

## Find me

* [LinkedIn](https://www.linkedin.com/in/henry-kabuye-2b380285/)
* [ORCID](https://orcid.org/0009-0009-7520-4925)
* [GitHub](https://github.com/Henrinnes)
* Email: henrinnes@yahoo.co.uk
