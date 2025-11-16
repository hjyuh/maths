# Calculus 1 - Unit 5: Integration Fundamentals - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100**

---

## Instructions
- Show all work for full credit
- Include +C for indefinite integrals
- Simplify all final answers
- No calculators allowed
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

**Choose the best answer for each question.**

1. ∫ x⁴ dx equals:
   - A) 4x³ + C
   - B) x⁵ + C
   - C) x⁵/5 + C
   - D) 5x⁴ + C

2. ∫ (1/x) dx equals:
   - A) ln x + C
   - B) ln|x| + C
   - C) -1/x² + C
   - D) x⁻¹ + C

3. ∫ cos x dx equals:
   - A) -sin x + C
   - B) sin x + C
   - C) -cos x + C
   - D) sec²x + C

4. If F'(x) = f(x), then ∫ₐᵇ f(x) dx equals:
   - A) F(a) - F(b)
   - B) F(b) - F(a)
   - C) F(a) + F(b)
   - D) F'(b) - F'(a)

5. d/dx ∫₀ˣ t² dt equals:
   - A) t²
   - B) x²
   - C) x³/3
   - D) 0

6. ∫₀² x dx equals:
   - A) 1
   - B) 2
   - C) 4
   - D) 8

7. To evaluate ∫ x(x² + 1)⁴ dx, you should use substitution with:
   - A) u = x
   - B) u = x²
   - C) u = x² + 1
   - D) u = (x² + 1)⁴

8. ∫ eˣ dx equals:
   - A) xeˣ⁻¹ + C
   - B) eˣ/x + C
   - C) eˣ + C
   - D) eˣ/ln(e) + C

9. If ∫₀⁵ f(x) dx = 7, then ∫₅⁰ f(x) dx equals:
   - A) 7
   - B) -7
   - C) 0
   - D) 1/7

10. The average value of f(x) = x² on [0, 3] is:
    - A) 3
    - B) 9
    - C) 9/2
    - D) 27

---

## Part 2: Short Answer (40 points, 5 points each)

**Show all work. Simplify your answers.**

11. Find the indefinite integral: ∫ (3x² - 4x + 5) dx

12. Find the indefinite integral: ∫ (sin x + cos x) dx

13. Evaluate using substitution: ∫ x(x² + 1)³ dx

14. Evaluate the definite integral: ∫₁³ (2x - 1) dx

15. Evaluate the definite integral: ∫₀^(π/2) cos x dx

16. Find d/dx ∫₀ˣ (t² + 1) dt

17. Use a right Riemann sum with n = 4 to approximate ∫₀² x² dx.

18. Evaluate using substitution: ∫₀¹ 2xe^(x²) dx

---

## Part 3: Free Response (30 points)

**Show all work and explain your reasoning. Partial credit will be awarded.**

### Problem 19 (10 points)

Consider the region bounded by f(x) = x² and the x-axis from x = 0 to x = 2.

a) Set up a definite integral that represents the area of this region. (2 points)

b) Approximate the area using a left Riemann sum with n = 4 rectangles. Show your work. (4 points)

c) Find the exact area by evaluating the definite integral. (4 points)

---

### Problem 20 (10 points)

A particle moves along a line with velocity v(t) = 6t² - 4t meters per second.

a) Find the position function s(t) if the particle is at position s(0) = 5 meters. (5 points)

b) Find the position of the particle at t = 2 seconds. (2 points)

c) Find the total distance traveled during the first 2 seconds. (3 points)

---

### Problem 21 (10 points)

Evaluate the following integrals:

a) ∫ (x³ - 2x + 1/x) dx (3 points)

b) ∫₁² x/(x² + 1) dx (4 points)

c) ∫ sin(3x) dx (3 points)

---

## Bonus (5 points)

**Bonus Problem:** Find the average value of f(x) = sin x on the interval [0, π].

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **C) x⁵/5 + C**
   - Power rule: ∫ xⁿ dx = x^(n+1)/(n+1) + C
   - ∫ x⁴ dx = x⁵/5 + C

2. **B) ln|x| + C**
   - Standard formula for ∫ (1/x) dx
   - Absolute value needed for all x ≠ 0

3. **B) sin x + C**
   - d/dx(sin x) = cos x
   - Therefore ∫ cos x dx = sin x + C

4. **B) F(b) - F(a)**
   - Fundamental Theorem of Calculus Part 2
   - Also written as F(x)|ₐᵇ

5. **B) x²**
   - FTC Part 1: d/dx ∫ₐˣ f(t) dt = f(x)
   - Therefore answer is x²

6. **B) 2**
   - ∫₀² x dx = [x²/2]₀²
   - = 4/2 - 0 = 2

7. **C) u = x² + 1**
   - This makes du = 2x dx
   - Integral becomes ∫ u⁴ · (1/2)du

8. **C) eˣ + C**
   - d/dx(eˣ) = eˣ
   - Therefore ∫ eˣ dx = eˣ + C

9. **B) -7**
   - Property: ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx
   - ∫₅⁰ f(x) dx = -∫₀⁵ f(x) dx = -7

10. **A) 3**
    - f_avg = (1/3)∫₀³ x² dx
    - = (1/3)[x³/3]₀³
    - = (1/3)(9) = 3

---

## Part 2: Short Answer

11. **x³ - 2x² + 5x + C**
    ```
    ∫ (3x² - 4x + 5) dx
    = 3(x³/3) - 4(x²/2) + 5x + C
    = x³ - 2x² + 5x + C
    ```

12. **-cos x + sin x + C**
    ```
    ∫ (sin x + cos x) dx
    = -cos x + sin x + C
    ```

13. **(x² + 1)⁴/8 + C**
    ```
    Let u = x² + 1
    du = 2x dx, so x dx = (1/2)du

    ∫ x(x² + 1)³ dx = ∫ u³ · (1/2)du
                     = (1/2) · u⁴/4 + C
                     = u⁴/8 + C
                     = (x² + 1)⁴/8 + C
    ```

14. **6**
    ```
    ∫₁³ (2x - 1) dx = [x² - x]₁³
                     = (9 - 3) - (1 - 1)
                     = 6 - 0
                     = 6
    ```

15. **1**
    ```
    ∫₀^(π/2) cos x dx = [sin x]₀^(π/2)
                       = sin(π/2) - sin(0)
                       = 1 - 0
                       = 1
    ```

16. **x² + 1**
    ```
    By FTC Part 1:
    d/dx ∫₀ˣ (t² + 1) dt = x² + 1
    ```

17. **3.75**
    ```
    Δx = (2 - 0)/4 = 0.5
    Right endpoints: 0.5, 1, 1.5, 2

    R₄ = 0.5[f(0.5) + f(1) + f(1.5) + f(2)]
       = 0.5[(0.5)² + (1)² + (1.5)² + (2)²]
       = 0.5[0.25 + 1 + 2.25 + 4]
       = 0.5(7.5)
       = 3.75
    ```

18. **(e - 1)**
    ```
    Let u = x²
    du = 2x dx

    When x = 0: u = 0
    When x = 1: u = 1

    ∫₀¹ 2xe^(x²) dx = ∫₀¹ e^u du
                     = [e^u]₀¹
                     = e¹ - e⁰
                     = e - 1
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

**a) Set up integral (2 points)**
```
Area = ∫₀² x² dx
```

**Grading:**
- Correct limits (1 pt)
- Correct integrand (1 pt)

**b) Left Riemann sum with n = 4 (4 points)**
```
Δx = (2 - 0)/4 = 0.5
Left endpoints: 0, 0.5, 1, 1.5

L₄ = Δx[f(0) + f(0.5) + f(1) + f(1.5)]
   = 0.5[0² + (0.5)² + 1² + (1.5)²]
   = 0.5[0 + 0.25 + 1 + 2.25]
   = 0.5(3.5)
   = 1.75
```

**Grading:**
- Finding Δx and endpoints (1 pt)
- Computing function values (2 pts)
- Final sum (1 pt)

**c) Exact area (4 points)**
```
∫₀² x² dx = [x³/3]₀²
          = 8/3 - 0
          = 8/3
          ≈ 2.67
```

**Grading:**
- Finding antiderivative (2 pts)
- Evaluating at limits (1 pt)
- Final answer (1 pt)

---

### Problem 20 (10 points)

**a) Find s(t) (5 points)**
```
s(t) = ∫ v(t) dt
     = ∫ (6t² - 4t) dt
     = 2t³ - 2t² + C

Using s(0) = 5:
2(0)³ - 2(0)² + C = 5
C = 5

Therefore: s(t) = 2t³ - 2t² + 5
```

**Grading:**
- Integrating v(t) (2 pts)
- Using initial condition (2 pts)
- Final function (1 pt)

**b) Position at t = 2 (2 points)**
```
s(2) = 2(2)³ - 2(2)² + 5
     = 16 - 8 + 5
     = 13 meters
```

**Grading:**
- Substitution (1 pt)
- Correct answer with units (1 pt)

**c) Total distance (3 points)**
```
Distance = ∫₀² |v(t)| dt

Since v(t) = 6t² - 4t = 2t(3t - 2)
v(t) = 0 when t = 0 or t = 2/3

For 0 ≤ t < 2/3: v(t) < 0
For 2/3 < t ≤ 2: v(t) > 0

Distance = |∫₀^(2/3) v(t) dt| + ∫_(2/3)² v(t) dt
         = |s(2/3) - s(0)| + |s(2) - s(2/3)|

s(2/3) = 2(2/3)³ - 2(2/3)² + 5 = 16/27 - 8/9 + 5 = 103/27

Distance = |103/27 - 5| + |13 - 103/27|
         = 32/27 + 248/27
         = 280/27 ≈ 10.37 meters
```

**Grading:**
- Finding when v = 0 (1 pt)
- Setting up distance calculation (1 pt)
- Correct answer (1 pt)

---

### Problem 21 (10 points)

**a) ∫ (x³ - 2x + 1/x) dx (3 points)**
```
∫ (x³ - 2x + 1/x) dx = x⁴/4 - x² + ln|x| + C
```

**Grading:**
- Each term correct (1 pt each)

**b) ∫₁² x/(x² + 1) dx (4 points)**
```
Let u = x² + 1
du = 2x dx, so x dx = (1/2)du

When x = 1: u = 2
When x = 2: u = 5

∫₁² x/(x² + 1) dx = ∫₂⁵ (1/u) · (1/2)du
                   = (1/2)[ln|u|]₂⁵
                   = (1/2)(ln 5 - ln 2)
                   = (1/2)ln(5/2)
```

**Grading:**
- Correct substitution (2 pts)
- Changing limits (1 pt)
- Final answer (1 pt)

**c) ∫ sin(3x) dx (3 points)**
```
Let u = 3x
du = 3 dx, so dx = (1/3)du

∫ sin(3x) dx = ∫ sin u · (1/3)du
             = -(1/3)cos u + C
             = -(1/3)cos(3x) + C
```

**Grading:**
- Substitution (1 pt)
- Integration (1 pt)
- Final answer (1 pt)

---

## Bonus (5 points)

```
f_avg = (1/(π - 0))∫₀^π sin x dx
      = (1/π)[-cos x]₀^π
      = (1/π)[-cos π - (-cos 0)]
      = (1/π)[-(-1) - (-1)]
      = (1/π)[1 + 1]
      = 2/π
```

**Answer: 2/π**

---

## Grading Rubric

### Performance Levels

- **A (90-100):** Demonstrates mastery of integration; correctly applies FTC; competent with substitution
- **B (80-89):** Solid understanding; minor errors; understands main concepts
- **C (70-79):** Basic understanding; can integrate simple functions; struggles with substitution
- **D (60-69):** Significant gaps; difficulty with FTC and definite integrals
- **F (0-59):** Does not demonstrate understanding of integration fundamentals

### Common Errors to Watch For

1. **Forgetting + C in indefinite integrals**
2. **Sign errors in trigonometric integrals**
3. **Incorrect power rule application**
4. **Not changing limits in substitution**
5. **Reversing F(b) - F(a) to F(a) - F(b)**
6. **Algebraic errors when expanding before integrating**
7. **Forgetting absolute value in ln|x|**
8. **Incorrect Riemann sum calculations**

---

**Total: _____ / 100 (_____ / 105 with bonus)**
