# Calculus 2 - Unit 6: Power Series - Notes

## Table of Contents
1. [Introduction to Power Series](#introduction-to-power-series)
2. [Radius and Interval of Convergence](#radius-and-interval-of-convergence)
3. [Representing Functions as Power Series](#representing-functions-as-power-series)
4. [Taylor and Maclaurin Series](#taylor-and-maclaurin-series)
5. [Applications of Taylor Series](#applications-of-taylor-series)
6. [Operations with Power Series](#operations-with-power-series)
7. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understand power series and their convergence**
- **Find radius and interval of convergence**
- **Derive Taylor and Maclaurin series**
- **Use power series to approximate functions**
- **Apply series to solve calculus problems**

---

## Essential Questions
- What is a power series and how does it converge?
- How do we represent functions as power series?
- What is the radius of convergence?
- How accurate are Taylor polynomial approximations?

---

## Introduction to Power Series

### Definition

**Power Series:** A series of the form
```
Σ(n=0 to ∞) cₙ(x - a)ⁿ = c₀ + c₁(x - a) + c₂(x - a)² + ...
```

where:
- cₙ are coefficients
- a is the center
- x is the variable

**Power Series Centered at 0 (Maclaurin Series):**
```
Σ(n=0 to ∞) cₙxⁿ = c₀ + c₁x + c₂x² + ...
```

### Example 1: Geometric Power Series

The geometric series is a power series:
```
Σ(n=0 to ∞) xⁿ = 1 + x + x² + x³ + ...

Converges to 1/(1 - x) for |x| < 1
```

### Example 2: Writing a Power Series

Write out the first four terms of Σ(n=0 to ∞) (x - 2)ⁿ/n!.

```
n = 0: (x - 2)⁰/0! = 1
n = 1: (x - 2)¹/1! = (x - 2)
n = 2: (x - 2)²/2! = (x - 2)²/2
n = 3: (x - 2)³/3! = (x - 2)³/6

Series: 1 + (x - 2) + (x - 2)²/2 + (x - 2)³/6 + ...
```

---

## Radius and Interval of Convergence

### Theorem on Convergence

For a power series Σcₙ(x - a)ⁿ, exactly one of the following is true:

1. **Series converges only at x = a** (R = 0)
2. **Series converges for all x** (R = ∞)
3. **Series converges for |x - a| < R** (finite R > 0)

where R is the **radius of convergence**.

### Finding Radius of Convergence

**Use the Ratio Test:**
```
L = lim(n→∞) |cₙ₊₁(x - a)^(n+1)|/|cₙ(x - a)ⁿ|
  = |x - a| · lim(n→∞) |cₙ₊₁/cₙ|
```

For convergence, need L < 1:
```
|x - a| < 1/lim|cₙ₊₁/cₙ| = R
```

### Example 3: Finding Radius of Convergence

Find the radius of convergence for Σ(n=1 to ∞) xⁿ/n.

```
Using Ratio Test:
L = lim(n→∞) |x^(n+1)/(n+1)| / |xⁿ/n|
  = |x| · lim(n→∞) n/(n+1)
  = |x| · 1
  = |x|

For convergence: |x| < 1
Therefore: R = 1
```

### Interval of Convergence

**Steps:**
1. Find R using Ratio Test
2. Interval is (a - R, a + R)
3. Test endpoints x = a - R and x = a + R separately

### Example 4: Interval of Convergence

Find the interval of convergence for Σ(n=1 to ∞) xⁿ/n.

```
From Example 3: R = 1, so test interval (-1, 1)

Test x = -1:
Σ(-1)ⁿ/n converges (alternating harmonic series) ✓

Test x = 1:
Σ1/n diverges (harmonic series) ✗

Interval of convergence: [-1, 1)
```

### Example 5: Power Series Centered at a ≠ 0

Find the radius and interval of convergence for Σ(n=0 to ∞) (x - 3)ⁿ/2ⁿ.

```
Ratio Test:
L = |(x - 3)^(n+1)/2^(n+1)| / |(x - 3)ⁿ/2ⁿ|
  = |x - 3|/2

For convergence: |x - 3|/2 < 1
                 |x - 3| < 2
R = 2

Interval: (3 - 2, 3 + 2) = (1, 5)

Test x = 1: Σ(-2)ⁿ/2ⁿ = Σ(-1)ⁿ diverges
Test x = 5: Σ2ⁿ/2ⁿ = Σ1 diverges

Interval of convergence: (1, 5)
```

---

## Representing Functions as Power Series

### Using Geometric Series

**Key Identity:**
```
1/(1 - x) = Σ(n=0 to ∞) xⁿ for |x| < 1
```

### Example 6: Direct Substitution

Find a power series for 1/(1 + x²).

```
1/(1 + x²) = 1/(1 - (-x²))

Let u = -x²:
= Σ(n=0 to ∞) uⁿ
= Σ(n=0 to ∞) (-x²)ⁿ
= Σ(n=0 to ∞) (-1)ⁿx^(2n)

Converges for |x²| < 1, i.e., |x| < 1
```

### Example 7: Algebraic Manipulation

Find a power series for x/(1 - 2x).

```
x/(1 - 2x) = x · 1/(1 - 2x)
           = x · Σ(n=0 to ∞) (2x)ⁿ
           = Σ(n=0 to ∞) 2ⁿxⁿ · x
           = Σ(n=0 to ∞) 2ⁿx^(n+1)
           = Σ(n=1 to ∞) 2^(n-1)xⁿ

Converges for |2x| < 1, i.e., |x| < 1/2
```

### Differentiation and Integration

**Theorem:** If f(x) = Σcₙ(x - a)ⁿ with radius R, then:

**Derivative:**
```
f'(x) = Σ(n=1 to ∞) ncₙ(x - a)^(n-1)
```

**Integral:**
```
∫f(x)dx = C + Σ(n=0 to ∞) cₙ(x - a)^(n+1)/(n+1)
```

Both have the same radius of convergence R.

### Example 8: Finding Series by Differentiation

Find a power series for 1/(1 - x)².

```
We know: 1/(1 - x) = Σ(n=0 to ∞) xⁿ

Differentiate both sides:
d/dx[1/(1 - x)] = d/dx[Σxⁿ]

1/(1 - x)² = Σ(n=1 to ∞) nxⁿ⁻¹
           = Σ(n=0 to ∞) (n+1)xⁿ
```

### Example 9: Finding Series by Integration

Find a power series for ln(1 + x).

```
Start with: 1/(1 + x) = Σ(n=0 to ∞) (-1)ⁿxⁿ for |x| < 1

Integrate both sides:
ln(1 + x) = ∫ 1/(1 + x) dx
          = C + Σ(n=0 to ∞) (-1)ⁿxⁿ⁺¹/(n+1)

At x = 0: ln(1) = 0 = C
Therefore: C = 0

ln(1 + x) = Σ(n=0 to ∞) (-1)ⁿxⁿ⁺¹/(n+1)
          = Σ(n=1 to ∞) (-1)ⁿ⁻¹xⁿ/n
```

---

## Taylor and Maclaurin Series

### Taylor Series

**Definition:** The Taylor series for f(x) centered at x = a is:
```
f(x) = Σ(n=0 to ∞) f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

     = f(a) + f'(a)(x - a) + f''(a)(x - a)²/2! + ...
```

### Maclaurin Series

**Maclaurin Series** (Taylor series centered at a = 0):
```
f(x) = Σ(n=0 to ∞) f⁽ⁿ⁾(0)/n! · xⁿ

     = f(0) + f'(0)x + f''(0)x²/2! + ...
```

### Example 10: Maclaurin Series for e^x

Find the Maclaurin series for e^x.

```
f(x) = e^x
f'(x) = e^x
f''(x) = e^x
...
f⁽ⁿ⁾(x) = e^x

At x = 0: f⁽ⁿ⁾(0) = e⁰ = 1 for all n

e^x = Σ(n=0 to ∞) 1/n! · xⁿ
    = 1 + x + x²/2! + x³/3! + ...

This converges for all x (R = ∞)
```

### Example 11: Maclaurin Series for sin(x)

Find the Maclaurin series for sin(x).

```
f(x) = sin(x)     → f(0) = 0
f'(x) = cos(x)    → f'(0) = 1
f''(x) = -sin(x)  → f''(0) = 0
f'''(x) = -cos(x) → f'''(0) = -1
f⁽⁴⁾(x) = sin(x)  → f⁽⁴⁾(0) = 0

Pattern: 0, 1, 0, -1, 0, 1, 0, -1, ...

sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ...
       = Σ(n=0 to ∞) (-1)ⁿx^(2n+1)/(2n+1)!
```

### Example 12: Maclaurin Series for cos(x)

Find the Maclaurin series for cos(x).

```
f(x) = cos(x)     → f(0) = 1
f'(x) = -sin(x)   → f'(0) = 0
f''(x) = -cos(x)  → f''(0) = -1
f'''(x) = sin(x)  → f'''(0) = 0
f⁽⁴⁾(x) = cos(x)  → f⁽⁴⁾(0) = 1

cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ...
       = Σ(n=0 to ∞) (-1)ⁿx^(2n)/(2n)!
```

### Important Maclaurin Series

```
e^x = Σ xⁿ/n!                     (all x)

sin(x) = Σ (-1)ⁿx^(2n+1)/(2n+1)!  (all x)

cos(x) = Σ (-1)ⁿx^(2n)/(2n)!      (all x)

1/(1-x) = Σ xⁿ                    (|x| < 1)

ln(1+x) = Σ (-1)ⁿ⁻¹xⁿ/n          (|x| < 1)

(1+x)^k = Σ (k choose n)xⁿ        (binomial series)
```

---

## Applications of Taylor Series

### Taylor Polynomials

**n-th degree Taylor polynomial:**
```
Tₙ(x) = Σ(k=0 to n) f⁽ᵏ⁾(a)/k! · (x - a)ᵏ
```

### Example 13: Approximating Functions

Find T₃(x) for f(x) = e^x centered at x = 0.

```
T₃(x) = f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3!
      = 1 + x + x²/2 + x³/6

This approximates e^x for x near 0.
```

### Taylor's Remainder Theorem

**Remainder:** Rₙ(x) = f(x) - Tₙ(x)

**Lagrange Form:**
```
Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n+1)! · (x - a)ⁿ⁺¹
```
for some c between a and x.

### Example 14: Error Estimation

Estimate the error when approximating e^(0.5) using T₃(x).

```
T₃(0.5) = 1 + 0.5 + (0.5)²/2 + (0.5)³/6
        = 1 + 0.5 + 0.125 + 0.0208...
        ≈ 1.6458

For f(x) = e^x, f⁽⁴⁾(x) = e^x

|R₃(0.5)| = |e^c · (0.5)⁴/4!| for some c ∈ (0, 0.5)

Since e^c < e^(0.5) < e < 3:
|R₃(0.5)| < 3 · (0.0625)/24 < 0.008

True value: e^(0.5) ≈ 1.6487
Error: |1.6487 - 1.6458| ≈ 0.003 ✓
```

---

## Operations with Power Series

### Addition and Subtraction

```
If f(x) = Σaₙxⁿ and g(x) = Σbₙxⁿ, then:
f(x) ± g(x) = Σ(aₙ ± bₙ)xⁿ
```

### Multiplication

```
(Σaₙxⁿ)(Σbₙxⁿ) = Σcₙxⁿ where cₙ = Σ(k=0 to n) aₖbₙ₋ₖ
```

### Example 15: Product of Series

Find the first three terms of e^x · sin(x).

```
e^x = 1 + x + x²/2 + x³/6 + ...
sin(x) = x - x³/6 + ...

Multiply:
e^x · sin(x) = (1 + x + x²/2 + ...)(x - x³/6 + ...)

x⁰ term: 0
x¹ term: 1·x = x
x² term: 1·0 + x·x = x²
x³ term: 1·(-x³/6) + x·0 + (x²/2)·x = -x³/6 + x³/2 = x³/3

e^x · sin(x) = x + x² + x³/3 + ...
```

---

## Key Formulas and Reference

### Power Series Basics

```
General form: Σ cₙ(x - a)ⁿ

Radius of convergence: Use Ratio Test
Interval: Test endpoints separately
```

### Common Maclaurin Series

```
e^x = 1 + x + x²/2! + x³/3! + ... (R = ∞)

sin(x) = x - x³/3! + x⁵/5! - ... (R = ∞)

cos(x) = 1 - x²/2! + x⁴/4! - ... (R = ∞)

1/(1-x) = 1 + x + x² + x³ + ... (R = 1)

ln(1+x) = x - x²/2 + x³/3 - ... (R = 1)

arctan(x) = x - x³/3 + x⁵/5 - ... (R = 1)
```

### Taylor Series

```
f(x) = Σ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

Remainder: Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n+1)! · (x - a)ⁿ⁺¹
```

---

**Next Unit:** Unit 7 - Differential Equations
