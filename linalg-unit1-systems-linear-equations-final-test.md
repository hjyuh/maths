# Linear Algebra - Unit 1: Systems of Linear Equations - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100 (105 with bonus)**

---

## Instructions
- Show all work for full credit
- Write matrices clearly with brackets
- Use proper mathematical notation
- Simplify all answers
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

**Choose the best answer for each question.**

1. Which of the following is NOT a linear equation?
   - A) 2x + 3y - z = 5
   - B) x² + y = 4
   - C) x - 2y + 3z = 0
   - D) 4x + 5y = 7

2. The augmented matrix [1 2 3 | 4; 0 0 0 | 0; 0 0 1 | 5] is in:
   - A) Reduced row echelon form
   - B) Row echelon form
   - C) Neither form
   - D) Both forms

3. If a system of linear equations has more variables than equations, which statement is true?
   - A) The system must be consistent
   - B) The system must be inconsistent
   - C) If consistent, there are infinitely many solutions
   - D) The system must have a unique solution

4. For the homogeneous system Ax = 0, which statement is always true?
   - A) The system has no solution
   - B) The system has only the trivial solution
   - C) The system is consistent
   - D) The system has infinitely many solutions

5. The vectors [1, 2]ᵀ and [2, 4]ᵀ are:
   - A) Linearly independent
   - B) Linearly dependent
   - C) Orthogonal
   - D) Cannot be determined

6. If the RREF of an augmented matrix has a pivot in the last column, then:
   - A) The system is consistent with unique solution
   - B) The system is consistent with infinitely many solutions
   - C) The system is inconsistent
   - D) More information is needed

7. The solution set of Ax = b is obtained by translating the solution set of Ax = 0. This statement is:
   - A) Always true
   - B) True only when Ax = b is consistent
   - C) Never true
   - D) True only when b = 0

8. Which row operation is NOT elementary?
   - A) Multiply row 1 by 5
   - B) Swap rows 2 and 3
   - C) Replace row 1 by row 1 + row 2
   - D) Multiply row 1 by 0

9. If b is in Span{v₁, v₂, v₃}, then:
   - A) b = v₁ + v₂ + v₃
   - B) The equation x₁v₁ + x₂v₂ + x₃v₃ = b has a solution
   - C) {v₁, v₂, v₃} is linearly independent
   - D) b is the zero vector

10. The columns of a 3 × 5 matrix:
    - A) Must be linearly independent
    - B) Must be linearly dependent
    - C) Span all of ℝ³
    - D) Form a basis for ℝ³

---

## Part 2: Short Answer (40 points, 5 points each)

**Show all work. Simplify your answers.**

11. Solve the system using elimination:
    x + y = 5
    2x - y = 4

12. Perform the row operation R₂ - 3R₁ on the matrix:
    [1  2  3 | 4]
    [3  7  8 | 13]

13. Determine if the matrix is in reduced row echelon form. If not, explain why.
    [1  0  2 | 3]
    [0  1  4 | 5]
    [0  0  0 | 0]

14. Express the solution set in parametric vector form:
    x₁ + 2x₂ + 3x₃ = 6

15. Compute Ax where A = [1  2; 3  4] and x = [2; 1]

16. Determine if b = [3, 7]ᵀ is in Span{[1, 2]ᵀ, [2, 3]ᵀ}.

17. Solve the homogeneous system:
    x + 2y - z = 0
    2x + 4y - 2z = 0

18. Determine if the vectors [1, 2]ᵀ and [3, 6]ᵀ are linearly independent.

---

## Part 3: Free Response (30 points)

**Show all work and explain your reasoning. Partial credit will be awarded.**

### Problem 19 (10 points)

Use Gauss-Jordan elimination to solve the system:
```
x + 2y + z = 4
2x + 5y + 4z = 13
x + 3y + 5z = 14
```

a) Write the augmented matrix. (2 points)

b) Reduce to RREF, showing all row operations. (6 points)

c) Write the solution. (2 points)

---

### Problem 20 (10 points)

Consider the vectors:
```
v₁ = [1, 2, 1]ᵀ
v₂ = [2, 3, 4]ᵀ
v₃ = [3, 5, 5]ᵀ
```

a) Form the matrix A = [v₁ v₂ v₃] and row reduce to determine if the vectors are linearly independent. (6 points)

b) If the vectors are linearly dependent, find a dependence relation. (4 points)

---

### Problem 21 (10 points)

Solve the system and express the answer in parametric vector form:
```
x₁ + 2x₂ - x₃ + x₄ = 5
2x₁ + 5x₂ + x₃ + 3x₄ = 13
```

Show all steps clearly.

---

## Bonus (5 points)

**Bonus Problem:** Prove that if {v₁, v₂} is linearly independent and v₃ is in Span{v₁, v₂}, then {v₁, v₂, v₃} is linearly dependent.

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **B) x² + y = 4**
   - Contains x² term, making it nonlinear

2. **C) Neither form**
   - Violates REF because row 3 has a pivot to the left of row 2's pivot

3. **C) If consistent, there are infinitely many solutions**
   - More variables than equations → free variables if consistent

4. **C) The system is consistent**
   - x = 0 is always a solution to Ax = 0

5. **B) Linearly dependent**
   - [2, 4]ᵀ = 2[1, 2]ᵀ

6. **C) The system is inconsistent**
   - Pivot in last column represents 0 = nonzero number

7. **B) True only when Ax = b is consistent**
   - Only consistent systems have solution sets

8. **D) Multiply row 1 by 0**
   - Elementary operations require nonzero scalars

9. **B) The equation x₁v₁ + x₂v₂ + x₃v₃ = b has a solution**
   - Definition of span

10. **B) Must be linearly dependent**
    - More vectors (5) than dimension (3)

---

## Part 2: Short Answer

11. **Answer: (3, 2)**
    ```
    x + y = 5
    2x - y = 4

    Add equations: 3x = 9 → x = 3
    Substitute: 3 + y = 5 → y = 2
    ```

12. **Answer:**
    ```
    [1  2  3 | 4]
    [0  1 -1 | 1]

    Work: R₂ - 3R₁ = [3-3, 7-6, 8-9 | 13-12]
                   = [0, 1, -1 | 1]
    ```

13. **Answer: Yes, it is in RREF**
    ```
    All conditions satisfied:
    - In REF form
    - Each pivot is 1
    - Each pivot is only nonzero entry in its column
    ```

14. **Answer:**
    ```
    x₁ = 6 - 2x₂ - 3x₃

    Let x₂ = s, x₃ = t:

    x = [6]     [-2]     [-3]
        [0]  + s[ 1]  + t[ 0]
        [0]     [ 0]     [ 1]
    ```

15. **Answer: [4, 10]ᵀ**
    ```
    Ax = [1  2][2]
         [3  4][1]

       = 2[1] + 1[2] = [2 + 2] = [ 4]
          [3]    [4]   [6 + 4]   [10]
    ```

16. **Answer: Yes**
    ```
    Set up: c₁[1, 2]ᵀ + c₂[2, 3]ᵀ = [3, 7]ᵀ

    System: c₁ + 2c₂ = 3
           2c₁ + 3c₂ = 7

    Solving: c₁ = -1, c₂ = 2
    Check: -1[1, 2]ᵀ + 2[2, 3]ᵀ = [3, 7]ᵀ ✓
    ```

17. **Answer:**
    ```
    x + 2y - z = 0 → x = -2y + z
    (Second equation is 2 × first)

    Let y = s, z = t:

    x = [-2s + t]     [-2]     [1]
        [   s   ]  = s[ 1]  + t[0]
        [   t   ]     [ 0]     [1]
    ```

18. **Answer: Linearly dependent**
    ```
    [3, 6]ᵀ = 3[1, 2]ᵀ

    Therefore dependent.
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

**a) Augmented matrix (2 points)**
```
[1  2  1 | 4]
[2  5  4 | 13]
[1  3  5 | 14]
```

**b) RREF reduction (6 points)**
```
Step 1: R₂ - 2R₁, R₃ - R₁
[1  2  1 | 4]
[0  1  2 | 5]
[0  1  4 | 10]

Step 2: R₃ - R₂
[1  2  1 | 4]
[0  1  2 | 5]
[0  0  2 | 5]

Step 3: (1/2)R₃
[1  2  1 | 4]
[0  1  2 | 5]
[0  0  1 | 5/2]

Step 4: R₂ - 2R₃
[1  2  1 | 4]
[0  1  0 | 0]
[0  0  1 | 5/2]

Step 5: R₁ - R₃
[1  2  0 | 3/2]
[0  1  0 | 0]
[0  0  1 | 5/2]

Step 6: R₁ - 2R₂
[1  0  0 | 3/2]
[0  1  0 | 0]
[0  0  1 | 5/2]
```

**c) Solution (2 points)**
```
x = 3/2, y = 0, z = 5/2
```

**Grading rubric:**
- Correct augmented matrix (2 points)
- Systematic row reduction (4 points)
- Correct RREF (2 points)
- Correct solution (2 points)

---

### Problem 20 (10 points)

**a) Row reduction (6 points)**
```
A = [1  2  3]
    [2  3  5]
    [1  4  5]

R₂ - 2R₁, R₃ - R₁:
[1  2  3]
[0 -1 -1]
[0  2  2]

R₃ + 2R₂:
[1  2  3]
[0 -1 -1]
[0  0  0]
```

Only 2 pivots for 3 columns → **linearly dependent**

**b) Dependence relation (4 points)**
```
From RREF: x₁ + 2x₂ + 3x₃ = 0
          -x₂ - x₃ = 0

Let x₃ = 1:
x₂ = -1
x₁ = -2(-1) - 3(1) = -1

Dependence relation: -v₁ - v₂ + v₃ = 0
Or: v₃ = v₁ + v₂
```

**Grading rubric:**
- Forming matrix correctly (1 point)
- Row reducing correctly (3 points)
- Determining linear dependence (2 points)
- Finding dependence relation (4 points)

---

### Problem 21 (10 points)

```
Augmented matrix:
[1  2 -1  1 | 5]
[2  5  1  3 | 13]

R₂ - 2R₁:
[1  2 -1  1 | 5]
[0  1  3  1 | 3]

R₁ - 2R₂:
[1  0 -7 -1 | -1]
[0  1  3  1 | 3]

Basic variables: x₁, x₂
Free variables: x₃, x₄

From RREF:
x₁ = -1 + 7x₃ + x₄
x₂ = 3 - 3x₃ - x₄

Let x₃ = s, x₄ = t:

x = [-1]     [ 7]     [ 1]
    [ 3]  + s[-3]  + t[-1]
    [ 0]     [ 1]     [ 0]
    [ 0]     [ 0]     [ 1]

This is: x = p + su + tv
where p = [-1, 3, 0, 0]ᵀ is a particular solution
and u, v span the solution set of the homogeneous system
```

**Grading rubric:**
- Setting up augmented matrix (2 points)
- Row reducing correctly (4 points)
- Identifying free variables (1 point)
- Writing parametric form correctly (3 points)

---

## Bonus (5 points)

**Proof:**

Since v₃ is in Span{v₁, v₂}, we can write:
```
v₃ = c₁v₁ + c₂v₂ for some scalars c₁, c₂
```

Rearranging:
```
c₁v₁ + c₂v₂ - v₃ = 0
```

This is a nontrivial linear combination of v₁, v₂, v₃ that equals zero (the coefficient of v₃ is -1 ≠ 0).

Therefore, {v₁, v₂, v₃} is linearly dependent. ∎

**Grading:**
- Expressing v₃ as linear combination (2 points)
- Forming dependence relation (2 points)
- Concluding linear dependence (1 point)

---

## Grading Rubric

### Performance Levels

- **A (90-100):** Demonstrates mastery of systems, row reduction, and linear independence; clear understanding of solution sets
- **B (80-89):** Solid understanding; minor computational errors; understands main concepts
- **C (70-79):** Basic understanding; struggles with parametric forms or linear independence
- **D (60-69):** Significant gaps; difficulty with row reduction
- **F (0-59):** Does not demonstrate basic understanding

### Common Errors to Watch For

1. **Incorrect row operations**
2. **Confusing REF with RREF**
3. **Not identifying free variables correctly**
4. **Errors in parametric vector form**
5. **Confusing linear independence with span**
6. **Not checking for pivot in last column (consistency)**
7. **Arithmetic errors in back-substitution**
8. **Forgetting trivial solution for homogeneous systems**

---

**Total: _____ / 100 (_____ / 105 with bonus)**
