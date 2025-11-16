# Calculus 3 - Unit 6: Vector Calculus - Surface Integrals - Notes

## Table of Contents
1. [Parametric Surfaces](#parametric-surfaces)
2. [Surface Area](#surface-area)
3. [Surface Integrals of Scalar Functions](#surface-integrals-of-scalar-functions)
4. [Oriented Surfaces and Normal Vectors](#oriented-surfaces-and-normal-vectors)
5. [Surface Integrals of Vector Fields](#surface-integrals-of-vector-fields)
6. [Flux Across Surfaces](#flux-across-surfaces)
7. [Applications](#applications)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Parametrizing surfaces**
- **Computing surface areas**
- **Evaluating surface integrals**
- **Calculating flux across surfaces**

---

## Parametric Surfaces

### Definition

A **parametric surface** S is given by:
```
r(u, v) = ⟨x(u,v), y(u,v), z(u,v)⟩
```
where (u,v) ∈ D ⊆ ℝ²

### Example 1: Plane

Parametrize the plane z = 2x + 3y.

**Solution:**
```
r(u, v) = ⟨u, v, 2u + 3v⟩
where (u,v) ∈ ℝ²
```

### Example 2: Cylinder

Parametrize the cylinder x² + y² = 4, 0 ≤ z ≤ 3.

**Solution:**
```
r(u, v) = ⟨2cos u, 2sin u, v⟩
where 0 ≤ u ≤ 2π, 0 ≤ v ≤ 3
```

### Example 3: Sphere

Parametrize the sphere x² + y² + z² = a².

**Solution:**
```
Using spherical coordinates:
r(φ, θ) = ⟨a sin φ cos θ, a sin φ sin θ, a cos φ⟩
where 0 ≤ φ ≤ π, 0 ≤ θ ≤ 2π
```

### Tangent Vectors

For surface r(u,v), the tangent vectors are:
```
r_u = ∂r/∂u
r_v = ∂r/∂v
```

### Normal Vector

The **normal vector** is:
```
n = r_u × r_v
```

### Example 4: Normal to Cylinder

Find the normal vector to x² + y² = 1 parametrized as r(u,v) = ⟨cos u, sin u, v⟩.

**Solution:**
```
r_u = ⟨-sin u, cos u, 0⟩
r_v = ⟨0, 0, 1⟩

n = r_u × r_v = | i      j      k    |
                 |-sin u  cos u  0    |
                 | 0      0      1    |
              = ⟨cos u, sin u, 0⟩
```

---

## Surface Area

### Formula

Surface area of S parametrized by r(u,v) over domain D:
```
A(S) = ∬_D |r_u × r_v| dA
```

### Example 5: Area of Plane Region

Find the area of the part of the plane z = 2x + y over the rectangle [0,1] × [0,2].

**Solution:**
```
r(u,v) = ⟨u, v, 2u + v⟩
r_u = ⟨1, 0, 2⟩
r_v = ⟨0, 1, 1⟩

r_u × r_v = | i  j  k |
             | 1  0  2 |
             | 0  1  1 |
           = ⟨-2, -1, 1⟩

|r_u × r_v| = √(4 + 1 + 1) = √6

A = ∬_D √6 dA = √6 · (1 · 2) = 2√6
```

### Example 6: Surface Area of Sphere

Find the surface area of the sphere x² + y² + z² = a².

**Solution:**
```
Using r(φ,θ) = ⟨a sin φ cos θ, a sin φ sin θ, a cos φ⟩

After computation: |r_φ × r_θ| = a² sin φ

A = ∫_0^{2π} ∫_0^π a² sin φ dφ dθ
  = ∫_0^{2π} a²[-cos φ]_0^π dθ
  = ∫_0^{2π} 2a² dθ
  = 4πa²
```

---

## Surface Integrals of Scalar Functions

### Definition

For scalar function f over surface S:
```
∬_S f(x,y,z) dS = ∬_D f(r(u,v)) |r_u × r_v| dA
```

### Example 7: Surface Integral

Evaluate ∬_S z dS where S is the hemisphere z = √(1-x²-y²).

**Solution:**
```
Parametrize using (x,y) as parameters:
r(x,y) = ⟨x, y, √(1-x²-y²)⟩, x²+y² ≤ 1

r_x = ⟨1, 0, -x/√(1-x²-y²)⟩
r_y = ⟨0, 1, -y/√(1-x²-y²)⟩

|r_x × r_y| = 1/√(1-x²-y²)

∬_S z dS = ∬_D √(1-x²-y²) · 1/√(1-x²-y²) dA
         = ∬_D 1 dA
         = π
```

### Example 8: Mass of Surface

Find the mass of the cone z = √(x²+y²), 0 ≤ z ≤ 1, with density ρ = z.

**Solution:**
```
Cylindrical parametrization:
r(r,θ) = ⟨r cos θ, r sin θ, r⟩, 0 ≤ r ≤ 1, 0 ≤ θ ≤ 2π

|r_r × r_θ| = √2 r

Mass = ∫_0^{2π} ∫_0^1 r · √2 r dr dθ
     = √2 ∫_0^{2π} [r³/3]_0^1 dθ
     = √2/3 · 2π
     = 2π√2/3
```

---

## Oriented Surfaces and Normal Vectors

### Orientation

A surface is **oriented** if we choose a consistent direction for the normal vector.

**Unit normal:** n̂ = (r_u × r_v)/|r_u × r_v|

### Two Sides

- **Outward orientation:** normal points away from enclosed region
- **Upward orientation:** positive z-component
- **Right-hand rule:** curl fingers from r_u to r_v

### Example 9: Orientation

For sphere x² + y² + z² = 1, the outward normal at (1,0,0) is:
```
n = ⟨1, 0, 0⟩ (pointing away from origin)
```

---

## Surface Integrals of Vector Fields

### Definition (Flux Form)

For vector field **F** over oriented surface S:
```
∬_S **F** · d**S** = ∬_S **F** · n̂ dS = ∬_D **F** · (r_u × r_v) dA
```

### Example 10: Flux Through Plane

Find the flux of **F** = ⟨0, 0, z⟩ upward through the plane z = 1, 0 ≤ x ≤ 1, 0 ≤ y ≤ 1.

**Solution:**
```
r(x,y) = ⟨x, y, 1⟩
r_x = ⟨1, 0, 0⟩
r_y = ⟨0, 1, 0⟩

r_x × r_y = ⟨0, 0, 1⟩ (upward)

**F**(r) = ⟨0, 0, 1⟩

Flux = ∬_D ⟨0,0,1⟩ · ⟨0,0,1⟩ dA
     = ∬_D 1 dA
     = 1
```

### Example 11: Flux Through Cylinder

Find the flux of **F** = ⟨x, y, z⟩ outward through the cylinder x² + y² = 1, 0 ≤ z ≤ 2.

**Solution:**
```
r(θ,z) = ⟨cos θ, sin θ, z⟩, 0 ≤ θ ≤ 2π, 0 ≤ z ≤ 2

r_θ = ⟨-sin θ, cos θ, 0⟩
r_z = ⟨0, 0, 1⟩

r_θ × r_z = ⟨cos θ, sin θ, 0⟩ (outward)

**F** = ⟨cos θ, sin θ, z⟩

**F** · (r_θ × r_z) = cos²θ + sin²θ = 1

Flux = ∫_0^2 ∫_0^{2π} 1 dθ dz = 2(2π) = 4π
```

---

## Flux Across Surfaces

### Physical Interpretation

**Flux** measures the amount of **F** flowing across S per unit time.

### Example 12: Flux of Velocity Field

Find the flux of velocity field **v** = ⟨x, 0, 0⟩ through the sphere x² + y² + z² = 4.

**Solution:**
```
By symmetry and the Divergence Theorem (next unit):
Flux = ∭_E div **v** dV = ∭_E 1 dV = Volume = (4/3)π(2)³ = 32π/3
```

### Flux Through Graphs

For surface z = g(x,y) over region D, oriented upward:
```
∬_S **F** · d**S** = ∬_D (-P∂g/∂x - Q∂g/∂y + R) dA
```
where **F** = ⟨P, Q, R⟩.

### Example 13: Using Graph Form

Find flux of **F** = ⟨0, 0, z⟩ upward through z = x² + y² over x² + y² ≤ 1.

**Solution:**
```
∂z/∂x = 2x, ∂z/∂y = 2y

Flux = ∬_D (0 + 0 + z) dA
     = ∬_D (x² + y²) dA

In polar: ∫_0^{2π} ∫_0^1 r² · r dr dθ = 2π[r⁴/4]_0^1 = π/2
```

---

## Applications

### Mass

Mass = ∬_S ρ dS

### Center of Mass

x̄ = (1/m)∬_S xρ dS

### Flux

Flux = ∬_S **F** · n̂ dS

### Example 14: Application

A hemisphere of radius 2 has density ρ = z. Find its mass.

**Solution:**
```
Parametrize: r(φ,θ) = ⟨2sinφ cosθ, 2sinφ sinθ, 2cosφ⟩
z = 2cos φ
|r_φ × r_θ| = 4sin φ

Mass = ∫_0^{2π} ∫_0^{π/2} (2cosφ)(4sinφ) dφ dθ
     = 8∫_0^{2π} ∫_0^{π/2} sinφ cosφ dφ dθ
     = 8∫_0^{2π} [sin²φ/2]_0^{π/2} dθ
     = 8∫_0^{2π} 1/2 dθ
     = 8π
```

---

## Key Formulas and Reference

### Parametric Surfaces
```
r(u,v) = ⟨x(u,v), y(u,v), z(u,v)⟩
Tangent vectors: r_u, r_v
Normal: n = r_u × r_v
```

### Surface Area
```
A(S) = ∬_D |r_u × r_v| dA
```

### Surface Integrals
```
Scalar: ∬_S f dS = ∬_D f(r(u,v)) |r_u × r_v| dA
Vector: ∬_S **F** · d**S** = ∬_D **F** · (r_u × r_v) dA
```

### Flux
```
Flux = ∬_S **F** · n̂ dS
For z = g(x,y): ∬_D (-P g_x - Q g_y + R) dA
```

---

## Practice Problems

1. Parametrize the plane 2x + 3y + z = 6
2. Find |r_u × r_v| for r(u,v) = ⟨u, v, u² + v²⟩
3. Find surface area of z = x + y over [0,1] × [0,1]
4. Evaluate ∬_S z² dS where S is z = x² + y², 0 ≤ z ≤ 1
5. Find flux of **F** = ⟨0,0,1⟩ through z = 1 over unit disk
6. Parametrize x² + y² = 9, 0 ≤ z ≤ 5
7. Find outward normal to sphere at (1,0,0)
8. Calculate ∬_S xy dS where S is x + y + z = 1, x,y,z ≥ 0
9. Find flux of **F** = ⟨x,y,z⟩ through unit cube faces
10. Surface area of cone z = √(x²+y²), 0 ≤ z ≤ h

---

**End of Notes**
