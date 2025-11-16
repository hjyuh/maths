# Linear Algebra - Unit 2: Matrix Algebra - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100 (105 with bonus)**

---

## Instructions
- Show all work for full credit
- Write matrices using brackets
- Simplify all answers
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

1. If A is 3×4 and B is 4×2, what is the size of AB?
   - A) 3×2
   - B) 4×4
   - C) 3×4
   - D) Undefined

2. Which property does NOT hold for matrix multiplication?
   - A) Associativity
   - B) Commutativity
   - C) Distributivity
   - D) Identity property

3. If A is 2×3, what is the size of A^T?
   - A) 2×3
   - B) 3×2
   - C) 2×2
   - D) 3×3

4. Which statement is true about (AB)^T?
   - A) (AB)^T = A^T B^T
   - B) (AB)^T = B^T A^T
   - C) (AB)^T = AB
   - D) (AB)^T = BA

5. A matrix A is symmetric if:
   - A) A = -A^T
   - B) A = A^T
   - C) AA^T = I
   - D) A^2 = I

6. If A is invertible, then (A^(-1))^(-1) equals:
   - A) A
   - B) A^T
   - C) I
   - D) -A

7. If A and B are invertible n×n matrices, then (AB)^(-1) equals:
   - A) A^(-1) B^(-1)
   - B) B^(-1) A^(-1)
   - C) AB
   - D) BA

8. An elementary matrix is:
   - A) Always invertible
   - B) Always singular
   - C) Always symmetric
   - D) Never square

9. If A is a 3×3 matrix with two pivot positions, then A is:
   - A) Invertible
   - B) Singular
   - C) Symmetric
   - D) Elementary

10. In an LU factorization A = LU, which is true?
    - A) L is upper triangular
    - B) U is lower triangular
    - C) L has 1's on its diagonal
    - D) U has 1's on its diagonal

---

## Part 2: Short Answer (40 points, 5 points each)

11. Compute: [1  2][3  4]
             [5  6][7  8]

12. Find the transpose of [2  3  4]
                          [5  6  7]

13. Determine if [1  2] is symmetric.
                 [3  4]

14. Compute: [2  0]²
             [0  3]

15. Find the inverse of [3  4] using row reduction.
                        [2  3]

16. Verify that [1  0] is the inverse of [1   0]
                [5  1]                    [-5  1]

17. Write the elementary matrix that represents: Add 4R₁ to R₂ (for 2×2 matrices)

18. If A^(-1) = [2  1], find (A^T)^(-1)
                [3  2]

---

## Part 3: Free Response (30 points)

### Problem 19 (10 points)

Find the inverse of the matrix using row reduction:
```
A = [1  0  2]
    [2  1  0]
    [1  1  1]
```

Show all row operations clearly.

---

### Problem 20 (10 points)

Given A = [1  2] and B = [5  6]
          [3  4]       [7  8]

a) Compute AB (3 points)
b) Compute BA (3 points)
c) Is AB = BA? What does this tell you about matrix multiplication? (4 points)

---

### Problem 21 (10 points)

Find an LU factorization of:
```
A = [2  4  -2]
    [4  9  -3]
    [2  5   1]
```

Show all steps and verify your answer.

---

## Bonus (5 points)

Prove that if A and B are invertible n×n matrices, then (AB)^(-1) = B^(-1)A^(-1).

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **A) 3×2**
   - (m×n)(n×p) = (m×p), so (3×4)(4×2) = 3×2

2. **B) Commutativity**
   - In general, AB ≠ BA

3. **B) 3×2**
   - Transpose swaps dimensions

4. **B) (AB)^T = B^T A^T**
   - Transpose reverses order

5. **B) A = A^T**
   - Definition of symmetric

6. **A) A**
   - Inverse of inverse is original

7. **B) B^(-1) A^(-1)**
   - Inverse reverses order

8. **A) Always invertible**
   - Row operations are reversible

9. **B) Singular**
   - Needs 3 pivots to be invertible

10. **C) L has 1's on its diagonal**
    - Standard form of LU factorization

---

## Part 2: Short Answer

11. **Answer:**
    ```
    [1  2][3  4]   [1·3+2·7  1·4+2·8]   [17  20]
    [5  6][7  8] = [5·3+6·7  5·4+6·8] = [57  68]
    ```

12. **Answer:**
    ```
    [2  5]
    [3  6]
    [4  7]
    ```

13. **Answer: No**
    ```
    A^T = [1  3] ≠ [1  2] = A
          [2  4]   [3  4]
    Not symmetric
    ```

14. **Answer:**
    ```
    [2  0][2  0]   [4  0]
    [0  3][0  3] = [0  9]
    ```

15. **Answer:**
    ```
    [A | I]:
    [3  4 | 1  0]
    [2  3 | 0  1]

    R₁ ↔ R₂:
    [2  3 | 0  1]
    [3  4 | 1  0]

    (1/2)R₁:
    [1  3/2 | 0  1/2]
    [3  4   | 1  0]

    R₂ - 3R₁:
    [1  3/2 | 0    1/2]
    [0  -1/2| 1   -3/2]

    -2R₂:
    [1  3/2 | 0    1/2]
    [0   1  |-2    3]

    R₁ - (3/2)R₂:
    [1  0 | 3   -4]
    [0  1 |-2    3]

    A^(-1) = [ 3  -4]
             [-2   3]
    ```

16. **Answer:**
    ```
    [1   0][ 1  0]   [1  0]
    [-5  1][5  1] = [0  1] ✓

    [ 1  0][1   0]   [1  0]
    [ 5  1][-5  1] = [0  1] ✓

    Verified
    ```

17. **Answer:**
    ```
    E = [1  0]
        [4  1]
    ```

18. **Answer:**
    ```
    (A^T)^(-1) = (A^(-1))^T = [2  3]
                               [1  2]
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

```
[A | I]:
[1  0  2 | 1  0  0]
[2  1  0 | 0  1  0]
[1  1  1 | 0  0  1]

R₂ - 2R₁:
[1  0  2 | 1   0  0]
[0  1 -4 |-2   1  0]
[1  1  1 | 0   0  1]

R₃ - R₁:
[1  0  2 | 1   0  0]
[0  1 -4 |-2   1  0]
[0  1 -1 |-1   0  1]

R₃ - R₂:
[1  0  2 | 1   0  0]
[0  1 -4 |-2   1  0]
[0  0  3 | 1  -1  1]

(1/3)R₃:
[1  0  2 | 1    0   0]
[0  1 -4 |-2    1   0]
[0  0  1 | 1/3 -1/3 1/3]

R₁ - 2R₃:
[1  0  0 | 1/3  2/3  -2/3]
[0  1 -4 |-2    1     0]
[0  0  1 | 1/3 -1/3   1/3]

R₂ + 4R₃:
[1  0  0 | 1/3   2/3  -2/3]
[0  1  0 |-2/3  -1/3   4/3]
[0  0  1 | 1/3  -1/3   1/3]

A^(-1) = [ 1/3   2/3  -2/3]
         [-2/3  -1/3   4/3]
         [ 1/3  -1/3   1/3]
```

**Grading:**
- Correct augmented matrix (2 points)
- Systematic row reduction (5 points)
- Correct final answer (3 points)

---

### Problem 20 (10 points)

**a) AB (3 points)**
```
AB = [1  2][5  6]
     [3  4][7  8]

   = [1·5+2·7  1·6+2·8]
     [3·5+4·7  3·6+4·8]

   = [19  22]
     [43  50]
```

**b) BA (3 points)**
```
BA = [5  6][1  2]
     [7  8][3  4]

   = [5·1+6·3  5·2+6·4]
     [7·1+8·3  7·2+8·4]

   = [23  34]
     [31  46]
```

**c) Analysis (4 points)**
```
AB = [19  22] ≠ [23  34] = BA
     [43  50]   [31  46]

This demonstrates that matrix multiplication is NOT commutative.
In general, AB ≠ BA for matrices.
```

**Grading:**
- Correct AB (3 points)
- Correct BA (3 points)
- Correct conclusion about commutativity (4 points)

---

### Problem 21 (10 points)

```
A = [2  4  -2]
    [4  9  -3]
    [2  5   1]

Reduce to U:
[2  4  -2]
[4  9  -3]  R₂ - 2R₁, multiplier: 2
[2  5   1]  R₃ - R₁, multiplier: 1

[2  4  -2]
[0  1   1]
[0  1   3]  R₃ - R₂, multiplier: 1

[2  4  -2]
[0  1   1]
[0  0   2]

U = [2  4  -2]
    [0  1   1]
    [0  0   2]

L = [1  0  0]
    [2  1  0]
    [1  1  1]

Verify:
LU = [1  0  0][2  4  -2]
     [2  1  0][0  1   1]
     [1  1  1][0  0   2]

   = [2       4      -2]
     [4       9      -3]
     [2       5       1] = A ✓
```

**Grading:**
- Row reduction with multipliers (4 points)
- Correct U (2 points)
- Correct L (2 points)
- Verification (2 points)

---

## Bonus (5 points)

**Proof:**

We need to show that (AB)^(-1) = B^(-1)A^(-1).

By definition of inverse, we must verify:
```
(AB)(B^(-1)A^(-1)) = I  and  (B^(-1)A^(-1))(AB) = I
```

**First equation:**
```
(AB)(B^(-1)A^(-1)) = A(BB^(-1))A^(-1)  [associativity]
                    = AIA^(-1)          [BB^(-1) = I]
                    = AA^(-1)           [IA^(-1) = A^(-1)]
                    = I                 [AA^(-1) = I]  ✓
```

**Second equation:**
```
(B^(-1)A^(-1))(AB) = B^(-1)(A^(-1)A)B  [associativity]
                    = B^(-1)IB          [A^(-1)A = I]
                    = B^(-1)B           [IB = B]
                    = I                 [B^(-1)B = I]  ✓
```

Therefore, (AB)^(-1) = B^(-1)A^(-1). ∎

**Grading:**
- Setting up what needs to be proved (1 point)
- Proving first equation (2 points)
- Proving second equation (2 points)

---

## Grading Rubric

**Performance Levels:**
- **A (90-100):** Mastery of matrix operations and inverses
- **B (80-89):** Solid understanding with minor errors
- **C (70-79):** Basic competence with matrix algebra
- **D (60-69):** Significant gaps in understanding
- **F (0-59):** Does not demonstrate basic competency

**Common Errors:**
1. Incorrect matrix multiplication order
2. Forgetting to reverse order for (AB)^T and (AB)^(-1)
3. Arithmetic errors in row reduction
4. Not showing all row operations
5. Confusing symmetric with invertible
6. Errors in elementary matrix construction

---

**Total: _____ / 100 (_____ / 105 with bonus)**
