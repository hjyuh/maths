# Linear Algebra - Unit 7: Linear Transformations - Notes

## Table of Contents
1. [Introduction to Linear Transformations](#introduction-to-linear-transformations)
2. [Matrix of a Linear Transformation](#matrix-of-a-linear-transformation)
3. [Kernel and Range](#kernel-and-range)
4. [One-to-One and Onto](#one-to-one-and-onto)
5. [Composition and Inverses](#composition-and-inverses)
6. [Similarity Transformations](#similarity-transformations)
7. [Change of Basis](#change-of-basis)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding linear transformation properties**
- **Finding matrix representations**
- **Computing kernel and range**
- **Determining if transformations are one-to-one or onto**
- **Working with composition and change of basis**

---

## Essential Questions
- What makes a transformation linear?
- How do matrices represent linear transformations?
- What do kernel and range tell us?
- How do coordinate systems affect matrix representations?

---

## Linear Transformations

### Definition

Function T: ℝⁿ → ℝᵐ is a **linear transformation** if:

1. T(u + v) = T(u) + T(v) for all u, v
2. T(cu) = cT(u) for all u and scalar c

Equivalently: T(cu + dv) = cT(u) + dT(v)

### Example 1: Verifying Linearity

Is T([x,y]) = [x+y, 2y] linear?

Check: T(c[x,y]) = T([cx,cy]) = [cx+cy, 2cy] = c[x+y, 2y] = cT([x,y]) ✓
      T([x₁,y₁] + [x₂,y₂]) = T([x₁+x₂,y₁+y₂])
                             = [(x₁+x₂)+(y₁+y₂), 2(y₁+y₂)]
                             = [x₁+y₁,2y₁] + [x₂+y₂,2y₂] ✓

Yes, T is linear.

### Example 2: NOT Linear

T([x,y]) = [x+1, y] is NOT linear:
- T(0) = [1, 0] ≠ 0

---

## Matrix Transformations

### Theorem

Every linear transformation T: ℝⁿ → ℝᵐ can be represented as:
```
T(x) = Ax
```
for some m×n matrix A.

### Finding the Matrix

**Standard matrix:** A = [T(e₁) T(e₂) ... T(eₙ)]

where e₁, ..., eₙ are standard basis vectors.

### Example 3: Finding Standard Matrix

T([x,y]) = [x+y, 2y, x-y]

```
T([1,0]) = [1, 0, 1]ᵀ
T([0,1]) = [1, 2, -1]ᵀ

Standard matrix: A = [1   1]
                      [0   2]
                      [1  -1]
```

---

## Geometric Linear Transformations

### Common Transformations in ℝ²

**Rotation (counterclockwise by θ):**
```
R_θ = [cos θ  -sin θ]
      [sin θ   cos θ]
```

**Reflection (across x-axis):**
```
[1   0]
[0  -1]
```

**Scaling:**
```
[a  0]
[0  b]
```

**Shear:**
```
[1  k]
[0  1]
```

### Example 4: Rotation by 90°

```
R_{90°} = [0  -1]
          [1   0]

R_{90°}([1,0]ᵀ) = [0,1]ᵀ (rotates to y-axis) ✓
```

---

## Kernel (Null Space)

### Definition

The **kernel** of T is:
```
ker(T) = {x : T(x) = 0}
```

For matrix transformation T(x) = Ax:
```
ker(T) = Nul(A)
```

### Theorem

ker(T) is a subspace of domain.

### Example 5: Finding Kernel

```
T([x,y,z]) = [x+y, 2x+2y]ᵀ

Matrix: A = [1  1  0]
            [2  2  0]

ker(T) = Nul(A) = Span{[-1,1,0]ᵀ, [0,0,1]ᵀ}
```

---

## Range (Image)

### Definition

The **range** of T is:
```
range(T) = {T(x) : x in domain}
```

For T(x) = Ax:
```
range(T) = Col(A)
```

### Theorem

range(T) is a subspace of codomain.

### Example 6: Finding Range

```
From Example 5:
range(T) = Col(A) = Span{[1,2]ᵀ}

dim(range(T)) = 1
```

---

## One-to-One

### Definition

T is **one-to-one** if T(x) = T(y) implies x = y.

Equivalently: ker(T) = {0}

### Theorem

T: ℝⁿ → ℝᵐ is one-to-one if and only if columns of standard matrix are linearly independent.

### Example 7: Testing One-to-One

```
T(x) = Ax where A = [1  2]
                     [2  4]
                     [3  6]

rank(A) = 1 < 2 columns

ker(T) ≠ {0}, so T is NOT one-to-one
```

---

## Onto

### Definition

T is **onto** if range(T) = codomain.

Every vector in codomain is hit by T.

### Theorem

T: ℝⁿ → ℝᵐ is onto if and only if columns of A span ℝᵐ.

Equivalently: rank(A) = m

### Example 8: Testing Onto

```
T: ℝ² → ℝ³ defined by T(x) = Ax
A = [1  0]
    [0  1]
    [0  0]

rank(A) = 2 < 3

T is NOT onto (cannot hit all of ℝ³)
```

---

## Composition

### Definition

If T: ℝⁿ → ℝᵐ and U: ℝᵐ → ℝᵖ, the **composition** is:
```
(U ∘ T)(x) = U(T(x))
```

### Matrix Representation

If T(x) = Ax and U(x) = Bx, then:
```
(U ∘ T)(x) = B(Ax) = (BA)x
```

### Example 9: Composition

```
T([x,y]) = [x+y, x-y]
U([x,y]) = [2x, 3y]

Matrices: A = [1   1]    B = [2  0]
              [1  -1]        [0  3]

BA = [2  0][1   1]   [2   2]
     [0  3][1  -1] = [3  -3]

(U ∘ T)([x,y]) = [2(x+y), 3(x-y)]
```

---

## Invertible Transformations

### Definition

T is **invertible** if there exists S such that:
```
S(T(x)) = x and T(S(x)) = x
```

### Theorem

T: ℝⁿ → ℝⁿ is invertible if and only if T is both one-to-one and onto.

For T(x) = Ax: T is invertible ⟺ A is invertible

### Example 10: Inverse Transformation

```
T([x,y]) = [x+y, x-y]

Matrix: A = [1   1]
            [1  -1]

A⁻¹ = [1/2   1/2]
      [1/2  -1/2]

T⁻¹([x,y]) = [(x+y)/2, (x-y)/2]
```

---

## Change of Basis

### Coordinate Systems

If B = {b₁, ..., bₙ} is basis for V and x = c₁b₁ + ... + cₙbₙ:
```
[x]_B = [c₁, ..., cₙ]ᵀ
```

### Change-of-Basis Matrix

```
P_{C←B} = [[b₁]_C ... [bₙ]_C]
```

Converts coordinates: [x]_C = P_{C←B}[x]_B

### Example 11: Change of Basis

```
B = {[1,0], [1,1]}, C = {[1,1], [1,-1]}
x = [3,2]

[x]_B: [3,2] = c₁[1,0] + c₂[1,1] → c₁=1, c₂=2 → [x]_B = [1,2]

Find P_{C←B}:
[b₁]_C: [1,0] = 1/2[1,1] + 1/2[1,-1] → [1/2, 1/2]
[b₂]_C: [1,1] = [1,1] → [1, 0]

P_{C←B} = [1/2  1]
          [1/2  0]

[x]_C = P_{C←B}[x]_B = [1/2  1][1]   [5/2]
                        [1/2  0][2] = [1/2]
```

---

## Similarity

### Definition

A and B are **similar** if B = P⁻¹AP for some invertible P.

### Properties

Similar matrices represent the same transformation in different bases.

Similar matrices have:
- Same eigenvalues
- Same determinant
- Same trace
- Same rank

---

## Key Formulas and Reference

### Linear Transformation
```
T(cu + dv) = cT(u) + dT(v)
T(x) = Ax (matrix representation)
```

### Standard Matrix
```
A = [T(e₁) ... T(eₙ)]
```

### Kernel and Range
```
ker(T) = Nul(A)
range(T) = Col(A)
```

### One-to-One and Onto
```
One-to-one: ker(T) = {0}
Onto: rank(A) = m (for T: ℝⁿ → ℝᵐ)
```

### Composition
```
(U ∘ T)(x) = U(T(x))
Matrix: BA (if T uses A, U uses B)
```

### Change of Basis
```
[x]_C = P_{C←B}[x]_B
```

---

**Next Unit:** Unit 8 - Applications
