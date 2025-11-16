# Linear Algebra - Unit 2: Matrix Algebra - Notes

## Table of Contents
1. [Matrix Operations](#matrix-operations)
2. [Matrix Multiplication](#matrix-multiplication)
3. [Properties of Matrix Operations](#properties-of-matrix-operations)
4. [Transpose and Symmetric Matrices](#transpose-and-symmetric-matrices)
5. [Inverse Matrices](#inverse-matrices)
6. [Elementary Matrices](#elementary-matrices)
7. [Matrix Factorizations](#matrix-factorizations)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Performing matrix operations accurately**
- **Understanding and applying properties of matrix multiplication**
- **Computing matrix inverses and solving matrix equations**
- **Working with elementary matrices and factorizations**
- **Applying LU decomposition for efficient computation**

---

## Essential Questions
- Why is matrix multiplication not commutative?
- When does a matrix have an inverse?
- How can we factor matrices to simplify computations?
- What is the relationship between elementary matrices and row operations?

---

## Matrix Operations

### Matrix Addition

**Definition:** If A and B are m × n matrices, then A + B is the m × n matrix whose entries are the sums of corresponding entries in A and B.

**Requirement:** Matrices must have the same dimensions.

### Example 1: Matrix Addition

```
A = [1  2]    B = [5  6]
    [3  4]        [7  8]

A + B = [1+5  2+6] = [6   8]
        [3+7  4+8]   [10  12]
```

### Scalar Multiplication

**Definition:** If r is a scalar and A is a matrix, then rA is the matrix whose entries are r times the entries in A.

### Example 2: Scalar Multiplication

```
3[1  2] = [3   6]
 [4  5]   [12  15]
```

---

## Matrix Multiplication

### Definition

If A is m × n and B is n × p, then AB is the m × p matrix whose (i,j)-entry is the dot product of the ith row of A and the jth column of B.

**Formula:** (AB)ᵢⱼ = Σ aᵢₖbₖⱼ (sum over k from 1 to n)

**Key requirement:** Number of columns in A must equal number of rows in B.

### Example 3: Matrix Multiplication

```
A = [1  2]    B = [5  6]
    [3  4]        [7  8]

AB = [1·5 + 2·7  1·6 + 2·8]
     [3·5 + 4·7  3·6 + 4·8]

   = [19  22]
     [43  50]
```

### Row-Column Rule

The (i,j)-entry of AB equals:
```
[row i of A] · [column j of B]
```

### Example 4: Non-Square Multiplication

```
A = [1  2  3]    B = [1  0]
    [4  5  6]        [0  1]
                     [1  1]

AB = [1·1 + 2·0 + 3·1  1·0 + 2·1 + 3·1]
     [4·1 + 5·0 + 6·1  4·0 + 5·1 + 6·1]

   = [4   5]
     [10  11]
```

---

## Matrix Multiplication is NOT Commutative

### Example 5: AB ≠ BA

```
A = [1  2]    B = [0  1]
    [3  4]        [1  0]

AB = [2  1]
     [4  3]

BA = [3  4]
     [1  2]

AB ≠ BA!
```

---

## Column Interpretation of Matrix Multiplication

**Theorem:** If B = [b₁ b₂ ... bₚ], then:
```
AB = [Ab₁  Ab₂  ...  Abₚ]
```

Each column of AB is A times the corresponding column of B.

### Example 6: Column Perspective

```
A = [1  2]    B = [5  6]
    [3  4]        [7  8]

AB = [A[5]  A[6]]
      [7]   [8]

   = [[1  2][5]  [1  2][6]]
      [3  4][7]  [3  4][8]

   = [[19]  [22]]
      [43]  [50]
```

---

## Row Interpretation of Matrix Multiplication

**Theorem:** If A = [a₁; a₂; ...; aₘ] (rows), then:
```
     [a₁B]
AB = [a₂B]
     [ ⋮ ]
     [aₘB]
```

Each row of AB is the corresponding row of A times B.

### Example 7: Row Perspective

```
A = [1  2]    B = [5  6]
    [3  4]        [7  8]

AB = [[1  2]B]  = [[1  2][5  6]]
     [[3  4]B]     [[3  4][7  8]]

   = [[19  22]]
     [[43  50]]
```

---

## Properties of Matrix Operations

### Theorem: Algebraic Properties

For matrices A, B, C (where operations are defined) and scalars r, s:

1. **Associativity of addition:** A + (B + C) = (A + B) + C
2. **Commutativity of addition:** A + B = B + A
3. **Additive identity:** A + 0 = A
4. **Additive inverse:** A + (-A) = 0
5. **Associativity of multiplication:** A(BC) = (AB)C
6. **Distributive laws:**
   - A(B + C) = AB + AC
   - (A + B)C = AC + BC
7. **Scalar distributive laws:**
   - r(A + B) = rA + rB
   - (r + s)A = rA + sA
   - r(sA) = (rs)A
8. **Identity property:** IA = A and AI = A

### Example 8: Associativity

```
A = [1  2]    B = [1  0]    C = [2  0]
    [0  1]        [0  2]        [0  3]

Verify A(BC) = (AB)C:

BC = [2  0]
     [0  6]

A(BC) = [2  12]
        [0   6]

AB = [1  4]
     [0  2]

(AB)C = [2  12]
        [0   6]  ✓
```

---

## Powers of a Matrix

**Definition:** If A is square and k is a positive integer:
```
A^k = A · A · ... · A (k times)
A^0 = I
```

### Example 9: Matrix Powers

```
A = [2  0]
    [0  3]

A² = [4  0]
     [0  9]

A³ = [8   0]
     [0  27]
```

---

## Transpose of a Matrix

### Definition

**Transpose:** If A is m × n, then A^T is the n × m matrix whose columns are the rows of A.

**Formula:** (A^T)ᵢⱼ = Aⱼᵢ

### Example 10: Computing Transpose

```
A = [1  2  3]
    [4  5  6]

A^T = [1  4]
      [2  5]
      [3  6]
```

### Properties of Transpose

For matrices A, B and scalar r:

1. **(A^T)^T = A**
2. **(A + B)^T = A^T + B^T**
3. **(rA)^T = rA^T**
4. **(AB)^T = B^T A^T** (reverse order!)

### Example 11: Transpose of Product

```
A = [1  2]    B = [5  6]
    [3  4]        [7  8]

AB = [19  22]
     [43  50]

(AB)^T = [19  43]
         [22  50]

B^T A^T = [5  7][1  3] = [19  43]
          [6  8][2  4]   [22  50]  ✓
```

---

## Symmetric Matrices

### Definition

A matrix A is **symmetric** if A^T = A.

**Note:** Only square matrices can be symmetric.

### Example 12: Symmetric Matrix

```
A = [1  2  3]
    [2  5  4]
    [3  4  6]

A^T = [1  2  3]
      [2  5  4] = A, so A is symmetric
      [3  4  6]
```

### Theorem

For any matrix A, the matrices A^T A and AA^T are symmetric.

**Proof for A^T A:**
```
(A^T A)^T = A^T(A^T)^T = A^T A ✓
```

---

## Inverse Matrices

### Definition

An n × n matrix A is **invertible** (or **nonsingular**) if there exists an n × n matrix B such that:
```
AB = I  and  BA = I
```

B is called the **inverse** of A, denoted A^(-1).

If no such B exists, A is **singular** (not invertible).

### Example 13: Verifying an Inverse

Verify that B is the inverse of A:
```
A = [2  5]    B = [ 3  -5]
    [1  3]        [-1   2]

AB = [2  5][ 3  -5] = [1  0]
     [1  3][-1   2]   [0  1] ✓

BA = [ 3  -5][2  5] = [1  0]
     [-1   2][1  3]   [0  1] ✓
```

### Uniqueness of Inverse

**Theorem:** If A is invertible, then A^(-1) is unique.

---

## Finding Inverses Using Row Reduction

### Theorem

If [A | I] can be row reduced to [I | B], then B = A^(-1).

If row reduction produces a row of zeros in the left half, then A is not invertible.

### Example 14: Computing Inverse

Find A^(-1) for:
```
A = [1  2]
    [3  7]

Augment with I:
[1  2 | 1  0]
[3  7 | 0  1]

R₂ - 3R₁:
[1  2 | 1  0]
[0  1 |-3  1]

R₁ - 2R₂:
[1  0 | 7  -2]
[0  1 |-3   1]

Therefore: A^(-1) = [ 7  -2]
                     [-3   1]
```

### Example 15: Singular Matrix

Show that A is not invertible:
```
A = [1  2]
    [2  4]

[1  2 | 1  0]
[2  4 | 0  1]

R₂ - 2R₁:
[1  2 | 1   0]
[0  0 |-2   1]  ← Row of zeros in A position!

A is not invertible (singular).
```

---

## Properties of Invertible Matrices

### Theorem

Let A and B be invertible n × n matrices:

1. **Inverse of inverse:** (A^(-1))^(-1) = A
2. **Inverse of product:** (AB)^(-1) = B^(-1)A^(-1) (reverse order!)
3. **Inverse of transpose:** (A^T)^(-1) = (A^(-1))^T
4. **Inverse of scalar multiple:** (rA)^(-1) = (1/r)A^(-1) for r ≠ 0

### Example 16: Inverse of Product

```
A = [2  0]    A^(-1) = [1/2  0]
    [0  3]              [0  1/3]

B = [1  1]    B^(-1) = [ 2  -1]
    [0  1]              [ 0   1]

AB = [2  2]
     [0  3]

(AB)^(-1) = [1/2  -1/3]
            [ 0    1/3]

B^(-1)A^(-1) = [ 2  -1][1/2  0]   = [1/2  -1/3]
               [ 0   1][ 0  1/3]    [ 0    1/3]  ✓
```

---

## Solving Matrix Equations

### Using Inverses

If A is invertible, the equation Ax = b has the unique solution:
```
x = A^(-1)b
```

### Example 17: Solving with Inverse

Solve Ax = b where:
```
A = [1  2]    b = [5]
    [3  7]        [13]

From Example 14: A^(-1) = [ 7  -2]
                           [-3   1]

x = A^(-1)b = [ 7  -2][5]   = [35 - 26]  = [9]
              [-3   1][13]    [-15 + 13]   [-2]

Check: [1  2][9]  = [9 - 4]   = [5]  ✓
       [3  7][-2]   [27 - 14]   [13]
```

---

## The Invertible Matrix Theorem

### Theorem

Let A be an n × n matrix. The following are equivalent (all true or all false):

1. A is invertible
2. A is row equivalent to I_n
3. A has n pivot positions
4. Ax = 0 has only the trivial solution
5. The columns of A are linearly independent
6. Ax = b has a unique solution for each b in ℝⁿ
7. The columns of A span ℝⁿ
8. A^T is invertible
9. det(A) ≠ 0 (covered in Unit 3)

### Example 18: Using the IMT

Determine if A is invertible:
```
A = [1  2  3]
    [0  1  4]
    [5  6  0]

Row reduce:
[1  2  3]
[0  1  4]
[5  6  0]

R₃ - 5R₁:
[1  2   3]
[0  1   4]
[0 -4 -15]

R₃ + 4R₂:
[1  2  3]
[0  1  4]
[0  0  1]

Three pivots → A is invertible by IMT.
```

---

## Elementary Matrices

### Definition

An **elementary matrix** is a matrix obtained by performing a single elementary row operation on the identity matrix.

**Three types:**
1. **Interchange:** Swap two rows
2. **Scaling:** Multiply a row by nonzero scalar
3. **Replacement:** Add multiple of one row to another

### Example 19: Elementary Matrices

```
Type 1 (swap R₁ and R₂):
E₁ = [0  1  0]
     [1  0  0]
     [0  0  1]

Type 2 (multiply R₂ by 5):
E₂ = [1  0  0]
     [0  5  0]
     [0  0  1]

Type 3 (add 3R₁ to R₃):
E₃ = [1  0  0]
     [0  1  0]
     [3  0  1]
```

---

## Properties of Elementary Matrices

### Theorem

1. If E is elementary, then E is invertible
2. If E results from a row operation on I, then EA results from the same row operation on A
3. Row operations can be reversed by performing the opposite operation

### Example 20: Elementary Matrix Multiplication

```
A = [1  2  3]    E = [1  0  0]  (adds 2R₁ to R₃)
    [4  5  6]        [0  1  0]
    [7  8  9]        [2  0  1]

EA = [1   2   3]
     [4   5   6]
     [9  12  15]  (same as R₃ + 2R₁ on A)
```

---

## LU Factorization

### Definition

An **LU factorization** of A is:
```
A = LU
```
where:
- L is lower triangular with 1's on diagonal
- U is upper triangular (row echelon form of A)

### Why LU Factorization?

Solving Ax = b becomes:
```
LUx = b
```
Solve in two steps:
1. Ly = b (forward substitution)
2. Ux = y (back substitution)

Both are easy with triangular matrices!

### Example 21: LU Factorization

Find LU factorization of:
```
A = [2  4  -2]
    [4  9  -3]
    [-2 -3  7]

Reduce to U (keep track of multipliers):
[2   4  -2]
[4   9  -3]  R₂ - 2R₁
[-2  -3  7]  R₃ + R₁

[2   4  -2]
[0   1   1]  multipliers: 2, -1
[0   1   5]  R₃ - R₂

[2   4  -2]
[0   1   1]  multiplier: 1
[0   0   4]

U = [2  4  -2]
    [0  1   1]
    [0  0   4]

L = [1   0  0]  (using multipliers)
    [2   1  0]
    [-1  1  1]

Verify: LU = [1   0  0][2  4  -2]   [2  4  -2]
             [2   1  0][0  1   1] = [4  9  -3] = A ✓
             [-1  1  1][0  0   4]   [-2 -3  7]
```

---

## Algorithm for LU Factorization

**Steps:**
1. Reduce A to echelon form U using only replacement operations (no row swaps)
2. Record the row operation multipliers
3. Place multipliers below diagonal in L (with 1's on diagonal)

### Example 22: LU Algorithm

```
A = [1  3  5]
    [2  7  13]
    [1  4  8]

Step 1: Reduce to U
[1  3   5]
[2  7  13]  R₂ - 2R₁, multiplier: 2
[1  4   8]  R₃ - R₁, multiplier: 1

[1  3  5]
[0  1  3]
[0  1  3]  R₃ - R₂, multiplier: 1

[1  3  5]
[0  1  3]
[0  0  0]

U = [1  3  5]
    [0  1  3]
    [0  0  0]

L = [1  0  0]
    [2  1  0]
    [1  1  1]
```

---

## Applications of Matrix Algebra

### Example 23: Network Flow

Traffic flows through a network. If A represents connection matrix and x represents flows:
```
Ax = b
```
where b is supply/demand at each node.

If A is invertible: x = A^(-1)b gives unique flow pattern.

### Example 24: Cryptography

Encode message using matrix multiplication:
```
Encrypted = A × Message
Message = A^(-1) × Encrypted
```

A acts as encryption key.

---

## Key Formulas and Reference

### Matrix Operations
```
(A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ
(rA)ᵢⱼ = r·Aᵢⱼ
(AB)ᵢⱼ = Σ AᵢₖBₖⱼ
```

### Transpose Properties
```
(A^T)^T = A
(A + B)^T = A^T + B^T
(AB)^T = B^T A^T
```

### Inverse Properties
```
AA^(-1) = A^(-1)A = I
(AB)^(-1) = B^(-1)A^(-1)
(A^T)^(-1) = (A^(-1))^T
```

### Finding Inverse
```
[A | I] → [I | A^(-1)]  (via row reduction)
```

### LU Factorization
```
A = LU
L: lower triangular, 1's on diagonal
U: upper triangular (echelon form)
```

---

**Next Unit:** Unit 3 - Determinants
