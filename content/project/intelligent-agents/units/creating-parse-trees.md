---
title: "Unit 8: Creating Parse Trees"
date: 2026-09-19
summary: "Constituency trees and explanations for three sentences, including two telescope-attachment readings."
_build:
  list: never
  render: always
---

**Activity:** [Unit 8: Creating Parse Trees](https://www.my-course.co.uk/mod/page/view.php?id=1381279) (Moodle course access required).

**Status:** Portfolio evidence published; Moodle completion pending verification.

## Sentence Groupings

| Sentence | Subject phrase | Main verb | Other phrases | How I explain the grouping |
|----------|----------------|-----------|---------------|----------------------------|
| 1 | The government | raised | interest rates | "The government" performs the action. "Interest rates" stays together because it is what the government raised. |
| 2 | The internet | gives | everyone; a voice | "The internet" performs the action. "Everyone" receives something, and "a voice" is what they receive. |
| 3 | The man | saw | the dog; with the telescope | "The man" performs the action and "the dog" is what he saw. The meaning changes depending on where "with the telescope" belongs. |

## The Two Telescope Meanings

One meaning is that the man used the telescope to see the dog. In this reading, "with the telescope" belongs with the action "saw".

The other meaning is that the man saw a dog that had the telescope. Here, "with the telescope" belongs with "the dog" and describes which dog the man saw.

The words stay in the same order, but attaching the final phrase to a different part of the sentence changes the meaning.

## Constituency Trees

Labels: S = sentence, NP = noun phrase, VP = verb phrase, PP = prepositional phrase, Det = determiner, N = noun, Pron = pronoun, V = verb and P = preposition.

### Tree 1: The government raised interest rates

```text
S
├── NP
│   ├── Det  The
│   └── N    government
└── VP
    ├── V    raised
    └── NP
        ├── N    interest
        └── N    rates
```

### Tree 2: The internet gives everyone a voice

```text
S
├── NP
│   ├── Det   The
│   └── N     internet
└── VP
    ├── V     gives
    ├── NP
    │   └── Pron  everyone
    └── NP
        ├── Det   a
        └── N     voice
```

### Tree 3: The man saw the dog with the telescope (the man used it)

In this reading, "with the telescope" belongs to the VP because it explains how the seeing happened.

```text
S
├── NP
│   ├── Det  The
│   └── N    man
└── VP
    ├── V    saw
    ├── NP
    │   ├── Det  the
    │   └── N    dog
    └── PP
        ├── P    with
        └── NP
            ├── Det  the
            └── N    telescope
```

### Tree 4: The man saw the dog with the telescope (the dog had it)

In this reading, "with the telescope" sits inside the object NP because it describes the dog.

```text
S
├── NP
│   ├── Det  The
│   └── N    man
└── VP
    ├── V    saw
    └── NP
        ├── Det  the
        ├── N    dog
        └── PP
            ├── P    with
            └── NP
                ├── Det  the
                └── N    telescope
```
