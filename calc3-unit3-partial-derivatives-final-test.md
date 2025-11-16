# Calculus 3 - Unit 3: Partial Derivatives - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 105 (100 + 5 bonus)**

---

## Instructions
- Show all work for full credit
- Simplify all final answers
- No calculators allowed unless specified
- Use proper mathematical notation
- You have 75 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

**Choose the best answer for each question.**

1. If f(x, y) = x²y + xy², what is f_x?
   - A) 2xy + y²
   - B) x² + 2xy
   - C) 2xy + 2y
   - D) 2x + 2y

2. The level curves f(x, y) = k for f(x, y) = x² + y² are:
   - A) Lines
   - B) Circles
   - C) Parabolas
   - D) Hyperbolas

3. What is ∂²f/∂x∂y for f(x, y) = x³y²?
   - A) 3x²y²
   - B) 6x²y
   - C) 6xy²
   - D) 3x²

4. The gradient ∇f points in the direction of:
   - A) Maximum decrease
   - B) Maximum increase
   - C) Zero change
   - D) Level curves

5. If D = f_xx·f_yy - (f_xy)² < 0 at a critical point, the point is a:
   - A) Local maximum
   - B) Local minimum
   - C) Saddle point
   - D) Cannot determine

6. For z = f(x, y), the differential dz equals:
   - A) f_x + f_y
   - B) f_x dx + f_y dy
   - C) f dx + f dy
   - D) f_x·f_y

7. The directional derivative D_u f equals:
   - A) ∇f × u
   - B) ∇f · u
   - C) |∇f||u|
   - D) ∇f + u

8. To optimize f subject to constraint g = k, we solve:
   - A) ∇f = ∇g
   - B) ∇f = λ∇g
   - C) f = λg
   - D) ∇f × ∇g = 0

9. If x² + y² + z² = 9, then ∂z/∂x equals:
   - A) -2x
   - B) -x/z
   - C) -2x/z
   - D) x/z

10. The maximum value of |∇f| occurs in the direction:
    - A) Parallel to level curves
    - B) Perpendicular to level curves
    - C) Of steepest descent
    - D) None of these

---

## Part 2: Short Answer (40 points, 5 points each)

**Show all work. Simplify your answers.**

11. Find f_x and f_y for f(x, y) = x³y² - 2xy + e^x.

12. Find all second-order partial derivatives for f(x, y) = x²y³.

13. Find the equation of the tangent plane to z = x² + 2y² at (1, 1, 3).

14. Use the chain rule to find dz/dt where z = x²y, x = t, y = t².

15. Find the gradient ∇f for f(x, y) = e^x sin y.

16. Find the directional derivative of f(x, y) = x² + y² at (1, 2) in the direction of v = ⟨3, 4⟩.

17. Find all critical points of f(x, y) = x² + y² - 2x - 4y.

18. Use Lagrange multipliers to find the maximum value of f(x, y) = xy subject to x + y = 6.

---

## Part 3: Free Response (30 points, 10 points each)

**Show all work. Partial credit may be awarded.**

19. **Partial Derivatives and Applications (10 points)**

    Let f(x, y) = x³ - 3xy + y³.

    a) Find f_x, f_y, f_xx, f_yy, and f_xy. (5 points)

    b) Find all critical points. (3 points)

    c) Classify each critical point using the second derivative test. (2 points)

20. **Gradient and Directional Derivatives (10 points)**

    Consider f(x, y) = x²y + xy².

    a) Find ∇f at the point (1, 1). (2 points)

    b) In which direction does f increase most rapidly at (1, 1)? What is the maximum rate of increase? (3 points)

    c) Find the directional derivative at (1, 1) in the direction toward the point (3, 3). (5 points)

21. **Optimization with Constraints (10 points)**

    A rectangular box with no top is to be made with 12 square meters of material.

    a) Express the volume V as a function of length x, width y, and height z. (2 points)

    b) Express the constraint (surface area = 12) as an equation. (2 points)

    c) Use Lagrange multipliers to find the dimensions that maximize the volume. (6 points)

---

## BONUS (5 points)

22. **Challenge Problem**

    Prove that if f(x, y) has continuous second partial derivatives and f_xy ≠ f_yx at some point, then f violates Clairaut's Theorem. Give an example of a function where f_xy might not equal f_yx.

---

# ANSWER KEY

## Part 1: Multiple Choice

1. **A** (f_x = 2xy + y²)
2. **B** (x² + y² = k are circles)
3. **B** (f_xy = 6x²y)
4. **B** (∇f points toward maximum increase)
5. **C** (D < 0 indicates saddle point)
6. **B** (dz = f_x dx + f_y dy)
7. **B** (D_u f = ∇f · u)
8. **B** (∇f = λ∇g with Lagrange multipliers)
9. **B** (Implicit differentiation: 2x + 2z(∂z/∂x) = 0)
10. **B** (∇f perpendicular to level curves)

## Part 2: Short Answer

11. f_x = 3x²y² - 2y + e^x
    f_y = 2x³y - 2x

12. f_x = 2xy³
    f_y = 3x²y²
    f_xx = 2y³
    f_yy = 6x²y
    f_xy = 6xy² = f_yx

13. f_x(x, y) = 2x, f_x(1, 1) = 2
    f_y(x, y) = 4y, f_y(1, 1) = 4
    Tangent plane: z - 3 = 2(x - 1) + 4(y - 1)
                   z = 2x + 4y - 3

14. z = t³
    dz/dt = (∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)
          = (2xy)(1) + (x²)(2t)
          = 2t·t² + t²·2t
          = 2t³ + 2t³
          = 4t³
    Or directly: dz/dt = 3t²

15. ∇f = ⟨e^x sin y, e^x cos y⟩

16. Unit vector: u = ⟨3, 4⟩/5 = ⟨3/5, 4/5⟩
    ∇f = ⟨2x, 2y⟩
    ∇f(1, 2) = ⟨2, 4⟩
    D_u f = ∇f · u = 2(3/5) + 4(4/5) = 6/5 + 16/5 = 22/5

17. f_x = 2x - 2 = 0 → x = 1
    f_y = 2y - 4 = 0 → y = 2
    Critical point: (1, 2)

18. ∇f = λ∇g
    ⟨y, x⟩ = λ⟨1, 1⟩
    y = λ, x = λ, so x = y
    From constraint: 2x = 6, x = 3
    Maximum: f(3, 3) = 9

## Part 3: Free Response

19. a) f_x = 3x² - 3y
       f_y = -3x + 3y²
       f_xx = 6x
       f_yy = 6y
       f_xy = -3

    b) Set f_x = 0: 3x² - 3y = 0 → x² = y
       Set f_y = 0: -3x + 3y² = 0 → x = y²

       From x² = y and x = y²:
       (y²)² = y
       y⁴ = y
       y(y³ - 1) = 0
       y = 0 or y = 1

       If y = 0: x = 0
       If y = 1: x = 1

       Critical points: (0, 0), (1, 1)

    c) D = f_xx·f_yy - (f_xy)²

       At (0, 0): D = 0·0 - 9 = -9 < 0 → saddle point

       At (1, 1): D = 6·6 - 9 = 27 > 0 and f_xx = 6 > 0 → local minimum

20. a) f_x = 2xy + y²
       f_y = x² + 2xy
       ∇f(1, 1) = ⟨3, 3⟩

    b) Direction of maximum increase: ⟨3, 3⟩ or ⟨1, 1⟩/√2
       Maximum rate: |∇f(1, 1)| = √(9 + 9) = 3√2

    c) Vector from (1, 1) to (3, 3): ⟨2, 2⟩
       Unit vector: u = ⟨2, 2⟩/(2√2) = ⟨1/√2, 1/√2⟩
       D_u f = ∇f · u = ⟨3, 3⟩ · ⟨1/√2, 1/√2⟩
             = 3/√2 + 3/√2
             = 6/√2 = 3√2

21. a) V = xyz

    b) Surface area: xy + 2xz + 2yz = 12

    c) Maximize V = xyz subject to g(x, y, z) = xy + 2xz + 2yz = 12

       ∇V = ⟨yz, xz, xy⟩
       ∇g = ⟨y + 2z, x + 2z, 2x + 2y⟩

       yz = λ(y + 2z)     ... (1)
       xz = λ(x + 2z)     ... (2)
       xy = λ(2x + 2y)    ... (3)
       xy + 2xz + 2yz = 12 ... (4)

       From (1) and (2): yz/(y+2z) = xz/(x+2z)
       This gives x = y (after algebra)

       From (1) and (3) with x = y:
       yz/(y+2z) = y²/(4y)
       Simplifying: z = y

       Substituting x = y = z into (4):
       y² + 2y² + 2y² = 12
       5y² = 12
       y = √(12/5) = 2√(3/5)

       Dimensions: x = y = z = 2√(3/5) ≈ 1.55 m

       This is actually a cube-like shape with equal x, y, z.

## BONUS

22. By Clairaut's Theorem, if f has continuous second partial derivatives,
    then f_xy = f_yx. Therefore, if f_xy ≠ f_yx at some point, it must be
    that the second partial derivatives are not both continuous at that point.

    Example: f(x, y) = {xy(x²-y²)/(x²+y²) if (x,y) ≠ (0,0); 0 if (x,y) = (0,0)}

    At (0, 0): f_xy(0,0) = 1 but f_yx(0,0) = -1
    This is because the second partials are not continuous at the origin.

---

**End of Test**
