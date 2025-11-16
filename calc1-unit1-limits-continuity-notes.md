# Calculus 1 - Unit 1: Limits and Continuity - Notes

## Table of Contents
1. [Introduction to Limits](#introduction-to-limits)
2. [Computing Limits](#computing-limits)
3. [One-Sided Limits](#one-sided-limits)
4. [Infinite Limits](#infinite-limits)
5. [Limits at Infinity](#limits-at-infinity)
6. [Continuity](#continuity)
7. [Intermediate Value Theorem](#intermediate-value-theorem)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding limits conceptually and graphically**
- **Computing limits using algebraic techniques**
- **Analyzing continuity of functions**
- **Applying the Intermediate Value Theorem**

---

## Essential Questions
- What does it mean for a function to approach a value?
- How do we determine if a function is continuous?
- Why are limits fundamental to calculus?

---

## Introduction to Limits

### What is a Limit?

**Informal Definition:** The limit of f(x) as x approaches c is L if we can make f(x) arbitrarily close to L by taking x sufficiently close to c (but not equal to c).

**Notation:**
```
lim[x→c] f(x) = L
```

**Key Insight:** A limit describes the *behavior* of a function near a point, not necessarily *at* the point.

### Example 1: Understanding Limits Graphically

Consider f(x) = (x² - 4)/(x - 2)

Notice that f(2) is undefined (division by zero), but we can still ask: what happens as x gets close to 2?

```
x → 2⁻ (from left)    x → 2⁺ (from right)
x = 1.9: f(1.9) = 3.9    x = 2.1: f(2.1) = 4.1
x = 1.99: f(1.99) = 3.99    x = 2.01: f(2.01) = 4.01
x = 1.999: f(1.999) = 3.999    x = 2.001: f(2.001) = 4.001
```

**Conclusion:** lim[x→2] (x² - 4)/(x - 2) = 4

---

## Computing Limits

### Method 1: Direct Substitution

If f(x) is continuous at x = c, then lim[x→c] f(x) = f(c)

**Example 2:**
```
lim[x→3] (2x² + 5x - 1)
= 2(3)² + 5(3) - 1
= 18 + 15 - 1
= 32
```

### Method 2: Factoring (for indeterminate forms 0/0)

**Example 3:**
```
lim[x→2] (x² - 4)/(x - 2)
= lim[x→2] [(x - 2)(x + 2)]/(x - 2)
= lim[x→2] (x + 2)    [Cancel common factor]
= 4
```

### Method 3: Rationalizing

**Example 4:**
```
lim[x→0] (√(x + 4) - 2)/x

Multiply by conjugate:
= lim[x→0] [(√(x + 4) - 2)/x] · [(√(x + 4) + 2)/(√(x + 4) + 2)]
= lim[x→0] [(x + 4 - 4)]/[x(√(x + 4) + 2)]
= lim[x→0] x/[x(√(x + 4) + 2)]
= lim[x→0] 1/(√(x + 4) + 2)
= 1/4
```

### Method 4: Finding Common Denominator

**Example 5:**
```
lim[x→0] (1/(x + 2) - 1/2)/x
= lim[x→0] [(2 - (x + 2))/(2(x + 2))]/x
= lim[x→0] [-x/(2(x + 2))]/x
= lim[x→0] -1/(2(x + 2))
= -1/4
```

---

## Limit Laws

If lim[x→c] f(x) = L and lim[x→c] g(x) = M, then:

1. **Sum Rule:** lim[x→c] [f(x) + g(x)] = L + M
2. **Difference Rule:** lim[x→c] [f(x) - g(x)] = L - M
3. **Product Rule:** lim[x→c] [f(x) · g(x)] = L · M
4. **Constant Multiple Rule:** lim[x→c] [k · f(x)] = k · L
5. **Quotient Rule:** lim[x→c] [f(x)/g(x)] = L/M (if M ≠ 0)
6. **Power Rule:** lim[x→c] [f(x)]ⁿ = Lⁿ

---

## One-Sided Limits

### Left-Hand Limit
```
lim[x→c⁻] f(x) = L
```
The limit as x approaches c from the left (values less than c)

### Right-Hand Limit
```
lim[x→c⁺] f(x) = L
```
The limit as x approaches c from the right (values greater than c)

### Existence of Limits

**Theorem:** lim[x→c] f(x) = L if and only if:
```
lim[x→c⁻] f(x) = lim[x→c⁺] f(x) = L
```

**Example 6:** Piecewise Function

Let f(x) = {x² if x < 1; 2x if x ≥ 1}

Find lim[x→1] f(x)

```
Left-hand limit: lim[x→1⁻] f(x) = lim[x→1⁻] x² = 1
Right-hand limit: lim[x→1⁺] f(x) = lim[x→1⁺] 2x = 2
```

Since 1 ≠ 2, **lim[x→1] f(x) does not exist**

---

## Infinite Limits

### Vertical Asymptotes

**Definition:** lim[x→c] f(x) = ∞ means f(x) increases without bound as x approaches c

**Example 7:**
```
lim[x→0⁺] 1/x² = ∞
lim[x→0⁻] 1/x² = ∞
lim[x→0] 1/x² = ∞
```

The function has a vertical asymptote at x = 0

**Example 8:**
```
lim[x→2⁺] 1/(x - 2) = ∞
lim[x→2⁻] 1/(x - 2) = -∞
```

The limit does not exist (different one-sided limits)

---

## Limits at Infinity

### Horizontal Asymptotes

**Definition:** lim[x→∞] f(x) = L means f(x) approaches L as x increases without bound

**Example 9:** Rational Functions

```
lim[x→∞] (3x² + 2x - 1)/(x² - 5)

Divide numerator and denominator by highest power of x:
= lim[x→∞] (3 + 2/x - 1/x²)/(1 - 5/x²)
= (3 + 0 - 0)/(1 - 0)
= 3
```

**Horizontal asymptote:** y = 3

### Rules for Rational Functions

For f(x) = (aₙxⁿ + ...)/(bₘxᵐ + ...):

1. **If n < m:** lim[x→∞] f(x) = 0
2. **If n = m:** lim[x→∞] f(x) = aₙ/bₘ
3. **If n > m:** lim[x→∞] f(x) = ±∞

**Example 10:**
```
lim[x→∞] (2x³ - x)/(5x⁴ + 3)
```
Since degree of numerator (3) < degree of denominator (4):
```
lim[x→∞] (2x³ - x)/(5x⁴ + 3) = 0
```

---

## Continuity

### Definition of Continuity

A function f is **continuous at x = c** if:

1. f(c) exists
2. lim[x→c] f(x) exists
3. lim[x→c] f(x) = f(c)

**All three conditions must be satisfied!**

### Example 11: Testing Continuity

Is f(x) = (x² - 9)/(x - 3) continuous at x = 3?

```
1. f(3) = (9 - 9)/(3 - 3) = 0/0 → undefined ✗
```

Since f(3) doesn't exist, f is **not continuous** at x = 3

### Example 12: Making a Function Continuous

Define f(x) = {(x² - 9)/(x - 3) if x ≠ 3; k if x = 3}

What value of k makes f continuous at x = 3?

```
lim[x→3] (x² - 9)/(x - 3)
= lim[x→3] (x - 3)(x + 3)/(x - 3)
= lim[x→3] (x + 3)
= 6
```

For continuity: f(3) = lim[x→3] f(x)
Therefore: **k = 6**

---

## Types of Discontinuities

### 1. Removable Discontinuity
- Limit exists, but f(c) is undefined or doesn't equal the limit
- Can be "fixed" by redefining f(c)
- Example: f(x) = (x² - 4)/(x - 2) at x = 2

### 2. Jump Discontinuity
- Left and right limits exist but are not equal
- Cannot be fixed
- Example: Piecewise functions with different formulas

### 3. Infinite Discontinuity
- Function approaches ±∞
- Vertical asymptote
- Example: f(x) = 1/x at x = 0

---

## Properties of Continuous Functions

If f and g are continuous at x = c, then so are:

1. f + g
2. f - g
3. f · g
4. f/g (if g(c) ≠ 0)
5. k · f (for any constant k)

### Continuous Function Types

**Always continuous everywhere:**
- Polynomials
- Sine and cosine
- Exponential functions (eˣ)

**Continuous on their domains:**
- Rational functions (except where denominator = 0)
- Tangent and secant (except where cos x = 0)
- Logarithmic functions (x > 0)
- Root functions (√x for x ≥ 0)

---

## Intermediate Value Theorem

**Theorem:** If f is continuous on [a, b] and N is any number between f(a) and f(b), then there exists at least one number c in (a, b) such that f(c) = N.

**Interpretation:** A continuous function must take on every value between f(a) and f(b)

### Example 13: Proving a Root Exists

Show that f(x) = x³ - 2x - 5 has a root in the interval [2, 3]

```
f(2) = 8 - 4 - 5 = -1 < 0
f(3) = 27 - 6 - 5 = 16 > 0

Since f is continuous (polynomial) and 0 is between f(2) and f(3),
by IVT there exists c in (2, 3) such that f(c) = 0
```

### Example 14: Application

A runner starts a race at 0 mph and finishes at 15 mph. Prove that at some point, the runner was traveling exactly 10 mph.

```
Let v(t) = velocity at time t

Given: v(0) = 0, v(T) = 15 for some time T
Velocity is continuous

Since 10 is between 0 and 15, by IVT there exists
a time c where v(c) = 10 mph
```

---

## Squeeze Theorem

**Theorem:** If g(x) ≤ f(x) ≤ h(x) for all x near c (except possibly at c), and
```
lim[x→c] g(x) = lim[x→c] h(x) = L
```
Then lim[x→c] f(x) = L

### Example 15: Classic Application

Find lim[x→0] x² sin(1/x)

```
We know: -1 ≤ sin(1/x) ≤ 1

Multiply by x²: -x² ≤ x² sin(1/x) ≤ x²

Taking limits:
lim[x→0] (-x²) = 0
lim[x→0] x² = 0

By Squeeze Theorem: lim[x→0] x² sin(1/x) = 0
```

---

## Common Limit Forms

### Important Limits to Memorize

1. **Trigonometric:**
   ```
   lim[x→0] sin(x)/x = 1
   lim[x→0] (1 - cos(x))/x = 0
   lim[x→0] (1 - cos(x))/x² = 1/2
   ```

2. **Exponential:**
   ```
   lim[x→0] (eˣ - 1)/x = 1
   ```

3. **Power:**
   ```
   lim[x→∞] (1 + 1/x)ˣ = e
   ```

### Example 16: Using sin(x)/x

```
lim[x→0] sin(3x)/x
= lim[x→0] 3·sin(3x)/(3x)
= 3·lim[u→0] sin(u)/u  [where u = 3x]
= 3·1
= 3
```

### Example 17: More Complex

```
lim[x→0] (1 - cos(x))/x²
= lim[x→0] (1 - cos(x))/x² · (1 + cos(x))/(1 + cos(x))
= lim[x→0] (1 - cos²(x))/(x²(1 + cos(x)))
= lim[x→0] sin²(x)/(x²(1 + cos(x)))
= lim[x→0] [sin(x)/x]² · 1/(1 + cos(x))
= 1² · 1/2
= 1/2
```

---

## Practice Problems Preview

The practice problems will cover:
- Computing limits using various techniques
- Identifying discontinuities
- Analyzing piecewise functions
- Applying the Intermediate Value Theorem
- Using the Squeeze Theorem
- Finding horizontal and vertical asymptotes

---

## Key Formulas and Reference

### Limit Laws
```
lim[x→c] [f(x) ± g(x)] = lim[x→c] f(x) ± lim[x→c] g(x)
lim[x→c] [f(x) · g(x)] = lim[x→c] f(x) · lim[x→c] g(x)
lim[x→c] [f(x)/g(x)] = lim[x→c] f(x) / lim[x→c] g(x)  (if limit of g ≠ 0)
```

### Special Limits
```
lim[x→0] sin(x)/x = 1
lim[x→0] (1 - cos(x))/x² = 1/2
lim[x→∞] (1 + 1/x)ˣ = e
```

### Continuity Checklist
1. f(c) exists
2. lim[x→c] f(x) exists
3. lim[x→c] f(x) = f(c)

### Horizontal Asymptote Rules
- Degree num < degree den: y = 0
- Degree num = degree den: y = ratio of leading coefficients
- Degree num > degree den: No horizontal asymptote

---

**Next Unit:** Unit 2 - Derivatives: Basic Rules and Techniques
