# Calculus 3 - Unit 4: Multiple Integration - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 105 (100 + 5 bonus)**

---

## Instructions
- Show all work for full credit
- Simplify all final answers
- Calculators allowed for arithmetic only
- You have 75 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

1. ∬_R (x + y) dA over R = [0,1] × [0,1] equals:
   - A) 1/2
   - B) 1
   - C) 2
   - D) 1/4

2. To reverse ∫_0^1 ∫_0^x f(x,y) dy dx, we get:
   - A) ∫_0^1 ∫_0^y f(x,y) dx dy
   - B) ∫_0^1 ∫_y^1 f(x,y) dx dy
   - C) ∫_0^1 ∫_x^1 f(x,y) dy dx
   - D) ∫_0^1 ∫_0^1 f(x,y) dx dy

3. In polar coordinates, dA equals:
   - A) dr dθ
   - B) r dr dθ
   - C) r² dr dθ
   - D) r dθ dr

4. The volume under z = 4 over the unit square is:
   - A) 1
   - B) 2
   - C) 4
   - D) 16

5. In cylindrical coordinates, dV equals:
   - A) dr dθ dz
   - B) r dr dθ dz
   - C) r² dr dθ dz
   - D) r dz dθ dr

6. In spherical coordinates, dV equals:
   - A) ρ² dρ dφ dθ
   - B) ρ² sin φ dρ dφ dθ
   - C) ρ sin φ dρ dφ dθ
   - D) ρ³ sin φ dρ dφ dθ

7. The area of the disk x² + y² ≤ 4 is:
   - A) 2π
   - B) 4π
   - C) 8π
   - D) 16π

8. The volume of the sphere x² + y² + z² ≤ 1 is:
   - A) π/3
   - B) 2π/3
   - C) 4π/3
   - D) 4π

9. For mass with density ρ(x,y), the formula is:
   - A) ∬ ρ dA
   - B) ∬ xρ dA
   - C) ∬ yρ dA
   - D) ∬ 1 dA

10. The Jacobian for polar coordinates is:
    - A) 1
    - B) r
    - C) r²
    - D) sin θ

---

## Part 2: Short Answer (40 points, 5 points each)

11. Evaluate ∬_R xy dA where R = [0,2] × [0,1].

12. Evaluate ∫_0^1 ∫_{x²}^x y dy dx.

13. Evaluate ∬_D r dA in polar coordinates where D is the disk x² + y² ≤ 1.

14. Find the volume under z = x + y above the region R = [0,1] × [0,1].

15. Set up (do not evaluate) the triple integral for the volume of the tetrahedron bounded by x + y + z = 2 and the coordinate planes.

16. Convert x² + y² = 4 to polar coordinates.

17. Convert x² + y² + z² = 9 to spherical coordinates.

18. Find the mass of the lamina R = [0,1] × [0,1] with density ρ(x,y) = x + y.

---

## Part 3: Free Response (30 points, 10 points each)

19. **Double Integral Evaluation (10 points)**

    Let D be the region bounded by y = x² and y = x.

    a) Sketch the region D. (2 points)

    b) Set up and evaluate ∬_D xy dA. (8 points)

20. **Polar Coordinates (10 points)**

    a) Sketch the region inside r = 2 sin θ. (2 points)

    b) Find the area of this region using a double integral in polar coordinates. (8 points)

21. **Triple Integral Application (10 points)**

    Consider the solid E bounded by z = 0, z = 4, and x² + y² = 4.

    a) Describe the solid geometrically. (2 points)

    b) Set up the triple integral for the volume using cylindrical coordinates. (4 points)

    c) Evaluate the integral. (4 points)

---

## BONUS (5 points)

22. Find the volume of the solid bounded by the paraboloids z = x² + y² and z = 8 - x² - y².

---

# ANSWER KEY

## Part 1: Multiple Choice

1. **B** (∫_0^1 ∫_0^1 (x+y) dy dx = 1)
2. **B** (Region: 0 ≤ y ≤ 1, y ≤ x ≤ 1)
3. **B** (Polar area element)
4. **C** (Volume = 4·1·1 = 4)
5. **B** (Cylindrical volume element)
6. **B** (Spherical volume element)
7. **B** (π·2² = 4π)
8. **C** (V = 4πr³/3 = 4π/3)
9. **A** (Mass formula)
10. **B** (∂(x,y)/∂(r,θ) = r)

## Part 2: Short Answer

11. ∫_0^2 ∫_0^1 xy dy dx = ∫_0^2 [xy²/2]_0^1 dx = ∫_0^2 x/2 dx = [x²/4]_0^2 = 1

12. ∫_0^1 ∫_{x²}^x y dy dx = ∫_0^1 [y²/2]_{x²}^x dx = ∫_0^1 (x²/2 - x⁴/2) dx
    = [x³/6 - x⁵/10]_0^1 = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15

13. ∫_0^{2π} ∫_0^1 r·r dr dθ = ∫_0^{2π} ∫_0^1 r² dr dθ = ∫_0^{2π} [r³/3]_0^1 dθ
    = ∫_0^{2π} 1/3 dθ = 2π/3

14. V = ∫_0^1 ∫_0^1 (x+y) dy dx = ∫_0^1 [xy + y²/2]_0^1 dx
    = ∫_0^1 (x + 1/2) dx = [x²/2 + x/2]_0^1 = 1/2 + 1/2 = 1

15. V = ∫_0^2 ∫_0^{2-x} ∫_0^{2-x-y} dz dy dx
    (or any equivalent order of integration)

16. r = 2 (since x² + y² = r² = 4)

17. ρ = 3 (since x² + y² + z² = ρ² = 9)

18. m = ∫_0^1 ∫_0^1 (x+y) dy dx = ∫_0^1 [xy + y²/2]_0^1 dx
    = ∫_0^1 (x + 1/2) dx = [x²/2 + x/2]_0^1 = 1

## Part 3: Free Response

19. a) Sketch shows parabola y = x² and line y = x intersecting at (0,0) and (1,1)

    b) Region: 0 ≤ x ≤ 1, x² ≤ y ≤ x

    ∬_D xy dA = ∫_0^1 ∫_{x²}^x xy dy dx
              = ∫_0^1 [xy²/2]_{x²}^x dx
              = ∫_0^1 (x³/2 - x⁵/2) dx
              = [x⁴/8 - x⁶/12]_0^1
              = 1/8 - 1/12
              = 3/24 - 2/24
              = 1/24

20. a) Sketch shows circle of radius 1 centered at (0,1) in Cartesian coordinates,
       or equivalently r = 2 sin θ for 0 ≤ θ ≤ π

    b) A = ∫_0^π ∫_0^{2sinθ} r dr dθ
        = ∫_0^π [r²/2]_0^{2sinθ} dθ
        = ∫_0^π 2sin²θ dθ
        = ∫_0^π (1 - cos 2θ) dθ
        = [θ - sin 2θ/2]_0^π
        = π

21. a) The solid is a cylinder of radius 2 and height 4.

    b) In cylindrical coordinates:
       0 ≤ r ≤ 2, 0 ≤ θ ≤ 2π, 0 ≤ z ≤ 4

       V = ∫_0^{2π} ∫_0^2 ∫_0^4 r dz dr dθ

    c) V = ∫_0^{2π} ∫_0^2 [rz]_0^4 dr dθ
        = ∫_0^{2π} ∫_0^2 4r dr dθ
        = ∫_0^{2π} [2r²]_0^2 dθ
        = ∫_0^{2π} 8 dθ
        = 16π

## BONUS

22. Intersection: x² + y² = 8 - x² - y²
               2(x² + y²) = 8
               x² + y² = 4
               r = 2

    In cylindrical:
    V = ∫_0^{2π} ∫_0^2 ∫_{r²}^{8-r²} r dz dr dθ
      = ∫_0^{2π} ∫_0^2 r(8 - 2r²) dr dθ
      = ∫_0^{2π} ∫_0^2 (8r - 2r³) dr dθ
      = ∫_0^{2π} [4r² - r⁴/2]_0^2 dθ
      = ∫_0^{2π} (16 - 8) dθ
      = ∫_0^{2π} 8 dθ
      = 16π

---

**End of Test**
