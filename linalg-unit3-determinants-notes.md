# Linear Algebra - Unit 3: Determinants - Notes

## Table of Contents
1. [Introduction to Determinants](#introduction-to-determinants)
2. [Computing Determinants](#computing-determinants)
3. [Properties of Determinants](#properties-of-determinants)
4. [Cofactor Expansion](#cofactor-expansion)
5. [Determinants and Invertibility](#determinants-and-invertibility)
6. [Cramer's Rule](#cramers-rule)
7. [Volume and Determinants](#volume-and-determinants)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Computing determinants of various sizes**
- **Using properties to simplify determinant calculations**
- **Applying cofactor expansion**
- **Using determinants to test invertibility**
- **Solving systems with Cramer's rule**
- **Interpreting determinants geometrically**

---

## Essential Questions
- What does the determinant tell us about a matrix?
- How can we efficiently compute large determinants?
- What is the geometric meaning of the determinant?
- When is Cramer's rule useful?

---

## Introduction to Determinants

### 2×2 Determinant

**Definition:** For a 2×2 matrix A = [a b; c d], the determinant is:
```
det(A) = |a  b| = ad - bc
         |c  d|
```

### Example 1: Computing 2×2 Determinants

```
a) |3  2| = 3(5) - 2(4) = 15 - 8 = 7
   |4  5|

b) |2  -1| = 2(4) - (-1)(3) = 8 + 3 = 11
   |3   4|

c) |6  3| = 6(2) - 3(4) = 12 - 12 = 0
   |4  2|
```

---

## 3×3 Determinant

### Rule of Sarrus

For a 3×3 matrix:
```
|a  b  c|
|d  e  f| = aei + bfg + cdh - ceg - afh - bdi
|g  h  i|
```

### Example 2: Computing 3×3 Determinant

```
|1  2  3|
|4  5  6| = 1(5·9-6·8) - 2(4·9-6·7) + 3(4·8-5·7)
|7  8  9|

= 1(45-48) - 2(36-42) + 3(32-35)
= 1(-3) - 2(-6) + 3(-3)
= -3 + 12 - 9
= 0
```

---

## Properties of Determinants

### Row Operations and Determinants

**Theorem:** Let A be a square matrix.

1. **Row Interchange:** If B is obtained from A by swapping two rows, then:
   ```
   det(B) = -det(A)
   ```

2. **Row Scaling:** If B is obtained from A by multiplying a row by scalar k, then:
   ```
   det(B) = k·det(A)
   ```

3. **Row Replacement:** If B is obtained from A by adding a multiple of one row to another, then:
   ```
   det(B) = det(A)
   ```

### Example 3: Using Properties

```
|1  2  3|        |4  5  6|
|4  5  6| Swap→  |1  2  3| = -det(original)
|7  8  9|        |7  8  9|

|1  2  3|        |2   4   6|
|4  5  6| 2R₁→   |4   5   6| = 2·det(original)
|7  8  9|        |7   8   9|

|1  2  3|        |1  2   3|
|4  5  6| R₂-4R₁→|0 -3  -6| = det(original)
|7  8  9|        |7  8   9|
```

---

## Triangular Matrices

### Theorem

If A is triangular (upper or lower), then:
```
det(A) = product of diagonal entries
```

### Example 4: Triangular Determinant

```
|2  3  4|
|0  5  6| = 2·5·7 = 70
|0  0  7|

|-1  0   0|
| 4  2   0| = (-1)·2·3 = -6
| 5  6   3|
```

---

## Computing Determinants by Row Reduction

**Strategy:** Use row operations to reduce to triangular form, tracking sign changes.

### Example 5: Row Reduction Method

```
|2  4  -2|
|4  9  -3|
|-2 -3  7|

R₂ - 2R₁:
|2   4  -2|
|0   1   1| det unchanged
|-2  -3  7|

R₃ + R₁:
|2  4  -2|
|0  1   1| det unchanged
|0  1   5|

R₃ - R₂:
|2  4  -2|
|0  1   1| det unchanged
|0  0   4|

det = 2·1·4 = 8
```

---

## Cofactor Expansion

### Minors and Cofactors

**Minor Mᵢⱼ:** The determinant of the submatrix obtained by deleting row i and column j.

**Cofactor Cᵢⱼ:** Cᵢⱼ = (-1)^(i+j) Mᵢⱼ

**Sign pattern:**
```
+ - + - ...
- + - + ...
+ - + - ...
⋮
```

### Example 6: Computing Cofactors

For A = [1 2 3; 4 5 6; 7 8 9]

```
C₁₁ = (-1)^(1+1) |5  6| = +(45-48) = -3
                  |8  9|

C₁₂ = (-1)^(1+2) |4  6| = -(36-42) = 6
                  |7  9|

C₁₃ = (-1)^(1+3) |4  5| = +(32-35) = -3
                  |7  8|
```

---

## Cofactor Expansion Theorem

**Theorem:** The determinant can be computed by expanding along any row or column:

**Row expansion:**
```
det(A) = a₁₁C₁₁ + a₁₂C₁₂ + ... + a₁ₙC₁ₙ  (along row 1)
```

**Column expansion:**
```
det(A) = a₁₁C₁₁ + a₂₁C₂₁ + ... + aₙ₁Cₙ₁  (along column 1)
```

### Example 7: Cofactor Expansion

```
|1  0  2|
|3  1  0| Expand along row 1 (has zeros):
|2  4  1|

= 1·C₁₁ + 0·C₁₂ + 2·C₁₃

C₁₁ = +|1  0| = 1
       |4  1|

C₁₃ = +|3  1| = 10
       |2  4|

det = 1(1) + 0 + 2(10) = 21
```

---

## Product Rule for Determinants

### Theorem

**Multiplicative property:** det(AB) = det(A)·det(B)

**Important consequences:**
- det(A^n) = [det(A)]^n
- det(A^(-1)) = 1/det(A)
- det(I) = 1

### Example 8: Product Rule

```
A = [2  0]    det(A) = 6
    [0  3]

B = [1  2]    det(B) = -1
    [1  1]

AB = [2   4]    det(AB) = -6
     [3   3]

Verify: det(A)·det(B) = 6·(-1) = -6 ✓
```

---

## Determinant of Transpose

### Theorem

**det(A^T) = det(A)**

This means row and column operations have the same effect on determinants.

### Example 9: Transpose Determinant

```
A = [1  2  3]    det(A) = 0
    [4  5  6]
    [7  8  9]

A^T = [1  4  7]    det(A^T) = 0
      [2  5  8]
      [3  6  9]
```

---

## Determinants and Invertibility

### Invertible Matrix Theorem (Extended)

A square matrix A is invertible if and only if det(A) ≠ 0.

**Key implications:**
- det(A) = 0 ⟹ A is singular (not invertible)
- det(A) ≠ 0 ⟹ A is invertible
- det(A^(-1)) = 1/det(A)

### Example 10: Testing Invertibility

```
a) A = [2  3]    det(A) = 6-6 = 0
       [4  6]
   A is singular (not invertible)

b) B = [2  3]    det(B) = 10-9 = 1 ≠ 0
       [3  5]
   B is invertible
```

---

## Adjugate Matrix and Inverse Formula

### Adjugate Matrix

The **adjugate** (or classical adjoint) of A is:
```
adj(A) = [C₁₁  C₂₁  ...  Cₙ₁]^T
         [C₁₂  C₂₂  ...  Cₙ₂]
         [ ⋮    ⋮    ⋱    ⋮  ]
         [C₁ₙ  C₂ₙ  ...  Cₙₙ]
```
(transpose of cofactor matrix)

### Inverse Formula

```
A^(-1) = (1/det(A)) · adj(A)
```

### Example 11: Inverse via Adjugate

```
A = [3  2]
    [4  5]

det(A) = 15 - 8 = 7

Cofactors:
C₁₁ = 5,  C₁₂ = -4
C₂₁ = -2, C₂₂ = 3

adj(A) = [ 5  -2]^T = [ 5  -4]
         [-4   3]     [-2   3]

A^(-1) = (1/7)[ 5  -4] = [ 5/7  -4/7]
              [-2   3]   [-2/7   3/7]
```

---

## Cramer's Rule

### Theorem

For Ax = b where A is invertible n×n matrix, the solution is:
```
xᵢ = det(Aᵢ)/det(A)
```
where Aᵢ is A with column i replaced by b.

### Example 12: Cramer's Rule for 2×2

Solve:
```
3x + 2y = 7
4x + 5y = 13

A = [3  2]    det(A) = 7
    [4  5]

A₁ = [7  2]    det(A₁) = 35 - 26 = 9
     [13 5]

A₂ = [3  7]    det(A₂) = 39 - 28 = 11
     [4  13]

x = det(A₁)/det(A) = 9/7
y = det(A₂)/det(A) = 11/7
```

### Example 13: Cramer's Rule for 3×3

Solve:
```
x + y + z = 6
2x + y - z = 1
x - y + 2z = 5

A = [1   1   1]    det(A) = 6
    [2   1  -1]
    [1  -1   2]

A₁ = [6   1   1]    det(A₁) = 12
     [1   1  -1]
     [5  -1   2]

A₂ = [1   6   1]    det(A₂) = 6
     [2   1  -1]
     [1   5   2]

A₃ = [1   1   6]    det(A₃) = 12
     [2   1   1]
     [1  -1   5]

x = 12/6 = 2
y = 6/6 = 1
z = 12/6 = 2
```

---

## When to Use Cramer's Rule

**Advantages:**
- Direct formula for solution
- Useful for symbolic solutions
- Good for single variable

**Disadvantages:**
- Computationally expensive for large systems
- Row reduction is more efficient

**Best use:** Small systems (2×2, 3×3) or when finding only one variable

---

## Geometric Interpretation: Area

### 2D Parallelogram

The area of the parallelogram formed by vectors u and v is:
```
Area = |det([u  v])|
```

### Example 14: Area Calculation

Find area of parallelogram with vertices at (0,0), (3,1), (1,2), (4,3):

```
Adjacent sides: u = [3, 1], v = [1, 2]

Area = |det([3  1])| = |6 - 1| = 5
           [1  2]|
```

---

## Geometric Interpretation: Volume

### 3D Parallelepiped

The volume of parallelepiped formed by vectors u, v, w is:
```
Volume = |det([u  v  w])|
```

### Example 15: Volume Calculation

Find volume with edges u = [1,0,0], v = [0,2,0], w = [1,1,3]:

```
Volume = |det([1  0  1])| = |1·2·3| = 6
            [0  2  1]|
            [0  0  3]|
```

---

## Linear Transformations and Determinants

### Theorem

If T(x) = Ax is a linear transformation, then:
```
|det(A)| = scaling factor for areas/volumes
```

- |det(A)| > 1: T expands regions
- |det(A)| < 1: T contracts regions
- det(A) < 0: T reverses orientation

### Example 16: Transformation Effect

```
A = [2  0]    det(A) = 6
    [0  3]

T multiplies all areas by factor of 6
Unit square (area 1) → rectangle (area 6)
```

---

## Additional Properties

### Theorem: Determinant Properties

1. **Zero row/column:** If A has a zero row or column, det(A) = 0
2. **Proportional rows:** If two rows are proportional, det(A) = 0
3. **Sum property:** det([a+a', b, c]) = det([a, b, c]) + det([a', b, c])
4. **Scalar factor:** det(kA) = k^n det(A) for n×n matrix
5. **Block matrix:** det([A B; 0 D]) = det(A)·det(D) (B arbitrary, 0 is zero matrix)

### Example 17: Zero and Proportional Rows

```
a) |1  2  3|
   |0  0  0| = 0  (zero row)
   |4  5  6|

b) |2  4  6|
   |1  2  3| = 0  (row 1 = 2·row 2)
   |5  6  7|
```

---

## Vandermonde Determinant

### Special Form

```
|1   x₁  x₁²  ...  x₁^(n-1)|
|1   x₂  x₂²  ...  x₂^(n-1)|
|⋮   ⋮   ⋮    ⋱    ⋮       | = ∏(xⱼ - xᵢ)
|1   xₙ  xₙ²  ...  xₙ^(n-1)|   i<j
```

### Example 18: 3×3 Vandermonde

```
|1  1  1 |
|1  2  4 | = (2-1)(3-1)(3-2) = 1·2·1 = 2
|1  3  9 |
```

---

## Key Formulas and Reference

### Basic Formulas
```
2×2: det([a b; c d]) = ad - bc
3×3: Use cofactor expansion or row reduction
```

### Properties
```
det(AB) = det(A)·det(B)
det(A^T) = det(A)
det(A^(-1)) = 1/det(A)
det(kA) = k^n det(A) (n×n matrix)
```

### Row Operations
```
Row swap: det → -det
Row scale by k: det → k·det
Row replacement: det unchanged
```

### Invertibility
```
A invertible ⟺ det(A) ≠ 0
```

### Cramer's Rule
```
xᵢ = det(Aᵢ)/det(A)
```

### Geometric
```
Area (2D) = |det([u  v])|
Volume (3D) = |det([u  v  w])|
```

---

**Next Unit:** Unit 4 - Vector Spaces
