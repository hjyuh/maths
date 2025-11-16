# Algebra 2 Unit 7: Modeling - Comprehensive Notes

## Table of Contents
1. [Introduction to Mathematical Modeling](#introduction-to-mathematical-modeling)
2. [Linear Models](#linear-models)
3. [Quadratic Models](#quadratic-models)
4. [Exponential Models](#exponential-models)
5. [Choosing Appropriate Models](#choosing-appropriate-models)
6. [Rate of Change](#rate-of-change)
7. [Creating Models from Data](#creating-models-from-data)

---

## Introduction to Mathematical Modeling

### What is a Mathematical Model?

A **mathematical model** is an equation or function that represents a real-world situation.

**Purpose:**
- Make predictions
- Analyze trends
- Optimize outcomes
- Understand relationships

**Types of Models:**
- Linear (constant rate of change)
- Quadratic (acceleration/deceleration)
- Exponential (growth/decay by percentage)
- Other (polynomial, radical, etc.)

**Example 1:** A car rental costs $50 plus $0.25 per mile.

Model: C(m) = 50 + 0.25m

Where C = cost and m = miles driven

---

## Linear Models

### Characteristics

- **Constant rate of change** (slope)
- **Form:** y = mx + b
- Straight line graph
- Used when something increases/decreases by the same amount each time

### Creating Linear Models

**Example 2:** A phone plan charges $30 per month plus $0.10 per text message. Write a model for the monthly cost.

```
Let x = number of texts
Let C = monthly cost

C(x) = 30 + 0.10x

Fixed cost: $30
Variable cost: $0.10 per text
```

**Example 3:** A water tank contains 500 gallons and drains at 15 gallons per hour. Write a model for the amount of water.

```
Let t = time in hours
Let W = water remaining

W(t) = 500 - 15t

Initial amount: 500
Rate of change: -15 (decreasing)
```

### Interpreting Linear Models

**Slope:** Rate of change (units of y per unit of x)

**Y-intercept:** Initial value (when x = 0)

**Example 4:** The model P(t) = 2000 + 150t represents a population, where t is years since 2020.

```
Interpret:
- Initial population (2020): 2000
- Growth rate: 150 people per year
- Population in 2025 (t = 5): P(5) = 2000 + 750 = 2750
```

### Applications

**Example 5:** A candle is 10 inches tall and burns at 0.5 inches per hour.

a) Write a model for the candle's height
b) When will it be 7 inches tall?
c) When will it burn out?

```
a) H(t) = 10 - 0.5t

b) 7 = 10 - 0.5t
   -3 = -0.5t
   t = 6 hours

c) 0 = 10 - 0.5t
   t = 20 hours
```

---

## Quadratic Models

### Characteristics

- **Parabolic** shape
- **Form:** y = ax² + bx + c
- Has a maximum or minimum value
- Used for projectiles, area problems, profit maximization

### Projectile Motion

**Standard form:** h(t) = -16t² + v₀t + h₀

Where:
- h = height (feet)
- t = time (seconds)
- v₀ = initial velocity
- h₀ = initial height
- -16 = gravity constant

**Example 6:** A ball is thrown upward at 48 ft/s from a height of 6 feet.

a) Write the height model
b) Find the maximum height
c) When does it hit the ground?

```
a) h(t) = -16t² + 48t + 6

b) Maximum at vertex:
   t = -48/(2·(-16)) = 48/32 = 1.5 seconds
   h(1.5) = -16(2.25) + 72 + 6 = -36 + 72 + 6 = 42 feet

c) Set h(t) = 0:
   -16t² + 48t + 6 = 0
   Using quadratic formula: t ≈ 3.12 seconds
```

### Area and Revenue Models

**Example 7:** A farmer has 100 feet of fence to make a rectangular pen against a barn (one side doesn't need fencing). Find the dimensions that maximize area.

```
Let x = width
Then length = 100 - 2x (fencing used: 2x + length = 100)

Area: A(x) = x(100 - 2x)
      A(x) = 100x - 2x²
      A(x) = -2x² + 100x

Maximum at vertex:
x = -100/(2·(-2)) = 100/4 = 25 feet

Length = 100 - 2(25) = 50 feet

Maximum area = 25 · 50 = 1250 square feet
```

**Example 8:** A company sells widgets. The profit P (in thousands) is modeled by P(x) = -2x² + 16x - 10, where x is items sold (in thousands).

Find the number that maximizes profit.

```
Vertex at: x = -16/(2·(-2)) = 16/4 = 4

Sell 4 thousand (4000) widgets for maximum profit

Maximum profit: P(4) = -32 + 64 - 10 = 22 thousand = $22,000
```

---

## Exponential Models

### Characteristics

- **Form:** y = a · b^x or y = a · e^(rx)
- Rapid growth or decay
- Used for population, compound interest, radioactive decay

### Growth Models

**Example 9:** A population starts at 5000 and grows 3% per year.

a) Write an exponential model
b) Find the population after 10 years
c) When will it reach 8000?

```
a) P(t) = 5000(1.03)^t

b) P(10) = 5000(1.03)^10 ≈ 6720

c) 8000 = 5000(1.03)^t
   1.6 = (1.03)^t
   log(1.6) = t · log(1.03)
   t = log(1.6)/log(1.03) ≈ 16 years
```

### Decay Models

**Example 10:** A car worth $25,000 depreciates 12% per year.

a) Write a model
b) Find value after 5 years

```
a) V(t) = 25000(0.88)^t    [1 - 0.12 = 0.88]

b) V(5) = 25000(0.88)^5 ≈ $13,182
```

### Half-Life

**Example 11:** A substance has a half-life of 8 years. Starting with 100 grams, write a model.

```
A(t) = 100(1/2)^(t/8)

Or: A(t) = 100(0.5)^(t/8)

After 16 years (2 half-lives):
A(16) = 100(1/2)^2 = 25 grams
```

---

## Choosing Appropriate Models

### Linear vs. Quadratic vs. Exponential

| Model Type | When to Use | Key Feature | Example |
|------------|-------------|-------------|---------|
| Linear | Constant change | Same amount added each time | $5 per hour |
| Quadratic | Has max/min | Curved, symmetric | Throwing a ball |
| Exponential | Percentage change | Multiplied by same factor | 5% growth |

**Decision Process:**

1. **Look at the pattern:**
   - Adding same amount → Linear
   - Has a turning point → Quadratic
   - Multiplying by same percent → Exponential

2. **Check differences:**
   - First differences constant → Linear
   - Second differences constant → Quadratic
   - Ratios constant → Exponential

**Example 12:** Identify the model type:

a) Population grows by 100 each year
b) Revenue: R(x) = 50x - x²
c) Value doubles every 5 years

```
a) Linear (constant addition)
b) Quadratic (x² term, opens down → maximum)
c) Exponential (doubling → multiplication)
```

**Example 13:** Given data, determine the model type:

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| y | 2 | 6 | 18| 54|

```
Check first differences: 4, 12, 36 (not constant)
Check ratios: 6/2 = 3, 18/6 = 3, 54/18 = 3 (constant!)

Exponential: y = 2 · 3^x
```

---

## Rate of Change

### Average Rate of Change

**Formula:** (f(b) - f(a))/(b - a)

This is the slope of the secant line between two points.

**Example 14:** For f(x) = x² + 1, find the average rate of change from x = 1 to x = 4.

```
f(1) = 2
f(4) = 17

Average rate = (17 - 2)/(4 - 1) = 15/3 = 5
```

### Interpreting Rate of Change

**Example 15:** The population P(t) = 1000 + 50t models population t years after 2020.

The rate of change is 50 people per year (the slope).

**Example 16:** For h(t) = -16t² + 64t, find the average rate of change from t = 0 to t = 2.

```
h(0) = 0
h(2) = -64 + 128 = 64

Average rate = (64 - 0)/(2 - 0) = 32 ft/s
```

This represents the average velocity over the first 2 seconds.

### Instantaneous Rate of Change

For functions you've studied calculus with, the derivative gives the instantaneous rate.

For now, we approximate it by finding the average rate over very small intervals.

**Example 17:** The distance traveled is d(t) = 5t². Estimate the instantaneous velocity at t = 3.

```
Use average rate from t = 3 to t = 3.01:

d(3) = 45
d(3.01) = 5(3.01)² = 45.3005

Rate ≈ (45.3005 - 45)/(0.01) = 0.3005/0.01 ≈ 30 units/second
```

---

## Creating Models from Data

### Using Two Points for Linear Models

**Example 18:** A company had 50 employees in 2020 and 65 employees in 2023. Model the growth.

```
Points: (0, 50) and (3, 65)

Slope: m = (65 - 50)/(3 - 0) = 15/3 = 5

Model: E(t) = 50 + 5t

Where t = years since 2020
```

### Using Vertex for Quadratic Models

**Example 19:** A bridge arch has a span of 40 meters and maximum height of 16 meters. Model the arch with a quadratic.

```
Place vertex at (20, 16) and endpoints at (0, 0) and (40, 0)

Vertex form: h(x) = a(x - 20)² + 16

Use point (0, 0):
0 = a(0 - 20)² + 16
0 = 400a + 16
a = -1/25

Model: h(x) = -(1/25)(x - 20)² + 16
```

### Using Technology for Regression

Many real-world datasets require technology (calculators, spreadsheets) to find the best-fit model.

**Steps:**
1. Enter data
2. Create scatter plot
3. Perform regression (linear, quadratic, exponential, etc.)
4. Analyze r or r² to assess fit
5. Use the model to make predictions

**Example 20:** Year and sales data:

| Year | 0 | 1 | 2 | 3 | 4 |
|------|---|---|---|---|---|
| Sales| 10| 15| 23| 34| 52|

Using technology: Exponential regression gives S(t) ≈ 10(1.5)^t with r² ≈ 0.998

This is an excellent fit (r² close to 1)!

---

## Real-World Application Examples

### Example 21: Cost Analysis

A streaming service costs $12/month. A competitor offers $50/year. When is the yearly plan cheaper?

```
Monthly plan: C₁(m) = 12m
Yearly plan: C₂(m) = 50

Set equal:
12m = 50
m = 50/12 ≈ 4.17 months

After about 4.2 months, the yearly plan becomes cheaper.
```

### Example 22: Break-Even Analysis

A company has fixed costs of $5000 and variable costs of $20 per item. They sell items for $35 each. Find the break-even point.

```
Cost: C(x) = 5000 + 20x
Revenue: R(x) = 35x

Break-even when C(x) = R(x):
5000 + 20x = 35x
5000 = 15x
x ≈ 333.33

Must sell 334 items to break even
```

### Example 23: Compound Growth

$1000 invested at 5% compounded continuously. How long until it doubles?

```
A = Pe^(rt)
2000 = 1000e^(0.05t)
2 = e^(0.05t)
ln(2) = 0.05t
t = ln(2)/0.05 ≈ 13.86 years
```

### Example 24: Medicine Decay

A medicine has a half-life of 6 hours. If 200 mg is administered, how much remains after 24 hours?

```
A(t) = 200(1/2)^(t/6)

A(24) = 200(1/2)^4 = 200/16 = 12.5 mg
```

---

## Summary of Key Concepts

### Model Types
- **Linear:** y = mx + b (constant rate)
- **Quadratic:** y = ax² + bx + c (max/min)
- **Exponential:** y = ab^x (percentage change)

### Choosing Models
- Constant addition → Linear
- Has turning point → Quadratic
- Constant multiplication/percentage → Exponential
- Check first differences, second differences, or ratios

### Rate of Change
- Average rate: (f(b) - f(a))/(b - a)
- Represents slope between two points
- Interpret in context (speed, growth rate, etc.)

### Creating Models
- From two points (linear)
- From vertex and point (quadratic)
- From pattern or regression (any type)

### Applications
- Cost, revenue, profit
- Population growth/decay
- Projectile motion
- Area optimization
- Compound interest
- Half-life

---

## Common Mistakes to Avoid

1. **Using wrong model type** - Check the pattern carefully
2. **Forgetting units** - Always include appropriate units in context
3. **Not checking if answer makes sense** - Does negative time or population make sense?
4. **Mixing up growth and decay** - Growth: b > 1, Decay: 0 < b < 1
5. **Confusing average and instantaneous rates**
6. **Not interpreting slope and intercept in context**
7. **Extrapolating too far** beyond data range

---

**Standards Covered:**
- A.CED.1: Create equations and inequalities to solve problems
- A.CED.2: Create equations in two variables to represent relationships
- A.CED.3: Represent constraints and interpret solutions
- F.IF.4: Interpret key features in terms of context
- F.IF.6: Calculate and interpret average rate of change
- F.LE.1: Distinguish between linear and exponential
- F.LE.3: Observe using graphs and tables that exponential growth exceeds polynomial
- S.ID.6a: Fit linear function to data and interpret slope/intercept
