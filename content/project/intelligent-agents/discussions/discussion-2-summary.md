---
title: "Discussion 2: Agent Communication Languages — Summary Post"
date: 2026-09-18
summary: "Summary of Collaborative Discussion 2 on agent communication languages, shared meaning and bounded autonomy."
_build:
  list: never
  render: always
---

## Summary Post

In my initial post, I argued that the need for interpretation, rather than running agents in different places, should determine how they communicate. I would keep DOI deduplication as a Python method because it follows fixed rules and should produce a predictable result. A request to reformulate a query is different because the Planning Agent must interpret the search goal and decide how to respond.

Lana's response made me look carefully at where ambiguity can enter this exchange. I had focused on differences between ontologies, but she pointed out that agents may interpret the same performative differently. A performative can show that a message is a request rather than a statement, but this does not prove that the receiver understands the action. More formal semantics may reduce that uncertainty, although they cannot guarantee shared meaning.

Imoh showed what this limitation means for our design. He suggested an explicit interaction contract containing the source query, objective, ontology version, constraints and a correlation identifier. The Planning Agent's response should record what it changed and why. Timeouts and audit logs would also help the orchestrator identify a failed or misunderstood exchange, then decide whether to retry, clarify the request or stop.

This discussion refined my original position rather than changing it. Agent messaging earns its extra complexity when the receiver has freedom to interpret, reject or negotiate a request. Deterministic work should remain inside the orchestrator, where it is easier to test and trace.

Shared performatives, ontologies and message identifiers provide useful structure, but they are not proof of interoperability. Both agents must still attach compatible meanings to the terms they exchange. For me, the practical answer is bounded autonomy: allow interpretation where it adds value, but keep explicit contracts and deterministic controls around it (Finin *et al.*, 1994; Payne and Tamma, 2014).

## References

Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', in *Proceedings of the Third International Conference on Information and Knowledge Management*. New York: ACM, pp. 456-463. doi:10.1145/191246.191322.

Payne, T.R. and Tamma, V. (2014) 'Negotiating over ontological correspondences with asymmetric and incomplete knowledge', in *Proceedings of the 13th International Conference on Autonomous Agents and Multiagent Systems*. Richland, SC: International Foundation for Autonomous Agents and Multiagent Systems, pp. 517-524. doi:10.5555/2615731.2615816.
