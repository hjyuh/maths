# Algebra 2 Unit 3: Exponential and Logarithmic Functions - Comprehensive Notes

## Table of Contents
1. [Exponential Functions](#exponential-functions)
2. [Exponential Growth and Decay](#exponential-growth-and-decay)
3. [The Number e and Natural Exponentials](#the-number-e-and-natural-exponentials)
4. [Logarithmic Functions](#logarithmic-functions)
5. [Properties of Logarithms](#properties-of-logarithms)
6. [Solving Exponential Equations](#solving-exponential-equations)
7. [Solving Logarithmic Equations](#solving-logarithmic-equations)
8. [Applications](#applications)

---

## Exponential Functions

### Definition

An **exponential function** has the form: **f(x) = a · bˣ**

Where:
- **a** is the initial value (y-intercept when x = 0)
- **b** is the base (b > 0, b ≠ 1)
- **x** is the exponent (variable)

**Key Difference from Power Functions:**
- Exponential: f(x) = 2ˣ (variable in exponent)
- Power: f(x) = x² (variable is the base)

### Basic Exponential Function

The parent exponential function is **f(x) = bˣ** where b > 1

**Example:** f(x) = 2ˣ

| x | f(x) = 2ˣ |
|---|-----------|
| -2 | 1/4 = 0.25 |
| -1 | 1/2 = 0.5 |
| 0 | 1 |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |

**Key Features:**
- Domain: All real numbers
- Range: y > 0 (always positive)
- y-intercept: (0, 1)
- Horizontal asymptote: y = 0
- Always increasing (when b > 1)
- Never touches or crosses the x-axis

### Growth vs. Decay

**Growth (b > 1):** Function increases as x increases
- Example: f(x) = 2ˣ, f(x) = 3ˣ

**Decay (0 < b < 1):** Function decreases as x increases
- Example: f(x) = (1/2)ˣ, f(x) = (0.5)ˣ

**Example 1:** Identify as growth or decay:

a) f(x) = 5ˣ → **Growth** (base 5 > 1)
b) f(x) = (0.3)ˣ → **Decay** (base 0.3 < 1)
c) f(x) = (2/3)ˣ → **Decay** (base 2/3 < 1)

### Evaluating Exponential Functions

**Example 2:** If f(x) = 3ˣ, find f(4)

```
f(4) = 3⁴ = 81
```

**Example 3:** If g(x) = 2 · 5ˣ, find g(3)

```
g(3) = 2 · 5³ = 2 · 125 = 250
```

**Example 4:** If h(x) = 4 · (1/2)ˣ, find h(-2)

```
h(-2) = 4 · (1/2)⁻²
      = 4 · 2²
      = 4 · 4
      = 16
```

Remember: a⁻ⁿ = 1/aⁿ

### Transformations of Exponential Functions

Just like other functions, exponential functions can be transformed:

**f(x) = a · bˣ⁻ʰ + k**

- **h:** horizontal shift
- **k:** vertical shift
- **a:** vertical stretch/compression and reflection

**Example 5:** Describe the transformation: g(x) = 2ˣ⁺¹ - 3

Starting from f(x) = 2ˣ:
- Shift LEFT 1 unit (x + 1)
- Shift DOWN 3 units (-3)

New horizontal asymptote: y = -3

---

## Exponential Growth and Decay

### Growth Formula

**A(t) = A₀(1 + r)ᵗ**

Where:
- **A(t)** = amount after time t
- **A₀** = initial amount
- **r** = growth rate (as a decimal)
- **t** = time

**Example 6:** A population starts at 500 and grows at 8% per year. Find the population after 5 years.

```
A₀ = 500
r = 0.08
t = 5

A(5) = 500(1 + 0.08)⁵
     = 500(1.08)⁵
     = 500(1.469...)
     ≈ 735
```

**Population after 5 years: about 735**

### Decay Formula

**A(t) = A₀(1 - r)ᵗ**

Where:
- **r** = decay rate (as a decimal)

**Example 7:** A car worth $25,000 depreciates 15% each year. Find its value after 3 years.

```
A₀ = 25,000
r = 0.15
t = 3

A(3) = 25,000(1 - 0.15)³
     = 25,000(0.85)³
     = 25,000(0.614...)
     ≈ 15,353
```

**Value after 3 years: about $15,353**

### Compound Interest

**A = P(1 + r/n)ⁿᵗ**

Where:
- **A** = final amount
- **P** = principal (initial investment)
- **r** = annual interest rate (decimal)
- **n** = number of times compounded per year
- **t** = time in years

**Common compounding periods:**
- Annually: n = 1
- Semi-annually: n = 2
- Quarterly: n = 4
- Monthly: n = 12
- Daily: n = 365

**Example 8:** $1,000 is invested at 6% annual interest compounded quarterly for 5 years. Find the final amount.

```
P = 1000
r = 0.06
n = 4 (quarterly)
t = 5

A = 1000(1 + 0.06/4)⁴⁽⁵⁾
  = 1000(1 + 0.015)²⁰
  = 1000(1.015)²⁰
  = 1000(1.3469...)
  ≈ 1,346.86
```

**Final amount: $1,346.86**

---

## The Number e and Natural Exponentials

### The Number e

**e ≈ 2.71828...**

e is an irrational number (like π) that appears naturally in many growth and decay situations.

**Definition:** e = lim(n→∞) (1 + 1/n)ⁿ

### Natural Exponential Function

**f(x) = eˣ**

This is called the **natural exponential function**.

**Properties:**
- Domain: All real numbers
- Range: y > 0
- y-intercept: (0, 1)
- Horizontal asymptote: y = 0
- Always increasing

### Continuous Compound Interest

When interest is compounded continuously, we use:

**A = Peʳᵗ**

Where:
- **P** = principal
- **r** = annual interest rate
- **t** = time in years
- **e** ≈ 2.71828

**Example 9:** $2,000 is invested at 5% annual interest compounded continuously for 10 years. Find the final amount.

```
P = 2000
r = 0.05
t = 10

A = 2000e⁰·⁰⁵⁽¹⁰⁾
  = 2000e⁰·⁵
  ≈ 2000(1.6487...)
  ≈ 3,297.44
```

**Final amount: $3,297.44**

---

## Logarithmic Functions

### What is a Logarithm?

A **logarithm** answers the question: "What exponent do I need to get this number?"

**Definition:** logᵦ(x) = y means bʸ = x

**Read as:** "log base b of x equals y"

**Example:** log₂(8) = 3 because 2³ = 8

**Key Idea:** Logarithms and exponentials are inverse operations!

### Common and Natural Logarithms

**Common Logarithm:** log₁₀(x), written as **log(x)**
- Base 10 (used when no base is shown)

**Natural Logarithm:** logₑ(x), written as **ln(x)**
- Base e ≈ 2.71828

**Examples:**
- log(100) = 2 because 10² = 100
- ln(e) = 1 because e¹ = e
- ln(e³) = 3 because e³ = e³

### Converting Between Forms

**Exponential Form ↔ Logarithmic Form**

| Exponential | Logarithmic |
|-------------|-------------|
| 2³ = 8 | log₂(8) = 3 |
| 10² = 100 | log(100) = 2 |
| eˣ = 7 | ln(7) = x |
| 5² = 25 | log₅(25) = 2 |

**Example 10:** Convert to logarithmic form: 3⁴ = 81

```
log₃(81) = 4
```

**Example 11:** Convert to exponential form: log₆(36) = 2

```
6² = 36
```

**Example 12:** Convert to exponential form: ln(x) = 5

```
e⁵ = x
```

### Evaluating Logarithms

**Example 13:** Evaluate log₄(16)

Ask: "4 to what power equals 16?"
```
4² = 16
Therefore: log₄(16) = 2
```

**Example 14:** Evaluate log₅(1/25)

```
5⁻² = 1/25
Therefore: log₅(1/25) = -2
```

**Example 15:** Evaluate log(1000)

```
10³ = 1000
Therefore: log(1000) = 3
```

**Example 16:** Evaluate ln(1)

```
e⁰ = 1
Therefore: ln(1) = 0
```

### Key Logarithm Properties

1. **logᵦ(1) = 0** (b⁰ = 1)
2. **logᵦ(b) = 1** (b¹ = b)
3. **logᵦ(bˣ) = x** (inverse property)
4. **b^(logᵦ(x)) = x** (inverse property)

**Example 17:** Simplify log₇(7⁵)

```
log₇(7⁵) = 5
```

**Example 18:** Simplify 5^(log₅(12))

```
5^(log₅(12)) = 12
```

### Domain of Logarithmic Functions

**Important:** You can only take the log of positive numbers!

**Domain of f(x) = log(x):** x > 0

**Example 19:** Find the domain of f(x) = log(x - 3)

```
Need: x - 3 > 0
x > 3
```

**Domain:** x > 3 or (3, ∞)

**Example 20:** Find the domain of g(x) = ln(2x + 4)

```
Need: 2x + 4 > 0
2x > -4
x > -2
```

**Domain:** x > -2 or (-2, ∞)

### Graph of Logarithmic Function

**f(x) = log(x)** is the inverse of **g(x) = 10ˣ**

**Key Features:**
- Domain: x > 0
- Range: All real numbers
- x-intercept: (1, 0)
- Vertical asymptote: x = 0 (y-axis)
- Always increasing
- Passes through (1, 0) and (b, 1)

---

## Properties of Logarithms

These properties allow us to simplify and solve logarithmic expressions.

### Product Property

**logᵦ(MN) = logᵦ(M) + logᵦ(N)**

The log of a product equals the sum of the logs.

**Example 21:** Expand log₂(5 · 8)

```
log₂(5 · 8) = log₂(5) + log₂(8)
```

**Example 22:** Condense log(3) + log(7)

```
log(3) + log(7) = log(3 · 7) = log(21)
```

### Quotient Property

**logᵦ(M/N) = logᵦ(M) - logᵦ(N)**

The log of a quotient equals the difference of the logs.

**Example 23:** Expand log₅(10/2)

```
log₅(10/2) = log₅(10) - log₅(2)
```

**Example 24:** Condense ln(20) - ln(4)

```
ln(20) - ln(4) = ln(20/4) = ln(5)
```

### Power Property

**logᵦ(Mⁿ) = n · logᵦ(M)**

The log of a power equals the exponent times the log.

**Example 25:** Expand log(x⁵)

```
log(x⁵) = 5 log(x)
```

**Example 26:** Condense 3 ln(x)

```
3 ln(x) = ln(x³)
```

### Using All Properties Together

**Example 27:** Expand log₂(x³y/z²)

```
log₂(x³y/z²) = log₂(x³y) - log₂(z²)           (quotient)
              = log₂(x³) + log₂(y) - log₂(z²)  (product)
              = 3 log₂(x) + log₂(y) - 2 log₂(z)  (power)
```

**Example 28:** Condense 2 log(x) + 3 log(y) - log(z)

```
2 log(x) + 3 log(y) - log(z) = log(x²) + log(y³) - log(z)  (power)
                              = log(x²y³) - log(z)          (product)
                              = log(x²y³/z)                 (quotient)
```

### Change of Base Formula

To evaluate logarithms with unusual bases, use:

**logᵦ(M) = log(M)/log(b) = ln(M)/ln(b)**

**Example 29:** Evaluate log₃(20) using a calculator

```
log₃(20) = log(20)/log(3)
         ≈ 1.301/0.477
         ≈ 2.727
```

**Example 30:** Evaluate log₇(50)

```
log₇(50) = ln(50)/ln(7)
         ≈ 3.912/1.946
         ≈ 2.011
```

---

## Solving Exponential Equations

### Strategy 1: Same Base

If you can write both sides with the same base, set exponents equal.

**Example 31:** Solve 2ˣ = 16

```
2ˣ = 16
2ˣ = 2⁴         (rewrite 16 as 2⁴)
x = 4           (set exponents equal)
```

**Example 32:** Solve 3²ˣ⁺¹ = 27

```
3²ˣ⁺¹ = 27
3²ˣ⁺¹ = 3³      (rewrite 27 as 3³)
2x + 1 = 3      (set exponents equal)
2x = 2
x = 1
```

**Example 33:** Solve 5ˣ⁺² = 125

```
5ˣ⁺² = 125
5ˣ⁺² = 5³       (125 = 5³)
x + 2 = 3
x = 1
```

### Strategy 2: Take the Logarithm

If you can't get the same base, take the log of both sides.

**Example 34:** Solve 2ˣ = 7

```
2ˣ = 7
log(2ˣ) = log(7)    (take log of both sides)
x log(2) = log(7)   (power property)
x = log(7)/log(2)   (divide by log(2))
x ≈ 2.807
```

**Example 35:** Solve 5 · 3ˣ = 40

```
5 · 3ˣ = 40
3ˣ = 8              (divide by 5)
log(3ˣ) = log(8)    (take log)
x log(3) = log(8)   (power property)
x = log(8)/log(3)
x ≈ 1.893
```

**Example 36:** Solve e²ˣ = 12

```
e²ˣ = 12
ln(e²ˣ) = ln(12)    (take natural log)
2x = ln(12)         (ln(eˣ) = x)
x = ln(12)/2
x ≈ 1.242
```

### Exponential Equations with Different Bases

**Example 37:** Solve 2ˣ = 3ˣ⁻¹

```
2ˣ = 3ˣ⁻¹
log(2ˣ) = log(3ˣ⁻¹)        (take log)
x log(2) = (x - 1) log(3)   (power property)
x log(2) = x log(3) - log(3)
x log(2) - x log(3) = -log(3)
x[log(2) - log(3)] = -log(3)
x = -log(3)/[log(2) - log(3)]
x ≈ 2.710
```

---

## Solving Logarithmic Equations

### Strategy 1: Exponential Form

Convert to exponential form and solve.

**Example 38:** Solve log₃(x) = 4

```
log₃(x) = 4
3⁴ = x          (convert to exponential)
x = 81
```

**Example 39:** Solve log(x) = 2

```
log(x) = 2
10² = x
x = 100
```

**Example 40:** Solve ln(x) = 3

```
ln(x) = 3
e³ = x
x ≈ 20.086
```

### Strategy 2: Use Properties to Condense

Combine logs using properties, then convert to exponential form.

**Example 41:** Solve log₂(x) + log₂(3) = 5

```
log₂(x) + log₂(3) = 5
log₂(3x) = 5         (product property)
2⁵ = 3x              (exponential form)
32 = 3x
x = 32/3
```

**Example 42:** Solve log(x) - log(2) = 3

```
log(x) - log(2) = 3
log(x/2) = 3         (quotient property)
10³ = x/2            (exponential form)
1000 = x/2
x = 2000
```

**Example 43:** Solve 2 ln(x) = 6

```
2 ln(x) = 6
ln(x) = 3            (divide by 2)
e³ = x
x ≈ 20.086
```

### Checking Solutions

**Important:** Always check that solutions don't create negative numbers or zero inside a log!

**Example 44:** Solve log(x) + log(x - 3) = 1

```
log(x) + log(x - 3) = 1
log[x(x - 3)] = 1           (product property)
log(x² - 3x) = 1
10¹ = x² - 3x               (exponential form)
10 = x² - 3x
0 = x² - 3x - 10
0 = (x - 5)(x + 2)
x = 5 or x = -2

Check x = 5: log(5) + log(2) = 1 ✓
Check x = -2: log(-2) is undefined ✗

Solution: x = 5 only
```

---

## Applications

### Population Growth

**Example 45:** A bacteria population doubles every 3 hours. If there are 100 bacteria initially, how many are there after 12 hours?

```
Doubling means the growth factor is 2
Time periods: 12/3 = 4 periods

P(12) = 100 · 2⁴
      = 100 · 16
      = 1,600 bacteria
```

### Half-Life (Exponential Decay)

**Half-life** is the time it takes for half of a substance to decay.

**Formula:** A(t) = A₀(1/2)^(t/h)

Where:
- **h** = half-life
- **t** = time elapsed

**Example 46:** Carbon-14 has a half-life of 5,730 years. If a sample starts with 80 grams, how much remains after 11,460 years?

```
A₀ = 80
h = 5,730
t = 11,460

A(11,460) = 80(1/2)^(11,460/5,730)
          = 80(1/2)²
          = 80 · 1/4
          = 20 grams
```

### Finding Time in Growth/Decay

**Example 47:** How long will it take $500 to grow to $800 at 6% annual interest compounded continuously?

```
A = Peʳᵗ
800 = 500e⁰·⁰⁶ᵗ
1.6 = e⁰·⁰⁶ᵗ        (divide by 500)
ln(1.6) = 0.06t     (take ln)
t = ln(1.6)/0.06
t ≈ 7.84 years
```

### pH Scale (Logarithmic Scale)

**pH = -log[H⁺]**

Where [H⁺] is the hydrogen ion concentration.

**Example 48:** If [H⁺] = 10⁻⁵, find the pH.

```
pH = -log(10⁻⁵)
   = -(-5)
   = 5
```

**Example 49:** If pH = 3, find [H⁺].

```
3 = -log[H⁺]
-3 = log[H⁺]
10⁻³ = [H⁺]
[H⁺] = 0.001
```

### Richter Scale (Earthquakes)

**M = log(I/I₀)**

Where I is intensity and I₀ is a reference intensity.

**Example 50:** If one earthquake is 1000 times more intense than another, how much greater is its magnitude?

```
M₁ - M₂ = log(I₁/I₀) - log(I₂/I₀)
        = log(I₁/I₂)
        = log(1000)
        = 3

The magnitude is 3 units greater.
```

---

## Summary of Key Concepts

### Exponential Functions
- Form: f(x) = a · bˣ
- Growth when b > 1, decay when 0 < b < 1
- Domain: all reals, Range: y > 0
- Horizontal asymptote: y = 0

### The Number e
- e ≈ 2.71828
- Continuous compounding: A = Peʳᵗ
- Natural exponential: f(x) = eˣ

### Logarithmic Functions
- logᵦ(x) = y means bʸ = x
- Inverse of exponential functions
- Domain: x > 0, Range: all reals
- Vertical asymptote: x = 0

### Logarithm Properties
- Product: logᵦ(MN) = logᵦ(M) + logᵦ(N)
- Quotient: logᵦ(M/N) = logᵦ(M) - logᵦ(N)
- Power: logᵦ(Mⁿ) = n · logᵦ(M)
- Change of base: logᵦ(M) = log(M)/log(b)

### Solving Equations
- **Exponential:** Get same base or take log
- **Logarithmic:** Use properties to condense, convert to exponential
- Always check solutions!

---

## Common Mistakes to Avoid

1. **Forgetting domain restrictions** - Can only take log of positive numbers
2. **Confusing bˣ with xᵇ** - Exponential vs power functions
3. **log(a + b) ≠ log(a) + log(b)** - Product property only works for multiplication
4. **log(a/b) ≠ log(a)/log(b)** - Use quotient property instead
5. **Not checking solutions** - May get extraneous solutions in log equations
6. **Forgetting to apply log/ln to both sides** when solving exponential equations
7. **Mixing up ln and log** - ln is base e, log is base 10

---

**Standards Covered:**
- F.IF.7e: Graph exponential and logarithmic functions
- F.IF.8b: Use properties of exponents to rewrite expressions
- F.BF.4a: Verify inverses (exponential and logarithmic)
- F.BF.5: Understand inverse relationship between exponents and logs
- F.LE.4: Express exponentials using logarithms
- A.SSE.3c: Use properties of exponents to transform expressions
