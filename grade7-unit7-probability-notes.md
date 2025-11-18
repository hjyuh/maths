# Grade 7 Unit 7: Probability - Theoretical Probability, Experimental Probability and Compound Events

## Overview
**Essential Question:** How can we use probability to predict and analyze outcomes of events?

**Standards Covered:**
- 7.SP.5: Understand probability of a chance event
- 7.SP.6: Approximate probability using experimental data
- 7.SP.7: Develop probability models
- 7.SP.8: Find probabilities of compound events

---

## Lesson 1: Introduction to Probability

### What is Probability?

**Probability** is the measure of how likely an event is to occur.

**Probability scale:** 0 to 1 (or 0% to 100%)
- 0: Impossible (will never happen)
- 0.5 or 1/2: Equally likely to happen or not
- 1: Certain (will definitely happen)

**Examples:**
- Probability of rolling a 7 on a standard die: 0 (impossible)
- Probability of flipping heads on a fair coin: 0.5 (equally likely)
- Probability the sun will rise tomorrow: 1 (certain)

### Basic Terms

**Outcome:** A possible result of an experiment
**Event:** One or more outcomes
**Sample Space:** All possible outcomes
**Favorable Outcome:** An outcome you want to happen

---

## Lesson 2: Theoretical Probability

### Theoretical Probability Formula

**P(event) = Number of favorable outcomes / Total number of possible outcomes**

### Examples with Dice

**Sample space for one die:** {1, 2, 3, 4, 5, 6}

**Example 1:** Probability of rolling a 4
```
Favorable outcomes: 1 (just the 4)
Total outcomes: 6
P(4) = 1/6
```

**Example 2:** Probability of rolling an even number
```
Favorable outcomes: 3 (2, 4, 6)
Total outcomes: 6
P(even) = 3/6 = 1/2
```

**Example 3:** Probability of rolling greater than 4
```
Favorable outcomes: 2 (5, 6)
Total outcomes: 6
P(>4) = 2/6 = 1/3
```

### Examples with Coins

**Sample space for one coin:** {Heads, Tails}

**Example:** Probability of flipping heads
```
Favorable outcomes: 1 (heads)
Total outcomes: 2
P(heads) = 1/2
```

### Examples with Spinners

**Example:** An 8-section spinner numbered 1-8
```
P(landing on 3) = 1/8
P(landing on odd number) = 4/8 = 1/2
P(landing on number > 5) = 3/8
```

---

## Lesson 3: Probability with Cards

### Standard Deck of Cards

**52 cards total:**
- 4 suits: Hearts (♥), Diamonds (♦), Clubs (♣), Spades (♠)
- Each suit has 13 cards: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
- 26 red cards (Hearts and Diamonds)
- 26 black cards (Clubs and Spades)
- 12 face cards (J, Q, K in each suit)

**Example 1:** Probability of drawing a heart
```
Favorable outcomes: 13 hearts
Total outcomes: 52 cards
P(heart) = 13/52 = 1/4
```

**Example 2:** Probability of drawing a red card
```
Favorable outcomes: 26 red cards
Total outcomes: 52 cards
P(red) = 26/52 = 1/2
```

**Example 3:** Probability of drawing a king
```
Favorable outcomes: 4 kings
Total outcomes: 52 cards
P(king) = 4/52 = 1/13
```

---

## Lesson 4: Complementary Events

### The Complement of an Event

**Complement:** The event NOT happening

**Formula:** P(event) + P(not event) = 1

Or: **P(not A) = 1 - P(A)**

**Example 1:** Rolling a die
```
P(rolling a 3) = 1/6
P(not rolling a 3) = 1 - 1/6 = 5/6
```

**Example 2:** Drawing from a deck
```
P(drawing a heart) = 1/4
P(not drawing a heart) = 1 - 1/4 = 3/4
```

**Example 3:** Spinner with 5 equal sections
```
P(landing on section 2) = 1/5
P(not landing on section 2) = 4/5
```

---

## Lesson 5: Experimental Probability

### What is Experimental Probability?

**Experimental probability** is based on actual experiments or observations.

**Formula:** P(event) = Number of times event occurred / Total number of trials

### Comparing to Theoretical Probability

**Example:** Flipping a coin 50 times
```
Theoretical: P(heads) = 1/2 = 0.5
Experiment results: 28 heads
Experimental: P(heads) = 28/50 = 0.56
```

**Law of Large Numbers:** As the number of trials increases, experimental probability gets closer to theoretical probability.

### Examples

**Example 1:** Shooting free throws
```
A player makes 42 out of 50 free throws.
Experimental P(making shot) = 42/50 = 21/25 = 0.84 or 84%
```

**Example 2:** Quality control
```
A factory tests 200 items and finds 6 defective.
Experimental P(defective) = 6/200 = 3/100 = 0.03 or 3%
```

**Example 3:** Weather prediction
```
It rained on 15 out of 60 days in spring.
Experimental P(rain on spring day) = 15/60 = 1/4 = 0.25
```

---

## Lesson 6: Using Probability to Make Predictions

### Prediction Formula

**Expected outcomes = Probability × Number of trials**

**Example 1:** Coin flips
```
You flip a coin 100 times.
Expected number of heads = 1/2 × 100 = 50
```

**Example 2:** Rolling dice
```
You roll a die 60 times.
Expected number of 4's = 1/6 × 60 = 10
```

**Example 3:** Production
```
A machine produces defective items 2% of the time.
In 5,000 items, expected defective = 0.02 × 5000 = 100
```

**Example 4:** Free throws
```
A player makes 75% of free throws.
In 40 attempts, expected makes = 0.75 × 40 = 30
```

---

## Lesson 7: Sample Spaces for Compound Events

### What is a Compound Event?

**Compound event:** An event consisting of two or more simple events

**Methods to show sample space:**
1. List
2. Table
3. Tree diagram

### Flipping Two Coins

**List:** {HH, HT, TH, TT}

**Tree Diagram:**
```
        H ── H (HH)
       /
Start ─
       \
        T ── H (TH)

        H ── T (HT)
       /
Start ─
       \
        T ── T (TT)
```

**Total outcomes:** 4

### Rolling Two Dice

**Table showing sums:**
```
    1  2  3  4  5  6
1   2  3  4  5  6  7
2   3  4  5  6  7  8
3   4  5  6  7  8  9
4   5  6  7  8  9  10
5   6  7  8  9  10 11
6   7  8  9  10 11 12
```

**Total outcomes:** 36

**Example:** P(sum of 7)
```
Favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways
P(sum of 7) = 6/36 = 1/6
```

---

## Lesson 8: Independent Events

### What are Independent Events?

**Independent events:** The outcome of one event does NOT affect the outcome of the other

**Examples of independent events:**
- Flipping a coin twice
- Rolling two dice
- Drawing a card, replacing it, then drawing again

**Multiplication Rule for Independent Events:**
**P(A and B) = P(A) × P(B)**

### Examples

**Example 1:** Flipping two coins
```
P(heads on first flip) = 1/2
P(heads on second flip) = 1/2
P(both heads) = 1/2 × 1/2 = 1/4
```

**Example 2:** Rolling two dice
```
P(rolling 4 on first die) = 1/6
P(rolling 5 on second die) = 1/6
P(4 on first AND 5 on second) = 1/6 × 1/6 = 1/36
```

**Example 3:** Spinner and coin
```
Spinner has 4 equal sections, coin is fair
P(landing on section 2) = 1/4
P(flipping heads) = 1/2
P(section 2 AND heads) = 1/4 × 1/2 = 1/8
```

---

## Lesson 9: Dependent Events

### What are Dependent Events?

**Dependent events:** The outcome of one event DOES affect the outcome of the other

**Examples of dependent events:**
- Drawing two cards without replacement
- Choosing two people from a group without replacement
- Taking items from a bag without replacement

**Multiplication Rule for Dependent Events:**
**P(A and B) = P(A) × P(B after A)**

### Examples

**Example 1:** Drawing cards without replacement
```
P(first card is king) = 4/52
P(second card is king | first was king) = 3/51
P(both kings) = 4/52 × 3/51 = 12/2652 = 1/221
```

**Example 2:** Marbles in a bag
```
Bag has 5 red and 3 blue marbles
P(first marble is red) = 5/8
P(second is red | first was red) = 4/7
P(both red) = 5/8 × 4/7 = 20/56 = 5/14
```

**Example 3:** Choosing students
```
Class has 12 boys and 8 girls (20 total)
P(first student is girl) = 8/20 = 2/5
P(second is girl | first was girl) = 7/19
P(both girls) = 2/5 × 7/19 = 14/95
```

---

## Lesson 10: Compound Events - "OR" Probability

### Mutually Exclusive Events

**Mutually exclusive:** Events that cannot both happen at the same time

**For mutually exclusive events:**
**P(A or B) = P(A) + P(B)**

**Example 1:** Rolling a die
```
P(rolling 2 or rolling 5) = 1/6 + 1/6 = 2/6 = 1/3
(Can't roll both at same time - mutually exclusive)
```

**Example 2:** Drawing a card
```
P(drawing heart or drawing club) = 1/4 + 1/4 = 1/2
(A card can't be both - mutually exclusive)
```

### Non-Mutually Exclusive Events

**For events that CAN both happen:**
**P(A or B) = P(A) + P(B) - P(A and B)**

**Example:** Drawing a card
```
P(drawing king or drawing heart)
P(king) = 4/52
P(heart) = 13/52
P(king AND heart) = 1/52 (king of hearts)
P(king or heart) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13
```

---

## Lesson 11: Simulations

### What is a Simulation?

**Simulation:** A model of a real situation used to find experimental probability

**Common simulation tools:**
- Coins
- Dice
- Spinners
- Random number generators
- Computer programs

### Designing a Simulation

**Example 1:** Predict gender of baby (50% each)
```
Simulation: Flip a coin
Heads = Girl, Tails = Boy
Flip 100 times to simulate 100 births
```

**Example 2:** Free throw success (70%)
```
Simulation: Use numbers 1-10
1-7 = Success, 8-10 = Miss
Generate random numbers to simulate shots
```

**Example 3:** Weather (30% chance of rain)
```
Simulation: Use spinner with 10 equal sections
Sections 1-3 = Rain, 4-10 = No rain
Spin to simulate each day
```

---

## Lesson 12: Probability Models

### Creating Probability Models

**A probability model** lists all possible outcomes and their probabilities.

**Requirements:**
1. All probabilities are between 0 and 1
2. Sum of all probabilities = 1

**Example 1:** Fair die
```
Outcome: 1   2   3   4   5   6
P(x):    1/6 1/6 1/6 1/6 1/6 1/6
Sum = 6/6 = 1 ✓
```

**Example 2:** Unfair coin
```
Outcome: Heads  Tails
P(x):    0.6    0.4
Sum = 1.0 ✓
```

**Example 3:** Bag of marbles (3 red, 2 blue, 5 green)
```
Color:   Red   Blue  Green
P(x):    3/10  2/10  5/10
Sum = 10/10 = 1 ✓
```

---

## Key Vocabulary

- **Probability:** The measure of likelihood of an event occurring
- **Outcome:** A possible result of an experiment
- **Event:** One or more outcomes
- **Sample Space:** All possible outcomes
- **Theoretical Probability:** Based on what should happen mathematically
- **Experimental Probability:** Based on actual results from experiments
- **Complement:** The event NOT happening
- **Compound Event:** Two or more simple events
- **Independent Events:** Events where one doesn't affect the other
- **Dependent Events:** Events where one affects the other
- **Mutually Exclusive:** Events that cannot both occur
- **Simulation:** A model used to represent a real situation

---

## Practice Tips

1. Always reduce fractions to simplest form
2. Probability is always between 0 and 1
3. Check if events are independent or dependent
4. For "AND": multiply probabilities
5. For "OR" with mutually exclusive: add probabilities
6. Remember: P(event) + P(not event) = 1
7. Create organized lists, tables, or tree diagrams for sample spaces
8. More trials in experiments → closer to theoretical probability
9. Check if replacement occurs (affects dependent/independent)
10. Make sure all probabilities in a model sum to 1

---

## Probability Formulas Summary

| Type | Formula |
|------|---------|
| Theoretical | P(event) = favorable/total |
| Experimental | P(event) = occurred/trials |
| Complement | P(not A) = 1 - P(A) |
| Independent AND | P(A and B) = P(A) × P(B) |
| Dependent AND | P(A and B) = P(A) × P(B after A) |
| Mutually Exclusive OR | P(A or B) = P(A) + P(B) |
| Non-Mutually Exclusive OR | P(A or B) = P(A) + P(B) - P(A and B) |

---

## Real-World Applications

**Games and Sports:**
- Predicting game outcomes
- Calculating odds
- Strategy development

**Business:**
- Quality control
- Risk assessment
- Market predictions

**Medicine:**
- Clinical trial analysis
- Disease probability
- Treatment effectiveness

**Weather:**
- Forecasting
- Climate prediction
- Seasonal patterns

**Insurance:**
- Risk calculation
- Premium determination
- Claims prediction
