# Calculus 1 - Unit 3: Applications of Derivatives - Notes

## Table of Contents
1. [Curve Sketching with Derivatives](#curve-sketching-with-derivatives)
2. [Critical Points and Extrema](#critical-points-and-extrema)
3. [First Derivative Test](#first-derivative-test)
4. [Second Derivative Test](#second-derivative-test)
5. [Concavity and Inflection Points](#concavity-and-inflection-points)
6. [Optimization Problems](#optimization-problems)
7. [Related Rates](#related-rates)
8. [Linear Approximation](#linear-approximation)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Analyzing function behavior using derivatives**
- **Finding extreme values on closed intervals**
- **Solving optimization problems**
- **Solving related rates problems**
- **Using derivatives to sketch graphs**

---

## Essential Questions
- How do derivatives reveal the behavior of functions?
- What is the relationship between extrema and critical points?
- How can we use calculus to solve real-world optimization problems?
- How do we handle problems where multiple quantities are changing?

---

## Curve Sketching with Derivatives

### The Power of Derivatives

Derivatives provide crucial information about a function:
- **f'(x) > 0:** Function is increasing
- **f'(x) < 0:** Function is decreasing
- **f''(x) > 0:** Function is concave up
- **f''(x) < 0:** Function is concave down

### Example 1: Analyzing f(x) = x³ - 3x² - 9x + 5

**Step 1: Find f'(x)**
```
f'(x) = 3x² - 6x - 9
      = 3(x² - 2x - 3)
      = 3(x - 3)(x + 1)
```

**Step 2: Find critical points (where f'(x) = 0)**
```
3(x - 3)(x + 1) = 0
x = 3 or x = -1
```

**Step 3: Test intervals**
```
Interval     Test x    f'(x)     Behavior
(-∞, -1)       -2      15        Increasing
(-1, 3)         0      -9        Decreasing
(3, ∞)          4      15        Increasing
```

**Step 4: Find f''(x) for concavity**
```
f''(x) = 6x - 6 = 6(x - 1)
f''(x) = 0 when x = 1 (inflection point)
```

---

## Critical Points and Extrema

### Definitions

**Critical Point:** A point c where either:
- f'(c) = 0, or
- f'(c) does not exist

**Local Maximum:** f(c) ≥ f(x) for all x near c

**Local Minimum:** f(c) ≤ f(x) for all x near c

**Absolute (Global) Maximum:** f(c) ≥ f(x) for all x in the domain

**Absolute (Global) Minimum:** f(c) ≤ f(x) for all x in the domain

### Example 2: Finding Absolute Extrema

Find the absolute maximum and minimum of f(x) = x³ - 3x² + 1 on [0, 3]

**Step 1: Find critical points**
```
f'(x) = 3x² - 6x = 3x(x - 2)
Critical points: x = 0, x = 2
```

**Step 2: Evaluate at critical points and endpoints**
```
f(0) = 1
f(2) = 8 - 12 + 1 = -3
f(3) = 27 - 27 + 1 = 1
```

**Conclusion:**
- Absolute maximum: f(0) = f(3) = 1
- Absolute minimum: f(2) = -3

### Extreme Value Theorem

**Theorem:** If f is continuous on [a, b], then f has both an absolute maximum and an absolute minimum on [a, b].

---

## First Derivative Test

**Purpose:** Classify critical points as local maxima, minima, or neither

**Method:**
1. Find critical points (where f'(x) = 0 or DNE)
2. Test sign of f'(x) on intervals around each critical point

**Classification:**
- f' changes from + to -: **Local Maximum**
- f' changes from - to +: **Local Minimum**
- f' does not change sign: **Neither** (may be inflection point)

### Example 3: First Derivative Test

Let f(x) = x⁴ - 4x³

```
f'(x) = 4x³ - 12x² = 4x²(x - 3)

Critical points: x = 0, x = 3

Test intervals:
x < 0: f'(-1) = -16 < 0  (decreasing)
0 < x < 3: f'(1) = -8 < 0  (decreasing)
x > 3: f'(4) = 64 > 0  (increasing)

At x = 0: f' stays negative → Neither (inflection point with horizontal tangent)
At x = 3: f' changes from - to + → Local Minimum
```

---

## Second Derivative Test

**Purpose:** Use concavity to classify critical points

**Method:**
1. Find critical points where f'(c) = 0
2. Compute f''(c)

**Classification:**
- f''(c) > 0: **Local Minimum** (concave up)
- f''(c) < 0: **Local Maximum** (concave down)
- f''(c) = 0: **Test is inconclusive** (use First Derivative Test)

### Example 4: Second Derivative Test

Let f(x) = x³ - 6x² + 9x + 1

```
f'(x) = 3x² - 12x + 9 = 3(x - 1)(x - 3)
Critical points: x = 1, x = 3

f''(x) = 6x - 12

At x = 1: f''(1) = -6 < 0 → Local Maximum
At x = 3: f''(3) = 6 > 0 → Local Minimum

f(1) = 1 - 6 + 9 + 1 = 5 (local max)
f(3) = 27 - 54 + 27 + 1 = 1 (local min)
```

---

## Concavity and Inflection Points

### Concavity

**Concave Up:** f''(x) > 0 (graph curves upward, like ∪)
**Concave Down:** f''(x) < 0 (graph curves downward, like ∩)

### Inflection Points

**Definition:** A point where concavity changes

**To find inflection points:**
1. Find where f''(x) = 0 or f''(x) does not exist
2. Verify that f''(x) changes sign

### Example 5: Finding Inflection Points

Let f(x) = x⁴ - 6x² + 2

```
f'(x) = 4x³ - 12x
f''(x) = 12x² - 12 = 12(x² - 1) = 12(x - 1)(x + 1)

Possible inflection points: x = ±1

Test concavity:
x < -1: f''(-2) = 36 > 0  (concave up)
-1 < x < 1: f''(0) = -12 < 0  (concave down)
x > 1: f''(2) = 36 > 0  (concave up)

Inflection points at x = -1 and x = 1
f(-1) = 1 - 6 + 2 = -3
f(1) = 1 - 6 + 2 = -3

Points: (-1, -3) and (1, -3)
```

---

## Complete Curve Sketching

### Systematic Procedure

1. **Domain:** Find all values where f is defined
2. **Intercepts:** Find x and y intercepts
3. **Symmetry:** Check for even/odd symmetry
4. **Asymptotes:** Find vertical, horizontal, slant asymptotes
5. **First Derivative:** Find intervals of increase/decrease and local extrema
6. **Second Derivative:** Find concavity and inflection points
7. **Sketch:** Combine all information

### Example 6: Complete Analysis

Sketch f(x) = x/(x² + 1)

**Domain:** All real numbers (denominator never zero)

**Intercepts:**
- y-intercept: f(0) = 0
- x-intercept: x = 0

**Symmetry:** f(-x) = -f(x), so function is odd (symmetric about origin)

**Asymptotes:**
- Vertical: None
- Horizontal: lim[x→±∞] x/(x² + 1) = 0, so y = 0

**First Derivative:**
```
f'(x) = [(x² + 1)(1) - x(2x)]/(x² + 1)²
      = (1 - x²)/(x² + 1)²
      = (1 - x)(1 + x)/(x² + 1)²

Critical points: x = ±1

f'(x) > 0 on (-1, 1): increasing
f'(x) < 0 on (-∞, -1) and (1, ∞): decreasing

Local max at (1, 1/2)
Local min at (-1, -1/2)
```

**Second Derivative:**
```
f''(x) = 2x(x² - 3)/(x² + 1)³

Inflection points where x² - 3 = 0: x = ±√3

Concave down on (-√3, 0) and (√3, ∞)
Concave up on (-∞, -√3) and (0, √3)
```

---

## Optimization Problems

### Strategy for Optimization

1. **Understand the problem:** Draw a diagram, identify what to maximize/minimize
2. **Identify variables:** List all relevant quantities
3. **Write the objective function:** Express what you want to optimize
4. **Find constraints:** Write equations relating variables
5. **Eliminate variables:** Use constraints to express objective as function of one variable
6. **Find critical points:** Take derivative and solve f'(x) = 0
7. **Verify:** Use first or second derivative test, or check endpoints
8. **Answer the question:** Include units and context

### Example 7: Maximizing Area

A farmer has 200 meters of fence to enclose a rectangular field along a river. No fence is needed along the river. Find dimensions that maximize the area.

**Solution:**

Let x = width perpendicular to river, y = length parallel to river

**Constraint:** 2x + y = 200 (total fence)

**Objective:** Maximize A = xy

**Express in one variable:**
```
y = 200 - 2x
A(x) = x(200 - 2x) = 200x - 2x²
```

**Find critical points:**
```
A'(x) = 200 - 4x = 0
x = 50

A''(x) = -4 < 0, so x = 50 gives maximum
```

**Find dimensions:**
```
x = 50 meters
y = 200 - 2(50) = 100 meters

Maximum area = 50 × 100 = 5000 m²
```

### Example 8: Minimizing Cost

A cylindrical can must hold 500 cm³. Find the dimensions that minimize the surface area (and thus the cost of materials).

**Solution:**

Let r = radius, h = height

**Constraint:** V = πr²h = 500

**Objective:** Minimize surface area S = 2πr² + 2πrh

**Eliminate h:**
```
h = 500/(πr²)
S(r) = 2πr² + 2πr · 500/(πr²)
     = 2πr² + 1000/r
```

**Find critical points:**
```
S'(r) = 4πr - 1000/r² = 0
4πr³ = 1000
r³ = 250/π
r = ∛(250/π) ≈ 4.30 cm

S''(r) = 4π + 2000/r³ > 0, so this is a minimum
```

**Find height:**
```
h = 500/(π · (250/π)^(2/3))
  = 500/(π · (250/π)^(2/3))
  ≈ 8.60 cm

Note: h = 2r (optimal can has h = diameter)
```

### Example 9: Distance Optimization

Find the point on the parabola y = x² closest to the point (0, 1).

**Solution:**

Point on parabola: (x, x²)
Point given: (0, 1)

**Distance formula:**
```
D = √[(x - 0)² + (x² - 1)²]
  = √[x² + (x² - 1)²]
```

**Minimize D² instead (easier):**
```
D² = x² + (x² - 1)²
   = x² + x⁴ - 2x² + 1
   = x⁴ - x² + 1

f(x) = x⁴ - x² + 1
f'(x) = 4x³ - 2x = 2x(2x² - 1)
```

**Critical points:**
```
x = 0 or x² = 1/2
x = 0, ±1/√2

Test: f''(x) = 12x² - 2
f''(0) = -2 < 0 (local max)
f''(±1/√2) = 4 > 0 (local min)

Closest point: (±1/√2, 1/2)
Distance: √(1/2 + 1/4) = √(3/4) = √3/2
```

---

## Related Rates

### Strategy for Related Rates

1. **Draw a diagram:** Label all relevant quantities
2. **Identify rates:** What rates are given? What rate do we want?
3. **Write equation:** Relate all relevant variables
4. **Differentiate with respect to time:** Use implicit differentiation
5. **Substitute values:** Plug in given information
6. **Solve:** Find the desired rate

**Key:** Remember that variables change with time, so use the chain rule!

### Example 10: Ladder Sliding

A 10-meter ladder leans against a wall. The bottom slides away at 2 m/s. How fast is the top sliding down when the bottom is 6 meters from the wall?

**Solution:**

Let x = distance from wall to bottom, y = height of top

**Equation (Pythagorean theorem):**
```
x² + y² = 100
```

**Differentiate with respect to time:**
```
2x(dx/dt) + 2y(dy/dt) = 0
x(dx/dt) + y(dy/dt) = 0
```

**Given information:**
```
dx/dt = 2 m/s
x = 6 m
y = √(100 - 36) = 8 m
```

**Solve for dy/dt:**
```
6(2) + 8(dy/dt) = 0
12 + 8(dy/dt) = 0
dy/dt = -12/8 = -3/2 m/s
```

**Answer:** The top is sliding down at 1.5 m/s

### Example 11: Expanding Circle

Oil spills from a tanker and spreads in a circular pattern. The radius increases at 5 m/min. How fast is the area increasing when the radius is 30 meters?

**Solution:**

Given: dr/dt = 5 m/min, find dA/dt when r = 30 m

**Equation:**
```
A = πr²
```

**Differentiate:**
```
dA/dt = 2πr(dr/dt)
```

**Substitute:**
```
dA/dt = 2π(30)(5)
      = 300π m²/min
      ≈ 942.5 m²/min
```

### Example 12: Conical Tank

Water drains from a conical tank at 2 m³/min. The tank has height 10 m and radius 5 m at the top. How fast is the water level dropping when the water is 6 m deep?

**Solution:**

Given: dV/dt = -2 m³/min (negative because decreasing)
Find: dh/dt when h = 6 m

**Cone volume:**
```
V = (1/3)πr²h
```

**Similar triangles:** r/h = 5/10 = 1/2, so r = h/2

**Substitute:**
```
V = (1/3)π(h/2)²h = (1/3)π(h³/4) = πh³/12
```

**Differentiate:**
```
dV/dt = (π/12) · 3h²(dh/dt) = (πh²/4)(dh/dt)
```

**Solve:**
```
-2 = (π · 36/4)(dh/dt)
-2 = 9π(dh/dt)
dh/dt = -2/(9π) ≈ -0.071 m/min
```

**Answer:** Water level is dropping at about 0.071 m/min (or 7.1 cm/min)

### Example 13: Shadow Problem

A person 2 meters tall walks toward a streetlight 5 meters high at 1.5 m/s. How fast is the tip of their shadow moving?

**Solution:**

Let x = distance from person to light pole, s = length of shadow

**Similar triangles:**
```
5/s = 2/(s - x)
5(s - x) = 2s
5s - 5x = 2s
3s = 5x
s = 5x/3
```

**Differentiate:**
```
ds/dt = (5/3)(dx/dt)
```

**Given:** dx/dt = -1.5 m/s (negative because x is decreasing)

```
ds/dt = (5/3)(-1.5) = -2.5 m/s
```

**Tip of shadow position:** p = x - s = x - 5x/3 = -2x/3

```
dp/dt = (-2/3)(dx/dt) = (-2/3)(-1.5) = 1 m/s
```

**Answer:** The tip of the shadow moves toward the pole at 1 m/s

---

## Linear Approximation

### Tangent Line Approximation

**Idea:** Near a point, a function is approximately equal to its tangent line

**Formula:**
```
L(x) = f(a) + f'(a)(x - a)
```

This is the tangent line at x = a, used to approximate f(x) for x near a

### Example 14: Approximating √26

Use linear approximation with f(x) = √x near a = 25

```
f(x) = √x
f'(x) = 1/(2√x)

f(25) = 5
f'(25) = 1/(2·5) = 1/10

L(x) = 5 + (1/10)(x - 25)

For x = 26:
L(26) = 5 + (1/10)(1) = 5.1

Actual: √26 ≈ 5.0990
Error: 0.001 (very small!)
```

### Example 15: Approximating sin(0.1)

Use f(x) = sin(x) near a = 0

```
f(0) = 0
f'(x) = cos(x)
f'(0) = 1

L(x) = 0 + 1·(x - 0) = x

L(0.1) = 0.1

Actual: sin(0.1) ≈ 0.0998
Error: 0.0002
```

### Differential Notation

**Differential of x:** dx (an independent variable)
**Differential of y:** dy = f'(x)dx

**Relationship:** dy approximates Δy = f(x + dx) - f(x)

### Example 16: Using Differentials

The radius of a sphere is measured as 10 cm with a possible error of ±0.05 cm. Estimate the maximum error in the calculated volume.

```
V = (4/3)πr³
dV = 4πr²dr

r = 10 cm
dr = ±0.05 cm

dV = 4π(10)²(±0.05)
   = 400π(±0.05)
   = ±20π cm³
   ≈ ±62.8 cm³
```

---

## Mean Value Theorem

**Theorem:** If f is continuous on [a, b] and differentiable on (a, b), then there exists c in (a, b) such that:

```
f'(c) = [f(b) - f(a)]/(b - a)
```

**Interpretation:** At some point, the instantaneous rate equals the average rate

### Example 17: MVT Application

Show that there exists c in (0, 2) where f'(c) = 3 for f(x) = x² + 2x

```
f(0) = 0
f(2) = 8

Average rate: [f(2) - f(0)]/(2 - 0) = 8/2 = 4

f'(x) = 2x + 2
f'(c) = 4
2c + 2 = 4
c = 1

Indeed, c = 1 is in (0, 2)
```

---

## Key Formulas and Reference

### Critical Points
```
f'(c) = 0 or f'(c) does not exist
```

### First Derivative Test
- f' changes + to -: Local Max
- f' changes - to +: Local Min

### Second Derivative Test
- f''(c) > 0 and f'(c) = 0: Local Min
- f''(c) < 0 and f'(c) = 0: Local Max

### Concavity
- f''(x) > 0: Concave up
- f''(x) < 0: Concave down

### Optimization Strategy
1. Identify variables
2. Write objective function
3. Apply constraints
4. Find critical points
5. Verify

### Related Rates Strategy
1. Draw diagram
2. Write equation
3. Differentiate with respect to time
4. Substitute and solve

### Linear Approximation
```
L(x) = f(a) + f'(a)(x - a)
dy = f'(x)dx
```

---

**Next Unit:** Unit 4 - Advanced Differentiation Techniques
