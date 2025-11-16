# Calculus 3 - Unit 3: Partial Derivatives - Notes

## Table of Contents
1. [Functions of Several Variables](#functions-of-several-variables)
2. [Limits and Continuity](#limits-and-continuity)
3. [Partial Derivatives](#partial-derivatives)
4. [Tangent Planes and Linear Approximations](#tangent-planes-and-linear-approximations)
5. [Chain Rule](#chain-rule)
6. [Directional Derivatives and Gradient](#directional-derivatives-and-gradient)
7. [Maximum and Minimum Values](#maximum-and-minimum-values)
8. [Lagrange Multipliers](#lagrange-multipliers)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding functions of several variables**
- **Computing partial derivatives**
- **Finding tangent planes and linear approximations**
- **Using the chain rule for multivariable functions**
- **Computing directional derivatives and gradients**
- **Finding extreme values with and without constraints**

---

## Essential Questions
- How do we extend calculus concepts to functions of multiple variables?
- What is the geometric meaning of partial derivatives?
- How do we find the direction of steepest ascent?

---

## Functions of Several Variables

### Definition

A **function of two variables** is a rule that assigns to each ordered pair (x, y) in a domain D a unique real number f(x, y).

**Notation:** z = f(x, y)

For **three variables:** w = f(x, y, z)

### Example 1: Evaluating Functions

Let f(x, y) = x² + 3xy - y². Find:
a) f(2, 3)
b) f(-1, 4)

**Solution:**
```
a) f(2, 3) = (2)² + 3(2)(3) - (3)²
           = 4 + 18 - 9
           = 13

b) f(-1, 4) = (-1)² + 3(-1)(4) - (4)²
            = 1 - 12 - 16
            = -27
```

### Domain and Range

The **domain** is the set of all points (x, y) for which f(x, y) is defined.
The **range** is the set of all possible output values.

### Example 2: Finding Domain

Find the domain of f(x, y) = √(9 - x² - y²)

**Solution:**
```
Need: 9 - x² - y² ≥ 0
      x² + y² ≤ 9

Domain: {(x, y) : x² + y² ≤ 9}
This is a disk of radius 3 centered at the origin.
```

### Level Curves

For z = f(x, y), the **level curves** are curves in the xy-plane where f(x, y) = k for various constants k.

**Equation:** f(x, y) = k

### Example 3: Sketching Level Curves

Sketch level curves for f(x, y) = x² + y² at heights k = 0, 1, 4, 9.

**Solution:**
```
k = 0: x² + y² = 0 → point (0, 0)
k = 1: x² + y² = 1 → circle, radius 1
k = 4: x² + y² = 4 → circle, radius 2
k = 9: x² + y² = 9 → circle, radius 3

These are concentric circles. The surface z = x² + y² is a paraboloid.
```

### Example 4: Level Curves of a Plane

Find level curves for f(x, y) = 2x + 3y.

**Solution:**
```
Level curves: 2x + 3y = k
              y = -2x/3 + k/3

These are parallel lines with slope -2/3.
```

### Level Surfaces

For w = f(x, y, z), the **level surfaces** are surfaces where f(x, y, z) = k.

**Example 5:**
Describe level surfaces for f(x, y, z) = x² + y² + z².

**Solution:**
```
Level surfaces: x² + y² + z² = k
For k > 0: spheres of radius √k
For k = 0: point (0, 0, 0)
For k < 0: no level surface
```

---

## Limits and Continuity

### Limit Definition

We write lim[(x,y)→(a,b)] f(x, y) = L if f(x, y) approaches L as (x, y) approaches (a, b) along **any** path.

### Example 6: Evaluating a Limit

Find lim[(x,y)→(0,0)] (x² + y²)/(x² + y²)^(1/2)

**Solution:**
```
Convert to polar: x = r cos θ, y = r sin θ
x² + y² = r²

lim[r→0] r²/r = lim[r→0] r = 0

Therefore, the limit is 0.
```

### Example 7: Limit Does Not Exist

Show that lim[(x,y)→(0,0)] xy/(x² + y²) does not exist.

**Solution:**
```
Approach along y = x:
lim[x→0] x·x/(x² + x²) = lim[x→0] x²/(2x²) = 1/2

Approach along y = 0:
lim[x→0] x·0/(x² + 0) = lim[x→0] 0 = 0

Since different paths give different limits, the limit does not exist.
```

### Continuity

f is **continuous** at (a, b) if:
1. f(a, b) is defined
2. lim[(x,y)→(a,b)] f(x, y) exists
3. lim[(x,y)→(a,b)] f(x, y) = f(a, b)

**Theorem:** Polynomials and rational functions are continuous on their domains.

---

## Partial Derivatives

### Definition

The **partial derivative of f with respect to x** is:
```
∂f/∂x = f_x(x, y) = lim[h→0] [f(x+h, y) - f(x, y)]/h
```

Similarly for y:
```
∂f/∂y = f_y(x, y) = lim[h→0] [f(x, y+h) - f(x, y)]/h
```

**Rule:** To find ∂f/∂x, treat y as constant and differentiate with respect to x.

### Example 8: Computing Partial Derivatives

Find ∂f/∂x and ∂f/∂y for f(x, y) = x³y² + 2xy - y³.

**Solution:**
```
∂f/∂x = 3x²y² + 2y  (treat y as constant)

∂f/∂y = 2x³y + 2x - 3y²  (treat x as constant)
```

### Example 9: Partial Derivatives at a Point

Find f_x(2, 1) and f_y(2, 1) for f(x, y) = x² sin y + ye^x.

**Solution:**
```
f_x(x, y) = 2x sin y + ye^x
f_x(2, 1) = 2(2) sin 1 + 1·e²
          = 4 sin 1 + e²

f_y(x, y) = x² cos y + e^x
f_y(2, 1) = 4 cos 1 + e²
```

### Geometric Interpretation

- **f_x(a, b)** = slope of the tangent line to the curve z = f(x, b) at x = a
- **f_y(a, b)** = slope of the tangent line to the curve z = f(a, y) at y = b

### Higher-Order Partial Derivatives

```
f_xx = (f_x)_x = ∂²f/∂x²
f_yy = (f_y)_y = ∂²f/∂y²
f_xy = (f_x)_y = ∂²f/∂y∂x
f_yx = (f_y)_x = ∂²f/∂x∂y
```

**Clairaut's Theorem:** If f_xy and f_yx are continuous, then f_xy = f_yx.

### Example 10: Second-Order Partial Derivatives

Find all second-order partial derivatives for f(x, y) = x³y² - xy.

**Solution:**
```
f_x = 3x²y² - y
f_y = 2x³y - x

f_xx = 6xy²
f_yy = 2x³
f_xy = 6x²y - 1
f_yx = 6x²y - 1

Note: f_xy = f_yx (as expected by Clairaut's Theorem)
```

### Example 11: Three Variables

Find ∂f/∂x, ∂f/∂y, ∂f/∂z for f(x, y, z) = x²y + yz² - xz.

**Solution:**
```
∂f/∂x = 2xy - z  (treat y and z as constants)
∂f/∂y = x² + z²  (treat x and z as constants)
∂f/∂z = 2yz - x  (treat x and y as constants)
```

---

## Tangent Planes and Linear Approximations

### Tangent Plane Equation

The **tangent plane** to the surface z = f(x, y) at (x₀, y₀, z₀) is:
```
z - z₀ = f_x(x₀, y₀)(x - x₀) + f_y(x₀, y₀)(y - y₀)
```

### Example 12: Finding Tangent Plane

Find the equation of the tangent plane to z = x² + 2y² at (1, 1, 3).

**Solution:**
```
f_x(x, y) = 2x, so f_x(1, 1) = 2
f_y(x, y) = 4y, so f_y(1, 1) = 4

Tangent plane:
z - 3 = 2(x - 1) + 4(y - 1)
z - 3 = 2x - 2 + 4y - 4
z = 2x + 4y - 3
```

### Normal Line

The **normal line** at (x₀, y₀, z₀) has direction vector ⟨f_x, f_y, -1⟩.

**Parametric equations:**
```
x = x₀ + f_x(x₀, y₀)t
y = y₀ + f_y(x₀, y₀)t
z = z₀ - t
```

### Example 13: Normal Line

Find the normal line to z = x² + y² at (1, 2, 5).

**Solution:**
```
f_x(1, 2) = 2(1) = 2
f_y(1, 2) = 2(2) = 4

Normal line:
x = 1 + 2t
y = 2 + 4t
z = 5 - t
```

### Linear Approximation

The **linear approximation** (or **differential**) of f near (a, b) is:
```
L(x, y) = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)
```

### Example 14: Linear Approximation

Use linear approximation to estimate f(1.98, 3.01) where f(x, y) = √(x² + y²).

**Solution:**
```
Use (a, b) = (2, 3):
f(2, 3) = √(4 + 9) = √13

f_x(x, y) = x/√(x² + y²), so f_x(2, 3) = 2/√13
f_y(x, y) = y/√(x² + y²), so f_y(2, 3) = 3/√13

L(x, y) = √13 + (2/√13)(x - 2) + (3/√13)(y - 3)

L(1.98, 3.01) = √13 + (2/√13)(-0.02) + (3/√13)(0.01)
               = √13 - 0.04/√13 + 0.03/√13
               = √13 - 0.01/√13
               ≈ 3.606 - 0.0028
               ≈ 3.603
```

### Total Differential

For z = f(x, y):
```
dz = f_x dx + f_y dy
```

This approximates the change in z: Δz ≈ dz

### Example 15: Using Differentials

The radius of a cylinder is 5 cm and height is 12 cm. Use differentials to estimate the change in volume if r increases by 0.1 cm and h decreases by 0.2 cm.

**Solution:**
```
V = πr²h

∂V/∂r = 2πrh
∂V/∂h = πr²

dV = 2πrh dr + πr² dh
   = 2π(5)(12)(0.1) + π(25)(-0.2)
   = 12π - 5π
   = 7π ≈ 22 cm³
```

---

## Chain Rule

### Chain Rule (Case 1)

If z = f(x, y) where x = g(t) and y = h(t), then:
```
dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)
```

### Example 16: Chain Rule with One Parameter

Find dz/dt where z = x²y + 3y², x = sin t, y = cos t.

**Solution:**
```
∂z/∂x = 2xy
∂z/∂y = x² + 6y

dx/dt = cos t
dy/dt = -sin t

dz/dt = (2xy)(cos t) + (x² + 6y)(-sin t)
      = 2(sin t)(cos t)(cos t) + (sin²t + 6cos t)(-sin t)
      = 2 sin t cos²t - sin³t - 6 sin t cos t
```

### Chain Rule (Case 2)

If z = f(x, y) where x = g(s, t) and y = h(s, t), then:
```
∂z/∂s = (∂z/∂x)(∂x/∂s) + (∂z/∂y)(∂y/∂s)
∂z/∂t = (∂z/∂x)(∂x/∂t) + (∂z/∂y)(∂y/∂t)
```

### Example 17: Chain Rule with Two Parameters

Find ∂z/∂s where z = e^(xy), x = s², y = s + t.

**Solution:**
```
∂z/∂x = ye^(xy)
∂z/∂y = xe^(xy)

∂x/∂s = 2s
∂y/∂s = 1

∂z/∂s = (ye^(xy))(2s) + (xe^(xy))(1)
      = 2sy·e^(xy) + x·e^(xy)
      = e^(xy)(2sy + x)
      = e^(s²(s+t))[2s(s+t) + s²]
      = e^(s³+s²t)(2s² + 2st + s²)
      = e^(s³+s²t)(3s² + 2st)
```

### Implicit Differentiation

If F(x, y, z) = 0 defines z implicitly as a function of x and y, then:
```
∂z/∂x = -F_x/F_z  (provided F_z ≠ 0)
∂z/∂y = -F_y/F_z
```

### Example 18: Implicit Differentiation

Find ∂z/∂x and ∂z/∂y if x² + y² + z² = 25.

**Solution:**
```
Let F(x, y, z) = x² + y² + z² - 25

F_x = 2x
F_y = 2y
F_z = 2z

∂z/∂x = -2x/(2z) = -x/z
∂z/∂y = -2y/(2z) = -y/z
```

---

## Directional Derivatives and Gradient

### Directional Derivative

The **directional derivative** of f at (x₀, y₀) in the direction of unit vector **u** = ⟨a, b⟩ is:
```
D_u f(x₀, y₀) = lim[h→0] [f(x₀ + ha, y₀ + hb) - f(x₀, y₀)]/h
```

### Gradient Vector

The **gradient** of f is:
```
∇f = ⟨f_x, f_y⟩  or  ∇f = ⟨∂f/∂x, ∂f/∂y⟩
```

For three variables:
```
∇f = ⟨f_x, f_y, f_z⟩
```

### Theorem: Directional Derivative and Gradient

If f is differentiable, then:
```
D_u f = ∇f · u
```

### Example 19: Computing Directional Derivative

Find the directional derivative of f(x, y) = x²y - xy² at (2, 1) in the direction of v = ⟨3, 4⟩.

**Solution:**
```
First, find unit vector:
u = v/|v| = ⟨3, 4⟩/5 = ⟨3/5, 4/5⟩

Compute gradient:
f_x = 2xy - y²
f_y = x² - 2xy

∇f(2, 1) = ⟨2(2)(1) - 1², 2² - 2(2)(1)⟩ = ⟨3, 0⟩

D_u f(2, 1) = ∇f(2, 1) · u
            = ⟨3, 0⟩ · ⟨3/5, 4/5⟩
            = 9/5
```

### Properties of the Gradient

1. **Maximum rate of increase:** ∇f points in the direction of maximum rate of increase
2. **Magnitude:** |∇f| = maximum rate of increase
3. **Perpendicular to level curves:** ∇f is perpendicular to level curves
4. **Zero gradient:** ∇f = 0 at critical points

### Example 20: Maximum Rate of Increase

Find the direction in which f(x, y) = xe^y increases most rapidly at (2, 0), and find the rate.

**Solution:**
```
∇f = ⟨e^y, xe^y⟩
∇f(2, 0) = ⟨1, 2⟩

Direction of maximum increase: ⟨1, 2⟩ or unit vector ⟨1/√5, 2/√5⟩
Maximum rate of increase: |∇f(2, 0)| = √(1 + 4) = √5
```

### Tangent Plane Using Gradient

For surface F(x, y, z) = k, the tangent plane at (x₀, y₀, z₀) is:
```
F_x(x₀, y₀, z₀)(x - x₀) + F_y(x₀, y₀, z₀)(y - y₀) + F_z(x₀, y₀, z₀)(z - z₀) = 0
```

Or: ∇F(x₀, y₀, z₀) · ⟨x - x₀, y - y₀, z - z₀⟩ = 0

### Example 21: Tangent Plane to Level Surface

Find the tangent plane to x² + y² + z² = 14 at (1, 2, 3).

**Solution:**
```
F(x, y, z) = x² + y² + z²
∇F = ⟨2x, 2y, 2z⟩
∇F(1, 2, 3) = ⟨2, 4, 6⟩

Tangent plane:
2(x - 1) + 4(y - 2) + 6(z - 3) = 0
2x - 2 + 4y - 8 + 6z - 18 = 0
2x + 4y + 6z = 28
x + 2y + 3z = 14
```

---

## Maximum and Minimum Values

### Critical Points

A point (a, b) is a **critical point** if:
- f_x(a, b) = 0 and f_y(a, b) = 0, or
- f_x(a, b) or f_y(a, b) does not exist

### Second Derivative Test

At critical point (a, b), let:
```
D = D(a, b) = f_xx(a, b)·f_yy(a, b) - [f_xy(a, b)]²
```

1. If D > 0 and f_xx(a, b) > 0: **local minimum**
2. If D > 0 and f_xx(a, b) < 0: **local maximum**
3. If D < 0: **saddle point**
4. If D = 0: **test inconclusive**

### Example 22: Finding Extrema

Find and classify all critical points of f(x, y) = x³ - 3xy² + 6y².

**Solution:**
```
f_x = 3x² - 3y² = 0
f_y = -6xy + 12y = 6y(-x + 2) = 0

From f_y: y = 0 or x = 2

If y = 0: 3x² = 0, so x = 0
If x = 2: 3(4) - 3y² = 0, so y² = 4, y = ±2

Critical points: (0, 0), (2, 2), (2, -2)

Second derivatives:
f_xx = 6x
f_yy = -6x + 12
f_xy = -6y

At (0, 0): D = (0)(12) - 0 = 0 (inconclusive)

At (2, 2):
f_xx = 12, f_yy = 0, f_xy = -12
D = (12)(0) - (-12)² = -144 < 0 (saddle point)

At (2, -2):
f_xx = 12, f_yy = 0, f_xy = 12
D = (12)(0) - (12)² = -144 < 0 (saddle point)
```

### Absolute Extrema on Closed Regions

To find absolute max/min on closed bounded region D:
1. Find critical points in D
2. Find extreme values on the boundary of D
3. Compare all values

### Example 23: Absolute Extrema

Find absolute extrema of f(x, y) = x² + y² - 2x on D = {(x, y) : x² + y² ≤ 4}.

**Solution:**
```
Interior critical points:
f_x = 2x - 2 = 0 → x = 1
f_y = 2y = 0 → y = 0
Critical point: (1, 0) with f(1, 0) = 1 - 2 = -1

Boundary (x² + y² = 4):
Use x = 2cos t, y = 2sin t
f(t) = 4cos²t + 4sin²t - 4cos t = 4 - 4cos t

Maximum when cos t = -1: f = 8 at (-2, 0)
Minimum when cos t = 1: f = 0 at (2, 0)

Compare:
Interior: f(1, 0) = -1
Boundary: max = 8, min = 0

Absolute max: 8 at (-2, 0)
Absolute min: -1 at (1, 0)
```

---

## Lagrange Multipliers

### Method of Lagrange Multipliers

To find extrema of f(x, y) subject to constraint g(x, y) = k:
```
∇f = λ∇g
g(x, y) = k
```

This gives three equations in three unknowns (x, y, λ).

### Example 24: Lagrange Multipliers

Find the maximum value of f(x, y) = xy subject to x² + y² = 8.

**Solution:**
```
∇f = ⟨y, x⟩
∇g = ⟨2x, 2y⟩  where g(x, y) = x² + y²

Set ∇f = λ∇g:
y = 2λx  ... (1)
x = 2λy  ... (2)
x² + y² = 8  ... (3)

From (1): y = 2λx
Substitute into (2): x = 2λ(2λx) = 4λ²x

If x ≠ 0: 1 = 4λ², so λ = ±1/2

If λ = 1/2: y = x, so 2x² = 8, x = ±2
Points: (2, 2) and (-2, -2) with f = 4

If λ = -1/2: y = -x, so 2x² = 8, x = ±2
Points: (2, -2) and (-2, 2) with f = -4

Maximum value: 4
```

### Lagrange Multipliers with Two Constraints

To optimize f(x, y, z) subject to g(x, y, z) = k₁ and h(x, y, z) = k₂:
```
∇f = λ∇g + μ∇h
g(x, y, z) = k₁
h(x, y, z) = k₂
```

### Example 25: Two Constraints

Find the point on the curve of intersection of x² + y² = 4 and z = xy that is closest to the origin.

**Solution:**
```
Minimize: f(x, y, z) = x² + y² + z²
Subject to: g(x, y, z) = x² + y² = 4
            h(x, y, z) = z - xy = 0

∇f = ⟨2x, 2y, 2z⟩
∇g = ⟨2x, 2y, 0⟩
∇h = ⟨-y, -x, 1⟩

Equations:
2x = 2λx - μy
2y = 2λy - μx
2z = μ
x² + y² = 4
z = xy

Solving yields critical points. Testing shows minimum at
(√2, √2, 2) and similar points with distance 4 from origin.
```

---

## Key Formulas and Reference

### Partial Derivatives
```
∂f/∂x = f_x (treat other variables as constants)
∂²f/∂x² = f_xx
∂²f/∂y∂x = f_yx
```

### Tangent Plane
```
z - z₀ = f_x(x₀, y₀)(x - x₀) + f_y(x₀, y₀)(y - y₀)
```

### Linear Approximation
```
L(x, y) = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)
dz = f_x dx + f_y dy
```

### Chain Rule
```
dz/dt = (∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)
∂z/∂s = (∂z/∂x)(∂x/∂s) + (∂z/∂y)(∂y/∂s)
```

### Gradient and Directional Derivative
```
∇f = ⟨f_x, f_y⟩  or  ⟨f_x, f_y, f_z⟩
D_u f = ∇f · u  (u is unit vector)
Max rate of increase = |∇f|
```

### Extrema
```
Critical points: ∇f = 0
D = f_xx·f_yy - (f_xy)²
D > 0, f_xx > 0: local min
D > 0, f_xx < 0: local max
D < 0: saddle point
```

### Lagrange Multipliers
```
∇f = λ∇g  (with constraint g = k)
```

---

## Practice Problems

1. Find f_x and f_y for f(x, y) = x²y³ + sin(xy)
2. Find the domain of f(x, y) = ln(x - y)
3. Sketch level curves for f(x, y) = x - y at k = -2, 0, 2
4. Find the tangent plane to z = x² + y² at (1, 2, 5)
5. Use linear approximation to estimate √(3.98² + 4.02²)
6. Find dz/dt where z = x²y, x = t², y = t³
7. Find ∇f for f(x, y) = e^(xy)
8. Find D_u f(1, 1) for f(x, y) = x² + y² in direction ⟨1, 1⟩
9. Find critical points of f(x, y) = x² + y² - 2x - 4y
10. Maximize f(x, y) = x + y subject to x² + y² = 2

---

**End of Notes**
