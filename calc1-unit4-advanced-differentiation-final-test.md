# Calculus 1 - Unit 4: Advanced Differentiation - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100**

---

## Instructions
- Show all work for full credit
- Simplify all final answers
- No calculators allowed
- Use proper mathematical notation
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

**Choose the best answer for each question.**

1. If x² + y² = 25, then dy/dx equals:
   - A) -x/y
   - B) -y/x
   - C) x/y
   - D) 2x/2y

2. The derivative of e^(3x) is:
   - A) e^(3x)
   - B) 3e^x
   - C) 3e^(3x)
   - D) (3x)e^(3x-1)

3. The derivative of ln(5x) is:
   - A) 1/(5x)
   - B) 5/x
   - C) 1/x
   - D) ln 5

4. If y = x^x, then dy/dx equals:
   - A) x · x^(x-1)
   - B) x^x
   - C) x^x ln x
   - D) x^x(ln x + 1)

5. The derivative of sin⁻¹(2x) is:
   - A) 1/√(1 - 2x²)
   - B) 2/√(1 - 4x²)
   - C) 2/√(1 - 2x)
   - D) cos⁻¹(2x)

6. The derivative of 2^x is:
   - A) x · 2^(x-1)
   - B) 2^x
   - C) 2^x ln 2
   - D) 2^x/ln 2

7. For implicit differentiation of xy = 4, dy/dx equals:
   - A) -y/x
   - B) -x/y
   - C) 4/x²
   - D) -4/x²

8. The derivative of tan⁻¹ x is:
   - A) sec²x
   - B) 1/(1 - x²)
   - C) 1/(1 + x²)
   - D) -1/(1 + x²)

9. If f(x) = e^x ln x, then f'(x) equals:
   - A) e^x/x
   - B) e^x(ln x + 1/x)
   - C) e^x + 1/x
   - D) (e^x)(1 + ln x)

10. The derivative of sinh x is:
    - A) cosh x
    - B) -cosh x
    - C) sech²x
    - D) tanh x

---

## Part 2: Short Answer (40 points, 5 points each)

**Show all work. Simplify your answers.**

11. Find dy/dx using implicit differentiation: x² + xy + y² = 3

12. Find the derivative: f(x) = e^(x²+1)

13. Find the derivative: g(x) = ln(x² + 3x)

14. Use logarithmic differentiation to find dy/dx: y = (x + 1)²(x + 2)³(x + 3)⁴

15. Find the derivative: h(x) = x^(2x)

16. Find the derivative: f(x) = sin⁻¹(3x)

17. Find the second derivative d²y/dx² for x² + y² = 9

18. Find the derivative: g(x) = 3^(sin x)

---

## Part 3: Free Response (30 points)

**Show all work and explain your reasoning. Partial credit will be awarded.**

### Problem 19 (10 points)

Consider the curve defined by x³ + y³ = 6xy (called the Folium of Descartes).

a) Use implicit differentiation to find dy/dx. (4 points)

b) Find the equation of the tangent line at the point (3, 3). (3 points)

c) Find all points where the tangent line is horizontal. (3 points)

---

### Problem 20 (10 points)

The population of bacteria in a culture is given by P(t) = 1000e^(0.3t), where t is in hours.

a) Find P'(t) and interpret its meaning. (3 points)

b) Find the rate of growth of the population when t = 5 hours. (3 points)

c) When is the population increasing at a rate of 600 bacteria per hour? (4 points)

---

### Problem 21 (10 points)

Use logarithmic differentiation to find dy/dx for:

y = [(x² + 1)³√(x - 1)]/[(x + 2)²]

Show all steps clearly.

---

## Bonus (5 points)

**Bonus Problem:** Find the derivative of y = (sin x)^(cos x)

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **A) -x/y**
   - 2x + 2y(dy/dx) = 0
   - dy/dx = -2x/(2y) = -x/y

2. **C) 3e^(3x)**
   - d/dx(e^(3x)) = e^(3x) · 3 = 3e^(3x)

3. **C) 1/x**
   - d/dx(ln(5x)) = 1/(5x) · 5 = 1/x

4. **D) x^x(ln x + 1)**
   - Using logarithmic differentiation
   - ln y = x ln x
   - (1/y)(dy/dx) = ln x + 1
   - dy/dx = x^x(ln x + 1)

5. **B) 2/√(1 - 4x²)**
   - d/dx(sin⁻¹(2x)) = 1/√(1 - (2x)²) · 2 = 2/√(1 - 4x²)

6. **C) 2^x ln 2**
   - d/dx(a^x) = a^x ln a
   - d/dx(2^x) = 2^x ln 2

7. **A) -y/x**
   - y + x(dy/dx) = 0
   - dy/dx = -y/x

8. **C) 1/(1 + x²)**
   - Standard derivative formula

9. **B) e^x(ln x + 1/x)**
   - Product rule: e^x · ln x + e^x · (1/x)
   - = e^x(ln x + 1/x)

10. **A) cosh x**
    - d/dx(sinh x) = cosh x

---

## Part 2: Short Answer

11. **dy/dx = -(2x + y)/(x + 2y)**
    ```
    x² + xy + y² = 3
    2x + y + x(dy/dx) + 2y(dy/dx) = 0
    2x + y + (x + 2y)(dy/dx) = 0
    dy/dx = -(2x + y)/(x + 2y)
    ```

12. **f'(x) = 2xe^(x²+1)**
    ```
    f(x) = e^(x²+1)
    f'(x) = e^(x²+1) · (2x) = 2xe^(x²+1)
    ```

13. **g'(x) = (2x + 3)/(x² + 3x)**
    ```
    g(x) = ln(x² + 3x)
    g'(x) = 1/(x² + 3x) · (2x + 3)
          = (2x + 3)/(x² + 3x)
    ```

14. **dy/dx = y[2/(x+1) + 3/(x+2) + 4/(x+3)]**
    ```
    ln y = 2ln(x+1) + 3ln(x+2) + 4ln(x+3)
    (1/y)(dy/dx) = 2/(x+1) + 3/(x+2) + 4/(x+3)
    dy/dx = (x+1)²(x+2)³(x+3)⁴[2/(x+1) + 3/(x+2) + 4/(x+3)]
    ```

15. **h'(x) = 2x^(2x)(ln x + 1)**
    ```
    y = x^(2x)
    ln y = 2x ln x
    (1/y)(dy/dx) = 2 ln x + 2x(1/x) = 2 ln x + 2
    dy/dx = x^(2x) · 2(ln x + 1)
          = 2x^(2x)(ln x + 1)
    ```

16. **f'(x) = 3/√(1 - 9x²)**
    ```
    f(x) = sin⁻¹(3x)
    f'(x) = 1/√(1 - (3x)²) · 3
          = 3/√(1 - 9x²)
    ```

17. **d²y/dx² = -9/y³**
    ```
    x² + y² = 9
    First derivative: dy/dx = -x/y

    Second derivative:
    d²y/dx² = d/dx(-x/y)
            = [y(-1) - (-x)(dy/dx)]/y²
            = [-y + x(-x/y)]/y²
            = [-y - x²/y]/y²
            = [(-y² - x²)/y]/y²
            = -(x² + y²)/y³
            = -9/y³
    ```

18. **g'(x) = 3^(sin x) · cos x · ln 3**
    ```
    g(x) = 3^(sin x)
    g'(x) = 3^(sin x) · ln 3 · cos x
          = cos x · ln 3 · 3^(sin x)
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

**a) Find dy/dx (4 points)**

```
x³ + y³ = 6xy

Differentiate both sides:
3x² + 3y²(dy/dx) = 6y + 6x(dy/dx)

Collect dy/dx terms:
3y²(dy/dx) - 6x(dy/dx) = 6y - 3x²

Factor:
(3y² - 6x)(dy/dx) = 6y - 3x²

Solve:
dy/dx = (6y - 3x²)/(3y² - 6x)
      = (2y - x²)/(y² - 2x)
```

**Grading:**
- Correct implicit differentiation (2 pts)
- Collecting terms (1 pt)
- Solving for dy/dx (1 pt)

**b) Tangent line at (3, 3) (3 points)**

```
At (3, 3):
dy/dx = (2(3) - 3²)/(3² - 2(3))
      = (6 - 9)/(9 - 6)
      = -3/3 = -1

Tangent line: y - 3 = -1(x - 3)
              y = -x + 6
```

**Grading:**
- Evaluating derivative at point (1 pt)
- Point-slope form (1 pt)
- Final equation (1 pt)

**c) Horizontal tangent lines (3 points)**

```
Horizontal when dy/dx = 0:
(2y - x²)/(y² - 2x) = 0

Numerator = 0:
2y - x² = 0
y = x²/2

Substitute into original equation:
x³ + (x²/2)³ = 6x(x²/2)
x³ + x⁶/8 = 3x³
x⁶/8 = 2x³
x⁶ = 16x³
x³(x³ - 16) = 0

x = 0 or x³ = 16
x = 0 or x = 16^(1/3) = 2∛2

Points: (0, 0) and (2∛2, 4∛4)
```

**Grading:**
- Setting numerator to zero (1 pt)
- Substituting and solving (1 pt)
- Finding both points (1 pt)

---

### Problem 20 (10 points)

**a) Find P'(t) and interpret (3 points)**

```
P(t) = 1000e^(0.3t)
P'(t) = 1000 · e^(0.3t) · 0.3
      = 300e^(0.3t)

Interpretation: P'(t) represents the instantaneous rate
of change of the bacteria population at time t (bacteria/hour)
```

**Grading:**
- Correct derivative (2 pts)
- Interpretation (1 pt)

**b) Rate at t = 5 (3 points)**

```
P'(5) = 300e^(0.3·5)
      = 300e^(1.5)
      ≈ 300(4.4817)
      ≈ 1345 bacteria/hour

At t = 5 hours, the population is increasing
at approximately 1345 bacteria per hour.
```

**Grading:**
- Substitution (1 pt)
- Calculation (1 pt)
- Interpretation with units (1 pt)

**c) When is rate = 600? (4 points)**

```
P'(t) = 600
300e^(0.3t) = 600
e^(0.3t) = 2
0.3t = ln 2
t = ln 2/0.3
t ≈ 0.693/0.3
t ≈ 2.31 hours

The population is increasing at 600 bacteria/hour
after approximately 2.31 hours.
```

**Grading:**
- Setting up equation (1 pt)
- Solving for exponential (1 pt)
- Taking logarithm (1 pt)
- Final answer with units (1 pt)

---

### Problem 21 (10 points)

```
y = [(x² + 1)³√(x - 1)]/[(x + 2)²]

Step 1: Take ln of both sides
ln y = ln[(x² + 1)³√(x - 1)] - ln[(x + 2)²]
     = ln(x² + 1)³ + ln√(x - 1) - ln(x + 2)²
     = 3ln(x² + 1) + (1/2)ln(x - 1) - 2ln(x + 2)

Step 2: Differentiate
(1/y)(dy/dx) = 3 · 2x/(x² + 1) + (1/2) · 1/(x - 1) - 2 · 1/(x + 2)
             = 6x/(x² + 1) + 1/(2(x - 1)) - 2/(x + 2)

Step 3: Solve for dy/dx
dy/dx = y[6x/(x² + 1) + 1/(2(x - 1)) - 2/(x + 2)]

     = [(x² + 1)³√(x - 1)]/[(x + 2)²] · [6x/(x² + 1) + 1/(2(x - 1)) - 2/(x + 2)]
```

**Grading rubric:**
- Taking ln correctly (3 pts)
- Using log properties (2 pts)
- Differentiating (3 pts)
- Solving for dy/dx (2 pts)

---

## Bonus (5 points)

```
y = (sin x)^(cos x)

Step 1: Take ln
ln y = cos x · ln(sin x)

Step 2: Differentiate (product rule + chain rule)
(1/y)(dy/dx) = -sin x · ln(sin x) + cos x · (cos x/sin x)
             = -sin x · ln(sin x) + cos²x/sin x

Step 3: Solve
dy/dx = (sin x)^(cos x) · [-sin x · ln(sin x) + cos²x/sin x]
      = (sin x)^(cos x) · [cos²x/sin x - sin x · ln(sin x)]
      = (sin x)^(cos x) · [cos²x - sin²x · ln(sin x)]/sin x
```

**Answer: dy/dx = (sin x)^(cos x) · [cos²x/sin x - sin x · ln(sin x)]**

---

## Grading Rubric

### Performance Levels

- **A (90-100):** Demonstrates mastery of advanced differentiation techniques; correctly applies implicit differentiation, logarithmic differentiation, and inverse function derivatives
- **B (80-89):** Solid understanding; minor computational errors; understands main techniques
- **C (70-79):** Basic understanding; can apply standard formulas; struggles with complex problems
- **D (60-69):** Significant gaps; difficulty with implicit and logarithmic differentiation
- **F (0-59):** Does not demonstrate understanding of advanced differentiation

### Common Errors to Watch For

1. **Forgetting chain rule in implicit differentiation**
2. **Not treating y as a function of x**
3. **Errors in logarithm properties**
4. **Forgetting to multiply by derivative of inside function**
5. **Sign errors in inverse trig derivatives**
6. **Confusing e^x with x^e**
7. **Algebraic errors when solving for dy/dx**
8. **Not simplifying final answers**

---

**Total: _____ / 100 (_____ / 105 with bonus)**
