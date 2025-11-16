# Calculus 3 - Unit 7: Vector Calculus - Major Theorems - Notes

## Table of Contents
1. [Green's Theorem](#greens-theorem)
2. [Curl and Divergence](#curl-and-divergence)
3. [Stokes' Theorem](#stokes-theorem)
4. [Divergence Theorem](#divergence-theorem)
5. [Relationships Between Theorems](#relationships-between-theorems)
6. [Applications](#applications)
7. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Applying Green's Theorem in the plane**
- **Computing curl and divergence of vector fields**
- **Using Stokes' Theorem**
- **Applying the Divergence Theorem**
- **Understanding connections between fundamental theorems**

---

## Essential Questions
- How do line integrals relate to double integrals?
- How do surface integrals relate to triple integrals?
- What do curl and divergence measure physically?

---

## Green's Theorem

### Statement

Let C be a positively oriented, piecewise smooth, simple closed curve enclosing region D in the plane. If P and Q have continuous partial derivatives on D, then:

```
∮_C P dx + Q dy = ∬_D (∂Q/∂x - ∂P/∂y) dA
```

Or equivalently:
```
∮_C **F** · d**r** = ∬_D (∂Q/∂x - ∂P/∂y) dA
```

### Example 1: Using Green's Theorem

Evaluate ∮_C (x² - y) dx + x dy where C is the circle x² + y² = 1, counterclockwise.

**Solution:**
```
P = x² - y, Q = x

∂Q/∂x = 1
∂P/∂y = -1

∮_C P dx + Q dy = ∬_D (1 - (-1)) dA
                 = ∬_D 2 dA
                 = 2 · π(1²)
                 = 2π
```

### Example 2: Computing Area

Use Green's Theorem to find the area of the ellipse x²/a² + y²/b² = 1.

**Solution:**
```
Area = (1/2)∮_C x dy - y dx

Parametrize: x = a cos t, y = b sin t, 0 ≤ t ≤ 2π
dx = -a sin t dt, dy = b cos t dt

Area = (1/2)∫_0^{2π} [(a cos t)(b cos t) - (b sin t)(-a sin t)] dt
     = (1/2)∫_0^{2π} (ab cos²t + ab sin²t) dt
     = (1/2)∫_0^{2π} ab dt
     = πab
```

### Example 3: Non-Simple Region

Evaluate ∮_C y² dx + 3xy dy where C is the boundary of the region between y = x² and y = x.

**Solution:**
```
P = y², Q = 3xy

∂Q/∂x = 3y
∂P/∂y = 2y

Region: 0 ≤ x ≤ 1, x² ≤ y ≤ x

∮_C = ∫_0^1 ∫_{x²}^x (3y - 2y) dy dx
    = ∫_0^1 ∫_{x²}^x y dy dx
    = ∫_0^1 [y²/2]_{x²}^x dx
    = ∫_0^1 (x²/2 - x⁴/2) dx
    = [x³/6 - x⁵/10]_0^1
    = 1/6 - 1/10 = 1/15
```

### Vector Form of Green's Theorem

For **F** = ⟨P, Q⟩:
```
∮_C **F** · **T** ds = ∬_D (∂Q/∂x - ∂P/∂y) dA
∮_C **F** · **n** ds = ∬_D (∂P/∂x + ∂Q/∂y) dA
```

where **T** is unit tangent and **n** is outward unit normal.

---

## Curl and Divergence

### Curl (3D)

For **F** = ⟨P, Q, R⟩:
```
curl **F** = ∇ × **F** = | i    j    k   |
                          | ∂/∂x ∂/∂y ∂/∂z |
                          | P    Q    R   |

            = ⟨∂R/∂y - ∂Q/∂z, ∂P/∂z - ∂R/∂x, ∂Q/∂x - ∂P/∂y⟩
```

### Curl (2D)

For **F** = ⟨P, Q, 0⟩ in the plane:
```
curl **F** = (∂Q/∂x - ∂P/∂y)**k**
```

The scalar ∂Q/∂x - ∂P/∂y appears in Green's Theorem!

### Example 4: Computing Curl

Find curl **F** for **F** = ⟨yz, xz, xy⟩.

**Solution:**
```
curl **F** = | i    j    k   |
             | ∂/∂x ∂/∂y ∂/∂z |
             | yz   xz   xy  |

           = i(x - x) - j(y - y) + k(z - z)
           = ⟨0, 0, 0⟩

So **F** is irrotational (curl-free).
```

### Divergence

For **F** = ⟨P, Q, R⟩:
```
div **F** = ∇ · **F** = ∂P/∂x + ∂Q/∂y + ∂R/∂z
```

### Example 5: Computing Divergence

Find div **F** for **F** = ⟨x², y², z²⟩.

**Solution:**
```
div **F** = ∂(x²)/∂x + ∂(y²)/∂y + ∂(z²)/∂z
          = 2x + 2y + 2z
```

### Properties

1. div(curl **F**) = 0 always
2. curl(∇f) = **0** always (gradient fields are irrotational)
3. If curl **F** = **0**, then **F** is conservative (on simply connected domains)
4. If div **F** = 0, then **F** is incompressible or solenoidal

### Example 6: Verifying div(curl **F**) = 0

For **F** = ⟨x, y, z⟩:

**Solution:**
```
curl **F** = ⟨0, 0, 0⟩
div(curl **F**) = 0 + 0 + 0 = 0 ✓
```

---

## Stokes' Theorem

### Statement

Let S be an oriented piecewise smooth surface bounded by a simple closed curve C with positive orientation. If **F** has continuous partial derivatives, then:

```
∮_C **F** · d**r** = ∬_S (curl **F**) · d**S**
```

This generalizes Green's Theorem to 3D!

### Example 7: Using Stokes' Theorem

Evaluate ∮_C **F** · d**r** where **F** = ⟨-y, x, z²⟩ and C is the circle x² + y² = 1 at z = 0, counterclockwise when viewed from above.

**Solution:**
```
curl **F** = | i    j    k   |
             | ∂/∂x ∂/∂y ∂/∂z |
             | -y   x    z²  |
           = ⟨0, 0, 2⟩

Use S = disk x² + y² ≤ 1 at z = 0 with upward orientation.
n = ⟨0, 0, 1⟩, dS = dA

∮_C **F** · d**r** = ∬_S ⟨0, 0, 2⟩ · ⟨0, 0, 1⟩ dA
                   = ∬_D 2 dA
                   = 2π
```

### Example 8: Choosing a Convenient Surface

Evaluate ∮_C **F** · d**r** where **F** = ⟨z, x, y⟩ and C is the curve of intersection of x² + y² = 1 and z = y².

**Solution:**
```
curl **F** = ⟨1, 1, 1⟩

Instead of parametrizing C directly, use the paraboloid cap z = y² inside the cylinder.

Parametrize: r(r,θ) = ⟨r cosθ, r sinθ, r²sin²θ⟩, 0 ≤ r ≤ 1

(Calculation continues with surface integral...)
```

### Physical Interpretation

Stokes' Theorem relates:
- **Circulation** around the boundary (∮_C **F** · d**r**)
- **Rotation** through the surface (∬_S curl **F** · d**S**)

---

## Divergence Theorem

### Statement (Gauss's Theorem)

Let E be a simple solid region and S its boundary surface with outward orientation. If **F** has continuous partial derivatives, then:

```
∭_E div **F** dV = ∬_S **F** · d**S**
```

This generalizes Green's Theorem to 3D in a different way!

### Example 9: Using Divergence Theorem

Find the flux of **F** = ⟨x, y, z⟩ outward through the sphere x² + y² + z² = 4.

**Solution:**
```
div **F** = ∂x/∂x + ∂y/∂y + ∂z/∂z = 1 + 1 + 1 = 3

∬_S **F** · d**S** = ∭_E 3 dV
                   = 3 · Volume
                   = 3 · (4πr³/3)
                   = 3 · (32π/3)
                   = 32π
```

### Example 10: Verifying Divergence Theorem

For **F** = ⟨x², y², z²⟩ and E = unit cube [0,1]³, verify the Divergence Theorem.

**Solution:**
```
div **F** = 2x + 2y + 2z

∭_E div **F** dV = ∫_0^1 ∫_0^1 ∫_0^1 (2x + 2y + 2z) dz dy dx
                 = 3

Compute flux through 6 faces:
(Detailed calculation shows flux also equals 3) ✓
```

### Example 11: Electric Flux

Find the electric flux of **E** = **r**/|**r**|³ through a sphere of radius R centered at the origin.

**Solution:**
```
For r ≠ 0: div **E** = 0

But **E** has a singularity at origin, so we must use the surface integral directly.

∬_S **E** · d**S** = ∬_S (1/R²) dS = (1/R²) · 4πR² = 4π

(This is Gauss's law in electrostatics!)
```

---

## Relationships Between Theorems

### The Four Fundamental Theorems

1. **Fundamental Theorem of Calculus:**
   ```
   ∫_a^b f'(x) dx = f(b) - f(a)
   ```

2. **Fundamental Theorem for Line Integrals:**
   ```
   ∫_C ∇f · d**r** = f(B) - f(A)
   ```

3. **Green's Theorem (2D):**
   ```
   ∮_C **F** · d**r** = ∬_D (curl **F**) · **k** dA
   ```

4. **Stokes' Theorem (3D):**
   ```
   ∮_C **F** · d**r** = ∬_S (curl **F**) · d**S**
   ```

5. **Divergence Theorem:**
   ```
   ∬_S **F** · d**S** = ∭_E (div **F**) dV
   ```

### Connections

All these theorems have the form:
```
∫_{∂Ω} = ∫_Ω (derivative)
```

Integral over boundary = Integral over region of derivative

---

## Applications

### Example 12: Area Using Green's

Find area of region using A = (1/2)∮_C (x dy - y dx).

### Example 13: Conservation Laws

If div **F** = 0 (incompressible flow), then flux through any closed surface is zero.

### Example 14: Maxwell's Equations

Stokes' and Divergence Theorems appear in electromagnetic theory:
```
∮_C **E** · d**r** = -∬_S ∂**B**/∂t · d**S**
∬_S **B** · d**S** = 0
```

---

## Key Formulas and Reference

### Green's Theorem
```
∮_C P dx + Q dy = ∬_D (∂Q/∂x - ∂P/∂y) dA
Area = (1/2)∮_C (x dy - y dx)
```

### Curl and Divergence
```
curl **F** = ∇ × **F** = ⟨R_y - Q_z, P_z - R_x, Q_x - P_y⟩
div **F** = ∇ · **F** = P_x + Q_y + R_z
div(curl **F**) = 0
curl(∇f) = **0**
```

### Stokes' Theorem
```
∮_C **F** · d**r** = ∬_S (curl **F**) · d**S**
```

### Divergence Theorem
```
∬_S **F** · d**S** = ∭_E (div **F**) dV
```

---

## Practice Problems

1. Use Green's to evaluate ∮_C y² dx + x² dy around unit circle
2. Find curl **F** for **F** = ⟨yz, xz, xy⟩
3. Find div **F** for **F** = ⟨x², y², z²⟩
4. Use Stokes' for ∮_C **F** · d**r**, **F** = ⟨z, x, y⟩, C: x²+y² = 1 at z = 1
5. Use Divergence Theorem for flux of **F** = ⟨x, y, z⟩ through unit sphere
6. Verify div(curl **F**) = 0 for **F** = ⟨x, y, z⟩
7. Find area of ellipse using Green's Theorem
8. Compute ∮_C (e^x + y²) dx + (e^y + x²) dy around square [0,1]²
9. Use Stokes' to evaluate ∮_C **F** · d**r** for **F** = ⟨-y, x, 0⟩
10. Verify Divergence Theorem for **F** = **r** and unit cube

---

**End of Notes**
