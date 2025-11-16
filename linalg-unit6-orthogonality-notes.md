# Linear Algebra - Unit 6: Orthogonality - Notes

## Table of Contents
1. [Inner Product and Orthogonality](#inner-product-and-orthogonality)
2. [Orthogonal Sets and Bases](#orthogonal-sets-and-bases)
3. [Orthogonal Projections](#orthogonal-projections)
4. [Gram-Schmidt Process](#gram-schmidt-process)
5. [QR Factorization](#qr-factorization)
6. [Least Squares Problems](#least-squares-problems)
7. [Orthogonal Matrices](#orthogonal-matrices)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Computing inner products and norms**
- **Verifying orthogonality**
- **Finding orthogonal projections**
- **Applying Gram-Schmidt process**
- **Computing QR factorizations**
- **Solving least squares problems**

---

## Essential Questions
- What does orthogonality mean geometrically and algebraically?
- Why are orthogonal bases useful?
- How do we find best-fit solutions to inconsistent systems?

---

## Inner Product

### Definition

The **inner product** (dot product) of u, v in ℝⁿ is:
```
u·v = u₁v₁ + u₂v₂ + ... + uₙvₙ = uᵀv
```

### Properties

1. u·v = v·u
2. (u + v)·w = u·w + v·w
3. (cu)·v = c(u·v)
4. u·u ≥ 0, and u·u = 0 iff u = 0

### Example 1: Computing Inner Product

```
u = [1, 2, 3]ᵀ, v = [4, 5, 6]ᵀ

u·v = 1(4) + 2(5) + 3(6) = 4 + 10 + 18 = 32
```

---

## Length and Distance

### Length (Norm)

```
‖v‖ = √(v·v) = √(v₁² + v₂² + ... + vₙ²)
```

### Unit Vector

v is a **unit vector** if ‖v‖ = 1

To **normalize** v: u = v/‖v‖

### Distance

```
dist(u, v) = ‖u - v‖
```

### Example 2: Norm and Distance

```
v = [3, 4]ᵀ
‖v‖ = √(9 + 16) = 5

Unit vector: u = [3/5, 4/5]ᵀ

w = [0, 0]ᵀ
dist(v, w) = ‖v‖ = 5
```

---

## Orthogonality

### Definition

Vectors u and v are **orthogonal** if u·v = 0.

Notation: u ⊥ v

### Theorem: Pythagorean Theorem

If u ⊥ v, then:
```
‖u + v‖² = ‖u‖² + ‖v‖²
```

### Example 3: Verifying Orthogonality

```
u = [1, -1, 2]ᵀ, v = [2, 2, 0]ᵀ

u·v = 1(2) + (-1)(2) + 2(0) = 0

Therefore u ⊥ v ✓
```

---

## Orthogonal Sets

### Definition

Set {u₁, ..., uₚ} is **orthogonal** if uᵢ·uⱼ = 0 for all i ≠ j.

If also ‖uᵢ‖ = 1 for all i, the set is **orthonormal**.

### Theorem

An orthogonal set of nonzero vectors is linearly independent.

### Example 4: Orthogonal Set

```
v₁ = [1, 0, 0]ᵀ, v₂ = [0, 1, 0]ᵀ, v₃ = [0, 0, 1]ᵀ

{v₁, v₂, v₃} is orthonormal (standard basis)
```

---

## Orthogonal Basis

### Theorem

If {u₁, ..., uₙ} is orthogonal basis for W, then:
```
x = (x·u₁/‖u₁‖²)u₁ + ... + (x·uₙ/‖uₙ‖²)uₙ
```

Coefficients are easy to compute!

### Example 5: Coordinates in Orthogonal Basis

```
Basis: {u₁ = [3,4]ᵀ, u₂ = [4,-3]ᵀ} (orthogonal)
Find coordinates of x = [1,7]ᵀ

c₁ = x·u₁/‖u₁‖² = 31/25
c₂ = x·u₂/‖u₂‖² = -17/25

x = (31/25)[3,4]ᵀ + (-17/25)[4,-3]ᵀ
```

---

## Orthogonal Projection

### Definition

The **orthogonal projection** of y onto u is:
```
proj_u(y) = (y·u/u·u)u
```

### Component Orthogonal to u

```
y - proj_u(y) ⊥ u
```

### Example 6: Projection

```
y = [7, 6]ᵀ, u = [4, 2]ᵀ

proj_u(y) = (40/20)[4,2]ᵀ = 2[4,2]ᵀ = [8,4]ᵀ

y - proj_u(y) = [-1, 2]ᵀ

Verify: [-1,2]·[4,2] = -4 + 4 = 0 ✓
```

---

## Gram-Schmidt Process

### Algorithm

Given basis {x₁, ..., xₚ}, construct orthogonal basis {v₁, ..., vₚ}:

```
v₁ = x₁
v₂ = x₂ - proj_{v₁}(x₂)
v₃ = x₃ - proj_{v₁}(x₃) - proj_{v₂}(x₃)
⋮
vₖ = xₖ - Σ_{i=1}^{k-1} proj_{vᵢ}(xₖ)
```

### Example 7: Gram-Schmidt

```
Start: {x₁ = [1,1,1]ᵀ, x₂ = [0,1,1]ᵀ}

v₁ = x₁ = [1,1,1]ᵀ

v₂ = x₂ - (x₂·v₁/v₁·v₁)v₁
   = [0,1,1]ᵀ - (2/3)[1,1,1]ᵀ
   = [-2/3, 1/3, 1/3]ᵀ

Or scale: v₂ = [-2, 1, 1]ᵀ

Orthogonal basis: {[1,1,1]ᵀ, [-2,1,1]ᵀ}
```

---

## QR Factorization

### Definition

A = QR where:
- Q has orthonormal columns
- R is upper triangular

### Construction

1. Apply Gram-Schmidt to columns of A
2. Normalize to get Q
3. R = QᵀA

### Example 8: QR Factorization

```
A = [1  0]
    [1  1]
    [1  1]

Gram-Schmidt on columns:
q₁ = [1,1,1]ᵀ/√3 = [1/√3, 1/√3, 1/√3]ᵀ
q₂ = [-2,1,1]ᵀ/√6 = [-2/√6, 1/√6, 1/√6]ᵀ

Q = [1/√3  -2/√6]
    [1/√3   1/√6]
    [1/√3   1/√6]

R = QᵀA = [√3    √3  ]
          [0     √6/3]
```

---

## Least Squares

### Problem

Find x̂ that minimizes ‖Ax - b‖ (best approximate solution).

### Normal Equation

```
AᵀAx̂ = Aᵀb
```

If columns of A are linearly independent, x̂ = (AᵀA)⁻¹Aᵀb

### Example 9: Least Squares Line

Fit line y = mx + b to points (1,1), (2,3), (3,2):

```
A = [1  1]    b = [1]
    [2  1]        [3]
    [3  1]        [2]

AᵀA = [14  6]    Aᵀb = [11]
      [6   3]          [ 6]

Solve: [14  6][m]   [11]
       [6   3][b] = [ 6]

Solution: m = 1/2, b = 2/3
```

---

## Orthogonal Matrices

### Definition

Square matrix Q is **orthogonal** if QᵀQ = I.

Equivalently: Qᵀ = Q⁻¹

### Properties

- Columns form orthonormal set
- Preserves lengths: ‖Qx‖ = ‖x‖
- Preserves angles

### Example 10: Rotation Matrix

```
Q = [cos θ  -sin θ]
    [sin θ   cos θ]

QᵀQ = [1  0] = I ✓
      [0  1]
```

---

## Key Formulas and Reference

### Inner Product
```
u·v = uᵀv = Σuᵢvᵢ
```

### Norm
```
‖v‖ = √(v·v)
```

### Orthogonality
```
u ⊥ v ⟺ u·v = 0
```

### Projection
```
proj_u(y) = (y·u/u·u)u
```

### Gram-Schmidt
```
vₖ = xₖ - Σ proj_{vᵢ}(xₖ)
```

### QR Factorization
```
A = QR (Q orthonormal, R upper triangular)
```

### Least Squares
```
x̂ = (AᵀA)⁻¹Aᵀb minimizes ‖Ax - b‖
```

---

**Next Unit:** Unit 7 - Linear Transformations
