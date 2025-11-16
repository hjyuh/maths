# Calculus 2 - Unit 1: Integration Techniques Review - Notes

## Table of Contents
1. [Advanced U-Substitution](#advanced-u-substitution)
2. [Integration by Parts](#integration-by-parts)
3. [Trigonometric Integrals](#trigonometric-integrals)
4. [Trigonometric Substitution](#trigonometric-substitution)
5. [Partial Fractions](#partial-fractions)
6. [Integration Strategy](#integration-strategy)
7. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Master advanced u-substitution techniques**
- **Apply integration by parts effectively**
- **Evaluate trigonometric integrals**
- **Use trigonometric substitution for radical expressions**
- **Decompose rational functions using partial fractions**

---

## Essential Questions
- How do we choose the best integration technique?
- When should we use integration by parts?
- How do trigonometric identities simplify integration?
- What patterns indicate trigonometric substitution?

---

## Advanced U-Substitution

### Review of Basic U-Substitution

**Key Principle:** If we can identify f(g(x))·g'(x), then:
```
∫ f(g(x))·g'(x) dx = ∫ f(u) du  where u = g(x)
```

### Example 1: Rational Function

Evaluate ∫ x/(x² + 1) dx

```
Let u = x² + 1
Then du = 2x dx, so x dx = (1/2) du

∫ x/(x² + 1) dx = ∫ (1/2) · (1/u) du
                 = (1/2) ln|u| + C
                 = (1/2) ln(x² + 1) + C
```

### Example 2: Trigonometric Substitution Setup

Evaluate ∫ sin³(x) cos(x) dx

```
Let u = sin(x)
Then du = cos(x) dx

∫ sin³(x) cos(x) dx = ∫ u³ du
                     = (1/4)u⁴ + C
                     = (1/4)sin⁴(x) + C
```

### Example 3: Completing the Square First

Evaluate ∫ 1/(x² + 4x + 13) dx

```
Complete the square: x² + 4x + 13 = (x + 2)² + 9

Let u = x + 2, then du = dx

∫ 1/(x² + 4x + 13) dx = ∫ 1/(u² + 9) du
                       = (1/3) arctan(u/3) + C
                       = (1/3) arctan((x + 2)/3) + C
```

---

## Integration by Parts

### The Formula

**Integration by Parts Formula:**
```
∫ u dv = uv - ∫ v du
```

**Key:** Choose u and dv wisely!

### LIATE Rule for Choosing u

Priority for choosing u (from highest to lowest):
1. **L** - Logarithmic functions (ln x, log x)
2. **I** - Inverse trig functions (arctan x, arcsin x)
3. **A** - Algebraic functions (x², x³, √x)
4. **T** - Trigonometric functions (sin x, cos x)
5. **E** - Exponential functions (eˣ, 2ˣ)

### Example 4: Basic Integration by Parts

Evaluate ∫ x eˣ dx

```
Using LIATE: u = x (algebraic), dv = eˣ dx

u = x           →  du = dx
dv = eˣ dx      →  v = eˣ

∫ x eˣ dx = x·eˣ - ∫ eˣ dx
          = x·eˣ - eˣ + C
          = eˣ(x - 1) + C
```

### Example 5: Logarithmic Function

Evaluate ∫ ln(x) dx

```
Using LIATE: u = ln(x), dv = dx

u = ln(x)       →  du = (1/x) dx
dv = dx         →  v = x

∫ ln(x) dx = x ln(x) - ∫ x · (1/x) dx
           = x ln(x) - ∫ 1 dx
           = x ln(x) - x + C
```

### Example 6: Multiple Applications

Evaluate ∫ x² eˣ dx

```
First application:
u = x²          →  du = 2x dx
dv = eˣ dx      →  v = eˣ

∫ x² eˣ dx = x² eˣ - ∫ 2x eˣ dx

Second application on ∫ 2x eˣ dx:
u = 2x          →  du = 2 dx
dv = eˣ dx      →  v = eˣ

∫ 2x eˣ dx = 2x eˣ - ∫ 2 eˣ dx
           = 2x eˣ - 2 eˣ

Combining:
∫ x² eˣ dx = x² eˣ - (2x eˣ - 2 eˣ) + C
           = x² eˣ - 2x eˣ + 2 eˣ + C
           = eˣ(x² - 2x + 2) + C
```

### Example 7: Tabular Method

Evaluate ∫ x³ sin(x) dx using tabular integration

```
Derivatives of x³     |  Integrals of sin(x)
        +             |
    x³                |     sin(x)
        -             |
    3x²               |    -cos(x)
        +             |
    6x                |    -sin(x)
        -             |
    6                 |     cos(x)
        +             |
    0                 |     sin(x)

∫ x³ sin(x) dx = -x³ cos(x) + 3x² sin(x) + 6x cos(x) - 6 sin(x) + C
```

---

## Trigonometric Integrals

### Powers of Sine and Cosine

**Strategy 1:** If the power of sin or cos is odd, save one factor and convert the rest using sin²x + cos²x = 1

**Strategy 2:** If both powers are even, use power-reducing formulas

### Example 8: Odd Power of Sine

Evaluate ∫ sin³(x) dx

```
∫ sin³(x) dx = ∫ sin²(x) · sin(x) dx
             = ∫ (1 - cos²(x)) sin(x) dx

Let u = cos(x), du = -sin(x) dx

= -∫ (1 - u²) du
= -u + (1/3)u³ + C
= -cos(x) + (1/3)cos³(x) + C
```

### Example 9: Even Powers

Evaluate ∫ sin²(x) cos²(x) dx

```
Use identities:
sin²(x) = (1 - cos(2x))/2
cos²(x) = (1 + cos(2x))/2

∫ sin²(x) cos²(x) dx = ∫ [(1 - cos(2x))/2][(1 + cos(2x))/2] dx
                      = (1/4) ∫ (1 - cos²(2x)) dx
                      = (1/4) ∫ [1 - (1 + cos(4x))/2] dx
                      = (1/4) ∫ [1/2 - (1/2)cos(4x)] dx
                      = (1/8)x - (1/32)sin(4x) + C
```

### Powers of Tangent and Secant

**Key Identity:** tan²x + 1 = sec²x

### Example 10: Tangent and Secant

Evaluate ∫ tan³(x) sec³(x) dx

```
∫ tan³(x) sec³(x) dx = ∫ tan²(x) sec²(x) · tan(x) sec(x) dx
                      = ∫ (sec²(x) - 1) sec²(x) · tan(x) sec(x) dx

Let u = sec(x), du = sec(x) tan(x) dx

= ∫ (u² - 1) u² du
= ∫ (u⁴ - u²) du
= (1/5)u⁵ - (1/3)u³ + C
= (1/5)sec⁵(x) - (1/3)sec³(x) + C
```

### Example 11: Product of Sines and Cosines

Evaluate ∫ sin(3x) cos(5x) dx

```
Use product-to-sum formula:
sin(A) cos(B) = (1/2)[sin(A - B) + sin(A + B)]

∫ sin(3x) cos(5x) dx = (1/2) ∫ [sin(-2x) + sin(8x)] dx
                      = (1/2) ∫ [-sin(2x) + sin(8x)] dx
                      = (1/2)[(1/2)cos(2x) - (1/8)cos(8x)] + C
                      = (1/4)cos(2x) - (1/16)cos(8x) + C
```

---

## Trigonometric Substitution

### Three Standard Forms

**Form 1:** √(a² - x²)  →  Let x = a sin(θ)
**Form 2:** √(a² + x²)  →  Let x = a tan(θ)
**Form 3:** √(x² - a²)  →  Let x = a sec(θ)

### Example 12: Form 1 - √(a² - x²)

Evaluate ∫ √(9 - x²) dx

```
Let x = 3 sin(θ), dx = 3 cos(θ) dθ
√(9 - x²) = √(9 - 9sin²(θ)) = 3 cos(θ)

∫ √(9 - x²) dx = ∫ 3 cos(θ) · 3 cos(θ) dθ
                = 9 ∫ cos²(θ) dθ
                = 9 ∫ (1 + cos(2θ))/2 dθ
                = (9/2)[θ + (1/2)sin(2θ)] + C
                = (9/2)θ + (9/4)sin(2θ) + C

Back-substitute:
θ = arcsin(x/3)
sin(2θ) = 2 sin(θ) cos(θ) = 2(x/3)√(9 - x²)/3 = (2x√(9 - x²))/9

= (9/2)arcsin(x/3) + (x√(9 - x²))/2 + C
```

### Example 13: Form 2 - √(a² + x²)

Evaluate ∫ 1/(x² √(x² + 4)) dx

```
Let x = 2 tan(θ), dx = 2 sec²(θ) dθ
√(x² + 4) = √(4 tan²(θ) + 4) = 2 sec(θ)

∫ 1/(x² √(x² + 4)) dx = ∫ 1/(4 tan²(θ) · 2 sec(θ)) · 2 sec²(θ) dθ
                       = ∫ sec(θ)/(4 tan²(θ)) dθ
                       = (1/4) ∫ cos(θ)/sin²(θ) dθ

Let u = sin(θ), du = cos(θ) dθ

= (1/4) ∫ u⁻² du
= -(1/4)u⁻¹ + C
= -1/(4 sin(θ)) + C

Back-substitute:
sin(θ) = x/√(x² + 4)

= -√(x² + 4)/(4x) + C
```

### Example 14: Form 3 - √(x² - a²)

Evaluate ∫ √(x² - 25)/x dx

```
Let x = 5 sec(θ), dx = 5 sec(θ) tan(θ) dθ
√(x² - 25) = √(25 sec²(θ) - 25) = 5 tan(θ)

∫ √(x² - 25)/x dx = ∫ (5 tan(θ))/(5 sec(θ)) · 5 sec(θ) tan(θ) dθ
                   = 5 ∫ tan²(θ) dθ
                   = 5 ∫ (sec²(θ) - 1) dθ
                   = 5[tan(θ) - θ] + C

Back-substitute:
sec(θ) = x/5, so tan(θ) = √(x² - 25)/5, θ = arcsec(x/5)

= √(x² - 25) - 5 arcsec(x/5) + C
```

---

## Partial Fractions

### When to Use Partial Fractions

Use for rational functions P(x)/Q(x) where:
1. Degree of P < Degree of Q (if not, use long division first)
2. Q(x) can be factored

### Case 1: Distinct Linear Factors

**Form:** (Ax + B)/((x - a)(x - b)) = A/(x - a) + B/(x - b)

### Example 15: Distinct Linear Factors

Evaluate ∫ (5x - 3)/(x² - 4) dx

```
Factor: x² - 4 = (x - 2)(x + 2)

(5x - 3)/((x - 2)(x + 2)) = A/(x - 2) + B/(x + 2)

Multiply both sides by (x - 2)(x + 2):
5x - 3 = A(x + 2) + B(x - 2)

Method 1: Substitution
Let x = 2:  10 - 3 = 4A  →  A = 7/4
Let x = -2: -10 - 3 = -4B  →  B = 13/4

∫ (5x - 3)/(x² - 4) dx = (7/4) ∫ 1/(x - 2) dx + (13/4) ∫ 1/(x + 2) dx
                        = (7/4) ln|x - 2| + (13/4) ln|x + 2| + C
```

### Case 2: Repeated Linear Factors

**Form:** P(x)/(x - a)ⁿ = A₁/(x - a) + A₂/(x - a)² + ... + Aₙ/(x - a)ⁿ

### Example 16: Repeated Linear Factors

Evaluate ∫ (2x + 1)/(x²(x - 1)) dx

```
(2x + 1)/(x²(x - 1)) = A/x + B/x² + C/(x - 1)

Multiply by x²(x - 1):
2x + 1 = Ax(x - 1) + B(x - 1) + Cx²

Let x = 0:  1 = -B  →  B = -1
Let x = 1:  3 = C
Expand and compare coefficients:
2x + 1 = Ax² - Ax - x + 1 + Cx²
       = (A + C)x² - (A + 1)x + 1

Coefficient of x²: 0 = A + C  →  A = -3

∫ (2x + 1)/(x²(x - 1)) dx = -3 ∫ 1/x dx - ∫ 1/x² dx + 3 ∫ 1/(x - 1) dx
                           = -3 ln|x| + 1/x + 3 ln|x - 1| + C
```

### Case 3: Irreducible Quadratic Factors

**Form:** (Ax + B)/(x² + bx + c) where x² + bx + c cannot be factored

### Example 17: Irreducible Quadratic

Evaluate ∫ (3x² + 2x + 1)/((x - 1)(x² + 1)) dx

```
(3x² + 2x + 1)/((x - 1)(x² + 1)) = A/(x - 1) + (Bx + C)/(x² + 1)

Multiply by (x - 1)(x² + 1):
3x² + 2x + 1 = A(x² + 1) + (Bx + C)(x - 1)

Let x = 1:  6 = 2A  →  A = 3

Expand right side:
3x² + 2x + 1 = Ax² + A + Bx² - Bx + Cx - C
             = (A + B)x² + (-B + C)x + (A - C)

Coefficient of x²: 3 = 3 + B  →  B = 0
Coefficient of x: 2 = -B + C  →  C = 2

∫ (3x² + 2x + 1)/((x - 1)(x² + 1)) dx = 3 ∫ 1/(x - 1) dx + 2 ∫ 1/(x² + 1) dx
                                       = 3 ln|x - 1| + 2 arctan(x) + C
```

### Example 18: Long Division First

Evaluate ∫ (x³ + 1)/(x² + 1) dx

```
Degree of numerator ≥ degree of denominator, so divide first:

    x
   ___________
x² + 1 | x³ + 0x² + 0x + 1
         x³      + x
         ___________
                -x + 1

(x³ + 1)/(x² + 1) = x + (-x + 1)/(x² + 1)

∫ (x³ + 1)/(x² + 1) dx = ∫ x dx + ∫ (-x)/(x² + 1) dx + ∫ 1/(x² + 1) dx

For ∫ (-x)/(x² + 1) dx, let u = x² + 1, du = 2x dx:
= -(1/2) ln(x² + 1)

Final answer:
= (1/2)x² - (1/2) ln(x² + 1) + arctan(x) + C
```

---

## Integration Strategy

### Decision Tree for Integration

**Step 1:** Simplify the integrand if possible
- Expand products
- Split up fractions
- Use algebraic identities

**Step 2:** Look for obvious patterns
- Basic formulas
- Simple u-substitution

**Step 3:** Classify the integrand

**For Products:**
- Try u-substitution
- Try integration by parts
- For trig products, use identities

**For Rational Functions:**
- Try u-substitution
- Try partial fractions

**For Expressions with √(a² ± x²) or √(x² - a²):**
- Try trigonometric substitution

**For Trigonometric Integrals:**
- Use identities to simplify
- Look for derivatives

### Example 19: Strategy Practice

Evaluate ∫ x³/(1 + x²) dx

```
Method: Long division or u-substitution

Rewrite: x³/(1 + x²) = x · x²/(1 + x²)

Let u = 1 + x², du = 2x dx
Then x² = u - 1, and x dx = (1/2) du

∫ x³/(1 + x²) dx = ∫ (u - 1)/u · (1/2) du
                  = (1/2) ∫ (1 - 1/u) du
                  = (1/2)[u - ln|u|] + C
                  = (1/2)(1 + x²) - (1/2) ln(1 + x²) + C
                  = (1/2)x² + 1/2 - (1/2) ln(1 + x²) + C
                  = (1/2)x² - (1/2) ln(1 + x²) + C₁
```

### Example 20: Complex Integration

Evaluate ∫ (x² + 2x - 1)/((x² + 1)(x - 2)) dx

```
Partial fractions:
(x² + 2x - 1)/((x² + 1)(x - 2)) = (Ax + B)/(x² + 1) + C/(x - 2)

Multiply by (x² + 1)(x - 2):
x² + 2x - 1 = (Ax + B)(x - 2) + C(x² + 1)

Let x = 2:  4 + 4 - 1 = 5C  →  C = 7/5

Expand:
x² + 2x - 1 = Ax² - 2Ax + Bx - 2B + Cx² + C
            = (A + C)x² + (-2A + B)x + (-2B + C)

A + C = 1  →  A = 1 - 7/5 = -2/5
-2A + B = 2  →  B = 2 + 2(-2/5) = 2 - 4/5 = 6/5

∫ (x² + 2x - 1)/((x² + 1)(x - 2)) dx = ∫ (-2x/5 + 6/5)/(x² + 1) dx + (7/5) ∫ 1/(x - 2) dx

= (-1/5) ln(x² + 1) + (6/5) arctan(x) + (7/5) ln|x - 2| + C
```

---

## Key Formulas and Reference

### Integration by Parts
```
∫ u dv = uv - ∫ v du

LIATE Rule: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential
```

### Trigonometric Identities
```
sin²x + cos²x = 1
tan²x + 1 = sec²x
1 + cot²x = csc²x

sin²x = (1 - cos(2x))/2
cos²x = (1 + cos(2x))/2

sin(A)cos(B) = (1/2)[sin(A - B) + sin(A + B)]
cos(A)cos(B) = (1/2)[cos(A - B) + cos(A + B)]
sin(A)sin(B) = (1/2)[cos(A - B) - cos(A + B)]
```

### Trigonometric Substitution
```
√(a² - x²)  →  x = a sin(θ), dx = a cos(θ) dθ
√(a² + x²)  →  x = a tan(θ), dx = a sec²(θ) dθ
√(x² - a²)  →  x = a sec(θ), dx = a sec(θ) tan(θ) dθ
```

### Partial Fractions Setup
```
Distinct linear:      A/(x - a) + B/(x - b)
Repeated linear:      A/(x - a) + B/(x - a)²
Irreducible quadratic: (Ax + B)/(x² + bx + c)
```

### Common Integrals
```
∫ ln(x) dx = x ln(x) - x + C
∫ eˣ sin(x) dx = (eˣ/2)(sin(x) - cos(x)) + C
∫ eˣ cos(x) dx = (eˣ/2)(sin(x) + cos(x)) + C
∫ sec(x) dx = ln|sec(x) + tan(x)| + C
∫ csc(x) dx = -ln|csc(x) + cot(x)| + C
```

---

**Next Unit:** Unit 2 - Applications of Integration
