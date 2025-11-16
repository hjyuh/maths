# Calculus 2 - Unit 7: Differential Equations - Notes

## Table of Contents
1. [Introduction to Differential Equations](#introduction-to-differential-equations)
2. [Separable Differential Equations](#separable-differential-equations)
3. [Linear First-Order Differential Equations](#linear-first-order-differential-equations)
4. [Applications of Differential Equations](#applications-of-differential-equations)
5. [Numerical Methods - Euler's Method](#numerical-methods-eulers-method)
6. [Second-Order Linear Equations Preview](#second-order-linear-equations-preview)
7. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Recognize and classify differential equations**
- **Solve separable differential equations**
- **Solve first-order linear differential equations**
- **Apply differential equations to real-world problems**
- **Use numerical methods when exact solutions are impossible**

---

## Essential Questions
- What is a differential equation and why are they important?
- How do we solve different types of differential equations?
- When do we use numerical vs analytical methods?
- What real-world phenomena are modeled by differential equations?

---

## Introduction to Differential Equations

### Definition

**Differential Equation:** An equation involving derivatives of an unknown function

**Examples:**
```
dy/dx = 3x²           (first-order)
y'' + 4y' + 3y = 0    (second-order)
dy/dt = ky            (exponential growth/decay)
```

### Classification

**Order:** Highest derivative present
- First-order: dy/dx, dy/dt
- Second-order: d²y/dx², y''

**Linear vs Nonlinear:**
- **Linear:** No products or powers of y or its derivatives
- **Nonlinear:** Contains products like y·y' or powers like (y')²

**General vs Particular Solution:**
- **General solution:** Contains arbitrary constants
- **Particular solution:** Satisfies initial conditions

### Example 1: Verification

Verify that y = Ce^(3x) is a solution to dy/dx = 3y.

```
Given: y = Ce^(3x)
Find dy/dx: dy/dx = 3Ce^(3x) = 3(Ce^(3x)) = 3y ✓

Therefore y = Ce^(3x) is a solution.
```

### Example 2: Initial Value Problem

Find the particular solution to dy/dx = 2x with y(0) = 3.

```
General solution:
∫dy = ∫2x dx
y = x² + C

Apply initial condition y(0) = 3:
3 = 0² + C
C = 3

Particular solution: y = x² + 3
```

---

## Separable Differential Equations

### Definition

**Separable DE:** Can be written as
```
dy/dx = g(x)h(y)
```

or equivalently:
```
p(y)dy = q(x)dx
```

### Solution Method

1. Separate variables: p(y)dy = q(x)dx
2. Integrate both sides: ∫p(y)dy = ∫q(x)dx
3. Solve for y if possible

### Example 3: Basic Separable Equation

Solve dy/dx = xy.

```
Separate variables:
dy/y = x dx

Integrate both sides:
∫dy/y = ∫x dx
ln|y| = x²/2 + C₁

Solve for y:
|y| = e^(x²/2 + C₁)
y = ±e^(C₁) · e^(x²/2)
y = Ce^(x²/2)  where C = ±e^(C₁)
```

### Example 4: Initial Value Problem

Solve dy/dx = y² with y(0) = 1.

```
Separate:
dy/y² = dx

Integrate:
∫y^(-2) dy = ∫dx
-y^(-1) = x + C
-1/y = x + C

Solve for y:
y = -1/(x + C)

Apply initial condition y(0) = 1:
1 = -1/(0 + C)
C = -1

Particular solution: y = -1/(x - 1) = 1/(1 - x)
```

### Example 5: Exponential Growth/Decay

Solve dy/dt = ky (k constant).

```
Separate:
dy/y = k dt

Integrate:
ln|y| = kt + C₁

Solve:
y = Ce^(kt)

This is the general exponential growth (k > 0) or decay (k < 0) model.
```

### Example 6: More Complex Separation

Solve (1 + x²)dy = xy dx.

```
Separate:
dy = xy/(1 + x²) dx

Since this doesn't separate nicely, rewrite:
dy = [x/(1 + x²)] dx · y

dy/y = x/(1 + x²) dx

Integrate left side:
∫dy/y = ln|y|

Integrate right side using u = 1 + x², du = 2x dx:
∫x/(1 + x²) dx = (1/2)ln(1 + x²)

Solution:
ln|y| = (1/2)ln(1 + x²) + C₁
ln|y| = ln√(1 + x²) + C₁
y = C√(1 + x²)
```

---

## Linear First-Order Differential Equations

### Standard Form

**Linear first-order DE:**
```
dy/dx + P(x)y = Q(x)
```

### Integrating Factor Method

**Solution Steps:**

1. Write in standard form: dy/dx + P(x)y = Q(x)
2. Find integrating factor: μ(x) = e^(∫P(x)dx)
3. Multiply equation by μ(x)
4. Recognize left side as d/dx[μ(x)y]
5. Integrate both sides
6. Solve for y

### Example 7: Integrating Factor

Solve dy/dx + 2y = 3e^x.

```
Step 1: Already in standard form with P(x) = 2, Q(x) = 3e^x

Step 2: Integrating factor:
μ(x) = e^(∫2 dx) = e^(2x)

Step 3: Multiply by μ:
e^(2x) dy/dx + 2e^(2x)y = 3e^(3x)

Step 4: Recognize left side:
d/dx[e^(2x)y] = 3e^(3x)

Step 5: Integrate:
e^(2x)y = ∫3e^(3x) dx = e^(3x) + C

Step 6: Solve for y:
y = e^x + Ce^(-2x)
```

### Example 8: With Initial Condition

Solve xy' + y = x² with y(1) = 2.

```
Step 1: Standard form (divide by x):
y' + (1/x)y = x

Step 2: Integrating factor:
μ = e^(∫1/x dx) = e^(ln|x|) = x

Step 3: Multiply by x:
xy' + y = x²

Step 4: Recognize:
d/dx[xy] = x²

Step 5: Integrate:
xy = x³/3 + C

Step 6: Solve:
y = x²/3 + C/x

Apply y(1) = 2:
2 = 1/3 + C
C = 5/3

Solution: y = x²/3 + 5/(3x)
```

### Example 9: Trigonometric Integrating Factor

Solve dy/dx + y tan(x) = sin(x).

```
P(x) = tan(x), Q(x) = sin(x)

μ = e^(∫tan(x) dx)
  = e^(ln|sec(x)|)
  = sec(x)

Multiply by sec(x):
sec(x) dy/dx + sec(x) tan(x) y = sec(x) sin(x)

Recognize:
d/dx[y sec(x)] = sec(x) sin(x) = tan(x)

Integrate:
y sec(x) = -ln|cos(x)| + C

Solve:
y = -cos(x) ln|cos(x)| + C cos(x)
```

---

## Applications of Differential Equations

### Exponential Growth and Decay

**Model:** dy/dt = ky
**Solution:** y(t) = y₀e^(kt)

- k > 0: Growth
- k < 0: Decay

### Example 10: Population Growth

A bacteria culture starts with 1000 bacteria and after 2 hours has 4000. Find:
a) The growth rate k
b) Population after 5 hours

```
Model: P(t) = P₀e^(kt)

Given: P₀ = 1000, P(2) = 4000

a) Find k:
4000 = 1000e^(2k)
4 = e^(2k)
ln(4) = 2k
k = ln(4)/2 = ln(2) ≈ 0.693

b) Find P(5):
P(5) = 1000e^(5ln(2))
     = 1000e^(ln(32))
     = 32,000 bacteria
```

### Newton's Law of Cooling

**Model:** dT/dt = k(T - Tₐ)

where T = object temperature, Tₐ = ambient temperature

### Example 11: Cooling Coffee

Coffee at 95°C is placed in a 20°C room. After 5 minutes it's 70°C. When will it reach 40°C?

```
Model: dT/dt = k(T - 20)

Solution: T(t) = 20 + Ce^(kt)

Initial: T(0) = 95
95 = 20 + C
C = 75

So: T(t) = 20 + 75e^(kt)

At t = 5: T(5) = 70
70 = 20 + 75e^(5k)
50 = 75e^(5k)
e^(5k) = 2/3
5k = ln(2/3)
k = ln(2/3)/5 ≈ -0.0811

Find when T = 40:
40 = 20 + 75e^(kt)
20 = 75e^(kt)
e^(kt) = 4/15
kt = ln(4/15)
t = ln(4/15)/k
t = ln(4/15)/[ln(2/3)/5]
t ≈ 16.2 minutes
```

### Mixing Problems

**Setup:**
- Tank with V liters of solution
- Inflow: rᵢ L/min at concentration cᵢ
- Outflow: rₒ L/min

**Model:** dA/dt = rate in - rate out

### Example 12: Tank Mixing

A 100-liter tank initially contains pure water. Salt water (0.5 kg/L) flows in at 5 L/min. The mixture flows out at 5 L/min. Find A(t), the amount of salt at time t.

```
Rate in = 0.5 kg/L · 5 L/min = 2.5 kg/min
Rate out = (A/100) kg/L · 5 L/min = A/20 kg/min

DE: dA/dt = 2.5 - A/20

This is linear first-order:
dA/dt + A/20 = 2.5

Integrating factor: μ = e^(t/20)

d/dt[Ae^(t/20)] = 2.5e^(t/20)

Ae^(t/20) = 50e^(t/20) + C

A(t) = 50 + Ce^(-t/20)

Initial condition A(0) = 0:
0 = 50 + C
C = -50

Solution: A(t) = 50(1 - e^(-t/20))

As t → ∞: A → 50 kg (equilibrium)
```

---

## Numerical Methods - Euler's Method

### When to Use Numerical Methods

- When analytical solution is impossible
- When solution is too complex
- For quick approximations

### Euler's Method

**Given:** dy/dx = f(x, y), y(x₀) = y₀
**Step size:** h
**Iterations:** yₙ₊₁ = yₙ + h·f(xₙ, yₙ)

### Example 13: Euler's Method

Use Euler's method with h = 0.1 to approximate y(0.3) for dy/dx = x + y, y(0) = 1.

```
x₀ = 0, y₀ = 1, h = 0.1
f(x, y) = x + y

Iteration 1:
x₁ = 0.1
y₁ = y₀ + h·f(x₀, y₀)
   = 1 + 0.1(0 + 1)
   = 1.1

Iteration 2:
x₂ = 0.2
y₂ = y₁ + h·f(x₁, y₁)
   = 1.1 + 0.1(0.1 + 1.1)
   = 1.1 + 0.12
   = 1.22

Iteration 3:
x₃ = 0.3
y₃ = y₂ + h·f(x₂, y₂)
   = 1.22 + 0.1(0.2 + 1.22)
   = 1.22 + 0.142
   = 1.362

Approximation: y(0.3) ≈ 1.362
```

### Improved Euler's Method

More accurate: uses average of slopes

```
k₁ = f(xₙ, yₙ)
k₂ = f(xₙ + h, yₙ + h·k₁)
yₙ₊₁ = yₙ + (h/2)(k₁ + k₂)
```

---

## Second-Order Linear Equations Preview

### Homogeneous Second-Order

**Form:** y'' + p(x)y' + q(x)y = 0

**Constant Coefficients:** y'' + ay' + by = 0

**Characteristic Equation:** r² + ar + b = 0

### Example 14: Simple Second-Order

Solve y'' - 3y' + 2y = 0.

```
Characteristic equation:
r² - 3r + 2 = 0
(r - 1)(r - 2) = 0
r = 1 or r = 2

General solution:
y = C₁e^x + C₂e^(2x)
```

### Types of Solutions

**Case 1:** Two distinct real roots r₁, r₂
```
y = C₁e^(r₁x) + C₂e^(r₂x)
```

**Case 2:** Repeated root r
```
y = C₁e^(rx) + C₂xe^(rx)
```

**Case 3:** Complex roots r = α ± βi
```
y = e^(αx)(C₁ cos(βx) + C₂ sin(βx))
```

---

## Key Formulas and Reference

### Separable Equations
```
dy/dx = g(x)h(y)

Separate: dy/h(y) = g(x)dx
Integrate: ∫dy/h(y) = ∫g(x)dx
```

### Linear First-Order
```
dy/dx + P(x)y = Q(x)

Integrating factor: μ = e^(∫P(x)dx)
Solution: y = (1/μ)∫μQ(x)dx
```

### Exponential Models
```
Growth/Decay: y = y₀e^(kt)
Newton's Cooling: T = Tₐ + (T₀ - Tₐ)e^(kt)
```

### Euler's Method
```
yₙ₊₁ = yₙ + h·f(xₙ, yₙ)
```

### Second-Order Linear (Constant Coefficients)
```
y'' + ay' + by = 0
Characteristic: r² + ar + b = 0

Solutions based on roots of characteristic equation
```

---

**Congratulations on completing Calculus 2!**
