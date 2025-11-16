# Calculus 2 - Unit 3: Parametric Equations and Polar Coordinates - Notes

## Table of Contents
1. [Parametric Equations](#parametric-equations)
2. [Calculus with Parametric Curves](#calculus-with-parametric-curves)
3. [Arc Length in Parametric Form](#arc-length-in-parametric-form)
4. [Surface Area in Parametric Form](#surface-area-in-parametric-form)
5. [Polar Coordinates](#polar-coordinates)
6. [Calculus in Polar Coordinates](#calculus-in-polar-coordinates)
7. [Area in Polar Coordinates](#area-in-polar-coordinates)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understand and graph parametric equations**
- **Find derivatives and tangent lines for parametric curves**
- **Calculate arc length and surface area using parametric equations**
- **Convert between rectangular and polar coordinates**
- **Find areas and tangent lines in polar coordinates**

---

## Essential Questions
- How do parametric equations provide flexibility in describing curves?
- What is the geometric meaning of dx/dt and dy/dt?
- How do polar coordinates simplify certain curves?
- When is polar form more natural than rectangular form?

---

## Parametric Equations

### Definition

**Parametric Equations:** Instead of y as a function of x, both x and y are functions of a parameter t:
```
x = f(t)
y = g(t)
```

### Advantages of Parametric Form

1. Can represent curves that fail the vertical line test
2. Natural for describing motion
3. Can trace curves multiple times
4. Can control direction and speed

### Example 1: Circle

Describe a circle of radius r centered at the origin.

```
Rectangular: x² + y² = r²

Parametric: x = r cos(t)
           y = r sin(t)
           0 ≤ t ≤ 2π

Verification: x² + y² = r²cos²(t) + r²sin²(t) = r²
```

### Example 2: Line Segment

Find parametric equations for the line segment from (1, 2) to (5, 7).

```
General form: x = x₁ + (x₂ - x₁)t
             y = y₁ + (y₂ - y₁)t
             0 ≤ t ≤ 1

Here: x = 1 + 4t
      y = 2 + 5t
      0 ≤ t ≤ 1

When t = 0: (x, y) = (1, 2)
When t = 1: (x, y) = (5, 7)
```

### Example 3: Cycloid

A cycloid is the curve traced by a point on the rim of a circle of radius a rolling along a line.

```
Parametric equations:
x = a(t - sin(t))
y = a(1 - cos(t))

where t is the angle through which the circle has rotated.
```

### Example 4: Eliminating the Parameter

Given x = t² + 1, y = 2t, find the rectangular equation.

```
From y = 2t, we get t = y/2

Substitute into x = t² + 1:
x = (y/2)² + 1
x = y²/4 + 1

Rectangular form: y² = 4(x - 1) (parabola)
```

### Example 5: Multiple Representations

The curve y = x² can be parametrized in multiple ways:

```
Option 1: x = t, y = t²
Option 2: x = sin(t), y = sin²(t)
Option 3: x = e^t, y = e^(2t)

All represent the same geometric curve but trace it differently.
```

---

## Calculus with Parametric Curves

### Slope and Tangent Lines

For parametric curve x = f(t), y = g(t):

**Slope:**
```
dy/dx = (dy/dt)/(dx/dt) = g'(t)/f'(t)
```

**Horizontal tangent:** dy/dt = 0 (and dx/dt ≠ 0)

**Vertical tangent:** dx/dt = 0 (and dy/dt ≠ 0)

### Example 6: Finding Slope

For x = t³ - 3t, y = t², find dy/dx at t = 2.

```
dx/dt = 3t² - 3
dy/dt = 2t

dy/dx = 2t/(3t² - 3) = 2t/(3(t² - 1))

At t = 2:
dy/dx = 4/(3(3)) = 4/9
```

### Example 7: Tangent and Normal Lines

Find the tangent line to x = cos(t), y = sin(t) at t = π/4.

```
Point: x = cos(π/4) = √2/2, y = sin(π/4) = √2/2

dx/dt = -sin(t)
dy/dt = cos(t)

dy/dx = cos(t)/(-sin(t)) = -cot(t)

At t = π/4: dy/dx = -cot(π/4) = -1

Tangent line: y - √2/2 = -1(x - √2/2)
             y = -x + √2
```

### Second Derivative

**Formula:**
```
d²y/dx² = d/dx(dy/dx) = (d/dt(dy/dx))/(dx/dt)
```

### Example 8: Second Derivative

For x = t², y = t³, find d²y/dx².

```
dy/dx = (3t²)/(2t) = 3t/2

d²y/dx² = d/dt(3t/2) / (dx/dt)
        = (3/2)/(2t)
        = 3/(4t)
```

### Example 9: Concavity

Determine where x = t³ - 3t, y = t² is concave up.

```
dy/dx = 2t/(3t² - 3)

To find d²y/dx²:
d/dt(dy/dx) = d/dt[2t/(3t² - 3)]

Using quotient rule:
= [2(3t² - 3) - 2t(6t)]/(3t² - 3)²
= [6t² - 6 - 12t²]/(3t² - 3)²
= (-6t² - 6)/(3t² - 3)²

d²y/dx² = [(-6t² - 6)/(3t² - 3)²]/(3t² - 3)
        = (-6t² - 6)/(3t² - 3)³

Concave up when d²y/dx² > 0:
This requires -6t² - 6 < 0 (always true) and (3t² - 3)³ < 0
So concave up when -1 < t < 1
```

---

## Arc Length in Parametric Form

### Arc Length Formula

For parametric curve x = f(t), y = g(t) from t = a to t = b:

```
L = ∫[a to b] √((dx/dt)² + (dy/dt)²) dt
```

### Example 10: Circle Arc Length

Find the circumference of the circle x = 3cos(t), y = 3sin(t), 0 ≤ t ≤ 2π.

```
dx/dt = -3sin(t)
dy/dt = 3cos(t)

L = ∫[0 to 2π] √(9sin²(t) + 9cos²(t)) dt
  = ∫[0 to 2π] √9 dt
  = ∫[0 to 2π] 3 dt
  = 3t |[0 to 2π]
  = 6π
```

### Example 11: Cycloid Arc Length

Find one arch of the cycloid x = t - sin(t), y = 1 - cos(t), 0 ≤ t ≤ 2π.

```
dx/dt = 1 - cos(t)
dy/dt = sin(t)

L = ∫[0 to 2π] √((1 - cos(t))² + sin²(t)) dt
  = ∫[0 to 2π] √(1 - 2cos(t) + cos²(t) + sin²(t)) dt
  = ∫[0 to 2π] √(2 - 2cos(t)) dt
  = ∫[0 to 2π] √(2(1 - cos(t))) dt

Using identity: 1 - cos(t) = 2sin²(t/2)

  = ∫[0 to 2π] √(4sin²(t/2)) dt
  = ∫[0 to 2π] 2|sin(t/2)| dt
  = ∫[0 to 2π] 2sin(t/2) dt  [since sin(t/2) ≥ 0 for 0 ≤ t ≤ 2π]
  = -4cos(t/2) |[0 to 2π]
  = -4(-1 - 1)
  = 8
```

---

## Surface Area in Parametric Form

### Surface Area Formulas

**About x-axis:**
```
S = 2π ∫[a to b] y√((dx/dt)² + (dy/dt)²) dt
```

**About y-axis:**
```
S = 2π ∫[a to b] x√((dx/dt)² + (dy/dt)²) dt
```

### Example 12: Surface Area

Find the surface area of the sphere generated by rotating x = r cos(t), y = r sin(t), 0 ≤ t ≤ π about the x-axis.

```
dx/dt = -r sin(t)
dy/dt = r cos(t)

√((dx/dt)² + (dy/dt)²) = r

S = 2π ∫[0 to π] r sin(t) · r dt
  = 2πr² ∫[0 to π] sin(t) dt
  = 2πr² [-cos(t)] |[0 to π]
  = 2πr² [1 - (-1)]
  = 4πr²
```

---

## Polar Coordinates

### Definition

**Polar Coordinates:** A point P is represented by (r, θ) where:
- r = distance from origin
- θ = angle from positive x-axis (measured counterclockwise)

### Conversion Formulas

**Polar to Rectangular:**
```
x = r cos(θ)
y = r sin(θ)
```

**Rectangular to Polar:**
```
r² = x² + y²
tan(θ) = y/x
```

### Example 13: Conversions

Convert (3, π/3) from polar to rectangular.

```
x = 3 cos(π/3) = 3(1/2) = 3/2
y = 3 sin(π/3) = 3(√3/2) = 3√3/2

Rectangular: (3/2, 3√3/2)
```

Convert (1, √3) from rectangular to polar.

```
r = √(1² + (√3)²) = √4 = 2
tan(θ) = √3/1 = √3  →  θ = π/3

Polar: (2, π/3)
```

### Common Polar Curves

**Circle through origin:** r = a sin(θ) or r = a cos(θ)

**Circle centered at origin:** r = a

**Line through origin:** θ = constant

**Spiral:** r = aθ (Archimedean spiral)

**Rose curves:** r = a sin(nθ) or r = a cos(nθ)
- n petals if n is odd
- 2n petals if n is even

**Lemniscate:** r² = a² cos(2θ)

**Cardioid:** r = a(1 + cos(θ)) or r = a(1 + sin(θ))

### Example 14: Graphing Polar Curves

Graph r = 2 + 2cos(θ)

```
This is a cardioid.

Key points:
θ = 0: r = 4
θ = π/2: r = 2
θ = π: r = 0
θ = 3π/2: r = 2
θ = 2π: r = 4

The curve has a cusp at the origin and extends to r = 4.
```

### Example 15: Rose Curve

Graph r = 3 sin(2θ)

```
This is a 4-petal rose (n = 2, so 2n = 4 petals)

Petals occur when sin(2θ) = ±1:
2θ = π/2, 3π/2, 5π/2, 7π/2
θ = π/4, 3π/4, 5π/4, 7π/4

Maximum r = 3
```

---

## Calculus in Polar Coordinates

### Slope in Polar Form

For r = f(θ):

```
dy/dx = (dy/dθ)/(dx/dθ) = (dr/dθ · sin(θ) + r cos(θ))/(dr/dθ · cos(θ) - r sin(θ))
```

### Example 16: Tangent Line in Polar

Find the slope of r = 1 + sin(θ) at θ = π/3.

```
r = 1 + sin(θ)
dr/dθ = cos(θ)

At θ = π/3:
r = 1 + √3/2 = (2 + √3)/2
dr/dθ = 1/2

dy/dx = [cos(π/3)·sin(π/3) + (1 + sin(π/3))cos(π/3)] / [cos(π/3)·cos(π/3) - (1 + sin(π/3))sin(π/3)]

= [(1/2)(√3/2) + ((2 + √3)/2)(1/2)] / [(1/2)(1/2) - ((2 + √3)/2)(√3/2)]

= [√3/4 + (2 + √3)/4] / [1/4 - (2√3 + 3)/4]

= (2 + 2√3)/4 / ((1 - 2√3 - 3)/4)

= (2 + 2√3)/(-2 - 2√3)

= -1
```

### Horizontal and Vertical Tangents

**Horizontal:** dy/dθ = 0
**Vertical:** dx/dθ = 0

### Example 17: Finding Horizontal Tangents

Find horizontal tangent lines to r = 1 + cos(θ).

```
x = r cos(θ) = (1 + cos(θ))cos(θ)
y = r sin(θ) = (1 + cos(θ))sin(θ)

dy/dθ = -sin²(θ) + cos(θ)(1 + cos(θ))
      = -sin²(θ) + cos(θ) + cos²(θ)
      = cos²(θ) - sin²(θ) + cos(θ)
      = cos(2θ) + cos(θ)

Setting dy/dθ = 0:
cos(2θ) + cos(θ) = 0
2cos²(θ) - 1 + cos(θ) = 0
2cos²(θ) + cos(θ) - 1 = 0
(2cos(θ) - 1)(cos(θ) + 1) = 0

cos(θ) = 1/2 or cos(θ) = -1
θ = π/3, 5π/3, π
```

---

## Area in Polar Coordinates

### Area Formula

For region bounded by r = f(θ) from θ = a to θ = b:

```
A = (1/2) ∫[a to b] r² dθ = (1/2) ∫[a to b] [f(θ)]² dθ
```

### Example 18: Area Inside a Circle

Find the area inside r = 3.

```
A = (1/2) ∫[0 to 2π] 9 dθ
  = (9/2) θ |[0 to 2π]
  = 9π
```

### Example 19: Area of Cardioid

Find the area enclosed by r = 2(1 + cos(θ)).

```
A = (1/2) ∫[0 to 2π] 4(1 + cos(θ))² dθ
  = 2 ∫[0 to 2π] (1 + 2cos(θ) + cos²(θ)) dθ
  = 2 ∫[0 to 2π] (1 + 2cos(θ) + (1 + cos(2θ))/2) dθ
  = 2 ∫[0 to 2π] (3/2 + 2cos(θ) + (1/2)cos(2θ)) dθ
  = 2[(3/2)θ + 2sin(θ) + (1/4)sin(2θ)] |[0 to 2π]
  = 2[3π + 0 + 0]
  = 6π
```

### Example 20: Area of One Petal

Find the area of one petal of r = sin(3θ).

```
One petal: 0 ≤ θ ≤ π/3

A = (1/2) ∫[0 to π/3] sin²(3θ) dθ
  = (1/2) ∫[0 to π/3] (1 - cos(6θ))/2 dθ
  = (1/4) [θ - sin(6θ)/6] |[0 to π/3]
  = (1/4) [π/3 - sin(2π)/6]
  = (1/4)(π/3)
  = π/12
```

### Area Between Two Curves

For r₁ ≤ r₂:

```
A = (1/2) ∫[a to b] (r₂² - r₁²) dθ
```

### Example 21: Area Between Curves

Find the area inside r = 2 + 2cos(θ) but outside r = 2.

```
Find intersection: 2 + 2cos(θ) = 2  →  cos(θ) = 0
θ = π/2, 3π/2

By symmetry, compute from -π/2 to π/2 and double:

A = 2 · (1/2) ∫[-π/2 to π/2] [(2 + 2cos(θ))² - 4] dθ
  = ∫[-π/2 to π/2] [4 + 8cos(θ) + 4cos²(θ) - 4] dθ
  = ∫[-π/2 to π/2] [8cos(θ) + 4cos²(θ)] dθ
  = ∫[-π/2 to π/2] [8cos(θ) + 2(1 + cos(2θ))] dθ
  = [8sin(θ) + 2θ + sin(2θ)] |[-π/2 to π/2]
  = [8(1) + π + 0] - [8(-1) - π + 0]
  = 8 + π + 8 + π
  = 16 + 2π
```

---

## Key Formulas and Reference

### Parametric Equations
```
Slope: dy/dx = (dy/dt)/(dx/dt)

Second derivative: d²y/dx² = (d/dt(dy/dx))/(dx/dt)

Arc length: L = ∫[a to b] √((dx/dt)² + (dy/dt)²) dt

Surface area (x-axis): S = 2π ∫ y√((dx/dt)² + (dy/dt)²) dt
```

### Polar Coordinates
```
Conversions:
x = r cos(θ), y = r sin(θ)
r² = x² + y², tan(θ) = y/x

Slope: dy/dx = (r'sin(θ) + r cos(θ))/(r'cos(θ) - r sin(θ))

Area: A = (1/2) ∫[a to b] r² dθ

Arc length: L = ∫[a to b] √(r² + (dr/dθ)²) dθ
```

### Common Polar Curves
```
Circle: r = a
Cardioid: r = a(1 ± cos(θ)) or r = a(1 ± sin(θ))
Rose: r = a sin(nθ) or r = a cos(nθ)
Lemniscate: r² = a² sin(2θ) or r² = a² cos(2θ)
Spiral: r = aθ
Limaçon: r = a ± b cos(θ) or r = a ± b sin(θ)
```

---

**Next Unit:** Unit 4 - Sequences
