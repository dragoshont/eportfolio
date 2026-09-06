---
title: "Unit 6: Creating Agent Dialogues"
date: 2026-09-06
summary: "KQML/KIF stock-query dialogue between two agents, Alice and Bob, for the Unit 6 e-portfolio activity."
_build:
  list: never
  render: always
---

**Activity brief:** Create an agent dialogue, using KQML and KIF, between two agents (named Alice and Bob). Alice is an agent designed to procure stock and Bob is an agent that controls the stock levels for a warehouse. The dialogue should see Alice asking Bob about the available stock of 50-inch televisions, and also querying the number of HDMI slots the televisions have.

## Assumptions

The activity does not provide the warehouse data needed for Bob's answers. For this example, I assume that the warehouse has 12 units of one 50-inch television model, identified as tv-model-50-a, and that this model has three HDMI slots. Within the warehouse-stock ontology, available-stock(model) returns the current quantity and hdmi-slots(model) returns the number of HDMI slots on that model.

## KQML and KIF Dialogue

Alice asks Bob how many units of the television are available:

```lisp
(ask-one
  :sender Alice
  :receiver Bob
  :language KIF
  :ontology warehouse-stock
  :reply-with stock-query-1
  :content (= (available-stock tv-model-50-a) ?quantity))
```

Bob replies with the available quantity:

```lisp
(tell
  :sender Bob
  :receiver Alice
  :language KIF
  :ontology warehouse-stock
  :in-reply-to stock-query-1
  :content (= (available-stock tv-model-50-a) 12))
```

Alice then asks how many HDMI slots the model has:

```lisp
(ask-one
  :sender Alice
  :receiver Bob
  :language KIF
  :ontology warehouse-stock
  :reply-with hdmi-query-1
  :content (= (hdmi-slots tv-model-50-a) ?slots))
```

Bob replies with the number of HDMI slots:

```lisp
(tell
  :sender Bob
  :receiver Alice
  :language KIF
  :ontology warehouse-stock
  :in-reply-to hdmi-query-1
  :content (= (hdmi-slots tv-model-50-a) 3))
```

## Reflection

In one tightly integrated application, a direct method such as warehouse.getStock(model) would be simpler because the objects already share the same codebase, data types and assumptions. The important distinction is that ask-one expresses the purpose of the message. Alice is asking another agent for one specific answer rather than calling a local function. The sender, receiver, ontology and conversation identifier also make the exchange easier to route and trace when agents work independently or across different systems. However, this structure does not guarantee shared understanding. Alice and Bob must still interpret the ontology and the KIF content in the same way (Finin *et al.*, 1994).

## References

Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', in *Proceedings of the Third International Conference on Information and Knowledge Management*. New York: ACM, pp. 456-463. doi:10.1145/191246.191322.
