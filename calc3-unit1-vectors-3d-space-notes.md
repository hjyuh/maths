# Calculus 3 - Unit 1: Vectors and 3D Space - Notes

## Table of Contents
1. [Vectors in 2D and 3D](#vectors-in-2d-and-3d)
2. [Vector Operations](#vector-operations)
3. [Dot Product](#dot-product)
4. [Cross Product](#cross-product)
5. [Lines in 3D Space](#lines-in-3d-space)
6. [Planes in 3D Space](#planes-in-3d-space)
7. [Surfaces and Quadric Surfaces](#surfaces-and-quadric-surfaces)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding vectors in 2D and 3D space**
- **Computing dot product and cross product**
- **Finding equations of lines and planes in 3D**
- **Identifying and graphing quadric surfaces**

---

## Essential Questions
- How do we represent direction and magnitude in 3D space?
- What geometric information do dot and cross products provide?
- How do we describe lines and planes algebraically in 3D?

---

## Vectors in 2D and 3D

### What is a Vector?

A **vector** is a quantity with both magnitude and direction. We represent vectors using:
- **Component form:** v = ⟨a, b, c⟩ or v = ai + bj + ck
- **Position vector:** from origin to point (a, b, c)

**Notation:**
- Bold: **v**
- Arrow: v⃗
- Angle brackets: ⟨a, b, c⟩

### Example 1: Finding a Vector from Two Points

Find the vector from P(1, 2, 3) to Q(4, -1, 5).

**Solution:**
```
v⃗ = PQ⃗ = ⟨x₂ - x₁, y₂ - y₁, z₂ - z₁⟩
    = ⟨4 - 1, -1 - 2, 5 - 3⟩
    = ⟨3, -3, 2⟩
```

### Magnitude of a Vector

**Formula:** For v = ⟨a, b, c⟩,
```
|v| = √(a² + b² + c²)
```

**Example 2:**
Find |v| for v = ⟨3, -3, 2⟩

**Solution:**
```
|v| = √(3² + (-3)² + 2²)
    = √(9 + 9 + 4)
    = √22
```

### Unit Vectors

A **unit vector** has magnitude 1. To find a unit vector in the direction of v:

```
u = v/|v|
```

**Example 3:**
Find the unit vector in the direction of v = ⟨3, -3, 2⟩

**Solution:**
```
u = v/|v| = ⟨3, -3, 2⟩/√22
    = ⟨3/√22, -3/√22, 2/√22⟩
```

### Standard Unit Vectors
```
i = ⟨1, 0, 0⟩  (x-direction)
j = ⟨0, 1, 0⟩  (y-direction)
k = ⟨0, 0, 1⟩  (z-direction)
```

---

## Vector Operations

### Addition and Subtraction

For u = ⟨u₁, u₂, u₃⟩ and v = ⟨v₁, v₂, v₃⟩:
```
u + v = ⟨u₁ + v₁, u₂ + v₂, u₃ + v₃⟩
u - v = ⟨u₁ - v₁, u₂ - v₂, u₃ - v₃⟩
```

**Example 4:**
Let u = ⟨2, -1, 4⟩ and v = ⟨3, 5, -2⟩. Find u + v and u - v.

**Solution:**
```
u + v = ⟨2 + 3, -1 + 5, 4 + (-2)⟩ = ⟨5, 4, 2⟩

u - v = ⟨2 - 3, -1 - 5, 4 - (-2)⟩ = ⟨-1, -6, 6⟩
```

### Scalar Multiplication

For scalar c and vector v = ⟨v₁, v₂, v₃⟩:
```
cv = ⟨cv₁, cv₂, cv₃⟩
```

**Example 5:**
Find 3v for v = ⟨2, -1, 4⟩

**Solution:**
```
3v = ⟨3(2), 3(-1), 3(4)⟩ = ⟨6, -3, 12⟩
```

### Properties of Vector Operations
1. u + v = v + u (commutative)
2. (u + v) + w = u + (v + w) (associative)
3. u + 0 = u (identity)
4. u + (-u) = 0 (inverse)
5. c(u + v) = cu + cv (distributive)
6. (c + d)u = cu + du (distributive)

---

## Dot Product

### Definition

For u = ⟨u₁, u₂, u₃⟩ and v = ⟨v₁, v₂, v₃⟩:
```
u · v = u₁v₁ + u₂v₂ + u₃v₃
```

**Alternative Formula:**
```
u · v = |u||v|cos θ
```
where θ is the angle between u and v.

### Example 6: Computing Dot Product

Find u · v for u = ⟨2, -3, 1⟩ and v = ⟨4, 1, -2⟩

**Solution:**
```
u · v = (2)(4) + (-3)(1) + (1)(-2)
      = 8 - 3 - 2
      = 3
```

### Finding Angle Between Vectors

From u · v = |u||v|cos θ, we get:
```
cos θ = (u · v)/(|u||v|)
θ = arccos[(u · v)/(|u||v|)]
```

**Example 7:**
Find the angle between u = ⟨1, 2, 3⟩ and v = ⟨4, 0, -1⟩

**Solution:**
```
u · v = (1)(4) + (2)(0) + (3)(-1) = 4 + 0 - 3 = 1

|u| = √(1² + 2² + 3²) = √14
|v| = √(4² + 0² + (-1)²) = √17

cos θ = 1/(√14 · √17) = 1/√238

θ = arccos(1/√238) ≈ 86.27°
```

### Properties of Dot Product
1. u · v = v · u (commutative)
2. u · (v + w) = u · v + u · w (distributive)
3. c(u · v) = (cu) · v = u · (cv)
4. v · v = |v|²
5. 0 · v = 0

### Orthogonal Vectors

Vectors are **orthogonal** (perpendicular) if and only if:
```
u · v = 0
```

**Example 8:**
Determine if u = ⟨2, -3, 1⟩ and v = ⟨1, 2, 4⟩ are orthogonal.

**Solution:**
```
u · v = (2)(1) + (-3)(2) + (1)(4)
      = 2 - 6 + 4
      = 0

Since u · v = 0, the vectors are orthogonal.
```

### Projections

The **scalar projection** of u onto v is:
```
comp_v u = (u · v)/|v|
```

The **vector projection** of u onto v is:
```
proj_v u = [(u · v)/|v|²]v
```

**Example 9:**
Find the projection of u = ⟨3, 4, 0⟩ onto v = ⟨1, 0, 0⟩

**Solution:**
```
u · v = (3)(1) + (4)(0) + (0)(0) = 3
|v|² = 1² + 0² + 0² = 1

proj_v u = (3/1)⟨1, 0, 0⟩ = ⟨3, 0, 0⟩
```

---

## Cross Product

### Definition

For u = ⟨u₁, u₂, u₃⟩ and v = ⟨v₁, v₂, v₃⟩:
```
u × v = ⟨u₂v₃ - u₃v₂, u₃v₁ - u₁v₃, u₁v₂ - u₂v₁⟩
```

**Using Determinant:**
```
      | i   j   k  |
u × v = | u₁  u₂  u₃ |
      | v₁  v₂  v₃ |
```

### Example 10: Computing Cross Product

Find u × v for u = ⟨1, 2, 3⟩ and v = ⟨4, 5, 6⟩

**Solution:**
```
      | i  j  k |
u × v = | 1  2  3 |
      | 4  5  6 |

= i(2·6 - 3·5) - j(1·6 - 3·4) + k(1·5 - 2·4)
= i(12 - 15) - j(6 - 12) + k(5 - 8)
= -3i + 6j - 3k
= ⟨-3, 6, -3⟩
```

### Properties of Cross Product
1. u × v = -(v × u) (anti-commutative)
2. u × (v + w) = u × v + u × w (distributive)
3. c(u × v) = (cu) × v = u × (cv)
4. u × u = 0
5. u × v is orthogonal to both u and v
6. |u × v| = |u||v|sin θ

### Magnitude and Geometric Interpretation

```
|u × v| = |u||v|sin θ
```

This equals the area of the parallelogram formed by u and v.

**Example 11:**
Find the area of the parallelogram with adjacent sides u = ⟨2, 1, 0⟩ and v = ⟨1, 3, 0⟩

**Solution:**
```
      | i  j  k |
u × v = | 2  1  0 |
      | 1  3  0 |

= i(0 - 0) - j(0 - 0) + k(6 - 1)
= 5k = ⟨0, 0, 5⟩

Area = |u × v| = √(0² + 0² + 5²) = 5 square units
```

### Triple Scalar Product

```
u · (v × w) = volume of parallelepiped
```

**Example 12:**
Find the volume of the parallelepiped determined by u = ⟨1, 2, 3⟩, v = ⟨2, 1, 0⟩, w = ⟨0, 1, 2⟩

**Solution:**
```
First, find v × w:
      | i  j  k |
v × w = | 2  1  0 |
      | 0  1  2 |

= i(2 - 0) - j(4 - 0) + k(2 - 0)
= ⟨2, -4, 2⟩

Now compute u · (v × w):
u · (v × w) = (1)(2) + (2)(-4) + (3)(2)
            = 2 - 8 + 6
            = 0

Volume = |0| = 0 (vectors are coplanar)
```

---

## Lines in 3D Space

### Vector Equation of a Line

A line through point P₀(x₀, y₀, z₀) in direction v = ⟨a, b, c⟩:
```
r(t) = r₀ + tv
r(t) = ⟨x₀, y₀, z₀⟩ + t⟨a, b, c⟩
```

### Parametric Equations
```
x = x₀ + at
y = y₀ + bt
z = z₀ + ct
```

### Symmetric Equations

If a, b, c ≠ 0:
```
(x - x₀)/a = (y - y₀)/b = (z - z₀)/c
```

### Example 13: Finding Equation of a Line

Find parametric and symmetric equations for the line through P(2, -1, 3) and Q(4, 2, 1).

**Solution:**
```
Direction vector: v = PQ = ⟨4-2, 2-(-1), 1-3⟩ = ⟨2, 3, -2⟩

Parametric equations:
x = 2 + 2t
y = -1 + 3t
z = 3 - 2t

Symmetric equations:
(x - 2)/2 = (y + 1)/3 = (z - 3)/(-2)
```

### Example 14: Finding Intersection of Lines

Determine if these lines intersect:
```
L₁: x = 1 + t, y = 2 - t, z = 3 + 2t
L₂: x = 2 + s, y = 1 + 2s, z = 4 - s
```

**Solution:**
```
Set equations equal:
1 + t = 2 + s  →  t - s = 1   ... (1)
2 - t = 1 + 2s  →  -t - 2s = -1  ... (2)
3 + 2t = 4 - s  →  2t + s = 1   ... (3)

From (1): t = s + 1
Substitute into (2):
-(s + 1) - 2s = -1
-s - 1 - 2s = -1
-3s = 0
s = 0, so t = 1

Check in equation (3):
2(1) + 0 = 2 ≠ 1

The lines do not intersect (they are skew).
```

### Distance from Point to Line

Distance from point Q to line through P with direction v:
```
d = |PQ × v| / |v|
```

**Example 15:**
Find the distance from Q(1, 1, 1) to the line x = 2t, y = 1 + t, z = 3 - t.

**Solution:**
```
Point on line: P(0, 1, 3) (when t = 0)
Direction: v = ⟨2, 1, -1⟩
PQ = ⟨1, 0, -2⟩

      | i  j  k  |
PQ × v = | 1  0  -2 |
      | 2  1  -1 |

= i(0 + 2) - j(-1 + 4) + k(1 - 0)
= ⟨2, -3, 1⟩

|PQ × v| = √(4 + 9 + 1) = √14
|v| = √(4 + 1 + 1) = √6

d = √14/√6 = √(14/6) = √(7/3) = √21/3
```

---

## Planes in 3D Space

### Equation of a Plane

A plane with normal vector n = ⟨a, b, c⟩ through point P₀(x₀, y₀, z₀):
```
a(x - x₀) + b(y - y₀) + c(z - z₀) = 0
```

**Standard form:**
```
ax + by + cz + d = 0
```

where d = -ax₀ - by₀ - cz₀

### Example 16: Finding Equation of a Plane

Find the equation of the plane through P(1, 2, 3) with normal vector n = ⟨2, -1, 4⟩.

**Solution:**
```
2(x - 1) + (-1)(y - 2) + 4(z - 3) = 0
2x - 2 - y + 2 + 4z - 12 = 0
2x - y + 4z - 12 = 0
```

### Example 17: Plane Through Three Points

Find the equation of the plane through P(1, 0, 0), Q(0, 2, 0), and R(0, 0, 3).

**Solution:**
```
Find two vectors in the plane:
PQ = ⟨-1, 2, 0⟩
PR = ⟨-1, 0, 3⟩

Normal vector: n = PQ × PR
       | i   j   k  |
n = PQ × PR = | -1  2   0  |
       | -1  0   3  |

= i(6 - 0) - j(-3 - 0) + k(0 + 2)
= ⟨6, 3, 2⟩

Using point P(1, 0, 0):
6(x - 1) + 3(y - 0) + 2(z - 0) = 0
6x - 6 + 3y + 2z = 0
6x + 3y + 2z = 6

Or dividing by 6: x/1 + y/2 + z/3 = 1 (intercept form)
```

### Angle Between Planes

The angle between planes with normal vectors n₁ and n₂:
```
cos θ = |n₁ · n₂| / (|n₁||n₂|)
```

**Example 18:**
Find the angle between planes x + y + z = 1 and 2x - y + 3z = 5.

**Solution:**
```
n₁ = ⟨1, 1, 1⟩
n₂ = ⟨2, -1, 3⟩

n₁ · n₂ = (1)(2) + (1)(-1) + (1)(3) = 4
|n₁| = √3
|n₂| = √14

cos θ = 4/(√3 · √14) = 4/√42

θ = arccos(4/√42) ≈ 52.2°
```

### Parallel and Perpendicular Planes

**Parallel:** n₁ = cn₂ (normal vectors are parallel)
**Perpendicular:** n₁ · n₂ = 0

### Distance from Point to Plane

Distance from point P(x₀, y₀, z₀) to plane ax + by + cz + d = 0:
```
Distance = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)
```

**Example 19:**
Find the distance from P(2, 1, -1) to the plane 3x - 2y + 6z = 5.

**Solution:**
```
Distance = |3(2) - 2(1) + 6(-1) - 5| / √(9 + 4 + 36)
         = |6 - 2 - 6 - 5| / √49
         = |-7| / 7
         = 1
```

### Line of Intersection of Two Planes

To find the line where two planes intersect:
1. Find direction vector: v = n₁ × n₂
2. Find a point on both planes
3. Write parametric equations

**Example 20:**
Find the line of intersection of x + y + z = 1 and 2x - y + z = 3.

**Solution:**
```
Direction: n₁ × n₂ where n₁ = ⟨1, 1, 1⟩, n₂ = ⟨2, -1, 1⟩

      | i   j   k  |
v = n₁ × n₂ = | 1   1   1  |
      | 2  -1   1  |

= i(1 + 1) - j(1 - 2) + k(-1 - 2)
= ⟨2, 1, -3⟩

Find a point: Set z = 0
x + y = 1
2x - y = 3
Adding: 3x = 4, so x = 4/3, y = -1/3

Point: (4/3, -1/3, 0)

Parametric equations:
x = 4/3 + 2t
y = -1/3 + t
z = -3t
```

---

## Surfaces and Quadric Surfaces

### Cylinders

A **cylinder** is a surface generated by moving a line parallel to a given line along a curve.

**Example 21:**
The equation x² + y² = 4 (in 3D) represents a circular cylinder with radius 2, axis along the z-axis.

### Quadric Surfaces

Quadric surfaces are 3D analogs of conic sections.

#### 1. Ellipsoid
```
x²/a² + y²/b² + z²/c² = 1
```
Traces are ellipses.

#### 2. Hyperboloid of One Sheet
```
x²/a² + y²/b² - z²/c² = 1
```
Horizontal traces are ellipses, vertical traces are hyperbolas.

#### 3. Hyperboloid of Two Sheets
```
-x²/a² - y²/b² + z²/c² = 1
```
or
```
z²/c² - x²/a² - y²/b² = 1
```

#### 4. Elliptic Cone
```
x²/a² + y²/b² = z²/c²
```

#### 5. Elliptic Paraboloid
```
z = x²/a² + y²/b²
```
Opens upward if positive, downward if negative.

#### 6. Hyperbolic Paraboloid (Saddle)
```
z = y²/b² - x²/a²
```

### Example 22: Identifying Quadric Surfaces

Identify the surface: x² + 4y² - z² = 4

**Solution:**
```
Rewrite in standard form:
x²/4 + y²/1 - z²/4 = 1

This is a hyperboloid of one sheet with:
- a = 2 (x-direction)
- b = 1 (y-direction)
- c = 2 (z-direction)
- Axis along z-axis
```

### Example 23: Finding Traces

Find the traces of z = x² + y² in the planes z = 0, z = 1, z = 4.

**Solution:**
```
z = 0: 0 = x² + y² → point (0, 0, 0)
z = 1: 1 = x² + y² → circle of radius 1
z = 4: 4 = x² + y² → circle of radius 2

This is an elliptic paraboloid opening upward.
```

### Example 24: Completing the Square

Identify: x² + y² + z² - 2x + 4y - 6z = -5

**Solution:**
```
Complete the square for each variable:
(x² - 2x + 1) + (y² + 4y + 4) + (z² - 6z + 9) = -5 + 1 + 4 + 9
(x - 1)² + (y + 2)² + (z - 3)² = 9

This is a sphere with center (1, -2, 3) and radius 3.
```

---

## Key Formulas and Reference

### Vector Operations
```
|v| = √(a² + b² + c²)
Unit vector: u = v/|v|
```

### Dot Product
```
u · v = u₁v₁ + u₂v₂ + u₃v₃
u · v = |u||v|cos θ
cos θ = (u · v)/(|u||v|)
proj_v u = [(u · v)/|v|²]v
Orthogonal: u · v = 0
```

### Cross Product
```
      | i   j   k  |
u × v = | u₁  u₂  u₃ |
      | v₁  v₂  v₃ |

|u × v| = |u||v|sin θ
Area of parallelogram = |u × v|
```

### Lines in 3D
```
Parametric: r(t) = r₀ + tv
            x = x₀ + at, y = y₀ + bt, z = z₀ + ct
Symmetric: (x - x₀)/a = (y - y₀)/b = (z - z₀)/c
Distance point to line: d = |PQ × v|/|v|
```

### Planes
```
Point-normal: a(x - x₀) + b(y - y₀) + c(z - z₀) = 0
Standard: ax + by + cz + d = 0
Distance point to plane: |ax₀ + by₀ + cz₀ + d|/√(a² + b² + c²)
Angle between planes: cos θ = |n₁ · n₂|/(|n₁||n₂|)
```

### Quadric Surfaces
```
Ellipsoid: x²/a² + y²/b² + z²/c² = 1
Hyperboloid (1 sheet): x²/a² + y²/b² - z²/c² = 1
Hyperboloid (2 sheets): z²/c² - x²/a² - y²/b² = 1
Cone: x²/a² + y²/b² = z²/c²
Elliptic paraboloid: z = x²/a² + y²/b²
Hyperbolic paraboloid: z = y²/b² - x²/a²
Sphere: (x - h)² + (y - k)² + (z - l)² = r²
```

---

## Practice Problems

1. Find |v| if v = ⟨3, -4, 12⟩
2. Find the unit vector in the direction of v = ⟨1, 2, 2⟩
3. Find u · v if u = ⟨2, -1, 3⟩ and v = ⟨1, 4, -2⟩
4. Find the angle between u = ⟨1, 1, 0⟩ and v = ⟨0, 1, 1⟩
5. Find u × v if u = ⟨1, 2, 3⟩ and v = ⟨4, 5, 6⟩
6. Find the area of the parallelogram with sides u = ⟨2, 0, 1⟩ and v = ⟨1, 3, 0⟩
7. Find parametric equations for the line through (1, 2, 3) in direction ⟨2, -1, 4⟩
8. Find the equation of the plane through (1, 1, 1) with normal ⟨3, 2, 1⟩
9. Find the distance from (2, 1, 3) to plane 2x - y + 2z = 6
10. Identify the surface: x² + y² = 9

---

**End of Notes**
