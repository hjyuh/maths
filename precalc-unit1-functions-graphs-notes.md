# Precalculus Unit 1: Functions & Graphs - Notes

## 1.1 Modeling & Equation Solving

### What is a Function?
A **function** is a relation from a set of inputs (domain) to a set of outputs (range) where each input corresponds to exactly one output.

**Notation**: If f is a function and x is in its domain, then f(x) represents the output.

**Example 1**: Is {(1,2), (2,3), (3,4), (1,5)} a function?
- No! The input 1 maps to both 2 and 5

**Example 2**: Is {(1,2), (2,2), (3,2)} a function?
- Yes! Each input maps to exactly one output (even though they're all the same)

### Tables, Graphs, and Equations
Functions can be represented in multiple ways:

**Table Representation**:
| x | f(x) |
|---|------|
| 0 | 3    |
| 1 | 5    |
| 2 | 7    |

**Graph Representation**: Plot points (x, f(x)) on coordinate plane

**Equation**: f(x) = 2x + 3

### Vertical Line Test
A graph represents a function if and only if no vertical line intersects it more than once.

---

## 1.2 & 1.3 Functions & Properties

### Domain and Range

**Domain**: The set of all possible input values (x-values)
**Range**: The set of all possible output values (y-values)

**Example 3**: For f(x) = √(x - 2)
- Domain: x ≥ 2 or [2, ∞)
- Range: y ≥ 0 or [0, ∞)

**Example 4**: For g(x) = 1/(x - 3)
- Domain: x ≠ 3 or (-∞, 3) ∪ (3, ∞)
- Range: y ≠ 0 or (-∞, 0) ∪ (0, ∞)

### Key Features of Graphs

**Intercepts**:
- **x-intercept**: Where graph crosses x-axis (set y = 0)
- **y-intercept**: Where graph crosses y-axis (set x = 0)

**Increasing/Decreasing**:
- **Increasing**: As x increases, y increases
- **Decreasing**: As x increases, y decreases
- **Constant**: y doesn't change as x changes

**Example 5**: For f(x) = x² - 4x + 3
- Decreasing on (-∞, 2)
- Increasing on (2, ∞)

**Positive/Negative**:
- **Positive**: Function values are above x-axis (f(x) > 0)
- **Negative**: Function values are below x-axis (f(x) < 0)

**Maximum and Minimum**:
- **Relative (Local) Maximum**: Highest point in a neighborhood
- **Relative (Local) Minimum**: Lowest point in a neighborhood
- **Absolute Maximum**: Highest point on entire domain
- **Absolute Minimum**: Lowest point on entire domain

**Example 6**: For f(x) = -x² + 4x - 1
- Absolute maximum at x = 2, f(2) = 3

### End Behavior
Describes what happens to f(x) as x approaches ±∞

**Notation**:
- As x → ∞, f(x) → ?
- As x → -∞, f(x) → ?

**Example 7**: For f(x) = x³
- As x → ∞, f(x) → ∞
- As x → -∞, f(x) → -∞

**Example 8**: For f(x) = -2x⁴ + 3x²
- As x → ∞, f(x) → -∞
- As x → -∞, f(x) → -∞

### Continuity and Discontinuity
A function is **continuous** if you can draw it without lifting your pencil.

**Types of Discontinuity**:
1. **Jump Discontinuity**: Function "jumps" from one value to another
2. **Removable Discontinuity**: A "hole" in the graph
3. **Infinite Discontinuity**: Vertical asymptote

**Example 9**: f(x) = 1/x has infinite discontinuity at x = 0

### Asymptotes
Lines that the graph approaches but never touches

**Vertical Asymptote**: x = a where function is undefined
**Horizontal Asymptote**: y = b as x → ±∞

**Example 10**: For f(x) = (2x + 1)/(x - 3)
- Vertical asymptote: x = 3
- Horizontal asymptote: y = 2

### Boundedness
- **Bounded above**: Has maximum value
- **Bounded below**: Has minimum value
- **Bounded**: Bounded both above and below

### Symmetry

**Even Function**: f(-x) = f(x)
- Symmetric about y-axis
- Example: f(x) = x², f(x) = cos(x)

**Odd Function**: f(-x) = -f(x)
- Symmetric about origin
- Example: f(x) = x³, f(x) = sin(x)

**Example 11**: Is f(x) = x⁴ - 2x² even, odd, or neither?
- f(-x) = (-x)⁴ - 2(-x)² = x⁴ - 2x² = f(x)
- Even function!

### Piecewise Functions
Functions defined by different formulas on different parts of domain

**Example 12**:
```
f(x) = { x + 2,  if x < 0
       { x²,     if x ≥ 0
```

- f(-3) = -3 + 2 = -1
- f(2) = 2² = 4

---

## 1.4 Combination & Composition of Functions

### Operations on Functions

For functions f and g:

**(f + g)(x) = f(x) + g(x)** - Addition
**(f - g)(x) = f(x) - g(x)** - Subtraction
**(f · g)(x) = f(x) · g(x)** - Multiplication
**(f/g)(x) = f(x)/g(x)**, g(x) ≠ 0 - Division

**Example 13**: Given f(x) = x² and g(x) = x + 3
- (f + g)(x) = x² + x + 3
- (f · g)(x) = x²(x + 3) = x³ + 3x²
- (f/g)(x) = x²/(x + 3), x ≠ -3

### Domain of Combined Functions
The domain of (f ⊕ g) is the intersection of the domains of f and g.
For (f/g), also exclude where g(x) = 0.

**Example 14**: If f(x) = √x and g(x) = √(4 - x)
- Domain of f: [0, ∞)
- Domain of g: (-∞, 4]
- Domain of (f + g): [0, 4]

### Composition of Functions

**(f ∘ g)(x) = f(g(x))**
- Read as "f composed with g of x"
- Apply g first, then f

**Example 15**: If f(x) = x² and g(x) = x + 1
- (f ∘ g)(x) = f(g(x)) = f(x + 1) = (x + 1)²
- (g ∘ f)(x) = g(f(x)) = g(x²) = x² + 1

Note: f ∘ g ≠ g ∘ f in general!

**Example 16**: Find (f ∘ g)(3) if f(x) = 2x - 1 and g(x) = x²
- g(3) = 9
- f(9) = 2(9) - 1 = 17

### Decomposition of Functions
Break a complex function into simpler parts

**Example 17**: If h(x) = √(x² + 1), find f and g such that h = f ∘ g
- Let g(x) = x² + 1
- Let f(x) = √x
- Then (f ∘ g)(x) = f(x² + 1) = √(x² + 1) ✓

### Domain of Composite Functions
For (f ∘ g)(x):
1. x must be in domain of g
2. g(x) must be in domain of f

**Example 18**: If f(x) = 1/x and g(x) = x - 2
- Domain of g: all real numbers
- Need g(x) ≠ 0, so x ≠ 2
- Domain of (f ∘ g): (-∞, 2) ∪ (2, ∞)

---

## 1.5 Inverse Functions

### What is an Inverse Function?
If f is a one-to-one function with domain A and range B, then its inverse f⁻¹ has domain B and range A, satisfying:
- f⁻¹(f(x)) = x for all x in A
- f(f⁻¹(x)) = x for all x in B

**One-to-One Test**: Each output corresponds to exactly one input
- **Horizontal Line Test**: Graph passes if no horizontal line intersects it more than once

**Example 19**: Is f(x) = x² one-to-one?
- No! f(2) = f(-2) = 4
- Fails horizontal line test

### Finding Inverse Functions

**Steps**:
1. Replace f(x) with y
2. Swap x and y
3. Solve for y
4. Replace y with f⁻¹(x)

**Example 20**: Find inverse of f(x) = 2x + 3
1. y = 2x + 3
2. x = 2y + 3
3. x - 3 = 2y → y = (x - 3)/2
4. f⁻¹(x) = (x - 3)/2

**Verification**:
- f(f⁻¹(x)) = f((x-3)/2) = 2((x-3)/2) + 3 = x - 3 + 3 = x ✓
- f⁻¹(f(x)) = f⁻¹(2x+3) = ((2x+3)-3)/2 = 2x/2 = x ✓

**Example 21**: Find inverse of f(x) = (x + 1)/(x - 1), x ≠ 1
1. y = (x + 1)/(x - 1)
2. x = (y + 1)/(y - 1)
3. x(y - 1) = y + 1
4. xy - x = y + 1
5. xy - y = x + 1
6. y(x - 1) = x + 1
7. y = (x + 1)/(x - 1)

f⁻¹(x) = (x + 1)/(x - 1) - This function is its own inverse!

### Domain and Range of Inverse Functions
- Domain of f⁻¹ = Range of f
- Range of f⁻¹ = Domain of f

**Example 22**: If f(x) = √(x - 2)
- Domain of f: [2, ∞)
- Range of f: [0, ∞)
- Domain of f⁻¹: [0, ∞)
- Range of f⁻¹: [2, ∞)

To find f⁻¹:
- y = √(x - 2)
- x = √(y - 2)
- x² = y - 2
- y = x² + 2
- f⁻¹(x) = x² + 2, x ≥ 0

### Restricting Domain
If a function is not one-to-one, we can restrict its domain to make it invertible.

**Example 23**: f(x) = x² is not one-to-one, but:
- If we restrict to x ≥ 0, then f⁻¹(x) = √x
- If we restrict to x ≤ 0, then f⁻¹(x) = -√x

---

## 1.6 Graphical Transformations

### Vertical Translations
**f(x) + k**: Shift graph k units vertically
- k > 0: shift up
- k < 0: shift down

**Example 24**:
- f(x) = x²
- f(x) + 3 = x² + 3 (shift up 3)
- f(x) - 2 = x² - 2 (shift down 2)

### Horizontal Translations
**f(x - h)**: Shift graph h units horizontally
- h > 0: shift right
- h < 0: shift left

**Example 25**:
- f(x) = x²
- f(x - 2) = (x - 2)² (shift right 2)
- f(x + 3) = (x + 3)² (shift left 3)

### Vertical Stretches and Compressions
**a · f(x)**: Multiply output by a
- |a| > 1: vertical stretch (taller)
- 0 < |a| < 1: vertical compression (shorter)

**Example 26**:
- f(x) = x²
- 2f(x) = 2x² (stretch by factor of 2)
- (1/2)f(x) = (1/2)x² (compress by factor of 1/2)

### Horizontal Stretches and Compressions
**f(bx)**:
- |b| > 1: horizontal compression (narrower)
- 0 < |b| < 1: horizontal stretch (wider)

**Example 27**:
- f(x) = x²
- f(2x) = (2x)² = 4x² (compress horizontally)
- f(x/2) = (x/2)² = x²/4 (stretch horizontally)

### Reflections

**-f(x)**: Reflection across x-axis
**f(-x)**: Reflection across y-axis

**Example 28**:
- f(x) = √x
- -f(x) = -√x (reflect across x-axis)
- f(-x) = √(-x) (reflect across y-axis, domain changes!)

### Combined Transformations

**Order matters!** Apply transformations in this order:
1. Horizontal shifts/stretches
2. Reflections
3. Vertical shifts/stretches

**Example 29**: Graph g(x) = -2(x - 3)² + 1
Starting with f(x) = x²:
1. Shift right 3: (x - 3)²
2. Stretch vertically by 2: 2(x - 3)²
3. Reflect across x-axis: -2(x - 3)²
4. Shift up 1: -2(x - 3)² + 1

**Example 30**: Describe transformations from f(x) = |x| to g(x) = -|x + 2| - 3
1. Shift left 2: |x + 2|
2. Reflect across x-axis: -|x + 2|
3. Shift down 3: -|x + 2| - 3

### Transformations of Inverse Functions
The graph of f⁻¹ is the reflection of the graph of f across the line y = x.

---

## 1.7 Modeling with Functions

### Creating Mathematical Models

**Steps**:
1. Define variables
2. Identify constraints
3. Write function that models situation
4. Analyze function to answer questions

**Example 31**: A rectangle has perimeter 100 feet. Express area as function of width.
- Let w = width, l = length
- Constraint: 2w + 2l = 100
- Solve for l: l = 50 - w
- Area: A(w) = w · l = w(50 - w) = 50w - w²
- Domain: 0 < w < 50

**Example 32**: A box with square base and open top must have volume 32 ft³. Express surface area as function of base side length.
- Let x = side of base, h = height
- Constraint: x²h = 32
- Solve for h: h = 32/x²
- Surface area: S = x² + 4xh (base + 4 sides)
- S(x) = x² + 4x(32/x²) = x² + 128/x
- Domain: x > 0

### Optimization Problems
Find maximum or minimum values of a function

**Example 33**: From Example 31, what dimensions maximize area?
- A(w) = 50w - w² = -w² + 50w
- This is a parabola opening downward
- Maximum at vertex: w = -b/(2a) = -50/(2(-1)) = 25
- Maximum area: A(25) = 50(25) - 25² = 625 ft²
- Dimensions: 25 ft × 25 ft (square!)

### Piecewise Models

**Example 34**: A phone plan charges $30/month for up to 2GB data, then $10 per additional GB (or fraction thereof).
```
C(x) = { 30,              if 0 ≤ x ≤ 2
       { 30 + 10⌈x-2⌉,    if x > 2
```
where ⌈ ⌉ is ceiling function

- C(1.5) = $30
- C(3.2) = 30 + 10⌈1.2⌉ = 30 + 10(2) = $50

### Calculator Techniques

**Graphing**: Use calculator to visualize functions
**Finding Zeros**: Use zero/root finder
**Finding Intersections**: Graph both functions, find intersection
**Finding Max/Min**: Use maximum/minimum finder

**Example 35**: Solve x³ - 2x - 5 = 0 using calculator
- Graph y = x³ - 2x - 5
- Use zero finder
- x ≈ 2.0946

**Example 36**: Find maximum of f(x) = x³ - 6x² + 9x + 2 on [0, 4]
- Graph function
- Use maximum finder on interval
- Maximum at x = 1, f(1) = 6

### Regression and Data Modeling
Use calculator to fit functions to data

**Types of Regression**:
- Linear: y = ax + b
- Quadratic: y = ax² + bx + c
- Exponential: y = ab^x
- Power: y = ax^b

**Example 37**: Given data:
| x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| y | 3 | 7 | 13 | 21 | 31 |

Using quadratic regression: y ≈ 1.2x² + 0.4x + 1.4

---

## Summary of Key Concepts

1. **Functions**: Each input → exactly one output
2. **Domain & Range**: Input set and output set
3. **Key Features**: Intercepts, increasing/decreasing, max/min, asymptotes
4. **Operations**: Add, subtract, multiply, divide functions
5. **Composition**: (f ∘ g)(x) = f(g(x))
6. **Inverses**: Undo the function; reflect across y = x
7. **Transformations**: Shifts, stretches, compressions, reflections
8. **Modeling**: Create functions to represent real-world situations

## Important Formulas

- **Vertex of parabola**: x = -b/(2a) for f(x) = ax² + bx + c
- **Composition**: (f ∘ g)(x) = f(g(x))
- **Inverse verification**: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x
- **Even function**: f(-x) = f(x)
- **Odd function**: f(-x) = -f(x)
