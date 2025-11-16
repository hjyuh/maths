# Linear Algebra - Unit 4: Vector Spaces - Notes

## Table of Contents
1. [Vector Spaces and Subspaces](#vector-spaces-and-subspaces)
2. [Null Space and Column Space](#null-space-and-column-space)
3. [Linear Independence and Basis](#linear-independence-and-basis)
4. [Dimension and Rank](#dimension-and-rank)
5. [The Rank Theorem](#the-rank-theorem)
6. [Change of Basis](#change-of-basis)
7. [Row Space and Fundamental Subspaces](#row-space-and-fundamental-subspaces)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding vector space axioms**
- **Identifying and verifying subspaces**
- **Computing null space, column space, and row space**
- **Finding bases and computing dimension**
- **Applying the Rank Theorem**
- **Performing change of basis transformations**

---

## Essential Questions
- What makes a set a vector space?
- How are null space and column space related to solutions of Ax = b?
- What is a basis and why is it useful?
- How do dimension and rank relate to matrix properties?

---

## Vector Spaces

### Definition

A **vector space** is a set V with operations of addition and scalar multiplication satisfying:

**Axioms for all u, v, w in V and scalars c, d:**

1. u + v is in V (closure under addition)
2. u + v = v + u (commutativity)
3. (u + v) + w = u + (v + w) (associativity)
4. There exists 0 in V such that u + 0 = u (zero vector)
5. For each u, there exists -u such that u + (-u) = 0 (additive inverse)
6. cu is in V (closure under scalar multiplication)
7. c(u + v) = cu + cv (distributive law)
8. (c + d)u = cu + du (distributive law)
9. c(du) = (cd)u (associative law)
10. 1u = u (scalar identity)

### Example 1: ℝⁿ is a Vector Space

ℝⁿ = {[x₁, x₂, ..., xₙ]ᵀ : xᵢ ∈ ℝ} is a vector space with standard operations.

All 10 axioms are satisfied.

### Example 2: Matrix Space

M_{m×n} = all m×n matrices is a vector space with matrix addition and scalar multiplication.

### Example 3: Polynomial Space

P_n = {polynomials of degree ≤ n} is a vector space.

For example, P₂ = {a₀ + a₁x + a₂x² : a₀,a₁,a₂ ∈ ℝ}

Addition: (1 + 2x + x²) + (3 + x + 4x²) = 4 + 3x + 5x²

### Example 4: NOT a Vector Space

ℝ₊ = {positive real numbers} with standard addition is NOT a vector space.
- Fails closure under scalar multiplication: (-1)·2 = -2 ∉ ℝ₊

---

## Subspaces

### Definition

A **subspace** of vector space V is a subset H of V that is itself a vector space under the same operations.

**Subspace Test:** H is a subspace of V if:
1. 0 is in H (zero vector)
2. H is closed under addition: if u, v in H, then u + v in H
3. H is closed under scalar multiplication: if u in H and c is scalar, then cu in H

### Example 5: Verifying Subspace

Is H = {[x, y, 0]ᵀ : x, y ∈ ℝ} a subspace of ℝ³?

1. **Zero vector:** [0, 0, 0]ᵀ is in H ✓
2. **Closure under addition:**
   If [x₁, y₁, 0]ᵀ and [x₂, y₂, 0]ᵀ in H,
   then [x₁+x₂, y₁+y₂, 0]ᵀ is in H ✓
3. **Closure under scalar multiplication:**
   If [x, y, 0]ᵀ in H and c is scalar,
   then c[x, y, 0]ᵀ = [cx, cy, 0]ᵀ is in H ✓

**Yes, H is a subspace (the xy-plane in ℝ³)**

### Example 6: NOT a Subspace

Is H = {[x, y, 1]ᵀ : x, y ∈ ℝ} a subspace of ℝ³?

**Zero vector:** [0, 0, 0]ᵀ is NOT in H (third component must be 1)

**No, H is not a subspace** (fails first test)

---

## Null Space

### Definition

The **null space** of m×n matrix A is:
```
Nul(A) = {x ∈ ℝⁿ : Ax = 0}
```

The set of all solutions to the homogeneous equation Ax = 0.

### Theorem

Nul(A) is a subspace of ℝⁿ.

### Example 7: Finding Null Space

Find Nul(A) for:
```
A = [1  2  3]
    [2  4  6]
```

Solve Ax = 0:
```
[1  2  3 | 0]
[2  4  6 | 0]

R₂ - 2R₁:
[1  2  3 | 0]
[0  0  0 | 0]

x₁ + 2x₂ + 3x₃ = 0
x₁ = -2x₂ - 3x₃

Let x₂ = s, x₃ = t:

Nul(A) = {s[-2, 1, 0]ᵀ + t[-3, 0, 1]ᵀ : s, t ∈ ℝ}

Basis: {[-2, 1, 0]ᵀ, [-3, 0, 1]ᵀ}
```

---

## Column Space

### Definition

The **column space** of m×n matrix A is:
```
Col(A) = Span{a₁, a₂, ..., aₙ}
```
where a₁, ..., aₙ are the columns of A.

### Theorem

Col(A) is a subspace of ℝᵐ.

### Key Fact

b is in Col(A) if and only if Ax = b is consistent.

### Example 8: Finding Column Space

Find a basis for Col(A):
```
A = [1  2  3]
    [2  4  6]
    [1  1  2]

Row reduce to identify pivot columns:
[1  2  3]
[2  4  6]
[1  1  2]

→ [1  2  3]
  [0  0  0]
  [0 -1 -1]

→ [1  2  3]
  [0  1  1]
  [0  0  0]

Pivot columns: 1, 2

Basis for Col(A): {[1, 2, 1]ᵀ, [2, 4, 1]ᵀ}
(original columns 1 and 2)
```

---

## Linear Independence and Basis

### Basis Definition

A **basis** for subspace H is a linearly independent set that spans H.

### Properties of Basis

- Every vector in H can be uniquely expressed as a linear combination of basis vectors
- If B = {b₁, ..., bₙ} is a basis for H, then any n+1 vectors in H are linearly dependent
- Any two bases for H have the same number of vectors

### Example 9: Standard Basis for ℝ³

```
e₁ = [1, 0, 0]ᵀ
e₂ = [0, 1, 0]ᵀ
e₃ = [0, 0, 1]ᵀ

Any vector [x, y, z]ᵀ = xe₁ + ye₂ + ze₃
```

### Example 10: Basis for P₂

```
B = {1, x, x²}

Any polynomial a₀ + a₁x + a₂x² = a₀(1) + a₁(x) + a₂(x²)
```

---

## Dimension

### Definition

The **dimension** of a subspace H (denoted dim H) is the number of vectors in any basis for H.

Convention: dim{0} = 0

### Example 11: Dimensions

- dim(ℝⁿ) = n
- dim(P_n) = n + 1
- dim(M_{m×n}) = mn
- dim({0}) = 0

### Example 12: Computing Dimension

For Nul(A) from Example 7:
```
Basis: {[-2, 1, 0]ᵀ, [-3, 0, 1]ᵀ}
dim(Nul(A)) = 2
```

---

## Rank

### Definition

The **rank** of matrix A is:
```
rank(A) = dim(Col(A))
```

The number of pivot columns in A.

### Example 13: Finding Rank

```
A = [1  2  1  3]
    [2  4  3  7]
    [1  2  2  4]

Row reduce:
[1  2  1  3]
[0  0  1  1]
[0  0  1  1]

→ [1  2  1  3]
  [0  0  1  1]
  [0  0  0  0]

Two pivot columns → rank(A) = 2
```

---

## The Rank Theorem

### Theorem

If A is m×n, then:
```
rank(A) + dim(Nul(A)) = n
```

Also known as: **rank-nullity theorem**

### Example 14: Using Rank Theorem

```
A is 3×5 with rank(A) = 2

By Rank Theorem:
dim(Nul(A)) = 5 - 2 = 3

Therefore, Ax = 0 has 3 free variables
```

---

## Basis for Null Space

### Algorithm

To find a basis for Nul(A):
1. Row reduce [A | 0] to RREF
2. Express basic variables in terms of free variables
3. Write solution in parametric vector form
4. The coefficient vectors form a basis

### Example 15: Complete Example

```
A = [1  3  5  0]
    [2  6  8  2]
    [0  0  2  2]

RREF:
[1  3  0  -5]
[0  0  1   1]
[0  0  0   0]

x₁ + 3x₂ - 5x₄ = 0 → x₁ = -3x₂ + 5x₄
x₃ + x₄ = 0 → x₃ = -x₄

Free variables: x₂, x₄

x = [-3x₂ + 5x₄]     [-3]      [5]
    [    x₂     ]  = [ 1]x₂ +  [ 0]x₄
    [   -x₄     ]    [ 0]      [-1]
    [    x₄     ]    [ 0]      [ 1]

Basis for Nul(A): {[-3,1,0,0]ᵀ, [5,0,-1,1]ᵀ}
dim(Nul(A)) = 2

Check: rank(A) = 2, dim(Nul(A)) = 2, n = 4
2 + 2 = 4 ✓
```

---

## Row Space

### Definition

The **row space** of A is:
```
Row(A) = Span{rows of A} = Col(A^T)
```

### Theorem

- Row operations do not change row space
- Nonzero rows of RREF form a basis for Row(A)
- rank(A) = dim(Row(A)) = dim(Col(A))

### Example 16: Basis for Row Space

```
A = [1  2  3]
    [2  4  6]
    [1  1  2]

RREF of A:
[1  0  1]
[0  1  1]
[0  0  0]

Basis for Row(A): {[1,0,1], [0,1,1]}
dim(Row(A)) = 2 = rank(A)
```

---

## Four Fundamental Subspaces

For m×n matrix A with rank r:

1. **Column Space:** Col(A) ⊂ ℝᵐ, dim = r
2. **Row Space:** Row(A) ⊂ ℝⁿ, dim = r
3. **Null Space:** Nul(A) ⊂ ℝⁿ, dim = n - r
4. **Left Null Space:** Nul(A^T) ⊂ ℝᵐ, dim = m - r

### Relationships

```
dim(Col(A)) + dim(Nul(A^T)) = m
dim(Row(A)) + dim(Nul(A)) = n
dim(Col(A)) = dim(Row(A)) = rank(A)
```

---

## Coordinate Systems

### Coordinates Relative to a Basis

If B = {b₁, ..., bₙ} is a basis for V and x = c₁b₁ + ... + cₙbₙ, then:
```
[x]_B = [c₁, c₂, ..., cₙ]ᵀ
```
is the **coordinate vector** of x relative to B.

### Example 17: Coordinates

In ℝ², let B = {[1,1]ᵀ, [1,-1]ᵀ} and x = [3,1]ᵀ

Find [x]_B:
```
[3] = c₁[1] + c₂[ 1]
[1]     [1]     [-1]

System: c₁ + c₂ = 3
        c₁ - c₂ = 1

Solution: c₁ = 2, c₂ = 1

[x]_B = [2, 1]ᵀ
```

---

## Change of Basis

### Change-of-Basis Matrix

If B and C are bases for V, the **change-of-basis matrix** from B to C is:
```
P_{C←B} = [[b₁]_C  [b₂]_C  ...  [bₙ]_C]
```

**Property:** [x]_C = P_{C←B}[x]_B

### Example 18: Change of Basis

Let B = {[1,0]ᵀ, [0,1]ᵀ} (standard basis)
and C = {[1,1]ᵀ, [1,-1]ᵀ}

Find P_{C←B}:
```
[b₁]_C: [1] = c₁[1] + c₂[ 1] → c₁ = 1/2, c₂ = 1/2
        [0]     [1]     [-1]

[b₂]_C: [0] = c₁[1] + c₂[ 1] → c₁ = 1/2, c₂ = -1/2
        [1]     [1]     [-1]

P_{C←B} = [1/2   1/2]
          [1/2  -1/2]
```

---

## Invertible Matrix Theorem (Extended)

Let A be n×n. The following are equivalent:

(Previous statements from Units 1-3, plus:)

- Col(A) = ℝⁿ
- dim(Col(A)) = n
- rank(A) = n
- Nul(A) = {0}
- dim(Nul(A)) = 0

---

## Key Formulas and Reference

### Vector Space Tests
```
Subspace: (1) contains 0, (2) closed under +, (3) closed under scalar ×
```

### Fundamental Subspaces
```
Nul(A) = {x : Ax = 0} ⊂ ℝⁿ
Col(A) = Span{columns of A} ⊂ ℝᵐ
Row(A) = Span{rows of A} ⊂ ℝⁿ
```

### Rank Theorem
```
rank(A) + dim(Nul(A)) = n (for m×n matrix)
dim(Col(A)) = dim(Row(A)) = rank(A)
```

### Dimension
```
dim(ℝⁿ) = n
dim(P_n) = n + 1
dim(M_{m×n}) = mn
```

### Basis
```
Basis = linearly independent spanning set
All bases for H have same number of vectors = dim(H)
```

### Coordinates
```
[x]_B = coordinates of x relative to basis B
[x]_C = P_{C←B}[x]_B (change of basis)
```

---

**Next Unit:** Unit 5 - Eigenvalues and Eigenvectors
