# Calculus 1 - Unit 6: Integration Techniques - Notes

## Table of Contents
1. [Advanced Substitution Techniques](#advanced-substitution-techniques)
2. [Integration by Parts](#integration-by-parts)
3. [Trigonometric Integrals](#trigonometric-integrals)
4. [Trigonometric Substitution](#trigonometric-substitution)
5. [Partial Fractions](#partial-fractions)
6. [Improper Integrals](#improper-integrals)
7. [Numerical Integration](#numerical-integration)
8. [Strategy for Integration](#strategy-for-integration)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Applying integration by parts**
- **Evaluating trigonometric integrals**
- **Using trigonometric substitution**
- **Decomposing rational functions using partial fractions**
- **Evaluating improper integrals**

---

## Essential Questions
- How do we choose the right integration technique?
- When is integration by parts the best method?
- How can we integrate rational functions?
- What are improper integrals and how do we evaluate them?

---

## Advanced Substitution Techniques

### Review of u-Substitution

**Basic Idea:** If ∫ f(g(x))g'(x) dx, let u = g(x)

### Example 1: Multiple Substitutions

Evaluate ∫ sin(√x)/√x dx

```
Let u = √x
Then du = 1/(2√x) dx
So dx/√x = 2 du

∫ sin(√x)/√x dx = ∫ sin u · 2 du
                 = 2∫ sin u du
                 = -2 cos u + C
                 = -2 cos(√x) + C
```

### Example 2: Completing the Square

Evaluate ∫ 1/(x² + 4x + 13) dx

```
Complete the square:
x² + 4x + 13 = (x + 2)² + 9

Let u = x + 2, du = dx

∫ 1/(x² + 4x + 13) dx = ∫ 1/(u² + 9) du
                       = (1/3)tan⁻¹(u/3) + C
                       = (1/3)tan⁻¹((x + 2)/3) + C
```

---

## Integration by Parts

### Formula

```
∫ u dv = uv - ∫ v du
```

Or in definite integral form:
```
∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du
```

### Choosing u and dv

**LIATE Rule:** Choose u in this priority order:
- **L**ogarithmic functions (ln x)
- **I**nverse trig functions (sin⁻¹ x, tan⁻¹ x)
- **A**lgebraic functions (x, x²)
- **T**rigonometric functions (sin x, cos x)
- **E**xponential functions (eˣ)

### Example 3: Basic Integration by Parts

Evaluate ∫ x eˣ dx

```
Let u = x         dv = eˣ dx
    du = dx       v = eˣ

∫ x eˣ dx = x·eˣ - ∫ eˣ dx
          = xeˣ - eˣ + C
          = eˣ(x - 1) + C
```

### Example 4: Logarithmic Integral

Evaluate ∫ ln x dx

```
Let u = ln x      dv = dx
    du = (1/x)dx  v = x

∫ ln x dx = x ln x - ∫ x·(1/x) dx
          = x ln x - ∫ 1 dx
          = x ln x - x + C
          = x(ln x - 1) + C
```

### Example 5: Repeated Integration by Parts

Evaluate ∫ x² eˣ dx

```
First application:
u = x²        dv = eˣ dx
du = 2x dx    v = eˣ

∫ x² eˣ dx = x²eˣ - ∫ 2xeˣ dx

Second application on ∫ 2xeˣ dx:
u = 2x        dv = eˣ dx
du = 2 dx     v = eˣ

∫ 2xeˣ dx = 2xeˣ - ∫ 2eˣ dx
          = 2xeˣ - 2eˣ

Combining:
∫ x² eˣ dx = x²eˣ - (2xeˣ - 2eˣ) + C
           = x²eˣ - 2xeˣ + 2eˣ + C
           = eˣ(x² - 2x + 2) + C
```

### Example 6: Tabular Integration

For ∫ x³ eˣ dx, use tabular method:

```
Derivatives      Integrals
x³          +    eˣ
3x²         -    eˣ
6x          +    eˣ
6           -    eˣ
0           +    eˣ

Result: x³eˣ - 3x²eˣ + 6xeˣ - 6eˣ + C
      = eˣ(x³ - 3x² + 6x - 6) + C
```

### Example 7: Cyclic Integration

Evaluate ∫ eˣ sin x dx

```
u = eˣ        dv = sin x dx
du = eˣ dx    v = -cos x

∫ eˣ sin x dx = -eˣ cos x + ∫ eˣ cos x dx

For ∫ eˣ cos x dx:
u = eˣ        dv = cos x dx
du = eˣ dx    v = sin x

∫ eˣ cos x dx = eˣ sin x - ∫ eˣ sin x dx

Substituting back:
∫ eˣ sin x dx = -eˣ cos x + eˣ sin x - ∫ eˣ sin x dx

2∫ eˣ sin x dx = eˣ(sin x - cos x)

∫ eˣ sin x dx = (eˣ/2)(sin x - cos x) + C
```

---

## Trigonometric Integrals

### Powers of Sine and Cosine

**Case 1: Odd power of sin or cos**
Use substitution with the other function

**Case 2: Even powers of both**
Use power-reducing formulas:
```
sin²x = (1 - cos 2x)/2
cos²x = (1 + cos 2x)/2
```

### Example 8: Odd Power

Evaluate ∫ sin³x dx

```
∫ sin³x dx = ∫ sin²x · sin x dx
           = ∫ (1 - cos²x) sin x dx

Let u = cos x, du = -sin x dx

= -∫ (1 - u²) du
= -[u - u³/3] + C
= -cos x + (cos³x)/3 + C
```

### Example 9: Even Powers

Evaluate ∫ sin²x cos²x dx

```
sin²x cos²x = [(1 - cos 2x)/2][(1 + cos 2x)/2]
            = (1 - cos²2x)/4

Using cos²2x = (1 + cos 4x)/2:

= (1 - (1 + cos 4x)/2)/4
= (1 - 1/2 - cos 4x/2)/4
= (1/2 - cos 4x/2)/4
= 1/8 - (cos 4x)/8

∫ sin²x cos²x dx = x/8 - (sin 4x)/32 + C
```

### Powers of Tangent and Secant

**Useful identities:**
```
tan²x = sec²x - 1
sec²x = 1 + tan²x
```

### Example 10: Tangent and Secant

Evaluate ∫ tan³x sec³x dx

```
∫ tan³x sec³x dx = ∫ tan²x · sec²x · sec x tan x dx
                  = ∫ (sec²x - 1) sec²x · sec x tan x dx

Let u = sec x, du = sec x tan x dx

= ∫ (u² - 1)u² du
= ∫ (u⁴ - u²) du
= u⁵/5 - u³/3 + C
= (sec⁵x)/5 - (sec³x)/3 + C
```

---

## Trigonometric Substitution

### Three Standard Substitutions

| Expression | Substitution | Identity |
|------------|-------------|----------|
| √(a² - x²) | x = a sin θ | 1 - sin²θ = cos²θ |
| √(a² + x²) | x = a tan θ | 1 + tan²θ = sec²θ |
| √(x² - a²) | x = a sec θ | sec²θ - 1 = tan²θ |

### Example 11: Using √(a² - x²)

Evaluate ∫ √(9 - x²) dx

```
Let x = 3 sin θ
dx = 3 cos θ dθ

√(9 - x²) = √(9 - 9sin²θ)
          = √(9cos²θ)
          = 3|cos θ| = 3 cos θ

∫ √(9 - x²) dx = ∫ 3 cos θ · 3 cos θ dθ
                = 9∫ cos²θ dθ
                = 9∫ (1 + cos 2θ)/2 dθ
                = (9/2)[θ + (sin 2θ)/2] + C
                = (9/2)θ + (9/4)sin 2θ + C

Since x = 3 sin θ, θ = sin⁻¹(x/3)
sin 2θ = 2 sin θ cos θ = 2(x/3)√(9-x²)/3

= (9/2)sin⁻¹(x/3) + (x/2)√(9 - x²) + C
```

### Example 12: Using √(a² + x²)

Evaluate ∫ 1/(x²√(4 + x²)) dx

```
Let x = 2 tan θ
dx = 2 sec²θ dθ
√(4 + x²) = 2 sec θ

∫ 1/(x²√(4 + x²)) dx = ∫ 1/(4tan²θ · 2sec θ) · 2sec²θ dθ
                      = ∫ sec θ/(4 tan²θ) dθ
                      = (1/4)∫ cos θ/sin²θ dθ

Let u = sin θ, du = cos θ dθ

= (1/4)∫ u⁻² du
= -(1/4u) + C
= -1/(4 sin θ) + C

Since tan θ = x/2, sin θ = x/√(4 + x²)

= -√(4 + x²)/(4x) + C
```

---

## Partial Fractions

### Method for Proper Rational Functions

For P(x)/Q(x) where degree P < degree Q:

1. Factor Q(x) completely
2. Write partial fraction decomposition
3. Solve for coefficients
4. Integrate each term

### Linear Factors

For each factor (ax + b), include A/(ax + b)

### Example 13: Distinct Linear Factors

Evaluate ∫ (5x - 3)/((x - 1)(x + 2)) dx

```
5x - 3/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2)

Multiply both sides by (x - 1)(x + 2):
5x - 3 = A(x + 2) + B(x - 1)

Method 1: Substitution
x = 1: 2 = 3A → A = 2/3
x = -2: -13 = -3B → B = 13/3

∫ (5x - 3)/((x - 1)(x + 2)) dx = ∫ [2/(3(x-1)) + 13/(3(x+2))] dx
                                 = (2/3)ln|x - 1| + (13/3)ln|x + 2| + C
```

### Repeated Linear Factors

For (ax + b)ⁿ, include:
```
A₁/(ax + b) + A₂/(ax + b)² + ... + Aₙ/(ax + b)ⁿ
```

### Example 14: Repeated Linear Factors

Evaluate ∫ (2x + 3)/(x²(x + 1)) dx

```
(2x + 3)/(x²(x + 1)) = A/x + B/x² + C/(x + 1)

2x + 3 = Ax(x + 1) + B(x + 1) + Cx²

x = 0: 3 = B
x = -1: 1 = C
Coefficient of x²: 0 = A + C → A = -1

∫ (2x + 3)/(x²(x + 1)) dx = ∫ [-1/x + 3/x² + 1/(x+1)] dx
                            = -ln|x| - 3/x + ln|x + 1| + C
                            = ln|x + 1/x| - 3/x + C
```

### Irreducible Quadratic Factors

For ax² + bx + c (that doesn't factor), include (Ax + B)/(ax² + bx + c)

### Example 15: Quadratic Factor

Evaluate ∫ (3x + 1)/(x(x² + 1)) dx

```
(3x + 1)/(x(x² + 1)) = A/x + (Bx + C)/(x² + 1)

3x + 1 = A(x² + 1) + (Bx + C)x

x = 0: 1 = A
Coefficient of x²: 0 = A + B → B = -1
Coefficient of x: 3 = C

∫ (3x + 1)/(x(x² + 1)) dx = ∫ [1/x + (-x + 3)/(x² + 1)] dx
                            = ln|x| - (1/2)ln(x² + 1) + 3tan⁻¹x + C
```

---

## Improper Integrals

### Type 1: Infinite Interval

```
∫ₐ^∞ f(x) dx = lim_{t→∞} ∫ₐᵗ f(x) dx
```

### Example 16: Infinite Upper Limit

Evaluate ∫₁^∞ (1/x²) dx

```
∫₁^∞ (1/x²) dx = lim_{t→∞} ∫₁ᵗ x⁻² dx
                = lim_{t→∞} [-1/x]₁ᵗ
                = lim_{t→∞} [-1/t - (-1)]
                = lim_{t→∞} [1 - 1/t]
                = 1

The integral converges to 1.
```

### Example 17: Divergent Integral

Evaluate ∫₁^∞ (1/x) dx

```
∫₁^∞ (1/x) dx = lim_{t→∞} ∫₁ᵗ (1/x) dx
               = lim_{t→∞} [ln x]₁ᵗ
               = lim_{t→∞} [ln t - ln 1]
               = lim_{t→∞} ln t
               = ∞

The integral diverges.
```

### Type 2: Discontinuous Integrand

If f has a discontinuity at x = c in [a, b]:

```
∫ₐᵇ f(x) dx = lim_{t→c⁻} ∫ₐᵗ f(x) dx + lim_{s→c⁺} ∫ₛᵇ f(x) dx
```

### Example 18: Discontinuity at Endpoint

Evaluate ∫₀¹ (1/√x) dx

```
f(x) = 1/√x is discontinuous at x = 0

∫₀¹ (1/√x) dx = lim_{t→0⁺} ∫ₜ¹ x^(-1/2) dx
               = lim_{t→0⁺} [2√x]ₜ¹
               = lim_{t→0⁺} [2 - 2√t]
               = 2

The integral converges to 2.
```

---

## Numerical Integration

### Trapezoidal Rule

```
∫ₐᵇ f(x) dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]
```

Where Δx = (b - a)/n

### Simpson's Rule

```
∫ₐᵇ f(x) dx ≈ (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)]
```

(Requires n to be even)

### Example 19: Trapezoidal Rule

Approximate ∫₀² x² dx using Trapezoidal Rule with n = 4

```
Δx = 2/4 = 0.5
x values: 0, 0.5, 1, 1.5, 2

T₄ = 0.5/2[f(0) + 2f(0.5) + 2f(1) + 2f(1.5) + f(2)]
   = 0.25[0 + 2(0.25) + 2(1) + 2(2.25) + 4]
   = 0.25[0 + 0.5 + 2 + 4.5 + 4]
   = 0.25(11)
   = 2.75

(Exact value = 8/3 ≈ 2.667)
```

---

## Strategy for Integration

### General Approach

1. **Simplify** if possible (algebra, trig identities)
2. **Look for u-substitution** (chain rule pattern)
3. **Try integration by parts** (product of functions)
4. **Use trig techniques** (powers of trig functions)
5. **Trig substitution** (for √(a² ± x²) or √(x² ± a²))
6. **Partial fractions** (rational functions)
7. **Consult table or use technology** (as last resort)

---

## Key Formulas and Reference

### Integration by Parts
```
∫ u dv = uv - ∫ v du
LIATE: Logarithmic, Inverse trig, Algebraic, Trig, Exponential
```

### Trigonometric Integrals
```
∫ sinⁿx dx: Use sin²x = 1 - cos²x if n is odd
∫ cosⁿx dx: Use cos²x = 1 - sin²x if n is odd
∫ tanⁿx secᵐx dx: Use tan²x = sec²x - 1
```

### Trigonometric Substitution
```
√(a² - x²): x = a sin θ
√(a² + x²): x = a tan θ
√(x² - a²): x = a sec θ
```

### Partial Fractions
- Linear: A/(ax + b)
- Repeated: A/(ax + b)ⁿ
- Quadratic: (Ax + B)/(ax² + bx + c)

### Improper Integrals
```
∫ₐ^∞ f(x) dx = lim_{t→∞} ∫ₐᵗ f(x) dx
Converges if limit exists and is finite
```

---

**Next Unit:** Unit 7 - Applications of Integration
