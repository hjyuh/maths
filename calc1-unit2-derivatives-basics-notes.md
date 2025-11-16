# Calculus 1 - Unit 2: Derivatives - Basic Rules - Notes

## Table of Contents
1. [Introduction to Derivatives](#introduction-to-derivatives)
2. [The Derivative as a Function](#the-derivative-as-a-function)
3. [Basic Differentiation Rules](#basic-differentiation-rules)
4. [Product Rule](#product-rule)
5. [Quotient Rule](#quotient-rule)
6. [Chain Rule](#chain-rule)
7. [Derivatives of Trigonometric Functions](#derivatives-of-trigonometric-functions)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding the derivative as a rate of change**
- **Computing derivatives using basic rules**
- **Applying the product, quotient, and chain rules**
- **Finding derivatives of trigonometric functions**

---

## Essential Questions
- What does a derivative tell us about a function?
- How do we compute derivatives efficiently?
- What is the relationship between slopes and rates of change?

---

## Introduction to Derivatives

### The Derivative at a Point

**Definition:** The derivative of f at x = a is:
```
f'(a) = lim[h→0] [f(a + h) - f(a)]/h
```

This represents the **instantaneous rate of change** of f at x = a, or the **slope of the tangent line** to the curve at (a, f(a)).

### Example 1: Finding a Derivative Using the Limit Definition

Find f'(2) if f(x) = x²

```
f'(2) = lim[h→0] [f(2 + h) - f(2)]/h
      = lim[h→0] [(2 + h)² - 4]/h
      = lim[h→0] [4 + 4h + h² - 4]/h
      = lim[h→0] [4h + h²]/h
      = lim[h→0] (4 + h)
      = 4
```

**Interpretation:** At x = 2, the function f(x) = x² has a slope of 4.

---

## The Derivative as a Function

### General Definition

```
f'(x) = lim[h→0] [f(x + h) - f(x)]/h
```

This gives us a **new function** f'(x) that tells us the slope at every point.

### Example 2: Finding the Derivative Function

Find f'(x) if f(x) = x²

```
f'(x) = lim[h→0] [(x + h)² - x²]/h
      = lim[h→0] [x² + 2xh + h² - x²]/h
      = lim[h→0] [2xh + h²]/h
      = lim[h→0] (2x + h)
      = 2x
```

**Therefore:** If f(x) = x², then f'(x) = 2x

### Notation

Multiple notations for derivatives:
- **Lagrange:** f'(x)
- **Leibniz:** df/dx or dy/dx
- **Newton:** ẋ (for physics)
- **Operator:** Dₓ[f(x)]

---

## Basic Differentiation Rules

### Power Rule

**Rule:** If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹

**Examples:**
```
f(x) = x³     →  f'(x) = 3x²
f(x) = x⁵     →  f'(x) = 5x⁴
f(x) = x      →  f'(x) = 1
f(x) = x⁻²    →  f'(x) = -2x⁻³ = -2/x³
f(x) = √x     →  f'(x) = (1/2)x⁻¹/² = 1/(2√x)
```

### Constant Rule

**Rule:** If f(x) = c (constant), then f'(x) = 0

**Example:** f(x) = 7  →  f'(x) = 0

### Constant Multiple Rule

**Rule:** If f(x) = c·g(x), then f'(x) = c·g'(x)

**Example:** f(x) = 5x³  →  f'(x) = 5(3x²) = 15x²

### Sum and Difference Rules

**Rule:** [f(x) ± g(x)]' = f'(x) ± g'(x)

**Example:**
```
f(x) = 3x⁴ + 2x³ - 5x + 7
f'(x) = 12x³ + 6x² - 5
```

### Example 3: Combining Rules

Find dy/dx if y = 4x⁵ - 3x² + 7x - 2

```
dy/dx = 4(5x⁴) - 3(2x) + 7(1) - 0
      = 20x⁴ - 6x + 7
```

---

## Product Rule

### The Rule

**If f(x) = u(x)·v(x), then:**
```
f'(x) = u'(x)·v(x) + u(x)·v'(x)
```

**Mnemonic:** "First times derivative of second, plus second times derivative of first"

### Example 4: Using the Product Rule

Find f'(x) if f(x) = x²(3x + 1)

```
Let u = x² and v = 3x + 1
u' = 2x and v' = 3

f'(x) = (2x)(3x + 1) + (x²)(3)
      = 6x² + 2x + 3x²
      = 9x² + 2x
```

### Example 5: More Complex Product

Find dy/dx if y = (2x³ - 1)(x⁴ + 5)

```
u = 2x³ - 1,  u' = 6x²
v = x⁴ + 5,   v' = 4x³

dy/dx = (6x²)(x⁴ + 5) + (2x³ - 1)(4x³)
      = 6x⁶ + 30x² + 8x⁶ - 4x³
      = 14x⁶ - 4x³ + 30x²
```

---

## Quotient Rule

### The Rule

**If f(x) = u(x)/v(x), then:**
```
f'(x) = [u'(x)·v(x) - u(x)·v'(x)]/[v(x)]²
```

**Mnemonic:** "Low d-high minus high d-low, over the square of what's below"

### Example 6: Using the Quotient Rule

Find f'(x) if f(x) = x²/(2x + 1)

```
u = x²,      u' = 2x
v = 2x + 1,  v' = 2

f'(x) = [(2x)(2x + 1) - (x²)(2)]/(2x + 1)²
      = [4x² + 2x - 2x²]/(2x + 1)²
      = [2x² + 2x]/(2x + 1)²
      = 2x(x + 1)/(2x + 1)²
```

### Example 7: Quotient of Polynomials

Find dy/dx if y = (3x - 2)/(x² + 1)

```
u = 3x - 2,   u' = 3
v = x² + 1,   v' = 2x

dy/dx = [3(x² + 1) - (3x - 2)(2x)]/(x² + 1)²
      = [3x² + 3 - 6x² + 4x]/(x² + 1)²
      = [-3x² + 4x + 3]/(x² + 1)²
```

---

## Chain Rule

### The Rule

**If f(x) = g(h(x)), then:**
```
f'(x) = g'(h(x))·h'(x)
```

**Alternative notation:** If y = f(u) and u = g(x), then:
```
dy/dx = (dy/du)·(du/dx)
```

### Example 8: Basic Chain Rule

Find f'(x) if f(x) = (2x + 1)⁵

```
Let u = 2x + 1, so f = u⁵
du/dx = 2
df/du = 5u⁴

f'(x) = 5u⁴ · 2 = 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴
```

### Example 9: Chain Rule with Radicals

Find dy/dx if y = √(x² + 3)

```
Rewrite: y = (x² + 3)^(1/2)

Let u = x² + 3
dy/du = (1/2)u^(-1/2) = 1/(2√u)
du/dx = 2x

dy/dx = [1/(2√(x² + 3))]·(2x) = x/√(x² + 3)
```

### Example 10: Multiple Compositions

Find f'(x) if f(x) = (3x² + 1)⁴

```
Outside function: u⁴ (derivative: 4u³)
Inside function: u = 3x² + 1 (derivative: 6x)

f'(x) = 4(3x² + 1)³ · 6x = 24x(3x² + 1)³
```

---

## Combining Rules

### Example 11: Product and Chain Rules

Find dy/dx if y = x²(3x + 1)⁴

```
Use product rule: u = x², v = (3x + 1)⁴
u' = 2x
v' = 4(3x + 1)³ · 3 = 12(3x + 1)³  [chain rule]

dy/dx = (2x)(3x + 1)⁴ + (x²)[12(3x + 1)³]
      = 2x(3x + 1)⁴ + 12x²(3x + 1)³
      = 2x(3x + 1)³[(3x + 1) + 6x]
      = 2x(3x + 1)³(9x + 1)
```

### Example 12: Quotient and Chain Rules

Find f'(x) if f(x) = (2x - 1)³/(x² + 4)

```
u = (2x - 1)³,  u' = 3(2x - 1)² · 2 = 6(2x - 1)²
v = x² + 4,     v' = 2x

f'(x) = [6(2x - 1)²(x² + 4) - (2x - 1)³(2x)]/(x² + 4)²
      = [(2x - 1)²[6(x² + 4) - 2x(2x - 1)]]/(x² + 4)²
      = [(2x - 1)²[6x² + 24 - 4x² + 2x]]/(x² + 4)²
      = [(2x - 1)²(2x² + 2x + 24)]/(x² + 4)²
```

---

## Derivatives of Trigonometric Functions

### Basic Trig Derivatives

**Memorize these:**
```
d/dx[sin x] = cos x
d/dx[cos x] = -sin x
d/dx[tan x] = sec² x
d/dx[cot x] = -csc² x
d/dx[sec x] = sec x tan x
d/dx[csc x] = -csc x cot x
```

### Example 13: Basic Trig Derivatives

Find f'(x) for each:

a) f(x) = sin x  →  f'(x) = cos x
b) f(x) = 3 cos x  →  f'(x) = -3 sin x
c) f(x) = tan x  →  f'(x) = sec² x

### Example 14: Chain Rule with Trig

Find dy/dx if y = sin(3x)

```
Outside: sin u (derivative: cos u)
Inside: u = 3x (derivative: 3)

dy/dx = cos(3x) · 3 = 3 cos(3x)
```

### Example 15: More Complex Trig

Find f'(x) if f(x) = cos(x²)

```
f'(x) = -sin(x²) · 2x = -2x sin(x²)
```

### Example 16: Product with Trig

Find dy/dx if y = x² sin x

```
u = x²,     u' = 2x
v = sin x,  v' = cos x

dy/dx = 2x sin x + x² cos x
      = x(2 sin x + x cos x)
```

### Example 17: Quotient with Trig

Find f'(x) if f(x) = sin x/x

```
u = sin x,  u' = cos x
v = x,      v' = 1

f'(x) = [x cos x - sin x]/x²
```

---

## Higher-Order Derivatives

### Second Derivative

The derivative of the derivative: f''(x) or d²y/dx²

**Example 18:**
```
If f(x) = x⁴ - 3x² + 2
f'(x) = 4x³ - 6x
f''(x) = 12x² - 6
```

### Third and Fourth Derivatives

- **Third:** f'''(x) or d³y/dx³
- **Fourth:** f⁽⁴⁾(x) or d⁴y/dx⁴

**Example 19:**
```
f(x) = sin x
f'(x) = cos x
f''(x) = -sin x
f'''(x) = -cos x
f⁽⁴⁾(x) = sin x  [back to the start!]
```

---

## Implicit Differentiation Preview

Sometimes y is not explicitly given in terms of x. We'll cover this more in Unit 3.

**Example:** x² + y² = 25

To find dy/dx, differentiate both sides with respect to x:
```
2x + 2y(dy/dx) = 0
dy/dx = -x/y
```

---

## Key Formulas and Reference

### Basic Rules
```
Power Rule: d/dx[xⁿ] = nxⁿ⁻¹
Constant Rule: d/dx[c] = 0
Constant Multiple: d/dx[cf] = c·f'
Sum/Difference: d/dx[f ± g] = f' ± g'
```

### Product and Quotient Rules
```
Product: d/dx[uv] = u'v + uv'
Quotient: d/dx[u/v] = (u'v - uv')/v²
```

### Chain Rule
```
d/dx[f(g(x))] = f'(g(x))·g'(x)
```

### Trigonometric Derivatives
```
d/dx[sin x] = cos x
d/dx[cos x] = -sin x
d/dx[tan x] = sec² x
d/dx[cot x] = -csc² x
d/dx[sec x] = sec x tan x
d/dx[csc x] = -csc x cot x
```

---

**Next Unit:** Unit 3 - Applications of Derivatives
