# Algebra 2 Unit 1: Foundations - Comprehensive Notes

## Table of Contents
1. [Linear Equations and Inequalities](#linear-equations-and-inequalities)
2. [Absolute Value Equations and Inequalities](#absolute-value-equations-and-inequalities)
3. [Literal Equations](#literal-equations)
4. [Systems of Linear Equations](#systems-of-linear-equations)
5. [Matrices](#matrices)
6. [Linear Programming](#linear-programming)
7. [Linear Regression](#linear-regression)

---

## Linear Equations and Inequalities

### One-Variable Linear Equations

A **linear equation in one variable** has the form: ax + b = c

**Steps to Solve:**
1. Simplify both sides (combine like terms, distribute)
2. Get all variable terms on one side
3. Get all constant terms on the other side
4. Divide by the coefficient of the variable

**Example 1:** Solve 3x + 7 = 22

```
3x + 7 = 22
3x = 15          (subtract 7 from both sides)
x = 5            (divide both sides by 3)
```

**Check:** 3(5) + 7 = 15 + 7 = 22 ✓

**Example 2:** Solve 2(x - 4) + 5 = 3x - 1

```
2(x - 4) + 5 = 3x - 1
2x - 8 + 5 = 3x - 1      (distribute the 2)
2x - 3 = 3x - 1          (combine like terms)
-3 = x - 1               (subtract 2x from both sides)
-2 = x                   (add 1 to both sides)
```

**Solution:** x = -2

### One-Variable Linear Inequalities

Linear inequalities use <, >, ≤, or ≥ instead of =

**Important Rule:** When you multiply or divide by a negative number, **flip the inequality sign**!

**Example 3:** Solve 2x + 5 < 13

```
2x + 5 < 13
2x < 8           (subtract 5 from both sides)
x < 4            (divide both sides by 2)
```

**Solution:** x < 4 (all numbers less than 4)

**Example 4:** Solve -3x + 7 ≥ 16

```
-3x + 7 ≥ 16
-3x ≥ 9          (subtract 7 from both sides)
x ≤ -3           (divide by -3, FLIP the sign!)
```

**Solution:** x ≤ -3

**Compound Inequalities**

**"And" inequalities:** Both conditions must be true
- Example: -3 < x < 5 means x is between -3 and 5

**"Or" inequalities:** At least one condition must be true
- Example: x < -2 OR x > 3

**Example 5:** Solve -4 ≤ 2x + 6 < 10

```
-4 ≤ 2x + 6 < 10
-10 ≤ 2x < 4         (subtract 6 from all parts)
-5 ≤ x < 2           (divide all parts by 2)
```

**Solution:** -5 ≤ x < 2 (x is between -5 and 2, including -5)

### Two-Variable Linear Equations

The standard form is: **Ax + By = C**

The slope-intercept form is: **y = mx + b**
- m is the slope
- b is the y-intercept

**Example 6:** Convert 3x + 2y = 12 to slope-intercept form

```
3x + 2y = 12
2y = -3x + 12        (subtract 3x from both sides)
y = -3/2 x + 6       (divide by 2)
```

**Result:** Slope = -3/2, y-intercept = 6

**Finding Slope:**

Given two points (x₁, y₁) and (x₂, y₂):

**m = (y₂ - y₁)/(x₂ - x₁)**

**Example 7:** Find the slope through (2, 5) and (6, 13)

```
m = (13 - 5)/(6 - 2) = 8/4 = 2
```

**Slope = 2**

**Writing Equations:**

**Point-Slope Form:** y - y₁ = m(x - x₁)

**Example 8:** Write the equation of a line with slope 3 passing through (1, 4)

```
y - 4 = 3(x - 1)
y - 4 = 3x - 3
y = 3x + 1
```

---

## Absolute Value Equations and Inequalities

### Understanding Absolute Value

**|x|** = the distance from x to 0 on the number line (always positive or zero)

**Key Concept:** |x| = a means x = a OR x = -a

**Example 9:** Solve |x| = 7

```
x = 7  OR  x = -7
```

**Solutions:** x = 7 or x = -7

### Absolute Value Equations

**General Form:** |ax + b| = c

**Steps:**
1. Isolate the absolute value expression
2. Set up two equations: ax + b = c and ax + b = -c
3. Solve both equations

**Example 10:** Solve |2x - 3| = 9

```
Case 1: 2x - 3 = 9        Case 2: 2x - 3 = -9
        2x = 12                   2x = -6
        x = 6                     x = -3
```

**Solutions:** x = 6 or x = -3

**Example 11:** Solve |3x + 1| + 4 = 10

```
|3x + 1| + 4 = 10
|3x + 1| = 6              (subtract 4 first!)

Case 1: 3x + 1 = 6        Case 2: 3x + 1 = -6
        3x = 5                    3x = -7
        x = 5/3                   x = -7/3
```

**Solutions:** x = 5/3 or x = -7/3

### Absolute Value Inequalities

**For |x| < a:** The solution is -a < x < a (between -a and a)

**For |x| > a:** The solution is x < -a OR x > a (outside the interval)

**Example 12:** Solve |x - 2| < 5

```
-5 < x - 2 < 5
-3 < x < 7           (add 2 to all parts)
```

**Solution:** -3 < x < 7

**Example 13:** Solve |2x + 1| ≥ 7

```
2x + 1 ≤ -7  OR  2x + 1 ≥ 7
2x ≤ -8           2x ≥ 6
x ≤ -4            x ≥ 3
```

**Solution:** x ≤ -4 or x ≥ 3

---

## Literal Equations

A **literal equation** is an equation with multiple variables. Solving for one variable means isolating it.

**Example 14:** Solve for w: P = 2l + 2w

```
P = 2l + 2w
P - 2l = 2w          (subtract 2l)
(P - 2l)/2 = w       (divide by 2)
```

**Answer:** w = (P - 2l)/2 or w = P/2 - l

**Example 15:** Solve for h: A = ½bh

```
A = ½bh
2A = bh              (multiply by 2)
2A/b = h             (divide by b)
```

**Answer:** h = 2A/b

**Example 16:** Solve for r: A = P(1 + rt)

```
A = P(1 + rt)
A = P + Prt          (distribute)
A - P = Prt          (subtract P)
(A - P)/(Pt) = r     (divide by Pt)
```

**Answer:** r = (A - P)/(Pt)

---

## Systems of Linear Equations

A **system of equations** is two or more equations with the same variables.

**Solution:** The point(s) where the graphs intersect

### Method 1: Graphing

**Example 17:** Solve by graphing:
```
y = 2x + 1
y = -x + 4
```

Graph both lines and find where they intersect: (1, 3)

**Check:**
- First equation: 3 = 2(1) + 1 = 3 ✓
- Second equation: 3 = -(1) + 4 = 3 ✓

### Method 2: Substitution

**Steps:**
1. Solve one equation for one variable
2. Substitute into the other equation
3. Solve for the remaining variable
4. Substitute back to find the other variable

**Example 18:** Solve using substitution:
```
y = 3x - 5
2x + y = 10
```

**Solution:**
```
2x + (3x - 5) = 10       (substitute y = 3x - 5)
5x - 5 = 10              (combine like terms)
5x = 15                  (add 5)
x = 3                    (divide by 5)

y = 3(3) - 5 = 9 - 5 = 4
```

**Answer:** (3, 4)

**Example 19:** Solve using substitution:
```
2x + 3y = 16
x - y = 2
```

**Solution:**
```
x = y + 2                (solve second equation for x)

2(y + 2) + 3y = 16       (substitute into first equation)
2y + 4 + 3y = 16
5y + 4 = 16
5y = 12
y = 12/5

x = 12/5 + 2 = 12/5 + 10/5 = 22/5
```

**Answer:** (22/5, 12/5) or (4.4, 2.4)

### Method 3: Elimination

**Steps:**
1. Multiply equations to get opposite coefficients for one variable
2. Add equations to eliminate that variable
3. Solve for the remaining variable
4. Substitute back to find the other variable

**Example 20:** Solve using elimination:
```
3x + 2y = 12
5x - 2y = 4
```

**Solution:**
```
3x + 2y = 12
5x - 2y = 4
____________
8x = 16              (add the equations, y's cancel)
x = 2

3(2) + 2y = 12       (substitute x = 2)
6 + 2y = 12
2y = 6
y = 3
```

**Answer:** (2, 3)

**Example 21:** Solve using elimination:
```
4x + 3y = 18
2x + 5y = 16
```

**Solution:**
```
Multiply second equation by -2:
4x + 3y = 18
-4x - 10y = -32
_______________
-7y = -14            (add equations)
y = 2

4x + 3(2) = 18       (substitute y = 2)
4x + 6 = 18
4x = 12
x = 3
```

**Answer:** (3, 2)

### Special Cases

**No solution:** Parallel lines (same slope, different y-intercepts)
```
y = 2x + 3
y = 2x - 1
```

**Infinitely many solutions:** Same line (equations are multiples of each other)
```
2x + y = 4
4x + 2y = 8
```

---

## Matrices

A **matrix** is a rectangular array of numbers arranged in rows and columns.

**Notation:**
```
A = [a₁₁  a₁₂]
    [a₂₁  a₂₂]
```

**Dimensions:** rows × columns

**Example Matrix:**
```
B = [2   -1   5]
    [3    0  -2]
```

This is a 2×3 matrix (2 rows, 3 columns)

### Matrix Addition and Subtraction

**Rule:** You can only add/subtract matrices of the same dimensions. Add/subtract corresponding elements.

**Example 22:** Find A + B

```
A = [2   3]    B = [1  -2]
    [1  -4]        [5   0]

A + B = [2+1   3+(-2)]  = [3   1]
        [1+5  -4+0   ]    [6  -4]
```

**Example 23:** Find C - D

```
C = [5   2   1]    D = [3   0  -1]
    [0  -3   4]        [2   1   2]

C - D = [5-3   2-0   1-(-1)]  = [2   2   2]
        [0-2  -3-1   4-2   ]    [-2 -4   2]
```

### Scalar Multiplication

**Scalar multiplication:** Multiply every element by the scalar (a number)

**Example 24:** Find 3A

```
A = [2  -1]
    [4   0]
    [1   3]

3A = [3(2)  3(-1)]  = [6  -3]
     [3(4)  3(0) ]    [12  0]
     [3(1)  3(3) ]    [3   9]
```

### Matrix Multiplication

**Rule:** To multiply A × B, the number of columns in A must equal the number of rows in B.

If A is m×n and B is n×p, then AB is m×p.

**How to multiply:** The element in row i, column j of AB is the dot product of row i of A and column j of B.

**Example 25:** Find AB

```
A = [2   3]    B = [1   0]
    [1  -1]        [4   2]

AB = [(2)(1)+(3)(4)   (2)(0)+(3)(2)]  = [2+12   0+6]   = [14   6]
     [(1)(1)+(-1)(4)  (1)(0)+(-1)(2)]    [1-4    0-2]     [-3  -2]
```

**Example 26:** Find CD

```
C = [1   2   3]    D = [2]
                       [0]
                       [1]

CD = [(1)(2)+(2)(0)+(3)(1)] = [2+0+3] = [5]
```

This produces a 1×1 matrix!

**Important:** Matrix multiplication is NOT commutative. Usually AB ≠ BA

### Identity Matrix

The **identity matrix** I is a square matrix with 1's on the diagonal and 0's elsewhere.

```
I₂ = [1  0]    I₃ = [1  0  0]
     [0  1]         [0  1  0]
                    [0  0  1]
```

**Property:** For any matrix A, AI = IA = A

### Using Matrices to Solve Systems

A system of equations can be written as a matrix equation: **AX = B**

**Example 27:** Write as a matrix equation:
```
2x + 3y = 7
x - y = 1
```

**Matrix form:**
```
[2   3][x]   [7]
[1  -1][y] = [1]
```

Where A = [2   3], X = [x], B = [7]
          [1  -1]      [y]      [1]

To solve, we can use augmented matrices and row operations (taught in detail later in the course).

---

## Linear Programming

**Linear programming** finds the maximum or minimum value of an objective function subject to constraints.

### Key Terms

- **Objective function:** The expression to maximize or minimize (e.g., Profit = 3x + 2y)
- **Constraints:** Linear inequalities that limit the solution (e.g., x ≥ 0, y ≥ 0, x + y ≤ 10)
- **Feasible region:** The set of all points that satisfy all constraints
- **Vertices (corner points):** Points where constraint boundaries intersect

### The Corner Point Principle

**The maximum or minimum value of the objective function occurs at a vertex of the feasible region.**

### Steps to Solve

1. Graph all constraints
2. Identify the feasible region
3. Find all vertices (corner points)
4. Evaluate the objective function at each vertex
5. The largest/smallest value is the maximum/minimum

**Example 28:** Maximize P = 2x + 3y subject to:
```
x ≥ 0
y ≥ 0
x + y ≤ 6
2x + y ≤ 10
```

**Solution:**

**Step 1-2:** Graph the constraints. The feasible region is bounded by:
- x-axis (x ≥ 0)
- y-axis (y ≥ 0)
- Line x + y = 6
- Line 2x + y = 10

**Step 3:** Find vertices:
- (0, 0): origin
- (0, 6): intersection of y-axis and x + y = 6
- (4, 2): intersection of x + y = 6 and 2x + y = 10
  - Solve: x + y = 6 → y = 6 - x
  - Substitute: 2x + (6 - x) = 10 → x = 4, y = 2
- (5, 0): intersection of x-axis and 2x + y = 10

**Step 4:** Evaluate P = 2x + 3y at each vertex:
- (0, 0): P = 2(0) + 3(0) = 0
- (0, 6): P = 2(0) + 3(6) = 18
- (4, 2): P = 2(4) + 3(2) = 8 + 6 = 14
- (5, 0): P = 2(5) + 3(0) = 10

**Step 5:** Maximum is 18 at (0, 6)

**Example 29:** A company makes tables and chairs. Tables require 4 hours and chairs require 2 hours. The company has 40 hours available. Tables earn $60 profit and chairs earn $30. The company can make at most 12 items total. How many of each should they make to maximize profit?

**Solution:**

Let x = number of tables, y = number of chairs

**Objective:** Maximize P = 60x + 30y

**Constraints:**
```
x ≥ 0
y ≥ 0
4x + 2y ≤ 40  (time constraint)
x + y ≤ 12    (maximum items)
```

**Vertices:**
- (0, 0): P = 0
- (0, 12): P = 60(0) + 30(12) = 360
- (8, 4): intersection of 4x + 2y = 40 and x + y = 12
  - Solve: y = 12 - x
  - 4x + 2(12 - x) = 40
  - 4x + 24 - 2x = 40
  - 2x = 16, x = 8, y = 4
  - P = 60(8) + 30(4) = 480 + 120 = 600
- (10, 0): P = 60(10) + 30(0) = 600

**Answer:** Maximum profit of $600 occurs when making either 8 tables and 4 chairs, or 10 tables and 0 chairs.

---

## Linear Regression

**Linear regression** finds the "line of best fit" for a set of data points.

### Line of Best Fit

Given data points, the line of best fit is the line that minimizes the distance to all points.

**Form:** ŷ = a + bx
- ŷ (y-hat) is the predicted value
- a is the y-intercept
- b is the slope

### Correlation Coefficient (r)

**r** measures the strength and direction of a linear relationship.

- **r = 1:** Perfect positive correlation (all points on a line with positive slope)
- **r = -1:** Perfect negative correlation (all points on a line with negative slope)
- **r = 0:** No linear correlation
- **|r| close to 1:** Strong linear relationship
- **|r| close to 0:** Weak linear relationship

**Interpretation:**
- 0.7 < |r| ≤ 1: Strong correlation
- 0.3 < |r| ≤ 0.7: Moderate correlation
- 0 ≤ |r| ≤ 0.3: Weak correlation

### Coefficient of Determination (r²)

**r²** tells us what percentage of the variation in y is explained by the variation in x.

**Example:** If r² = 0.81, then 81% of the variation in y is explained by the linear relationship with x.

**Example 30:** The table shows hours studied (x) and test scores (y):

| Hours (x) | 1 | 2 | 3 | 4 | 5 |
|-----------|---|---|---|---|---|
| Score (y) | 65| 72| 78| 85| 90|

Using technology (calculator or software), we find:
- Line of best fit: ŷ = 59 + 6.2x
- r ≈ 0.995 (very strong positive correlation)
- r² ≈ 0.99 (99% of variation in scores explained by hours studied)

**Interpretation:**
- For each additional hour studied, the test score increases by about 6.2 points
- There is a very strong positive linear relationship
- Hours studied explains 99% of the variation in test scores

**Example 31:** Predict the test score for a student who studies 3.5 hours.

```
ŷ = 59 + 6.2(3.5)
ŷ = 59 + 21.7
ŷ = 80.7
```

**Prediction:** About 81 points

### Extrapolation vs. Interpolation

- **Interpolation:** Making predictions within the range of data (safer)
- **Extrapolation:** Making predictions outside the range of data (less reliable)

In Example 30, predicting for x = 3.5 is interpolation (within 1 to 5).
Predicting for x = 10 would be extrapolation (outside our data range).

### Residuals

A **residual** is the difference between the actual y-value and the predicted ŷ-value.

**Residual = y - ŷ**

**Example:** If actual score is 78 and predicted score is 77.6:
Residual = 78 - 77.6 = 0.4

**Residual plots** help determine if a linear model is appropriate:
- Random scatter → linear model is appropriate
- Pattern → linear model may not be appropriate

---

## Summary of Key Formulas

### Linear Equations
- Slope: m = (y₂ - y₁)/(x₂ - x₁)
- Slope-intercept form: y = mx + b
- Point-slope form: y - y₁ = m(x - x₁)
- Standard form: Ax + By = C

### Absolute Value
- |ax + b| = c → ax + b = c or ax + b = -c
- |x| < a → -a < x < a
- |x| > a → x < -a or x > a

### Matrix Dimensions
- A (m × n) + B (m × n) = C (m × n)
- A (m × n) × B (n × p) = C (m × p)

### Linear Regression
- Line of best fit: ŷ = a + bx
- Correlation coefficient: r (measures strength and direction)
- Coefficient of determination: r² (proportion of variation explained)

---

## Common Mistakes to Avoid

1. **Forgetting to flip the inequality sign** when multiplying/dividing by a negative number
2. **Not isolating absolute value** before splitting into two cases
3. **Confusing matrix dimensions** - remember rows × columns
4. **Thinking AB = BA for matrices** - matrix multiplication is NOT commutative
5. **Forgetting to check all vertices** in linear programming problems
6. **Extrapolating too far** beyond the data range in regression
7. **Mixing up slope and y-intercept** when writing equations
8. **Not distributing negative signs** properly in equations

---

**Standards Covered:**
- A.REI.1: Explain steps in solving equations
- A.REI.3: Solve linear equations and inequalities
- A.REI.5: Prove systems have no, one, or infinite solutions
- A.REI.6: Solve systems algebraically
- A.REI.10: Understand that graph represents solution set
- A.REI.11: Graph linear inequalities, find feasible region
- A.REI.12: Graph solution set to system of inequalities
- N.VM.6: Use matrices to represent and manipulate data
- N.VM.7: Multiply matrices
- N.VM.8: Add, subtract, and multiply matrices
- S.ID.6: Represent data with linear models
- S.ID.7: Interpret slope and intercept
- S.ID.8: Use correlation coefficient to assess fit
- S.ID.9: Distinguish between correlation and causation
