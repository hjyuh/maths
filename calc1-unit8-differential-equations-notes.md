# Calculus 1 - Unit 8: Differential Equations - Notes

## Table of Contents
1. [Introduction to Differential Equations](#introduction-to-differential-equations)
2. [Slope Fields](#slope-fields)
3. [Separable Differential Equations](#separable-differential-equations)
4. [Exponential Growth and Decay](#exponential-growth-and-decay)
5. [Logistic Growth](#logistic-growth)
6. [Newton's Law of Cooling](#newtons-law-of-cooling)
7. [Mixing Problems](#mixing-problems)
8. [Euler's Method](#eulers-method)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Understanding differential equations and their solutions**
- **Drawing and interpreting slope fields**
- **Solving separable differential equations**
- **Applying exponential growth/decay models**
- **Using Euler's method for numerical solutions**

---

## Essential Questions
- What is a differential equation and what does it mean to solve one?
- How can we visualize solutions without solving algebraically?
- What real-world situations are modeled by differential equations?
- How do we solve differential equations analytically and numerically?

---

## Introduction to Differential Equations

### What is a Differential Equation?

**Definition:** An equation involving a function and its derivatives

**Examples:**
```
dy/dx = 2x
y' = 3y
y'' + 4y' + 3y = 0
dy/dx = x + y
```

### Order and Degree

**Order:** The highest derivative present
**Degree:** The power of the highest derivative

**Example:** y'' + (y')² = 5
- Order: 2 (second derivative)
- Degree: 1 (y'' to the first power)

### Solutions

**General Solution:** Contains arbitrary constants (family of solutions)
**Particular Solution:** Specific solution satisfying initial conditions

### Example 1: Verifying a Solution

Verify that y = 3e^(2x) is a solution to dy/dx = 2y

```
Given: y = 3e^(2x)
dy/dx = 6e^(2x)

Check if dy/dx = 2y:
2y = 2(3e^(2x)) = 6e^(2x) ✓

Yes, y = 3e^(2x) is a solution
```

### Example 2: Initial Value Problem

Solve dy/dx = 2x with y(0) = 3

```
General solution:
∫ dy = ∫ 2x dx
y = x² + C

Apply initial condition y(0) = 3:
3 = 0² + C
C = 3

Particular solution: y = x² + 3
```

---

## Slope Fields

### Definition

**Slope Field (Direction Field):** A graphical representation showing the slope dy/dx at various points in the plane

### Creating a Slope Field

For dy/dx = f(x, y):
1. Choose points (x, y) in the plane
2. Calculate slope m = f(x, y) at each point
3. Draw short line segments with that slope

### Example 3: Simple Slope Field

Draw the slope field for dy/dx = x

```
At each point (x, y), the slope is x:
- At x = -2: slope = -2 (steep negative)
- At x = -1: slope = -1 (negative)
- At x = 0: slope = 0 (horizontal)
- At x = 1: slope = 1 (positive)
- At x = 2: slope = 2 (steep positive)

Note: Slope depends only on x, not y
All segments at same x-value are parallel
```

### Example 4: Slope Field Depending on y

Sketch the slope field for dy/dx = y

```
At each point (x, y), the slope equals y:
- At y = 2: slope = 2 (steep positive)
- At y = 1: slope = 1 (positive)
- At y = 0: slope = 0 (horizontal)
- At y = -1: slope = -1 (negative)
- At y = -2: slope = -2 (steep negative)

Note: Slope depends only on y, not x
All segments at same y-value are parallel
```

### Sketching Solutions

Once you have a slope field, you can sketch solution curves:
1. Start at an initial point
2. Follow the direction indicated by the slopes
3. The curve should be tangent to each segment it crosses

---

## Separable Differential Equations

### Definition

A differential equation is **separable** if it can be written as:
```
dy/dx = g(x)h(y)
```

### Separation Method

1. Separate variables: (1/h(y)) dy = g(x) dx
2. Integrate both sides: ∫ (1/h(y)) dy = ∫ g(x) dx
3. Solve for y if possible

### Example 5: Basic Separable Equation

Solve dy/dx = xy

```
Step 1: Separate
(1/y) dy = x dx

Step 2: Integrate
∫ (1/y) dy = ∫ x dx
ln|y| = x²/2 + C

Step 3: Solve for y
|y| = e^(x²/2 + C)
y = ±e^C · e^(x²/2)
y = Ae^(x²/2)  (where A = ±e^C)

General solution: y = Ae^(x²/2)
```

### Example 6: With Initial Condition

Solve dy/dx = y/x with y(1) = 2

```
Separate: (1/y) dy = (1/x) dx

Integrate: ln|y| = ln|x| + C

Solve: |y| = e^(ln|x| + C) = e^C|x|
       y = Ax  (where A = ±e^C)

Apply initial condition:
2 = A(1)
A = 2

Particular solution: y = 2x
```

### Example 7: More Complex

Solve dy/dx = (1 + y²)/(1 + x²)

```
Separate: 1/(1 + y²) dy = 1/(1 + x²) dx

Integrate: ∫ 1/(1 + y²) dy = ∫ 1/(1 + x²) dx
          tan⁻¹(y) = tan⁻¹(x) + C

Solve: y = tan(tan⁻¹(x) + C)
```

---

## Exponential Growth and Decay

### The Model

**Differential Equation:** dy/dt = ky

Where:
- y = quantity at time t
- k = growth rate constant
- k > 0: exponential growth
- k < 0: exponential decay

### General Solution

```
y(t) = y₀e^(kt)
```

Where y₀ = y(0) is the initial amount

### Example 8: Population Growth

A bacteria population grows at a rate proportional to its size. Initially there are 100 bacteria, and after 2 hours there are 400. Find the population after 5 hours.

```
Model: dP/dt = kP
Solution: P(t) = P₀e^(kt)

Given: P₀ = 100

Find k using P(2) = 400:
400 = 100e^(2k)
4 = e^(2k)
ln 4 = 2k
k = (ln 4)/2 ≈ 0.693

Find P(5):
P(5) = 100e^(5k)
     = 100e^(5 ln 4/2)
     = 100e^(2.5 ln 4)
     = 100 · 4^(2.5)
     = 100 · 32
     = 3200 bacteria
```

### Half-Life and Doubling Time

**Half-life:** Time for quantity to reduce to half
```
t_(1/2) = (ln 2)/|k|  (for decay, k < 0)
```

**Doubling time:** Time for quantity to double
```
t_double = (ln 2)/k  (for growth, k > 0)
```

### Example 9: Radioactive Decay

Carbon-14 has a half-life of 5,730 years. If a sample contains 20 grams now, how much will remain after 10,000 years?

```
Model: A(t) = A₀e^(kt)

Find k from half-life:
5730 = (ln 2)/|k|
k = -(ln 2)/5730 ≈ -0.000121

Find A(10000):
A(10000) = 20e^(-0.000121 · 10000)
         = 20e^(-1.21)
         ≈ 20(0.298)
         ≈ 5.96 grams
```

---

## Logistic Growth

### The Logistic Model

**Differential Equation:** dy/dt = ky(1 - y/M)

Where:
- y = population at time t
- k = growth rate
- M = carrying capacity (maximum sustainable population)

### Properties

- Growth rate decreases as y approaches M
- When y is small, behaves like exponential growth
- As y → M, dy/dt → 0

### Logistic Solution

```
y(t) = M/(1 + Ae^(-kt))
```

Where A is determined by initial conditions

### Example 10: Logistic Population

A population grows logistically with k = 0.1 and carrying capacity M = 1000. If P(0) = 100, find P(t).

```
General form: P(t) = 1000/(1 + Ae^(-0.1t))

Find A using P(0) = 100:
100 = 1000/(1 + A)
1 + A = 10
A = 9

Solution: P(t) = 1000/(1 + 9e^(-0.1t))
```

---

## Newton's Law of Cooling

### The Law

The rate of cooling is proportional to the temperature difference:

**Differential Equation:** dT/dt = k(T - T_s)

Where:
- T = temperature of object
- T_s = surrounding (ambient) temperature
- k = cooling constant (k < 0)

### Solution

```
T(t) = T_s + (T₀ - T_s)e^(kt)
```

### Example 11: Coffee Cooling

A cup of coffee at 90°C is placed in a room at 20°C. After 10 minutes, the temperature is 70°C. When will it reach 40°C?

```
Model: T(t) = 20 + (90 - 20)e^(kt)
            = 20 + 70e^(kt)

Find k using T(10) = 70:
70 = 20 + 70e^(10k)
50 = 70e^(10k)
5/7 = e^(10k)
ln(5/7) = 10k
k = ln(5/7)/10 ≈ -0.0336

Find t when T = 40:
40 = 20 + 70e^(kt)
20 = 70e^(kt)
2/7 = e^(kt)
ln(2/7) = kt
t = ln(2/7)/k
t ≈ ln(2/7)/(-0.0336)
t ≈ 37.3 minutes
```

---

## Mixing Problems

### Tank Mixing Setup

- Tank holds V liters
- Solution flows in at rate r_in (L/min) with concentration c_in
- Solution flows out at rate r_out (L/min)
- Amount of substance at time t: A(t)

**Differential Equation:**
```
dA/dt = (rate in) - (rate out)
      = r_in · c_in - r_out · A(t)/V(t)
```

### Example 12: Tank Mixing

A 100-liter tank initially contains pure water. Salt water with concentration 2 kg/L flows in at 5 L/min. The mixture flows out at 5 L/min. Find the amount of salt at time t.

```
Let A(t) = amount of salt (kg) at time t

Rate in = 5 L/min · 2 kg/L = 10 kg/min
Rate out = 5 L/min · A(t)/100 kg/L = A(t)/20 kg/min

dA/dt = 10 - A/20

This is separable:
dA/(10 - A/20) = dt
dA/(200 - A)/20 = dt
20/(200 - A) dA = dt

Integrate:
-20 ln|200 - A| = t + C

At t = 0: A = 0
-20 ln 200 = C

Solution:
-20 ln|200 - A| = t - 20 ln 200
ln|200 - A| = -t/20 + ln 200
200 - A = 200e^(-t/20)
A(t) = 200(1 - e^(-t/20))

As t → ∞: A → 200 kg (equilibrium)
```

---

## Euler's Method

### Numerical Approximation

When we can't solve analytically, use numerical methods.

**Euler's Method:** Approximate solution using tangent line steps

Given dy/dx = f(x, y) with y(x₀) = y₀:

```
yₙ₊₁ = yₙ + f(xₙ, yₙ) · Δx
xₙ₊₁ = xₙ + Δx
```

### Example 13: Euler's Method

Use Euler's method with step size Δx = 0.5 to approximate y(2) for dy/dx = x + y with y(0) = 1.

```
x₀ = 0, y₀ = 1
Δx = 0.5
f(x, y) = x + y

Step 1: x₁ = 0.5
y₁ = y₀ + f(x₀, y₀) · Δx
   = 1 + f(0, 1) · 0.5
   = 1 + (0 + 1) · 0.5
   = 1.5

Step 2: x₂ = 1.0
y₂ = y₁ + f(x₁, y₁) · Δx
   = 1.5 + f(0.5, 1.5) · 0.5
   = 1.5 + (0.5 + 1.5) · 0.5
   = 1.5 + 1.0
   = 2.5

Step 3: x₃ = 1.5
y₃ = 2.5 + f(1.0, 2.5) · 0.5
   = 2.5 + 3.5 · 0.5
   = 4.25

Step 4: x₄ = 2.0
y₄ = 4.25 + f(1.5, 4.25) · 0.5
   = 4.25 + 5.75 · 0.5
   = 7.125

Approximation: y(2) ≈ 7.125
```

### Accuracy

- Smaller step size → better approximation
- But more steps → more computation
- Error accumulates with each step

---

## Key Formulas and Reference

### Exponential Growth/Decay
```
dy/dt = ky
Solution: y(t) = y₀e^(kt)
Half-life: t_(1/2) = (ln 2)/|k|
Doubling time: t_d = (ln 2)/k
```

### Logistic Growth
```
dy/dt = ky(1 - y/M)
Solution: y(t) = M/(1 + Ae^(-kt))
```

### Newton's Law of Cooling
```
dT/dt = k(T - T_s)
Solution: T(t) = T_s + (T₀ - T_s)e^(kt)
```

### Separable Equations
```
If dy/dx = g(x)h(y):
1. Separate: (1/h(y))dy = g(x)dx
2. Integrate both sides
3. Solve for y
```

### Euler's Method
```
yₙ₊₁ = yₙ + f(xₙ, yₙ)Δx
```

---

**Congratulations!** You've completed Calculus 1!
