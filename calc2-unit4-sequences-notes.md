# Calculus 2 - Unit 4: Sequences - Notes

## Table of Contents
1. [Introduction to Sequences](#introduction-to-sequences)
2. [Limits of Sequences](#limits-of-sequences)
3. [Limit Laws for Sequences](#limit-laws-for-sequences)
4. [Monotonic Sequences](#monotonic-sequences)
5. [Bounded Sequences](#bounded-sequences)
6. [Monotonic Sequence Theorem](#monotonic-sequence-theorem)
7. [Applications and Special Sequences](#applications-and-special-sequences)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understand sequence notation and terminology**
- **Evaluate limits of sequences**
- **Determine if sequences are monotonic or bounded**
- **Apply the Monotonic Sequence Theorem**
- **Recognize convergent and divergent sequences**

---

## Essential Questions
- What is the difference between a sequence and a series?
- How do we determine if a sequence converges?
- What does it mean for a sequence to be bounded?
- Why are monotonic sequences important?

---

## Introduction to Sequences

### Definition

**Sequence:** An ordered list of numbers a₁, a₂, a₃, ..., aₙ, ...

**Notation:**
```
{aₙ}  or  {aₙ}ₙ₌₁^∞  or  {a₁, a₂, a₃, ...}
```

**General term:** aₙ = f(n) where n ∈ ℕ (natural numbers)

### Example 1: Writing Terms

Write the first five terms of aₙ = n²/(n + 1).

```
a₁ = 1²/(1 + 1) = 1/2
a₂ = 2²/(2 + 1) = 4/3
a₃ = 3²/(3 + 1) = 9/4
a₄ = 4²/(4 + 1) = 16/5
a₅ = 5²/(5 + 1) = 25/6

Sequence: {1/2, 4/3, 9/4, 16/5, 25/6, ...}
```

### Example 2: Finding a Formula

Find a formula for the general term of {1, 4, 9, 16, 25, ...}.

```
Observe: 1 = 1², 4 = 2², 9 = 3², 16 = 4², 25 = 5²

Formula: aₙ = n²
```

### Example 3: Alternating Signs

Find a formula for {1, -1/2, 1/3, -1/4, 1/5, ...}.

```
Absolute values: 1, 1/2, 1/3, 1/4, 1/5  →  1/n
Signs alternate: +, -, +, -, +  →  (-1)^(n+1) or (-1)^(n-1)

Formula: aₙ = (-1)^(n+1)/n
```

### Example 4: Factorial Sequences

Find a formula for {1, 2, 6, 24, 120, ...}.

```
1 = 1! = 1
2 = 2! = 2·1
6 = 3! = 3·2·1
24 = 4! = 4·3·2·1
120 = 5! = 5·4·3·2·1

Formula: aₙ = n!
```

---

## Limits of Sequences

### Definition of Convergence

**Convergent Sequence:** A sequence {aₙ} converges to L if:
```
lim(n→∞) aₙ = L
```

This means: for any ε > 0, there exists N such that |aₙ - L| < ε for all n > N.

**Divergent Sequence:** A sequence that does not converge.

### Example 5: Computing a Limit

Find lim(n→∞) (3n² + 2n)/(n² + 1).

```
Divide numerator and denominator by n²:

lim(n→∞) (3 + 2/n)/(1 + 1/n²)

As n → ∞: 2/n → 0 and 1/n² → 0

= 3/1 = 3
```

### Example 6: Limit with Exponentials

Find lim(n→∞) e^(-n).

```
As n → ∞, -n → -∞, so e^(-n) → 0

lim(n→∞) e^(-n) = 0
```

### Example 7: Squeeze Theorem

Find lim(n→∞) sin(n)/n.

```
We know: -1 ≤ sin(n) ≤ 1

Divide by n (n > 0):
-1/n ≤ sin(n)/n ≤ 1/n

As n → ∞: -1/n → 0 and 1/n → 0

By Squeeze Theorem: lim(n→∞) sin(n)/n = 0
```

### Example 8: Indeterminate Forms

Find lim(n→∞) ln(n)/n.

```
This is ∞/∞ form, use L'Hôpital's Rule:

lim(n→∞) ln(n)/n = lim(n→∞) (1/n)/1
                  = lim(n→∞) 1/n
                  = 0
```

---

## Limit Laws for Sequences

If lim(n→∞) aₙ = L and lim(n→∞) bₙ = M, then:

1. **Sum:** lim(n→∞) (aₙ + bₙ) = L + M
2. **Difference:** lim(n→∞) (aₙ - bₙ) = L - M
3. **Product:** lim(n→∞) (aₙ · bₙ) = L · M
4. **Quotient:** lim(n→∞) (aₙ/bₙ) = L/M (if M ≠ 0)
5. **Constant Multiple:** lim(n→∞) (c · aₙ) = c · L
6. **Power:** lim(n→∞) aₙᵖ = Lᵖ (if Lᵖ is defined)

### Useful Limits to Know

```
lim(n→∞) 1/nᵖ = 0  (if p > 0)

lim(n→∞) rⁿ = 0  (if |r| < 1)

lim(n→∞) rⁿ = ∞  (if r > 1)

lim(n→∞) (1 + 1/n)ⁿ = e

lim(n→∞) n^(1/n) = 1

lim(n→∞) ⁿ√n = 1
```

### Example 9: Using Limit Laws

Find lim(n→∞) (5n² - 3n + 1)/(2n² + 7).

```
Divide by n²:

= lim(n→∞) (5 - 3/n + 1/n²)/(2 + 7/n²)

Using limit laws:
= (5 - 0 + 0)/(2 + 0)
= 5/2
```

### Example 10: Exponential Growth

Find lim(n→∞) 2ⁿ/n!.

```
For large n, n! grows much faster than 2ⁿ.

More formally, using ratio test idea:
aₙ₊₁/aₙ = [2^(n+1)/(n+1)!] / [2ⁿ/n!]
        = 2/(n+1) → 0 as n → ∞

This suggests aₙ → 0.

lim(n→∞) 2ⁿ/n! = 0
```

---

## Monotonic Sequences

### Definitions

**Monotonic Increasing:** aₙ ≤ aₙ₊₁ for all n (non-decreasing)

**Strictly Increasing:** aₙ < aₙ₊₁ for all n

**Monotonic Decreasing:** aₙ ≥ aₙ₊₁ for all n (non-increasing)

**Strictly Decreasing:** aₙ > aₙ₊₁ for all n

**Monotonic:** Either increasing or decreasing

### Testing for Monotonicity

**Method 1:** Compute aₙ₊₁ - aₙ
- If aₙ₊₁ - aₙ > 0, then increasing
- If aₙ₊₁ - aₙ < 0, then decreasing

**Method 2:** Compute aₙ₊₁/aₙ (for positive sequences)
- If aₙ₊₁/aₙ > 1, then increasing
- If aₙ₊₁/aₙ < 1, then decreasing

**Method 3:** Use derivative of f(x) where aₙ = f(n)
- If f'(x) > 0, then increasing
- If f'(x) < 0, then decreasing

### Example 11: Testing Monotonicity (Subtraction)

Show that aₙ = n/(n + 1) is increasing.

```
Method 1: aₙ₊₁ - aₙ

aₙ₊₁ = (n + 1)/(n + 2)

aₙ₊₁ - aₙ = (n + 1)/(n + 2) - n/(n + 1)
           = [(n + 1)² - n(n + 2)]/[(n + 2)(n + 1)]
           = [n² + 2n + 1 - n² - 2n]/[(n + 2)(n + 1)]
           = 1/[(n + 2)(n + 1)] > 0

Since aₙ₊₁ - aₙ > 0, the sequence is increasing.
```

### Example 12: Testing Monotonicity (Division)

Determine if aₙ = 1/2ⁿ is monotonic.

```
Method 2: aₙ₊₁/aₙ

aₙ₊₁/aₙ = [1/2^(n+1)]/[1/2ⁿ]
        = 2ⁿ/2^(n+1)
        = 1/2 < 1

Since aₙ₊₁/aₙ < 1, the sequence is decreasing.
```

### Example 13: Using Calculus

Show that aₙ = n/eⁿ is eventually decreasing.

```
Method 3: Let f(x) = x/e^x

f'(x) = (e^x - x·e^x)/(e^x)²
      = (1 - x)/e^x

f'(x) < 0 when 1 - x < 0, i.e., x > 1

So f is decreasing for x > 1, hence aₙ is decreasing for n ≥ 2.
```

---

## Bounded Sequences

### Definitions

**Bounded Above:** There exists M such that aₙ ≤ M for all n

**Bounded Below:** There exists m such that aₙ ≥ m for all n

**Bounded:** Both bounded above and bounded below

### Example 14: Identifying Bounds

Determine if aₙ = sin(n) is bounded.

```
We know: -1 ≤ sin(n) ≤ 1 for all n

The sequence is bounded below by -1 and above by 1.
Therefore, aₙ is bounded.
```

### Example 15: Unbounded Sequence

Show that aₙ = n² is unbounded.

```
For any proposed upper bound M, we can find n such that n² > M.

Specifically, choose n > √M, then n² > M.

Therefore, the sequence is unbounded (above).
```

### Example 16: Bounded but Divergent

Consider aₙ = (-1)ⁿ.

```
The sequence: -1, 1, -1, 1, -1, ...

This sequence is bounded: -1 ≤ aₙ ≤ 1

However, it does not converge (oscillates between -1 and 1).
```

---

## Monotonic Sequence Theorem

### The Theorem

**Monotonic Sequence Theorem:** Every bounded, monotonic sequence converges.

**Corollary:**
- If {aₙ} is increasing and bounded above, then it converges
- If {aₙ} is decreasing and bounded below, then it converges

### Example 17: Applying the Theorem

Show that aₙ = (1 + 1/n)ⁿ converges.

```
Step 1: Show monotonicity
Using calculus on f(x) = (1 + 1/x)^x, we can show this is increasing
(this requires logarithmic differentiation and is complex)

Step 2: Show boundedness
We can show that aₙ < 3 for all n (using binomial theorem)

By Monotonic Sequence Theorem, the sequence converges.
(The limit is e ≈ 2.718...)
```

### Example 18: Recursive Sequence

Let a₁ = 1 and aₙ₊₁ = √(2 + aₙ). Show that {aₙ} converges and find its limit.

```
Step 1: Show sequence is increasing
Claim: aₙ < aₙ₊₁

Proof by induction:
Base: a₁ = 1, a₂ = √3 ≈ 1.73, so a₁ < a₂ ✓

Inductive step: Assume aₖ < aₖ₊₁
Then 2 + aₖ < 2 + aₖ₊₁
So √(2 + aₖ) < √(2 + aₖ₊₁)
Therefore aₖ₊₁ < aₖ₊₂ ✓

Step 2: Show sequence is bounded above
Claim: aₙ < 2 for all n

Proof by induction:
Base: a₁ = 1 < 2 ✓

Inductive step: Assume aₖ < 2
Then 2 + aₖ < 4
So aₖ₊₁ = √(2 + aₖ) < 2 ✓

Step 3: Apply Monotonic Sequence Theorem
Since {aₙ} is increasing and bounded above, it converges to some limit L.

Step 4: Find the limit
Take limit of both sides of aₙ₊₁ = √(2 + aₙ):
L = √(2 + L)
L² = 2 + L
L² - L - 2 = 0
(L - 2)(L + 1) = 0

Since aₙ > 0, we have L = 2.
```

### Example 19: Proving Convergence

Let aₙ = n!/nⁿ. Determine if the sequence converges.

```
Test for monotonicity:

aₙ₊₁/aₙ = [(n+1)!/(n+1)^(n+1)] / [n!/nⁿ]
        = [(n+1)·n!/(n+1)^(n+1)] · [nⁿ/n!]
        = (n+1)/(n+1)^(n+1) · nⁿ
        = nⁿ/(n+1)ⁿ
        = [n/(n+1)]ⁿ
        = [1/(1 + 1/n)]ⁿ
        < 1

So the sequence is decreasing.

Also, aₙ > 0 for all n, so bounded below by 0.

By Monotonic Sequence Theorem, the sequence converges.

(The limit is 0, though proving this requires more work.)
```

---

## Applications and Special Sequences

### Fibonacci Sequence

```
F₁ = 1, F₂ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂

Sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...

The ratio Fₙ₊₁/Fₙ converges to φ = (1 + √5)/2 (golden ratio)
```

### Harmonic Numbers

```
Hₙ = 1 + 1/2 + 1/3 + ... + 1/n

This sequence diverges to infinity, but grows very slowly.
```

### Example 20: Population Model

A population model gives Pₙ₊₁ = rPₙ(1 - Pₙ) where P₀ = 0.1 and r = 2.8.

```
This is the logistic map, which can exhibit chaotic behavior.

For r = 2.8:
P₁ = 2.8(0.1)(0.9) = 0.252
P₂ = 2.8(0.252)(0.748) ≈ 0.528
P₃ ≈ 0.699
...

For this value of r, the sequence converges to approximately 0.642.
```

---

## Key Formulas and Reference

### Convergence Tests

```
A sequence {aₙ} converges to L if:
lim(n→∞) aₙ = L

Common limits:
lim(n→∞) 1/nᵖ = 0  (p > 0)
lim(n→∞) rⁿ = 0  (|r| < 1)
lim(n→∞) (1 + 1/n)ⁿ = e
```

### Monotonicity Tests

```
Increasing: aₙ₊₁ - aₙ > 0 or aₙ₊₁/aₙ > 1
Decreasing: aₙ₊₁ - aₙ < 0 or aₙ₊₁/aₙ < 1
```

### Monotonic Sequence Theorem

```
If {aₙ} is monotonic and bounded, then {aₙ} converges.
```

### Squeeze Theorem for Sequences

```
If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L,
then lim bₙ = L
```

---

**Next Unit:** Unit 5 - Infinite Series
