# Calculus 1 - Unit 5: Integration Fundamentals - Notes

## Table of Contents
1. [Antiderivatives and Indefinite Integrals](#antiderivatives-and-indefinite-integrals)
2. [Basic Integration Rules](#basic-integration-rules)
3. [Integration by Substitution](#integration-by-substitution)
4. [Area Under a Curve](#area-under-a-curve)
5. [Riemann Sums](#riemann-sums)
6. [The Definite Integral](#the-definite-integral)
7. [Fundamental Theorem of Calculus](#fundamental-theorem-of-calculus)
8. [Properties of Definite Integrals](#properties-of-definite-integrals)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding antiderivatives and indefinite integrals**
- **Computing basic integrals using power rule and formulas**
- **Approximating areas using Riemann sums**
- **Applying the Fundamental Theorem of Calculus**
- **Evaluating definite integrals**

---

## Essential Questions
- What is the relationship between differentiation and integration?
- How can we find the area under a curve?
- Why is the Fundamental Theorem of Calculus so important?
- What does a definite integral represent?

---

## Antiderivatives and Indefinite Integrals

### Definition of Antiderivative

**Antiderivative:** A function F is an antiderivative of f if F'(x) = f(x)

**Example:** If f(x) = 2x, then F(x) = x² is an antiderivative because F'(x) = 2x

**Important:** Antiderivatives are not unique!
- x² is an antiderivative of 2x
- x² + 5 is also an antiderivative of 2x
- x² + C for any constant C is an antiderivative of 2x

### Indefinite Integral

**Notation:**
```
∫ f(x) dx = F(x) + C
```

Where:
- ∫ is the integral sign
- f(x) is the integrand
- dx indicates the variable of integration
- F(x) is an antiderivative of f(x)
- C is the constant of integration (arbitrary constant)

### Example 1: Finding Antiderivatives

Find ∫ 3x² dx

```
We need a function whose derivative is 3x²

d/dx(x³) = 3x²

Therefore: ∫ 3x² dx = x³ + C
```

### Example 2: Verification

Verify that ∫ cos x dx = sin x + C

```
Check: d/dx(sin x + C) = cos x ✓
```

---

## Basic Integration Rules

### Power Rule for Integration

```
∫ xⁿ dx = (xⁿ⁺¹)/(n + 1) + C    (n ≠ -1)
```

**Special case:**
```
∫ x⁻¹ dx = ∫ (1/x) dx = ln|x| + C
```

### Example 3: Power Rule

```
a) ∫ x⁴ dx = x⁵/5 + C

b) ∫ x⁻³ dx = x⁻²/(-2) + C = -1/(2x²) + C

c) ∫ √x dx = ∫ x^(1/2) dx = x^(3/2)/(3/2) + C = (2/3)x^(3/2) + C

d) ∫ 1/x³ dx = ∫ x⁻³ dx = -1/(2x²) + C
```

### Constant Multiple Rule

```
∫ k·f(x) dx = k ∫ f(x) dx
```

### Sum/Difference Rule

```
∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx
```

### Example 4: Combining Rules

```
∫ (3x² - 5x + 7) dx

= 3∫ x² dx - 5∫ x dx + ∫ 7 dx
= 3(x³/3) - 5(x²/2) + 7x + C
= x³ - (5/2)x² + 7x + C
```

### Trigonometric Integrals

```
∫ sin x dx = -cos x + C
∫ cos x dx = sin x + C
∫ sec²x dx = tan x + C
∫ csc²x dx = -cot x + C
∫ sec x tan x dx = sec x + C
∫ csc x cot x dx = -csc x + C
```

### Example 5: Trigonometric Integrals

```
a) ∫ (sin x + cos x) dx = -cos x + sin x + C

b) ∫ 3sec²x dx = 3 tan x + C

c) ∫ (2sin x - 5cos x) dx = -2cos x - 5sin x + C
```

### Exponential and Logarithmic Integrals

```
∫ eˣ dx = eˣ + C
∫ aˣ dx = aˣ/ln(a) + C
∫ (1/x) dx = ln|x| + C
```

### Example 6: Exponential Integrals

```
a) ∫ 5eˣ dx = 5eˣ + C

b) ∫ 2ˣ dx = 2ˣ/ln(2) + C

c) ∫ (eˣ + 1/x) dx = eˣ + ln|x| + C
```

---

## Integration by Substitution

### The Substitution Method

**Idea:** Reverse the chain rule

If u = g(x), then du = g'(x)dx

```
∫ f(g(x))·g'(x) dx = ∫ f(u) du
```

### Example 7: Basic Substitution

Evaluate ∫ 2x(x² + 1)⁵ dx

```
Let u = x² + 1
Then du = 2x dx

∫ 2x(x² + 1)⁵ dx = ∫ u⁵ du
                  = u⁶/6 + C
                  = (x² + 1)⁶/6 + C
```

### Example 8: Substitution with Adjustment

Evaluate ∫ x(x² + 1)⁵ dx

```
Let u = x² + 1
Then du = 2x dx, so x dx = (1/2)du

∫ x(x² + 1)⁵ dx = ∫ u⁵ · (1/2)du
                 = (1/2)∫ u⁵ du
                 = (1/2) · u⁶/6 + C
                 = (x² + 1)⁶/12 + C
```

### Example 9: Trigonometric Substitution

Evaluate ∫ sin x cos x dx

```
Method 1: Let u = sin x, du = cos x dx
∫ sin x cos x dx = ∫ u du = u²/2 + C = (sin²x)/2 + C

Method 2: Let u = cos x, du = -sin x dx
∫ sin x cos x dx = -∫ u du = -u²/2 + C = -(cos²x)/2 + C

Both are correct! (They differ by a constant)
```

### Example 10: Exponential Substitution

Evaluate ∫ xe^(x²) dx

```
Let u = x²
du = 2x dx, so x dx = (1/2)du

∫ xe^(x²) dx = ∫ e^u · (1/2)du
             = (1/2)e^u + C
             = (1/2)e^(x²) + C
```

---

## Area Under a Curve

### The Area Problem

**Goal:** Find the area between a curve y = f(x) and the x-axis from x = a to x = b

**Idea:** Approximate with rectangles, then take a limit

### Approximation Methods

1. **Left Riemann Sum:** Use left endpoints
2. **Right Riemann Sum:** Use right endpoints
3. **Midpoint Rule:** Use midpoints
4. **Trapezoidal Rule:** Use trapezoids

### Example 11: Estimating Area

Estimate the area under f(x) = x² from x = 0 to x = 2 using 4 rectangles (right endpoints)

```
Width of each rectangle: Δx = (2 - 0)/4 = 0.5

Right endpoints: x = 0.5, 1, 1.5, 2

Heights:
f(0.5) = 0.25
f(1) = 1
f(1.5) = 2.25
f(2) = 4

Area ≈ Δx[f(0.5) + f(1) + f(1.5) + f(2)]
     = 0.5[0.25 + 1 + 2.25 + 4]
     = 0.5(7.5)
     = 3.75

(Actual area = 8/3 ≈ 2.67)
```

---

## Riemann Sums

### Definition of Riemann Sum

Partition [a, b] into n subintervals of width Δx = (b - a)/n

Choose sample points x₁*, x₂*, ..., xₙ* in each subinterval

**Riemann Sum:**
```
Σᵢ₌₁ⁿ f(xᵢ*)Δx
```

### Types of Riemann Sums

**Left Riemann Sum:** xᵢ* = left endpoint
```
L_n = Σᵢ₌₁ⁿ f(xᵢ₋₁)Δx
```

**Right Riemann Sum:** xᵢ* = right endpoint
```
R_n = Σᵢ₌₁ⁿ f(xᵢ)Δx
```

**Midpoint Riemann Sum:** xᵢ* = midpoint
```
M_n = Σᵢ₌₁ⁿ f((xᵢ₋₁ + xᵢ)/2)Δx
```

### Example 12: Computing Riemann Sums

Compute L₄, R₄, and M₄ for f(x) = x² on [0, 2]

```
Δx = 2/4 = 0.5
Partition points: 0, 0.5, 1, 1.5, 2

Left Sum (L₄):
L₄ = 0.5[f(0) + f(0.5) + f(1) + f(1.5)]
   = 0.5[0 + 0.25 + 1 + 2.25]
   = 0.5(3.5) = 1.75

Right Sum (R₄):
R₄ = 0.5[f(0.5) + f(1) + f(1.5) + f(2)]
   = 0.5[0.25 + 1 + 2.25 + 4]
   = 0.5(7.5) = 3.75

Midpoint Sum (M₄):
M₄ = 0.5[f(0.25) + f(0.75) + f(1.25) + f(1.75)]
   = 0.5[0.0625 + 0.5625 + 1.5625 + 3.0625]
   = 0.5(5.25) = 2.625
```

### Limit of Riemann Sums

As n → ∞, Riemann sums approach the exact area:

```
lim_{n→∞} Σᵢ₌₁ⁿ f(xᵢ*)Δx = Exact Area
```

---

## The Definite Integral

### Definition

```
∫ₐᵇ f(x) dx = lim_{n→∞} Σᵢ₌₁ⁿ f(xᵢ*)Δx
```

Where:
- a is the lower limit
- b is the upper limit
- f(x) is the integrand
- The result is a number (not a function + C)

### Properties of Definite Integrals

```
1. ∫ₐᵃ f(x) dx = 0

2. ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx

3. ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx

4. ∫ₐᵇ k·f(x) dx = k∫ₐᵇ f(x) dx

5. ∫ₐᵇ f(x) dx + ∫ᵇᶜ f(x) dx = ∫ₐᶜ f(x) dx
```

### Example 13: Using Properties

Given ∫₀² f(x) dx = 5 and ∫₀² g(x) dx = -2, find:

```
a) ∫₀² [f(x) + g(x)] dx = ∫₀² f(x) dx + ∫₀² g(x) dx
                         = 5 + (-2) = 3

b) ∫₀² 3f(x) dx = 3∫₀² f(x) dx = 3(5) = 15

c) ∫₂⁰ f(x) dx = -∫₀² f(x) dx = -5
```

---

## Fundamental Theorem of Calculus

### Part 1: Antiderivative from Integral

If f is continuous on [a, b] and F(x) = ∫ₐˣ f(t) dt, then:

```
F'(x) = f(x)
```

**Meaning:** Differentiation and integration are inverse operations

### Example 14: FTC Part 1

Find d/dx ∫₀ˣ t² dt

```
By FTC Part 1:
d/dx ∫₀ˣ t² dt = x²
```

### Example 15: Chain Rule with FTC Part 1

Find d/dx ∫₀ˣ² sin t dt

```
Let u = x², then:
d/dx ∫₀ˣ² sin t dt = sin(x²) · d/dx(x²)
                    = sin(x²) · 2x
                    = 2x sin(x²)
```

### Part 2: Evaluation Theorem

If F is an antiderivative of f on [a, b], then:

```
∫ₐᵇ f(x) dx = F(b) - F(a)
```

**Notation:** F(x)|ₐᵇ = F(b) - F(a)

### Example 16: Evaluating Definite Integrals

Evaluate ∫₁³ x² dx

```
Antiderivative: F(x) = x³/3

∫₁³ x² dx = F(3) - F(1)
          = (3³/3) - (1³/3)
          = 9 - 1/3
          = 27/3 - 1/3
          = 26/3
```

### Example 17: Polynomial Integration

Evaluate ∫₀² (3x² - 2x + 1) dx

```
Antiderivative: F(x) = x³ - x² + x

∫₀² (3x² - 2x + 1) dx = [x³ - x² + x]₀²
                       = (8 - 4 + 2) - (0)
                       = 6
```

### Example 18: Trigonometric Integration

Evaluate ∫₀^(π/2) cos x dx

```
Antiderivative: F(x) = sin x

∫₀^(π/2) cos x dx = [sin x]₀^(π/2)
                   = sin(π/2) - sin(0)
                   = 1 - 0
                   = 1
```

### Example 19: Exponential Integration

Evaluate ∫₀¹ eˣ dx

```
Antiderivative: F(x) = eˣ

∫₀¹ eˣ dx = [eˣ]₀¹
          = e¹ - e⁰
          = e - 1
```

---

## Properties of Definite Integrals

### Comparison Properties

If f(x) ≥ 0 on [a, b], then:
```
∫ₐᵇ f(x) dx ≥ 0
```

If f(x) ≥ g(x) on [a, b], then:
```
∫ₐᵇ f(x) dx ≥ ∫ₐᵇ g(x) dx
```

### Bounds on Integrals

If m ≤ f(x) ≤ M on [a, b], then:
```
m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a)
```

### Example 20: Estimating Integrals

Estimate ∫₁² (1/x) dx using bounds

```
On [1, 2]:
Minimum of 1/x is 1/2 (at x = 2)
Maximum of 1/x is 1 (at x = 1)

Therefore:
(1/2)(2 - 1) ≤ ∫₁² (1/x) dx ≤ (1)(2 - 1)
1/2 ≤ ∫₁² (1/x) dx ≤ 1

(Actual value = ln 2 ≈ 0.693)
```

### Average Value of a Function

```
f_avg = (1/(b - a))∫ₐᵇ f(x) dx
```

### Example 21: Average Value

Find the average value of f(x) = x² on [0, 3]

```
f_avg = (1/(3 - 0))∫₀³ x² dx
      = (1/3)[x³/3]₀³
      = (1/3)[9 - 0]
      = 3
```

---

## Substitution in Definite Integrals

### Method 1: Change Limits

When u = g(x), change the limits:
- If x = a, then u = g(a)
- If x = b, then u = g(b)

### Example 22: Substitution with Changed Limits

Evaluate ∫₀¹ x(x² + 1)³ dx

```
Let u = x² + 1, du = 2x dx, so x dx = (1/2)du

When x = 0: u = 1
When x = 1: u = 2

∫₀¹ x(x² + 1)³ dx = ∫₁² u³ · (1/2)du
                   = (1/2)∫₁² u³ du
                   = (1/2)[u⁴/4]₁²
                   = (1/8)[16 - 1]
                   = 15/8
```

### Method 2: Find Antiderivative, Then Substitute Back

### Example 23: Alternative Method

Same problem: ∫₀¹ x(x² + 1)³ dx

```
Find indefinite integral first:
∫ x(x² + 1)³ dx = (x² + 1)⁴/8 + C

Then evaluate:
∫₀¹ x(x² + 1)³ dx = [(x² + 1)⁴/8]₀¹
                   = (2⁴/8) - (1⁴/8)
                   = 16/8 - 1/8
                   = 15/8
```

---

## Initial Value Problems

### Using Antiderivatives

**Initial Value Problem:** Find f(x) given f'(x) and an initial condition

### Example 24: Solving IVP

Find f(x) if f'(x) = 3x² - 2x and f(1) = 5

```
Step 1: Find general antiderivative
f(x) = ∫ (3x² - 2x) dx = x³ - x² + C

Step 2: Use initial condition
f(1) = 5
1³ - 1² + C = 5
1 - 1 + C = 5
C = 5

Step 3: Write specific solution
f(x) = x³ - x² + 5
```

### Example 25: Velocity and Position

A particle has velocity v(t) = 6t - 4. If its position at t = 0 is s(0) = 3, find s(t).

```
s(t) = ∫ v(t) dt = ∫ (6t - 4) dt = 3t² - 4t + C

Using s(0) = 3:
3(0)² - 4(0) + C = 3
C = 3

Therefore: s(t) = 3t² - 4t + 3
```

---

## Key Formulas and Reference

### Basic Antiderivatives
```
∫ xⁿ dx = x^(n+1)/(n+1) + C  (n ≠ -1)
∫ (1/x) dx = ln|x| + C
∫ eˣ dx = eˣ + C
∫ sin x dx = -cos x + C
∫ cos x dx = sin x + C
∫ sec²x dx = tan x + C
```

### Substitution Rule
```
If u = g(x), then ∫ f(g(x))g'(x) dx = ∫ f(u) du
```

### Fundamental Theorem of Calculus
```
Part 1: d/dx ∫ₐˣ f(t) dt = f(x)
Part 2: ∫ₐᵇ f(x) dx = F(b) - F(a)
```

### Properties of Definite Integrals
```
∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx
∫ₐᵇ k·f(x) dx = k∫ₐᵇ f(x) dx
∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx
```

### Average Value
```
f_avg = (1/(b - a))∫ₐᵇ f(x) dx
```

---

**Next Unit:** Unit 6 - Integration Techniques
