# Calculus 3 - Unit 7: Major Theorems - Final Test

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

1. Green's Theorem states ∮_C P dx + Q dy equals:
   - A) ∬_D (∂P/∂x + ∂Q/∂y) dA
   - B) ∬_D (∂Q/∂x - ∂P/∂y) dA
   - C) ∬_D (∂P/∂y - ∂Q/∂x) dA
   - D) ∬_D P + Q dA

2. For **F** = ⟨P, Q, R⟩, curl **F** equals:
   - A) ∂P/∂x + ∂Q/∂y + ∂R/∂z
   - B) ∇ · **F**
   - C) ∇ × **F**
   - D) ∇**F**

3. For **F** = ⟨P, Q, R⟩, div **F** equals:
   - A) ∇ × **F**
   - B) ∂P/∂x + ∂Q/∂y + ∂R/∂z
   - C) ⟨∂P/∂x, ∂Q/∂y, ∂R/∂z⟩
   - D) P + Q + R

4. Stokes' Theorem relates:
   - A) Line integral to double integral
   - B) Surface integral to triple integral
   - C) Line integral to surface integral
   - D) Double integral to triple integral

5. The Divergence Theorem states ∬_S **F** · d**S** equals:
   - A) ∭_E **F** dV
   - B) ∭_E curl **F** dV
   - C) ∭_E div **F** dV
   - D) ∮_C **F** · d**r**

6. div(curl **F**) always equals:
   - A) 1
   - B) 0
   - C) **F**
   - D) ∇**F**

7. curl(∇f) always equals:
   - A) f
   - B) ∇f
   - C) **0**
   - D) 1

8. For **F** = ⟨x, y, z⟩, div **F** equals:
   - A) 0
   - B) 1
   - C) 2
   - D) 3

9. Using Green's Theorem, area of region D equals:
   - A) ∮_C x dy
   - B) (1/2)∮_C (x dy - y dx)
   - C) ∮_C y dx
   - D) All of the above

10. Stokes' Theorem generalizes which theorem to 3D?
    - A) Fundamental Theorem of Calculus
    - B) Green's Theorem
    - C) Divergence Theorem
    - D) Mean Value Theorem

---

## Part 2: Short Answer (40 points, 5 points each)

11. Use Green's Theorem to evaluate ∮_C y dx + x dy where C is the unit circle, counterclockwise.

12. Find curl **F** for **F** = ⟨yz, xz, xy⟩.

13. Find div **F** for **F** = ⟨x², y², z²⟩.

14. Verify that div(curl **F**) = 0 for **F** = ⟨x, y, z⟩.

15. Use Stokes' Theorem to evaluate ∮_C **F** · d**r** where **F** = ⟨-y, x, 0⟩ and C is the unit circle at z = 0, counterclockwise.

16. Use the Divergence Theorem to find the flux of **F** = ⟨x, y, z⟩ outward through the sphere x² + y² + z² = 1.

17. Compute curl **F** for **F** = ⟨z, x, y⟩.

18. Find the area of the ellipse x²/4 + y² = 1 using Green's Theorem.

---

## Part 3: Free Response (30 points, 10 points each)

19. **Green's Theorem Application (10 points)**

    Let C be the boundary of the region between y = x² and y = 2x, oriented counterclockwise.

    a) Sketch the region. (2 points)

    b) Use Green's Theorem to evaluate ∮_C (x² - y) dx + x dy. (8 points)

20. **Stokes' Theorem (10 points)**

    Consider the vector field **F** = ⟨z, x, y⟩ and let S be the part of the paraboloid z = 4 - x² - y² that lies above the xy-plane, with upward orientation.

    a) Find curl **F**. (3 points)

    b) Set up the surface integral ∬_S (curl **F**) · d**S** using Stokes' Theorem. (3 points)

    c) Evaluate the integral by instead computing the line integral ∮_C **F** · d**r** around the boundary circle. (4 points)

21. **Divergence Theorem (10 points)**

    Let E be the solid cylinder x² + y² ≤ 1, 0 ≤ z ≤ 2.

    a) Find div **F** for **F** = ⟨x², y², z²⟩. (2 points)

    b) Use the Divergence Theorem to set up ∬_S **F** · d**S** where S is the boundary of E. (3 points)

    c) Evaluate the triple integral to find the flux. (5 points)

---

## BONUS (5 points)

22. **Theoretical Question**

    Prove that if **F** is a conservative vector field (i.e., **F** = ∇f for some function f), then curl **F** = **0**. Then use Stokes' Theorem to show that ∮_C **F** · d**r** = 0 for any closed curve C.

---

# ANSWER KEY

## Part 1: Multiple Choice

1. **B** (Definition of Green's Theorem)
2. **C** (curl = ∇ × **F**)
3. **B** (div = ∇ · **F**)
4. **C** (Stokes relates circulation to curl flux)
5. **C** (Divergence Theorem)
6. **B** (Always zero - vector identity)
7. **C** (Gradient fields are irrotational)
8. **D** (1 + 1 + 1 = 3)
9. **B** (Standard area formula)
10. **B** (Stokes generalizes Green's)

## Part 2: Short Answer

11. P = y, Q = x
    ∂Q/∂x = 1, ∂P/∂y = 1

    ∮_C y dx + x dy = ∬_D (1 - 1) dA = 0

12. curl **F** = | i    j    k   |
                 | ∂/∂x ∂/∂y ∂/∂z |
                 | yz   xz   xy  |
               = ⟨x - x, y - y, z - z⟩ = ⟨0, 0, 0⟩

13. div **F** = ∂(x²)/∂x + ∂(y²)/∂y + ∂(z²)/∂z = 2x + 2y + 2z

14. curl **F** = ⟨0, 0, 0⟩ (from example above)
    div(curl **F**) = div(⟨0, 0, 0⟩) = 0 + 0 + 0 = 0 ✓

15. curl **F** = ⟨0, 0, 2⟩
    S: disk x² + y² ≤ 1 at z = 0, upward
    n = ⟨0, 0, 1⟩

    ∮_C **F** · d**r** = ∬_D 2 dA = 2π

16. div **F** = 1 + 1 + 1 = 3

    ∬_S **F** · d**S** = ∭_E 3 dV = 3 · (4π/3) = 4π

17. curl **F** = | i    j    k   |
                 | ∂/∂x ∂/∂y ∂/∂z |
                 | z    x    y   |
               = ⟨1, 1, 1⟩

18. Parametrize: x = 2cos t, y = sin t
    A = (1/2)∮_C (x dy - y dx)
      = (1/2)∫_0^{2π} [(2cos t)(cos t) - (sin t)(-2sin t)] dt
      = (1/2)∫_0^{2π} (2cos²t + 2sin²t) dt
      = ∫_0^{2π} dt = 2π

## Part 3: Free Response

19. a) Region bounded by parabola y = x² and line y = 2x
       Intersections: x² = 2x → x = 0, 2

    b) P = x² - y, Q = x
       ∂Q/∂x = 1, ∂P/∂y = -1

       ∮_C = ∬_D (1 - (-1)) dA = ∬_D 2 dA

       = ∫_0^2 ∫_{x²}^{2x} 2 dy dx
       = ∫_0^2 2(2x - x²) dx
       = ∫_0^2 (4x - 2x²) dx
       = [2x² - (2x³/3)]_0^2
       = 8 - 16/3
       = 24/3 - 16/3
       = 8/3

20. a) curl **F** = ⟨1, 1, 1⟩

    b) Boundary C: circle x² + y² = 4 at z = 0

       By Stokes': ∬_S (curl **F**) · d**S** = ∮_C **F** · d**r**

    c) On boundary: z = 0, so **F** = ⟨0, x, y⟩
       Parametrize: r(t) = ⟨2cos t, 2sin t, 0⟩, 0 ≤ t ≤ 2π
       r'(t) = ⟨-2sin t, 2cos t, 0⟩

       **F**(r(t)) = ⟨0, 2cos t, 2sin t⟩

       ∮_C **F** · d**r** = ∫_0^{2π} ⟨0, 2cos t, 2sin t⟩ · ⟨-2sin t, 2cos t, 0⟩ dt
                          = ∫_0^{2π} 4cos²t dt
                          = ∫_0^{2π} 2(1 + cos 2t) dt
                          = 4π

21. a) div **F** = 2x + 2y + 2z

    b) ∬_S **F** · d**S** = ∭_E (2x + 2y + 2z) dV

    c) Convert to cylindrical:

       ∭_E (2x + 2y + 2z) dV = ∫_0^{2π} ∫_0^1 ∫_0^2 (2r cos θ + 2r sin θ + 2z) r dz dr dθ

       = ∫_0^{2π} ∫_0^1 r[2r cos θ·2 + 2r sin θ·2 + 2z²]_0^2 dr dθ

       = ∫_0^{2π} ∫_0^1 (4r² cos θ + 4r² sin θ + 8r) dr dθ

       First integral (with cos θ and sin θ) integrates to 0 over [0, 2π]

       = ∫_0^{2π} ∫_0^1 8r dr dθ
       = ∫_0^{2π} [4r²]_0^1 dθ
       = ∫_0^{2π} 4 dθ
       = 8π

## BONUS

22. If **F** = ∇f = ⟨f_x, f_y, f_z⟩, then:

    curl **F** = curl(∇f) = ⟨f_zy - f_yz, f_xz - f_zx, f_yx - f_xy⟩

    By Clairaut's Theorem (mixed partials are equal):
    f_zy = f_yz, f_xz = f_zx, f_yx = f_xy

    Therefore: curl **F** = ⟨0, 0, 0⟩ = **0**

    Now apply Stokes' Theorem with S any surface bounded by C:

    ∮_C **F** · d**r** = ∬_S (curl **F**) · d**S**
                       = ∬_S **0** · d**S**
                       = 0

    This proves that conservative fields have zero circulation around
    any closed curve.

---

**End of Test**
