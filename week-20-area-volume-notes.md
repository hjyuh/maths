# Week 20: Area, Surface Area, and Volume

## Essential Question
**How are geometric shapes and their properties modeled?**

## Learning Objectives
By the end of this week, students will be able to:
- Calculate areas and perimeters of various 2D shapes
- Derive area formulas using decomposition strategies
- Find surface areas of 3D solids
- Calculate volumes of prisms, pyramids, cylinders, cones, and spheres
- Apply concepts of density and displacement
- Solve real-world problems involving area and volume
- Use geometric modeling to describe and analyze objects

---

## Part 1: Review of Basic Area Formulas

### Rectangle
**Area**: A = lw (length × width)
**Perimeter**: P = 2l + 2w

### Square
**Area**: A = s² (side squared)
**Perimeter**: P = 4s

### Triangle
**Area**: A = ½bh (half base × height)
**Perimeter**: P = a + b + c (sum of all sides)

**Alternative formula using trigonometry**:
A = ½ab·sin(C) where a and b are two sides and C is the included angle

### Parallelogram
**Area**: A = bh (base × height)
**Perimeter**: P = 2a + 2b

**Note**: The height must be perpendicular to the base!

### Trapezoid
**Area**: A = ½h(b₁ + b₂) where h is height and b₁, b₂ are the parallel bases
**Perimeter**: P = sum of all four sides

### Rhombus
**Area**: A = ½d₁d₂ (half the product of the diagonals)
**Alternative**: A = bh (like a parallelogram)

### Kite
**Area**: A = ½d₁d₂ (half the product of the diagonals)

### Example 1: Basic Area Calculations
Find the area of a trapezoid with bases 8 cm and 12 cm and height 5 cm.

**Solution:**
A = ½h(b₁ + b₂)
A = ½(5)(8 + 12)
A = ½(5)(20)
A = 50 cm²

---

## Part 2: Area in the Coordinate Plane (G.GPE.8)

### Distance Formula Review
Distance between (x₁, y₁) and (x₂, y₂):
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### Strategy for Polygons in the Coordinate Plane
1. **Find the vertices** from the given points
2. **Calculate side lengths** using the distance formula
3. **Find the area** using appropriate formulas

### For Rectangles
1. Find length and width using distance formula
2. Area = length × width

### For Triangles
1. Identify the base and find its length
2. Find the height (perpendicular distance)
3. Area = ½ × base × height

**Alternative**: Use the Shoelace Formula (covered later)

### Example 2: Rectangle in Coordinate Plane
A rectangle has vertices at A(2, 3), B(8, 3), C(8, 7), and D(2, 7). Find the area.

**Solution:**
Length AB = √[(8-2)² + (3-3)²] = √36 = 6
Width BC = √[(8-8)² + (7-3)²] = √16 = 4
Area = 6 × 4 = 24 square units

### Example 3: Triangle in Coordinate Plane
Find the area of triangle with vertices A(1, 2), B(5, 2), C(3, 6).

**Solution:**
Base AB = √[(5-1)² + (2-2)²] = 4
Height = vertical distance from C to line AB = 6 - 2 = 4
Area = ½(4)(4) = 8 square units

---

## Part 3: Deriving Area Formulas (G.GMD.1)

### Strategy: Decomposition
Break complex shapes into simpler shapes (rectangles, triangles) whose areas we know.

### Deriving Parallelogram Area
A parallelogram can be rearranged into a rectangle:
1. Cut off a triangle from one end
2. Attach it to the other end
3. You get a rectangle with same base and height
4. Therefore: **A = bh**

### Deriving Trapezoid Area
Method 1: Two triangles
- Draw diagonal to form two triangles
- Add their areas

Method 2: Duplicate and rotate
- Copy the trapezoid and rotate 180°
- Attach to form a parallelogram
- The parallelogram has base (b₁ + b₂) and same height h
- Area of parallelogram = h(b₁ + b₂)
- Area of trapezoid = half of that = **½h(b₁ + b₂)**

### Example 4: Area of Regular Polygon
A regular hexagon with side length 6 can be divided into 6 equilateral triangles.

**Solution:**
Each triangle has base 6 and height 6·(√3/2) = 3√3
Area of one triangle = ½(6)(3√3) = 9√3
Total area = 6 × 9√3 = **54√3 ≈ 93.53 square units**

---

## Part 4: Regular Polygons

### Components
- **Apothem (a)**: Distance from center to midpoint of a side (perpendicular)
- **Radius (r)**: Distance from center to a vertex
- **Side length (s)**: Length of one side
- **Number of sides (n)**

### Formulas
**Perimeter**: P = ns

**Area**: A = ½aP = ½a(ns)

**Central angle**: θ = 360°/n

**Relationship between apothem and side**:
Using a right triangle from center to midpoint of side to vertex:
- tan(θ/2) = (s/2)/a
- Therefore: a = (s/2)/tan(180°/n)

### Example 5: Regular Octagon
A regular octagon has side length 8. Find its area.

**Solution:**
Central angle = 360°/8 = 45°
Each triangle has angle 45° at center
Apothem: a = 4/tan(22.5°) ≈ 9.66
Perimeter: P = 8 × 8 = 64
Area = ½(9.66)(64) ≈ **309.0 square units**

---

## Part 5: Circles - Arc Length and Sector Area (G.C.6)

### Circle Basics Review
**Circumference**: C = 2πr = πd
**Area**: A = πr²

### Radian Measure
**Radian**: The angle subtended by an arc equal in length to the radius

**Conversion**:
- 360° = 2π radians
- 180° = π radians
- 1 radian = 180°/π ≈ 57.3°
- To convert: degrees × (π/180) = radians

### Arc Length
For an arc with central angle θ (in degrees) and radius r:
$$L = \frac{\theta}{360°} \cdot 2\pi r$$

For an arc with central angle θ (in radians) and radius r:
$$L = r\theta$$

**Key insight**: Arc length is proportional to the radius.

### Sector Area
A **sector** is a "pie slice" of a circle.

For a sector with central angle θ (in degrees) and radius r:
$$A = \frac{\theta}{360°} \cdot \pi r^2$$

For a sector with central angle θ (in radians) and radius r:
$$A = \frac{1}{2}r^2\theta$$

### Example 6: Arc Length and Sector
A circle has radius 10 cm. Find the arc length and area of a sector with central angle 72°.

**Solution:**
Arc length: L = (72°/360°) · 2π(10) = (1/5) · 20π = 4π ≈ 12.57 cm

Sector area: A = (72°/360°) · π(10)² = (1/5) · 100π = 20π ≈ 62.83 cm²

### Example 7: Using Radians
Find the area of a sector with radius 8 and central angle π/3 radians.

**Solution:**
A = ½r²θ = ½(8)²(π/3) = ½(64)(π/3) = 32π/3 ≈ **33.51 square units**

---

## Part 6: Three-Dimensional Solids - Surface Area

### Prisms
A **prism** has two parallel, congruent bases and rectangular lateral faces.

**Lateral Surface Area**: LA = Ph (perimeter of base × height)
**Total Surface Area**: SA = LA + 2B (lateral area + two bases)

### Cylinders
A **cylinder** is like a prism with circular bases.

**Lateral Surface Area**: LA = 2πrh (circumference × height)
**Total Surface Area**: SA = 2πrh + 2πr² = 2πr(h + r)

### Pyramids
A **pyramid** has one base and triangular lateral faces meeting at a point (apex).

**Lateral Surface Area**: LA = ½Pl (perimeter × slant height)
**Total Surface Area**: SA = LA + B (lateral area + base)

### Cones
A **cone** is like a pyramid with a circular base.

**Lateral Surface Area**: LA = πrl (where l is slant height)
**Total Surface Area**: SA = πrl + πr² = πr(l + r)

**Relationship**: l² = r² + h² (Pythagorean theorem)

### Spheres
A **sphere** is the set of all points equidistant from a center.

**Surface Area**: SA = 4πr²

### Example 8: Rectangular Prism Surface Area
A box has dimensions 5 × 8 × 10. Find the surface area.

**Solution:**
SA = 2(lw + lh + wh)
SA = 2(5·8 + 5·10 + 8·10)
SA = 2(40 + 50 + 80)
SA = 2(170)
SA = **340 square units**

### Example 9: Cylinder Surface Area
A cylinder has radius 6 cm and height 12 cm. Find the total surface area.

**Solution:**
SA = 2πr(h + r)
SA = 2π(6)(12 + 6)
SA = 2π(6)(18)
SA = 216π ≈ **678.58 cm²**

### Example 10: Cone Surface Area
A cone has radius 5 m and height 12 m. Find the total surface area.

**Solution:**
First find slant height: l = √(5² + 12²) = √169 = 13 m
SA = πr(l + r)
SA = π(5)(13 + 5)
SA = π(5)(18)
SA = 90π ≈ **282.74 m²**

---

## Part 7: Three-Dimensional Solids - Volume

### Volume Formulas

**Prism or Cylinder**: V = Bh (area of base × height)

**Rectangular Prism**: V = lwh

**Cylinder**: V = πr²h

**Pyramid or Cone**: V = ⅓Bh (one-third base area × height)

**Pyramid**: V = ⅓Bh (where B is area of base)

**Cone**: V = ⅓πr²h

**Sphere**: V = (4/3)πr³

### Cavalieri's Principle (G.GMD.2)
If two solids have the same height and the same cross-sectional area at every level, then they have the same volume.

This principle helps justify why:
- All prisms with same base and height have same volume
- All cylinders with same base and height have same volume
- The volume formulas work for oblique (tilted) solids too

### Example 11: Rectangular Prism Volume
A box has dimensions 4 × 7 × 9 cm. Find the volume.

**Solution:**
V = lwh = 4 × 7 × 9 = **252 cm³**

### Example 12: Cylinder Volume
A cylinder has radius 8 inches and height 15 inches. Find the volume.

**Solution:**
V = πr²h
V = π(8)²(15)
V = π(64)(15)
V = 960π ≈ **3,015.93 in³**

### Example 13: Pyramid Volume
A square pyramid has base side length 10 ft and height 12 ft. Find the volume.

**Solution:**
Base area B = 10² = 100 ft²
V = ⅓Bh
V = ⅓(100)(12)
V = **400 ft³**

### Example 14: Cone Volume
A cone has radius 6 cm and height 10 cm. Find the volume.

**Solution:**
V = ⅓πr²h
V = ⅓π(6)²(10)
V = ⅓π(36)(10)
V = 120π ≈ **376.99 cm³**

### Example 15: Sphere Volume
A sphere has radius 9 meters. Find the volume.

**Solution:**
V = (4/3)πr³
V = (4/3)π(9)³
V = (4/3)π(729)
V = 972π ≈ **3,053.63 m³**

---

## Part 8: Composite Figures

### Strategy
1. **Decompose** the figure into simpler shapes
2. **Calculate** area/volume of each part
3. **Add or subtract** as appropriate

### 2D Composite Figures

### Example 16: L-Shaped Figure
An L-shaped room can be measured as 8×12 with a 3×5 section cut out. Find the area.

**Solution:**
Method 1: Large rectangle minus small rectangle
A = (8)(12) - (3)(5) = 96 - 15 = **81 square units**

Method 2: Two rectangles added
A = (8)(7) + (5)(5) = 56 + 25 = **81 square units**

### Example 17: Semicircle and Rectangle
A figure consists of a rectangle 10×6 with a semicircle of diameter 6 attached to one side. Find the area.

**Solution:**
Rectangle area = 10 × 6 = 60
Semicircle radius = 3
Semicircle area = ½π(3)² = 4.5π ≈ 14.14
Total area = 60 + 4.5π ≈ **74.14 square units**

### 3D Composite Figures

### Example 18: Cylinder with Cone
A solid consists of a cylinder (radius 4, height 8) with a cone (radius 4, height 6) on top. Find the volume.

**Solution:**
Cylinder volume = π(4)²(8) = 128π
Cone volume = ⅓π(4)²(6) = 32π
Total volume = 128π + 32π = 160π ≈ **502.65 cubic units**

### Example 19: Hemisphere
A hemisphere is half of a sphere. If the radius is 12 cm, find the volume and surface area.

**Solution:**
Volume = ½ · (4/3)π(12)³ = ½ · (4/3)π(1728) = (2/3)π(1728) = 1152π ≈ **3,619.11 cm³**

Surface area = ½(4πr²) + πr² = 2πr² + πr² = 3πr²
SA = 3π(12)² = 432π ≈ **1,357.17 cm²**

---

## Part 9: Density and Displacement (G.MG.2)

### Density
**Density** is mass per unit volume (or area for 2D):
$$\text{Density} = \frac{\text{Mass}}{\text{Volume}}$$

Common units:
- g/cm³ (grams per cubic centimeter)
- kg/m³ (kilograms per cubic meter)
- lb/ft³ (pounds per cubic foot)

For area density (2D):
$$\text{Density} = \frac{\text{Quantity}}{\text{Area}}$$

Example: people per square mile

### Rearranging
- Mass = Density × Volume
- Volume = Mass ÷ Density

### Example 20: Finding Mass
A block of aluminum (density 2.7 g/cm³) has dimensions 5 cm × 8 cm × 10 cm. Find its mass.

**Solution:**
Volume = 5 × 8 × 10 = 400 cm³
Mass = Density × Volume = 2.7 × 400 = **1,080 grams**

### Example 21: Population Density
A city has 250,000 people living in an area of 50 square miles. Find the population density.

**Solution:**
Density = 250,000 ÷ 50 = **5,000 people per square mile**

### Displacement
**Archimedes' Principle**: An object submerged in water displaces a volume of water equal to the volume of the object.

Volume of object = Volume of displaced water

### Example 22: Displacement
A sphere with radius 6 cm is submerged in a cylindrical container with radius 10 cm. How much does the water level rise?

**Solution:**
Volume of sphere = (4/3)π(6)³ = 288π cm³

This volume is displaced into the cylinder.
Let h = rise in water level
πr²h = 288π
π(10)²h = 288π
100h = 288
h = **2.88 cm**

---

## Part 10: Geometric Modeling (G.MG.1, G.MG.3)

### Using Shapes to Model Real Objects
Real-world objects can be approximated by geometric shapes:
- Tree trunk → cylinder
- Ice cream cone → cone
- Earth → sphere
- Building → rectangular prism
- Roof → pyramid or triangular prism
- Can → cylinder

### Example 23: Tree Trunk Volume
A tree trunk is approximately cylindrical with diameter 2 feet and height 30 feet. Estimate its volume.

**Solution:**
Radius = 1 foot
V = πr²h = π(1)²(30) = 30π ≈ **94.25 cubic feet**

### Example 24: Grain Silo
A grain silo consists of a cylinder (diameter 20 ft, height 40 ft) with a cone top (height 10 ft). Find the total capacity.

**Solution:**
Cylinder volume = π(10)²(40) = 4000π
Cone volume = ⅓π(10)²(10) = (1000/3)π
Total = 4000π + (1000/3)π = (13000/3)π ≈ **13,613.57 ft³**

### Design Problems
Apply geometric methods to solve design problems, such as:
- Minimizing cost
- Maximizing volume
- Meeting constraints

### Example 25: Packaging Design
A company wants to design a cylindrical can that holds 500 cm³. If the cost of material is proportional to surface area, what dimensions minimize cost?

**Solution:**
This requires calculus, but the intuition is:
- Volume: V = πr²h = 500
- Surface area: SA = 2πr² + 2πrh
- Substitute h = 500/(πr²) into SA
- Minimize SA

Result: The optimal ratio is h = 2r (height equals diameter).

---

## Part 11: Scaling and Similar Solids

### Effect of Scale Factor on Measurements
If two solids are similar with scale factor k:

**Linear measurements** (length, width, height): multiply by k

**Area measurements** (surface area): multiply by k²

**Volume measurements**: multiply by k³

### Example 26: Scaling a Cube
A cube has side length 4. If we scale it by a factor of 3:

**Solution:**
Original:
- Side = 4
- Surface area = 6(4)² = 96
- Volume = 4³ = 64

Scaled (k = 3):
- Side = 4 × 3 = 12
- Surface area = 96 × 3² = 96 × 9 = 864
- Volume = 64 × 3³ = 64 × 27 = 1,728

Verify:
- Surface area = 6(12)² = 864 ✓
- Volume = 12³ = 1,728 ✓

### Example 27: Similar Cylinders
Two similar cylinders have heights in ratio 2:5. If the smaller has surface area 100 cm², what is the surface area of the larger?

**Solution:**
Scale factor k = 5/2 = 2.5
Area ratio = k² = (2.5)² = 6.25
Larger surface area = 100 × 6.25 = **625 cm²**

### Example 28: Similar Spheres
Two similar spheres have surface areas in ratio 16:25. What is the ratio of their volumes?

**Solution:**
If area ratio = 16:25, then k² = 16/25
So k = 4/5
Volume ratio = k³ = (4/5)³ = 64/125

**Volume ratio is 64:125**

---

## Part 12: Special Topics

### Heron's Formula (Area of Triangle from Three Sides)
For a triangle with sides a, b, c:
1. Find semi-perimeter: s = (a + b + c)/2
2. Area = √[s(s-a)(s-b)(s-c)]

### Example 29: Using Heron's Formula
Find the area of a triangle with sides 5, 7, and 8.

**Solution:**
s = (5 + 7 + 8)/2 = 10
A = √[10(10-5)(10-7)(10-8)]
A = √[10 × 5 × 3 × 2]
A = √300
A = 10√3 ≈ **17.32 square units**

### Shoelace Formula (Area of Polygon in Coordinate Plane)
For vertices (x₁,y₁), (x₂,y₂), ..., (xₙ,yₙ) listed in order:

$$A = \frac{1}{2}|x_1(y_2-y_n) + x_2(y_3-y_1) + ... + x_n(y_1-y_{n-1})|$$

Or equivalently:
$$A = \frac{1}{2}|x_1y_2 - x_2y_1 + x_2y_3 - x_3y_2 + ... + x_ny_1 - x_1y_n|$$

### Example 30: Shoelace Formula
Find the area of a quadrilateral with vertices (1,2), (4,6), (7,4), (3,1).

**Solution:**
A = ½|1(6-1) + 4(4-2) + 7(1-6) + 3(2-4)|
A = ½|1(5) + 4(2) + 7(-5) + 3(-2)|
A = ½|5 + 8 - 35 - 6|
A = ½|-28|
A = **14 square units**

---

## Part 13: Problem-Solving Strategies

### For Area Problems
1. **Identify the shape** or decompose into known shapes
2. **Find necessary measurements** (base, height, radius, etc.)
3. **Apply the formula**
4. **Check units** (square units for area)

### For Volume Problems
1. **Identify the solid**
2. **Find base area and height** (or radius and height)
3. **Apply formula** (remember ⅓ for pyramids/cones)
4. **Check units** (cubic units for volume)

### For Composite Figures
1. **Draw and label** the figure
2. **Break into parts**
3. **Calculate each part**
4. **Add or subtract** appropriately

### For Optimization
1. **Define variables**
2. **Write constraint equation**
3. **Write objective function**
4. **Solve** (often requires calculus)

---

## Part 14: Common Mistakes to Avoid

### Mistake 1: Confusing Perimeter and Area
- Perimeter is measured in **linear units** (cm, ft, m)
- Area is measured in **square units** (cm², ft², m²)

### Mistake 2: Using Wrong Height
- For parallelograms and triangles, height must be **perpendicular** to the base
- Slant height ≠ vertical height in pyramids and cones

### Mistake 3: Forgetting to Halve
- Triangle area: **½**bh (don't forget the ½!)
- Trapezoid area: **½**h(b₁ + b₂)

### Mistake 4: Using Diameter Instead of Radius
- Circle area: πr² (use radius, not diameter!)
- If given diameter, divide by 2 first

### Mistake 5: Wrong Formula for Pyramid/Cone
- Volume of pyramid/cone: **⅓**Bh (don't forget the ⅓!)

### Mistake 6: Adding Areas with Different Units
- Convert to same units first!
- 1 ft² ≠ 12 in² (actually 1 ft² = 144 in²)

### Mistake 7: Scaling
- If scale factor is k:
  - Length → multiply by k
  - Area → multiply by k²
  - Volume → multiply by k³

---

## Key Formulas Summary

### 2D Shapes
| Shape | Area | Perimeter |
|-------|------|-----------|
| Rectangle | lw | 2l + 2w |
| Square | s² | 4s |
| Triangle | ½bh | a + b + c |
| Parallelogram | bh | 2a + 2b |
| Trapezoid | ½h(b₁+b₂) | sum of sides |
| Circle | πr² | 2πr |
| Sector | (θ/360°)πr² | r + r + arc |

### 3D Solids - Surface Area
| Solid | Lateral SA | Total SA |
|-------|------------|----------|
| Prism | Ph | Ph + 2B |
| Cylinder | 2πrh | 2πr(h+r) |
| Pyramid | ½Pl | ½Pl + B |
| Cone | πrl | πr(l+r) |
| Sphere | - | 4πr² |

### 3D Solids - Volume
| Solid | Volume |
|-------|--------|
| Prism | Bh |
| Cylinder | πr²h |
| Pyramid | ⅓Bh |
| Cone | ⅓πr²h |
| Sphere | (4/3)πr³ |

---

## Practice Problems

### Basic Problems
1. Find the area of a rectangle with length 12 and width 7.

2. A circle has radius 8 cm. Find its area and circumference.

3. A triangle has base 10 and height 6. Find its area.

4. Find the volume of a cube with side length 5.

5. A cylinder has radius 4 and height 9. Find its volume.

### Intermediate Problems
6. A trapezoid has bases 8 and 14 and height 6. Find its area.

7. Find the surface area of a sphere with radius 6.

8. A cone has radius 5 and height 12. Find its volume and total surface area.

9. A regular hexagon has side length 10. Find its area (apothem = 5√3).

10. A sector of a circle has radius 15 and central angle 60°. Find the arc length and area.

### Advanced Problems
11. A rectangular prism has dimensions 6 × 8 × 10. Find the surface area and volume.

12. Two similar cylinders have volumes 54 cm³ and 128 cm³. What is the ratio of their heights?

13. A grain silo is a cylinder with radius 12 ft and height 30 ft, topped with a hemisphere. Find the total volume.

14. Find the area of a triangle with vertices (2,3), (7,5), (4,9) using the Shoelace Formula.

15. A company wants to package 1000 cm³ of liquid in a cylindrical can. What dimensions minimize the surface area (and thus material cost)?

---

## Connections to Other Topics

### Algebra
- Solving equations for unknown dimensions
- Systems of equations
- Quadratic equations

### Previous Geometry
- Pythagorean Theorem (for finding heights, diagonals)
- Similar figures (scaling)
- Trigonometry (for area with angles)

### Calculus (Future)
- Optimization problems
- Integration for irregular shapes
- Related rates

### Real World
- Architecture and construction
- Engineering and manufacturing
- Environmental science (land area, water volume)
- Packaging and design

---

## Reflective Questions

1. Why do we use π in circle formulas? What does it represent?

2. How does Cavalieri's Principle justify volume formulas for oblique solids?

3. Why is the volume of a pyramid ⅓ the volume of a prism with the same base and height?

4. How can you verify that your area or volume calculation is reasonable?

5. What real-world constraints might affect geometric design problems?

6. How do scale factors affect area and volume differently?

---

**End of Week 20 Notes**
