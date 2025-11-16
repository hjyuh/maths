# Calculus 1 - Unit 4: Advanced Differentiation - Notes

## Table of Contents
1. [Implicit Differentiation](#implicit-differentiation)
2. [Derivatives of Inverse Functions](#derivatives-of-inverse-functions)
3. [Derivatives of Exponential Functions](#derivatives-of-exponential-functions)
4. [Derivatives of Logarithmic Functions](#derivatives-of-logarithmic-functions)
5. [Logarithmic Differentiation](#logarithmic-differentiation)
6. [Derivatives of Inverse Trigonometric Functions](#derivatives-of-inverse-trigonometric-functions)
7. [Hyperbolic Functions](#hyperbolic-functions)
8. [Higher-Order Derivatives](#higher-order-derivatives)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Using implicit differentiation to find derivatives**
- **Differentiating exponential and logarithmic functions**
- **Applying logarithmic differentiation**
- **Finding derivatives of inverse trigonometric functions**
- **Computing higher-order derivatives**

---

## Essential Questions
- How do we differentiate equations not solved for y?
- What are the relationships between inverse functions and their derivatives?
- When is logarithmic differentiation the best approach?
- How do exponential and logarithmic functions behave under differentiation?

---

## Implicit Differentiation

### What is Implicit Differentiation?

**Explicit function:** y is isolated (e.g., y = x² + 3x)
**Implicit function:** y is not isolated (e.g., x² + y² = 25)

**Strategy:** Differentiate both sides with respect to x, treating y as a function of x.

### Example 1: Circle

Find dy/dx for x² + y² = 25

```
Differentiate both sides:
d/dx(x²) + d/dx(y²) = d/dx(25)
2x + 2y(dy/dx) = 0

Solve for dy/dx:
2y(dy/dx) = -2x
dy/dx = -x/y
```

**Note:** The answer contains both x and y

### Example 2: More Complex

Find dy/dx for x³ + y³ = 6xy

```
Differentiate both sides:
3x² + 3y²(dy/dx) = 6y + 6x(dy/dx)

Collect terms with dy/dx:
3y²(dy/dx) - 6x(dy/dx) = 6y - 3x²

Factor:
(3y² - 6x)(dy/dx) = 6y - 3x²

Solve:
dy/dx = (6y - 3x²)/(3y² - 6x)
      = (2y - x²)/(y² - 2x)
```

### Example 3: Finding Slope of Tangent Line

Find the equation of the tangent line to x² + xy + y² = 3 at (1, 1)

```
Step 1: Find dy/dx using implicit differentiation
2x + y + x(dy/dx) + 2y(dy/dx) = 0
2x + y + (x + 2y)(dy/dx) = 0
(x + 2y)(dy/dx) = -2x - y
dy/dx = -(2x + y)/(x + 2y)

Step 2: Evaluate at (1, 1)
dy/dx|₍₁,₁₎ = -(2(1) + 1)/(1 + 2(1))
             = -3/3 = -1

Step 3: Point-slope form
y - 1 = -1(x - 1)
y = -x + 2
```

### Example 4: Second Derivatives

Find d²y/dx² for x² + y² = 25

```
First derivative:
dy/dx = -x/y

Second derivative (use quotient rule):
d²y/dx² = d/dx(-x/y)
        = [y·(-1) - (-x)·(dy/dx)]/y²
        = [-y + x(dy/dx)]/y²

Substitute dy/dx = -x/y:
d²y/dx² = [-y + x(-x/y)]/y²
        = [-y - x²/y]/y²
        = [(-y² - x²)/y]/y²
        = -(x² + y²)/y³
        = -25/y³  (since x² + y² = 25)
```

---

## Derivatives of Inverse Functions

### Inverse Function Theorem

If f has an inverse function g = f⁻¹, then:
```
g'(x) = 1/f'(g(x))
```

Or in Leibniz notation:
```
dx/dy = 1/(dy/dx)
```

### Example 5: Finding Derivative of Inverse

Let f(x) = x³ + 2x + 1. Find (f⁻¹)'(4).

```
Step 1: Find where f(x) = 4
x³ + 2x + 1 = 4
x³ + 2x - 3 = 0
(x - 1)(x² + x + 3) = 0
x = 1  (only real solution)

So f⁻¹(4) = 1

Step 2: Find f'(x)
f'(x) = 3x² + 2

Step 3: Apply inverse function theorem
(f⁻¹)'(4) = 1/f'(f⁻¹(4))
          = 1/f'(1)
          = 1/(3(1)² + 2)
          = 1/5
```

---

## Derivatives of Exponential Functions

### The Natural Exponential Function

**Key Property:** The function f(x) = eˣ is its own derivative!

```
d/dx(eˣ) = eˣ
```

### Chain Rule with Exponentials

```
d/dx(e^u) = e^u · du/dx
```

### Example 6: Basic Exponential Derivatives

```
a) d/dx(e^(3x)) = e^(3x) · 3 = 3e^(3x)

b) d/dx(e^(x²)) = e^(x²) · 2x = 2xe^(x²)

c) d/dx(e^(sin x)) = e^(sin x) · cos x

d) d/dx(xe^x) = e^x + xe^x = e^x(1 + x)
```

### General Exponential Functions

For a > 0, a ≠ 1:
```
d/dx(aˣ) = aˣ ln(a)
```

### Example 7: General Exponentials

```
a) d/dx(2ˣ) = 2ˣ ln(2)

b) d/dx(10^(3x)) = 10^(3x) · ln(10) · 3 = 3ln(10) · 10^(3x)

c) d/dx(5^(x²)) = 5^(x²) · ln(5) · 2x = 2x ln(5) · 5^(x²)
```

---

## Derivatives of Logarithmic Functions

### Natural Logarithm

```
d/dx(ln x) = 1/x  (x > 0)
```

### Chain Rule with Logarithms

```
d/dx(ln u) = (1/u) · du/dx
```

### Example 8: Basic Logarithmic Derivatives

```
a) d/dx(ln(3x)) = 1/(3x) · 3 = 1/x

b) d/dx(ln(x²)) = 1/x² · 2x = 2/x

c) d/dx(ln(sin x)) = 1/(sin x) · cos x = cot x

d) d/dx(x ln x) = ln x + x · (1/x) = ln x + 1
```

### General Logarithms

For a > 0, a ≠ 1:
```
d/dx(log_a x) = 1/(x ln a)
```

### Example 9: General Logarithms

```
a) d/dx(log₁₀ x) = 1/(x ln 10)

b) d/dx(log₂(x²)) = 1/(x² ln 2) · 2x = 2/(x ln 2)
```

---

## Logarithmic Differentiation

### When to Use Logarithmic Differentiation

1. Products and quotients of many functions
2. Functions with variable exponents (e.g., x^x)
3. Complex expressions that simplify when logged

### Strategy
1. Take ln of both sides
2. Use logarithm properties to simplify
3. Differentiate implicitly
4. Solve for dy/dx

### Example 10: Product of Many Terms

Find dy/dx for y = (x² + 1)(x³ + 2)(x⁴ + 3)

```
Step 1: Take ln of both sides
ln y = ln[(x² + 1)(x³ + 2)(x⁴ + 3)]
ln y = ln(x² + 1) + ln(x³ + 2) + ln(x⁴ + 3)

Step 2: Differentiate
(1/y)(dy/dx) = 2x/(x² + 1) + 3x²/(x³ + 2) + 4x³/(x⁴ + 3)

Step 3: Solve for dy/dx
dy/dx = y[2x/(x² + 1) + 3x²/(x³ + 2) + 4x³/(x⁴ + 3)]
      = (x² + 1)(x³ + 2)(x⁴ + 3)[2x/(x² + 1) + 3x²/(x³ + 2) + 4x³/(x⁴ + 3)]
```

### Example 11: Variable Exponent

Find dy/dx for y = x^x (x > 0)

```
Step 1: Take ln
ln y = ln(x^x) = x ln x

Step 2: Differentiate
(1/y)(dy/dx) = ln x + x(1/x) = ln x + 1

Step 3: Solve
dy/dx = y(ln x + 1) = x^x(ln x + 1)
```

### Example 12: Complex Fraction

Find dy/dx for y = [(x + 1)³√(x - 2)]/(x² + 5)²

```
Step 1: Take ln
ln y = 3ln(x + 1) + (1/2)ln(x - 2) - 2ln(x² + 5)

Step 2: Differentiate
(1/y)(dy/dx) = 3/(x + 1) + 1/[2(x - 2)] - 4x/(x² + 5)

Step 3: Solve
dy/dx = y[3/(x + 1) + 1/[2(x - 2)] - 4x/(x² + 5)]
```

### Example 13: Power Functions

Find dy/dx for y = (sin x)^(cos x)

```
ln y = cos x · ln(sin x)

(1/y)(dy/dx) = -sin x · ln(sin x) + cos x · (cos x/sin x)
             = -sin x · ln(sin x) + cos²x/sin x

dy/dx = (sin x)^(cos x)[-sin x · ln(sin x) + cos²x/sin x]
```

---

## Derivatives of Inverse Trigonometric Functions

### Basic Formulas

```
d/dx(sin⁻¹ x) = 1/√(1 - x²)     |x| < 1

d/dx(cos⁻¹ x) = -1/√(1 - x²)    |x| < 1

d/dx(tan⁻¹ x) = 1/(1 + x²)      all x

d/dx(cot⁻¹ x) = -1/(1 + x²)     all x

d/dx(sec⁻¹ x) = 1/(|x|√(x² - 1))   |x| > 1

d/dx(csc⁻¹ x) = -1/(|x|√(x² - 1))  |x| > 1
```

### Example 14: Basic Inverse Trig Derivatives

```
a) d/dx(sin⁻¹(2x)) = 1/√(1 - 4x²) · 2 = 2/√(1 - 4x²)

b) d/dx(tan⁻¹(x²)) = 1/(1 + x⁴) · 2x = 2x/(1 + x⁴)

c) d/dx(cos⁻¹(sin x)) = -1/√(1 - sin²x) · cos x
                       = -cos x/|cos x|

d) d/dx(x tan⁻¹ x) = tan⁻¹ x + x/(1 + x²)
```

### Deriving the Formulas

**Derivation for sin⁻¹ x:**

```
Let y = sin⁻¹ x
Then sin y = x

Differentiate implicitly:
cos y · dy/dx = 1
dy/dx = 1/cos y

Since sin²y + cos²y = 1:
cos y = √(1 - sin²y) = √(1 - x²)

Therefore:
dy/dx = 1/√(1 - x²)
```

### Example 15: Applications

Find the equation of the tangent line to y = tan⁻¹ x at x = 1.

```
Point: (1, tan⁻¹(1)) = (1, π/4)

Slope: dy/dx|ₓ₌₁ = 1/(1 + 1²) = 1/2

Tangent line: y - π/4 = (1/2)(x - 1)
              y = (1/2)x + π/4 - 1/2
```

---

## Hyperbolic Functions

### Definitions

```
sinh x = (eˣ - e⁻ˣ)/2    (hyperbolic sine)
cosh x = (eˣ + e⁻ˣ)/2    (hyperbolic cosine)
tanh x = sinh x/cosh x   (hyperbolic tangent)
```

### Derivatives

```
d/dx(sinh x) = cosh x
d/dx(cosh x) = sinh x
d/dx(tanh x) = sech²x
```

### Key Identity

```
cosh²x - sinh²x = 1
```

### Example 16: Hyperbolic Function Derivatives

```
a) d/dx(sinh(3x)) = 3cosh(3x)

b) d/dx(cosh²x) = 2cosh x · sinh x = sinh(2x)

c) d/dx(e^x sinh x) = e^x sinh x + e^x cosh x
                     = e^x(sinh x + cosh x)
                     = e^x · eˣ = e^(2x)
```

---

## Higher-Order Derivatives

### Notation

**Second derivative:**
```
f''(x) = d²y/dx² = d/dx(dy/dx)
```

**Third derivative:**
```
f'''(x) = d³y/dx³
```

**nth derivative:**
```
f⁽ⁿ⁾(x) = dⁿy/dxⁿ
```

### Example 17: Computing Higher Derivatives

Find f'''(x) for f(x) = x⁴ - 3x³ + 2x

```
f(x) = x⁴ - 3x³ + 2x
f'(x) = 4x³ - 9x² + 2
f''(x) = 12x² - 18x
f'''(x) = 24x - 18
```

### Example 18: Patterns in Higher Derivatives

Find the nth derivative of f(x) = eˣ

```
f(x) = eˣ
f'(x) = eˣ
f''(x) = eˣ
f'''(x) = eˣ
⋮
f⁽ⁿ⁾(x) = eˣ for all n
```

### Example 19: Trigonometric Pattern

Find the pattern for derivatives of f(x) = sin x

```
f(x) = sin x
f'(x) = cos x
f''(x) = -sin x
f'''(x) = -cos x
f⁽⁴⁾(x) = sin x
f⁽⁵⁾(x) = cos x
...

Pattern repeats every 4 derivatives
```

### Example 20: Using Higher Derivatives

Show that y = e^(2x) satisfies y'' - 3y' + 2y = 0

```
y = e^(2x)
y' = 2e^(2x)
y'' = 4e^(2x)

Substitute:
4e^(2x) - 3(2e^(2x)) + 2(e^(2x))
= 4e^(2x) - 6e^(2x) + 2e^(2x)
= 0 ✓
```

---

## Applications and Problem-Solving

### Example 21: Implicit Differentiation Application

The demand equation for a product is x² + p² = 100, where x is quantity and p is price. Find the rate of change of price with respect to quantity when x = 6.

```
Differentiate implicitly with respect to x:
2x + 2p(dp/dx) = 0
dp/dx = -x/p

When x = 6: 36 + p² = 100
            p² = 64
            p = 8 (taking positive value)

dp/dx|ₓ₌₆ = -6/8 = -3/4

Price decreases by $0.75 per unit increase in quantity
```

### Example 22: Related Rates with Exponentials

The temperature of a cooling object is T = 25 + 75e^(-0.1t) degrees. Find the rate of cooling when t = 10 minutes.

```
T = 25 + 75e^(-0.1t)
dT/dt = 75e^(-0.1t) · (-0.1) = -7.5e^(-0.1t)

At t = 10:
dT/dt|ₜ₌₁₀ = -7.5e^(-1)
            ≈ -2.76 degrees/minute

The object is cooling at about 2.76°/min
```

### Example 23: Optimization with Logarithms

The profit function is P(x) = 1000 ln(x + 1) - 50x. Find the production level that maximizes profit.

```
P'(x) = 1000/(x + 1) - 50 = 0

1000/(x + 1) = 50
1000 = 50(x + 1)
20 = x + 1
x = 19 units

P''(x) = -1000/(x + 1)² < 0, confirms maximum
```

---

## Key Formulas and Reference

### Implicit Differentiation
- Differentiate both sides with respect to x
- Treat y as a function of x
- Solve for dy/dx

### Exponential Functions
```
d/dx(eˣ) = eˣ
d/dx(e^u) = e^u · u'
d/dx(aˣ) = aˣ ln a
```

### Logarithmic Functions
```
d/dx(ln x) = 1/x
d/dx(ln u) = u'/u
d/dx(log_a x) = 1/(x ln a)
```

### Logarithmic Differentiation
1. Take ln of both sides
2. Simplify using log properties
3. Differentiate
4. Solve for dy/dx

### Inverse Trigonometric Functions
```
d/dx(sin⁻¹ x) = 1/√(1 - x²)
d/dx(tan⁻¹ x) = 1/(1 + x²)
d/dx(sec⁻¹ x) = 1/(|x|√(x² - 1))
```

### Hyperbolic Functions
```
d/dx(sinh x) = cosh x
d/dx(cosh x) = sinh x
d/dx(tanh x) = sech²x
```

---

**Next Unit:** Unit 5 - Integration Fundamentals
