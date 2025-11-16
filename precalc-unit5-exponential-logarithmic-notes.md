# Precalculus Unit 5: Exponential & Logarithmic Functions - Notes

## 3.1 Exponential Functions

### Definition

**Exponential Function**: f(x) = b^x where b > 0, b ≠ 1
- b is the **base**
- x is the **exponent**

### Properties of Exponential Functions

**Domain**: All real numbers (-∞, ∞)
**Range**: (0, ∞) - always positive

**Key Properties**:
- **f(0) = b⁰ = 1** (y-intercept always at (0, 1))
- **Horizontal asymptote**: y = 0
- **One-to-one**: passes horizontal line test

### Growth vs. Decay

**Exponential Growth** (b > 1):
- f(x) = b^x increases as x increases
- Example: f(x) = 2^x, f(x) = 3^x

**Exponential Decay** (0 < b < 1):
- f(x) = b^x decreases as x increases
- Example: f(x) = (1/2)^x, f(x) = 0.5^x

**Example 1**: Classify each as growth or decay:
- f(x) = 3^x → **Growth** (b = 3 > 1)
- g(x) = (0.5)^x → **Decay** (b = 0.5 < 1)
- h(x) = 5^(-x) = (1/5)^x → **Decay**

### The Natural Base e

**e ≈ 2.71828...**
- Irrational number
- Natural exponential function: **f(x) = e^x**

**Example 2**: Evaluate e² ≈ 7.389

### Transformations

Standard form: **f(x) = ab^(x-h) + k**
- |a|: vertical stretch/compression
- a < 0: reflection across x-axis
- h: horizontal shift
- k: vertical shift (new horizontal asymptote: y = k)

**Example 3**: Graph f(x) = 2^(x-1) + 3
- Shift right 1
- Shift up 3
- Horizontal asymptote: y = 3

### Compound Interest

**Formula**: A = P(1 + r/n)^(nt)
- A = final amount
- P = principal (initial amount)
- r = annual interest rate (decimal)
- n = number of times compounded per year
- t = time in years

**Example 4**: $5000 invested at 6% compounded quarterly for 10 years
- A = 5000(1 + 0.06/4)^(4·10)
- A = 5000(1.015)^40
- A ≈ $9,070.09

### Continuous Compounding

**Formula**: A = Pe^(rt)

**Example 5**: $3000 at 5% compounded continuously for 8 years
- A = 3000e^(0.05·8)
- A = 3000e^0.4
- A ≈ $4,491.82

---

## 3.2 Exponential & Logistic Modeling

### Exponential Growth Model

**Formula**: A(t) = A₀e^(kt) where k > 0
- A₀ = initial amount
- k = growth rate
- t = time

**Example 6**: Population grows from 10,000 to 12,000 in 5 years
- 12000 = 10000e^(5k)
- 1.2 = e^(5k)
- ln(1.2) = 5k
- k = ln(1.2)/5 ≈ 0.0365
- **Model: A(t) = 10000e^(0.0365t)**

### Exponential Decay Model

**Formula**: A(t) = A₀e^(-kt) where k > 0
- k = decay rate

**Half-life**: Time for quantity to reduce by half
- A(t) = A₀(1/2)^(t/h) where h = half-life

**Example 7**: Radioactive substance, half-life 20 years
- Starting with 100g, how much after 50 years?
- A(50) = 100(1/2)^(50/20)
- A(50) = 100(1/2)^2.5
- A(50) ≈ **17.68 grams**

### Doubling Time

**Formula**: If A(t) = A₀e^(kt), doubling time T satisfies:
- 2A₀ = A₀e^(kT)
- T = ln(2)/k

**Example 8**: Population growth rate k = 0.03/year
- Doubling time: T = ln(2)/0.03 ≈ **23.1 years**

### Logistic Growth Model

**Formula**: P(t) = c/(1 + ae^(-bt))
- c = carrying capacity (maximum population)
- a, b = constants
- Used when growth is limited

**Characteristics**:
- S-shaped curve
- Horizontal asymptotes: y = 0 and y = c
- Initially exponential, then levels off

**Example 9**: P(t) = 1000/(1 + 9e^(-0.5t))
- Carrying capacity: c = **1000**
- Initial population: P(0) = 1000/(1+9) = **100**

---

## 3.3 Logarithmic Functions

### Definition

**Logarithm**: y = log_b(x) means **b^y = x**
- b = base (b > 0, b ≠ 1)
- x > 0 (domain restriction)

**Common Logarithm**: log x = log₁₀ x
**Natural Logarithm**: ln x = log_e x

### Converting Between Forms

**Example 10**: Convert to logarithmic form
- 2³ = 8 → **log₂(8) = 3**
- 10² = 100 → **log(100) = 2**
- e^x = 5 → **ln(5) = x**

**Example 11**: Convert to exponential form
- log₃(81) = 4 → **3⁴ = 81**
- ln(x) = 2 → **e² = x**

### Properties of Logarithms

**Domain**: (0, ∞)
**Range**: All real numbers

**Key Properties**:
- **log_b(1) = 0** (because b⁰ = 1)
- **log_b(b) = 1** (because b¹ = b)
- **log_b(b^x) = x** (inverse property)
- **b^(log_b(x)) = x** (inverse property)

**Example 12**: Evaluate
- log₂(16) = log₂(2⁴) = **4**
- ln(e³) = **3**
- 10^(log(5)) = **5**

### Graphs of Logarithmic Functions

**f(x) = log_b(x)**:
- **Vertical asymptote**: x = 0
- **x-intercept**: (1, 0)
- Passes through (b, 1)
- Increasing if b > 1
- Decreasing if 0 < b < 1

### Inverse Relationship

**f(x) = b^x and g(x) = log_b(x) are inverses**
- Graphs are reflections across y = x

**Example 13**: If f(x) = 2^x, then f^(-1)(x) = log₂(x)

### Transformations

**f(x) = a·log_b(x - h) + k**

**Example 14**: Graph f(x) = log(x - 2) + 1
- Shift right 2
- Shift up 1
- Vertical asymptote: x = 2

---

## 3.4 Properties of Logarithms

### Product Rule

**log_b(MN) = log_b(M) + log_b(N)**

**Example 15**: log₃(6·9) = log₃(6) + log₃(9)

### Quotient Rule

**log_b(M/N) = log_b(M) - log_b(N)**

**Example 16**: log(100/10) = log(100) - log(10) = 2 - 1 = 1

### Power Rule

**log_b(M^p) = p·log_b(M)**

**Example 17**: log₂(8³) = 3·log₂(8) = 3(3) = 9

### Expanding Logarithms

**Example 18**: Expand ln[(x²√y)/z³]
- = ln(x²) + ln(√y) - ln(z³)
- = ln(x²) + ln(y^(1/2)) - ln(z³)
- = **2ln(x) + (1/2)ln(y) - 3ln(z)**

### Condensing Logarithms

**Example 19**: Condense 3log(x) - 2log(y) + log(z)
- = log(x³) - log(y²) + log(z)
- = log(x³z) - log(y²)
- = **log[(x³z)/y²]**

### Change of Base Formula

**log_b(M) = log_a(M)/log_a(b) = ln(M)/ln(b)**

Useful for calculator evaluation when base isn't 10 or e.

**Example 20**: Evaluate log₅(20)
- = ln(20)/ln(5)
- ≈ 2.996/1.609
- ≈ **1.861**

### Special Properties

- **log_b(b^x) = x**
- **b^(log_b(x)) = x**
- **log_b(1/x) = -log_b(x)**

**Example 21**: Simplify
- log₃(3^7) = **7**
- 5^(log₅(12)) = **12**
- log(1/100) = log(10^(-2)) = **-2**

---

## 3.5 Solving Exponential Equations

### Strategy 1: Same Base

If you can write both sides with same base, set exponents equal.

**Example 22**: Solve 2^(3x) = 2^(x+4)
- 3x = x + 4
- 2x = 4
- **x = 2**

**Example 23**: Solve 9^x = 27
- (3²)^x = 3³
- 3^(2x) = 3³
- 2x = 3
- **x = 3/2**

### Strategy 2: Take Logarithm of Both Sides

When bases differ, use logarithms.

**Example 24**: Solve 5^x = 12
- ln(5^x) = ln(12)
- x·ln(5) = ln(12)
- x = ln(12)/ln(5)
- **x ≈ 1.544**

**Example 25**: Solve 3^(2x-1) = 7
- ln(3^(2x-1)) = ln(7)
- (2x-1)ln(3) = ln(7)
- 2x - 1 = ln(7)/ln(3)
- 2x = 1 + ln(7)/ln(3)
- **x = (1 + ln(7)/ln(3))/2 ≈ 1.386**

### Exponential Equations with e

**Example 26**: Solve e^(2x) = 10
- ln(e^(2x)) = ln(10)
- 2x = ln(10)
- **x = ln(10)/2 ≈ 1.151**

### Applications

**Example 27**: Carbon-14 has half-life 5730 years. How old is a fossil with 30% of original C-14?
- A(t) = A₀(1/2)^(t/5730)
- 0.3A₀ = A₀(1/2)^(t/5730)
- 0.3 = (1/2)^(t/5730)
- ln(0.3) = (t/5730)ln(1/2)
- t = 5730·ln(0.3)/ln(0.5)
- **t ≈ 10,038 years**

### Newton's Law of Cooling

**Formula**: T(t) = T_s + (T₀ - T_s)e^(-kt)
- T(t) = temperature at time t
- T_s = surrounding temperature
- T₀ = initial temperature
- k = cooling constant

**Example 28**: Coffee at 180°F in 70°F room cools to 150°F in 10 minutes. Find temperature after 20 minutes.
- 150 = 70 + (180-70)e^(-10k)
- 80 = 110e^(-10k)
- e^(-10k) = 80/110
- k = -ln(80/110)/10 ≈ 0.0318

After 20 minutes:
- T(20) = 70 + 110e^(-0.0318·20)
- T(20) ≈ **128.4°F**

---

## 3.6 Solving Logarithmic Equations

### Strategy 1: Isolate Logarithm, Convert to Exponential

**Example 29**: Solve log₂(x) = 5
- 2⁵ = x
- **x = 32**

**Example 30**: Solve ln(x) + 3 = 7
- ln(x) = 4
- e⁴ = x
- **x ≈ 54.598**

### Strategy 2: Use Properties to Combine Logs

**Example 31**: Solve log(x) + log(x-3) = 1
- log[x(x-3)] = 1
- x(x-3) = 10¹
- x² - 3x - 10 = 0
- (x-5)(x+2) = 0
- x = 5 or x = -2
- Check: x must be > 0 and x-3 > 0, so x > 3
- **x = 5** only (x = -2 is extraneous)

**Example 32**: Solve log₃(x+2) - log₃(x) = 2
- log₃[(x+2)/x] = 2
- (x+2)/x = 3²
- x + 2 = 9x
- 2 = 8x
- **x = 1/4**

### Strategy 3: Exponential Both Sides

**Example 33**: Solve ln(2x+1) = 3
- e^(ln(2x+1)) = e³
- 2x + 1 = e³
- 2x = e³ - 1
- **x = (e³ - 1)/2 ≈ 9.543**

### Checking for Extraneous Solutions

**Always check** that arguments of logarithms are positive!

**Example 34**: Solve log(x) + log(x-3) = log(10)
- log[x(x-3)] = log(10)
- x(x-3) = 10
- x² - 3x - 10 = 0
- (x-5)(x+2) = 0
- x = 5 or x = -2

Check:
- x = 5: log(5) + log(2) = log(10) ✓
- x = -2: log(-2) undefined ✗

**Solution: x = 5**

---

## 3.7 Mathematics of Finance

### Simple Interest

**Formula**: A = P(1 + rt)
- A = final amount
- P = principal
- r = annual rate (decimal)
- t = time in years

**Example 35**: $2000 at 5% simple interest for 3 years
- A = 2000(1 + 0.05·3)
- A = 2000(1.15)
- **A = $2300**

### Compound Interest

**Formula**: A = P(1 + r/n)^(nt)
- n = compounding periods per year

**Common periods**:
- Annually: n = 1
- Semi-annually: n = 2
- Quarterly: n = 4
- Monthly: n = 12
- Daily: n = 365

**Example 36**: $5000 at 6% compounded monthly for 5 years
- A = 5000(1 + 0.06/12)^(12·5)
- A = 5000(1.005)^60
- **A ≈ $6,744.25**

### Continuous Compounding

**Formula**: A = Pe^(rt)

**Example 37**: Which is better: 6% compounded quarterly or 5.9% compounded continuously for $10,000 over 10 years?

Option 1: A = 10000(1.015)^40 ≈ $18,140.18
Option 2: A = 10000e^(0.059·10) ≈ $18,058.45

**Option 1 is better** (6% quarterly)

### Present Value

**How much to invest now** to reach a goal?

**Formula**: P = A/(1 + r/n)^(nt) or P = A·e^(-rt)

**Example 38**: How much to invest now at 7% compounded annually to have $50,000 in 15 years?
- P = 50000/(1.07)^15
- **P ≈ $18,095.03**

### Annual Percentage Yield (APY)

**Effective annual rate**:

**Formula**: APY = (1 + r/n)^n - 1

**Example 39**: Find APY for 8% compounded monthly
- APY = (1 + 0.08/12)^12 - 1
- APY ≈ **8.3%**

### Annuities

**Regular deposits** over time.

**Future Value of Annuity**:
**FV = PMT·[(1 + r/n)^(nt) - 1]/(r/n)**

- PMT = payment amount

**Example 40**: Save $200/month for 20 years at 6% compounded monthly
- FV = 200·[(1.005)^240 - 1]/0.005
- **FV ≈ $92,408.18**

### Loan Payments

**Monthly payment formula**:
**PMT = P·(r/n)/[1 - (1 + r/n)^(-nt)]**

**Example 41**: Loan $150,000 at 4.5% for 30 years
- PMT = 150000·(0.045/12)/[1 - (1.00375)^(-360)]
- **PMT ≈ $760.03/month**

---

## Summary of Key Concepts

### Exponential Functions
- f(x) = b^x, domain: all reals, range: (0, ∞)
- Growth: b > 1; Decay: 0 < b < 1
- Natural base: e ≈ 2.71828

### Logarithmic Functions
- y = log_b(x) ↔ b^y = x
- Domain: (0, ∞), range: all reals
- Inverse of exponential function

### Properties of Logarithms
- **Product**: log(MN) = log(M) + log(N)
- **Quotient**: log(M/N) = log(M) - log(N)
- **Power**: log(M^p) = p·log(M)
- **Change of base**: log_b(M) = ln(M)/ln(b)

### Solving Equations
- **Exponential**: Take log of both sides
- **Logarithmic**: Convert to exponential or combine logs
- Always check for extraneous solutions

### Finance
- **Compound**: A = P(1 + r/n)^(nt)
- **Continuous**: A = Pe^(rt)
- **Annuity**: Regular deposits
- **Loan payment**: Monthly payment formula

## Important Formulas

- **Exponential growth/decay**: A(t) = A₀e^(kt)
- **Half-life**: A(t) = A₀(1/2)^(t/h)
- **Doubling time**: T = ln(2)/k
- **Logistic growth**: P(t) = c/(1 + ae^(-bt))
- **Newton's Law of Cooling**: T(t) = T_s + (T₀ - T_s)e^(-kt)
- **Compound interest**: A = P(1 + r/n)^(nt)
- **Continuous compounding**: A = Pe^(rt)
- **Change of base**: log_b(x) = ln(x)/ln(b)
