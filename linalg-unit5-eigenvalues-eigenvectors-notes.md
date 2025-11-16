# Linear Algebra - Unit 5: Eigenvalues and Eigenvectors - Notes

## Table of Contents
1. [Introduction to Eigenvalues and Eigenvectors](#introduction-to-eigenvalues-and-eigenvectors)
2. [The Characteristic Equation](#the-characteristic-equation)
3. [Eigenspaces](#eigenspaces)
4. [Diagonalization](#diagonalization)
5. [Powers of Matrices](#powers-of-matrices)
6. [Complex Eigenvalues](#complex-eigenvalues)
7. [Applications](#applications)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Computing eigenvalues and eigenvectors**
- **Finding characteristic equations**
- **Determining eigenspaces**
- **Diagonalizing matrices**
- **Applying eigenvalues to solve systems**

---

## Essential Questions
- What do eigenvalues and eigenvectors tell us about a matrix?
- When can a matrix be diagonalized?
- How do eigenvalues simplify matrix powers?
- What are real-world applications of eigenvalues?

---

## Introduction to Eigenvalues and Eigenvectors

### Definition

For n×n matrix A, a scalar λ is an **eigenvalue** if there exists nonzero vector v such that:
```
Av = λv
```

v is called an **eigenvector** corresponding to eigenvalue λ.

### Geometric Interpretation

**Eigenvector:** A direction that is only scaled (not rotated) by transformation A
**Eigenvalue:** The scaling factor

### Example 1: Verifying Eigenvalues

Verify that v = [1, 2]ᵀ is an eigenvector of A = [3 1; 2 2] with eigenvalue λ = 4:
```
Av = [3 1][1]   [5]     [1]
     [2 2][2] = [6] = 4[2] = λv ✓
```

---

## Finding Eigenvalues

### Characteristic Equation

Av = λv ⟺ Av = λIv ⟺ (A - λI)v = 0

For nontrivial solution: **det(A - λI) = 0**

This is the **characteristic equation**.

### Example 2: 2×2 Characteristic Equation

Find eigenvalues of A = [5 2; 2 1]:
```
A - λI = [5-λ   2  ]
         [ 2   1-λ ]

det(A - λI) = (5-λ)(1-λ) - 4
            = λ² - 6λ + 5 - 4
            = λ² - 6λ + 1 = 0

Using quadratic formula:
λ = (6 ± √(36-4))/2 = (6 ± √32)/2 = 3 ± 2√2

Eigenvalues: λ₁ = 3 + 2√2, λ₂ = 3 - 2√2
```

### Example 3: 3×3 Characteristic Equation

Find eigenvalues of A = [2 1 0; 0 2 0; 0 0 3]:
```
A - λI = [2-λ   1    0 ]
         [ 0   2-λ   0 ]
         [ 0    0   3-λ]

det(A - λI) = (2-λ)²(3-λ) = 0

Eigenvalues: λ₁ = 2 (multiplicity 2), λ₂ = 3
```

---

## Finding Eigenvectors

### Algorithm

For each eigenvalue λ:
1. Form A - λI
2. Solve (A - λI)x = 0
3. Nontrivial solutions are eigenvectors

### Example 4: Finding Eigenvectors

For A = [3 1; 1 3] with λ₁ = 4, λ₂ = 2:

**For λ₁ = 4:**
```
A - 4I = [-1  1]
         [ 1 -1]

(A - 4I)x = 0:
[-1  1][x₁]   [0]
[ 1 -1][x₂] = [0]

-x₁ + x₂ = 0 → x₁ = x₂

Eigenvector: v₁ = [1, 1]ᵀ (or any scalar multiple)
```

**For λ₂ = 2:**
```
A - 2I = [1  1]
         [1  1]

x₁ + x₂ = 0 → x₂ = -x₁

Eigenvector: v₂ = [1, -1]ᵀ
```

---

## Eigenspaces

### Definition

The **eigenspace** E_λ corresponding to eigenvalue λ is:
```
E_λ = Nul(A - λI)
```

The set of all eigenvectors for λ, plus the zero vector.

### Properties

- E_λ is a subspace of ℝⁿ
- dim(E_λ) ≥ 1 (since λ is eigenvalue)
- **Algebraic multiplicity:** Multiplicity of λ as root of characteristic equation
- **Geometric multiplicity:** dim(E_λ)

### Example 5: Eigenspace

For A = [5 0 0; 0 5 1; 0 0 5] with λ = 5:
```
A - 5I = [0 0 0]
         [0 0 1]
         [0 0 0]

E₅ = Nul([0 0 0]) = Span{[1,0,0]ᵀ, [0,1,0]ᵀ}
     [0 0 1]
     [0 0 0]

Algebraic multiplicity: 3
Geometric multiplicity: 2
```

---

## Diagonalization

### Definition

Matrix A is **diagonalizable** if A = PDP⁻¹ where D is diagonal.

### Diagonalization Theorem

A is diagonalizable if and only if A has n linearly independent eigenvectors.

**Construction:**
- D = diagonal matrix of eigenvalues
- P = matrix whose columns are corresponding eigenvectors

### Example 6: Diagonalizing 2×2 Matrix

Diagonalize A = [3 1; 1 3]:

From Example 4:
- λ₁ = 4, v₁ = [1, 1]ᵀ
- λ₂ = 2, v₂ = [1, -1]ᵀ

```
P = [1   1]    D = [4  0]
    [1  -1]        [0  2]

Verify: A = PDP⁻¹

P⁻¹ = [1/2   1/2]
      [1/2  -1/2]

PDP⁻¹ = [1   1][4  0][1/2   1/2]
        [1  -1][0  2][1/2  -1/2]

      = [1   1][2   2]   [3  1]
        [1  -1][1  -1] = [1  3] = A ✓
```

---

## Criteria for Diagonalization

### Theorem

An n×n matrix with n **distinct** eigenvalues is diagonalizable.

### Warning

If eigenvalues have multiplicity > 1, check if geometric multiplicity = algebraic multiplicity.

### Example 7: Non-Diagonalizable Matrix

```
A = [2  1]
    [0  2]

Characteristic equation: (2-λ)² = 0
Eigenvalue: λ = 2 (multiplicity 2)

A - 2I = [0  1]
         [0  0]

E₂ = Span{[1, 0]ᵀ} → only 1 eigenvector

Cannot diagonalize (need 2 independent eigenvectors)
```

---

## Powers of Matrices

### Using Diagonalization

If A = PDP⁻¹, then:
```
Aⁿ = PDⁿP⁻¹
```

This is **much easier** than computing Aⁿ directly!

### Example 8: Computing A¹⁰

For A = [3 1; 1 3] from Example 6:
```
A¹⁰ = PD¹⁰P⁻¹

D¹⁰ = [4¹⁰   0 ]   [1048576      0]
      [ 0   2¹⁰] = [      0   1024]

A¹⁰ = [1   1][1048576    0][1/2   1/2]
      [1  -1][   0    1024][1/2  -1/2]

    = [524800  524288]
      [524288  524800]
```

---

## Applications: Difference Equations

### Discrete Dynamical Systems

System: x_{k+1} = Ax_k

**Solution:** x_k = A^k x_0

If A = PDP⁻¹:
```
x_k = PD^k P⁻¹ x_0
```

### Example 9: Population Model

```
x_k = [juveniles]  at year k
      [adults   ]

Evolution: x_{k+1} = [0    2][x_k]
                      [0.5  0.8]

Find eigenvalues and eigenvectors to predict long-term behavior.
```

---

## Complex Eigenvalues

### Real Matrices with Complex Eigenvalues

A real matrix can have complex eigenvalues (in conjugate pairs).

### Example 10: Rotation Matrix

```
A = [0  -1]
    [1   0]  (90° rotation)

det(A - λI) = λ² + 1 = 0
λ = ±i

Complex eigenvalues indicate rotation!
```

---

## Trace and Determinant

### Theorem

For n×n matrix A with eigenvalues λ₁, ..., λₙ:
```
tr(A) = λ₁ + λ₂ + ... + λₙ (trace = sum of eigenvalues)
det(A) = λ₁ · λ₂ · ... · λₙ (determinant = product of eigenvalues)
```

### Example 11: Quick Check

```
A = [2  1]
    [1  3]

tr(A) = 2 + 3 = 5
det(A) = 6 - 1 = 5

If eigenvalues are λ₁, λ₂:
λ₁ + λ₂ = 5
λ₁λ₂ = 5

From characteristic equation: λ² - 5λ + 5 = 0
λ = (5 ± √5)/2
```

---

## Similar Matrices

### Definition

A and B are **similar** if B = P⁻¹AP for some invertible P.

### Properties

Similar matrices have:
- Same eigenvalues
- Same characteristic polynomial
- Same determinant
- Same trace
- Same rank

---

## Key Formulas and Reference

### Eigenvalue Equation
```
Av = λv (v ≠ 0)
```

### Characteristic Equation
```
det(A - λI) = 0
```

### Diagonalization
```
A = PDP⁻¹
P = [v₁ v₂ ... vₙ] (eigenvectors)
D = diag(λ₁, λ₂, ..., λₙ)
```

### Powers
```
Aⁿ = PDⁿP⁻¹
```

### Trace and Determinant
```
tr(A) = Σλᵢ
det(A) = Πλᵢ
```

---

**Next Unit:** Unit 6 - Orthogonality
