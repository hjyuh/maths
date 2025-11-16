# Week 18: Similarity and Dilations

## Essential Question
**How do dilations affect two-dimensional figures?**

## Learning Objectives
By the end of this week, students will be able to:
- Understand and apply the properties of dilations
- Identify and construct similar figures using transformations
- Prove triangles are similar using AA, SAS, and SSS similarity theorems
- Solve problems involving proportional relationships in similar figures
- Apply similarity to real-world contexts

---

## Part 1: Introduction to Similarity

### Definition of Similar Figures
Two figures are **similar** if:
1. **All corresponding angles are congruent** (same measure)
2. **All corresponding sides are proportional** (same ratio)

We write: △ABC ~ △DEF (read as "triangle ABC is similar to triangle DEF")

### Key Characteristics
- Similar figures have the **same shape** but not necessarily the same size
- The ratio of corresponding sides is called the **scale factor**
- Corresponding angles are congruent
- All circles are similar to each other
- All regular polygons with the same number of sides are similar

### Example 1: Identifying Similar Figures
If rectangle ABCD has dimensions 4 by 6, and rectangle PQRS has dimensions 6 by 9, are they similar?

**Solution:**
- Ratio of lengths: 4/6 = 2/3
- Ratio of widths: 6/9 = 2/3
- All angles are 90° (rectangles)
- Since corresponding sides are proportional and angles are congruent, the rectangles are similar

**Scale factor**: 2/3 (or 3/2 depending on direction)

---

## Part 2: Dilations

### Definition
A **dilation** is a transformation that produces an image that is the same shape as the original figure but a different size.

### Components of a Dilation
1. **Center of dilation**: The fixed point about which the figure is enlarged or reduced
2. **Scale factor (k)**: The ratio that determines how much the figure is enlarged or reduced

### Properties of Dilations (G.SRT.1)

**Property 1: Effect on Lines**
- A line **passing through the center** of dilation remains unchanged
- A line **not passing through the center** is mapped to a **parallel line**

**Property 2: Effect on Segments**
- The dilation of a line segment is **longer or shorter** in the ratio given by the scale factor
- If scale factor k = 2, segments are twice as long
- If scale factor k = 1/2, segments are half as long

**Property 3: Scale Factor Effects**
- If |k| > 1: **Enlargement** (figure gets bigger)
- If 0 < |k| < 1: **Reduction** (figure gets smaller)
- If k = 1: Image is congruent to preimage
- If k < 0: Figure is dilated and reflected across the center

### Notation
Dilation with center C and scale factor k:
- D(C, k) or D_k with center C
- Point A maps to A', read as "A prime"

### Example 2: Finding Image Points
Given point A(4, 6) and center of dilation at origin O(0, 0) with scale factor k = 3, find A'.

**Solution:**
Multiply each coordinate by the scale factor:
- A' = (3 × 4, 3 × 6) = (12, 18)

### Example 3: Finding Scale Factor
If point B(6, 9) dilates to B'(2, 3) with center at the origin, find the scale factor.

**Solution:**
- k = x'/x = 2/6 = 1/3
- Or k = y'/y = 3/9 = 1/3
- Scale factor k = 1/3 (reduction)

---

## Part 3: Dilation in the Coordinate Plane

### Dilation with Center at Origin
For a dilation centered at the origin with scale factor k:
- (x, y) → (kx, ky)

### Dilation with Center NOT at Origin
For dilation centered at point C(a, b) with scale factor k:
1. Translate figure so C is at origin
2. Apply dilation: multiply by k
3. Translate back

**Formula**: (x, y) → (k(x - a) + a, k(y - b) + b)

### Example 4: Dilating a Triangle
△ABC has vertices A(2, 4), B(6, 2), C(4, 8). Find the image after dilation with center O(0, 0) and k = 1/2.

**Solution:**
- A' = (1/2 × 2, 1/2 × 4) = (1, 2)
- B' = (1/2 × 6, 1/2 × 2) = (3, 1)
- C' = (1/2 × 4, 1/2 × 8) = (2, 4)

The image triangle △A'B'C' is similar to △ABC with scale factor 1/2.

---

## Part 4: Similarity Transformations (G.SRT.2, G.SRT.3)

### Definition
A **similarity transformation** is a sequence of rigid motions (translations, reflections, rotations) followed by a dilation.

### Key Concept
Two figures are similar if and only if there exists a similarity transformation that maps one figure onto the other.

### Types of Transformations Review
1. **Rigid motions (isometries)**: Preserve size and shape
   - Translation
   - Reflection
   - Rotation

2. **Dilation**: Preserves shape but changes size

3. **Similarity transformation**: Rigid motion(s) + dilation

### Example 5: Describing Similarity Transformation
△ABC with vertices A(1, 1), B(3, 1), C(2, 3) is similar to △DEF with vertices D(4, 2), E(8, 2), F(6, 6).

**Describe the transformation:**

**Solution:**
1. Find scale factor: DE/AB = 4/2 = 2
2. Check if dilation alone works: Dilate △ABC by k = 2 centered at origin
   - A(1,1) → (2,2)
   - B(3,1) → (6,2)
   - C(2,3) → (4,6)

3. Now compare to △DEF: D(4,2), E(8,2), F(6,6)
4. Translation needed: (x,y) → (x+2, y)

**Answer**: Dilation with k = 2 centered at origin, followed by translation 2 units right.

---

## Part 5: Triangle Similarity Theorems

### Angle-Angle (AA) Similarity Theorem (G.SRT.5)
**If two angles of one triangle are congruent to two angles of another triangle, then the triangles are similar.**

**Why it works:**
- If two angles are congruent, the third angle must also be congruent (angle sum = 180°)
- This ensures all corresponding angles are congruent

### Side-Side-Side (SSS) Similarity Theorem (G.SRT.6)
**If the three sides of one triangle are proportional to the three sides of another triangle, then the triangles are similar.**

**Condition:** AB/DE = BC/EF = AC/DF

### Side-Angle-Side (SAS) Similarity Theorem (G.SRT.6)
**If two sides of one triangle are proportional to two sides of another triangle and the included angles are congruent, then the triangles are similar.**

**Condition:** AB/DE = AC/DF AND ∠A ≅ ∠D

### Example 6: Proving Similarity with AA
Given: In △ABC and △DEF, ∠A = 50° and ∠B = 70°
In △DEF, ∠D = 50° and ∠E = 70°

**Are the triangles similar?**

**Solution:**
- ∠A ≅ ∠D (both 50°)
- ∠B ≅ ∠E (both 70°)
- By AA Similarity Theorem, △ABC ~ △DEF

### Example 7: Proving Similarity with SSS
△ABC has sides 6, 9, 12. △DEF has sides 4, 6, 8.

**Are the triangles similar?**

**Solution:**
Check ratios:
- 6/4 = 3/2
- 9/6 = 3/2
- 12/8 = 3/2

All ratios are equal, so by SSS Similarity Theorem, △ABC ~ △DEF with scale factor 3/2.

### Example 8: Proving Similarity with SAS
In △ABC: AB = 8, AC = 12, ∠A = 45°
In △DEF: DE = 6, DF = 9, ∠D = 45°

**Are the triangles similar?**

**Solution:**
- Check ratio: AB/DE = 8/6 = 4/3
- Check ratio: AC/DF = 12/9 = 4/3
- ∠A ≅ ∠D (both 45°, and included angle)
- By SAS Similarity Theorem, △ABC ~ △DEF

---

## Part 6: Proportional Relationships in Similar Figures

### Corresponding Parts
In similar figures:
- **Corresponding sides** are proportional
- **Corresponding angles** are congruent
- **Corresponding perimeters** have the same ratio as sides
- **Corresponding areas** have ratio equal to (scale factor)²

### Setting Up Proportions
If △ABC ~ △DEF with scale factor k:

AB/DE = BC/EF = AC/DF = k

### Example 9: Finding Missing Sides
△ABC ~ △DEF. If AB = 10, BC = 15, AC = 20, and DE = 4, find EF and DF.

**Solution:**
Scale factor: AB/DE = 10/4 = 5/2

EF = BC ÷ (5/2) = 15 ÷ 2.5 = 6
DF = AC ÷ (5/2) = 20 ÷ 2.5 = 8

### Example 10: Perimeter and Area Relationships
Two similar rectangles have a scale factor of 3:2. The smaller rectangle has perimeter 20 cm and area 24 cm².

**Find the perimeter and area of the larger rectangle.**

**Solution:**
- Perimeter ratio = scale factor = 3/2
- Larger perimeter = 20 × (3/2) = 30 cm

- Area ratio = (scale factor)² = (3/2)² = 9/4
- Larger area = 24 × (9/4) = 54 cm²

---

## Part 7: Triangle Proportionality Theorem (G.SRT.5)

### Side-Splitter Theorem
**If a line is parallel to one side of a triangle and intersects the other two sides, then it divides those sides proportionally.**

Given: △ABC with line DE ∥ BC, where D is on AB and E is on AC

Then: AD/DB = AE/EC

### Converse
**If a line divides two sides of a triangle proportionally, then it is parallel to the third side.**

### Example 11: Using Side-Splitter Theorem
In △ABC, DE ∥ BC. If AD = 6, DB = 9, and AE = 8, find EC.

**Solution:**
Using the theorem: AD/DB = AE/EC

6/9 = 8/EC

6 · EC = 9 · 8
6 · EC = 72
EC = 12

### Triangle Midsegment Theorem (Review from Unit 3)
The segment connecting the midpoints of two sides of a triangle is:
1. **Parallel** to the third side
2. **Half the length** of the third side

This is a special case of the Side-Splitter Theorem where the ratio is 1:1.

---

## Part 8: Similarity in Right Triangles

### Altitude to Hypotenuse Theorem
**When an altitude is drawn from the right angle to the hypotenuse of a right triangle, it creates three similar triangles:**

1. The original triangle
2. The smaller triangle on the left
3. The smaller triangle on the right

### Geometric Mean Relationships
In right △ABC with altitude CD to hypotenuse AB:

1. **CD is the geometric mean of AD and DB:**
   CD² = AD · DB

2. **AC is the geometric mean of AB and AD:**
   AC² = AB · AD

3. **BC is the geometric mean of AB and DB:**
   BC² = AB · DB

### Example 12: Using Geometric Mean
In right △ABC, altitude CD is drawn to hypotenuse AB. If AD = 4 and DB = 9, find CD.

**Solution:**
CD² = AD · DB
CD² = 4 · 9
CD² = 36
CD = 6

---

## Part 9: Proving the Pythagorean Theorem Using Similarity (G.SRT.5)

### Proof Using Similar Triangles
Given: Right △ABC with right angle at C, altitude CD to hypotenuse AB

**Prove: a² + b² = c²**

**Proof:**
1. By the altitude to hypotenuse theorem, we have three similar triangles
2. From similarity: △ABC ~ △CAD ~ △CBD

3. From △ABC ~ △CAD:
   BC/AB = BD/BC
   a/c = BD/a
   a² = c · BD

4. From △ABC ~ △CBD:
   AC/AB = AD/AC
   b/c = AD/b
   b² = c · AD

5. Adding the equations:
   a² + b² = c · BD + c · AD
   a² + b² = c(BD + AD)
   a² + b² = c · c
   **a² + b² = c²**

This elegant proof shows the deep connection between similarity and the Pythagorean Theorem!

---

## Part 10: Real-World Applications

### Application 1: Indirect Measurement
Similar triangles can be used to find heights and distances that are difficult to measure directly.

**Example 13**: A person 6 feet tall casts a shadow 8 feet long. At the same time, a building casts a shadow 56 feet long. How tall is the building?

**Solution:**
The sun's rays create similar triangles.

Person/Shadow = Building/Shadow
6/8 = h/56
8h = 336
h = 42 feet

### Application 2: Scale Models
Architects and engineers use similar figures to create scale models.

**Example 14**: A scale model of a car is built with scale factor 1:18. If the model is 9 inches long, how long is the actual car?

**Solution:**
Model/Actual = 1/18
9/Actual = 1/18
Actual = 9 × 18 = 162 inches = 13.5 feet

### Application 3: Map Scales
Maps use similarity to represent large areas on paper.

**Example 15**: On a map with scale 1 inch : 50 miles, two cities are 3.5 inches apart. What is the actual distance?

**Solution:**
Actual distance = 3.5 × 50 = 175 miles

---

## Part 11: Problem-Solving Strategies

### Strategy 1: Identify Similar Figures
Look for:
- Parallel lines creating corresponding angles
- Shared angles
- Right angles
- Proportional sides

### Strategy 2: Determine Which Theorem to Use
- **AA**: When you have angle information
- **SSS**: When you have all three sides
- **SAS**: When you have two sides and included angle

### Strategy 3: Set Up Proportions Carefully
- Identify corresponding parts
- Keep ratios consistent (same order)
- Use variables for unknowns

### Strategy 4: Check Your Answer
- Does the scale factor make sense?
- Are units consistent?
- Is the answer reasonable?

---

## Practice Problems

### Basic Problems

1. Are all squares similar? Explain.

2. A triangle has sides 5, 12, 13. Another triangle has sides 10, 24, 26. Are they similar? If so, what is the scale factor?

3. Point P(6, 8) is dilated with center at origin and k = 1/3. Find P'.

4. △ABC has vertices A(2, 3), B(4, 7), C(6, 3). Find the vertices of △A'B'C' after dilation with center O(0,0) and k = 2.

5. In △PQR and △STU, ∠P = 40°, ∠Q = 60°, ∠S = 40°, ∠T = 60°. Are the triangles similar? Explain.

### Intermediate Problems

6. △ABC ~ △DEF. AB = 15, BC = 20, AC = 25, and DE = 9. Find EF and DF.

7. In △ABC, line DE ∥ BC. If AD = 5, AB = 12, and EC = 10.5, find AE.

8. Two similar triangles have areas 36 cm² and 81 cm². What is the scale factor of their sides?

9. The scale on a blueprint is 1/4 inch = 2 feet. If a room measures 3 inches by 4.5 inches on the blueprint, what are the actual dimensions?

10. In right △ABC with altitude CD to hypotenuse AB, AD = 3 and AB = 12. Find CD and DB.

### Advanced Problems

11. Prove that if △ABC ~ △DEF and △DEF ~ △GHI, then △ABC ~ △GHI.

12. A 5-foot person stands 12 feet from a streetlight and casts a 3-foot shadow. How tall is the streetlight?

13. In △ABC, points D and E are on sides AB and AC respectively. If AD = 8, DB = 6, AE = 12, and EC = 9, prove that DE ∥ BC.

14. Two similar polygons have perimeters in the ratio 5:3. If the larger polygon has area 100 cm², find the area of the smaller polygon.

15. Describe a similarity transformation that maps △ABC with vertices A(0, 0), B(2, 0), C(1, 2) onto △DEF with vertices D(-3, 1), E(3, 1), F(0, 7).

---

## Key Theorems and Formulas Summary

### Similarity Definition
Two figures are similar if:
- All corresponding angles are congruent
- All corresponding sides are proportional

### Dilation Properties
- (x, y) → (kx, ky) when center is at origin
- Lines through center stay unchanged
- Lines not through center become parallel

### Triangle Similarity Theorems
- **AA**: Two angles congruent
- **SSS**: All three sides proportional
- **SAS**: Two sides proportional and included angle congruent

### Proportions
- Side-Splitter Theorem: If DE ∥ BC, then AD/DB = AE/EC
- Geometric Mean: In right triangle with altitude to hypotenuse: h² = xy

### Scale Relationships
- Perimeter ratio = scale factor (k)
- Area ratio = k²
- Volume ratio = k³

---

## Reflective Questions

1. How can you explain to a friend why all circles are similar?

2. What is the difference between congruent and similar figures?

3. How does similarity help us measure objects indirectly?

4. Why is it sufficient to show only two angles are congruent to prove triangle similarity?

5. How can you convince someone that two figures are similar using transformations?

6. What real-world professions rely heavily on the concept of similarity?

---

## Connections to Other Topics

### Algebra
- Solving proportions and ratios
- Systems of equations

### Previous Geometry
- Congruence (special case where k = 1)
- Transformations (rigid motions)
- Triangle properties

### Future Topics
- Trigonometry (based on similar right triangles)
- Coordinate geometry
- Volume and surface area relationships

### Real World
- Photography and art (perspective)
- Architecture and construction
- Cartography (maps)
- Engineering and design

---

## Common Mistakes to Avoid

1. **Confusing congruence and similarity**: Congruent means same size AND shape; similar means same shape only

2. **Incorrect ratio order**: Keep ratios consistent (e.g., small/large = small/large, not small/large = large/small)

3. **Forgetting to square for area**: Area ratio is k², not k

4. **Assuming all similar-looking figures are similar**: Always verify with angles or proportional sides

5. **Misidentifying corresponding parts**: Draw diagrams and mark corresponding parts clearly

6. **Using wrong similarity theorem**: Match the given information to the correct theorem

---

**End of Week 18 Notes**
