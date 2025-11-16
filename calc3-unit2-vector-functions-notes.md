# Calculus 3 - Unit 2: Vector Functions - Notes

## Table of Contents
1. [Vector-Valued Functions](#vector-valued-functions)
2. [Derivatives of Vector Functions](#derivatives-of-vector-functions)
3. [Integrals of Vector Functions](#integrals-of-vector-functions)
4. [Arc Length](#arc-length)
5. [Curvature](#curvature)
6. [Velocity and Acceleration](#velocity-and-acceleration)
7. [Tangent, Normal, and Binormal Vectors (TNB Frame)](#tangent-normal-and-binormal-vectors)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding vector-valued functions and their graphs**
- **Computing derivatives and integrals of vector functions**
- **Finding arc length and curvature of curves**
- **Analyzing motion in space using velocity and acceleration**
- **Working with TNB frames**

---

## Essential Questions
- How do we represent curves parametrically in 3D space?
- What geometric meaning do derivatives have for vector functions?
- How do we measure how quickly a curve is bending?

---

## Vector-Valued Functions

### Definition

A **vector-valued function** (or **vector function**) is a function whose domain is a set of real numbers and whose range is a set of vectors.

**Form:**
```
r(t) = ⟨f(t), g(t), h(t)⟩ = f(t)i + g(t)j + h(t)k
```

where f, g, and h are component functions.

### Example 1: Evaluating Vector Functions

Let r(t) = ⟨t², 2t, t³⟩. Find r(1), r(-2), and r(0).

**Solution:**
```
r(1) = ⟨1², 2(1), 1³⟩ = ⟨1, 2, 1⟩

r(-2) = ⟨(-2)², 2(-2), (-2)³⟩ = ⟨4, -4, -8⟩

r(0) = ⟨0², 2(0), 0³⟩ = ⟨0, 0, 0⟩
```

### Common Space Curves

**1. Helix:**
```
r(t) = ⟨a cos t, a sin t, bt⟩
```
where a is the radius and b controls the vertical spacing.

**2. Circular path:**
```
r(t) = ⟨r cos t, r sin t, c⟩
```
where r is radius and c is constant height.

**3. Parabolic path:**
```
r(t) = ⟨t, t², 0⟩
```

### Example 2: Describing a Curve

Describe the curve r(t) = ⟨3 cos t, 3 sin t, 4t⟩ for t ≥ 0.

**Solution:**
```
x = 3 cos t
y = 3 sin t
z = 4t

From x and y: x² + y² = 9 cos²t + 9 sin²t = 9

This is a circular helix with radius 3, rising at rate 4 units per radian.
The curve spirals upward around the z-axis.
```

### Domain of Vector Functions

The domain consists of all values of t for which all component functions are defined.

**Example 3:**
Find the domain of r(t) = ⟨√t, ln t, 1/(t-1)⟩

**Solution:**
```
√t requires t ≥ 0
ln t requires t > 0
1/(t-1) requires t ≠ 1

Domain: (0, 1) ∪ (1, ∞)
```

### Limits of Vector Functions

```
lim[t→a] r(t) = ⟨lim[t→a] f(t), lim[t→a] g(t), lim[t→a] h(t)⟩
```

provided each component limit exists.

**Example 4:**
Find lim[t→0] ⟨sin t/t, e^t, t²⟩

**Solution:**
```
lim[t→0] ⟨sin t/t, e^t, t²⟩ = ⟨1, 1, 0⟩
```

### Continuity

r(t) is **continuous** at t = a if lim[t→a] r(t) = r(a).

---

## Derivatives of Vector Functions

### Definition

The **derivative** of r(t) is:
```
r'(t) = lim[h→0] [r(t+h) - r(t)]/h
```

**Component-wise:**
```
If r(t) = ⟨f(t), g(t), h(t)⟩, then
r'(t) = ⟨f'(t), g'(t), h'(t)⟩
```

### Example 5: Finding Derivatives

Find r'(t) for r(t) = ⟨t³, e^(2t), sin(3t)⟩

**Solution:**
```
r'(t) = ⟨3t², 2e^(2t), 3cos(3t)⟩
```

### Geometric Interpretation

**r'(t)** is a **tangent vector** to the curve at the point r(t). It points in the direction of motion and its magnitude is the speed.

### Example 6: Tangent Line to a Curve

Find parametric equations for the tangent line to r(t) = ⟨t², t³, t⟩ at t = 1.

**Solution:**
```
Point: r(1) = ⟨1, 1, 1⟩
Direction: r'(t) = ⟨2t, 3t², 1⟩
           r'(1) = ⟨2, 3, 1⟩

Tangent line:
x = 1 + 2s
y = 1 + 3s
z = 1 + s
```

### Differentiation Rules

Let r(t) and s(t) be vector functions, f(t) a scalar function, and c a constant.

1. **Constant rule:** d/dt[c] = 0

2. **Scalar multiple:** d/dt[cr(t)] = cr'(t)

3. **Sum/Difference:** d/dt[r(t) ± s(t)] = r'(t) ± s'(t)

4. **Scalar multiplication:** d/dt[f(t)r(t)] = f'(t)r(t) + f(t)r'(t)

5. **Dot product:** d/dt[r(t) · s(t)] = r'(t) · s(t) + r(t) · s'(t)

6. **Cross product:** d/dt[r(t) × s(t)] = r'(t) × s(t) + r(t) × s'(t)

7. **Chain rule:** d/dt[r(f(t))] = r'(f(t))f'(t)

### Example 7: Proving a Property

If |r(t)| is constant, show that r(t) · r'(t) = 0.

**Solution:**
```
If |r(t)| = c (constant), then r(t) · r(t) = c²

Differentiate both sides:
d/dt[r(t) · r(t)] = d/dt[c²]
r'(t) · r(t) + r(t) · r'(t) = 0
2[r(t) · r'(t)] = 0
r(t) · r'(t) = 0

This means r(t) and r'(t) are orthogonal.
```

### Higher Derivatives

```
r''(t) = d/dt[r'(t)] = ⟨f''(t), g''(t), h''(t)⟩
```

**Example 8:**
If r(t) = ⟨cos t, sin t, t²⟩, find r''(t).

**Solution:**
```
r'(t) = ⟨-sin t, cos t, 2t⟩
r''(t) = ⟨-cos t, -sin t, 2⟩
```

---

## Integrals of Vector Functions

### Definition

```
∫ r(t) dt = ⟨∫ f(t) dt, ∫ g(t) dt, ∫ h(t) dt⟩
```

Each component is integrated separately.

### Example 9: Indefinite Integrals

Find ∫ ⟨t², e^t, sin t⟩ dt

**Solution:**
```
∫ ⟨t², e^t, sin t⟩ dt = ⟨t³/3, e^t, -cos t⟩ + C

where C = ⟨C₁, C₂, C₃⟩ is a constant vector.
```

### Definite Integrals

```
∫[a to b] r(t) dt = ⟨∫[a to b] f(t) dt, ∫[a to b] g(t) dt, ∫[a to b] h(t) dt⟩
```

### Example 10: Definite Integral

Evaluate ∫[0 to π] ⟨cos t, sin t, t⟩ dt

**Solution:**
```
∫[0 to π] ⟨cos t, sin t, t⟩ dt
= ⟨[sin t]₀^π, [-cos t]₀^π, [t²/2]₀^π⟩
= ⟨sin π - sin 0, -cos π + cos 0, π²/2 - 0⟩
= ⟨0, 2, π²/2⟩
```

### Example 11: Initial Value Problem

Find r(t) if r'(t) = ⟨2t, 3t², e^t⟩ and r(0) = ⟨1, 2, 3⟩.

**Solution:**
```
r(t) = ∫ ⟨2t, 3t², e^t⟩ dt
     = ⟨t², t³, e^t⟩ + C

Use initial condition r(0) = ⟨1, 2, 3⟩:
⟨0, 0, 1⟩ + C = ⟨1, 2, 3⟩
C = ⟨1, 2, 2⟩

Therefore: r(t) = ⟨t² + 1, t³ + 2, e^t + 2⟩
```

---

## Arc Length

### Arc Length Formula

The length of the curve r(t) from t = a to t = b is:

```
L = ∫[a to b] |r'(t)| dt = ∫[a to b] √[(f'(t))² + (g'(t))² + (h'(t))²] dt
```

### Example 12: Finding Arc Length

Find the length of r(t) = ⟨3t, 4cos t, 4sin t⟩ from t = 0 to t = π.

**Solution:**
```
r'(t) = ⟨3, -4sin t, 4cos t⟩

|r'(t)| = √(9 + 16sin²t + 16cos²t)
        = √(9 + 16(sin²t + cos²t))
        = √(9 + 16)
        = 5

L = ∫[0 to π] 5 dt = 5t|₀^π = 5π
```

### Arc Length Function

The **arc length function** with starting point t = a is:

```
s(t) = ∫[a to t] |r'(u)| du
```

This gives the distance along the curve from r(a) to r(t).

### Example 13: Arc Length Function

Find the arc length function for r(t) = ⟨e^t cos t, e^t sin t, e^t⟩ starting at t = 0.

**Solution:**
```
r'(t) = ⟨e^t cos t - e^t sin t, e^t sin t + e^t cos t, e^t⟩
      = e^t⟨cos t - sin t, sin t + cos t, 1⟩

|r'(t)| = e^t√[(cos t - sin t)² + (sin t + cos t)² + 1]
        = e^t√[cos²t - 2cos t sin t + sin²t + sin²t + 2sin t cos t + cos²t + 1]
        = e^t√[2 + 1]
        = √3 e^t

s(t) = ∫[0 to t] √3 e^u du
     = √3[e^u]₀^t
     = √3(e^t - 1)
```

### Reparametrization by Arc Length

We can reparametrize a curve using arc length as the parameter. If s = s(t), solve for t = t(s) and substitute:

```
r(s) = r(t(s))
```

This creates a **unit speed** parametrization where |r'(s)| = 1.

---

## Curvature

### Definition

**Curvature** κ (kappa) measures how quickly a curve changes direction.

```
κ = |dT/ds| = |T'(t)|/|r'(t)|
```

where T is the unit tangent vector and s is arc length.

### Unit Tangent Vector

```
T(t) = r'(t)/|r'(t)|
```

### Curvature Formulas

**Formula 1:**
```
κ = |T'(t)|/|r'(t)|
```

**Formula 2 (easier for calculations):**
```
κ = |r'(t) × r''(t)|/|r'(t)|³
```

### Example 14: Finding Curvature

Find the curvature of r(t) = ⟨t, t², t³⟩.

**Solution:**
```
r'(t) = ⟨1, 2t, 3t²⟩
r''(t) = ⟨0, 2, 6t⟩

r'(t) × r''(t) = | i    j    k   |
                 | 1   2t   3t²  |
                 | 0    2   6t   |

= i(12t² - 6t²) - j(6t - 0) + k(2 - 0)
= ⟨6t², -6t, 2⟩

|r'(t) × r''(t)| = √(36t⁴ + 36t² + 4) = 2√(9t⁴ + 9t² + 1)

|r'(t)| = √(1 + 4t² + 9t⁴)

κ = 2√(9t⁴ + 9t² + 1)/(1 + 4t² + 9t⁴)^(3/2)
```

### Curvature of a Circle

For a circle of radius r:
```
κ = 1/r
```

The smaller the radius, the greater the curvature.

### Example 15: Curvature at a Point

Find the curvature of r(t) = ⟨cos t, sin t, t⟩ at t = 0.

**Solution:**
```
r'(t) = ⟨-sin t, cos t, 1⟩
r''(t) = ⟨-cos t, -sin t, 0⟩

At t = 0:
r'(0) = ⟨0, 1, 1⟩
r''(0) = ⟨-1, 0, 0⟩

r'(0) × r''(0) = | i   j   k |
                 | 0   1   1 |
                 |-1   0   0 |
= i(0 - 0) - j(0 + 1) + k(0 + 1)
= ⟨0, -1, 1⟩

|r'(0) × r''(0)| = √2
|r'(0)| = √2

κ(0) = √2/(√2)³ = √2/(2√2) = 1/2
```

---

## Velocity and Acceleration

### Definitions

For a position function r(t):

**Velocity:** v(t) = r'(t)
**Speed:** |v(t)| = |r'(t)|
**Acceleration:** a(t) = r''(t) = v'(t)

### Example 16: Motion Analysis

A particle moves with position r(t) = ⟨t², 2t, ln t⟩ for t > 0. Find the velocity, speed, and acceleration at t = 1.

**Solution:**
```
v(t) = r'(t) = ⟨2t, 2, 1/t⟩
v(1) = ⟨2, 2, 1⟩

Speed at t = 1: |v(1)| = √(4 + 4 + 1) = 3

a(t) = r''(t) = ⟨2, 0, -1/t²⟩
a(1) = ⟨2, 0, -1⟩
```

### Components of Acceleration

Acceleration can be decomposed into:

**Tangential component:** a_T = (v · a)/|v| (changes speed)
**Normal component:** a_N = |v × a|/|v| (changes direction)

```
a = a_T T + a_N N
```

### Example 17: Components of Acceleration

For r(t) = ⟨t, t², t³⟩ at t = 1, find a_T and a_N.

**Solution:**
```
v = r'(t) = ⟨1, 2t, 3t²⟩
v(1) = ⟨1, 2, 3⟩
|v(1)| = √14

a = r''(t) = ⟨0, 2, 6t⟩
a(1) = ⟨0, 2, 6⟩

a_T = (v · a)/|v| = (0 + 4 + 18)/√14 = 22/√14 = 11√14/7

v × a = | i  j   k  |
        | 1  2   3  |
        | 0  2   6  |
= ⟨6, -6, 2⟩

|v × a| = √(36 + 36 + 4) = √76 = 2√19

a_N = |v × a|/|v| = 2√19/√14 = 2√(19/14) = √(76/14) = √(38/7)
```

### Projectile Motion

For motion under gravity with no air resistance:

```
r(t) = (v₀ cos θ)ti + [(v₀ sin θ)t - ½gt²]j
```

where v₀ is initial speed, θ is launch angle, and g ≈ 9.8 m/s² or 32 ft/s².

---

## Tangent, Normal, and Binormal Vectors

### The TNB Frame

Three mutually orthogonal unit vectors that move along the curve:

**1. Unit Tangent Vector:**
```
T(t) = r'(t)/|r'(t)|
```

**2. Principal Unit Normal Vector:**
```
N(t) = T'(t)/|T'(t)|
```

**3. Binormal Vector:**
```
B(t) = T(t) × N(t)
```

### Example 18: Finding the TNB Frame

Find T, N, and B for r(t) = ⟨cos t, sin t, t⟩ at t = 0.

**Solution:**
```
r'(t) = ⟨-sin t, cos t, 1⟩
r'(0) = ⟨0, 1, 1⟩
|r'(0)| = √2

T(0) = ⟨0, 1/√2, 1/√2⟩

T(t) = ⟨-sin t, cos t, 1⟩/√2
T'(t) = ⟨-cos t, -sin t, 0⟩/√2
T'(0) = ⟨-1/√2, 0, 0⟩
|T'(0)| = 1/√2

N(0) = ⟨-1/√2, 0, 0⟩/(1/√2) = ⟨-1, 0, 0⟩

B(0) = T(0) × N(0)
     = | i      j      k     |
       | 0    1/√2   1/√2   |
       |-1     0      0     |
     = ⟨0, -1/√2, 1/√2⟩

Check: simplify to ⟨0, -1/√2, 1/√2⟩
```

### Properties of TNB Frame

1. T, N, and B are mutually orthogonal unit vectors
2. T points in direction of motion
3. N points toward center of curvature
4. B is perpendicular to osculating plane

### Curvature in Terms of N

```
κ = |T'(t)|/|r'(t)| = |T'(t)|/speed
```

Also:
```
T'(t) = κ|r'(t)|N(t)
```

### Torsion

**Torsion** τ (tau) measures how much a curve twists out of its osculating plane:

```
τ = -N'(t) · B(t)/|r'(t)|
```

or

```
τ = (r'(t) × r''(t)) · r'''(t)/|r'(t) × r''(t)|²
```

### Example 19: Finding Torsion

Find the torsion of the helix r(t) = ⟨cos t, sin t, t⟩.

**Solution:**
```
r'(t) = ⟨-sin t, cos t, 1⟩
r''(t) = ⟨-cos t, -sin t, 0⟩
r'''(t) = ⟨sin t, -cos t, 0⟩

r'(t) × r''(t) = | i      j      k    |
                 |-sin t  cos t   1   |
                 |-cos t -sin t   0   |
= ⟨sin t, -cos t, 1⟩

(r' × r'') · r''' = sin²t + cos²t + 0 = 1

|r' × r''|² = sin²t + cos²t + 1 = 2

τ = 1/2
```

---

## Key Formulas and Reference

### Vector Functions
```
r(t) = ⟨f(t), g(t), h(t)⟩
r'(t) = ⟨f'(t), g'(t), h'(t)⟩
∫ r(t) dt = ⟨∫f(t)dt, ∫g(t)dt, ∫h(t)dt⟩
```

### Arc Length
```
L = ∫[a to b] |r'(t)| dt
s(t) = ∫[a to t] |r'(u)| du
```

### Curvature
```
T(t) = r'(t)/|r'(t)|
κ = |T'(t)|/|r'(t)|
κ = |r'(t) × r''(t)|/|r'(t)|³
```

### Motion
```
v(t) = r'(t)  (velocity)
|v(t)| = speed
a(t) = r''(t) = v'(t)  (acceleration)
a_T = (v · a)/|v|  (tangential)
a_N = |v × a|/|v|  (normal)
```

### TNB Frame
```
T = r'/|r'|  (unit tangent)
N = T'/|T'|  (principal normal)
B = T × N    (binormal)
τ = (r' × r'') · r'''/|r' × r''|²  (torsion)
```

---

## Practice Problems

1. Find r'(t) for r(t) = ⟨t³, e^t, ln t⟩
2. Find ∫ ⟨2t, cos t, e^(2t)⟩ dt
3. Find the arc length of r(t) = ⟨3cos t, 3sin t, 4t⟩ from t = 0 to t = 2π
4. Find the curvature of r(t) = ⟨t, t², 0⟩
5. Find T(t) for r(t) = ⟨cos t, sin t, t⟩
6. If r(t) = ⟨t², t³⟩, find the tangent line at t = 1
7. Find the speed when t = 1 for r(t) = ⟨t, t², t³⟩
8. Evaluate ∫[0 to 1] ⟨t², t, 1⟩ dt
9. Find N(0) for r(t) = ⟨t, t², t³⟩
10. Calculate the torsion of r(t) = ⟨t, t², t³⟩

---

**End of Notes**
