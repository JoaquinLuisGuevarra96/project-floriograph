---
version: 1.0.0
last-updated: 2026-09-21
---

# Floriograph — Product Requirements Document

## 1. Problem Statement

People who want to express a specific sentiment through flowers must currently translate that sentiment into flower choices themselves. They rely on scattered, inconsistent floriography references or generic "flower meaning" lookups.

Existing tools (e.g., Tussie-Mussie Generator) let users assemble a bouquet from a fixed meaning, but they do not interpret free-form language. A user cannot type a sentence describing how they feel or what they want to say and receive a bouquet that reflects the nuance of that sentence.

Floriograph addresses this gap by combining NLP with floriography:

1. The user writes a short free-form sentence.
2. The app interprets the sentence's underlying emotion/meaning.
3. The app maps that meaning to a bouquet of flowers whose traditional meanings align with the sentence.

The sentence-level NLP interpretation layer — not the bouquet visualization — is the core differentiator versus existing tools.

### Initial survey validation (n=10)

| Signal | Result | Implication |
|---|---:|---|
| Wanted to give flowers but were unsure which fit what they were feeling | 6/10 | Directly confirms the problem. |
| Had researched flower symbolism before buying | 4/10 | Most people guess rather than reference meaning. |
| Rated finding flowers/gifts that express exact feelings as "very" or "somewhat" helpful | 9/10 | Real demand for the outcome, even if current behavior does not reflect it. |

---

## 2. Goals & Non-Goals

### Goals

- Accept a free-form sentence from the user as input.
- Interpret the sentence's underlying emotion/meaning using an NLP layer.
- Map the interpreted meaning to a bouquet of flowers using floriography.
- Present the resulting bouquet in a way that communicates **why** those flowers were chosen — surface the meaning-to-flower mapping, not just a picture.
- Support flower-giving contexts beyond romantic partners: family, friends, and suitors.

**Survey support:** 9/10 respondents said the "right" way to choose flowers differs depending on who it is for — near-consensus that relationship context should shape the output, not just detected emotion.

### Non-Goals

| Non-goal | Notes |
|---|---|
| Real-time or streaming translation | No chat-style, sentence-by-sentence interaction. |
| Multi-language input | v1 assumes English-language sentences only. |
| E-commerce functionality | No ordering/purchasing actual bouquets or florist integration. |
| User accounts, saved history, or social sharing | Out of scope for v1. |
| Mobile native app | v1 targets a single platform (web assumed) rather than cross-platform release. |
| Paragraph/multi-sentence input | v1 accepts short input only; paragraph-to-theme extraction is deferred. |

> Items marked "assumed" reflect defaults from project discussion, not explicit decisions. Flag if any should change: web platform, English-only, no accounts, no e-commerce, short input only.

---

## 3. Technical Approach

### Input constraint

Input is capped at roughly **1–3 sentences (~250 characters)**. This is a deliberate scope boundary, not just a UI limit:

- It keeps the NLP task within what sentence-level emotion classifiers are built and validated for.
- It keeps the resulting bouquet legible. A bouquet representing 5+ themes stops reading as "a translation of this sentence" and starts reading as a random assortment.

### Pipeline

| Step | Description |
|---|---|
| 1. Input | User submits a short sentence (≤ ~250 characters). |
| 2. Emotion/meaning interpretation | Run multi-label emotion/sentiment classification on the sentence (e.g., a transformer-based classifier trained on a multi-label emotion dataset). Return the top-k detected emotions/themes with confidence scores. |
| 3. Flower mapping | Map each top-k emotion/theme to a flower using a floriography lookup table built from survey findings + established floriography references. Respect relationship context (romantic, family, friend, suitor) where that context changes a flower's meaning. |
| 4. Output | Assemble the resulting flowers into a bouquet and surface the meaning-to-flower reasoning to the user — not just an image. |

### Mapping priority signal (n=10)

When asked what matters most in a flower gift:

| Priority | Count |
|---|---:|
| Recipient's preference or favorite | 5/10 |
| Meaning or symbolism | 4/10 |
| Appearance/color | 2/10 |
| Price | 2/10 |

This supports a mapping approach weighted toward **meaning over aesthetics**, with **recipient-preference personalization** as a possible future input.

### Explicitly deferred

Paragraph/multi-sentence summarization or topic extraction as a pre-processing step before classification. This would require a different, heavier NLP stage (summarization or topic modeling) and introduces more failure modes than sentence-level classification alone. Revisit only if user research shows people want to input longer, more narrative text.

---

## 5. Success Criteria & Open Questions

### Open questions

- What are the success criteria for a "correct" or "satisfying" flower-to-meaning match?
- What is the relative weighting of relationship types in the matching logic? Current sample is too romantic-skewed to derive this confidently.
- Which specific flower-meaning associations need localization or correction based on respondent expectations?
- Should recipient preference become an explicit v1 input, or remain a future enhancement?
- Should the Stranger / low-stakes gifter become a formal persona or remain an edge case?

---

## 6. Survey Findings & Sample Caveats

### Findings incorporated above

- Core problem — unsure which flowers fit a feeling — validated: 6/10.
- Relationship context changes the "right" choice — near-consensus: 9/10.
- Meaning/symbolism and recipient preference outweigh appearance/price as priorities.
- Multi-emotion gifting is already handled informally today (e.g., flowers paired with a written note). This supports the multi-label/multi-flower bouquet approach rather than a single dominant emotion per gift.

### Sample caveats

> **Important:** Treat findings as directional.

- **n=10 is small.** Confidence in any percentage above is low; treat as early signal, not a stable estimate.
- **Skewed toward romantic partner** as the reference relationship (7/10), with only 1 respondent each for family, friend, and stranger — and 0 for suitor. The four-persona empathy map is still only lightly tested outside the romantic persona.
- **Demographically skewed:** 6/10 respondents 18–24; 7/10 female. Findings may not generalize across age or gender.
- **Recommendation:** Continue collecting responses with an eye toward better balance across relationship type before finalizing relationship-weighting logic.

---

## 7. Change Log

| Version | Change |
|---|---|
| v1 | Initial Problem Statement and Goals/Non-Goals drafted from project context. |
| v1 (update) | Added input-length constraint to Non-Goals and a Technical Approach section (multi-label emotion classification → flower-mapping pipeline). |
| v1 (update) | Incorporated first survey findings (n=10) into Problem Statement, Goals, and Technical Approach; replaced Open/Survey-Dependent section with Findings + remaining gaps + sample caveats. |

> Status note: Findings are directional only. The survey sample is small and skewed (see §6). Do not treat percentages as stable estimates.