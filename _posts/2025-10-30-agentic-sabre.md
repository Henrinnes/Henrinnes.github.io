---
layout: post
title: "Agentic SABRE: Uncertainty-Aware Multi-Agent Ransomware Detection"
---

Agentic SABRE is a self-adaptive, reasoning-based framework for detecting ransomware under concept drift, behavioural polymorphism and uncertainty. It is published in *Expert Systems with Applications* (Elsevier, 2026, Article 133558): [read the paper](https://doi.org/10.1016/j.eswa.2026.133558).

## Why

Most machine learning ransomware detectors are a single classifier that gives a point prediction. They can't tell a confident correct answer from a lucky one, and they have no principled way to hand hard cases to a human analyst.

## How it works

Detection is split across specialised agents, each a 1D CNN with Monte Carlo Dropout so it reports both a risk score and an uncertainty:

* **Semantic agent**: static PE metadata embeddings
* **Behavioural agent**: runtime telemetry
* **Knowledge agent**: MITRE ATT&CK and threat-intelligence features

A decision agent fuses those scores and uncertainties, and a triage policy decides what to do:

* **Auto-contain** only when the risk is high *and* every agent is confident
* **Escalate** to an analyst when the risk is moderate or any agent is unsure
* **Allow** otherwise

Uncertainty acts as a control signal, not just a diagnostic. In evaluation the three-agent policy reached a balanced accuracy of 0.972 with zero false negatives.

The repo also includes an interactive Streamlit dashboard for inference, calibration, explainability and live attack-stream simulation.

Find out more by [visiting the project on GitHub](https://github.com/Henrinnes/Agentic_SABRE).
