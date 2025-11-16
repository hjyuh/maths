# Algebra 2 Unit 5: Polynomial Functions - Comprehensive Notes

## Table of Contents
1. [Understanding Polynomial Functions](#understanding-polynomial-functions)
2. [End Behavior and Leading Coefficient](#end-behavior-and-leading-coefficient)
3. [Zeros and Factoring Polynomials](#zeros-and-factoring-polynomials)
4. [Polynomial Division](#polynomial-division)
5. [Remainder and Factor Theorems](#remainder-and-factor-theorems)
6. [Rational Root Theorem](#rational-root-theorem)
7. [Fundamental Theorem of Algebra](#fundamental-theorem-of-algebra)
8. [Graphing Polynomial Functions](#graphing-polynomial-functions)

---

## Understanding Polynomial Functions

### Definition

A **polynomial function** has the form:

**f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀**

Where:
- **n** is a non-negative integer (the degree)
- **aₙ, aₙ₋₁, ..., a₀** are real number coefficients
- **aₙ ≠ 0** (leading coefficient)

**Key Terms:**
- **Degree:** The highest power of x (n)
- **Leading coefficient:** The coefficient of the highest power term (aₙ)
- **Constant term:** The term without x (a₀)

**Example 1:** Identify the degree, leading coefficient, and constant term:

f(x) = 3x⁴ - 2x³ + 5x - 7

- Degree: 4
- Leading coefficient: 3
- Constant term: -7

**Example 2:** f(x) = -x⁵ + 2x² + 1

- Degree: 5
- Leading coefficient: -1
- Constant term: 1

### Types of Polynomials by Degree

| Degree | Name | General Form | Example |
|--------|------|--------------|---------|
| 0 | Constant | f(x) = a | f(x) = 5 |
| 1 | Linear | f(x) = ax + b | f(x) = 2x + 3 |
| 2 | Quadratic | f(x) = ax² + bx + c | f(x) = x² - 4 |
| 3 | Cubic | f(x) = ax³ + ... | f(x) = x³ - 2x |
| 4 | Quartic | f(x) = ax⁴ + ... | f(x) = x⁴ + x² |
| 5 | Quintic | f(x) = ax⁵ + ... | f(x) = x⁵ - 1 |

### Adding and Subtracting Polynomials

Combine like terms (same power of x).

**Example 3:** Add (3x³ + 2x² - 5) + (x³ - 4x² + 2x + 1)

```
= (3x³ + x³) + (2x² - 4x²) + 2x + (-5 + 1)
= 4x³ - 2x² + 2x - 4
```

**Example 4:** Subtract (2x⁴ + 3x - 1) - (x⁴ - 2x² + 3x)

```
= 2x⁴ + 3x - 1 - x⁴ + 2x² - 3x
= (2x⁴ - x⁴) + 2x² + (3x - 3x) - 1
= x⁴ + 2x² - 1
```

### Multiplying Polynomials

Use distributive property (FOIL for binomials, or distribute each term).

**Example 5:** Multiply (x + 2)(x² - 3x + 4)

```
= x(x² - 3x + 4) + 2(x² - 3x + 4)
= x³ - 3x² + 4x + 2x² - 6x + 8
= x³ - x² - 2x + 8
```

**Example 6:** Multiply (2x - 1)(x + 3)(x - 4)

```
First multiply (2x - 1)(x + 3):
= 2x² + 6x - x - 3
= 2x² + 5x - 3

Then multiply by (x - 4):
(2x² + 5x - 3)(x - 4)
= 2x³ - 8x² + 5x² - 20x - 3x + 12
= 2x³ - 3x² - 23x + 12
```

---

## End Behavior and Leading Coefficient

**End behavior** describes what happens to f(x) as x approaches positive or negative infinity.

### Rules for End Behavior

The end behavior depends on two things:
1. **Degree** (even or odd)
2. **Leading coefficient** (positive or negative)

| Degree | Leading Coeff | Left End | Right End | Shape |
|--------|---------------|----------|-----------|--------|
| Even | Positive (+) | Up ↑ | Up ↑ | U-shape |
| Even | Negative (−) | Down ↓ | Down ↓ | ∩-shape |
| Odd | Positive (+) | Down ↓ | Up ↑ | /-shape |
| Odd | Negative (−) | Up ↑ | Down ↓ | \\-shape |

**Example 7:** Describe the end behavior of f(x) = 2x⁴ - 3x² + 1

```
Degree: 4 (even)
Leading coefficient: 2 (positive)

As x → -∞, f(x) → +∞
As x → +∞, f(x) → +∞
```

**Example 8:** Describe the end behavior of f(x) = -x⁵ + 2x³ - x

```
Degree: 5 (odd)
Leading coefficient: -1 (negative)

As x → -∞, f(x) → +∞
As x → +∞, f(x) → -∞
```

---

## Zeros and Factoring Polynomials

### Zeros (Roots)

A **zero** of a function is a value of x where f(x) = 0.

**Graphically:** Zeros are x-intercepts (where the graph crosses the x-axis)

**Algebraically:** Solutions to f(x) = 0

**Example 9:** Find the zeros of f(x) = x² - 5x + 6

```
x² - 5x + 6 = 0
(x - 2)(x - 3) = 0
x = 2 or x = 3

Zeros: x = 2, x = 3
```

### Multiplicity

The **multiplicity** of a zero is how many times that factor appears.

**Example:** f(x) = (x - 2)³(x + 1)²

- Zero at x = 2 with multiplicity 3
- Zero at x = -1 with multiplicity 2

**Behavior at zeros:**
- **Odd multiplicity:** Graph crosses the x-axis
- **Even multiplicity:** Graph touches the x-axis but doesn't cross (bounces)

### Factoring Techniques

**1. Greatest Common Factor (GCF)**

**Example 10:** Factor 3x³ + 6x²

```
= 3x²(x + 2)
```

**2. Grouping**

**Example 11:** Factor x³ + 3x² + 2x + 6

```
= x²(x + 3) + 2(x + 3)
= (x² + 2)(x + 3)
```

**3. Special Patterns**

**Difference of squares:** a² - b² = (a - b)(a + b)

**Example 12:** Factor x⁴ - 16

```
= (x²)² - 4²
= (x² - 4)(x² + 4)
= (x - 2)(x + 2)(x² + 4)
```

**Sum/difference of cubes:**
- a³ + b³ = (a + b)(a² - ab + b²)
- a³ - b³ = (a - b)(a² + ab + b²)

**Example 13:** Factor x³ + 8

```
= x³ + 2³
= (x + 2)(x² - 2x + 4)
```

**Example 14:** Factor x³ - 27

```
= x³ - 3³
= (x - 3)(x² + 3x + 9)
```

---

## Polynomial Division

### Long Division

Similar to numeric long division, but with polynomials.

**Example 15:** Divide (2x³ + 3x² - 5x + 1) ÷ (x + 2)

```
       2x² - x - 3
      _______________
x + 2 | 2x³ + 3x² - 5x + 1
        2x³ + 4x²
        __________
             -x² - 5x
             -x² - 2x
             ________
                 -3x + 1
                 -3x - 6
                 _______
                      7

Answer: 2x² - x - 3 + 7/(x + 2)
```

Or: **Quotient = 2x² - x - 3, Remainder = 7**

### Synthetic Division

A shortcut method when dividing by (x - c).

**Steps:**
1. Write c (the zero of the divisor)
2. Write coefficients of dividend
3. Bring down first coefficient
4. Multiply by c, add to next coefficient
5. Repeat

**Example 16:** Divide (x³ - 4x² + 5x - 2) ÷ (x - 2) using synthetic division

```
      2 |  1  -4   5  -2
        |     2  -4   2
        |________________
           1  -2   1   0

Quotient: x² - 2x + 1
Remainder: 0
```

**Example 17:** Divide (3x³ + 2x - 5) ÷ (x + 1)

```
Note: Missing x² term, use 0 as coefficient
      -1 |  3   0   2  -5
         |    -3   3  -5
         |________________
            3  -3   5  -10

Quotient: 3x² - 3x + 5
Remainder: -10
```

---

## Remainder and Factor Theorems

### Remainder Theorem

When polynomial f(x) is divided by (x - c), the remainder is f(c).

**Example 18:** Find the remainder when f(x) = x³ - 2x² + 3x - 5 is divided by (x - 2).

```
By Remainder Theorem, remainder = f(2)

f(2) = 2³ - 2(2²) + 3(2) - 5
     = 8 - 8 + 6 - 5
     = 1

Remainder = 1
```

### Factor Theorem

**(x - c) is a factor of f(x)** if and only if **f(c) = 0**

**Example 19:** Determine if (x - 3) is a factor of f(x) = x³ - 6x² + 11x - 6

```
Check if f(3) = 0:

f(3) = 3³ - 6(3²) + 11(3) - 6
     = 27 - 54 + 33 - 6
     = 0

Since f(3) = 0, (x - 3) IS a factor
```

**Example 20:** Is (x + 2) a factor of f(x) = x³ + x² - 5x + 3?

```
Check if f(-2) = 0:

f(-2) = (-2)³ + (-2)² - 5(-2) + 3
      = -8 + 4 + 10 + 3
      = 9 ≠ 0

Since f(-2) ≠ 0, (x + 2) is NOT a factor
```

---

## Rational Root Theorem

The **Rational Root Theorem** gives possible rational zeros of a polynomial.

### The Theorem

If f(x) = aₙxⁿ + ... + a₀ has integer coefficients, then any rational zero p/q (in lowest terms) must have:
- **p** is a factor of the constant term (a₀)
- **q** is a factor of the leading coefficient (aₙ)

**Possible rational roots = ±(factors of a₀)/(factors of aₙ)**

**Example 21:** List possible rational zeros of f(x) = 2x³ - 5x² + x + 2

```
Constant term a₀ = 2: factors are ±1, ±2
Leading coefficient aₙ = 2: factors are ±1, ±2

Possible rational zeros:
±1/1, ±2/1, ±1/2, ±2/2

Simplified: ±1, ±2, ±1/2
```

**Example 22:** Find all zeros of f(x) = x³ - 6x² + 11x - 6

```
Possible rational zeros: ±1, ±2, ±3, ±6

Test f(1): 1 - 6 + 11 - 6 = 0 ✓

So (x - 1) is a factor. Use synthetic division:

      1 |  1  -6  11  -6
        |     1  -5   6
        |_______________
           1  -5   6   0

f(x) = (x - 1)(x² - 5x + 6)
     = (x - 1)(x - 2)(x - 3)

Zeros: x = 1, 2, 3
```

**Example 23:** Find all real zeros of f(x) = 2x³ + 3x² - 8x + 3

```
Possible rational zeros: ±1, ±3, ±1/2, ±3/2

Test f(1): 2 + 3 - 8 + 3 = 0 ✓

Synthetic division by (x - 1):
      1 |  2   3  -8   3
        |     2   5  -3
        |_______________
           2   5  -3   0

f(x) = (x - 1)(2x² + 5x - 3)
     = (x - 1)(2x - 1)(x + 3)

Zeros: x = 1, x = 1/2, x = -3
```

---

## Fundamental Theorem of Algebra

### The Theorem

A polynomial of degree n has exactly **n complex zeros** (counting multiplicity).

**Example:** f(x) = x⁴ - 1 has degree 4, so it has exactly 4 zeros (counting multiplicity)

```
x⁴ - 1 = 0
(x² - 1)(x² + 1) = 0
(x - 1)(x + 1)(x² + 1) = 0

x = 1, x = -1, x = i, x = -i

Four zeros total (all simple)
```

### Complex Conjugate Theorem

If a polynomial has real coefficients and a + bi is a zero, then **a - bi is also a zero**.

Complex zeros come in conjugate pairs!

**Example 24:** A polynomial with real coefficients has zeros 2, 3 + i. What are all the zeros?

```
Since 3 + i is a zero, 3 - i must also be a zero.

All zeros: 2, 3 + i, 3 - i
```

**Example 25:** Write a polynomial with zeros 1, -2, and 4i.

```
If 4i is a zero, then -4i must also be a zero.

f(x) = (x - 1)(x + 2)(x - 4i)(x + 4i)
     = (x - 1)(x + 2)(x² + 16)
     = (x² + x - 2)(x² + 16)
     = x⁴ + x³ + 14x² + 16x - 32
```

---

## Graphing Polynomial Functions

### Key Features to Graph

1. **Degree and end behavior**
2. **Zeros and their multiplicity**
3. **y-intercept** (value when x = 0)
4. **Turning points** (at most n - 1 for degree n)

**Example 26:** Sketch f(x) = (x + 2)(x - 1)²

```
Zeros: x = -2 (multiplicity 1, crosses)
       x = 1 (multiplicity 2, bounces)

Degree: 3 (odd)
Leading coefficient: 1 (positive)
End behavior: Down left, up right

y-intercept: f(0) = (2)(-1)² = 2

Graph crosses at x = -2, bounces at x = 1
```

**Example 27:** Sketch f(x) = -x³ + 4x

```
Factor: f(x) = -x(x² - 4) = -x(x - 2)(x + 2)

Zeros: x = 0, x = 2, x = -2 (all multiplicity 1, all cross)

Degree: 3 (odd)
Leading coefficient: -1 (negative)
End behavior: Up left, down right

y-intercept: f(0) = 0

Graph crosses at all three zeros
```

### Turning Points

A polynomial of degree n has **at most n - 1 turning points**.

**Example:**
- Degree 2: at most 1 turning point (the vertex)
- Degree 3: at most 2 turning points
- Degree 4: at most 3 turning points

---

## Summary of Key Concepts

### Polynomial Basics
- Degree = highest power
- Leading coefficient affects end behavior
- Add/subtract by combining like terms
- Multiply using distributive property

### End Behavior
- Even degree, positive leading coeff: both ends up
- Even degree, negative leading coeff: both ends down
- Odd degree, positive leading coeff: down left, up right
- Odd degree, negative leading coeff: up left, down right

### Zeros and Factoring
- Zeros are x-intercepts
- Odd multiplicity: graph crosses
- Even multiplicity: graph bounces
- Factor using GCF, grouping, special patterns

### Division
- Long division: works for any divisor
- Synthetic division: only for (x - c)
- Quotient and remainder

### Theorems
- **Remainder Theorem:** Remainder when dividing by (x - c) is f(c)
- **Factor Theorem:** (x - c) is a factor iff f(c) = 0
- **Rational Root Theorem:** Possible rational zeros are p/q where p divides a₀ and q divides aₙ
- **Fundamental Theorem:** Degree n polynomial has n complex zeros
- **Complex Conjugate:** If a + bi is a zero, so is a - bi

---

## Common Mistakes to Avoid

1. **Forgetting to list all possible rational roots** (including negatives and fractions)
2. **Confusing degree and leading coefficient** when determining end behavior
3. **Not recognizing multiplicity** from repeated factors
4. **Arithmetic errors in synthetic division**
5. **Forgetting complex conjugate pairs** when writing polynomials
6. **Claiming a polynomial has more zeros than its degree**
7. **Not simplifying the list of possible rational roots**

---

**Standards Covered:**
- A.APR.1: Add, subtract, and multiply polynomials
- A.APR.2: Understand Remainder Theorem
- A.APR.3: Identify zeros and factors
- N.CN.9: Fundamental Theorem of Algebra, complex conjugates
- F.IF.7c: Graph polynomial functions, identify zeros and end behavior
