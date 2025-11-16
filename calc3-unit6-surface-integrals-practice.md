# Calculus 3 - Unit 6: Surface Integrals - Practice Problems

## Instructions
- Show all work for full credit
- Check your answers at the end

---

## Section 1: Parametric Surfaces (1-15)

Parametrize the surface.

1. The plane z = 2x + 3y
2. The cylinder x² + z² = 4
3. The sphere x² + y² + z² = 9
4. The cone z² = x² + y², z ≥ 0
5. The paraboloid z = x² + y²
6. The part of the plane 2x + y + z = 4 in the first octant
7. The ellipsoid x²/4 + y²/9 + z² = 1
8. The torus (a + b cos v)² = x² + y², z = b sin v
9. The helicoid z = θ in cylindrical coordinates
10. The Möbius strip

Find r_u and r_v.

11. r(u,v) = ⟨u, v, u² + v²⟩
12. r(u,v) = ⟨u cos v, u sin v, u⟩
13. r(u,v) = ⟨cos u sin v, sin u sin v, cos v⟩
14. r(u,v) = ⟨u, v, 2u + 3v⟩
15. r(u,v) = ⟨u, u + v, v⟩

## Section 2: Normal Vectors (16-30)

Find r_u × r_v.

16. r(u,v) = ⟨u, v, 0⟩
17. r(u,v) = ⟨u, v, u + v⟩
18. r(u,v) = ⟨cos u, sin u, v⟩
19. r(u,v) = ⟨u, v, u² + v²⟩
20. r(u,v) = ⟨a cos u sin v, a sin u sin v, a cos v⟩

Find |r_u × r_v|.

21. r(u,v) = ⟨u, v, 2u + 3v⟩
22. r(u,v) = ⟨2cos u, 2sin u, v⟩
23. r(u,v) = ⟨u, v, √(1-u²-v²)⟩
24. r(u,v) = ⟨u cos v, u sin v, v⟩
25. r(u,v) = ⟨cos u, sin u, u⟩

Find the unit normal vector.

26. At (1,0,0) on x² + y² + z² = 1
27. At (1,1,2) on z = x² + y²
28. At (0,1,0) on x² + z² = 1
29. Outward from cylinder x² + y² = 4 at (2,0,1)
30. Upward from paraboloid z = 9 - x² - y² at origin

## Section 3: Surface Area (31-50)

Find the surface area.

31. z = 2x + 3y over [0,1] × [0,2]
32. z = x + y over triangle (0,0), (1,0), (0,1)
33. Sphere x² + y² + z² = 4
34. Cone z = √(x²+y²), 0 ≤ z ≤ 3
35. Paraboloid z = x² + y², 0 ≤ z ≤ 4
36. Cylinder x² + y² = 1, 0 ≤ z ≤ 2
37. Hemisphere z = √(4-x²-y²)
38. Part of plane x + y + z = 1 in first octant
39. z = xy over [0,1] × [0,1]
40. Torus with radii a and b

Find surface area using given parametrization.

41. r(u,v) = ⟨u, v, u²+v²⟩, 0 ≤ u,v ≤ 1
42. r(θ,z) = ⟨3cos θ, 3sin θ, z⟩, 0 ≤ θ ≤ 2π, 0 ≤ z ≤ 5
43. r(φ,θ) = ⟨2sinφ cosθ, 2sinφ sinθ, 2cosφ⟩, 0 ≤ φ ≤ π, 0 ≤ θ ≤ 2π
44. r(u,v) = ⟨u, v, 4-u-v⟩ over triangle
45. r(r,θ) = ⟨r cosθ, r sinθ, r⟩, 0 ≤ r ≤ 2, 0 ≤ θ ≤ 2π

Compare surface areas.

46. Plane vs paraboloid over same base
47. Sphere vs cylinder with same radius
48. Cone vs lateral surface area formula
49. Hemisphere vs inscribed cylinder
50. Ellipsoid vs sphere

## Section 4: Surface Integrals of Scalar Functions (51-70)

Evaluate ∬_S f dS.

51. f = z, S: z = x + y, 0 ≤ x,y ≤ 1
52. f = x² + y², S: sphere x² + y² + z² = 1
53. f = xyz, S: first octant of x + y + z = 1
54. f = z², S: cone z = √(x²+y²), 0 ≤ z ≤ 1
55. f = 1, S: paraboloid z = 1 - x² - y²
56. f = x + y + z, S: cube faces, 0 ≤ x,y,z ≤ 1
57. f = xy, S: cylinder x² + y² = 1, 0 ≤ z ≤ 1
58. f = z, S: hemisphere z = √(1-x²-y²)
59. f = e^z, S: portion of plane z = x in unit cylinder
60. f = x² + y² + z², S: sphere of radius a

Find the mass.

61. S: z = x² + y², 0 ≤ z ≤ 1; ρ = z
62. S: hemisphere z = √(1-x²-y²); ρ = 1
63. S: cone z = √(x²+y²), 0 ≤ z ≤ h; ρ = z
64. S: cylinder x² + y² = a², 0 ≤ z ≤ h; ρ = x² + y²
65. S: sphere x² + y² + z² = a²; ρ = z²

Find center of mass.

66. Hemisphere z = √(a²-x²-y²) with ρ = 1
67. Cone z = √(x²+y²), 0 ≤ z ≤ 1, ρ = z
68. Cylinder x² + y² = 1, 0 ≤ z ≤ 1, ρ = 1
69. First octant of x + y + z = 1 with ρ = 1
70. Paraboloid z = 1 - x² - y² with ρ = z

## Section 5: Surface Integrals of Vector Fields (71-90)

Evaluate ∬_S **F** · d**S** for the given vector field and surface.

71. **F** = ⟨0,0,1⟩, S: z = 1, x²+y² ≤ 1, upward
72. **F** = ⟨x,y,z⟩, S: sphere x²+y²+z² = 1, outward
73. **F** = ⟨0,0,z⟩, S: paraboloid z = x²+y², z ≤ 1, upward
74. **F** = ⟨y,-x,0⟩, S: cylinder x²+y² = 1, 0 ≤ z ≤ 1, outward
75. **F** = ⟨x,y,0⟩, S: hemisphere z = √(1-x²-y²), outward
76. **F** = ⟨x²,y²,z²⟩, S: unit cube faces, outward
77. **F** = ⟨xyz,0,0⟩, S: plane x = 1, 0 ≤ y,z ≤ 1
78. **F** = ⟨1,1,1⟩, S: cone z = √(x²+y²), z ≤ 2, upward
79. **F** = ⟨z,0,x⟩, S: part of plane y = 0 in unit ball
80. **F** = **r**/|**r**|³, S: sphere of radius a

Compute flux.

81. **F** = ⟨0,0,z⟩ through z = 4, x²+y² ≤ 4
82. **F** = ⟨x,y,z⟩ through closed cylinder x²+y² ≤ 1, 0 ≤ z ≤ 1
83. **F** = ⟨x,0,0⟩ through sphere x²+y²+z² = 4
84. **F** = ⟨y,x,z²⟩ through paraboloid z = 1-x²-y², z ≥ 0
85. **F** = ⟨sin x, cos y, z⟩ through unit square in xy-plane

Verify calculations.

86. **F** = ⟨x,y,z⟩, S: boundary of unit cube
87. **F** = ∇(xyz), S: tetrahedron x+y+z ≤ 1
88. Compare flux through different surfaces with same boundary
89. **F** = ⟨-y,x,1⟩, S: disk at various heights
90. Orientation reversal effect on flux

## Section 6: Applications and Mixed Problems (91-100)

91. Find work done by expanding sphere of radius R against pressure P
92. Calculate heat flow through cylindrical surface
93. Electric flux through cube in constant field **E**
94. Fluid flow rate through paraboloid
95. Magnetic flux through hemisphere

96. Surface area of ellipsoid x²/a² + y²/b² + z²/c² = 1
97. Moment of inertia of spherical shell
98. Flux of **F** = curl(**G**) through closed surface
99. Surface integral of Laplacian over sphere
100. Compare parametrizations: same surface, different parameters

---

# ANSWER KEY

[Selected Answers]

1. r(u,v) = ⟨u, v, 2u+3v⟩
2. r(θ,z) = ⟨2cosθ, z, 2sinθ⟩
3. r(φ,θ) = ⟨3sinφ cosθ, 3sinφ sinθ, 3cosφ⟩
...
21. √14
22. 2
23. 1/√(1-u²-v²)
...
31. 2√14
32. √3/2
33. 16π
34. 9π√2
35. π(17√17-1)/6
36. 4π
37. 8π
38. √3/2
...
51-100. Detailed calculations provided in full solutions manual

---

**End of Practice Problems**
