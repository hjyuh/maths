# Calculus 3 - Unit 6: Surface Integrals - Final Test

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

1. For parametric surface r(u,v), the normal vector is:
   - A) r_u + r_v
   - B) r_u · r_v
   - C) r_u × r_v
   - D) |r_u||r_v|

2. Surface area of S parametrized by r(u,v) is:
   - A) ∬_D |r_u + r_v| dA
   - B) ∬_D |r_u × r_v| dA
   - C) ∬_D r_u · r_v dA
   - D) ∬_D dA

3. The surface area of a sphere of radius a is:
   - A) 2πa²
   - B) 3πa²
   - C) 4πa²
   - D) 4πa³/3

4. For surface integral ∬_S f dS, dS equals:
   - A) dA
   - B) |r'(t)| dt
   - C) |r_u × r_v| dA
   - D) r_u × r_v dA

5. The flux of **F** through S is:
   - A) ∬_S **F** dS
   - B) ∬_S f · **F** dS
   - C) ∬_S **F** · n̂ dS
   - D) ∬_S |**F**| dS

6. For upward orientation of z = g(x,y), the normal component is:
   - A) Always positive
   - B) Always negative
   - C) Depends on g
   - D) Always 1

7. The flux of **F** = ⟨0,0,c⟩ through a horizontal plane is:
   - A) 0
   - B) c · Area
   - C) c
   - D) Area

8. Which parametrizes the cylinder x² + y² = 4?
   - A) r(u,v) = ⟨u, v, 4⟩
   - B) r(θ,z) = ⟨2cosθ, 2sinθ, z⟩
   - C) r(u,v) = ⟨2u, 2v, 0⟩
   - D) r(r,θ) = ⟨r, θ, 0⟩

9. The outward normal to sphere x²+y²+z² = a² at (x,y,z) points in direction:
   - A) ⟨x,y,z⟩
   - B) ⟨-x,-y,-z⟩
   - C) ⟨0,0,1⟩
   - D) ⟨1,1,1⟩

10. For **F** = ⟨x,y,z⟩, flux through sphere of radius R equals:
    - A) 0
    - B) 4πR²
    - C) 4πR³
    - D) 4πR³/3

---

## Part 2: Short Answer (40 points, 5 points each)

11. Parametrize the plane z = 2x + y.

12. Find r_u × r_v for r(u,v) = ⟨u, v, u²+v²⟩.

13. Find the surface area of z = x + y over the square [0,1] × [0,1].

14. Evaluate ∬_S z dS where S is the plane z = 2 over the disk x²+y² ≤ 1.

15. Find the flux of **F** = ⟨0,0,1⟩ upward through the disk z = 3, x²+y² ≤ 4.

16. Parametrize the sphere x² + y² + z² = 9.

17. Find |r_u × r_v| for the cylinder r(θ,z) = ⟨2cosθ, 2sinθ, z⟩.

18. Calculate ∬_S 1 dS where S is the hemisphere z = √(4-x²-y²).

---

## Part 3: Free Response (30 points, 10 points each)

19. **Surface Area Calculation (10 points)**

    Consider the cone z = √(x²+y²) for 0 ≤ z ≤ 2.

    a) Parametrize the surface using cylindrical coordinates. (2 points)

    b) Compute r_r and r_θ. (2 points)

    c) Find |r_r × r_θ|. (3 points)

    d) Calculate the surface area. (3 points)

20. **Surface Integral of Scalar Function (10 points)**

    Let S be the part of the paraboloid z = 4 - x² - y² that lies above the xy-plane.

    a) Set up the surface integral ∬_S z dS using (x,y) as parameters. (4 points)

    b) Convert to polar coordinates. (3 points)

    c) Evaluate the integral. (3 points)

21. **Flux Calculation (10 points)**

    Find the flux of **F** = ⟨x, y, z⟩ outward through the closed cylinder bounded by x² + y² = 1, z = 0, and z = 2.

    a) Calculate flux through the lateral surface. (4 points)

    b) Calculate flux through the top (z = 2). (3 points)

    c) Calculate flux through the bottom (z = 0). (2 points)

    d) Find the total flux. (1 point)

---

## BONUS (5 points)

22. Prove that the flux of **F** = ⟨x,y,z⟩ through any sphere centered at the origin equals 3 times the volume enclosed.

---

# ANSWER KEY

## Part 1: Multiple Choice

1. **C** (Normal = r_u × r_v)
2. **B** (Surface area formula)
3. **C** (Standard formula)
4. **C** (Surface element)
5. **C** (Flux definition)
6. **A** (Upward has positive z-component)
7. **B** (Constant field through plane)
8. **B** (Cylindrical parametrization)
9. **A** (Radial direction)
10. **C** (By divergence theorem or direct calculation)

## Part 2: Short Answer

11. r(u,v) = ⟨u, v, 2u+v⟩ or r(x,y) = ⟨x, y, 2x+y⟩

12. r_u = ⟨1, 0, 2u⟩
    r_v = ⟨0, 1, 2v⟩
    r_u × r_v = ⟨-2u, -2v, 1⟩

13. r_x × r_y = ⟨-1, -1, 1⟩
    |r_x × r_y| = √3
    Area = √3 · 1 = √3

14. Parametrize: r(x,y) = ⟨x, y, 2⟩ over x²+y² ≤ 1
    |r_x × r_y| = 1
    ∬_S 2·1 dA = 2π

15. n = ⟨0,0,1⟩, **F** = ⟨0,0,1⟩
    Flux = ∬_D 1 dA = π(2²) = 4π

16. r(φ,θ) = ⟨3sinφ cosθ, 3sinφ sinθ, 3cosφ⟩
    0 ≤ φ ≤ π, 0 ≤ θ ≤ 2π

17. r_θ = ⟨-2sinθ, 2cosθ, 0⟩
    r_z = ⟨0, 0, 1⟩
    r_θ × r_z = ⟨2cosθ, 2sinθ, 0⟩
    |r_θ × r_z| = 2

18. Surface area of hemisphere = (1/2)(4πr²) = 8π

## Part 3: Free Response

19. a) r(r,θ) = ⟨r cosθ, r sinθ, r⟩, 0 ≤ r ≤ 2, 0 ≤ θ ≤ 2π

    b) r_r = ⟨cosθ, sinθ, 1⟩
       r_θ = ⟨-r sinθ, r cosθ, 0⟩

    c) r_r × r_θ = | i        j        k      |
                    | cosθ     sinθ     1      |
                    |-r sinθ   r cosθ   0      |
                  = ⟨-r cosθ, -r sinθ, r⟩

       |r_r × r_θ| = √(r²cos²θ + r²sin²θ + r²) = r√2

    d) A = ∫_0^{2π} ∫_0^2 r√2 dr dθ
        = √2 ∫_0^{2π} [r²/2]_0^2 dθ
        = √2 ∫_0^{2π} 2 dθ
        = 4π√2

20. a) r(x,y) = ⟨x, y, 4-x²-y²⟩, x²+y² ≤ 4
       r_x = ⟨1, 0, -2x⟩
       r_y = ⟨0, 1, -2y⟩
       r_x × r_y = ⟨2x, 2y, 1⟩
       |r_x × r_y| = √(4x²+4y²+1)

       ∬_S z dS = ∬_D (4-x²-y²)√(4x²+4y²+1) dA

    b) ∫_0^{2π} ∫_0^2 (4-r²)√(4r²+1) r dr dθ

    c) This requires substitution u = 4r²+1:
       Result = 16π√17/3 (detailed calculation omitted)

21. a) Lateral surface: r(θ,z) = ⟨cosθ, sinθ, z⟩
       r_θ × r_z = ⟨cosθ, sinθ, 0⟩
       **F** = ⟨cosθ, sinθ, z⟩
       **F** · (r_θ × r_z) = cos²θ + sin²θ = 1

       Flux = ∫_0^2 ∫_0^{2π} 1 dθ dz = 4π

    b) Top (z = 2): n = ⟨0,0,1⟩
       **F** = ⟨x, y, 2⟩
       Flux = ∬_D 2 dA = 2π

    c) Bottom (z = 0): n = ⟨0,0,-1⟩ (outward = downward)
       **F** = ⟨x, y, 0⟩
       Flux = ∬_D 0 dA = 0

    d) Total flux = 4π + 2π + 0 = 6π

## BONUS

22. For sphere of radius R centered at origin:
    div(**F**) = ∂x/∂x + ∂y/∂y + ∂z/∂z = 3

    By Divergence Theorem:
    Flux = ∭_E div(**F**) dV = ∭_E 3 dV = 3·Volume = 3·(4πR³/3) = 4πR³

    This can also be verified by direct calculation using spherical coordinates.

---

**End of Test**
