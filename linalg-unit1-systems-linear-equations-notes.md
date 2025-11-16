# Linear Algebra - Unit 1: Systems of Linear Equations - Notes

## Table of Contents
1. [Introduction to Linear Systems](#introduction-to-linear-systems)
2. [Gaussian Elimination](#gaussian-elimination)
3. [Row Reduction and Echelon Forms](#row-reduction-and-echelon-forms)
4. [Vector Equations](#vector-equations)
5. [Matrix Equations](#matrix-equations)
6. [Solution Sets](#solution-sets)
7. [Linear Independence](#linear-independence)
8. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding systems of linear equations**
- **Performing Gaussian elimination and row reduction**
- **Converting between systems, vector equations, and matrix equations**
- **Analyzing solution sets geometrically and algebraically**
- **Determining linear independence of vectors**

---

## Essential Questions
- What does it mean for a system to have no solution, one solution, or infinitely many solutions?
- How do row operations preserve solution sets?
- What is the geometric interpretation of a linear system?
- How can we determine if vectors are linearly independent?

---

## Introduction to Linear Systems

### What is a Linear Equation?

**Definition:** A linear equation in variables x₁, x₂, ..., xₙ has the form:
```
a₁x₁ + a₂x₂ + ... + aₙxₙ = b
```
where a₁, a₂, ..., aₙ, b are real numbers (coefficients).

**Key Properties:**
- Each variable appears to the first power only
- No products of variables (like x₁x₂)
- No functions of variables (like sin(x₁), √x₂)

### Example 1: Identifying Linear Equations

Which of the following are linear equations?

a) 3x - 2y + 5z = 7  **✓ Linear**
b) x² + y = 4  **✗ Not linear** (x² term)
c) 2x - 3y + z = 0  **✓ Linear**
d) xy + 2z = 1  **✗ Not linear** (xy term)
e) √x + y = 3  **✗ Not linear** (√x term)

---

## Systems of Linear Equations

### Definition

A **system of linear equations** (or linear system) is a collection of one or more linear equations involving the same variables.

**General form:**
```
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
  ⋮
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ
```

### Solution Sets

**Solution:** A list (s₁, s₂, ..., sₙ) of numbers that satisfies all equations simultaneously

**Three possibilities:**
1. **No solution** (inconsistent system)
2. **Exactly one solution** (consistent with unique solution)
3. **Infinitely many solutions** (consistent with infinitely many solutions)

### Example 2: Solving a 2×2 System

Solve the system:
```
x - 2y = -3
3x + y = 5
```

**Solution:**
```
From equation 1: x = 2y - 3

Substitute into equation 2:
3(2y - 3) + y = 5
6y - 9 + y = 5
7y = 14
y = 2

Back-substitute:
x = 2(2) - 3 = 1

Solution: (1, 2)
```

**Check:**
```
x - 2y = 1 - 2(2) = -3 ✓
3x + y = 3(1) + 2 = 5 ✓
```

---

## Geometric Interpretation

### In Two Variables (ℝ²)

Each equation represents a **line** in the plane:
- **One solution:** Two lines intersect at one point
- **No solution:** Two lines are parallel
- **Infinitely many solutions:** Two lines coincide

### In Three Variables (ℝ³)

Each equation represents a **plane** in space:
- **One solution:** Three planes intersect at one point
- **No solution:** Planes have no common intersection
- **Infinitely many solutions:** Planes intersect in a line or coincide

### Example 3: Geometric Analysis

System:
```
x + y = 3
2x + 2y = 6
```

Notice that equation 2 is just 2 × equation 1, so they represent the same line.
**Solution:** Infinitely many solutions along the line x + y = 3

---

## Gaussian Elimination

### Elementary Row Operations

Three types of operations that preserve solution sets:

1. **(Replacement)** Replace one row by the sum of itself and a multiple of another row
2. **(Interchange)** Interchange two rows
3. **(Scaling)** Multiply all entries in a row by a nonzero constant

**Notation:**
- Rᵢ ↔ Rⱼ: Swap rows i and j
- kRᵢ: Multiply row i by scalar k
- Rᵢ + kRⱼ: Add k times row j to row i

### Example 4: Using Row Operations

Solve using Gaussian elimination:
```
x + 2y + z = 6
2x + y - z = 1
x - y + 2z = 5
```

**Augmented matrix:**
```
[1   2   1 | 6]
[2   1  -1 | 1]
[1  -1   2 | 5]
```

**Step 1:** Eliminate x from rows 2 and 3
```
R₂ - 2R₁ → R₂:
[1   2   1 | 6]
[0  -3  -3 |-11]
[1  -1   2 | 5]

R₃ - R₁ → R₃:
[1   2   1 | 6]
[0  -3  -3 |-11]
[0  -3   1 |-1]
```

**Step 2:** Eliminate y from row 3
```
R₃ - R₂ → R₃:
[1   2   1 | 6]
[0  -3  -3 |-11]
[0   0   4 | 10]
```

**Step 3:** Back-substitution
```
From row 3: 4z = 10 → z = 5/2

From row 2: -3y - 3(5/2) = -11
           -3y = -11 + 15/2 = -7/2
           y = 7/6

From row 1: x + 2(7/6) + 5/2 = 6
           x = 6 - 7/3 - 5/2 = 5/6

Solution: (5/6, 7/6, 5/2)
```

---

## Row Reduction and Echelon Forms

### Row Echelon Form (REF)

A matrix is in **row echelon form** if:
1. All nonzero rows are above zero rows
2. The leading entry (pivot) of each nonzero row is to the right of the pivot above it
3. All entries below a pivot are zero

**Example:**
```
[1  2  3 | 4]    [2  4  6 | 8]    [1  0  2 | 3]
[0  1  5 | 6]    [0  0  1 | 2]    [0  1  4 | 5]
[0  0  0 | 0]    [0  0  0 | 0]    [0  0  0 | 1]
   ✓ REF            ✓ REF            ✗ Not REF
```

### Reduced Row Echelon Form (RREF)

A matrix is in **reduced row echelon form** if:
1. It is in row echelon form
2. Each pivot is 1
3. Each pivot is the only nonzero entry in its column

**Example:**
```
[1  0  0 | 2]
[0  1  0 | 3]
[0  0  1 | 1]
```

### Example 5: Converting to RREF

Reduce to RREF:
```
[2  4  -2 | 6]
[1  3   1 | 5]
[3  5  -1 | 8]
```

**Step 1:** Get leading 1 in row 1
```
R₁ ↔ R₂:
[1  3   1 | 5]
[2  4  -2 | 6]
[3  5  -1 | 8]
```

**Step 2:** Eliminate below pivot
```
R₂ - 2R₁:
[1  3   1 | 5]
[0 -2  -4 |-4]
[3  5  -1 | 8]

R₃ - 3R₁:
[1  3   1 | 5]
[0 -2  -4 |-4]
[0 -4  -4 |-7]
```

**Step 3:** Scale row 2
```
-1/2 R₂:
[1  3   1 | 5]
[0  1   2 | 2]
[0 -4  -4 |-7]
```

**Step 4:** Eliminate around second pivot
```
R₁ - 3R₂:
[1  0  -5 |-1]
[0  1   2 | 2]
[0 -4  -4 |-7]

R₃ + 4R₂:
[1  0  -5 |-1]
[0  1   2 | 2]
[0  0   4 | 1]
```

**Step 5:** Scale row 3
```
1/4 R₃:
[1  0  -5 |-1]
[0  1   2 | 2]
[0  0   1 |1/4]
```

**Step 6:** Eliminate above third pivot
```
R₁ + 5R₃:
[1  0   0 |1/4]
[0  1   2 | 2]
[0  0   1 |1/4]

R₂ - 2R₃:
[1  0   0 |1/4]
[0  1   0 |3/2]
[0  0   1 |1/4]
```

**Solution:** x = 1/4, y = 3/2, z = 1/4

---

## Pivot Positions and Variables

### Basic and Free Variables

**Pivot position:** A location in a matrix that corresponds to a leading 1 in the RREF

**Basic variable:** A variable corresponding to a pivot column
**Free variable:** A variable corresponding to a non-pivot column

### Example 6: Identifying Variables

RREF:
```
[1  2  0  3 | 4]
[0  0  1  5 | 6]
[0  0  0  0 | 0]
```

Pivot columns: 1, 3
- Basic variables: x₁, x₃
- Free variables: x₂, x₄

**Solution in parametric form:**
```
x₃ = 6 - 5x₄
x₁ = 4 - 2x₂ - 3x₄

Let x₂ = s, x₄ = t (parameters)

x₁ = 4 - 2s - 3t
x₂ = s
x₃ = 6 - 5t
x₄ = t
```

---

## Existence and Uniqueness Theorem

### Theorem

A linear system is **consistent** if and only if the rightmost column of the augmented matrix is NOT a pivot column.

If consistent:
- **Unique solution:** No free variables (every column except the last is a pivot column)
- **Infinitely many solutions:** At least one free variable

### Example 7: Analyzing Consistency

Determine if the system is consistent and describe the solution set:

a) RREF:
```
[1  0  2 | 3]
[0  1 -1 | 4]
[0  0  0 | 0]
```
**Consistent** (last column is not pivot)
**Infinitely many solutions** (x₃ is free)

b) RREF:
```
[1  2  0 | 3]
[0  0  1 | 5]
[0  0  0 | 1]
```
**Inconsistent** (last column IS a pivot - equation: 0 = 1)

---

## Vector Equations

### Linear Combinations

**Definition:** Given vectors v₁, v₂, ..., vₚ in ℝⁿ and scalars c₁, c₂, ..., cₚ, the vector:
```
y = c₁v₁ + c₂v₂ + ... + cₚvₚ
```
is called a **linear combination** of v₁, v₂, ..., vₚ with weights c₁, c₂, ..., cₚ.

### Example 8: Linear Combinations

Can b = [2, 1, 5]ᵀ be written as a linear combination of v₁ = [1, 0, 2]ᵀ and v₂ = [0, 1, 1]ᵀ?

**Setup:**
```
c₁[1, 0, 2]ᵀ + c₂[0, 1, 1]ᵀ = [2, 1, 5]ᵀ
```

**System:**
```
c₁ = 2
c₂ = 1
2c₁ + c₂ = 5
```

**Check:** 2(2) + 1 = 5 ✓

**Yes:** b = 2v₁ + v₂

---

## Span

### Definition

**Span{v₁, v₂, ..., vₚ}** is the set of all linear combinations of v₁, v₂, ..., vₚ.

**Geometric interpretation:**
- Span{v} = line through origin and v
- Span{u, v} = plane through origin (if u, v not parallel)
- Span{u, v, w} = all of ℝ³ (if u, v, w not coplanar)

### Example 9: Determining Span

Let v₁ = [1, 0, -1]ᵀ, v₂ = [2, 1, 0]ᵀ, v₃ = [0, -1, 2]ᵀ

Is b = [3, 1, -2]ᵀ in Span{v₁, v₂, v₃}?

**Augmented matrix:**
```
[1   2   0 | 3]
[0   1  -1 | 1]
[-1  0   2 |-2]
```

**Row reduce:**
```
R₃ + R₁:
[1   2   0 | 3]
[0   1  -1 | 1]
[0   2   2 | 1]

R₃ - 2R₂:
[1   2   0 | 3]
[0   1  -1 | 1]
[0   0   4 |-1]
```

System is **consistent**, so **yes**, b is in Span{v₁, v₂, v₃}.

---

## Matrix Equations

### Matrix-Vector Multiplication

If A is m × n and x is in ℝⁿ, then Ax is defined as:
```
Ax = [a₁ a₂ ... aₙ][x₁]   = x₁a₁ + x₂a₂ + ... + xₙaₙ
                     [x₂]
                     [⋮ ]
                     [xₙ]
```

### Example 10: Computing Ax

```
A = [1  2  3]    x = [2]
    [4  5  6]        [1]
                     [3]

Ax = 2[1] + 1[2] + 3[3]
      [4]    [5]    [6]

   = [2 + 2 + 9]  = [13]
     [8 + 5 + 18]   [31]
```

---

## Equivalence of Representations

### Theorem

The following are **equivalent** (all true or all false):

For A is m × n, b in ℝᵐ, and x = [x₁, ..., xₙ]ᵀ:

1. The equation Ax = b has a solution
2. b is a linear combination of the columns of A
3. The augmented matrix [A | b] has no pivot in the rightmost column
4. The system corresponding to [A | b] is consistent

### Example 11: Using Equivalence

Does Ax = b have a solution?

```
A = [1  3  5]    b = [1]
    [2  1  4]        [2]
    [0  5  6]        [0]
```

Form augmented matrix and row reduce:
```
[1  3  5 | 1]
[2  1  4 | 2]
[0  5  6 | 0]

R₂ - 2R₁:
[1  3  5 | 1]
[0 -5 -6 | 0]
[0  5  6 | 0]

R₃ + R₂:
[1  3  5 | 1]
[0 -5 -6 | 0]
[0  0  0 | 0]
```

Last column is **not** a pivot, so the system is **consistent**.
**Yes**, Ax = b has a solution.

---

## Solution Sets of Linear Systems

### Homogeneous Systems

**Definition:** A system is **homogeneous** if it can be written as Ax = 0.

**Key property:** Always has at least the **trivial solution** x = 0.

**Nontrivial solutions** exist if and only if there is at least one free variable.

### Example 12: Homogeneous System

Solve Ax = 0 where:
```
A = [1  2  -1]
    [2  4  -2]
    [3  6  -3]
```

**Row reduce:**
```
[1  2  -1 | 0]
[2  4  -2 | 0]
[3  6  -3 | 0]

R₂ - 2R₁, R₃ - 3R₁:
[1  2  -1 | 0]
[0  0   0 | 0]
[0  0   0 | 0]
```

**Solution:**
```
x₁ + 2x₂ - x₃ = 0
x₁ = -2x₂ + x₃

Let x₂ = s, x₃ = t:
x = [-2s + t]  = s[-2] + t[1]
    [   s   ]     [ 1]    [0]
    [   t   ]     [ 0]    [1]
```

---

## Parametric Vector Form

### General Solution Structure

For a consistent system with free variables, write the solution as:
```
x = p + s₁v₁ + s₂v₂ + ... + sₖvₖ
```

where p is a particular solution and v₁, ..., vₖ span the solution set of Ax = 0.

### Example 13: Parametric Form

Solve:
```
x₁ + 3x₂ + 5x₃ = 4
2x₁ + 6x₂ + 10x₃ = 8
```

**Row reduce:**
```
[1  3  5 | 4]
[2  6 10 | 8]

R₂ - 2R₁:
[1  3  5 | 4]
[0  0  0 | 0]
```

**General solution:**
```
x₁ = 4 - 3x₂ - 5x₃

Let x₂ = s, x₃ = t:

x = [4 - 3s - 5t]   [4]      [-3]      [-5]
    [     s     ] = [0] + s  [ 1] + t  [ 0]
    [     t     ]   [0]      [ 0]      [ 1]
```

**Particular solution:** p = [4, 0, 0]ᵀ
**Homogeneous solutions:** span{[-3, 1, 0]ᵀ, [-5, 0, 1]ᵀ}

---

## Linear Independence

### Definition

Vectors v₁, v₂, ..., vₚ are **linearly independent** if the equation:
```
c₁v₁ + c₂v₂ + ... + cₚvₚ = 0
```
has **only** the trivial solution c₁ = c₂ = ... = cₚ = 0.

Otherwise, they are **linearly dependent**.

### Example 14: Testing Linear Independence

Are the vectors linearly independent?
```
v₁ = [1, 2, 3]ᵀ
v₂ = [4, 5, 6]ᵀ
v₃ = [7, 8, 9]ᵀ
```

**Form matrix and row reduce:**
```
[1  4  7]
[2  5  8]
[3  6  9]

R₂ - 2R₁, R₃ - 3R₁:
[1  4  7]
[0 -3 -6]
[0 -6 -12]

R₃ - 2R₂:
[1  4  7]
[0 -3 -6]
[0  0  0]
```

Only 2 pivot positions for 3 columns → **free variable exists**
Therefore, vectors are **linearly dependent**.

**Dependence relation:**
```
v₃ = 2v₂ - v₁
```

---

## Linear Independence Theorem

### Theorem

A set {v₁, v₂, ..., vₚ} is linearly dependent if and only if at least one vector is a linear combination of the others.

### Characterization Theorem

Columns of A are linearly independent if and only if Ax = 0 has only the trivial solution.

Equivalently: A has a pivot in every column.

### Example 15: Independence from RREF

Determine if columns are linearly independent:

```
A = [1  2  3]
    [4  5  6]
    [7  8  9]
```

From Example 14, RREF has only 2 pivots (in columns 1 and 2).
Column 3 is not a pivot column.
Therefore, columns are **linearly dependent**.

---

## Applications

### Example 16: Traffic Flow

Consider an intersection with traffic flowing as shown:

```
        x₁
        ↓
    →x₄   x₂→
        ↑
        x₃
```

Conservation of flow:
```
x₁ + x₄ = x₂ + x₃ = 400 (north-south)
x₂ + x₁ = x₃ + x₄ = 300 (east-west)
```

**System:**
```
x₁ - x₂ + x₃ - x₄ = 0
x₁ + x₂ - x₃ - x₄ = 0
```

**Solution:** Shows relationship between flows (infinitely many solutions based on constraints)

---

## Key Formulas and Reference

### Elementary Row Operations
```
1. Rᵢ ↔ Rⱼ (swap rows)
2. kRᵢ (scale row)
3. Rᵢ + kRⱼ (replacement)
```

### Consistency Conditions
- Consistent ↔ Last column not a pivot
- Unique solution ↔ No free variables
- Infinitely many ↔ At least one free variable

### Linear Combinations
```
b is in Span{v₁, ..., vₚ} ↔ Ax = b is consistent
where A = [v₁ ... vₚ]
```

### Linear Independence
```
{v₁, ..., vₚ} linearly independent ↔ Ax = 0 has only trivial solution
                                   ↔ Every column of A is a pivot column
```

### Solution Set Structure
```
General solution = particular solution + homogeneous solution
x = p + x_h where Ax_h = 0
```

---

**Next Unit:** Unit 2 - Matrix Algebra
