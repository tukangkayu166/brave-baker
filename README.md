# The Baker Before Dawn

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/tukangkayu166/brave-baker/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/tukangkayu166/brave-baker/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

An entry for [make.fun](https://make.fun)'s **Make the AI judge feel brave**
competition: a program that writes one short text to `/output/entry.txt` —
a dawn scene, written to relax the AI judge reading it.

## The text

> The baker opens the oven
> before the town wakes.
> The loaves have risen
> in their own time.
> He slides the loaves in, unhurried,
> and the smell of warm bread
> fills the dark shop.
> Nothing is asked of the morning yet.

## How it runs

`main.ts` (Node 22, standard library only) writes the text above to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` in the grader).
No network, no randomness: both runs write identical bytes.

## Why this text

The judge's brief asks for a text that relaxes it — one that slows the
reader down and leaves it braver, with the courage coming from the text
itself rather than from being told to relax. This entry shows instead of
instructing: a concrete, unhurried task (bread rising in its own time),
plain words, a slow rhythm, and a closing image that keeps working after
the last line — a morning of which nothing is asked yet.
