# Week 16: Triangle Properties & Congruence - Part 2

## Overview
**Essential Question:** How do transformations reveal the properties within and between triangles?

**Standards Covered:**
- G.CO.8: Midsegment theorem, medians of a triangle
- G.CO.9: Using congruence theorems to prove relationships
- G.GPE.6: Coordinate proofs with triangles
- G.SRT.6: Using congruence and similarity to solve problems

---

## Day 1: Triangle Midsegment Theorem

### Definition of a Midsegment

**Midsegment:** A segment that connects the midpoints of two sides of a triangle.

**Key Properties:**
- Every triangle has exactly **three midsegments**
- Each midsegment connects midpoints of two different sides
- Each midsegment is parallel to the third side (the side it doesn't touch)

**Notation:**
If M is the midpoint of AB and N is the midpoint of AC, then MN is a midsegment of △ABC.

### Triangle Midsegment Theorem

**Theorem (G.CO.8):** The segment joining the midpoints of two sides of a triangle is parallel to the third side and half the length of that side.

**Symbolic Form:**
If M is the midpoint of AB and N is the midpoint of AC, then:
1. MN ∥ BC (MN is parallel to BC)
2. MN = ½BC (MN is half the length of BC)

**Why it works:**
Using coordinate geometry and the midpoint formula, we can prove that:
- The slope of MN equals the slope of BC (proving they're parallel)
- The length of MN equals half the length of BC

### Proving the Midsegment Theorem (Coordinate Proof)

**Setup:** Place △ABC on a coordinate plane
- A at origin (0, 0)
- B at (2a, 0) on the x-axis
- C at (2b, 2c) anywhere in the plane

**Find midpoints:**
- M (midpoint of AB) = ((0+2a)/2, (0+0)/2) = (a, 0)
- N (midpoint of AC) = ((0+2b)/2, (0+2c)/2) = (b, c)

**Prove MN ∥ BC:**
- Slope of BC = (2c - 0)/(2b - 2a) = 2c/(2b - 2a) = c/(b - a)
- Slope of MN = (c - 0)/(b - a) = c/(b - a)
- Since slopes are equal, MN ∥ BC ✓

**Prove MN = ½BC:**
- BC = √[(2b - 2a)² + (2c - 0)²] = √[4(b - a)² + 4c²] = 2√[(b - a)² + c²]
- MN = √[(b - a)² + (c - 0)²] = √[(b - a)² + c²]
- Therefore: MN = ½BC ✓

### Using the Midsegment Theorem

**Type 1: Finding lengths**

Example 1: If MN is a midsegment parallel to BC, and BC = 18, find MN.

*Solution:*
MN = ½BC = ½(18) = 9

Example 2: If DE is a midsegment parallel to AB, and DE = 7.5, find AB.

*Solution:*
DE = ½AB
7.5 = ½AB
AB = 15

**Type 2: Finding variables**

Example 3: If MN is a midsegment parallel to BC, MN = 3x + 5, and BC = 8x - 4, find x and both lengths.

*Solution:*
MN = ½BC
3x + 5 = ½(8x - 4)
3x + 5 = 4x - 2
7 = x

Therefore: MN = 3(7) + 5 = 26 and BC = 8(7) - 4 = 52

**Type 3: Using parallel lines**

Since midsegments are parallel to the third side, we can use properties of parallel lines:
- Corresponding angles are congruent
- Alternate interior angles are congruent
- Same-side interior angles are supplementary

### The Midsegment Triangle

**Definition:** When you connect all three midsegments of a triangle, they form a smaller triangle inside called the **midsegment triangle** or **medial triangle**.

**Properties of the Midsegment Triangle:**
1. It divides the original triangle into **4 congruent triangles**
2. Each small triangle is congruent to the midsegment triangle
3. The perimeter of the midsegment triangle is **half** the perimeter of the original triangle
4. The area of the midsegment triangle is **one-fourth** the area of the original triangle

**Why?**
- Each side of the midsegment triangle is a midsegment of the original triangle
- Therefore, each side is half the length of a side of the original triangle
- Perimeter of midsegment triangle = ½a + ½b + ½c = ½(a + b + c)

### Applications in Problem Solving

**Finding perimeters:**

Example: In △ABC, AB = 10, BC = 14, AC = 12. The midsegment triangle DEF is formed by connecting the midpoints. Find the perimeter of △DEF.

*Solution:*
Perimeter of △ABC = 10 + 14 + 12 = 36
Perimeter of △DEF = ½(36) = 18

**Using algebra:**

Example: In △ABC, M, N, P are midpoints of the sides. If MN = 2x + 3, NP = 3x - 1, and MP = x + 7, and the perimeter of △ABC is 60, find x.

*Solution:*
Perimeter of midsegment triangle = ½(60) = 30
(2x + 3) + (3x - 1) + (x + 7) = 30
6x + 9 = 30
6x = 21
x = 3.5

### Coordinate Geometry with Midsegments

**Using the midpoint formula:** Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)

Example: Given △ABC with A(0, 0), B(8, 0), C(4, 6), find the vertices of the midsegment triangle and verify one midsegment is half the length of the parallel side.

*Solution:*
- M (midpoint of AB) = ((0+8)/2, (0+0)/2) = (4, 0)
- N (midpoint of BC) = ((8+4)/2, (0+6)/2) = (6, 3)
- P (midpoint of AC) = ((0+4)/2, (0+6)/2) = (2, 3)

Verify MN is parallel to AC and half its length:
- AC = √[(4-0)² + (6-0)²] = √(16+36) = √52 = 2√13
- MN = √[(6-4)² + (3-0)²] = √(4+9) = √13 = ½(2√13) = ½AC ✓

### Key Takeaways

1. **Midsegment** connects midpoints of two sides
2. **Always parallel** to the third side
3. **Always half the length** of the third side
4. Three midsegments form **four congruent triangles**
5. Useful for finding unknown lengths and proving parallel relationships

---

## Day 2: Medians, Centroids, and Altitudes

### Medians of a Triangle

**Definition:** A **median** of a triangle is a segment from a vertex to the midpoint of the opposite side.

**Key Properties:**
- Every triangle has exactly **three medians**
- Each median connects a vertex to the midpoint of the opposite side
- The three medians are **concurrent** (meet at a single point)

**Median vs. Midsegment:**
- **Median:** Vertex to midpoint of opposite side
- **Midsegment:** Midpoint to midpoint

### The Centroid

**Centroid Theorem (G.CO.8):** The medians of a triangle meet at a point called the **centroid**.

**Symbol:** The centroid is often labeled G (for "gravity" - it's the center of gravity/balance point)

**Key Property - The 2:1 Ratio:**
The centroid divides each median into two segments in a **2:1 ratio**, with the longer segment being between the vertex and the centroid.

**Symbolic Form:**
If G is the centroid and AM is a median, then:
- AG = ⅔AM (from vertex A to centroid G)
- GM = ⅓AM (from centroid G to midpoint M)
- AG:GM = 2:1

### Using the Centroid Theorem

**Type 1: Finding lengths on a median**

Example 1: In △ABC, G is the centroid and AM is a median with AM = 24. Find AG and GM.

*Solution:*
AG = ⅔AM = ⅔(24) = 16
GM = ⅓AM = ⅓(24) = 8

Check: AG + GM = 16 + 8 = 24 ✓

Example 2: If BG = 18, find BN and GN (where BN is a median).

*Solution:*
BG = ⅔BN
18 = ⅔BN
BN = 27

GN = ⅓BN = ⅓(27) = 9

**Type 2: Using algebra**

Example 3: If AG = 4x - 2 and GM = x + 3, find x and AM.

*Solution:*
AG = 2·GM (the 2:1 ratio)
4x - 2 = 2(x + 3)
4x - 2 = 2x + 6
2x = 8
x = 4

Therefore:
- AG = 4(4) - 2 = 14
- GM = 4 + 3 = 7
- AM = 14 + 7 = 21

**Alternative approach using the ⅔ relationship:**
AG = ⅔AM and GM = ⅓AM
AG = ⅔(AG + GM)
4x - 2 = ⅔(4x - 2 + x + 3)
4x - 2 = ⅔(5x + 1)
3(4x - 2) = 2(5x + 1)
12x - 6 = 10x + 2
2x = 8
x = 4

### Finding the Centroid in Coordinate Geometry

**Centroid Formula:**
If △ABC has vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃), then the centroid is:

**G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)**

**Why it works:** The centroid is the average of the three vertices.

**Example:**
Find the centroid of △ABC with A(0, 0), B(6, 0), C(3, 9).

*Solution:*
G = ((0 + 6 + 3)/3, (0 + 0 + 9)/3)
G = (9/3, 9/3)
G = (3, 3)

**Verification:** We can verify by finding one median and checking that G divides it in a 2:1 ratio.
- M (midpoint of BC) = ((6+3)/2, (0+9)/2) = (4.5, 4.5)
- Median AM goes from A(0, 0) to M(4.5, 4.5)
- Distance AG = √[(3-0)² + (3-0)²] = √18 = 3√2
- Distance AM = √[(4.5-0)² + (4.5-0)²] = √40.5 = 4.5√2
- Check: AG/AM = 3√2 / 4.5√2 = 3/4.5 = 2/3 ✓

### Altitudes of a Triangle

**Definition:** An **altitude** of a triangle is a perpendicular segment from a vertex to the line containing the opposite side.

**Key Properties:**
- Every triangle has exactly **three altitudes**
- An altitude may fall inside, outside, or on the side of the triangle (depending on triangle type)
- The three altitudes are concurrent (meet at a point called the **orthocenter**)

**Altitude in different triangle types:**
- **Acute triangle:** All altitudes are inside the triangle
- **Right triangle:** Two altitudes are the legs; they meet at the right angle vertex
- **Obtuse triangle:** Two altitudes fall outside the triangle (on extended sides)

### Finding Altitude Length in Coordinate Geometry

**Method 1: Using perpendicular distance formula**
The altitude from a point to a line is the perpendicular distance.

**Method 2: Using slope for perpendicular lines**
- Find the slope of the base
- The altitude has slope that is the negative reciprocal
- Use point-slope form to find the altitude equation
- Find intersection point
- Calculate distance

**Example:**
Find the length of the altitude from C(2, 5) to side AB where A(0, 1) and B(4, 1).

*Solution:*
AB is horizontal (both y-coordinates = 1), so the altitude is vertical.
Altitude length = |5 - 1| = 4

### Comparing Special Segments

| Segment | Definition | Start Point | End Point | Concurrent at |
|---------|------------|-------------|-----------|---------------|
| **Median** | Vertex to opposite midpoint | Vertex | Midpoint | Centroid (G) |
| **Midsegment** | Midpoint to midpoint | Midpoint | Midpoint | N/A (parallel to side) |
| **Altitude** | Perpendicular to opposite side | Vertex | Opposite side (⊥) | Orthocenter (H) |
| **Angle Bisector** | Bisects vertex angle | Vertex | Opposite side | Incenter (I) |
| **Perpendicular Bisector** | ⊥ bisector of a side | Midpoint | Extends infinitely | Circumcenter (O) |

### Applications and Problem Solving

**Example 1: Finding centroid and verifying the 2:1 ratio**

Given △ABC with A(0, 6), B(0, 0), C(8, 0), find:
a) The centroid G
b) The midpoint M of BC
c) Verify that AG:GM = 2:1

*Solution:*
a) G = ((0+0+8)/3, (6+0+0)/3) = (8/3, 2)

b) M = ((0+8)/2, (0+0)/2) = (4, 0)

c) AG = √[(8/3-0)² + (2-6)²] = √[(64/9) + 16] = √(208/9) = (4√13)/3
   GM = √[(4-8/3)² + (0-2)²] = √[(4/3)² + 4] = √(16/9 + 36/9) = √(52/9) = (2√13)/3
   Ratio: AG/GM = [(4√13)/3] / [(2√13)/3] = 4/2 = 2/1 ✓

### Key Takeaways

1. **Medians** connect vertices to opposite midpoints
2. **Centroid** is where medians meet (balance point)
3. Centroid divides each median in **2:1 ratio** (longer part toward vertex)
4. **Centroid formula:** Average of the three vertices
5. **Altitudes** are perpendicular to opposite sides
6. Different special segments have different properties and purposes

---

## Day 3: Coordinate Proofs with Triangles

### Introduction to Coordinate Proofs

**Coordinate Proof:** A style of proof that uses coordinate geometry and algebra to prove geometric theorems.

**Standard G.GPE.6:** Use coordinates to prove simple geometric theorems algebraically, including the use of slope, distance, and midpoint formulas.

**Advantages of coordinate proofs:**
- Uses algebra instead of traditional two-column proofs
- Can prove general cases by using variables
- Makes use of formulas for distance, midpoint, and slope

### Strategy for Coordinate Proofs

**Step 1: Place the figure strategically on the coordinate plane**
- Use the origin as a vertex (simplifies calculations)
- Align one side with an axis (often the x-axis)
- Use variables (like 2a, 2b) instead of specific numbers (allows general proof)
- Use even coefficients (2a instead of a) to avoid fractions when finding midpoints

**Step 2: Label vertices with coordinates**
- Simple coordinates: (0, 0), (a, 0), (0, b)
- More complex: (0, 0), (2a, 0), (2b, 2c)

**Step 3: Use formulas to prove the statement**
- **Distance formula:** d = √[(x₂-x₁)² + (y₂-y₁)²]
- **Midpoint formula:** M = ((x₁+x₂)/2, (y₁+y₂)/2)
- **Slope formula:** m = (y₂-y₁)/(x₂-x₁)

**Step 4: Write conclusions**
- Show algebraically what needed to be proven
- State the theorem/property you've demonstrated

### Key Formulas for Coordinate Proofs

**Distance Formula:**
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

**Midpoint Formula:**
M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

**Slope Formula:**
m = (y₂ - y₁)/(x₂ - x₁)

**Special Relationships:**
- **Parallel lines:** Equal slopes (m₁ = m₂)
- **Perpendicular lines:** Negative reciprocal slopes (m₁ · m₂ = -1)
- **Collinear points:** Slope from A to B equals slope from B to C
- **Right angle:** Two segments with perpendicular slopes

### Proving Triangles are Isosceles

**To prove a triangle is isosceles, show two sides are congruent using the distance formula.**

**Example:**
Prove that △ABC with A(0, 0), B(4, 0), C(2, 3) is isosceles.

*Proof:*
AB = √[(4-0)² + (0-0)²] = √16 = 4
AC = √[(2-0)² + (3-0)²] = √(4+9) = √13
BC = √[(2-4)² + (3-0)²] = √(4+9) = √13

Since AC = BC = √13, △ABC is isosceles. ✓

### Proving Triangles are Right Triangles

**Method 1: Show two sides are perpendicular (slopes are negative reciprocals)**

**Example:**
Prove that △ABC with A(0, 0), B(3, 0), C(0, 4) is a right triangle.

*Proof:*
Slope of AB = (0-0)/(3-0) = 0 (horizontal)
Slope of AC = (4-0)/(0-0) = undefined (vertical)

Horizontal and vertical lines are perpendicular, so ∠A = 90°.
Therefore, △ABC is a right triangle. ✓

**Method 2: Use the Pythagorean Theorem (a² + b² = c²)**

Using the same triangle:
AB = 3, AC = 4, BC = √[(3-0)² + (0-4)²] = √(9+16) = 5

Check: 3² + 4² = 9 + 16 = 25 = 5²
Since AB² + AC² = BC², △ABC is a right triangle. ✓

### Proving the Midsegment Theorem (General Case)

**Theorem:** The segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length.

**Proof:**
Place △ABC with A(0, 0), B(2a, 0), C(2b, 2c)

Find midpoints:
M (midpoint of AB) = (a, 0)
N (midpoint of AC) = (b, c)

**Prove MN ∥ BC:**
Slope of MN = (c - 0)/(b - a) = c/(b - a)
Slope of BC = (2c - 0)/(2b - 2a) = 2c/2(b - a) = c/(b - a)
Since slopes are equal, MN ∥ BC ✓

**Prove MN = ½BC:**
MN = √[(b - a)² + c²]
BC = √[(2b - 2a)² + (2c)²] = √[4(b - a)² + 4c²] = 2√[(b - a)² + c²]
Therefore, MN = ½BC ✓

### Proving a Quadrilateral is a Parallelogram

**Methods to prove a quadrilateral is a parallelogram:**
1. Show both pairs of opposite sides are parallel (equal slopes)
2. Show both pairs of opposite sides are congruent (equal lengths)
3. Show diagonals bisect each other (same midpoint)

**Example:**
Prove ABCD with A(0, 0), B(4, 2), C(6, 6), D(2, 4) is a parallelogram.

*Proof using slopes:*
Slope of AB = (2-0)/(4-0) = 2/4 = 1/2
Slope of DC = (4-6)/(2-6) = -2/-4 = 1/2
AB ∥ DC (equal slopes) ✓

Slope of AD = (4-0)/(2-0) = 4/2 = 2
Slope of BC = (6-2)/(6-4) = 4/2 = 2
AD ∥ BC (equal slopes) ✓

Since both pairs of opposite sides are parallel, ABCD is a parallelogram. ✓

### Proving a Quadrilateral is a Rectangle

**To prove a rectangle, show:**
1. It's a parallelogram (opposite sides parallel), AND
2. It has a right angle (perpendicular adjacent sides)

OR

1. All four angles are right angles

**Example:**
Prove ABCD with A(0, 0), B(5, 0), C(5, 3), D(0, 3) is a rectangle.

*Proof:*
Slope of AB = 0 (horizontal)
Slope of AD = undefined (vertical)

AB ⊥ AD, so ∠A = 90° ✓

Slope of BC = undefined (vertical)
Slope of CD = 0 (horizontal)
BC ⊥ CD, so ∠C = 90° ✓

Since ABCD has right angles and opposite sides are parallel (both pairs have slopes 0 and undefined), ABCD is a rectangle. ✓

### Proving Specific Triangle Properties

**Example: Prove the medians of an equilateral triangle are congruent**

Place equilateral △ABC with A(0, 0), B(2a, 0), C(a, a√3)

[We can verify it's equilateral: each side = 2a]

Find midpoints:
M (midpoint of AB) = (a, 0)
N (midpoint of BC) = ((2a+a)/2, (0+a√3)/2) = (3a/2, a√3/2)
P (midpoint of AC) = (a/2, a√3/2)

Find median lengths:
CM = √[(a - a)² + (0 - a√3)²] = a√3
AN = √[(3a/2 - 0)² + (a√3/2 - 0)²] = √[9a²/4 + 3a²/4] = √(3a²) = a√3
BP = √[(a/2 - 2a)² + (a√3/2 - 0)²] = √[9a²/4 + 3a²/4] = a√3

Since all three medians equal a√3, the medians of an equilateral triangle are congruent. ✓

### Common Coordinate Proof Setups

**Right Triangle:**
- A(0, 0), B(a, 0), C(0, b) — right angle at origin

**Isosceles Triangle:**
- A(0, 0), B(2a, 0), C(a, b) — symmetry about x = a

**Equilateral Triangle:**
- A(0, 0), B(2a, 0), C(a, a√3)

**Square:**
- A(0, 0), B(a, 0), C(a, a), D(0, a)

**Rectangle:**
- A(0, 0), B(a, 0), C(a, b), D(0, b)

**Parallelogram:**
- A(0, 0), B(a, 0), C(a+b, c), D(b, c)

### Key Takeaways

1. **Place figures strategically** using origin and axes
2. **Use variables** (2a, 2b, 2c) for general proofs
3. **Three main formulas:** distance, midpoint, slope
4. **Prove congruence** with distance formula
5. **Prove parallel** with equal slopes
6. **Prove perpendicular** with negative reciprocal slopes
7. **Always show your work** algebraically

---

## Day 4: Advanced Triangle Proofs

### Using Congruence Theorems in Proofs (G.CO.9)

**Review: The Five Congruence Theorems**
1. SSS (Side-Side-Side)
2. SAS (Side-Angle-Side)
3. ASA (Angle-Side-Angle)
4. AAS (Angle-Angle-Side)
5. HL (Hypotenuse-Leg) — right triangles only

**Goal:** Use these theorems to prove relationships in geometric figures.

### Proving Parts of Figures are Congruent

**Strategy:**
1. Identify two triangles within the figure
2. Mark given information
3. Identify shared sides or angles (reflexive property)
4. Look for vertical angles
5. Prove the triangles congruent
6. Use CPCTC to conclude about specific parts

**Example 1: Proving opposite sides of a parallelogram are congruent**

Given: ABCD is a parallelogram
Prove: AB ≅ CD and AD ≅ BC

*Proof:*
Draw diagonal AC (creating △ABC and △CDA)

| Statement | Reason |
|-----------|--------|
| ABCD is a parallelogram | Given |
| AB ∥ DC, AD ∥ BC | Definition of parallelogram |
| ∠BAC ≅ ∠DCA | Alternate interior angles (AB ∥ DC) |
| ∠DAC ≅ ∠BCA | Alternate interior angles (AD ∥ BC) |
| AC ≅ AC | Reflexive property |
| △ABC ≅ △CDA | ASA |
| AB ≅ CD, AD ≅ BC | CPCTC ✓ |

### Overlapping Triangles

**Challenge:** Sometimes triangles share more than just one side or angle. You need to identify the correct triangles to compare.

**Strategy:**
1. Redraw the triangles separately
2. Label all corresponding parts
3. Mark congruent parts
4. Prove congruence
5. State CPCTC conclusion

**Example 2: Overlapping triangles**

Given: AB ≅ CD, ∠A ≅ ∠D, ∠ABC ≅ ∠DCB
Prove: AC ≅ DB

[Imagine a figure where △ABC and △DCB overlap sharing point B/C]

*Proof:*

| Statement | Reason |
|-----------|--------|
| AB ≅ CD | Given |
| ∠A ≅ ∠D | Given |
| ∠ABC ≅ ∠DCB | Given |
| △ABC ≅ △DCB | ASA |
| AC ≅ DB | CPCTC ✓ |

### Proving Angle Bisectors Create Congruent Triangles

**Common Pattern:** When a segment bisects an angle, it creates two congruent angles that can be used in congruence proofs.

**Example 3: Angle bisector proof**

Given: BD bisects ∠ABC, AB ≅ BC
Prove: △ABD ≅ △CBD

*Proof:*

| Statement | Reason |
|-----------|--------|
| BD bisects ∠ABC | Given |
| ∠ABD ≅ ∠CBD | Definition of angle bisector |
| AB ≅ BC | Given |
| BD ≅ BD | Reflexive property |
| △ABD ≅ △CBD | SAS ✓ |

### Proving Perpendicular Bisectors

**Perpendicular Bisector Theorem (from Week 13):** Any point on the perpendicular bisector of a segment is equidistant from the endpoints.

**Example 4: Proving a point is on the perpendicular bisector**

Given: PA ≅ PB, M is the midpoint of AB
Prove: PM ⊥ AB

*Proof:*

| Statement | Reason |
|-----------|--------|
| PA ≅ PB | Given |
| M is midpoint of AB | Given |
| AM ≅ MB | Definition of midpoint |
| PM ≅ PM | Reflexive property |
| △PAM ≅ △PBM | SSS |
| ∠PMA ≅ ∠PMB | CPCTC |
| ∠PMA and ∠PMB form linear pair | Definition of linear pair |
| ∠PMA + ∠PMB = 180° | Linear Pair Postulate |
| 2(∠PMA) = 180° | Substitution (since angles are ≅) |
| ∠PMA = 90° | Division |
| PM ⊥ AB | Definition of perpendicular ✓ |

### Proofs with Isosceles Triangles

**Common patterns:**
1. Base angles are congruent → Use to prove other angles or sides
2. Legs are congruent → Use in SSS or SAS proofs
3. Vertex angle bisector is also altitude and median

**Example 5: Isosceles triangle median**

Given: △ABC is isosceles with AB ≅ AC, M is the midpoint of BC
Prove: AM ⊥ BC

*Proof:*

| Statement | Reason |
|-----------|--------|
| △ABC is isosceles with AB ≅ AC | Given |
| M is midpoint of BC | Given |
| BM ≅ MC | Definition of midpoint |
| AM ≅ AM | Reflexive property |
| △ABM ≅ △ACM | SSS |
| ∠AMB ≅ ∠AMC | CPCTC |
| ∠AMB + ∠AMC = 180° | Linear pair |
| 2(∠AMB) = 180° | Substitution |
| ∠AMB = 90° | Division |
| AM ⊥ BC | Definition of perpendicular ✓ |

### Multi-Step Proofs

**Strategy for complex proofs:**
1. Prove first pair of triangles congruent
2. Use CPCTC to get information for second proof
3. Prove second pair of triangles congruent
4. Use CPCTC for final conclusion

**Example 6: Two-stage proof**

Given: AB ≅ CD, AB ∥ CD
Prove: ∠A ≅ ∠D

*Proof:*
Draw diagonal BD

**Part 1: Prove △ABD ≅ △CDB**

| Statement | Reason |
|-----------|--------|
| AB ≅ CD | Given |
| AB ∥ CD | Given |
| ∠ABD ≅ ∠CDB | Alternate interior angles |
| BD ≅ BD | Reflexive property |
| △ABD ≅ △CDB | SAS |
| ∠A ≅ ∠D | CPCTC ✓ |

### Using Auxiliary Lines

**Auxiliary line:** A line, ray, or segment added to a diagram to help with a proof.

**Common auxiliary lines:**
- Diagonals of quadrilaterals
- Altitudes of triangles
- Perpendiculars from a point to a line
- Segments connecting key points

**When to use auxiliary lines:**
- To create triangles in quadrilaterals
- To create right angles
- To connect points that reveal relationships

### Proof Planning Strategy

**Before writing a proof:**
1. **Read carefully** — What's given? What are you proving?
2. **Draw and label** — Create a clear diagram
3. **Mark the diagram** — Show all given information
4. **Work backwards** — What would you need to prove the conclusion?
5. **Look for triangles** — Can you prove them congruent?
6. **Plan the path** — What theorems will you use?
7. **Write the proof** — Show each step logically

### Common Proof Patterns

**Pattern 1: Shared side**
- Triangles sharing a side → Use reflexive property

**Pattern 2: Vertical angles**
- Intersecting segments → Vertical angles are congruent

**Pattern 3: Parallel lines**
- Transversal crossing parallel lines → Corresponding or alternate interior angles congruent

**Pattern 4: Isosceles triangle**
- Two congruent sides → Base angles congruent

**Pattern 5: Perpendicular bisector**
- Point equidistant from endpoints → On perpendicular bisector

### Key Takeaways

1. **Identify the right triangles** to prove congruent
2. **Mark all given information** on diagrams
3. **Use reflexive property** for shared sides/angles
4. **Look for vertical angles** at intersections
5. **Use auxiliary lines** when needed
6. **Plan before writing** — work backwards from conclusion
7. **CPCTC** is used AFTER proving triangles congruent

---

## Day 5: Review and Problem-Solving Strategies

### Week 16 Content Review

**Day 1: Midsegment Theorem**
- Midsegment connects midpoints of two sides
- Always parallel to third side and half its length
- Formula: If MN is midsegment parallel to BC, then MN = ½BC and MN ∥ BC

**Day 2: Medians and Centroids**
- Median connects vertex to midpoint of opposite side
- Centroid (G) is where three medians meet
- Centroid divides each median in 2:1 ratio (longer toward vertex)
- Centroid formula: G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)

**Day 3: Coordinate Proofs**
- Use distance, midpoint, and slope formulas
- Place figures strategically on coordinate plane
- Prove algebraically using coordinates

**Day 4: Advanced Proofs**
- Use five congruence theorems (SSS, SAS, ASA, AAS, HL)
- CPCTC after proving triangles congruent
- Multi-step proofs and auxiliary lines

### Comprehensive Problem-Solving Strategies

**Strategy 1: Identifying What You're Looking For**

When solving triangle problems, identify the type:
- **Length problem** → Use distance formula or midsegment/centroid properties
- **Angle problem** → Use angle sum, exterior angle, or isosceles properties
- **Proof problem** → Identify triangles and use congruence theorems
- **Coordinate problem** → Use distance, midpoint, slope formulas

**Strategy 2: Drawing and Labeling Diagrams**

1. Draw a clear, large diagram
2. Label all given points and measurements
3. Mark congruent parts with matching marks
4. Mark right angles with squares
5. Mark parallel lines with arrows

**Strategy 3: Making a Plan**

Ask yourself:
- What am I given?
- What do I need to find?
- What theorems or formulas apply?
- What intermediate steps do I need?

**Strategy 4: Working Backwards**

Start with what you want to prove and ask:
- What would prove this?
- What information would I need?
- Can I get that information from what's given?

### Common Problem Types and Approaches

**Type 1: Finding lengths using midsegments**

Approach:
- Identify which segment is the midsegment
- Use MN = ½BC (midsegment is half the parallel side)
- Set up equation if variables are involved

**Type 2: Finding lengths using centroid**

Approach:
- Identify medians and centroid
- Use 2:1 ratio: AG = ⅔AM or GM = ⅓AM
- Remember: vertex to centroid is ⅔ of whole median

**Type 3: Coordinate geometry classification**

Approach:
- Find all side lengths using distance formula
- Compare lengths: all equal (equilateral), two equal (isosceles), none equal (scalene)
- Check for right angles using slopes or Pythagorean theorem

**Type 4: Proving triangles congruent**

Approach:
- Mark all given information
- Look for shared sides (reflexive property)
- Look for vertical angles
- Count: Do you have SSS, SAS, ASA, AAS, or HL?
- Write the congruence statement

**Type 5: Using CPCTC**

Approach:
- First prove triangles are congruent
- Then state: "By CPCTC, [corresponding part] ≅ [corresponding part]"
- Make sure parts truly correspond (check vertex order)

### Avoiding Common Mistakes

**Mistake 1: Wrong ratio for centroid**
- ❌ Using 1:2 instead of 2:1
- ✓ Remember: LONGER part is toward VERTEX (⅔)

**Mistake 2: Confusing midsegment and median**
- ❌ Thinking median is parallel to a side
- ✓ Midsegment is parallel; median goes to vertex

**Mistake 3: Wrong congruence theorem**
- ❌ Using SSA or AAA
- ✓ Only use SSS, SAS, ASA, AAS, HL

**Mistake 4: Vertex order in congruence statements**
- ❌ △ABC ≅ △DEF when actual correspondence is A↔D, B↔F, C↔E
- ✓ Write △ABC ≅ △DFE to show correct correspondence

**Mistake 5: Using CPCTC before proving congruence**
- ❌ Assuming parts are congruent without proof
- ✓ First prove △s congruent, THEN use CPCTC

**Mistake 6: Forgetting to simplify algebraic expressions**
- ❌ Leaving answer as (0+6+8)/3
- ✓ Simplify to 14/3 or 4⅔

### Multi-Step Problem Strategy

**Example: Complex problem combining concepts**

Given: △ABC with A(0, 0), B(12, 0), C(6, 9)
Find: a) Is △ABC isosceles?
      b) Find the centroid G
      c) Find the midsegment parallel to AB
      d) Verify the midsegment is half of AB

*Solution:*

**Part a: Check if isosceles**
AB = 12
AC = √[(6-0)² + (9-0)²] = √(36+81) = √117 = 3√13
BC = √[(6-12)² + (9-0)²] = √(36+81) = √117 = 3√13

Since AC = BC, △ABC is isosceles ✓

**Part b: Find centroid**
G = ((0+12+6)/3, (0+0+9)/3) = (18/3, 9/3) = (6, 3) ✓

**Part c: Midsegment parallel to AB**
Find midpoints of AC and BC:
M (midpoint of AC) = (3, 4.5)
N (midpoint of BC) = (9, 4.5)

Midsegment MN connects these points ✓

**Part d: Verify MN = ½AB**
MN = |9 - 3| = 6 (same y-coordinates, so just find difference in x)
AB = 12
Indeed, MN = ½AB since 6 = ½(12) ✓

### Practice Problem Framework

When working through practice problems:

1. **Read carefully** — Understand what's given and what's asked
2. **Visualize** — Draw a diagram if not provided
3. **Recall** — What theorem or formula applies?
4. **Plan** — Outline your approach
5. **Execute** — Work through calculations carefully
6. **Check** — Does your answer make sense?
7. **Reflect** — Could you solve this a different way?

### Proof Writing Tips

**Structure of a good proof:**
1. **Given** — State what information you're starting with
2. **Prove** — State what you need to show
3. **Steps** — Each statement with a reason
4. **Conclusion** — Restate what you've proven

**Common reasons in proofs:**
- Given
- Definition of [term]
- Reflexive property
- Vertical angles are congruent
- [Angle relationship] in parallel lines
- Triangle Angle Sum Theorem
- SSS, SAS, ASA, AAS, or HL
- CPCTC
- Isosceles Triangle Theorem
- Midsegment Theorem

### Formulas to Memorize

**Distance Formula:**
d = √[(x₂-x₁)² + (y₂-y₁)²]

**Midpoint Formula:**
M = ((x₁+x₂)/2, (y₁+y₂)/2)

**Slope Formula:**
m = (y₂-y₁)/(x₂-x₁)

**Centroid Formula:**
G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)

**Centroid Ratios:**
- From vertex to centroid: ⅔ of median
- From centroid to midpoint: ⅓ of median
- Ratio: 2:1

**Midsegment:**
- Length: ½ (parallel side)
- Always parallel to third side

**Triangle Angle Sum:**
m∠A + m∠B + m∠C = 180°

### Final Preparation Tips

**For the Week 16 Test:**

1. **Review all notes** from Days 1-5
2. **Redo practice problems** — especially ones you got wrong
3. **Make flashcards** for theorems and formulas
4. **Practice proofs** — write them out fully
5. **Time yourself** — the test is 60-75 minutes
6. **Check your work** — especially calculations
7. **Read carefully** — understand what each problem asks

**What to focus on:**
- Midsegment Theorem and calculations
- Centroid 2:1 ratio
- Coordinate geometry formulas
- Congruence theorems (SSS, SAS, ASA, AAS, HL)
- Proof writing with CPCTC

**You've got this! You consistently score 95%+. Trust your preparation and work carefully through each problem.**

---

## Week 16 Summary: Key Concepts

### Theorems to Know
1. **Triangle Midsegment Theorem:** Midsegment is parallel to third side and half its length
2. **Centroid Theorem:** Medians meet at centroid; centroid divides each median 2:1
3. **Triangle Congruence Theorems:** SSS, SAS, ASA, AAS, HL
4. **CPCTC:** Corresponding parts of congruent triangles are congruent

### Formulas to Know
- Distance, midpoint, slope
- Centroid: average of three vertices
- Midsegment: ½ of parallel side
- Centroid division: ⅔ from vertex, ⅓ to midpoint

### Skills to Master
- Finding lengths using midsegment theorem
- Finding lengths using centroid ratios
- Coordinate proofs with triangles
- Proving triangles congruent
- Writing two-column proofs
- Using CPCTC

**Good luck on your Week 16 test!**
