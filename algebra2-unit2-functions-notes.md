# Algebra 2 Unit 2: Functions - Comprehensive Notes

## Table of Contents
1. [Understanding Functions](#understanding-functions)
2. [Function Notation and Evaluation](#function-notation-and-evaluation)
3. [Domain and Range](#domain-and-range)
4. [Parent Functions](#parent-functions)
5. [Function Transformations](#function-transformations)
6. [Composition of Functions](#composition-of-functions)
7. [Inverse Functions](#inverse-functions)
8. [Piecewise Functions](#piecewise-functions)

---

## Understanding Functions

### What is a Function?

A **function** is a relation where each input (x-value) has exactly one output (y-value).

**Key Idea:** Every x-value maps to only ONE y-value.

**Not a function example:**
- The point (2, 3) and (2, 5) cannot both be in a function
- One input (2) maps to two different outputs (3 and 5)

**Function example:**
- (1, 3), (2, 5), (3, 5) is a function
- Each x appears only once (even though y = 5 appears twice, which is fine!)

### Vertical Line Test

**How to test if a graph is a function:**

Draw vertical lines across the graph. If any vertical line touches the graph more than once, it's NOT a function.

**Examples:**
- Line y = 2x + 1: Function ✓ (any vertical line touches once)
- Circle x² + y² = 25: NOT a function ✗ (vertical line through x = 3 touches twice)
- Parabola y = x²: Function ✓

### Relations vs Functions

**Relation:** Any set of ordered pairs

**Function:** A relation where each input has exactly ONE output

**Example 1:** Is {(1,2), (3,4), (5,6), (7,4)} a function?

YES - each x-value (1, 3, 5, 7) appears only once

**Example 2:** Is {(2,3), (4,5), (2,7)} a function?

NO - the input 2 has two different outputs (3 and 7)

---

## Function Notation and Evaluation

### Function Notation

Instead of y = 2x + 1, we write: **f(x) = 2x + 1**

**Read as:** "f of x equals 2x plus 1"

**f(x)** is just another way to write y. It emphasizes that y depends on x.

**Important:** f(x) does NOT mean f times x!

### Evaluating Functions

**Evaluating** means finding the output for a specific input.

**Example 3:** Given f(x) = 3x - 5, find f(4)

```
f(4) = 3(4) - 5
f(4) = 12 - 5
f(4) = 7
```

**Interpretation:** When x = 4, the output is 7. The point (4, 7) is on the graph.

**Example 4:** Given g(x) = x² + 2x - 1, find g(-3)

```
g(-3) = (-3)² + 2(-3) - 1
g(-3) = 9 - 6 - 1
g(-3) = 2
```

**Example 5:** Given h(x) = 2x + 1, find h(a + 2)

```
h(a + 2) = 2(a + 2) + 1
h(a + 2) = 2a + 4 + 1
h(a + 2) = 2a + 5
```

**Key:** Replace every x with (a + 2), including parentheses!

### Multiple Function Names

Functions can have different names: f(x), g(x), h(x), F(t), etc.

The letter tells us which function, and what's in parentheses is the input variable.

**Example 6:** Given f(x) = x² and g(x) = 2x + 1, find:
- a) f(3)
- b) g(3)
- c) f(0)

```
a) f(3) = 3² = 9
b) g(3) = 2(3) + 1 = 7
c) f(0) = 0² = 0
```

---

## Domain and Range

### Domain

The **domain** is the set of all possible input values (x-values).

**Question to ask:** What x-values can I plug in?

### Range

The **range** is the set of all possible output values (y-values).

**Question to ask:** What y-values can the function produce?

### Finding Domain

**General Rules:**

1. **No division by zero** - Exclude values that make the denominator 0
2. **No square roots of negatives** - The expression under √ must be ≥ 0
3. **No logs of zero or negatives** - The expression inside log must be > 0

**Example 7:** Find the domain of f(x) = 1/(x - 3)

```
Cannot divide by zero, so x - 3 ≠ 0
x ≠ 3
```

**Domain:** All real numbers except 3, written as: x ∈ ℝ, x ≠ 3 or (-∞, 3) ∪ (3, ∞)

**Example 8:** Find the domain of g(x) = √(x + 5)

```
Expression under square root must be non-negative:
x + 5 ≥ 0
x ≥ -5
```

**Domain:** x ≥ -5 or [-5, ∞)

**Example 9:** Find the domain of h(x) = 1/√(x - 2)

```
Two restrictions:
1. x - 2 > 0 (can't have 0 or negative under square root)
2. Denominator can't be 0 (which is already covered)

x - 2 > 0
x > 2
```

**Domain:** x > 2 or (2, ∞)

**Example 10:** Find the domain of f(x) = x² + 3

No restrictions (no fractions, no square roots)!

**Domain:** All real numbers, ℝ or (-∞, ∞)

### Finding Range

**Strategy:** Think about what y-values the function can output.

**Example 11:** Find the range of f(x) = x²

```
x² is always non-negative (0, 1, 4, 9, ...)
The smallest value is 0 (when x = 0)
Can get arbitrarily large
```

**Range:** y ≥ 0 or [0, ∞)

**Example 12:** Find the range of g(x) = x² + 3

```
Since x² ≥ 0, we have x² + 3 ≥ 3
The smallest value is 3 (when x = 0)
```

**Range:** y ≥ 3 or [3, ∞)

**Example 13:** Find the range of h(x) = -x² + 5

```
Since x² ≥ 0, we have -x² ≤ 0
So -x² + 5 ≤ 5
The largest value is 5 (when x = 0)
```

**Range:** y ≤ 5 or (-∞, 5]

---

## Parent Functions

**Parent functions** are the simplest form of each function family.

### Common Parent Functions

| Name | Equation | Domain | Range | Key Features |
|------|----------|--------|-------|--------------|
| Linear | f(x) = x | ℝ | ℝ | Straight line through origin, slope 1 |
| Quadratic | f(x) = x² | ℝ | [0, ∞) | Parabola opening up, vertex at origin |
| Cubic | f(x) = x³ | ℝ | ℝ | S-shaped curve through origin |
| Absolute Value | f(x) = \|x\| | ℝ | [0, ∞) | V-shape, vertex at origin |
| Square Root | f(x) = √x | [0, ∞) | [0, ∞) | Half parabola on its side |
| Reciprocal | f(x) = 1/x | x ≠ 0 | y ≠ 0 | Hyperbola, asymptotes at axes |
| Exponential | f(x) = 2^x | ℝ | (0, ∞) | Rapid growth, horizontal asymptote y = 0 |

**Why learn parent functions?**

All functions in a family are transformations of the parent function!

---

## Function Transformations

Transformations change the position, size, or orientation of a graph.

### Vertical Translations (Shifts)

**f(x) + k:** Shift UP k units (if k > 0) or DOWN |k| units (if k < 0)

**Example 14:**
- f(x) = x²: parent function
- g(x) = x² + 3: shift UP 3 units
- h(x) = x² - 2: shift DOWN 2 units

**Remember:** Outside the function → vertical change

### Horizontal Translations (Shifts)

**f(x - h):** Shift RIGHT h units (if h > 0) or LEFT |h| units (if h < 0)

**IMPORTANT:** The sign is opposite what you might think!

**Example 15:**
- f(x) = x²: parent function
- g(x) = (x - 2)²: shift RIGHT 2 units
- h(x) = (x + 3)²: shift LEFT 3 units

**Remember:** Inside the function → horizontal change (opposite sign!)

### Reflections

**-f(x):** Reflect over the x-axis (flip vertically)

**f(-x):** Reflect over the y-axis (flip horizontally)

**Example 16:**
- f(x) = x²: opens up
- g(x) = -x²: opens down (reflected over x-axis)

**Example 17:**
- f(x) = √x: goes right from origin
- g(x) = √(-x): goes left from origin (reflected over y-axis)

### Vertical Stretches and Compressions

**a·f(x):**
- If |a| > 1: Vertical stretch (taller, narrower)
- If 0 < |a| < 1: Vertical compression (shorter, wider)

**Example 18:**
- f(x) = x²
- g(x) = 3x²: stretched vertically by factor of 3 (narrower parabola)
- h(x) = (1/2)x²: compressed vertically by factor of 1/2 (wider parabola)

### Horizontal Stretches and Compressions

**f(b·x):**
- If |b| > 1: Horizontal compression (narrower)
- If 0 < |b| < 1: Horizontal stretch (wider)

**Example 19:**
- f(x) = x²
- g(x) = (2x)²: compressed horizontally (narrower)
- h(x) = ((1/2)x)²: stretched horizontally (wider)

### Combining Transformations

**General form:** f(x) = a·f(b(x - h)) + k

- **a:** Vertical stretch/compression and reflection
- **b:** Horizontal stretch/compression and reflection
- **h:** Horizontal shift
- **k:** Vertical shift

**Order of transformations:**
1. Horizontal shift
2. Horizontal stretch/compression
3. Horizontal reflection
4. Vertical stretch/compression
5. Vertical reflection
6. Vertical shift

**Example 20:** Describe the transformation: g(x) = -2(x + 1)² + 3

Starting from f(x) = x²:
1. Shift LEFT 1 unit: (x + 1)²
2. Stretch vertically by 2: 2(x + 1)²
3. Reflect over x-axis: -2(x + 1)²
4. Shift UP 3 units: -2(x + 1)² + 3

**Example 21:** Write the equation for x² shifted right 4 units and down 5 units.

```
Start: f(x) = x²
Right 4: (x - 4)²
Down 5: (x - 4)² - 5
```

**Answer:** g(x) = (x - 4)² - 5

---

## Composition of Functions

**Composition** means putting one function inside another.

**Notation:** (f ∘ g)(x) = f(g(x))

**Read as:** "f composed with g of x" or "f of g of x"

**Think:** Evaluate g first, then use that result as input to f

### Evaluating Compositions

**Example 22:** Given f(x) = 2x + 1 and g(x) = x², find f(g(3))

```
Step 1: Find g(3)
g(3) = 3² = 9

Step 2: Find f(9)
f(9) = 2(9) + 1 = 19
```

**Answer:** f(g(3)) = 19

**Example 23:** Given f(x) = x² and g(x) = x + 3, find:
a) (f ∘ g)(x)
b) (g ∘ f)(x)

```
a) (f ∘ g)(x) = f(g(x))
              = f(x + 3)
              = (x + 3)²
              = x² + 6x + 9

b) (g ∘ f)(x) = g(f(x))
              = g(x²)
              = x² + 3
```

**Important:** Generally f(g(x)) ≠ g(f(x))! Composition is NOT commutative.

**Example 24:** Given f(x) = √x and g(x) = x - 5, find the domain of (f ∘ g)(x)

```
(f ∘ g)(x) = f(g(x)) = f(x - 5) = √(x - 5)

For square root, need: x - 5 ≥ 0
x ≥ 5
```

**Domain:** x ≥ 5 or [5, ∞)

### Decomposing Functions

Sometimes we need to write a function as a composition.

**Example 25:** Write h(x) = (2x + 1)³ as a composition of two functions.

```
Let g(x) = 2x + 1 (inside function)
Let f(x) = x³ (outside function)

Then h(x) = f(g(x)) = (g(x))³ = (2x + 1)³
```

---

## Inverse Functions

An **inverse function** "undoes" what the original function does.

**Notation:** f⁻¹(x) (read as "f inverse of x")

**IMPORTANT:** f⁻¹(x) does NOT mean 1/f(x)!

### Understanding Inverses

If f(a) = b, then f⁻¹(b) = a

**Example:** If f(2) = 7, then f⁻¹(7) = 2

**Think:** The inverse swaps inputs and outputs.

### Finding Inverse Functions

**Steps:**
1. Replace f(x) with y
2. Swap x and y
3. Solve for y
4. Replace y with f⁻¹(x)

**Example 26:** Find the inverse of f(x) = 2x + 3

```
Step 1: y = 2x + 3
Step 2: x = 2y + 3 (swap x and y)
Step 3: Solve for y:
        x - 3 = 2y
        (x - 3)/2 = y
Step 4: f⁻¹(x) = (x - 3)/2
```

**Check:** f(f⁻¹(x)) should equal x
```
f(f⁻¹(x)) = f((x-3)/2) = 2((x-3)/2) + 3 = (x-3) + 3 = x ✓
```

**Example 27:** Find the inverse of g(x) = (x + 1)³

```
y = (x + 1)³
x = (y + 1)³         (swap)
∛x = y + 1           (cube root both sides)
∛x - 1 = y           (subtract 1)

g⁻¹(x) = ∛x - 1
```

**Example 28:** Find the inverse of h(x) = 1/(x - 2)

```
y = 1/(x - 2)
x = 1/(y - 2)        (swap)
x(y - 2) = 1         (multiply both sides by (y-2))
xy - 2x = 1
xy = 1 + 2x
y = (1 + 2x)/x

h⁻¹(x) = (1 + 2x)/x or h⁻¹(x) = 1/x + 2
```

### Horizontal Line Test

**A function has an inverse if and only if it passes the horizontal line test.**

If any horizontal line touches the graph more than once, the function does NOT have an inverse (it's not one-to-one).

**Examples:**
- f(x) = x: Has inverse ✓ (one-to-one)
- f(x) = x²: NO inverse ✗ (not one-to-one, fails horizontal line test)
- f(x) = x³: Has inverse ✓ (one-to-one)

### Domain and Range of Inverses

**Key Property:**
- Domain of f = Range of f⁻¹
- Range of f = Domain of f⁻¹

**Example 29:** If f(x) has domain [0, 5] and range [2, 10], what are the domain and range of f⁻¹(x)?

**Answer:**
- Domain of f⁻¹: [2, 10]
- Range of f⁻¹: [0, 5]

### Graphs of Inverse Functions

**The graph of f⁻¹ is the reflection of f over the line y = x.**

Points (a, b) on f become points (b, a) on f⁻¹.

**Example 30:** If (3, 7) is on the graph of f, what point is on the graph of f⁻¹?

**Answer:** (7, 3)

---

## Piecewise Functions

A **piecewise function** is defined by different formulas on different parts of the domain.

### Notation

Example:
```
f(x) = { x²      if x < 0
       { 2x + 1  if x ≥ 0
```

This means:
- When x is negative, use f(x) = x²
- When x is 0 or positive, use f(x) = 2x + 1

### Evaluating Piecewise Functions

**Example 31:** Given the function above, find:
a) f(-2)
b) f(0)
c) f(3)

```
a) f(-2): Since -2 < 0, use f(x) = x²
   f(-2) = (-2)² = 4

b) f(0): Since 0 ≥ 0, use f(x) = 2x + 1
   f(0) = 2(0) + 1 = 1

c) f(3): Since 3 ≥ 0, use f(x) = 2x + 1
   f(3) = 2(3) + 1 = 7
```

**Example 32:** Evaluate g(x) at x = -1, 2, and 5:
```
g(x) = { -x       if x < 0
       { x²       if 0 ≤ x < 3
       { 2x - 1   if x ≥ 3
```

```
g(-1): Since -1 < 0, use -x
       g(-1) = -(-1) = 1

g(2): Since 0 ≤ 2 < 3, use x²
      g(2) = 2² = 4

g(5): Since 5 ≥ 3, use 2x - 1
      g(5) = 2(5) - 1 = 9
```

### Absolute Value as a Piecewise Function

The absolute value function can be written as:

```
|x| = { -x  if x < 0
      {  x  if x ≥ 0
```

**Why?**
- When x is negative, we need to flip it to make it positive: -x
- When x is positive or zero, we keep it: x

### Graphing Piecewise Functions

**Steps:**
1. Graph each piece on its specified domain
2. Use open circles for values NOT included (< or >)
3. Use closed circles for values included (≤ or ≥)
4. Check for continuity (do pieces connect?)

**Example 33:** Graph:
```
f(x) = { x + 2  if x < 1
       { -x + 4 if x ≥ 1
```

- For x < 1: Graph y = x + 2, stop at x = 1 (open circle at (1, 3))
- For x ≥ 1: Graph y = -x + 4, start at x = 1 (closed circle at (1, 3))
- The pieces connect at (1, 3) - the function is continuous!

### Real-World Piecewise Functions

**Example 34:** A parking garage charges:
- $5 for the first hour
- $3 per hour after that

Write a piecewise function for the cost C(h) where h is hours.

```
C(h) = { 5        if 0 < h ≤ 1
       { 5 + 3(h-1) if h > 1
```

Simplified:
```
C(h) = { 5       if 0 < h ≤ 1
       { 3h + 2  if h > 1
```

---

## Summary of Key Concepts

### Function Basics
- A function has exactly one output for each input
- Use vertical line test to check if a graph is a function
- f(x) is function notation, not multiplication

### Domain and Range
- Domain: all possible inputs (x-values)
- Range: all possible outputs (y-values)
- Check for restrictions: division by zero, square roots of negatives

### Transformations
- **Vertical shifts:** f(x) + k
- **Horizontal shifts:** f(x - h) (opposite sign!)
- **Reflections:** -f(x) over x-axis, f(-x) over y-axis
- **Stretches:** a·f(x) vertical, f(b·x) horizontal

### Composition
- (f ∘ g)(x) = f(g(x))
- Evaluate inside function first
- Order matters: f(g(x)) ≠ g(f(x))

### Inverses
- f⁻¹ "undoes" f
- To find: swap x and y, then solve for y
- Domain of f = Range of f⁻¹
- Graph is reflection over y = x

### Piecewise Functions
- Different formulas for different intervals
- Choose formula based on which condition x satisfies
- Check endpoints carefully (< vs ≤)

---

## Common Mistakes to Avoid

1. **Thinking f(x) means f times x** - It's function notation!
2. **Getting horizontal shift direction wrong** - f(x - 3) shifts RIGHT, not left
3. **Confusing f⁻¹(x) with 1/f(x)** - f⁻¹ is inverse, not reciprocal
4. **Forgetting order matters in composition** - f(g(x)) ≠ g(f(x))
5. **Not checking domain restrictions** - Always check for division by zero, square roots
6. **Using wrong piece of piecewise function** - Check which condition x satisfies
7. **Forgetting to swap x and y when finding inverse**

---

**Standards Covered:**
- F.IF.1: Understand function concept
- F.IF.2: Use function notation, evaluate functions
- F.IF.4: Interpret key features of functions in context
- F.IF.5: Relate domain to function graph and context
- F.IF.7: Graph functions, analyze key features
- F.IF.9: Compare properties of different functions
- F.BF.1: Write functions from descriptions
- F.BF.3: Identify effect of transformations
- F.BF.4: Find and verify inverse functions
- F.BF.5: Understand inverse relationship
