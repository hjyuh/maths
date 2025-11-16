# Calculus 2 - Unit 2: Applications of Integration - Notes

## Table of Contents
1. [Physics Applications Overview](#physics-applications-overview)
2. [Work](#work)
3. [Fluid Pressure and Force](#fluid-pressure-and-force)
4. [Center of Mass and Centroids](#center-of-mass-and-centroids)
5. [Moments and Applications](#moments-and-applications)
6. [Arc Length](#arc-length)
7. [Surface Area of Revolution](#surface-area-of-revolution)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Apply integration to solve physics problems**
- **Calculate work done by variable forces**
- **Determine fluid pressure and force on submerged surfaces**
- **Find centers of mass and centroids**
- **Compute arc lengths and surface areas**

---

## Essential Questions
- How does integration model physical phenomena?
- What is the relationship between force, work, and integration?
- How do we find the balance point of irregular shapes?
- Why is integration necessary for these applications?

---

## Physics Applications Overview

### The Fundamental Idea

Integration allows us to:
- **Add up infinitely many infinitesimal contributions**
- **Handle continuously varying quantities**
- **Solve problems where simple formulas don't apply**

**General Strategy:**
1. Divide the region/object into small pieces
2. Approximate the contribution from each piece
3. Sum the contributions
4. Take the limit as pieces → 0 (integrate)

---

## Work

### Work Done by a Constant Force

**Definition:** W = F · d (Force × distance)

**Units:**
- Joules (J) = Newton-meters (N·m)
- Foot-pounds (ft-lb)

### Work Done by a Variable Force

When force varies with position:

**Formula:**
```
W = ∫[a to b] F(x) dx
```

where F(x) is the force at position x

### Example 1: Spring Force (Hooke's Law)

A spring requires a force of 10 N to stretch it 0.1 m beyond its natural length. How much work is done stretching it from 0.1 m to 0.3 m?

```
Hooke's Law: F(x) = kx

Find k: 10 = k(0.1) → k = 100 N/m

Work = ∫[0.1 to 0.3] 100x dx
     = 50x² |[0.1 to 0.3]
     = 50(0.09) - 50(0.01)
     = 4.5 - 0.5
     = 4 J
```

### Example 2: Lifting a Rope

A 50-foot rope weighing 0.5 lb/ft hangs from a building. How much work is required to pull the rope to the top?

```
Consider a small segment at height x from the bottom:
- Distance it must be lifted: x feet
- Weight of segment: 0.5 dx pounds
- Work for segment: dW = x · 0.5 dx

Total work = ∫[0 to 50] 0.5x dx
           = 0.25x² |[0 to 50]
           = 0.25(2500)
           = 625 ft-lb
```

### Example 3: Pumping Water from a Tank

A cylindrical tank with radius 3 m and height 5 m is full of water (density 1000 kg/m³). How much work is required to pump all the water to the top?

```
Set up coordinates with origin at bottom of tank.

Consider a thin horizontal slice at height y:
- Thickness: dy
- Radius: 3 m
- Volume: π(3)² dy = 9π dy m³
- Mass: 1000 · 9π dy kg
- Weight (force): 9800π dy N  [g = 9.8 m/s²]
- Distance to lift: (5 - y) m
- Work: dW = 9800π(5 - y) dy

Total work = ∫[0 to 5] 9800π(5 - y) dy
           = 9800π ∫[0 to 5] (5 - y) dy
           = 9800π [5y - y²/2] |[0 to 5]
           = 9800π [25 - 12.5]
           = 9800π(12.5)
           = 122,500π J
           ≈ 384,845 J
```

### Example 4: Leaky Bucket

A bucket weighing 2 lb initially contains 20 lb of water. It's lifted 30 ft at a constant rate, but water leaks out uniformly so that only 10 lb remains at the top. Find the work done.

```
Let x = height above ground (0 ≤ x ≤ 30)
Water weight at height x: 20 - (10/30)x = 20 - x/3

Total weight at height x:
F(x) = 2 + (20 - x/3) = 22 - x/3

Work = ∫[0 to 30] (22 - x/3) dx
     = [22x - x²/6] |[0 to 30]
     = 660 - 150
     = 510 ft-lb
```

---

## Fluid Pressure and Force

### Pressure

**Definition:** Pressure = Force / Area

**Hydrostatic Pressure:** P = ρgh
- ρ (rho) = fluid density
- g = gravitational acceleration
- h = depth below surface

### Force on a Submerged Surface

For a vertical surface:

**Formula:**
```
F = ∫[a to b] ρg · h(y) · w(y) dy
```

where:
- h(y) = depth of horizontal strip
- w(y) = width of strip at depth y

### Example 5: Rectangular Plate

A rectangular plate 4 m wide and 3 m tall is submerged vertically in water with its top edge 2 m below the surface. Find the total force on one side.

```
Density of water: ρ = 1000 kg/m³
g = 9.8 m/s²

Set up: y = 0 at water surface, positive downward
Plate extends from y = 2 to y = 5

At depth y:
- Pressure: P(y) = 1000 · 9.8 · y = 9800y Pa
- Width: w(y) = 4 m
- Strip area: 4 dy m²
- Force on strip: dF = 9800y · 4 dy

Total force = ∫[2 to 5] 39,200y dy
            = 19,600y² |[2 to 5]
            = 19,600(25 - 4)
            = 19,600(21)
            = 411,600 N
```

### Example 6: Triangular Plate

An isosceles triangular plate with base 6 m at the top and height 4 m is submerged vertically with the base at the water surface. Find the force.

```
Set up: y = 0 at surface, y increases downward

At depth y (0 ≤ y ≤ 4):
By similar triangles, width w(y) = 6(4 - y)/4 = 3(4 - y)/2

Force = ∫[0 to 4] 9800y · 3(4 - y)/2 dy
      = 14,700 ∫[0 to 4] y(4 - y) dy
      = 14,700 ∫[0 to 4] (4y - y²) dy
      = 14,700 [2y² - y³/3] |[0 to 4]
      = 14,700 [32 - 64/3]
      = 14,700 [32/3]
      = 156,800 N
```

### Example 7: Semicircular Gate

A semicircular gate of radius 2 m is submerged vertically in water with its diameter along the surface. Find the force.

```
Set up: origin at center of diameter, y-axis pointing down

Equation of semicircle: x² + y² = 4, so width w(y) = 2√(4 - y²)

Force = ∫[0 to 2] 9800y · 2√(4 - y²) dy
      = 19,600 ∫[0 to 2] y√(4 - y²) dy

Let u = 4 - y², du = -2y dy

When y = 0: u = 4
When y = 2: u = 0

= 19,600 · (-1/2) ∫[4 to 0] √u du
= -9800 · (2/3)u^(3/2) |[4 to 0]
= -9800 · (2/3)[0 - 8]
= 9800 · (16/3)
= 52,267 N (approximately)
```

---

## Center of Mass and Centroids

### Center of Mass (Discrete Points)

For point masses m₁, m₂, ..., mₙ at positions x₁, x₂, ..., xₙ:

```
x̄ = (m₁x₁ + m₂x₂ + ... + mₙxₙ)/(m₁ + m₂ + ... + mₙ) = Σ(mᵢxᵢ)/Σmᵢ
```

### Center of Mass (Continuous)

For a thin rod with density ρ(x) along interval [a, b]:

```
x̄ = ∫[a to b] x · ρ(x) dx / ∫[a to b] ρ(x) dx = M_x / m
```

### Centroid of a Region

For a region R in the xy-plane:

**Centroid coordinates:**
```
x̄ = (1/A) ∫∫_R x dA

ȳ = (1/A) ∫∫_R y dA
```

**For region between y = f(x) and y = g(x) on [a, b]:**

```
Area: A = ∫[a to b] [f(x) - g(x)] dx

x̄ = (1/A) ∫[a to b] x[f(x) - g(x)] dx

ȳ = (1/A) ∫[a to b] (1/2)[f(x)² - g(x)²] dx
```

### Example 8: Centroid of Triangular Region

Find the centroid of the triangular region bounded by y = 0, x = 0, and y = 2 - 2x.

```
First find area:
A = ∫[0 to 1] (2 - 2x) dx
  = [2x - x²] |[0 to 1]
  = 1

Find x̄:
x̄ = (1/1) ∫[0 to 1] x(2 - 2x) dx
  = ∫[0 to 1] (2x - 2x²) dx
  = [x² - (2/3)x³] |[0 to 1]
  = 1 - 2/3
  = 1/3

Find ȳ:
ȳ = (1/1) ∫[0 to 1] (1/2)(2 - 2x)² dx
  = (1/2) ∫[0 to 1] 4(1 - x)² dx
  = 2 ∫[0 to 1] (1 - 2x + x²) dx
  = 2[x - x² + x³/3] |[0 to 1]
  = 2[1 - 1 + 1/3]
  = 2/3

Centroid: (1/3, 2/3)
```

### Example 9: Centroid Between Two Curves

Find the centroid of the region bounded by y = x² and y = √x.

```
Intersection points: x² = √x → x⁴ = x → x(x³ - 1) = 0
So x = 0 or x = 1

Area:
A = ∫[0 to 1] (√x - x²) dx
  = [2x^(3/2)/3 - x³/3] |[0 to 1]
  = 2/3 - 1/3
  = 1/3

x̄ = (3/1) ∫[0 to 1] x(√x - x²) dx
  = 3 ∫[0 to 1] (x^(3/2) - x³) dx
  = 3[2x^(5/2)/5 - x⁴/4] |[0 to 1]
  = 3[2/5 - 1/4]
  = 3[8/20 - 5/20]
  = 3(3/20)
  = 9/20

ȳ = 3 · (1/2) ∫[0 to 1] (x - x⁴) dx
  = (3/2)[x²/2 - x⁵/5] |[0 to 1]
  = (3/2)[1/2 - 1/5]
  = (3/2)(3/10)
  = 9/20

Centroid: (9/20, 9/20)
```

---

## Moments and Applications

### Moment About an Axis

**Moment about y-axis:** M_y = ∫[a to b] x · f(x) dx

**Moment about x-axis:** M_x = ∫[a to b] (1/2)[f(x)]² dx

### Theorem of Pappus

**Volume of Revolution:**
```
V = 2πr̄ · A
```

where r̄ is the distance from the axis of rotation to the centroid, and A is the area.

### Example 10: Pappus's Theorem

Find the volume generated by rotating the circle (x - 3)² + y² = 1 about the y-axis using Pappus's Theorem.

```
Area of circle: A = π(1)² = π

Centroid of circle: (3, 0)
Distance from y-axis: r̄ = 3

Volume = 2π · 3 · π = 6π²
```

### Example 11: Moment of Inertia

Find the moment of inertia about the x-axis for the region bounded by y = x², x = 0, x = 1, and y = 0.

```
I_x = ρ ∫[a to b] y² · (width) dy

Converting to x:
I_x = ρ ∫[0 to 1] (x²)² dx
    = ρ ∫[0 to 1] x⁴ dx
    = ρ[x⁵/5] |[0 to 1]
    = ρ/5

(ρ is the density per unit area)
```

---

## Arc Length

### Arc Length Formula

For y = f(x) on [a, b]:

```
L = ∫[a to b] √(1 + [f'(x)]²) dx
```

For x = g(y) on [c, d]:

```
L = ∫[c to d] √(1 + [g'(y)]²) dy
```

### Example 12: Arc Length of a Curve

Find the length of y = (2/3)x^(3/2) from x = 0 to x = 3.

```
dy/dx = (2/3) · (3/2)x^(1/2) = x^(1/2)

L = ∫[0 to 3] √(1 + x) dx

Let u = 1 + x, du = dx
When x = 0: u = 1
When x = 3: u = 4

L = ∫[1 to 4] √u du
  = (2/3)u^(3/2) |[1 to 4]
  = (2/3)(8 - 1)
  = 14/3
```

### Example 13: Arc Length with Parametric Form

Find the arc length of the curve x = t², y = t³ from t = 0 to t = 2.

```
dx/dt = 2t
dy/dt = 3t²

L = ∫[0 to 2] √((dx/dt)² + (dy/dt)²) dt
  = ∫[0 to 2] √(4t² + 9t⁴) dt
  = ∫[0 to 2] t√(4 + 9t²) dt

Let u = 4 + 9t², du = 18t dt
t dt = (1/18) du

When t = 0: u = 4
When t = 2: u = 40

L = (1/18) ∫[4 to 40] √u du
  = (1/18) · (2/3)u^(3/2) |[4 to 40]
  = (1/27)[40^(3/2) - 8]
  ≈ 9.07
```

---

## Surface Area of Revolution

### Surface Area About x-axis

For y = f(x) on [a, b], rotated about x-axis:

```
S = 2π ∫[a to b] f(x)√(1 + [f'(x)]²) dx
```

### Surface Area About y-axis

For x = g(y) on [c, d], rotated about y-axis:

```
S = 2π ∫[c to d] g(y)√(1 + [g'(y)]²) dy
```

### Example 14: Surface Area

Find the surface area generated by rotating y = √x from x = 1 to x = 4 about the x-axis.

```
f(x) = √x = x^(1/2)
f'(x) = (1/2)x^(-1/2) = 1/(2√x)

S = 2π ∫[1 to 4] √x · √(1 + 1/(4x)) dx
  = 2π ∫[1 to 4] √x · √((4x + 1)/(4x)) dx
  = 2π ∫[1 to 4] (1/2)√(4x + 1) dx

Let u = 4x + 1, du = 4 dx
When x = 1: u = 5
When x = 4: u = 17

S = 2π · (1/2) · (1/4) ∫[5 to 17] √u du
  = (π/4) · (2/3)u^(3/2) |[5 to 17]
  = (π/6)[17^(3/2) - 5^(3/2)]
  ≈ 30.85
```

### Example 15: Surface Area About y-axis

Find the surface area when y = x³ from x = 0 to x = 1 is rotated about the y-axis.

```
Need x in terms of y: y = x³, so x = y^(1/3)

dx/dy = (1/3)y^(-2/3)

S = 2π ∫[0 to 1] y^(1/3) · √(1 + (1/9)y^(-4/3)) dy

This integral is complex; numerical methods may be needed.
```

---

## Key Formulas and Reference

### Work
```
W = ∫[a to b] F(x) dx

Hooke's Law: F = kx
Weight: F = mg
```

### Fluid Force
```
F = ∫[a to b] ρgh(y) · w(y) dy

Pressure: P = ρgh
ρ_water = 1000 kg/m³ (or 62.4 lb/ft³)
```

### Center of Mass/Centroid
```
x̄ = M_y / m = (∫ x·ρ(x) dx) / (∫ ρ(x) dx)

For regions:
x̄ = (1/A) ∫[a to b] x[f(x) - g(x)] dx
ȳ = (1/A) ∫[a to b] (1/2)[f²(x) - g²(x)] dx
```

### Arc Length
```
L = ∫[a to b] √(1 + [f'(x)]²) dx

Parametric: L = ∫[a to b] √((dx/dt)² + (dy/dt)²) dt
```

### Surface Area
```
About x-axis: S = 2π ∫[a to b] f(x)√(1 + [f'(x)]²) dx

About y-axis: S = 2π ∫[c to d] g(y)√(1 + [g'(y)]²) dy
```

---

**Next Unit:** Unit 3 - Parametric Equations and Polar Coordinates
