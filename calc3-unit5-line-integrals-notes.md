# Calculus 3 - Unit 5: Vector Calculus - Line Integrals - Notes

## Table of Contents
1. [Line Integrals of Scalar Functions](#line-integrals-of-scalar-functions)
2. [Line Integrals of Vector Fields](#line-integrals-of-vector-fields)
3. [Work and Circulation](#work-and-circulation)
4. [Fundamental Theorem for Line Integrals](#fundamental-theorem-for-line-integrals)
5. [Conservative Vector Fields](#conservative-vector-fields)
6. [Independence of Path](#independence-of-path)
7. [Green's Theorem (Preview)](#greens-theorem-preview)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Evaluating line integrals of scalar and vector functions**
- **Computing work done by a force field**
- **Identifying conservative vector fields**
- **Using the Fundamental Theorem for Line Integrals**

---

## Essential Questions
- How do we integrate along curves in space?
- What does it mean for a vector field to be conservative?
- When is the line integral independent of path?

---

## Line Integrals of Scalar Functions

### Definition

For curve C given by r(t) = ⟨x(t), y(t), z(t)⟩, a ≤ t ≤ b:

```
∫_C f(x,y,z) ds = ∫_a^b f(r(t)) |r'(t)| dt
```

where ds = |r'(t)| dt is the arc length element.

### Example 1: Line Integral Along a Line

Evaluate ∫_C (x + y) ds where C is the line segment from (0,0) to (1,1).

**Solution:**
```
Parametrize: r(t) = ⟨t, t⟩, 0 ≤ t ≤ 1
r'(t) = ⟨1, 1⟩
|r'(t)| = √2

∫_C (x + y) ds = ∫_0^1 (t + t)√2 dt
                = √2 ∫_0^1 2t dt
                = 2√2[t²/2]_0^1
                = √2
```

### Example 2: Line Integral Along a Circle

Evaluate ∫_C xy ds where C is the circle x² + y² = 4, traversed counterclockwise.

**Solution:**
```
Parametrize: r(t) = ⟨2cos t, 2sin t⟩, 0 ≤ t ≤ 2π
r'(t) = ⟨-2sin t, 2cos t⟩
|r'(t)| = 2

∫_C xy ds = ∫_0^{2π} (2cos t)(2sin t)·2 dt
          = 8∫_0^{2π} cos t sin t dt
          = 8∫_0^{2π} (sin 2t)/2 dt
          = 4[-cos 2t/2]_0^{2π}
          = 0
```

### Example 3: Mass of a Wire

Find the mass of a wire shaped like the helix r(t) = ⟨cos t, sin t, t⟩, 0 ≤ t ≤ 2π, with density ρ(x,y,z) = z.

**Solution:**
```
r'(t) = ⟨-sin t, cos t, 1⟩
|r'(t)| = √(sin²t + cos²t + 1) = √2

Mass = ∫_C z ds = ∫_0^{2π} t·√2 dt
                 = √2[t²/2]_0^{2π}
                 = √2·2π²
                 = 2π²√2
```

---

## Line Integrals of Vector Fields

### Definition

For vector field **F** = ⟨P, Q, R⟩ and curve C parametrized by r(t):

```
∫_C **F** · d**r** = ∫_a^b **F**(r(t)) · r'(t) dt
```

Alternatively:
```
∫_C P dx + Q dy + R dz = ∫_a^b [P(dx/dt) + Q(dy/dt) + R(dz/dt)] dt
```

### Example 4: Line Integral of Vector Field

Evaluate ∫_C **F** · d**r** where **F** = ⟨y, -x⟩ and C is the line from (0,0) to (1,1).

**Solution:**
```
r(t) = ⟨t, t⟩, 0 ≤ t ≤ 1
r'(t) = ⟨1, 1⟩
**F**(r(t)) = ⟨t, -t⟩

∫_C **F** · d**r** = ∫_0^1 ⟨t, -t⟩ · ⟨1, 1⟩ dt
                   = ∫_0^1 (t - t) dt
                   = 0
```

### Example 5: Line Integral Around a Circle

Evaluate ∫_C **F** · d**r** where **F** = ⟨-y, x⟩ and C is the unit circle, counterclockwise.

**Solution:**
```
r(t) = ⟨cos t, sin t⟩, 0 ≤ t ≤ 2π
r'(t) = ⟨-sin t, cos t⟩
**F**(r(t)) = ⟨-sin t, cos t⟩

∫_C **F** · d**r** = ∫_0^{2π} ⟨-sin t, cos t⟩ · ⟨-sin t, cos t⟩ dt
                   = ∫_0^{2π} (sin²t + cos²t) dt
                   = ∫_0^{2π} 1 dt
                   = 2π
```

### Properties

1. ∫_C **F** · d**r** = -∫_{-C} **F** · d**r** (opposite orientation)
2. ∫_C (a**F** + b**G**) · d**r** = a∫_C **F** · d**r** + b∫_C **G** · d**r**
3. If C = C₁ + C₂, then ∫_C = ∫_{C₁} + ∫_{C₂}

---

## Work and Circulation

### Work Done by Force Field

Work = ∫_C **F** · d**r**

### Example 6: Work Calculation

Find the work done by **F** = ⟨x, y, z⟩ moving a particle from (0,0,0) to (1,1,1) along r(t) = ⟨t, t, t⟩.

**Solution:**
```
r'(t) = ⟨1, 1, 1⟩
**F**(r(t)) = ⟨t, t, t⟩

Work = ∫_0^1 ⟨t, t, t⟩ · ⟨1, 1, 1⟩ dt
     = ∫_0^1 3t dt
     = 3[t²/2]_0^1
     = 3/2
```

### Circulation

**Circulation** around closed curve C:
```
Circulation = ∮_C **F** · d**r** = ∫_C **F** · **T** ds
```

where **T** is the unit tangent vector.

### Flux

**Flux** across curve C in plane:
```
Flux = ∫_C **F** · **n** ds
```

where **n** is the unit normal vector.

---

## Fundamental Theorem for Line Integrals

### Theorem

If **F** = ∇f (gradient field) and C is a smooth curve from point A to point B, then:

```
∫_C ∇f · d**r** = f(B) - f(A)
```

This is analogous to the Fundamental Theorem of Calculus!

### Example 7: Using the Fundamental Theorem

Evaluate ∫_C ∇f · d**r** where f(x,y) = x²y and C goes from (0,0) to (2,3).

**Solution:**
```
∇f = ⟨2xy, x²⟩

∫_C ∇f · d**r** = f(2,3) - f(0,0)
                 = (2²·3) - 0
                 = 12
```

Note: The answer is independent of the path!

### Example 8: Verifying the Theorem

For **F** = ⟨2xy, x²⟩ from Example 7, verify by direct computation along r(t) = ⟨2t, 3t⟩, 0 ≤ t ≤ 1.

**Solution:**
```
r'(t) = ⟨2, 3⟩
**F**(r(t)) = ⟨2(2t)(3t), (2t)²⟩ = ⟨12t², 4t²⟩

∫_C **F** · d**r** = ∫_0^1 ⟨12t², 4t²⟩ · ⟨2, 3⟩ dt
                   = ∫_0^1 (24t² + 12t²) dt
                   = ∫_0^1 36t² dt
                   = 36[t³/3]_0^1
                   = 12 ✓
```

---

## Conservative Vector Fields

### Definition

A vector field **F** is **conservative** if there exists a scalar function f (called a **potential function**) such that:

```
**F** = ∇f
```

### Test for Conservative Fields (2D)

In 2D, **F** = ⟨P, Q⟩ is conservative if and only if:

```
∂P/∂y = ∂Q/∂x
```

(on a simply connected domain)

### Example 9: Testing if Conservative

Determine if **F** = ⟨2xy, x² + 2y⟩ is conservative.

**Solution:**
```
P = 2xy, Q = x² + 2y

∂P/∂y = 2x
∂Q/∂x = 2x

Since ∂P/∂y = ∂Q/∂x, **F** is conservative.
```

### Example 10: Not Conservative

Show that **F** = ⟨-y, x⟩ is not conservative.

**Solution:**
```
P = -y, Q = x

∂P/∂y = -1
∂Q/∂x = 1

Since -1 ≠ 1, **F** is not conservative.
```

### Finding Potential Functions

If **F** = ⟨P, Q⟩ is conservative, find f such that ∇f = **F**:

1. Integrate ∂f/∂x = P with respect to x
2. Differentiate result with respect to y
3. Compare with Q to find the constant of integration

### Example 11: Finding Potential Function

Find a potential function for **F** = ⟨2xy, x² + 2y⟩.

**Solution:**
```
∂f/∂x = 2xy

Integrate: f = ∫ 2xy dx = x²y + g(y)

Differentiate: ∂f/∂y = x² + g'(y)

Compare with Q: x² + g'(y) = x² + 2y
               g'(y) = 2y
               g(y) = y²

Therefore: f(x, y) = x²y + y²
```

### Test in 3D

For **F** = ⟨P, Q, R⟩ in 3D:

```
∂P/∂y = ∂Q/∂x
∂P/∂z = ∂R/∂x
∂Q/∂z = ∂R/∂y
```

(This is equivalent to curl **F** = **0**)

---

## Independence of Path

### Theorem

The following are equivalent for a vector field **F** on a connected domain D:

1. **F** is conservative
2. ∫_C **F** · d**r** is independent of path
3. ∮_C **F** · d**r** = 0 for every closed curve C in D

### Example 12: Path Independence

Show that ∫_C ⟨2x, 2y⟩ · d**r** is independent of path.

**Solution:**
```
**F** = ⟨2x, 2y⟩

Check: ∂P/∂y = 0, ∂Q/∂x = 0
Since ∂P/∂y = ∂Q/∂x, **F** is conservative.

Find potential: f(x,y) = x² + y²

Therefore, integral depends only on endpoints, not path.
```

### Example 13: Evaluating Using Independence

Evaluate ∫_C ⟨2x, 2y⟩ · d**r** from (0,0) to (3,4) along any path.

**Solution:**
```
f(x,y) = x² + y²

∫_C ⟨2x, 2y⟩ · d**r** = f(3,4) - f(0,0)
                       = (9 + 16) - 0
                       = 25
```

---

## Green's Theorem (Preview)

### Statement

If C is a positively oriented, piecewise smooth, simple closed curve enclosing region D:

```
∮_C P dx + Q dy = ∬_D (∂Q/∂x - ∂P/∂y) dA
```

(Full treatment in Unit 7)

### Example 14: Green's Theorem Application

Use Green's Theorem to evaluate ∮_C xy dx + x²y dy where C is the unit circle.

**Solution:**
```
P = xy, Q = x²y
∂Q/∂x = 2xy
∂P/∂y = x

∮_C P dx + Q dy = ∬_D (2xy - x) dA

In polar: ∫_0^{2π} ∫_0^1 (2r²cosθ sinθ - r cosθ) r dr dθ

(Evaluation gives 0 by symmetry)
```

---

## Key Formulas and Reference

### Line Integrals
```
Scalar: ∫_C f ds = ∫_a^b f(r(t))|r'(t)| dt
Vector: ∫_C **F** · d**r** = ∫_a^b **F**(r(t)) · r'(t) dt
```

### Work
```
Work = ∫_C **F** · d**r**
```

### Fundamental Theorem
```
∫_C ∇f · d**r** = f(B) - f(A)
```

### Conservative Test (2D)
```
**F** = ⟨P, Q⟩ conservative ⟺ ∂P/∂y = ∂Q/∂x
```

### Potential Function
```
If **F** = ∇f, then ∫_C **F** · d**r** = f(B) - f(A)
```

---

## Practice Problems

1. Evaluate ∫_C x ds, C: r(t) = ⟨t, t²⟩, 0 ≤ t ≤ 1
2. Find work done by **F** = ⟨x, y⟩ from (0,0) to (1,1)
3. Test if **F** = ⟨y, x⟩ is conservative
4. Find potential for **F** = ⟨2xy, x²⟩
5. Evaluate ∫_C ⟨2x, 2y⟩ · d**r** from (0,0) to (2,3)
6. Is **F** = ⟨-y, x⟩ conservative?
7. Find ∮_C **F** · d**r** where **F** = ∇(x²+y²), C any closed curve
8. Compute ∫_C y² dx + x² dy, C from (0,0) to (1,1)
9. Test **F** = ⟨yz, xz, xy⟩ for conservativeness
10. Find work by **F** = ⟨x², y²⟩ along y = x² from (0,0) to (1,1)

---

**End of Notes**
