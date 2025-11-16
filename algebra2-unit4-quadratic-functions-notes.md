# Algebra 2 Unit 4: Quadratic Functions - Comprehensive Notes

## Table of Contents
1. [Quadratic Functions and Graphs](#quadratic-functions-and-graphs)
2. [Forms of Quadratic Functions](#forms-of-quadratic-functions)
3. [Solving Quadratic Equations - Factoring](#solving-quadratic-equations---factoring)
4. [Solving by Square Roots](#solving-by-square-roots)
5. [Completing the Square](#completing-the-square)
6. [The Quadratic Formula](#the-quadratic-formula)
7. [Complex Numbers](#complex-numbers)
8. [The Discriminant](#the-discriminant)
9. [Applications of Quadratic Functions](#applications-of-quadratic-functions)

---

## Quadratic Functions and Graphs

### Definition

A **quadratic function** has the form: **f(x) = ax² + bx + c**

Where:
- **a** ≠ 0 (coefficient of x²)
- **b** = coefficient of x
- **c** = constant term

### The Graph: Parabola

The graph of a quadratic function is called a **parabola**.

**Key Features:**
- **Vertex:** The highest or lowest point
- **Axis of symmetry:** Vertical line through the vertex
- **Direction:** Opens up if a > 0, opens down if a < 0
- **y-intercept:** (0, c)

**Example 1:** For f(x) = 2x² - 4x + 1:
- a = 2 (positive, so opens UP)
- c = 1 (y-intercept is (0, 1))

**Example 2:** For f(x) = -x² + 3x - 2:
- a = -1 (negative, so opens DOWN)
- c = -2 (y-intercept is (0, -2))

### Finding the Vertex

For f(x) = ax² + bx + c:

**x-coordinate of vertex:** x = -b/(2a)

Then substitute to find y-coordinate: y = f(-b/(2a))

**Example 3:** Find the vertex of f(x) = x² - 6x + 5

```
a = 1, b = -6

x = -(-6)/(2·1) = 6/2 = 3

y = f(3) = 3² - 6(3) + 5
         = 9 - 18 + 5
         = -4

Vertex: (3, -4)
```

**Example 4:** Find the vertex of f(x) = -2x² + 8x - 3

```
a = -2, b = 8

x = -8/(2·(-2)) = -8/(-4) = 2

y = f(2) = -2(2)² + 8(2) - 3
         = -8 + 16 - 3
         = 5

Vertex: (2, 5)
```

### Axis of Symmetry

The **axis of symmetry** is the vertical line x = -b/(2a)

For Example 3: x = 3
For Example 4: x = 2

---

## Forms of Quadratic Functions

### Standard Form

**f(x) = ax² + bx + c**

- Easy to identify y-intercept (0, c)
- Need to calculate vertex

**Example:** f(x) = x² + 4x + 3

### Vertex Form

**f(x) = a(x - h)² + k**

Where (h, k) is the vertex

- Vertex is immediately visible
- Shows transformations from parent function f(x) = x²

**Example:** f(x) = 2(x - 3)² + 1
- Vertex: (3, 1)
- Opens up (a = 2 > 0)
- Vertically stretched by factor of 2

**Example 5:** Identify the vertex from f(x) = -(x + 2)² - 5

```
Compare to f(x) = a(x - h)² + k

a = -1
h = -2 (note: x - (-2) = x + 2)
k = -5

Vertex: (-2, -5)
Opens down (a < 0)
```

### Factored Form (Intercept Form)

**f(x) = a(x - p)(x - q)**

Where p and q are x-intercepts (roots/zeros)

- Easy to identify x-intercepts: (p, 0) and (q, 0)
- Vertex is midway between roots

**Example:** f(x) = (x - 2)(x + 3)
- x-intercepts: x = 2 and x = -3
- Vertex x-coordinate: x = (2 + (-3))/2 = -0.5

### Converting Between Forms

**Example 6:** Convert f(x) = (x - 1)(x + 4) to standard form

```
f(x) = (x - 1)(x + 4)
     = x² + 4x - x - 4
     = x² + 3x - 4
```

**Standard form: f(x) = x² + 3x - 4**

---

## Solving Quadratic Equations - Factoring

A **quadratic equation** has the form ax² + bx + c = 0

**Solutions** (also called roots, zeros, or x-intercepts) are values of x that make the equation true.

### Zero Product Property

If AB = 0, then A = 0 or B = 0

**Steps to solve by factoring:**
1. Write equation in standard form (= 0)
2. Factor the left side
3. Set each factor equal to zero
4. Solve for x

**Example 7:** Solve x² + 5x + 6 = 0

```
x² + 5x + 6 = 0
(x + 2)(x + 3) = 0      (factor)

x + 2 = 0  OR  x + 3 = 0   (zero product property)
x = -2     OR  x = -3

Solutions: x = -2, x = -3
```

**Example 8:** Solve x² - 9 = 0

```
x² - 9 = 0
(x - 3)(x + 3) = 0      (difference of squares)

x - 3 = 0  OR  x + 3 = 0
x = 3      OR  x = -3

Solutions: x = ±3
```

**Example 9:** Solve 2x² + 7x - 4 = 0

```
2x² + 7x - 4 = 0
(2x - 1)(x + 4) = 0

2x - 1 = 0  OR  x + 4 = 0
2x = 1      OR  x = -4
x = 1/2     OR  x = -4

Solutions: x = 1/2, x = -4
```

### Common Factoring Patterns

- **x² + bx + c:** Find two numbers that multiply to c and add to b
- **ax² + bx + c (a ≠ 1):** Use AC method or trial and error
- **Difference of squares:** a² - b² = (a - b)(a + b)
- **Perfect square trinomial:** a² ± 2ab + b² = (a ± b)²

---

## Solving by Square Roots

When a quadratic has no x-term (b = 0), solve by taking square roots.

**Form:** ax² + c = 0 or ax² = k

**Remember:** √x² = |x|, so we get ±

**Example 10:** Solve x² = 25

```
x² = 25
x = ±√25
x = ±5

Solutions: x = 5, x = -5
```

**Example 11:** Solve 3x² - 48 = 0

```
3x² - 48 = 0
3x² = 48
x² = 16
x = ±4

Solutions: x = ±4
```

**Example 12:** Solve (x - 2)² = 9

```
(x - 2)² = 9
x - 2 = ±3

x - 2 = 3  OR  x - 2 = -3
x = 5      OR  x = -1

Solutions: x = 5, x = -1
```

**Example 13:** Solve x² = 7

```
x² = 7
x = ±√7

Solutions: x = √7, x = -√7
(approximately x ≈ 2.646, x ≈ -2.646)
```

---

## Completing the Square

**Completing the square** is a method to solve any quadratic equation and to convert to vertex form.

### The Process

To make x² + bx a perfect square, add (b/2)²

**Pattern:** x² + bx + (b/2)² = (x + b/2)²

**Example 14:** Complete the square: x² + 8x

```
Take half of 8: 8/2 = 4
Square it: 4² = 16
Add 16: x² + 8x + 16 = (x + 4)²
```

**Example 15:** Complete the square: x² - 10x

```
Half of -10: -10/2 = -5
Square it: (-5)² = 25
Add 25: x² - 10x + 25 = (x - 5)²
```

### Solving by Completing the Square

**Steps:**
1. Move constant to right side
2. If a ≠ 1, divide everything by a
3. Take half of b, square it, add to both sides
4. Factor left side as perfect square
5. Solve by taking square roots

**Example 16:** Solve x² + 6x - 7 = 0

```
x² + 6x = 7              (move constant)
x² + 6x + 9 = 7 + 9      (add (6/2)² = 9 to both sides)
(x + 3)² = 16            (factor left side)
x + 3 = ±4               (square root both sides)

x + 3 = 4  OR  x + 3 = -4
x = 1      OR  x = -7

Solutions: x = 1, x = -7
```

**Example 17:** Solve x² - 4x + 1 = 0

```
x² - 4x = -1
x² - 4x + 4 = -1 + 4     (add (-4/2)² = 4)
(x - 2)² = 3
x - 2 = ±√3

x = 2 + √3  OR  x = 2 - √3

Solutions: x = 2 ± √3
```

**Example 18:** Solve 2x² + 8x - 10 = 0

```
2x² + 8x = 10
x² + 4x = 5              (divide by 2)
x² + 4x + 4 = 5 + 4      (add (4/2)² = 4)
(x + 2)² = 9
x + 2 = ±3

x = -2 + 3 = 1  OR  x = -2 - 3 = -5

Solutions: x = 1, x = -5
```

---

## The Quadratic Formula

The **quadratic formula** solves any quadratic equation ax² + bx + c = 0:

**x = (-b ± √(b² - 4ac))/(2a)**

**Steps:**
1. Write equation in standard form
2. Identify a, b, and c
3. Substitute into formula
4. Simplify

**Example 19:** Solve x² + 5x + 3 = 0

```
a = 1, b = 5, c = 3

x = (-5 ± √(5² - 4(1)(3)))/(2(1))
  = (-5 ± √(25 - 12))/2
  = (-5 ± √13)/2

Solutions: x = (-5 + √13)/2, x = (-5 - √13)/2
(approximately x ≈ -0.697, x ≈ -4.303)
```

**Example 20:** Solve 2x² - 3x - 5 = 0

```
a = 2, b = -3, c = -5

x = (-(-3) ± √((-3)² - 4(2)(-5)))/(2(2))
  = (3 ± √(9 + 40))/4
  = (3 ± √49)/4
  = (3 ± 7)/4

x = (3 + 7)/4 = 10/4 = 5/2
x = (3 - 7)/4 = -4/4 = -1

Solutions: x = 5/2, x = -1
```

**Example 21:** Solve x² - 2x + 5 = 0

```
a = 1, b = -2, c = 5

x = (2 ± √(4 - 20))/2
  = (2 ± √(-16))/2
  = (2 ± 4i)/2
  = 1 ± 2i

Solutions: x = 1 + 2i, x = 1 - 2i (complex numbers!)
```

---

## Complex Numbers

When we take the square root of a negative number, we get a **complex number**.

### The Imaginary Unit

**i = √(-1)**

**Key Property:** i² = -1

**Powers of i:**
- i¹ = i
- i² = -1
- i³ = i² · i = -1 · i = -i
- i⁴ = i² · i² = (-1)(-1) = 1
- i⁵ = i⁴ · i = 1 · i = i (pattern repeats!)

**Example 22:** Simplify i⁷

```
i⁷ = i⁴ · i³ = 1 · (-i) = -i
```

Or divide exponent by 4: 7 ÷ 4 = 1 R3, so i⁷ = i³ = -i

### Simplifying Square Roots of Negative Numbers

**√(-a) = i√a** (where a > 0)

**Example 23:** Simplify √(-16)

```
√(-16) = √(-1) · √16 = i · 4 = 4i
```

**Example 24:** Simplify √(-50)

```
√(-50) = i√50 = i√(25·2) = 5i√2
```

### Standard Form of Complex Numbers

**a + bi**

Where:
- **a** = real part
- **b** = imaginary part
- If b = 0, the number is real
- If a = 0, the number is purely imaginary

**Examples:**
- 3 + 4i (real part: 3, imaginary part: 4)
- 5 (real number, same as 5 + 0i)
- 2i (purely imaginary, same as 0 + 2i)

### Adding and Subtracting Complex Numbers

Combine like terms (real with real, imaginary with imaginary).

**Example 25:** (3 + 2i) + (5 - 7i)

```
= (3 + 5) + (2i - 7i)
= 8 - 5i
```

**Example 26:** (4 - 3i) - (1 + 2i)

```
= (4 - 1) + (-3i - 2i)
= 3 - 5i
```

### Multiplying Complex Numbers

Use FOIL and remember i² = -1.

**Example 27:** (2 + 3i)(4 - i)

```
= 2(4) + 2(-i) + 3i(4) + 3i(-i)
= 8 - 2i + 12i - 3i²
= 8 + 10i - 3(-1)
= 8 + 10i + 3
= 11 + 10i
```

**Example 28:** (1 + 2i)(1 - 2i)

```
= 1 - 2i + 2i - 4i²
= 1 - 4(-1)
= 1 + 4
= 5
```

This is a special pattern: (a + bi)(a - bi) = a² + b²

### Complex Conjugates

The **conjugate** of a + bi is a - bi (flip the sign of the imaginary part).

**Property:** (a + bi)(a - bi) = a² + b²  (always real!)

**Example:** Conjugate of 3 + 4i is 3 - 4i

### Dividing Complex Numbers

Multiply numerator and denominator by the conjugate of the denominator.

**Example 29:** Simplify (2 + i)/(3 - 2i)

```
Multiply by conjugate 3 + 2i:

= (2 + i)(3 + 2i)/((3 - 2i)(3 + 2i))
= (6 + 4i + 3i + 2i²)/(9 + 4)
= (6 + 7i - 2)/13
= (4 + 7i)/13
= 4/13 + 7i/13
```

---

## The Discriminant

The **discriminant** is the expression under the square root in the quadratic formula:

**Discriminant = b² - 4ac**

It determines the **nature of the roots**.

### Three Cases

| Discriminant | Nature of Roots | Number of x-intercepts |
|--------------|-----------------|------------------------|
| b² - 4ac > 0 | Two different real roots | 2 |
| b² - 4ac = 0 | One repeated real root | 1 (vertex on x-axis) |
| b² - 4ac < 0 | Two complex conjugate roots | 0 |

**Example 30:** Determine the nature of roots for x² + 5x + 6 = 0

```
a = 1, b = 5, c = 6

b² - 4ac = 5² - 4(1)(6)
         = 25 - 24
         = 1

Since 1 > 0: Two different real roots
```

**Example 31:** Determine the nature of roots for x² - 4x + 4 = 0

```
a = 1, b = -4, c = 4

b² - 4ac = (-4)² - 4(1)(4)
         = 16 - 16
         = 0

Since discriminant = 0: One repeated real root
(This factors as (x - 2)² = 0, so x = 2)
```

**Example 32:** Determine the nature of roots for x² + 2x + 5 = 0

```
a = 1, b = 2, c = 5

b² - 4ac = 2² - 4(1)(5)
         = 4 - 20
         = -16

Since -16 < 0: Two complex conjugate roots
```

### Perfect Square Discriminant

If b² - 4ac is a perfect square, the roots are **rational** (can be expressed as fractions).

**Example:** x² + 5x + 6 = 0 has discriminant 1 = 1², so roots are rational: x = -2, x = -3

---

## Applications of Quadratic Functions

### Projectile Motion

**Height formula:** h(t) = -16t² + v₀t + h₀

Where:
- **h(t)** = height at time t
- **v₀** = initial velocity
- **h₀** = initial height
- **-16** = gravity (in ft/s²)

**Example 33:** A ball is thrown upward from a height of 5 feet with initial velocity 40 ft/s.

a) Write the height function
b) Find the maximum height
c) When does it hit the ground?

```
a) h(t) = -16t² + 40t + 5

b) Maximum at vertex:
   t = -40/(2·(-16)) = -40/(-32) = 1.25 seconds

   h(1.25) = -16(1.25)² + 40(1.25) + 5
           = -25 + 50 + 5
           = 30 feet

c) Hit ground when h(t) = 0:
   -16t² + 40t + 5 = 0

   Using quadratic formula:
   t = (-40 ± √(1600 + 320))/(-32)
   t = (-40 ± √1920)/(-32)
   t ≈ (-40 ± 43.82)/(-32)

   t ≈ 2.62 seconds (positive solution)
```

### Area Problems

**Example 34:** A rectangle has length 3 more than its width. If the area is 54 square feet, find the dimensions.

```
Let w = width
Then length = w + 3

Area = length · width
54 = (w + 3) · w
54 = w² + 3w
0 = w² + 3w - 54
0 = (w + 9)(w - 6)

w = -9 (reject, can't be negative) or w = 6

Width = 6 feet
Length = 6 + 3 = 9 feet
```

### Revenue/Profit Problems

**Example 35:** A company sells widgets for $(20 - 0.5x) each, where x is the number sold (in hundreds). Write the revenue function and find the number that maximizes revenue.

```
Revenue = (price) · (quantity)
R(x) = (20 - 0.5x) · x
R(x) = 20x - 0.5x²
R(x) = -0.5x² + 20x

Maximum at vertex:
x = -20/(2·(-0.5)) = -20/(-1) = 20

Sell 20 hundred = 2,000 widgets for maximum revenue
```

---

## Summary of Solving Methods

| Equation Type | Best Method | Example |
|---------------|-------------|---------|
| x² = k | Square roots | x² = 25 |
| Easily factorable | Factoring | x² + 5x + 6 = 0 |
| Perfect square or need vertex form | Completing the square | x² - 6x + 1 = 0 |
| Doesn't factor nicely | Quadratic formula | x² + 3x - 1 = 0 |

**Quadratic formula works for ALL quadratic equations!**

---

## Summary of Key Concepts

### Quadratic Functions
- Standard form: f(x) = ax² + bx + c
- Vertex form: f(x) = a(x - h)² + k
- Vertex: (-b/(2a), f(-b/(2a)))
- Opens up if a > 0, down if a < 0

### Solving Methods
1. **Factoring:** Set equal to zero, factor, use zero product property
2. **Square roots:** When b = 0, isolate x² and take ±√
3. **Completing the square:** Add (b/2)² to make perfect square
4. **Quadratic formula:** x = (-b ± √(b² - 4ac))/(2a)

### Complex Numbers
- i = √(-1), i² = -1
- Standard form: a + bi
- Add/subtract: combine like terms
- Multiply: FOIL, replace i² with -1
- Divide: multiply by conjugate

### Discriminant
- b² - 4ac > 0: two real roots
- b² - 4ac = 0: one repeated root
- b² - 4ac < 0: two complex roots

---

## Common Mistakes to Avoid

1. **Forgetting ± when taking square roots**
2. **Errors in the quadratic formula** - Watch signs, especially for b
3. **Not writing equation in standard form** before identifying a, b, c
4. **Forgetting i² = -1** when multiplying complex numbers
5. **Dividing by 2a instead of multiplying** in quadratic formula
6. **Sign errors when completing the square**
7. **Assuming all quadratics can be factored** - many require quadratic formula
8. **Forgetting to take half of b** before squaring in completing the square

---

**Standards Covered:**
- N.CN.1: Know there is a complex number i with i² = -1
- N.CN.2: Use the relation i² = -1 and commutative/associative properties to add, subtract, multiply complex numbers
- N.CN.7: Solve quadratic equations with real coefficients that have complex solutions
- A.SSE.3b: Complete the square to find maximum/minimum
- A.REI.4: Solve quadratic equations in one variable
- A.REI.4a: Use factoring
- A.REI.4b: Use square roots and completing the square
- F.IF.8a: Use completing the square to write in vertex form
