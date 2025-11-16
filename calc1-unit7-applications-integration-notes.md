# Calculus 1 - Unit 7: Applications of Integration - Notes

## Table of Contents
1. [Area Between Curves](#area-between-curves)
2. [Volumes by Slicing](#volumes-by-slicing)
3. [Volumes by Disks and Washers](#volumes-by-disks-and-washers)
4. [Volumes by Cylindrical Shells](#volumes-by-cylindrical-shells)
5. [Arc Length](#arc-length)
6. [Surface Area](#surface-area)
7. [Work](#work)
8. [Average Value and Applications](#average-value-and-applications)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Finding areas between curves**
- **Computing volumes using disk, washer, and shell methods**
- **Calculating arc length of curves**
- **Finding surface areas of revolution**
- **Applying integration to physics problems (work, center of mass)**

---

## Essential Questions
- How can we use integration to find areas and volumes?
- What is the difference between disk, washer, and shell methods?
- How does integration help solve real-world problems?
- When should we use each volume method?

---

## Area Between Curves

### Formula for Area Between Curves

If f(x) ≥ g(x) on [a, b], then:
```
A = ∫ₐᵇ [f(x) - g(x)] dx
```

**Key Idea:** Integrate [top function - bottom function]

### Example 1: Area Between Two Curves

Find the area between y = x² and y = x from x = 0 to x = 1.

```
Determine which is on top:
At x = 0.5: x² = 0.25, x = 0.5
So x ≥ x² on [0, 1]

A = ∫₀¹ [x - x²] dx
  = [x²/2 - x³/3]₀¹
  = (1/2 - 1/3) - 0
  = 3/6 - 2/6
  = 1/6
```

### Example 2: Finding Intersection Points

Find the area between y = x² - 2x and y = x.

```
Step 1: Find intersection points
x² - 2x = x
x² - 3x = 0
x(x - 3) = 0
x = 0 or x = 3

Step 2: Determine which is on top
At x = 1: x² - 2x = -1, x = 1
So x ≥ x² - 2x on [0, 3]

Step 3: Integrate
A = ∫₀³ [x - (x² - 2x)] dx
  = ∫₀³ [3x - x²] dx
  = [3x²/2 - x³/3]₀³
  = (27/2 - 9) - 0
  = 27/2 - 18/2
  = 9/2
```

### Area with Respect to y

If curves are given as x = f(y) and x = g(y), with f(y) ≥ g(y) on [c, d]:
```
A = ∫ᶜᵈ [f(y) - g(y)] dy
```

### Example 3: Integrating with Respect to y

Find the area enclosed by x = y² and x = y + 2.

```
Step 1: Find intersection points
y² = y + 2
y² - y - 2 = 0
(y - 2)(y + 1) = 0
y = -1 or y = 2

Step 2: Determine which is to the right
At y = 0: y² = 0, y + 2 = 2
So (y + 2) ≥ y² on [-1, 2]

Step 3: Integrate
A = ∫₋₁² [(y + 2) - y²] dy
  = ∫₋₁² [y + 2 - y²] dy
  = [y²/2 + 2y - y³/3]₋₁²
  = (2 + 4 - 8/3) - (1/2 - 2 + 1/3)
  = (6 - 8/3) - (-3/2 + 1/3)
  = 18/3 - 8/3 + 3/2 - 1/3
  = 9/3 + 3/2 - 1/3
  = 3 + 3/2 - 1/3
  = 9/2
```

---

## Volumes by Slicing

### General Volume Formula

If A(x) is the cross-sectional area at position x:
```
V = ∫ₐᵇ A(x) dx
```

### Example 4: Square Cross-Sections

A solid has a circular base of radius 3. Cross-sections perpendicular to the base are squares. Find the volume.

```
Base: x² + y² = 9

At position x, the width of the base is 2y = 2√(9 - x²)
Side of square = 2√(9 - x²)
Area of square: A(x) = [2√(9 - x²)]² = 4(9 - x²)

V = ∫₋₃³ 4(9 - x²) dx
  = 4∫₋₃³ (9 - x²) dx
  = 4[9x - x³/3]₋₃³
  = 4[(27 - 9) - (-27 + 9)]
  = 4[18 - (-18)]
  = 4(36)
  = 144
```

---

## Volumes by Disks and Washers

### Disk Method (Revolution about x-axis)

Revolve y = f(x) about the x-axis from x = a to x = b:
```
V = π∫ₐᵇ [f(x)]² dx
```

### Example 5: Disk Method

Find the volume when y = √x from x = 0 to x = 4 is revolved about the x-axis.

```
V = π∫₀⁴ (√x)² dx
  = π∫₀⁴ x dx
  = π[x²/2]₀⁴
  = π(8 - 0)
  = 8π
```

### Washer Method

When revolving the region between y = f(x) and y = g(x) about the x-axis:
```
V = π∫ₐᵇ [f(x)² - g(x)²] dx
```

**Outer radius:** R = f(x)
**Inner radius:** r = g(x)

### Example 6: Washer Method

Find the volume when the region between y = x and y = x² from x = 0 to x = 1 is revolved about the x-axis.

```
Outer radius: R = x
Inner radius: r = x²

V = π∫₀¹ [x² - (x²)²] dx
  = π∫₀¹ [x² - x⁴] dx
  = π[x³/3 - x⁵/5]₀¹
  = π(1/3 - 1/5)
  = π(5/15 - 3/15)
  = 2π/15
```

### Revolution about y-axis

For x = f(y) revolved about the y-axis from y = c to y = d:
```
V = π∫ᶜᵈ [f(y)]² dy
```

### Example 7: Revolution about y-axis

Find the volume when x = y² from y = 0 to y = 2 is revolved about the y-axis.

```
V = π∫₀² (y²)² dy
  = π∫₀² y⁴ dy
  = π[y⁵/5]₀²
  = π(32/5)
  = 32π/5
```

---

## Volumes by Cylindrical Shells

### Shell Method Formula

Revolving x = a to x = b about the y-axis:
```
V = 2π∫ₐᵇ x · f(x) dx
```

**Radius:** x
**Height:** f(x)
**Thickness:** dx

### Example 8: Shell Method

Find the volume when y = x² from x = 0 to x = 2 is revolved about the y-axis.

```
V = 2π∫₀² x · x² dx
  = 2π∫₀² x³ dx
  = 2π[x⁴/4]₀²
  = 2π(4)
  = 8π
```

### When to Use Shells vs. Washers

**Use Shells when:**
- Revolving about an axis parallel to the direction of integration
- Avoids solving for x in terms of y (or vice versa)

**Use Washers when:**
- Revolving about an axis perpendicular to the direction of integration

### Example 9: Choosing Methods

Compare methods for y = x² from x = 0 to x = 2, revolved about y-axis.

**Washer Method (harder):**
```
Need x = √y, limits become y = 0 to y = 4
V = π∫₀⁴ [2² - (√y)²] dy
  = π∫₀⁴ (4 - y) dy
  = π[4y - y²/2]₀⁴
  = π(16 - 8)
  = 8π
```

**Shell Method (easier):**
```
V = 2π∫₀² x · x² dx = 8π  (from Example 8)
```

---

## Arc Length

### Arc Length Formula

For y = f(x) from x = a to x = b:
```
L = ∫ₐᵇ √[1 + (f'(x))²] dx
```

For x = g(y) from y = c to y = d:
```
L = ∫ᶜᵈ √[1 + (g'(y))²] dy
```

### Example 10: Arc Length

Find the length of y = (2/3)x^(3/2) from x = 0 to x = 3.

```
y' = (2/3) · (3/2)x^(1/2) = x^(1/2)

L = ∫₀³ √[1 + (x^(1/2))²] dx
  = ∫₀³ √(1 + x) dx

Let u = 1 + x, du = dx
When x = 0: u = 1
When x = 3: u = 4

L = ∫₁⁴ √u du
  = [u^(3/2)/(3/2)]₁⁴
  = (2/3)[8 - 1]
  = 14/3
```

### Example 11: Arc Length with Substitution

Find the arc length of y = ln(sec x) from x = 0 to x = π/4.

```
y' = (1/sec x) · sec x tan x = tan x

L = ∫₀^(π/4) √[1 + tan²x] dx
  = ∫₀^(π/4) √(sec²x) dx
  = ∫₀^(π/4) sec x dx
  = [ln|sec x + tan x|]₀^(π/4)
  = ln|√2 + 1| - ln|1|
  = ln(√2 + 1)
```

---

## Surface Area

### Surface Area of Revolution

Revolving y = f(x) about x-axis from x = a to x = b:
```
S = 2π∫ₐᵇ f(x)√[1 + (f'(x))²] dx
```

Revolving x = g(y) about y-axis from y = c to y = d:
```
S = 2π∫ᶜᵈ g(y)√[1 + (g'(y))²] dy
```

### Example 12: Surface Area

Find the surface area when y = √x from x = 0 to x = 4 is revolved about the x-axis.

```
y = √x = x^(1/2)
y' = (1/2)x^(-1/2)

S = 2π∫₀⁴ x^(1/2)√[1 + (1/(4x))] dx
  = 2π∫₀⁴ x^(1/2)√[(4x + 1)/(4x)] dx
  = 2π∫₀⁴ x^(1/2) · √(4x + 1)/(2√x) dx
  = π∫₀⁴ √(4x + 1) dx

Let u = 4x + 1, du = 4dx
When x = 0: u = 1
When x = 4: u = 17

S = π∫₁¹⁷ √u · (1/4) du
  = (π/4) · (2/3)[u^(3/2)]₁¹⁷
  = (π/6)[17^(3/2) - 1]
  = (π/6)[17√17 - 1]
```

---

## Work

### Work Done by Constant Force

```
W = F · d
```

### Work Done by Variable Force

If force F(x) acts from x = a to x = b:
```
W = ∫ₐᵇ F(x) dx
```

### Example 13: Spring (Hooke's Law)

A spring has natural length 0.5 m. A force of 20 N stretches it to 0.7 m. How much work is done stretching it from 0.5 m to 0.8 m?

```
Hooke's Law: F = kx (x = displacement from natural length)

Find k:
20 = k(0.7 - 0.5) = k(0.2)
k = 100 N/m

Work to stretch from 0 to 0.3 m:
W = ∫₀^0.3 100x dx
  = 100[x²/2]₀^0.3
  = 50(0.09)
  = 4.5 J
```

### Example 14: Pumping Water

A conical tank (vertex down) has height 6 m and radius 3 m. It's filled with water. How much work is required to pump all the water to the top?

```
Density of water: ρ = 1000 kg/m³
Gravity: g = 9.8 m/s²

At height y, radius: r = y/2 (by similar triangles)
Volume of slice: dV = πr² dy = π(y/2)² dy = πy²/4 dy
Mass: dm = ρ dV = 1000πy²/4 dy
Weight: dF = g dm = 9800πy²/4 dy
Distance to lift: 6 - y

Work:
W = ∫₀⁶ (6 - y) · 9800πy²/4 dy
  = (9800π/4)∫₀⁶ (6y² - y³) dy
  = (9800π/4)[2y³ - y⁴/4]₀⁶
  = (9800π/4)[432 - 324]
  = (9800π/4)(108)
  = 264,600π J
```

---

## Average Value and Applications

### Average Value of a Function

```
f_avg = (1/(b - a))∫ₐᵇ f(x) dx
```

### Example 15: Average Value

Find the average value of f(x) = x² on [0, 3].

```
f_avg = (1/3)∫₀³ x² dx
      = (1/3)[x³/3]₀³
      = (1/3)(9)
      = 3
```

### Mean Value Theorem for Integrals

If f is continuous on [a, b], there exists c in (a, b) such that:
```
f(c) = f_avg = (1/(b - a))∫ₐᵇ f(x) dx
```

---

## Key Formulas and Reference

### Area Between Curves
```
A = ∫ₐᵇ [f(x) - g(x)] dx  (vertical strips)
A = ∫ᶜᵈ [f(y) - g(y)] dy  (horizontal strips)
```

### Volumes of Revolution

**Disk Method:**
```
V = π∫ₐᵇ [R(x)]² dx
```

**Washer Method:**
```
V = π∫ₐᵇ [R(x)² - r(x)²] dx
```

**Shell Method:**
```
V = 2π∫ₐᵇ (radius)(height) dx
```

### Arc Length
```
L = ∫ₐᵇ √[1 + (dy/dx)²] dx
```

### Surface Area
```
S = 2π∫ₐᵇ y√[1 + (dy/dx)²] dx  (about x-axis)
S = 2π∫ᶜᵈ x√[1 + (dx/dy)²] dy  (about y-axis)
```

### Work
```
W = ∫ₐᵇ F(x) dx
```

### Average Value
```
f_avg = (1/(b-a))∫ₐᵇ f(x) dx
```

---

**Next Unit:** Unit 8 - Differential Equations
