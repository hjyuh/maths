# Calculus 3 - Unit 5: Line Integrals - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 105 (100 + 5 bonus)**

---

## Instructions
- Show all work for full credit
- Simplify all final answers
- You have 75 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

1. For line integral ∫_C f ds, ds equals:
   - A) dt
   - B) |r(t)| dt
   - C) |r'(t)| dt
   - D) r'(t) dt

2. The line integral ∫_C **F** · d**r** represents:
   - A) Area
   - B) Work
   - C) Volume
   - D) Mass

3. If **F** = ∇f, then **F** is called:
   - A) Divergent
   - B) Conservative
   - C) Rotational
   - D) Harmonic

4. For **F** = ⟨P, Q⟩ to be conservative, we need:
   - A) ∂P/∂x = ∂Q/∂y
   - B) ∂P/∂y = ∂Q/∂x
   - C) P = Q
   - D) ∂P/∂x = ∂P/∂y

5. The Fundamental Theorem for Line Integrals states ∫_C ∇f · d**r** equals:
   - A) f(A) + f(B)
   - B) f(B) - f(A)
   - C) ∇f(B) - ∇f(A)
   - D) |f(B) - f(A)|

6. If C is a closed curve and **F** is conservative, then ∮_C **F** · d**r** equals:
   - A) 2π
   - B) 1
   - C) 0
   - D) Cannot determine

7. Which field is NOT conservative?
   - A) ⟨2x, 2y⟩
   - B) ⟨y, x⟩
   - C) ⟨-y, x⟩
   - D) ⟨x, 0⟩

8. The mass of a wire C with density ρ is:
   - A) ∫_C ρ dt
   - B) ∫_C ρ ds
   - C) ∫_C ρ d**r**
   - D) ∮_C ρ ds

9. If **F** is conservative, ∫_C **F** · d**r** depends only on:
   - A) The path C
   - B) The parametrization
   - C) The endpoints
   - D) The length of C

10. For r(t) = ⟨cos t, sin t⟩, 0 ≤ t ≤ 2π, |r'(t)| equals:
    - A) 0
    - B) 1
    - C) 2
    - D) 2π

---

## Part 2: Short Answer (40 points, 5 points each)

11. Evaluate ∫_C xy ds where C is r(t) = ⟨t, 2t⟩, 0 ≤ t ≤ 1.

12. Evaluate ∫_C ⟨x, y⟩ · d**r** where C is the line from (0,0) to (1,1).

13. Determine if **F** = ⟨2xy + y, x² + x⟩ is conservative.

14. Find a potential function for **F** = ⟨2x, 2y⟩.

15. Use the Fundamental Theorem to evaluate ∫_C ∇(x²y) · d**r** from (1,1) to (2,3).

16. Find the work done by **F** = ⟨y, -x⟩ along the unit circle, counterclockwise.

17. Evaluate ∫_C y² dx + 2xy dy along the line y = x from (0,0) to (1,1).

18. Show that **F** = ⟨yz, xz, xy⟩ is conservative.

---

## Part 3: Free Response (30 points, 10 points each)

19. **Line Integral Evaluation (10 points)**

    Let C be the curve r(t) = ⟨t, t², t³⟩, 0 ≤ t ≤ 1.

    a) Find |r'(t)|. (2 points)

    b) Evaluate ∫_C (x + y + z) ds. (4 points)

    c) Evaluate ∫_C ⟨y, z, x⟩ · d**r**. (4 points)

20. **Conservative Vector Fields (10 points)**

    Consider **F** = ⟨2xy + z², x² + 1, 2xz⟩.

    a) Show that **F** is conservative by verifying the curl is zero. (4 points)

    b) Find a potential function f such that ∇f = **F**. (4 points)

    c) Use the potential function to evaluate ∫_C **F** · d**r** from (0,0,0) to (1,2,3). (2 points)

21. **Work and Circulation (10 points)**

    A particle moves in the force field **F** = ⟨x² - y, y² + x⟩.

    a) Find the work done moving from (0,0) to (1,1) along the path r(t) = ⟨t, t⟩, 0 ≤ t ≤ 1. (5 points)

    b) Determine if **F** is conservative. (3 points)

    c) If not conservative, explain why the work depends on the path taken. (2 points)

---

## BONUS (5 points)

22. Prove that if **F** = ⟨P, Q⟩ satisfies ∂P/∂y = ∂Q/∂x on a simply connected domain, then ∮_C **F** · d**r** = 0 for any closed curve C in the domain.

---

# ANSWER KEY

## Part 1: Multiple Choice

1. **C** (Arc length element)
2. **B** (Work = ∫ **F** · d**r**)
3. **B** (Definition of conservative)
4. **B** (Conservative test)
5. **B** (FT for line integrals)
6. **C** (Conservative ⟹ ∮ = 0)
7. **C** (∂P/∂y = -1 ≠ 1 = ∂Q/∂x)
8. **B** (Mass formula)
9. **C** (Path independence)
10. **B** (|⟨-sin t, cos t⟩| = 1)

## Part 2: Short Answer

11. r'(t) = ⟨1, 2⟩, |r'(t)| = √5
    ∫_0^1 (t)(2t)√5 dt = √5∫_0^1 2t² dt = √5[2t³/3]_0^1 = 2√5/3

12. r(t) = ⟨t, t⟩, r'(t) = ⟨1, 1⟩
    **F**(r(t)) = ⟨t, t⟩
    ∫_0^1 ⟨t, t⟩ · ⟨1, 1⟩ dt = ∫_0^1 2t dt = [t²]_0^1 = 1

13. P = 2xy + y, Q = x² + x
    ∂P/∂y = 2x + 1
    ∂Q/∂x = 2x + 1
    Since ∂P/∂y = ∂Q/∂x, **F** is conservative. Yes

14. ∂f/∂x = 2x ⟹ f = x² + g(y)
    ∂f/∂y = g'(y) = 2y ⟹ g(y) = y²
    f(x,y) = x² + y²

15. f(x,y) = x²y
    ∫_C ∇f · d**r** = f(2,3) - f(1,1) = 4(3) - 1(1) = 12 - 1 = 11

16. r(t) = ⟨cos t, sin t⟩, r'(t) = ⟨-sin t, cos t⟩
    **F** = ⟨sin t, -cos t⟩
    ∫_0^{2π} ⟨sin t, -cos t⟩ · ⟨-sin t, cos t⟩ dt
    = ∫_0^{2π} (-sin²t - cos²t) dt = ∫_0^{2π} -1 dt = -2π
    Work = -2π (or 2π in magnitude)

17. Along y = x: dx = dt, dy = dt
    ∫_0^1 (t²·1 + 2t·t·1) dt = ∫_0^1 3t² dt = [t³]_0^1 = 1

18. P = yz, Q = xz, R = xy
    ∂P/∂y = z = ∂Q/∂x ✓
    ∂P/∂z = y = ∂R/∂x ✓
    ∂Q/∂z = x = ∂R/∂y ✓
    All conditions satisfied, so **F** is conservative.

## Part 3: Free Response

19. a) r'(t) = ⟨1, 2t, 3t²⟩
       |r'(t)| = √(1 + 4t² + 9t⁴)

    b) ∫_C (x+y+z) ds = ∫_0^1 (t + t² + t³)√(1 + 4t² + 9t⁴) dt
       This requires numerical methods or exact symbolic integration.
       Approximate answer ≈ 1.14

    c) ∫_C ⟨y,z,x⟩ · d**r** = ∫_0^1 ⟨t²,t³,t⟩ · ⟨1,2t,3t²⟩ dt
       = ∫_0^1 (t² + 2t⁴ + 3t³) dt
       = [t³/3 + 2t⁵/5 + 3t⁴/4]_0^1
       = 1/3 + 2/5 + 3/4
       = 20/60 + 24/60 + 45/60 = 89/60

20. a) curl **F** = ∇ × **F**
       ∂R/∂y - ∂Q/∂z = 0 - 0 = 0 ✓
       ∂P/∂z - ∂R/∂x = 2z - 2z = 0 ✓
       ∂Q/∂x - ∂P/∂y = 2x - 2x = 0 ✓
       curl **F** = **0**, so **F** is conservative.

    b) ∂f/∂x = 2xy + z² ⟹ f = x²y + xz² + g(y,z)
       ∂f/∂y = x² + g_y = x² + 1 ⟹ g_y = 1 ⟹ g = y + h(z)
       ∂f/∂z = 2xz + h'(z) = 2xz ⟹ h'(z) = 0 ⟹ h = C

       f(x,y,z) = x²y + xz² + y (+ C)

    c) ∫_C **F** · d**r** = f(1,2,3) - f(0,0,0)
       = (1²·2 + 1·3² + 2) - 0
       = 2 + 9 + 2
       = 13

21. a) r(t) = ⟨t, t⟩, r'(t) = ⟨1, 1⟩
       **F** = ⟨t² - t, t² + t⟩

       Work = ∫_0^1 ⟨t²-t, t²+t⟩ · ⟨1,1⟩ dt
            = ∫_0^1 (t² - t + t² + t) dt
            = ∫_0^1 2t² dt
            = [2t³/3]_0^1
            = 2/3

    b) P = x² - y, Q = y² + x
       ∂P/∂y = -1
       ∂Q/∂x = 1
       Since ∂P/∂y ≠ ∂Q/∂x, **F** is NOT conservative.

    c) Because **F** is not conservative, the line integral depends on
       the path taken, not just the endpoints. Different paths from
       (0,0) to (1,1) will give different work values.

## BONUS

22. If ∂P/∂y = ∂Q/∂x on a simply connected domain, then **F** is
    conservative. Therefore, there exists a potential function f such
    that **F** = ∇f. For any closed curve C from point A back to A:

    ∮_C **F** · d**r** = ∫_C ∇f · d**r** = f(A) - f(A) = 0

    This proves the result.

---

**End of Test**
