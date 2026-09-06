---
title: "Part A3: Professional Reflection (~1,200 words)"
date: 2026-01-18
_build:
  list: never
  render: always
---

## Readable and Ethical Code
Readable code is a professional obligation because it reduces the chance of hidden defects and makes reviewable behavior explicit. Even a small script that removes duplicates and sorts data can encode decisions about fairness (case sensitivity), transparency (clear comments), and safety (handling unexpected inputs). When code is readable, peers can validate assumptions and detect risks earlier, which supports ethical outcomes.

In this exercise, the change to normalize case, remove duplicates case-insensitively, and capitalize the first letter illustrates a micro-level ethical choice: do we treat “alice” and “Alice” as the same entry and standardize their presentation? The modification does transform the original values to a normalized format, which shapes how users interpret the data. That is a design decision that can affect users’ perception of fairness or correctness. Clarity in comments makes the decision visible to future readers, which is an ethical practice because it reduces the risk of unintended consequences.

Readability is also about maintainability. If the script were reused in a larger workflow, a future developer would need to understand whether the output order is stable and what assumptions exist about input types. Clear inline comments, explicit comparator logic, and consistent variable naming all reduce ambiguity. In professional contexts, ambiguous code is a liability because it is harder to audit, easier to misuse, and slower to fix.

Ethical practice also includes limiting cleverness. “Smart” one-liners can hide important details or make behavior dependent on subtle defaults. In the context of this assignment, I deliberately kept the modification small and explicitly documented. That choice aligns with professional expectations: a reviewer should be able to understand the change in minutes, not hours. When teams scale, readable code reduces onboarding time and prevents knowledge silos.

Another ethical aspect is reproducibility. If two people run the same script, they should expect the same output given the same inputs. Changes that introduce non-deterministic behavior (such as depending on unordered sets without a clear ordering step) can undermine trust in results. By normalizing case and sorting explicitly, I made the output intent clearer and more reproducible, which supports accountability.

Professional ethics also include documenting trade-offs. In this script, case-insensitive sorting improves consistency but could be inappropriate if case has semantic meaning (e.g., IDs or codes). Stating that trade-off in comments or documentation enables informed decisions by future maintainers and prevents misuse of the output in contexts where the assumption does not hold.

## Bias, Privacy, and Misuse Risks
Bias can emerge from seemingly neutral technical choices, such as sorting rules or normalization steps that privilege certain formats. Privacy risks appear when data is processed without clear purpose limits or safeguards. In this exercise, the modifications emphasize clarity about behavior, but in real systems these choices scale: a normalization step could unintentionally erase culturally significant name formats, and a weak data policy could allow repurposing of personal data beyond consent.

For example, treating names case-insensitively might seem harmless, but it can obscure differences that matter in some contexts (e.g., usernames, identifiers, or culturally significant capitalization). If a system later uses this processed list for matching or analytics, the “small” decision could lead to misattribution or loss of nuance. Ethical practice is about anticipating these risks and documenting them clearly so stakeholders can make informed decisions.

Privacy and misuse risks are not limited to large-scale systems. Even a small script that logs input values can leak personal information if used in a shared environment. In professional settings, developers should be cautious about what data is stored, how long it is retained, and who can access it. This includes avoiding unnecessary data collection and ensuring that any data processing aligns with user consent and legal requirements.

Mitigating bias and misuse requires more than technical fixes; it demands process. Practices like peer review, diverse stakeholder input, and impact assessments can surface issues that a single developer might miss. For example, a reviewer might question whether case-insensitive sorting is appropriate for a multilingual dataset, or whether a different normalization strategy would better preserve meaning. These process checks complement code-level safeguards and reduce the risk of harmful outcomes.

Ethical programming also involves communicating limitations. If a script is designed only for ASCII names or for a specific cultural context, the documentation should say so. Silence can be misleading, especially when tools are reused beyond their original scope. The assignment’s requirement to add inline comments is a small but meaningful step toward that professional standard.

## Business and Legal Impact
Small coding choices can have measurable business or legal impact. Poor handling of data can lead to regulatory penalties, loss of trust, and costly remediation. The Cambridge Analytica case demonstrates how weak controls and misuse of personal data can trigger legal scrutiny and reputational damage. In professional practice, documenting assumptions, limiting data collection, and building checks for misuse reduce these risks and align software behavior with legal obligations.

In a business context, errors that seem minor can cascade. If a sorting or deduplication decision affects who appears in a report, that can influence decisions about customers, hiring, or resource allocation. If the underlying code is unclear or untested, the organization might not notice incorrect results until they cause harm. This is why professional engineering emphasizes transparency, peer review, and documentation alongside functional correctness.

Legal impact is also tied to accountability. Regulations like GDPR place obligations on data controllers to handle personal information responsibly, which includes processing data only for declared purposes and ensuring accuracy. A developer who writes a script that silently changes data formats without documentation could expose their organization to compliance risks. Ethical coding therefore includes traceability: being able to show how data was transformed and why.

Beyond regulatory compliance, business impact includes reputation and customer trust. If a system produces inconsistent results because of hidden defaults, stakeholders may lose confidence in the product. Trust once lost is difficult to rebuild, and the cost often exceeds the effort of writing clear code and documentation upfront. In a competitive market, reliability and transparency are strategic advantages.

Even for internal tools, inaccurate outputs can misinform decisions, leading to wasted effort or missed opportunities. Clear assumptions and predictable behavior therefore support both ethical practice and business performance.

From a personal perspective, this exercise reinforces the importance of intentionality. The change I made was small, yet it required me to articulate why it was necessary and how it affected outputs. That discipline scales to larger projects: every change should have a clear purpose, an explanation, and a record. This mindset reduces risk and aligns technical work with broader social responsibilities.

## Reflection Example
Example: Cambridge Analytica (Facebook data misuse) — Personal data from millions of Facebook users was harvested without clear consent and used for political profiling. Impact area: privacy, misuse, and regulatory/legal consequences. This relates because small data-handling decisions and weak safeguards can lead to large-scale harm.
