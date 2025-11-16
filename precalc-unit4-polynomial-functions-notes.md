# Precalculus Unit 4: Polynomial Functions - Notes

## 2.1 Linear & Quadratic Functions

### Linear Functions

**Standard Form**: f(x) = mx + b
- m = slope
- b = y-intercept

**Point-Slope Form**: y - y₁ = m(x - x₁)

**Average Rate of Change**: For function f on interval [a, b]:
- **Rate = [f(b) - f(a)]/(b - a)**

**Example 1**: Find average rate of change of f(x) = x² on [2, 5]
- Rate = [f(5) - f(2)]/(5 - 2) = (25 - 4)/3 = 21/3 = 7

### Quadratic Functions

**Standard Form**: f(x) = ax² + bx + c

**Vertex Form**: f(x) = a(x - h)² + k
- Vertex at (h, k)
- Axis of symmetry: x = h

**Finding the Vertex**:
- x-coordinate: **x = -b/(2a)**
- y-coordinate: Evaluate f(-b/(2a))

**Example 2**: Find vertex of f(x) = 2x² - 8x + 3
- x = -(-8)/(2·2) = 8/4 = 2
- f(2) = 2(4) - 8(2) + 3 = 8 - 16 + 3 = -5
- Vertex: **(2, -5)**

### Completing the Square

To convert f(x) = ax² + bx + c to vertex form:

**Example 3**: Convert f(x) = 2x² - 12x + 5 to vertex form
- f(x) = 2(x² - 6x) + 5
- f(x) = 2(x² - 6x + 9 - 9) + 5
- f(x) = 2(x² - 6x + 9) - 18 + 5
- f(x) = 2(x - 3)² - 13
- Vertex: (3, -13)

### Quadratic Formula

For ax² + bx + c = 0:

**x = [-b ± √(b² - 4ac)]/(2a)**

**Discriminant**: Δ = b² - 4ac
- Δ > 0: Two real solutions
- Δ = 0: One real solution
- Δ < 0: Two complex solutions

**Example 4**: Solve 2x² - 5x + 1 = 0
- x = [5 ± √(25 - 8)]/4 = [5 ± √17]/4
- x ≈ 2.28 or x ≈ 0.22

### Free-Fall Motion

Height function: **h(t) = -16t² + v₀t + h₀**
- h₀ = initial height (feet)
- v₀ = initial velocity (ft/s)
- -16 is gravity constant (ft/s²)

**Example 5**: Ball thrown upward at 48 ft/s from height 6 feet
- h(t) = -16t² + 48t + 6
- Maximum height at t = -48/(2(-16)) = 1.5 seconds
- h(1.5) = -16(2.25) + 48(1.5) + 6 = 42 feet

---

## 2.2 Power Functions

### Direct Variation

**y varies directly as xⁿ**: y = kxⁿ (k is constant of variation)

**Example 6**: If y varies directly as x² and y = 48 when x = 4, find y when x = 7.
- 48 = k(16) → k = 3
- y = 3x²
- When x = 7: y = 3(49) = 147

### Inverse Variation

**y varies inversely as xⁿ**: y = k/xⁿ

**Example 7**: If y varies inversely as x and y = 12 when x = 5, find y when x = 3.
- 12 = k/5 → k = 60
- y = 60/x
- When x = 3: y = 60/3 = 20

### Joint Variation

**y varies jointly as x and z**: y = kxz

**Example 8**: z varies jointly as x and y². If z = 24 when x = 2 and y = 3, find z when x = 5 and y = 4.
- 24 = k(2)(9) → k = 24/18 = 4/3
- z = (4/3)xy²
- When x = 5, y = 4: z = (4/3)(5)(16) = 320/3 ≈ 106.67

---

## 2.3 High Degree Polynomials

### Polynomial Functions

**General form**: f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀
- **Degree**: Highest power of x (n)
- **Leading coefficient**: aₙ
- **Leading term**: aₙxⁿ

### End Behavior

Determined by **leading term** only.

**Even degree**:
- Leading coefficient positive: Both ends up (∩)
- Leading coefficient negative: Both ends down (∪)

**Odd degree**:
- Leading coefficient positive: Left down, right up (/)
- Leading coefficient negative: Left up, right down (\)

**Notation**:
- As x → ∞, f(x) → ?
- As x → -∞, f(x) → ?

**Example 9**: f(x) = -2x⁵ + 3x³ - x + 4
- Degree: 5 (odd)
- Leading coefficient: -2 (negative)
- As x → ∞, f(x) → -∞
- As x → -∞, f(x) → ∞

### Zeros and Multiplicity

**Zero**: Value where f(x) = 0

**Multiplicity**: Number of times a factor appears
- **Odd multiplicity**: Graph crosses x-axis
- **Even multiplicity**: Graph touches x-axis (turns around)

**Example 10**: f(x) = (x + 2)²(x - 1)³(x - 4)
- Zeros: x = -2 (multiplicity 2), x = 1 (multiplicity 3), x = 4 (multiplicity 1)
- At x = -2: touches x-axis
- At x = 1: crosses x-axis
- At x = 4: crosses x-axis

### Intermediate Value Theorem

If f is continuous on [a, b] and k is between f(a) and f(b), then there exists c in (a, b) such that f(c) = k.

**Application**: Finding zeros - if f(a) and f(b) have opposite signs, there's a zero between a and b.

**Example 11**: Show f(x) = x³ - 2x - 5 has a zero between 2 and 3.
- f(2) = 8 - 4 - 5 = -1 (negative)
- f(3) = 27 - 6 - 5 = 16 (positive)
- Sign change → zero exists between 2 and 3

### Turning Points

**Maximum turning points** = degree - 1

**Example 12**: Degree 4 polynomial can have at most 3 turning points.

---

## 2.4 & 2.5 Finding Zeros

### Factor Theorem

**x - c is a factor of f(x) if and only if f(c) = 0**

**Example 13**: Is x - 2 a factor of f(x) = x³ - 3x² + 4?
- f(2) = 8 - 12 + 4 = 0
- Yes! x - 2 is a factor

### Remainder Theorem

When polynomial f(x) is divided by x - c, the **remainder is f(c)**.

**Example 14**: Find remainder when f(x) = 2x³ - 5x + 1 is divided by x - 3.
- Remainder = f(3) = 2(27) - 15 + 1 = 54 - 15 + 1 = 40

### Synthetic Division

Efficient method for dividing polynomial by x - c.

**Example 15**: Divide f(x) = 2x³ - 5x² + 3x - 7 by x - 2

```
2 |  2  -5   3  -7
  |     4  -2   2
  |--------------
     2  -1   1  -5
```

Result: 2x² - x + 1 with remainder -5

f(x) = (x - 2)(2x² - x + 1) - 5

### Rational Zero Theorem

**Possible rational zeros** = ±(factors of constant term)/(factors of leading coefficient)

**Example 16**: Find possible rational zeros of f(x) = 2x³ - 5x² + 3x - 6
- Factors of 6: ±1, ±2, ±3, ±6
- Factors of 2: ±1, ±2
- Possible zeros: ±1, ±2, ±3, ±6, ±1/2, ±3/2

### Finding All Zeros

**Example 17**: Find all zeros of f(x) = x³ - 6x² + 11x - 6

1. Possible rational zeros: ±1, ±2, ±3, ±6

2. Test f(1) = 1 - 6 + 11 - 6 = 0 ✓

3. Synthetic division by x - 1:
   ```
   1 |  1  -6  11  -6
     |     1  -5   6
     |--------------
        1  -5   6   0
   ```

4. f(x) = (x - 1)(x² - 5x + 6) = (x - 1)(x - 2)(x - 3)

5. **Zeros: x = 1, 2, 3**

### Complex Zeros

For polynomial with real coefficients, **complex zeros come in conjugate pairs**.

If a + bi is a zero, then a - bi is also a zero.

**Example 18**: A polynomial with real coefficients has zeros 2, 3 + i. What is another zero?
- **3 - i** (conjugate of 3 + i)

### Writing Polynomial from Zeros

**Example 19**: Write polynomial with zeros -2, 1, 3.
- f(x) = (x + 2)(x - 1)(x - 3)
- f(x) = (x + 2)(x² - 4x + 3)
- f(x) = x³ - 4x² + 3x + 2x² - 8x + 6
- f(x) = x³ - 2x² - 5x + 6

### Fundamental Theorem of Algebra

A polynomial of degree n has **exactly n zeros** (counting multiplicity, including complex zeros).

---

## 2.6 Graphs of Rational Functions

### Rational Functions

**Definition**: f(x) = p(x)/q(x) where p and q are polynomials, q(x) ≠ 0

### Vertical Asymptotes

Occur where denominator equals zero (and numerator doesn't).

**Finding VAs**: Set denominator = 0, solve for x

**Example 20**: f(x) = (x + 1)/(x² - 4)
- x² - 4 = 0 → x = ±2
- **Vertical asymptotes: x = -2, x = 2**

### Horizontal Asymptotes

Compare degrees of numerator (n) and denominator (m):

- **n < m**: HA at y = 0
- **n = m**: HA at y = (leading coefficient of p)/(leading coefficient of q)
- **n > m**: No HA (oblique asymptote instead)

**Example 21**: Find horizontal asymptote

a) f(x) = (3x² + 2)/(5x² - 1)
   - Same degree: HA at **y = 3/5**

b) f(x) = (2x + 1)/(x² + 3)
   - n < m: HA at **y = 0**

c) f(x) = (x³ + 2)/(x² - 1)
   - n > m: **No HA** (has oblique asymptote)

### Oblique (Slant) Asymptotes

When degree of numerator = degree of denominator + 1, use **polynomial long division**.

**Example 22**: Find oblique asymptote of f(x) = (x² + 2x - 1)/(x - 1)

Divide: x² + 2x - 1 by x - 1
- Quotient: x + 3
- **Oblique asymptote: y = x + 3**

### Holes (Removable Discontinuities)

Occur when factor cancels in numerator and denominator.

**Example 23**: f(x) = (x² - 4)/(x - 2)
- = (x + 2)(x - 2)/(x - 2)
- = x + 2 (when x ≠ 2)
- **Hole at x = 2** (y = 4)

### Intercepts

**x-intercepts**: Set numerator = 0
**y-intercept**: Evaluate f(0)

**Example 24**: f(x) = (x² - 9)/(x + 1)
- x-intercepts: x² - 9 = 0 → x = ±3
- y-intercept: f(0) = -9/1 = -9

### Graphing Rational Functions

**Steps**:
1. Find domain (exclude VA and holes)
2. Find vertical asymptotes
3. Find horizontal or oblique asymptote
4. Find intercepts
5. Find holes
6. Plot additional points
7. Sketch graph

**Example 25**: Graph f(x) = (2x + 4)/(x - 1)

1. Domain: x ≠ 1
2. VA: x = 1
3. HA: y = 2 (same degree, leading coefficients 2/1)
4. x-intercept: 2x + 4 = 0 → x = -2
   y-intercept: f(0) = 4/(-1) = -4
5. No holes
6. Additional points: f(2) = 8/1 = 8, f(3) = 10/2 = 5
7. Sketch showing asymptotes and behavior

---

## 2.7 Rational Equations

### Solving Rational Equations

**Method**: Multiply both sides by LCD (least common denominator)

**Example 26**: Solve 3/x + 2/(x-1) = 4

LCD = x(x - 1)

Multiply: 3(x - 1) + 2x = 4x(x - 1)
- 3x - 3 + 2x = 4x² - 4x
- 5x - 3 = 4x² - 4x
- 0 = 4x² - 9x + 3

Using quadratic formula:
- x = [9 ± √(81 - 48)]/8 = [9 ± √33]/8
- **x ≈ 2.07 or x ≈ 0.36**

### Extraneous Solutions

**Always check solutions** in original equation!

**Example 27**: Solve x/(x-2) = 2/(x-2) + 1

LCD = x - 2

Multiply: x = 2 + (x - 2)
- x = 2 + x - 2
- x = x
- 0 = 0

This is always true, but **x ≠ 2** (domain restriction)
**Solution**: All real numbers except x = 2

### Applications

**Example 28**: Working together, John and Mary can paint a room in 4 hours. Alone, John takes 6 hours. How long does Mary take alone?

Let t = Mary's time

- John's rate: 1/6 room/hour
- Mary's rate: 1/t room/hour
- Combined: 1/4 room/hour

Equation: 1/6 + 1/t = 1/4

Solve: 1/t = 1/4 - 1/6 = 3/12 - 2/12 = 1/12

**Mary takes 12 hours alone**

---

## 2.8 Solving Inequalities

### Sign Chart Method

**Steps**:
1. Get zero on one side
2. Factor if possible
3. Find critical values (zeros and undefined points)
4. Create sign chart
5. Test intervals
6. Write solution

**Example 29**: Solve x² - 5x + 6 > 0

1. Factor: (x - 2)(x - 3) > 0

2. Critical values: x = 2, x = 3

3. Sign chart:
   ```
   Interval     x < 2    2 < x < 3    x > 3
   (x - 2)        -          +           +
   (x - 3)        -          -           +
   Product        +          -           +
   ```

4. Want positive: **x < 2 or x > 3**

Solution: **(-∞, 2) ∪ (3, ∞)**

### Rational Inequalities

**Example 30**: Solve (x + 1)/(x - 2) ≤ 0

1. Critical values: x = -1 (zero), x = 2 (undefined)

2. Sign chart:
   ```
   Interval      x < -1    -1 < x < 2    x > 2
   (x + 1)         -           +           +
   (x - 2)         -           -           +
   Quotient        +           -           +
   ```

3. Want ≤ 0: Include x = -1 (zero), exclude x = 2 (undefined)

**Solution: [-1, 2)**

### Graphical Method

**Example 31**: Solve x³ - 4x ≥ 0 graphically

1. Graph y = x³ - 4x
2. Find where graph is on or above x-axis
3. Zeros: x³ - 4x = x(x² - 4) = x(x - 2)(x + 2) = 0
   x = 0, ±2

Testing or graphing shows:
**Solution: [-2, 0] ∪ [2, ∞)**

### Applications

**Example 32**: A company's profit is P(x) = -2x² + 40x - 50 (in thousands) where x is units produced (in thousands). For what production levels is profit at least $100,000?

Need: P(x) ≥ 100

-2x² + 40x - 50 ≥ 100
-2x² + 40x - 150 ≥ 0
-2(x² - 20x + 75) ≥ 0
x² - 20x + 75 ≤ 0
(x - 5)(x - 15) ≤ 0

**Solution: 5 ≤ x ≤ 15**

Produce between **5,000 and 15,000 units**

---

## Summary of Key Concepts

### Quadratics
- Vertex: x = -b/(2a)
- Completing the square
- Quadratic formula
- Discriminant

### Polynomials
- End behavior (leading term)
- Zeros and multiplicity
- Fundamental Theorem of Algebra

### Finding Zeros
- Rational Zero Theorem
- Factor Theorem
- Remainder Theorem
- Synthetic division
- Complex zeros in conjugate pairs

### Rational Functions
- Vertical asymptotes: denominator = 0
- Horizontal asymptotes: compare degrees
- Holes: common factors
- Graphing techniques

### Inequalities
- Sign chart method
- Include zeros, exclude undefined points
- Test intervals

## Important Formulas

- **Vertex**: x = -b/(2a)
- **Quadratic formula**: x = [-b ± √(b² - 4ac)]/(2a)
- **Free fall**: h(t) = -16t² + v₀t + h₀
- **Direct variation**: y = kxⁿ
- **Inverse variation**: y = k/xⁿ
- **Fundamental Theorem**: Degree n → exactly n zeros (counting multiplicity)
