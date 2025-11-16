# Linear Algebra - Unit 8: Applications - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100 (105 with bonus)**

---

## Instructions
- Show all work for full credit
- Interpret results in context
- Use calculator for numerical approximations
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

1. A transition matrix must have:
   - A) All entries equal to 1
   - B) Columns that sum to 1
   - C) Rows that sum to 1
   - D) Determinant = 1

2. The steady state of a Markov chain is an eigenvector for eigenvalue:
   - A) 0
   - B) 1
   - C) -1
   - D) Any value

3. For discrete system x_{k+1} = Ax_k, long-term behavior depends on:
   - A) Initial condition only
   - B) Eigenvalues of A
   - C) Determinant of A
   - D) Rank of A

4. A quadratic form Q(x) = xᵀAx is positive definite if:
   - A) All eigenvalues of A are positive
   - B) All eigenvalues of A are negative
   - C) det(A) > 0
   - D) A is invertible

5. In SVD A = UΣVᵀ, the singular values are:
   - A) Eigenvalues of A
   - B) √eigenvalues of AᵀA
   - C) Diagonal entries of U
   - D) Columns of V

6. The least squares solution minimizes:
   - A) ‖x‖
   - B) ‖Ax‖
   - C) ‖Ax - b‖
   - D) ‖b‖

7. In PCA, principal components are:
   - A) Eigenvalues of covariance matrix
   - B) Eigenvectors of covariance matrix
   - C) Singular values
   - D) Mean values

8. The adjacency matrix A² gives:
   - A) Number of edges
   - B) Number of vertices
   - C) Number of 2-step paths
   - D) Degree of each vertex

9. For system x' = Ax, solution involves:
   - A) Powers of A
   - B) Exponential of eigenvalues
   - C) Determinant of A
   - D) Rank of A

10. PageRank finds:
    - A) Smallest eigenvalue
    - B) Largest eigenvalue
    - C) Eigenvector for λ = 1
    - D) All eigenvectors

---

## Part 2: Short Answer (40 points, 5 points each)

11. Is P = [0.6 0.5; 0.4 0.5] a valid transition matrix?

12. For P in #11 with x_0 = [1,0]ᵀ, find x_1.

13. Classify Q(x,y) = x² + 4y² (positive definite, negative definite, or indefinite)

14. For data points (1,1), (2,3), (3,2), set up the least squares system for line y = mx + b.

15. If A has singular values σ₁ = 5, σ₂ = 2, what is ‖A‖ (largest singular value)?

16. In graph with adjacency matrix A = [0 1; 1 0], how many 2-step paths from vertex 1 to itself?

17. For x_{k+1} = 2x_k, describe long-term behavior.

18. What does an eigenvalue λ > 1 indicate for dynamical system x_{k+1} = Ax_k?

---

## Part 3: Free Response (30 points)

### Problem 19 (10 points)

A Markov chain has transition matrix:
```
P = [0.7  0.4]
    [0.3  0.6]
```

a) Verify P is a valid transition matrix (2 points)
b) Find the steady state distribution (5 points)
c) Interpret the steady state in context if this represents weather (sunny/rainy) (3 points)

---

### Problem 20 (10 points)

Classify the quadratic form Q(x,y) = 3x² + 4xy + 3y²:

a) Write in matrix form (3 points)
b) Find eigenvalues of the matrix (4 points)
c) Classify as positive definite, negative definite, or indefinite (3 points)

---

### Problem 21 (10 points)

Find the least squares line y = mx + b for the data points:
(1, 2), (2, 4), (3, 5)

a) Set up the system Ax = b (3 points)
b) Form the normal equations AᵀAx̂ = Aᵀb (4 points)
c) Solve for m and b (3 points)

---

## Bonus (5 points)

Explain how SVD is used for image compression. Include discussion of singular values and rank-k approximation.

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **B) Columns that sum to 1**
   - Each column represents a probability distribution

2. **B) 1**
   - Steady state: Pq = q, so eigenvalue is 1

3. **B) Eigenvalues of A**
   - |λ| < 1 → decay, |λ| > 1 → growth

4. **A) All eigenvalues of A are positive**
   - Definition of positive definite

5. **B) √eigenvalues of AᵀA**
   - Standard construction of SVD

6. **C) ‖Ax - b‖**
   - Definition of least squares

7. **B) Eigenvectors of covariance matrix**
   - Principal components are eigenvectors

8. **C) Number of 2-step paths**
   - Matrix power interpretation

9. **B) Exponential of eigenvalues**
   - Solution: x(t) = e^(At)x_0 involves e^(λt)

10. **C) Eigenvector for λ = 1**
    - PageRank is steady state vector

---

## Part 2: Short Answer

11. **Answer: Yes**
    ```
    Column sums: 0.6 + 0.4 = 1, 0.5 + 0.5 = 1 ✓
    All entries in [0,1] ✓
    Valid transition matrix
    ```

12. **Answer: [0.6, 0.4]ᵀ**
    ```
    x_1 = P[1,0]ᵀ = [0.6, 0.4]ᵀ
    ```

13. **Answer: Positive definite**
    ```
    Q(x,y) = x² + 4y² > 0 for all (x,y) ≠ (0,0)
    Matrix: [1 0; 0 4], eigenvalues: 1, 4 (both > 0)
    ```

14. **Answer:**
    ```
    A = [1  1]    b = [1]
        [2  1]        [3]
        [3  1]        [2]

    From points: y = mx + b gives
    m + b = 1, 2m + b = 3, 3m + b = 2
    ```

15. **Answer: 5**
    ```
    ‖A‖ = largest singular value = σ₁ = 5
    ```

16. **Answer: 1**
    ```
    A² = [1  0] → (A²)₁₁ = 1
         [0  1]
    ```

17. **Answer: Grows without bound**
    ```
    x_k = 2^k x_0 → ∞ as k → ∞
    ```

18. **Answer: System grows/expands**
    ```
    Component in direction of eigenvector grows over time
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

**a) Verify valid transition matrix (2 points)**
```
Column 1: 0.7 + 0.3 = 1 ✓
Column 2: 0.4 + 0.6 = 1 ✓
All entries ≥ 0 ✓
Valid transition matrix
```

**b) Find steady state (5 points)**
```
Solve (P - I)q = 0:
[-0.3  0.4][q₁]   [0]
[ 0.3 -0.4][q₂] = [0]

-0.3q₁ + 0.4q₂ = 0
q₁ = (4/3)q₂

With q₁ + q₂ = 1:
(4/3)q₂ + q₂ = 1
(7/3)q₂ = 1
q₂ = 3/7

q₁ = 4/7

Steady state: q = [4/7, 3/7]ᵀ
```

**c) Interpretation (3 points)**
```
Long-term: approximately 57% sunny days, 43% rainy days
Regardless of starting weather, system approaches this distribution
```

**Grading:**
- Part a: 2 points
- Part b: 5 points (2 for setup, 2 for solving, 1 for normalization)
- Part c: 3 points for correct interpretation

---

### Problem 20 (10 points)

**a) Matrix form (3 points)**
```
Q(x,y) = [x y][3  2][x]
              [2  3][y]

A = [3  2]
    [2  3]
```

**b) Eigenvalues (4 points)**
```
det(A - λI) = (3-λ)² - 4
            = λ² - 6λ + 9 - 4
            = λ² - 6λ + 5
            = (λ - 5)(λ - 1)

Eigenvalues: λ₁ = 5, λ₂ = 1
```

**c) Classification (3 points)**
```
Both eigenvalues > 0
Therefore: Positive definite

Geometric interpretation: Q(x,y) > 0 for all (x,y) ≠ (0,0)
```

**Grading:**
- Part a: 3 points
- Part b: 4 points (2 for characteristic equation, 2 for solving)
- Part c: 3 points (2 for classification, 1 for explanation)

---

### Problem 21 (10 points)

**a) System setup (3 points)**
```
Points: (1,2), (2,4), (3,5)
Equation: y = mx + b

System:
m(1) + b = 2
m(2) + b = 4
m(3) + b = 5

Matrix form:
[1  1][m]   [2]
[2  1][b] = [4]
[3  1]      [5]

A = [1  1]    b = [2]    x = [m]
    [2  1]        [4]        [b]
    [3  1]        [5]
```

**b) Normal equations (4 points)**
```
AᵀA = [1  2  3][1  1]   [14  6]
      [1  1  1][2  1] = [ 6  3]
               [3  1]

Aᵀb = [1  2  3][2]   [26]
      [1  1  1][4] = [11]
               [5]

Normal equations:
[14  6][m]   [26]
[ 6  3][b] = [11]
```

**c) Solution (3 points)**
```
From equation 2: 6m + 3b = 11 → b = (11 - 6m)/3

Substitute into equation 1:
14m + 6((11 - 6m)/3) = 26
14m + 2(11 - 6m) = 26
14m + 22 - 12m = 26
2m = 4
m = 2

b = (11 - 12)/3 = -1/3

Least squares line: y = 2x - 1/3
or y = 2x - 0.33...
```

**Grading:**
- Part a: 3 points for correct matrix setup
- Part b: 4 points (2 for AᵀA, 2 for Aᵀb)
- Part c: 3 points for correct solution

---

## Bonus (5 points)

**Answer:**

Singular Value Decomposition A = UΣVᵀ decomposes an image matrix into:
- U: left singular vectors (spatial patterns)
- Σ: diagonal matrix with singular values σ₁ ≥ σ₂ ≥ ... ≥ 0
- V: right singular vectors (frequency patterns)

**Rank-k approximation:**
```
A ≈ Σᵢ₌₁ᵏ σᵢuᵢvᵢᵀ
```

Keep only the k largest singular values and corresponding vectors.

**Compression:**
- Original: mn values
- Compressed: k(m + n + 1) values
- Quality depends on how quickly σᵢ decay

Larger singular values contain more important information. By keeping only top k values, we preserve most visual information while reducing storage.

**Grading:**
- Explanation of SVD components (2 points)
- Rank-k approximation formula (2 points)
- Discussion of compression/storage (1 point)

---

## Grading Rubric

**Performance Levels:**
- **A (90-100):** Mastery of applications; can model and solve real problems
- **B (80-89):** Solid understanding; minor errors in application
- **C (70-79):** Basic competence; struggles with interpretation
- **D (60-69):** Significant gaps in understanding applications
- **F (0-59):** Cannot apply linear algebra concepts

**Common Errors:**
1. Not verifying transition matrix properties
2. Errors in steady state calculation
3. Misclassifying quadratic forms
4. Setting up wrong least squares system
5. Confusing eigenvalues and singular values
6. Misinterpreting results in context

---

**Total: _____ / 100 (_____ / 105 with bonus)**

**Congratulations on completing Linear Algebra!**
