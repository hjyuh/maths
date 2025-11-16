# Precalculus Unit 5: Exponential & Logarithmic Functions - Final Test

**Name:** ______________________ **Date:** ________ **Period:** ____

**Instructions:** Show all work for full credit. Calculator permitted where indicated. Total: 50 points

---

## Part I: Exponential Functions & Models (12 points)

**1.** (4 points) For f(x) = 2^(x-3) + 1:
   a) State the horizontal asymptote (1 point)
   b) Find the y-intercept (2 points)
   c) Is this growth or decay? (1 point)

**2.** (4 points) A bacteria culture starts with 800 bacteria and doubles every 5 hours.
   a) Write an exponential model N(t) for the population after t hours (2 points)
   b) Find the population after 15 hours (2 points)

**3.** (4 points) $6000 is invested at 5.5% compounded monthly.
   a) Find the amount after 8 years (2 points)
   b) How much more would be earned if it were compounded continuously instead? (2 points)

---

## Part II: Logarithmic Functions (10 points)

**4.** (4 points) Convert to the indicated form:
   a) Write 5³ = 125 in logarithmic form (1 point)
   b) Write log₄(64) = 3 in exponential form (1 point)
   c) Evaluate: log₂(32) (1 point)
   d) Evaluate: ln(e⁵) (1 point)

**5.** (3 points) Find the domain of f(x) = log(3x - 6).

**6.** (3 points) Graph f(x) = log₂(x) on the grid provided. Label the vertical asymptote and at least 3 points.

---

## Part III: Properties of Logarithms (12 points)

**7.** (4 points) Expand completely using properties of logarithms:
   ln[(x³√y)/z²]

**8.** (4 points) Condense to a single logarithm:
   3log(x) - 2log(y) + log(z)

**9.** (4 points) Use the change of base formula to evaluate log₆(40). Round to 3 decimal places.

---

## Part IV: Solving Equations (16 points)

**10.** (4 points) Solve: 4^(x+1) = 64

**11.** (4 points) Solve: 5^x = 30 (Round to 3 decimal places)

**12.** (4 points) Solve: log(x) + log(x - 3) = 1

**13.** (4 points) Solve: ln(2x - 1) = 3

---

## Answer Key

### Part I: Exponential Functions & Models

**1.** f(x) = 2^(x-3) + 1

a) **Horizontal asymptote: y = 1**

b) y-intercept when x = 0:
   f(0) = 2^(0-3) + 1
   = 2^(-3) + 1
   = 1/8 + 1
   = 1/8 + 8/8
   = 9/8
   **y-intercept: (0, 9/8) or (0, 1.125)**

c) Base = 2 > 1, so **exponential growth**

**2.** Bacteria culture

a) Doubles every 5 hours:
   **N(t) = 800(2)^(t/5)** or **N(t) = 800e^(0.1386t)**

b) N(15) = 800(2)^(15/5)
   = 800(2)³
   = 800(8)
   = **6400 bacteria**

**3.** Compound interest

a) Monthly: A = 6000(1 + 0.055/12)^(12·8)
   = 6000(1 + 0.0045833...)^96
   = 6000(1.0045833...)^96
   ≈ **$9,315.75**

b) Continuous: A = 6000e^(0.055·8)
   = 6000e^0.44
   ≈ $9,330.30

   Difference: 9330.30 - 9315.75 ≈ **$14.55 more**

### Part II: Logarithmic Functions

**4.** Conversions and evaluations

a) **log₅(125) = 3**

b) **4³ = 64**

c) log₂(32) = log₂(2⁵) = **5**

d) **5**

**5.** Domain of f(x) = log(3x - 6)

Need: 3x - 6 > 0
- 3x > 6
- x > 2

**Domain: (2, ∞) or x > 2**

**6.** Graph should show:
- Vertical asymptote at **x = 0**
- Points: (1, 0), (2, 1), (4, 2), (1/2, -1)
- Increasing curve approaching VA on left, rising to right

### Part III: Properties of Logarithms

**7.** Expand ln[(x³√y)/z²]

= ln(x³) + ln(√y) - ln(z²)
= ln(x³) + ln(y^(1/2)) - ln(z²)
= **3ln(x) + (1/2)ln(y) - 2ln(z)**

**8.** Condense 3log(x) - 2log(y) + log(z)

= log(x³) - log(y²) + log(z)
= log(x³z) - log(y²)
= **log[(x³z)/y²]**

**9.** Change of base: log₆(40)

log₆(40) = ln(40)/ln(6)
= 3.6889.../1.7918...
≈ **2.059**

Or using log base 10:
log₆(40) = log(40)/log(6)
≈ 1.6021/0.7782
≈ **2.059**

### Part IV: Solving Equations

**10.** Solve: 4^(x+1) = 64

Method: Same base
- 4^(x+1) = 4³
- x + 1 = 3
- **x = 2**

**11.** Solve: 5^x = 30

Take natural log of both sides:
- ln(5^x) = ln(30)
- x·ln(5) = ln(30)
- x = ln(30)/ln(5)
- x = 3.4012.../1.6094...
- **x ≈ 2.113**

**12.** Solve: log(x) + log(x - 3) = 1

Combine using product rule:
- log[x(x - 3)] = 1
- x(x - 3) = 10¹
- x² - 3x = 10
- x² - 3x - 10 = 0
- (x - 5)(x + 2) = 0
- x = 5 or x = -2

Check domain: x > 0 and x - 3 > 0, so x > 3
- x = 5: log(5) + log(2) = log(10) = 1 ✓
- x = -2: invalid (negative)

**Solution: x = 5**

**13.** Solve: ln(2x - 1) = 3

Convert to exponential form:
- e³ = 2x - 1
- 2x = e³ + 1
- x = (e³ + 1)/2
- x = (20.0855... + 1)/2
- **x ≈ 10.543** or **x = (e³ + 1)/2** (exact)

---

## Scoring Guide

Part I (Exponential Functions & Models): _____ / 12
Part II (Logarithmic Functions): _____ / 10
Part III (Properties of Logarithms): _____ / 12
Part IV (Solving Equations): _____ / 16

**Total: _____ / 50**

**Grade:** ______

### Grading Scale:
- A: 45-50 (90-100%)
- B: 40-44 (80-89%)
- C: 35-39 (70-79%)
- D: 30-34 (60-69%)
- F: Below 30
