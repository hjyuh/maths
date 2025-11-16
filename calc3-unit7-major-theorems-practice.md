# Calculus 3 - Unit 7: Major Theorems - Practice Problems

## Instructions
- Show all work for full credit
- Check your answers at the end

---

## Section 1: Green's Theorem (1-25)

Use Green's Theorem to evaluate the line integral.

1. ∮_C y dx + x dy, C: unit circle
2. ∮_C (x² - y²) dx + 2xy dy, C: x² + y² = 4
3. ∮_C y² dx + x² dy, C: square [0,1] × [0,1]
4. ∮_C (e^x + y²) dx + (e^y + x²) dy, C: triangle (0,0), (1,0), (0,1)
5. ∮_C -y dx + x dy, C: circle x² + y² = a²
6. ∮_C (x + y) dx + (x - y) dy, C: boundary of region between y = x² and y = x
7. ∮_C xy dx + (x + y) dy, C: rectangle [0,2] × [0,3]
8. ∮_C (x² + y) dx + (x + y²) dy, C: ellipse x²/4 + y²/9 = 1
9. ∮_C sin x dx + cos y dy, C: any closed curve
10. ∮_C y³ dx - x³ dy, C: circle x² + y² = 1

Use Green's Theorem to find the area.

11. Ellipse x²/a² + y²/b² = 1
12. Region bounded by y = x² and y = 4
13. Cardioid r = 1 + cos θ
14. One loop of r = sin 2θ
15. Triangle with vertices (0,0), (a,0), (0,b)

Verify Green's Theorem for the given field and curve.

16. **F** = ⟨x, y⟩, C: unit square
17. **F** = ⟨y, -x⟩, C: unit circle
18. **F** = ⟨x², y²⟩, C: boundary of D = {(x,y): 0 ≤ x ≤ 1, 0 ≤ y ≤ x}
19. **F** = ⟨xy, x + y⟩, C: rectangle [0,1] × [0,2]
20. **F** = ⟨e^x sin y, e^x cos y⟩, C: square [-1,1] × [-1,1]

Calculate using Green's Theorem.

21. Work done by **F** = ⟨y², 3xy⟩ around unit circle
22. Circulation of **F** = ⟨-y, x⟩ around ellipse x²/4 + y² = 1
23. ∮_C (x² + y²) dx + 2xy dy around boundary of half-disk
24. Flux of **F** = ⟨x, y⟩ across unit circle
25. ∮_C **F** · **n** ds where **F** = ⟨P, Q⟩ and C encloses D

## Section 2: Curl and Divergence (26-50)

Find curl **F**.

26. **F** = ⟨y, -x, 0⟩
27. **F** = ⟨yz, xz, xy⟩
28. **F** = ⟨x², y², z²⟩
29. **F** = ⟨e^x, e^y, e^z⟩
30. **F** = ⟨z, x, y⟩
31. **F** = ∇(xyz)
32. **F** = **r**/|**r**|³
33. **F** = ⟨sin y, sin z, sin x⟩
34. **F** = ⟨xy, yz, zx⟩
35. **F** = ⟨x² - y², 2xy, 0⟩

Find div **F**.

36. **F** = ⟨x, y, z⟩
37. **F** = ⟨x², y², z²⟩
38. **F** = ⟨yz, xz, xy⟩
39. **F** = **r**/|**r**|
40. **F** = ⟨sin x, cos y, e^z⟩
41. **F** = ∇(x² + y² + z²)
42. **F** = ⟨e^x, e^y, e^z⟩
43. **F** = ⟨x³, y³, z³⟩
44. **F** = curl(⟨y, -x, z⟩)
45. **F** = ⟨ln x, ln y, ln z⟩

Verify identities.

46. div(curl **F**) = 0 for **F** = ⟨x, y, z⟩
47. curl(∇f) = **0** for f = xyz
48. div(**F** × **G**) for **F** = **i**, **G** = **j**
49. curl(f**F**) for f = x, **F** = ⟨y, z, x⟩
50. ∇ × (∇ × **F**) = ∇(∇ · **F**) - ∇²**F**

## Section 3: Stokes' Theorem (51-75)

Use Stokes' Theorem to evaluate ∮_C **F** · d**r**.

51. **F** = ⟨-y, x, 0⟩, C: x² + y² = 1 at z = 0
52. **F** = ⟨z, x, y⟩, C: boundary of triangle in plane x + y + z = 1
53. **F** = ⟨y, -x, z²⟩, C: circle x² + y² = 4 at z = 3
54. **F** = ⟨yz, xz, xy⟩, C: curve of intersection of x² + y² = 1 and z = y²
55. **F** = ⟨xy, yz, zx⟩, C: boundary of S: z = 4 - x² - y², z ≥ 0

Use Stokes' to evaluate ∬_S (curl **F**) · d**S**.

56. **F** = ⟨x², y², z²⟩, S: hemisphere z = √(1 - x² - y²)
57. **F** = ⟨z, x, y⟩, S: part of paraboloid z = 1 - x² - y², z ≥ 0
58. **F** = ⟨y, -x, 0⟩, S: any surface with boundary C (unit circle)
59. **F** = ∇f, S: any surface (what should the answer be?)
60. **F** = ⟨sin y, cos x, xyz⟩, S: upper half of sphere x² + y² + z² = 1

Verify Stokes' Theorem.

61. **F** = ⟨-y, x, 0⟩, S: disk x² + y² ≤ 1 at z = 0
62. **F** = ⟨z, x, y⟩, S: portion of plane z = y inside cylinder x² + y² = 1
63. **F** = ⟨y², z², x²⟩, S: part of cone z = √(x² + y²), 0 ≤ z ≤ 1
64. **F** = ⟨xy, yz, zx⟩, S: cube face z = 1, 0 ≤ x,y ≤ 1
65. **F** = ⟨e^z, e^x, e^y⟩, S: hemisphere with boundary

Applications of Stokes' Theorem.

66. Find circulation of **F** = curl(**G**) around any closed curve
67. Compute work for **F** with curl **F** = **k** around unit circle
68. Show ∮_C ∇f · d**r** = 0 using Stokes'
69. Evaluate using easiest surface choice
70. Maxwell's equation: ∮_C **E** · d**r** = -d/dt ∬_S **B** · d**S**

Choose convenient surface for Stokes'.

71. **F** = ⟨z², x², y²⟩, C: twisted curve (use flat disk)
72. **F** = ⟨y, z, x⟩, C: circle x² + y² = 1 at z = 2
73. **F** = ⟨xy, yz, zx⟩, C: ellipse (choose simple surface)
74. **F** with known curl, complex C (use easy S)
75. Compare using different surfaces with same boundary

## Section 4: Divergence Theorem (76-100)

Use Divergence Theorem to find flux through the closed surface.

76. **F** = ⟨x, y, z⟩, S: sphere x² + y² + z² = 4
77. **F** = ⟨x², y², z²⟩, S: unit cube [0,1]³
78. **F** = ⟨x, 0, 0⟩, S: cylinder x² + y² ≤ 1, 0 ≤ z ≤ 2
79. **F** = **r**/|**r**|, S: sphere of radius R
80. **F** = ⟨xy, yz, zx⟩, S: tetrahedron x + y + z ≤ 1, x,y,z ≥ 0

Verify Divergence Theorem.

81. **F** = ⟨x, y, z⟩, E: unit ball
82. **F** = ⟨x², y², z²⟩, E: box [0,a] × [0,b] × [0,c]
83. **F** = ⟨z, y, x⟩, E: cylinder x² + y² ≤ 1, 0 ≤ z ≤ 1
84. **F** = ⟨xy, yz, zx⟩, E: region between concentric spheres
85. **F** = ∇f, E: any solid (what should flux be?)

Calculate using Divergence Theorem.

86. Flux of **F** = ⟨x³, y³, z³⟩ through sphere
87. ∬_S **F** · d**S** for **F** incompressible (div **F** = 0)
88. Outward flux of **F** = ⟨sin x, cos y, z²⟩ through cube
89. Flux of **F** = **r** through surface of ellipsoid
90. **F** = ⟨e^x, e^y, e^z⟩ through any closed surface enclosing volume V

Applications.

91. Heat flow: ∬_S k∇T · d**S** = ∭_E source dV
92. Fluid flow: if div **v** = 0, flux in = flux out
93. Electric flux: ∬_S **E** · d**S** = q/ε₀
94. Incompressible flow through region
95. Conservation of mass

Compare methods.

96. Direct calculation vs Divergence Theorem for simple surfaces
97. When Divergence Theorem simplifies calculation
98. **F** with singularity (exclude small sphere)
99. Flux through part of surface (add closure)
100. Verify div **F** by calculating flux

---

# ANSWER KEY

[Selected answers provided]

Section 1: 1. 0  2. 0  3. 2/3  4. 1  5. 2πa²  6. 1/6  7. 6  8. 12π  9. 0  10. 0
11. πab  12. 32/3  13. 3π/2  14. π/8  15. ab/2  16-25. Various verifications

Section 2: 26. ⟨0,0,-2⟩  27. ⟨0,0,0⟩  28. ⟨0,0,0⟩  29. ⟨0,0,0⟩  30. ⟨1,1,1⟩
31. **0** (gradient field)  36. 3  37. 2x+2y+2z  38. 0  39. 3  40. cos x - sin y + e^z
41. 6  46-50. Identity verifications

Section 3: 51. 2π  52. 0  53. 8π  54. 0  55. 0 (by symmetry or direct)
56-75. Various applications and verifications

Section 4: 76. 32π  77. 3  78. 2π  79. 4πR²  80. 0
81-100. Verifications and applications

---

**End of Practice Problems**
