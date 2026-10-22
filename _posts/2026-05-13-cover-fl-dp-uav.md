---
layout: post
description: "Secure, privacy-preserving and incentive-based data sharing for UAV fleets in the EU COVER project, and two privacy-accounting bugs worth knowing about."
tags:
  - "Federated learning"
  - "Differential privacy"
  - "UAVs"
title: "Private, Secure Data Sharing in UAV Networks"
---

This project is my work on Task 3.2 of the [COVER project](https://trimis.ec.europa.eu/project/cooperative-and-intelligent-unmanned-aerial-vehicles-emergency-response-applications), an EU Horizon MSCA Staff Exchange (grant 101086228) on cooperative drones for emergency response such as floods, wildfires and earthquakes.

Task 3.2 is the data-sharing layer that lets a fleet of UAVs learn together while staying secure, private and fair. The repo is a Python simulation framework covering every part of it:

* **Security**: a proof-of-authority blockchain with defences against Byzantine, Sybil and free-rider attacks
* **Incentives**: a Stackelberg game and Proof-of-Resource-Sharing to reward drones that contribute
* **Differential privacy**: DP-SGD with a Rényi DP accountant
* **Federated learning**: FedAvg with convergence analysis over 3D UAV mobility and realistic air-to-air channels
* **Agentic layer**: multi-agent reinforcement learning with federated Q-learning

## Getting the privacy accounting right

The headline result is that the framework learns under a genuine per-client privacy guarantee (ε ≤ 10): 23.6% final and 28.2% peak accuracy on CIFAR-10 over 200 rounds, spending ε = 6.45.

Getting there meant finding two accounting bugs. The first counted local epochs instead of noisy minibatch steps, understating the privacy cost roughly 20–30×. The second pooled every client into one shared privacy budget. Fixing the second showed that much less noise was needed than it seemed, and turned an apparent "too small to learn privately" result into a model that learns.

Find out more by [visiting the project on GitHub](https://github.com/Henrinnes/cover-task3-fl-dp-uav).
