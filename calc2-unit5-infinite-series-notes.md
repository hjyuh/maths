# Calculus 2 - Unit 5: Infinite Series - Notes

## Table of Contents
1. [Introduction to Series](#introduction-to-series)
2. [Geometric Series](#geometric-series)
3. [The Integral Test](#the-integral-test)
4. [Comparison Tests](#comparison-tests)
5. [Ratio and Root Tests](#ratio-and-root-tests)
6. [Alternating Series](#alternating-series)
7. [Absolute and Conditional Convergence](#absolute-and-conditional-convergence)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understand series notation and partial sums**
- **Apply convergence tests appropriately**
- **Distinguish between absolute and conditional convergence**
- **Determine convergence or divergence of series**
- **Estimate series sums and remainders**

---

## Essential Questions
- What is the difference between a sequence and a series?
- How do we determine if an infinite sum converges?
- Which convergence test should we use for a given series?
- What does conditional convergence mean?

---

## Introduction to Series

### Definition

**Infinite Series:** The sum of an infinite sequence
```
Σ(n=1 to ∞) aₙ = a₁ + a₂ + a₃ + ...
```

**Partial Sum:** Sₙ = a₁ + a₂ + ... + aₙ

**Convergence:** A series Σaₙ converges to S if lim(n→∞) Sₙ = S

**Divergence:** A series diverges if it does not converge

### Example 1: Partial Sums

Find the first four partial sums of Σ(n=1 to ∞) 1/n².

```
S₁ = 1/1² = 1
S₂ = 1 + 1/4 = 5/4 = 1.25
S₃ = 1 + 1/4 + 1/9 = 49/36 ≈ 1.361
S₄ = 1 + 1/4 + 1/9 + 1/16 = 205/144 ≈ 1.424

(This series converges to π²/6 ≈ 1.645)
```

### Divergence Test

**Theorem:** If Σaₙ converges, then lim(n→∞) aₙ = 0

**Contrapositive (Test for Divergence):**
If lim(n→∞) aₙ ≠ 0 or doesn't exist, then Σaₙ diverges

**Important:** If lim aₙ = 0, the series MAY OR MAY NOT converge!

### Example 2: Divergence Test

Test Σ(n=1 to ∞) n/(n + 1) for convergence.

```
lim(n→∞) n/(n + 1) = lim(n→∞) 1/(1 + 1/n) = 1 ≠ 0

By the Divergence Test, the series diverges.
```

---

## Geometric Series

### Definition and Formula

**Geometric Series:**
```
Σ(n=0 to ∞) arⁿ = a + ar + ar² + ar³ + ...
```

**Convergence:**
- If |r| < 1: Series converges to a/(1 - r)
- If |r| ≥ 1: Series diverges

### Example 3: Geometric Series

Determine convergence of Σ(n=0 to ∞) (2/3)ⁿ and find the sum.

```
This is geometric with a = 1, r = 2/3

Since |r| = 2/3 < 1, the series converges.

Sum = a/(1 - r) = 1/(1 - 2/3) = 1/(1/3) = 3
```

### Example 4: Rewriting to Identify Geometric

Find the sum of Σ(n=1 to ∞) 5/2ⁿ.

```
Σ(n=1 to ∞) 5/2ⁿ = Σ(n=1 to ∞) 5·(1/2)ⁿ
                   = 5·Σ(n=1 to ∞) (1/2)ⁿ
                   = 5·[Σ(n=0 to ∞) (1/2)ⁿ - 1]
                   = 5·[1/(1 - 1/2) - 1]
                   = 5·[2 - 1]
                   = 5
```

### Example 5: Repeating Decimal

Express 0.777... as a fraction.

```
0.777... = 7/10 + 7/100 + 7/1000 + ...
         = 7/10(1 + 1/10 + 1/100 + ...)
         = 7/10 · Σ(n=0 to ∞) (1/10)ⁿ
         = 7/10 · 1/(1 - 1/10)
         = 7/10 · 10/9
         = 7/9
```

---

## The Integral Test

### Theorem

If f is continuous, positive, and decreasing on [1, ∞), and aₙ = f(n), then:

**Σ(n=1 to ∞) aₙ and ∫(1 to ∞) f(x) dx either both converge or both diverge**

### Example 6: Integral Test

Test Σ(n=1 to ∞) 1/n² for convergence.

```
Let f(x) = 1/x²
- Continuous for x ≥ 1 ✓
- Positive for x ≥ 1 ✓
- Decreasing: f'(x) = -2/x³ < 0 for x > 0 ✓

Evaluate ∫(1 to ∞) 1/x² dx:

= lim(t→∞) ∫(1 to t) x⁻² dx
= lim(t→∞) [-x⁻¹]₁ᵗ
= lim(t→∞) [-1/t + 1]
= 1

Since the integral converges, the series converges.
```

### p-Series

**p-Series:** Σ(n=1 to ∞) 1/nᵖ

**Convergence:**
- Converges if p > 1
- Diverges if p ≤ 1

### Example 7: Harmonic Series

Show that Σ(n=1 to ∞) 1/n diverges.

```
This is a p-series with p = 1.

Since p = 1 ≤ 1, the series diverges.

(This can also be proven using the integral test)
```

### Example 8: p-Series Test

Determine convergence of Σ(n=1 to ∞) 1/n^(3/2).

```
This is a p-series with p = 3/2.

Since p = 3/2 > 1, the series converges.
```

---

## Comparison Tests

### Direct Comparison Test

If 0 ≤ aₙ ≤ bₙ for all n:
- If Σbₙ converges, then Σaₙ converges
- If Σaₙ diverges, then Σbₙ diverges

### Example 9: Direct Comparison

Test Σ(n=1 to ∞) 1/(n² + 1) for convergence.

```
For n ≥ 1: n² + 1 > n²
Therefore: 1/(n² + 1) < 1/n²

We know Σ 1/n² converges (p-series, p = 2 > 1).

By Direct Comparison Test, Σ 1/(n² + 1) converges.
```

### Limit Comparison Test

If aₙ, bₙ > 0 and lim(n→∞) aₙ/bₙ = L where 0 < L < ∞, then:

**Σaₙ and Σbₙ either both converge or both diverge**

### Example 10: Limit Comparison

Test Σ(n=1 to ∞) (2n + 1)/(n³ + n + 1) for convergence.

```
Leading behavior suggests comparing with 2n/n³ = 2/n².

Let aₙ = (2n + 1)/(n³ + n + 1), bₙ = 1/n²

lim(n→∞) aₙ/bₙ = lim(n→∞) [(2n + 1)/(n³ + n + 1)] · n²
                = lim(n→∞) (2n³ + n²)/(n³ + n + 1)
                = lim(n→∞) (2 + 1/n)/(1 + 1/n² + 1/n³)
                = 2

Since 0 < 2 < ∞ and Σ 1/n² converges,
by Limit Comparison Test, the original series converges.
```

---

## Ratio and Root Tests

### Ratio Test

Let L = lim(n→∞) |aₙ₊₁/aₙ|

- If L < 1: Series converges absolutely
- If L > 1: Series diverges
- If L = 1: Test inconclusive

### Example 11: Ratio Test

Test Σ(n=1 to ∞) n!/2ⁿ for convergence.

```
aₙ = n!/2ⁿ

aₙ₊₁/aₙ = [(n+1)!/2^(n+1)] / [n!/2ⁿ]
         = (n+1)!/2^(n+1) · 2ⁿ/n!
         = (n+1) · 1/2

L = lim(n→∞) (n+1)/2 = ∞ > 1

By Ratio Test, the series diverges.
```

### Example 12: Ratio Test with Factorials

Test Σ(n=1 to ∞) 2ⁿ/n! for convergence.

```
aₙ = 2ⁿ/n!

aₙ₊₁/aₙ = [2^(n+1)/(n+1)!] / [2ⁿ/n!]
         = 2/(n+1)

L = lim(n→∞) 2/(n+1) = 0 < 1

By Ratio Test, the series converges.
```

### Root Test

Let L = lim(n→∞) ⁿ√|aₙ|

- If L < 1: Series converges absolutely
- If L > 1: Series diverges
- If L = 1: Test inconclusive

### Example 13: Root Test

Test Σ(n=1 to ∞) (2n/(3n + 1))ⁿ for convergence.

```
aₙ = (2n/(3n + 1))ⁿ

ⁿ√aₙ = 2n/(3n + 1)

L = lim(n→∞) 2n/(3n + 1) = lim(n→∞) 2/(3 + 1/n) = 2/3 < 1

By Root Test, the series converges.
```

---

## Alternating Series

### Alternating Series Test

**Alternating Series:** Σ(-1)ⁿaₙ or Σ(-1)^(n+1)aₙ where aₙ > 0

**Convergence:** If:
1. aₙ₊₁ ≤ aₙ (terms decrease)
2. lim(n→∞) aₙ = 0

Then the series converges.

### Example 14: Alternating Harmonic Series

Test Σ(n=1 to ∞) (-1)^(n+1)/n for convergence.

```
Check conditions:
1. 1/(n+1) < 1/n ✓ (decreasing)
2. lim(n→∞) 1/n = 0 ✓

By Alternating Series Test, the series converges.

(Note: This is the alternating harmonic series,
 which converges to ln(2))
```

### Alternating Series Remainder

If an alternating series satisfies the conditions and converges to S:

**|Rₙ| = |S - Sₙ| ≤ aₙ₊₁**

### Example 15: Estimating Sum

Estimate Σ(n=1 to ∞) (-1)^(n+1)/n² using S₅.

```
S₅ = 1 - 1/4 + 1/9 - 1/16 + 1/25
   ≈ 1 - 0.25 + 0.111 - 0.0625 + 0.04
   ≈ 0.839

Error bound: |R₅| ≤ a₆ = 1/36 ≈ 0.028

So the sum is approximately 0.839 ± 0.028.
(Actual sum ≈ 0.823)
```

---

## Absolute and Conditional Convergence

### Definitions

**Absolutely Convergent:** Σ|aₙ| converges

**Conditionally Convergent:** Σaₙ converges but Σ|aₙ| diverges

**Theorem:** If Σ|aₙ| converges, then Σaₙ converges

### Example 16: Absolute Convergence

Determine if Σ(n=1 to ∞) (-1)ⁿ/n² is absolutely convergent.

```
Test Σ|aₙ| = Σ 1/n²

This is a p-series with p = 2 > 1, so it converges.

Therefore, the original series is absolutely convergent.
```

### Example 17: Conditional Convergence

Determine the type of convergence for Σ(n=1 to ∞) (-1)^(n+1)/n.

```
Test Σ|aₙ| = Σ 1/n (harmonic series)

This diverges.

But we showed earlier that Σ(-1)^(n+1)/n converges
by the Alternating Series Test.

Therefore, the series is conditionally convergent.
```

---

## Summary of Convergence Tests

### When to Use Each Test

**1. Divergence Test:** Always try first
- If lim aₙ ≠ 0, series diverges

**2. Geometric Series:** Look for rⁿ pattern
- Converges if |r| < 1 to a/(1 - r)

**3. p-Series:** For Σ 1/nᵖ
- Converges if p > 1

**4. Integral Test:** When f(n) = aₙ is easy to integrate
- Use for functions like ln(n)/n, 1/(n ln n), etc.

**5. Comparison Tests:** When series resembles a known series
- Direct: Compare term-by-term
- Limit: Compare ratios

**6. Ratio Test:** Best for factorials or exponentials
- Excellent for n!, aⁿ

**7. Root Test:** Best for nth powers
- Excellent for aₙⁿ

**8. Alternating Series Test:** For (-1)ⁿaₙ
- Check decreasing and limit to 0

### Example 18: Choosing the Right Test

Determine convergence of each:

a) Σ 1/(n ln n)
```
Integral Test:
∫ 1/(x ln x) dx = ln(ln x) → ∞
Diverges
```

b) Σ (n + 1)!/10ⁿ
```
Ratio Test (factorials present):
L = lim (n+2)/10 = ∞ > 1
Diverges
```

c) Σ sin(1/n)/n
```
Comparison Test:
sin(1/n)/n ≈ (1/n)/n = 1/n² for large n
Compare with Σ 1/n², which converges
Converges
```

---

## Key Formulas and Reference

### Series Tests Summary

```
Divergence Test: If lim aₙ ≠ 0, series diverges

Geometric: Σ arⁿ converges to a/(1-r) if |r| < 1

p-Series: Σ 1/nᵖ converges if p > 1

Integral Test: Σaₙ ≈ ∫f(x)dx (same convergence)

Comparison: If 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges

Limit Comparison: If lim(aₙ/bₙ) = L (0 < L < ∞), same convergence

Ratio: L = lim|aₙ₊₁/aₙ|: L<1 converges, L>1 diverges

Root: L = lim ⁿ√|aₙ|: L<1 converges, L>1 diverges

Alternating: If decreasing and lim aₙ = 0, converges
```

### Absolute vs Conditional

```
Absolutely convergent: Σ|aₙ| converges
Conditionally convergent: Σaₙ converges, Σ|aₙ| diverges
If absolutely convergent, then convergent
```

---

**Next Unit:** Unit 6 - Power Series
