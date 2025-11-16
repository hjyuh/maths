# Precalculus Unit 6: Sequences, Series & Misc Topics - Final Test

**Name:** ______________________ **Date:** ________ **Period:** ____

**Instructions:** Show all work for full credit. Calculator permitted where indicated. Total: 50 points

---

## Part I: Binomial Theorem (12 points)

**1.** (3 points) Evaluate ₈C₅.

**2.** (5 points) Expand using the binomial theorem: (x - 2)⁴

**3.** (4 points) Find the coefficient of x⁶ in the expansion of (x + 3)⁸.

---

## Part II: Sequences (14 points)

**4.** (4 points) For the arithmetic sequence 7, 12, 17, 22, ...:
   a) Find the common difference (1 point)
   b) Find the 25th term (3 points)

**5.** (4 points) For the geometric sequence 5, 15, 45, 135, ...:
   a) Find the common ratio (1 point)
   b) Find the 8th term (3 points)

**6.** (6 points) An arithmetic sequence has a₃ = 18 and a₇ = 38.
   a) Find the common difference d (3 points)
   b) Find the first term a₁ (3 points)

---

## Part III: Series (16 points)

**7.** (4 points) Evaluate: Σ(k=1 to 5) (2k + 3)

**8.** (4 points) Find the sum of the first 20 terms of the arithmetic sequence: 3, 7, 11, 15, ...

**9.** (4 points) Find the sum of the geometric series: 2 + 6 + 18 + 54 + 162 + 486

**10.** (4 points) Find the sum of the infinite geometric series: 8 + 4 + 2 + 1 + ...

---

## Part IV: Vectors (Optional - 8 points)

**11.** (4 points) If u = ⟨6, 8⟩:
   a) Find ||u|| (2 points)
   b) Find a unit vector in the direction of u (2 points)

**12.** (4 points) If u = ⟨4, -3⟩ and v = ⟨2, 5⟩:
   a) Find u + v (2 points)
   b) Find u · v (2 points)

---

## Answer Key

### Part I: Binomial Theorem

**1.** Evaluate ₈C₅

₈C₅ = 8!/(5!·3!)
= (8·7·6·5!)/(5!·3·2·1)
= (8·7·6)/(3·2·1)
= 336/6
= **56**

**2.** Expand (x - 2)⁴

Using row 4 of Pascal's triangle: 1, 4, 6, 4, 1

(x - 2)⁴ = 1·x⁴ + 4·x³(-2) + 6·x²(-2)² + 4·x(-2)³ + 1·(-2)⁴
= x⁴ + 4x³(-2) + 6x²(4) + 4x(-8) + 16
= **x⁴ - 8x³ + 24x² - 32x + 16**

**3.** Find coefficient of x⁶ in (x + 3)⁸

The term containing x⁶ is T₇ = T₆₊₁ = ₈C₆x⁶(3)²

₈C₆ = ₈C₂ = 28

T₇ = 28·x⁶·9 = 252x⁶

**Coefficient: 252**

### Part II: Sequences

**4.** Arithmetic sequence: 7, 12, 17, 22, ...

a) **d = 5** (common difference = 12 - 7)

b) Using aₙ = a₁ + (n-1)d:
   a₂₅ = 7 + (25-1)(5)
   = 7 + 24(5)
   = 7 + 120
   = **127**

**5.** Geometric sequence: 5, 15, 45, 135, ...

a) **r = 3** (common ratio = 15/5)

b) Using aₙ = a₁rⁿ⁻¹:
   a₈ = 5(3)⁷
   = 5(2187)
   = **10,935**

**6.** Find a₁ and d given a₃ = 18 and a₇ = 38

a) Using aₙ = a₁ + (n-1)d:
   - a₃ = a₁ + 2d = 18 ... (equation 1)
   - a₇ = a₁ + 6d = 38 ... (equation 2)

   Subtract equation 1 from equation 2:
   (a₁ + 6d) - (a₁ + 2d) = 38 - 18
   4d = 20
   **d = 5**

b) Substitute d = 5 into equation 1:
   a₁ + 2(5) = 18
   a₁ + 10 = 18
   **a₁ = 8**

### Part III: Series

**7.** Evaluate Σ(k=1 to 5) (2k + 3)

= (2·1+3) + (2·2+3) + (2·3+3) + (2·4+3) + (2·5+3)
= 5 + 7 + 9 + 11 + 13
= **45**

**8.** Sum of first 20 terms: 3, 7, 11, 15, ...

This is arithmetic with a₁ = 3, d = 4, n = 20

First, find a₂₀:
a₂₀ = 3 + (20-1)(4) = 3 + 76 = 79

Using Sₙ = n(a₁ + aₙ)/2:
S₂₀ = 20(3 + 79)/2
= 20(82)/2
= 1640/2
= **820**

**9.** Sum of geometric series: 2 + 6 + 18 + 54 + 162 + 486

This is geometric with a₁ = 2, r = 3, n = 6

Using Sₙ = a₁(1 - rⁿ)/(1 - r):
S₆ = 2(1 - 3⁶)/(1 - 3)
= 2(1 - 729)/(-2)
= 2(-728)/(-2)
= -1456/(-2)
= **728**

**10.** Sum of infinite series: 8 + 4 + 2 + 1 + ...

This is geometric with a₁ = 8, r = 1/2

Since |r| = 1/2 < 1, the series converges.

Using S = a₁/(1 - r):
S = 8/(1 - 1/2)
= 8/(1/2)
= 8 · 2
= **16**

### Part IV: Vectors (Optional)

**11.** u = ⟨6, 8⟩

a) ||u|| = √(6² + 8²)
   = √(36 + 64)
   = √100
   = **10**

b) Unit vector = u/||u||
   = ⟨6, 8⟩/10
   = **⟨3/5, 4/5⟩** or **⟨0.6, 0.8⟩**

**12.** u = ⟨4, -3⟩ and v = ⟨2, 5⟩

a) u + v = ⟨4+2, -3+5⟩
   = **⟨6, 2⟩**

b) u · v = 4(2) + (-3)(5)
   = 8 + (-15)
   = **-7**

---

## Scoring Guide

Part I (Binomial Theorem): _____ / 12
Part II (Sequences): _____ / 14
Part III (Series): _____ / 16
Part IV (Vectors - Optional): _____ / 8

**Total: _____ / 50** (or _____ / 42 if vectors omitted)

**Grade:** ______

### Grading Scale:
- A: 45-50 (90-100%)
- B: 40-44 (80-89%)
- C: 35-39 (70-79%)
- D: 30-34 (60-69%)
- F: Below 30

**Note:** If vectors section is omitted, scale to 42 points:
- A: 38-42 (90-100%)
- B: 34-37 (80-89%)
- C: 29-33 (70-79%)
- D: 25-28 (60-69%)
- F: Below 25
