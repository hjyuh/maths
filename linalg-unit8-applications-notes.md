# Linear Algebra - Unit 8: Applications - Notes

## Table of Contents
1. [Markov Chains](#markov-chains)
2. [Dynamical Systems](#dynamical-systems)
3. [Quadratic Forms](#quadratic-forms)
4. [Singular Value Decomposition](#singular-value-decomposition)
5. [Data Science Applications](#data-science-applications)
6. [Differential Equations](#differential-equations)
7. [Computer Graphics](#computer-graphics)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Modeling with Markov chains**
- **Analyzing dynamical systems**
- **Working with quadratic forms**
- **Applying SVD to data problems**
- **Using linear algebra in real applications**

---

## Essential Questions
- How does linear algebra model real-world systems?
- What role do eigenvalues play in long-term behavior?
- How is linear algebra used in data science?
- What are practical applications of matrix factorizations?

---

## Markov Chains

### Definition

A **Markov chain** is a sequence of states where probability of next state depends only on current state.

**Transition matrix P:**
- P_ij = probability of moving from state j to state i
- Columns sum to 1
- All entries ≥ 0

### State Vector

x_k = probability distribution at step k

**Evolution:** x_{k+1} = Px_k

### Example 1: Two-State Markov Chain

```
Weather model:
- If sunny today: 80% sunny tomorrow, 20% rainy
- If rainy today: 40% sunny tomorrow, 60% rainy

P = [0.8  0.4]  (sunny → sunny, rainy → sunny)
    [0.2  0.6]  (sunny → rainy, rainy → rainy)

If today is sunny: x_0 = [1, 0]ᵀ

Tomorrow: x_1 = P[1,0]ᵀ = [0.8, 0.2]ᵀ
Next day: x_2 = P²x_0 = [0.72, 0.28]ᵀ
```

---

## Steady State

### Definition

**Steady state** q satisfies Pq = q (q is eigenvector for λ = 1).

Long-term behavior: x_k → q as k → ∞

### Example 2: Finding Steady State

```
For P = [0.8  0.4], find steady state:
        [0.2  0.6]

Solve (P - I)q = 0:
[-0.2  0.4][q₁]   [0]
[ 0.2 -0.4][q₂] = [0]

-0.2q₁ + 0.4q₂ = 0 → q₁ = 2q₂

With q₁ + q₂ = 1: q = [2/3, 1/3]ᵀ

Long-term: 67% sunny, 33% rainy
```

---

## Dynamical Systems

### Discrete Dynamical System

```
x_{k+1} = Ax_k
```

**Solution:** x_k = A^k x_0

### Long-Term Behavior

Determined by eigenvalues of A:
- |λ| < 1: decay to 0
- |λ| = 1: stable
- |λ| > 1: grows unboundedly

### Example 3: Population Model

```
x_k = [juveniles] at year k
      [adults   ]

A = [0    2]  (2 offspring per adult)
    [0.5  0.8] (50% survival to adult, 80% adult survival)

Eigenvalues: λ₁ ≈ 1.3, λ₂ ≈ -0.5

Dominant eigenvalue > 1 → population grows
```

---

## Diagonalization for Dynamics

### Using Eigenvalues

If A = PDP⁻¹:
```
x_k = A^k x_0 = PD^k P⁻¹ x_0
```

D^k is easy to compute (diagonal).

### Example 4: Long-Term Prediction

```
A = [3  1]    Eigenvalues: λ₁ = 4, λ₂ = 2
    [1  3]

x_0 = [100, 0]ᵀ

With diagonalization:
x_k ≈ c₁(4^k)v₁ + c₂(2^k)v₂

For large k: dominated by 4^k term
```

---

## Quadratic Forms

### Definition

A **quadratic form** on ℝⁿ is:
```
Q(x) = xᵀAx
```
where A is symmetric.

### Example 5: Quadratic Form in ℝ²

```
Q(x,y) = 3x² + 4xy + 5y²

Matrix form: [x y][3  2][x]
                  [2  5][y]

A = [3  2]
    [2  5]
```

---

## Classification of Quadratic Forms

### Definitions

- **Positive definite:** Q(x) > 0 for all x ≠ 0
- **Negative definite:** Q(x) < 0 for all x ≠ 0
- **Indefinite:** Q takes both positive and negative values

### Eigenvalue Test

A is positive definite ⟺ all eigenvalues > 0
A is negative definite ⟺ all eigenvalues < 0

### Example 6: Classifying

```
A = [2  0]    Eigenvalues: 2, 3 (both > 0)
    [0  3]

A is positive definite

Q(x,y) = 2x² + 3y² > 0 for all (x,y) ≠ (0,0)
```

---

## Singular Value Decomposition (SVD)

### Theorem

Any m×n matrix A can be factored as:
```
A = UΣVᵀ
```

where:
- U: m×m orthogonal (left singular vectors)
- Σ: m×n diagonal (singular values σᵢ ≥ 0)
- V: n×n orthogonal (right singular vectors)

### Computing SVD

1. Find eigenvalues of AᵀA → σ²ᵢ
2. Singular values: σᵢ = √eigenvalues
3. Eigenvectors of AᵀA → columns of V
4. Compute U from Avᵢ = σᵢuᵢ

### Example 7: SVD of 2×2 Matrix

```
A = [3  0]
    [0  2]

Already diagonal!

U = I, Σ = A, V = I

A = [1  0][3  0][1  0]
    [0  1][0  2][0  1]
```

---

## Principal Component Analysis (PCA)

### Goal

Reduce dimensionality while preserving variance.

### Algorithm

1. Center data: subtract mean
2. Compute covariance matrix C = XᵀX/n
3. Find eigenvectors of C
4. Project data onto top k eigenvectors

### Example 8: PCA for 2D Data

```
Data points: [1,2], [2,3], [3,4], [4,5]

Mean: [2.5, 3.5]

Centered: [-1.5,-1.5], [-0.5,-0.5], [0.5,0.5], [1.5,1.5]

Principal direction: [1,1]/√2 (maximum variance)
```

---

## Least Squares Applications

### Line Fitting

Find best-fit line y = mx + b through data points.

Set up Ax = b (overdetermined system).
Solution: x̂ = (AᵀA)⁻¹Aᵀb

### Example 9: Regression

```
Points: (1,2), (2,3), (3,5)

A = [1  1]    b = [2]
    [2  1]        [3]
    [3  1]        [5]

AᵀA = [14  6]    Aᵀb = [22]
      [6   3]          [10]

Solve: m ≈ 1.5, b ≈ 0.67
Line: y = 1.5x + 0.67
```

---

## Graph Theory

### Adjacency Matrix

For graph with n vertices:
A_ij = 1 if edge from j to i, else 0

### Powers of Adjacency Matrix

(A^k)_ij = number of walks of length k from j to i

### Example 10: Graph Analysis

```
Graph: 1 → 2 → 3
       ↓       ↑
       └───────┘

A = [0  1  0]
    [0  0  1]
    [1  0  0]

A² = [0  0  1]  (paths of length 2)
     [1  0  0]
     [0  1  0]
```

---

## Computer Graphics

### Transformations

**Rotation:**
```
R(θ) = [cos θ  -sin θ]
       [sin θ   cos θ]
```

**Scaling:**
```
S(a,b) = [a  0]
         [0  b]
```

**Translation:**
Use homogeneous coordinates: [x, y, 1]ᵀ

### Example 11: Composite Transformation

```
Rotate 90°, then scale by 2:

T = S · R = [2  0][0  -1]   [ 0  -2]
            [0  2][1   0] = [ 2   0]

Point [1,0,1]ᵀ → [0,2,1]ᵀ
```

---

## Differential Equations

### System: x' = Ax

**Solution:** x(t) = e^(At) x_0

If A = PDP⁻¹:
```
x(t) = Pe^(Dt)P⁻¹x_0
```

where e^(Dt) = diag(e^(λ₁t), ..., e^(λₙt))

### Example 12: Coupled DEs

```
x' = 2x + y
y' = x + 2y

Matrix form: [x']   [2  1][x]
             [y'] = [1  2][y]

Eigenvalues: λ₁ = 3, λ₂ = 1
Solution involves e^(3t) and e^t terms
```

---

## PageRank Algorithm

### Google's Innovation

Rank web pages by importance.

**PageRank vector:** Eigenvector of modified adjacency matrix with λ = 1.

Pages with higher values are more "important."

---

## Image Compression

### Using SVD

```
A = UΣVᵀ ≈ Σᵢ₌₁ᵏ σᵢuᵢvᵢᵀ
```

Keep only largest k singular values for compression.

### Compression Ratio

Original: mn numbers
Compressed: k(m + n + 1) numbers

---

## Key Formulas and Reference

### Markov Chains
```
x_{k+1} = Px_k
Steady state: Pq = q
```

### Dynamical Systems
```
x_k = A^k x_0
Stability: |λ| determines behavior
```

### Quadratic Forms
```
Q(x) = xᵀAx
Positive definite: all eigenvalues > 0
```

### SVD
```
A = UΣVᵀ
Applications: compression, PCA, least squares
```

### Least Squares
```
x̂ = (AᵀA)⁻¹Aᵀb
```

---

**Course Complete!** You now have comprehensive knowledge of Linear Algebra!
