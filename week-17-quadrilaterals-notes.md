# Week 17: Properties of Polygons & Quadrilaterals

## Overview
**Essential Question:** How does congruence reveal the properties within geometric figures?

**Standards Covered:**
- G.CO.4: Congruence via rigid motions
- G.CO.10: Parallelogram theorems
- G.SRT.6: Using congruence criteria to solve problems
- G.GPE.6: Coordinate proofs with quadrilaterals
- G.GPE.8: Computing perimeters of polygons

---

## Day 1: Properties of Quadrilaterals & Parallelograms

### Classification of Quadrilaterals

**Quadrilateral:** A polygon with four sides and four vertices.

**Key Properties of ALL Quadrilaterals:**
- 4 sides
- 4 vertices
- 4 angles
- Sum of interior angles = 360°

**Why 360°?**
Any quadrilateral can be divided into two triangles by drawing a diagonal. Each triangle has angles summing to 180°, so the quadrilateral has 2 × 180° = 360°.

### Quadrilateral Family Tree

```
                    Quadrilateral
                         |
        _________________|_________________
       |                                   |
   Trapezoid                         Parallelogram
   (1 pair ||)                       (2 pairs ||)
                                          |
                           _______________|_______________
                          |               |               |
                      Rectangle        Rhombus          Square
                    (4 right angles) (4≅ sides)    (both properties)
```

### Definition of a Parallelogram

**Parallelogram:** A quadrilateral with both pairs of opposite sides parallel.

**Notation:** ABCD is a parallelogram means AB ∥ DC and AD ∥ BC

**Standard G.CO.10:** Construct arguments about parallelograms using theorems about opposite sides, opposite angles, and diagonals.

### Properties of Parallelograms

**Theorem 1: Opposite Sides are Congruent**
In a parallelogram, both pairs of opposite sides are congruent.
- If ABCD is a parallelogram, then AB ≅ DC and AD ≅ BC

**Theorem 2: Opposite Angles are Congruent**
In a parallelogram, both pairs of opposite angles are congruent.
- If ABCD is a parallelogram, then ∠A ≅ ∠C and ∠B ≅ ∠D

**Theorem 3: Consecutive Angles are Supplementary**
In a parallelogram, consecutive angles are supplementary (sum to 180°).
- If ABCD is a parallelogram, then ∠A + ∠B = 180°, ∠B + ∠C = 180°, etc.

**Why?** Consecutive angles are same-side interior angles formed by parallel lines and a transversal, so they're supplementary.

**Theorem 4: Diagonals Bisect Each Other**
In a parallelogram, the diagonals bisect each other.
- If ABCD is a parallelogram with diagonals AC and BD intersecting at E, then AE ≅ EC and BE ≅ ED

### Proving Parallelogram Properties

**Example: Proving opposite sides are congruent**

Given: ABCD is a parallelogram
Prove: AB ≅ DC and AD ≅ BC

*Proof:*
Draw diagonal AC

| Statement | Reason |
|-----------|--------|
| ABCD is a parallelogram | Given |
| AB ∥ DC, AD ∥ BC | Definition of parallelogram |
| ∠BAC ≅ ∠DCA | Alternate interior angles (AB ∥ DC) |
| ∠DAC ≅ ∠BCA | Alternate interior angles (AD ∥ BC) |
| AC ≅ AC | Reflexive property |
| △ABC ≅ △CDA | ASA |
| AB ≅ DC, AD ≅ BC | CPCTC ✓ |

### Using Parallelogram Properties

**Type 1: Finding angle measures**

Example 1: In parallelogram ABCD, m∠A = 65°. Find m∠B, m∠C, and m∠D.

*Solution:*
- ∠A and ∠B are consecutive → ∠B = 180° - 65° = **115°**
- ∠A and ∠C are opposite → ∠C = 65° (same as ∠A) = **65°**
- ∠B and ∠D are opposite → ∠D = 115° (same as ∠B) = **115°**

Check: 65° + 115° + 65° + 115° = 360° ✓

**Type 2: Finding side lengths**

Example 2: In parallelogram PQRS, PQ = 3x + 5 and RS = 5x - 7. Find x and PQ.

*Solution:*
PQ and RS are opposite sides → PQ ≅ RS
3x + 5 = 5x - 7
12 = 2x
x = **6**

PQ = 3(6) + 5 = **23**

**Type 3: Working with diagonals**

Example 3: In parallelogram ABCD, diagonals AC and BD intersect at E. If AE = 2x + 3 and EC = 4x - 5, find x and AC.

*Solution:*
Diagonals bisect each other → AE ≅ EC
2x + 3 = 4x - 5
8 = 2x
x = **4**

AE = 2(4) + 3 = 11
EC = 4(4) - 5 = 11
AC = AE + EC = 11 + 11 = **22**

### Proving a Quadrilateral is a Parallelogram (Converses)

**Five Ways to Prove a Quadrilateral is a Parallelogram:**

1. **Definition:** Show both pairs of opposite sides are parallel
2. **Theorem:** Show both pairs of opposite sides are congruent
3. **Theorem:** Show both pairs of opposite angles are congruent
4. **Theorem:** Show one pair of opposite sides is both parallel AND congruent
5. **Theorem:** Show diagonals bisect each other

**Example: Using the converse**

Given: In quadrilateral ABCD, AB ≅ DC and AD ≅ BC
Prove: ABCD is a parallelogram

*Proof:*
Draw diagonal AC

| Statement | Reason |
|-----------|--------|
| AB ≅ DC | Given |
| AD ≅ BC | Given |
| AC ≅ AC | Reflexive property |
| △ABC ≅ △CDA | SSS |
| ∠BAC ≅ ∠DCA | CPCTC |
| ∠DAC ≅ ∠BCA | CPCTC |
| AB ∥ DC | If alternate interior angles are ≅, lines are ∥ |
| AD ∥ BC | If alternate interior angles are ≅, lines are ∥ |
| ABCD is a parallelogram | Definition of parallelogram ✓ |

### Perimeter of Parallelograms

**Perimeter Formula:**
For parallelogram with sides a and b:
**P = 2a + 2b** (sum of all four sides, but opposite sides are equal)

**Example:**
In parallelogram ABCD, AB = 12 and BC = 8. Find the perimeter.

*Solution:*
P = 2(AB) + 2(BC) = 2(12) + 2(8) = 24 + 16 = **40**

### Key Takeaways

1. **Parallelogram definition:** Both pairs of opposite sides parallel
2. **Four key properties:** Opposite sides ≅, opposite angles ≅, consecutive angles supplementary, diagonals bisect each other
3. **Five ways to prove** a quadrilateral is a parallelogram
4. **Angle sum:** All quadrilaterals have angles summing to 360°
5. Use **triangle congruence** to prove parallelogram properties

---

## Day 2: Special Parallelograms (Rectangles, Rhombi, Squares)

### Rectangles

**Definition:** A rectangle is a parallelogram with four right angles.

**Key Point:** Since a rectangle is a parallelogram, it has ALL parallelogram properties PLUS additional properties.

**Properties of Rectangles:**
1. All parallelogram properties (opposite sides ≅, opposite angles ≅, diagonals bisect each other)
2. **All four angles are right angles** (90°)
3. **Diagonals are congruent** (AC ≅ BD)

**Theorem: Diagonals of a Rectangle are Congruent**

Given: ABCD is a rectangle
Prove: AC ≅ BD

*Proof:*

| Statement | Reason |
|-----------|--------|
| ABCD is a rectangle | Given |
| ∠ABC = ∠BAD = 90° | Definition of rectangle |
| AB ≅ AB | Reflexive property |
| BC ≅ AD | Opposite sides of parallelogram |
| △ABC ≅ △BAD | SAS |
| AC ≅ BD | CPCTC ✓ |

**Using Rectangle Properties:**

Example 1: In rectangle PQRS, PQ = 15 and PS = 8. Find:
a) QR
b) RS
c) The perimeter

*Solution:*
a) QR = PS = **8** (opposite sides)
b) RS = PQ = **15** (opposite sides)
c) P = 2(15) + 2(8) = **46**

Example 2: In rectangle ABCD, diagonal AC = 4x + 7 and diagonal BD = 6x - 3. Find x and the length of each diagonal.

*Solution:*
Diagonals of a rectangle are congruent:
AC = BD
4x + 7 = 6x - 3
10 = 2x
x = **5**

AC = 4(5) + 7 = **27**
BD = 6(5) - 3 = **27** ✓

### Rhombi (Plural of Rhombus)

**Definition:** A rhombus is a parallelogram with four congruent sides.

**Properties of a Rhombus:**
1. All parallelogram properties
2. **All four sides are congruent** (AB ≅ BC ≅ CD ≅ DA)
3. **Diagonals are perpendicular** (AC ⊥ BD)
4. **Diagonals bisect the vertex angles**

**Theorem: Diagonals of a Rhombus are Perpendicular**

Given: ABCD is a rhombus with diagonals meeting at E
Prove: AC ⊥ BD

*Proof:*

| Statement | Reason |
|-----------|--------|
| ABCD is a rhombus | Given |
| AB ≅ BC | Definition of rhombus |
| Diagonals bisect each other | Property of parallelogram |
| AE ≅ EC, BE ≅ ED | Definition of bisect |
| △ABE ≅ △CBE | SSS |
| ∠AEB ≅ ∠CEB | CPCTC |
| ∠AEB and ∠CEB form linear pair | Definition of linear pair |
| ∠AEB + ∠CEB = 180° | Linear Pair Postulate |
| 2(∠AEB) = 180° | Substitution (angles are ≅) |
| ∠AEB = 90° | Division |
| AC ⊥ BD | Definition of perpendicular ✓ |

**Using Rhombus Properties:**

Example 1: In rhombus ABCD, AB = 3x - 7 and BC = 2x + 5. Find x and the length of each side.

*Solution:*
All sides of a rhombus are congruent:
AB = BC
3x - 7 = 2x + 5
x = **12**

Each side = 3(12) - 7 = **29**

Example 2: In rhombus PQRS, diagonal PR = 24 and diagonal QS = 18. The diagonals intersect at T. Find PT, TR, QT, and TS.

*Solution:*
Diagonals bisect each other:
PT = TR = ½(PR) = ½(24) = **12**
QT = TS = ½(QS) = ½(18) = **9**

**Note:** Since diagonals are perpendicular, they form four right triangles.

### Perimeter and Area Formulas

**Rhombus Perimeter:**
If each side = s, then **P = 4s**

**Rhombus Area (using diagonals):**
If diagonals are d₁ and d₂, then **A = ½d₁d₂**

**Why?** The diagonals divide the rhombus into 4 congruent right triangles. The area is ½ × base × height where the diagonals serve as base and height.

Example 3: A rhombus has diagonals of length 16 and 12. Find:
a) The area
b) The perimeter

*Solution:*
a) A = ½d₁d₂ = ½(16)(12) = **96**

b) Diagonals bisect each other and are perpendicular, forming right triangles.
   Half-diagonals: 8 and 6
   Side of rhombus = √(8² + 6²) = √(64 + 36) = √100 = 10
   P = 4(10) = **40**

### Squares

**Definition:** A square is a parallelogram with four right angles AND four congruent sides.

**Alternative Definitions:**
- A square is a rectangle with four congruent sides
- A square is a rhombus with four right angles

**Properties of a Square:**
1. All parallelogram properties
2. All rectangle properties (4 right angles, diagonals congruent)
3. All rhombus properties (4 congruent sides, diagonals perpendicular and bisect angles)

**Summary of Square Properties:**
- 4 congruent sides
- 4 right angles
- Opposite sides parallel
- Diagonals are congruent
- Diagonals are perpendicular
- Diagonals bisect each other
- Diagonals bisect the vertex angles (creating 45° angles)

**Using Square Properties:**

Example 1: In square ABCD, AB = 2x + 8 and BC = 4x - 6. Find x and the side length.

*Solution:*
All sides of a square are congruent:
AB = BC
2x + 8 = 4x - 6
14 = 2x
x = **7**

Side length = 2(7) + 8 = **22**

Example 2: In square PQRS, diagonal PR = 10√2. Find:
a) The side length
b) The perimeter
c) The area

*Solution:*
a) In a square, if side = s, then diagonal = s√2
   s√2 = 10√2
   s = **10**

b) P = 4s = 4(10) = **40**

c) A = s² = 10² = **100**

### Comparison Table: Special Parallelograms

| Property | Parallelogram | Rectangle | Rhombus | Square |
|----------|--------------|-----------|---------|--------|
| Opposite sides parallel | ✓ | ✓ | ✓ | ✓ |
| Opposite sides congruent | ✓ | ✓ | ✓ | ✓ |
| Opposite angles congruent | ✓ | ✓ | ✓ | ✓ |
| Diagonals bisect each other | ✓ | ✓ | ✓ | ✓ |
| All angles are 90° | ✗ | ✓ | ✗ | ✓ |
| All sides congruent | ✗ | ✗ | ✓ | ✓ |
| Diagonals congruent | ✗ | ✓ | ✗ | ✓ |
| Diagonals perpendicular | ✗ | ✗ | ✓ | ✓ |
| Diagonals bisect angles | ✗ | ✗ | ✓ | ✓ |

### Hierarchy of Quadrilaterals

**Remember:**
- Every square IS a rectangle (and also a rhombus)
- Every rectangle IS a parallelogram
- Every rhombus IS a parallelogram
- Every square IS a parallelogram

**But:**
- Not every rectangle is a square
- Not every rhombus is a square
- Not every parallelogram is a rectangle or rhombus

### Key Takeaways

1. **Rectangle:** Parallelogram + 4 right angles → diagonals congruent
2. **Rhombus:** Parallelogram + 4 congruent sides → diagonals perpendicular
3. **Square:** Has ALL properties of both rectangle and rhombus
4. **Diagonal properties** are key to distinguishing special parallelograms
5. Use **SSS, SAS, ASA** to prove properties via triangle congruence

---

## Day 3: Trapezoids and Kites

### Trapezoids

**Definition:** A trapezoid is a quadrilateral with exactly one pair of parallel sides.

**Parts of a Trapezoid:**
- **Bases:** The two parallel sides (often different lengths)
- **Legs:** The two non-parallel sides
- **Base angles:** Angles adjacent to the same base

**Notation:**
In trapezoid ABCD with AB ∥ CD:
- AB and CD are the bases
- AD and BC are the legs
- ∠A and ∠B are one pair of base angles
- ∠D and ∠C are the other pair of base angles

### Properties of Trapezoids

**Property 1: Consecutive angles between a base and leg are supplementary**

If AB ∥ CD, then:
- ∠A + ∠D = 180° (same-side interior angles)
- ∠B + ∠C = 180° (same-side interior angles)

Example 1: In trapezoid ABCD with AB ∥ CD, m∠A = 110°. Find m∠D.

*Solution:*
∠A + ∠D = 180° (consecutive angles on same leg)
110° + m∠D = 180°
m∠D = **70°**

### Isosceles Trapezoids

**Definition:** An isosceles trapezoid is a trapezoid with congruent legs.

**Properties of Isosceles Trapezoids:**
1. **Legs are congruent** (AD ≅ BC)
2. **Base angles are congruent** (∠A ≅ ∠B and ∠D ≅ ∠C)
3. **Diagonals are congruent** (AC ≅ BD)

**Proving Base Angles are Congruent:**

Given: Isosceles trapezoid ABCD with AB ∥ CD and AD ≅ BC
Prove: ∠A ≅ ∠B

*Proof Strategy:*
Draw perpendiculars from C and D to AB, creating two right triangles. These triangles are congruent by HL (hypotenuse-leg), so ∠A ≅ ∠B by CPCTC.

**Using Isosceles Trapezoid Properties:**

Example 2: In isosceles trapezoid PQRS with PQ ∥ SR, m∠P = 65°. Find all other angle measures.

*Solution:*
- ∠Q = ∠P = **65°** (base angles congruent)
- ∠P + ∠S = 180° → ∠S = 180° - 65° = **115°**
- ∠R = ∠S = **115°** (base angles congruent)

Example 3: In isosceles trapezoid ABCD, diagonal AC = 5x - 2 and diagonal BD = 3x + 10. Find x and the length of each diagonal.

*Solution:*
Diagonals of isosceles trapezoid are congruent:
AC = BD
5x - 2 = 3x + 10
2x = 12
x = **6**

AC = BD = 5(6) - 2 = **28**

### Midsegment of a Trapezoid

**Midsegment (or Median):** The segment connecting the midpoints of the two legs.

**Trapezoid Midsegment Theorem:**
The midsegment of a trapezoid is:
1. **Parallel to both bases**
2. **Length equals the average of the base lengths**

**Formula:** If midsegment = m, base₁ = b₁, base₂ = b₂, then:
**m = (b₁ + b₂)/2**

Example 4: In trapezoid ABCD with AB ∥ CD, AB = 20, CD = 12, and M and N are midpoints of the legs. Find MN.

*Solution:*
MN = (AB + CD)/2 = (20 + 12)/2 = 32/2 = **16**

Example 5: In trapezoid PQRS, the bases are PQ = 18 and RS = 30. If the midsegment = 4x - 6, find x and the midsegment length.

*Solution:*
Midsegment = (PQ + RS)/2
4x - 6 = (18 + 30)/2
4x - 6 = 24
4x = 30
x = **7.5**

Midsegment = 4(7.5) - 6 = **24**

### Kites

**Definition:** A kite is a quadrilateral with two pairs of consecutive congruent sides, but opposite sides are NOT congruent.

**Visual:** Think of a traditional kite shape - two pairs of adjacent sides are equal.

In kite ABCD:
- AB ≅ AD (one pair of consecutive sides)
- CB ≅ CD (other pair of consecutive sides)
- AB ≠ BC (opposite sides NOT equal)

### Properties of Kites

**Property 1: Diagonals are perpendicular**
The diagonals of a kite are perpendicular to each other.

**Property 2: One diagonal bisects the other**
The diagonal connecting the vertices where unequal sides meet bisects the other diagonal.

**Property 3: One pair of opposite angles is congruent**
The angles between congruent sides are congruent.

In kite ABCD with AB ≅ AD and CB ≅ CD:
- ∠B ≅ ∠D (angles between the congruent sides)
- ∠A and ∠C are typically NOT congruent

**Using Kite Properties:**

Example 6: In kite ABCD, AB ≅ AD and CB ≅ CD. If m∠B = 75°, find m∠D.

*Solution:*
∠B ≅ ∠D (property of kites)
m∠D = **75°**

Example 7: In kite PQRS, diagonal PR = 24, diagonal QS = 18, and they intersect at T. If PR bisects QS, find QT and TS.

*Solution:*
QT = TS = QS/2 = 18/2 = **9** each

(Note: PT and TR are not necessarily equal, as QS bisects PR, not the other way around)

### Area of a Trapezoid

**Formula:**
**A = ½h(b₁ + b₂)**

where h = height (perpendicular distance between bases), b₁ and b₂ are the base lengths.

**Alternative (using midsegment):**
**A = m × h**

where m = midsegment length

Example 8: A trapezoid has bases of 10 and 16, and height of 7. Find the area.

*Solution:*
A = ½h(b₁ + b₂) = ½(7)(10 + 16) = ½(7)(26) = **91**

### Area of a Kite

**Formula:**
**A = ½d₁d₂**

where d₁ and d₂ are the diagonal lengths.

This is the same formula as for a rhombus, because both have perpendicular diagonals.

Example 9: A kite has diagonals of length 20 and 14. Find the area.

*Solution:*
A = ½d₁d₂ = ½(20)(14) = **140**

### Comparison: Trapezoid vs. Kite

| Property | Trapezoid | Isosceles Trapezoid | Kite |
|----------|-----------|-------------------|------|
| Definition | 1 pair of ∥ sides | 1 pair ∥ sides, congruent legs | 2 pairs consecutive ≅ sides |
| Base angles | — | Congruent | One pair congruent |
| Diagonals congruent | No | Yes | No |
| Diagonals perpendicular | No | No | Yes |
| Diagonals bisect each other | No | No | One bisects the other |
| Midsegment theorem | Yes | Yes | No |

### Key Takeaways

1. **Trapezoid:** Exactly one pair of parallel sides
2. **Isosceles trapezoid:** Congruent legs → congruent base angles and diagonals
3. **Trapezoid midsegment:** Parallel to bases, length = average of bases
4. **Kite:** Two pairs of consecutive congruent sides
5. **Kite diagonals:** Perpendicular, one bisects the other
6. **Area formulas:** Trapezoid: ½h(b₁+b₂), Kite: ½d₁d₂

---

## Day 4: Coordinate Proofs with Quadrilaterals

### Strategy for Coordinate Proofs with Quadrilaterals

**Goal:** Use coordinate geometry to prove properties of quadrilaterals algebraically.

**Standard G.GPE.6:** Use coordinates to prove simple geometric theorems algebraically, including the use of slope, distance, and midpoint formulas.

**Three Main Tools:**
1. **Distance formula** → Prove sides are congruent
2. **Slope formula** → Prove sides are parallel or perpendicular
3. **Midpoint formula** → Prove diagonals bisect each other

### Strategic Placement on Coordinate Plane

**For different quadrilaterals:**

**Parallelogram:**
- Place one vertex at origin: A(0, 0)
- Place one side on x-axis: B(a, 0)
- Use variables for other vertices: D(b, c), C(a+b, c)

**Rectangle:**
- Use origin and axes: A(0, 0), B(a, 0), C(a, b), D(0, b)

**Square:**
- Simplest: A(0, 0), B(a, 0), C(a, a), D(0, a)

**Rhombus:**
- Centered at origin for symmetry
- Or: A(0, 0), B(a, 0), C(a+b, c), D(b, c) where sides are all equal length

### Proving a Quadrilateral is a Parallelogram

**Method 1: Show opposite sides are parallel (equal slopes)**

Example 1: Prove ABCD with A(1, 2), B(4, 6), C(9, 7), D(6, 3) is a parallelogram.

*Proof:*
Slope of AB = (6-2)/(4-1) = 4/3
Slope of DC = (3-7)/(6-9) = -4/-3 = 4/3
**AB ∥ DC** ✓

Slope of AD = (3-2)/(6-1) = 1/5
Slope of BC = (7-6)/(9-4) = 1/5
**AD ∥ BC** ✓

Since both pairs of opposite sides are parallel, ABCD is a parallelogram. ✓

**Method 2: Show opposite sides are congruent (equal lengths)**

Using same quadrilateral:

AB = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5
DC = √[(6-9)² + (3-7)²] = √[9 + 16] = √25 = 5
**AB ≅ DC** ✓

AD = √[(6-1)² + (3-2)²] = √[25 + 1] = √26
BC = √[(9-4)² + (7-6)²] = √[25 + 1] = √26
**AD ≅ BC** ✓

Since both pairs of opposite sides are congruent, ABCD is a parallelogram. ✓

**Method 3: Show diagonals bisect each other (same midpoint)**

Midpoint of AC = ((1+9)/2, (2+7)/2) = (5, 4.5)
Midpoint of BD = ((4+6)/2, (6+3)/2) = (5, 4.5)

Since diagonals have the same midpoint, they bisect each other → ABCD is a parallelogram. ✓

### Proving a Parallelogram is a Rectangle

**Two methods:**
1. Show it's a parallelogram AND has a right angle (perpendicular adjacent sides)
2. Show it's a parallelogram AND diagonals are congruent

Example 2: Prove PQRS with P(0, 0), Q(6, 0), R(6, 4), S(0, 4) is a rectangle.

*Proof:*

**Step 1: Show it's a parallelogram**
Slope of PQ = 0, Slope of SR = 0 → PQ ∥ SR ✓
Slope of PS = undefined, Slope of QR = undefined → PS ∥ QR ✓

**Step 2: Show a right angle**
Slope of PQ = 0 (horizontal)
Slope of PS = undefined (vertical)
Horizontal and vertical lines are perpendicular → ∠P = 90° ✓

Therefore, PQRS is a rectangle. ✓

**Alternative: Using diagonals**

PR = √[(6-0)² + (4-0)²] = √[36 + 16] = √52 = 2√13
QS = √[(0-6)² + (4-0)²] = √[36 + 16] = √52 = 2√13
**Diagonals are congruent** ✓

Since PQRS is a parallelogram with congruent diagonals, it's a rectangle. ✓

### Proving a Parallelogram is a Rhombus

**Method:** Show it's a parallelogram AND all four sides are congruent.

Example 3: Prove ABCD with A(0, 3), B(4, 6), C(8, 3), D(4, 0) is a rhombus.

*Proof:*

**Step 1: Show all sides are congruent**
AB = √[(4-0)² + (6-3)²] = √[16 + 9] = √25 = 5
BC = √[(8-4)² + (3-6)²] = √[16 + 9] = √25 = 5
CD = √[(4-8)² + (0-3)²] = √[16 + 9] = √25 = 5
DA = √[(0-4)² + (3-0)²] = √[16 + 9] = √25 = 5

All four sides = 5 ✓

**Step 2: Verify opposite sides are parallel (to confirm parallelogram)**
Slope of AB = (6-3)/(4-0) = 3/4
Slope of DC = (0-3)/(4-8) = -3/-4 = 3/4 → AB ∥ DC ✓

Slope of AD = (0-3)/(4-0) = -3/4
Slope of BC = (3-6)/(8-4) = -3/4 → AD ∥ BC ✓

Since ABCD is a parallelogram with all sides congruent, it's a rhombus. ✓

**Alternative: Show diagonals are perpendicular**

Slope of AC = (3-3)/(8-0) = 0 (horizontal)
Slope of BD = (0-6)/(4-4) = undefined (vertical)

Diagonals are perpendicular ✓

### Proving a Quadrilateral is a Square

**Method:** Show it's a parallelogram AND:
- All sides are congruent (rhombus property), AND
- Has a right angle (rectangle property)

OR show:
- All sides congruent AND all angles are right angles

Example 4: Prove WXYZ with W(1, 1), X(5, 1), Y(5, 5), Z(1, 5) is a square.

*Proof:*

**All sides congruent:**
WX = |5 - 1| = 4
XY = |5 - 1| = 4
YZ = |5 - 1| = 4
ZW = |5 - 1| = 4
All sides = 4 ✓

**Right angle:**
Slope of WX = 0 (horizontal)
Slope of WZ = undefined (vertical)
∠W = 90° ✓

Therefore, WXYZ is a square. ✓

### Proving a Quadrilateral is a Trapezoid

**Method:** Show exactly one pair of opposite sides is parallel.

Example 5: Prove ABCD with A(0, 0), B(6, 0), C(5, 4), D(1, 4) is a trapezoid.

*Proof:*
Slope of AB = (0-0)/(6-0) = 0
Slope of DC = (4-4)/(1-5) = 0/-4 = 0
**AB ∥ DC** (same slope) ✓

Slope of AD = (4-0)/(1-0) = 4
Slope of BC = (4-0)/(5-6) = 4/-1 = -4
**AD ∦ BC** (different slopes) ✓

Since exactly one pair of opposite sides is parallel, ABCD is a trapezoid. ✓

### Proving an Isosceles Trapezoid

**Method:** Show it's a trapezoid AND legs are congruent.

Using the same trapezoid from Example 5:

AD = √[(1-0)² + (4-0)²] = √[1 + 16] = √17
BC = √[(5-6)² + (4-0)²] = √[1 + 16] = √17

**Legs are congruent** ✓

Therefore, ABCD is an isosceles trapezoid. ✓

### Proving Properties of Parallelograms (General Case)

**Example 6: Prove that opposite sides of a parallelogram are congruent**

Setup: Parallelogram ABCD with A(0, 0), B(a, 0), C(a+b, c), D(b, c)

*Proof:*

AB = √[(a-0)² + (0-0)²] = √(a²) = a
DC = √[(a+b-b)² + (c-c)²] = √(a²) = a
**AB = DC** ✓

AD = √[(b-0)² + (c-0)²] = √(b² + c²)
BC = √[(a+b-a)² + (c-0)²] = √(b² + c²)
**AD = BC** ✓

Therefore, opposite sides of a parallelogram are congruent. ✓

### Computing Perimeter (G.GPE.8)

**Strategy:**
1. Use distance formula to find all side lengths
2. Add them up

Example 7: Find the perimeter of parallelogram PQRS with P(1, 2), Q(5, 4), R(8, 1), S(4, -1).

*Solution:*
PQ = √[(5-1)² + (4-2)²] = √[16 + 4] = √20 = 2√5
QR = √[(8-5)² + (1-4)²] = √[9 + 9] = √18 = 3√2

Since opposite sides are congruent:
RS = PQ = 2√5
SP = QR = 3√2

Perimeter = 2(2√5) + 2(3√2) = **4√5 + 6√2**

Or approximately: 4(2.236) + 6(1.414) ≈ 8.944 + 8.484 ≈ **17.43**

### Key Coordinate Proof Strategies

**To prove a parallelogram:**
- Option 1: Both pairs of opposite sides parallel (slopes equal)
- Option 2: Both pairs of opposite sides congruent (distances equal)
- Option 3: Diagonals bisect each other (same midpoint)
- Option 4: One pair opposite sides parallel AND congruent

**To prove a rectangle:**
- Show parallelogram + right angle (perpendicular slopes)
- OR parallelogram + congruent diagonals

**To prove a rhombus:**
- Show parallelogram + all sides congruent
- OR parallelogram + diagonals perpendicular

**To prove a square:**
- Show all sides congruent + right angle
- OR rhombus + rectangle properties

**To prove a trapezoid:**
- Show exactly one pair of parallel sides

**To prove isosceles trapezoid:**
- Show trapezoid + congruent legs

### Key Takeaways

1. **Use slope** to prove parallel or perpendicular
2. **Use distance** to prove sides congruent
3. **Use midpoint** to prove diagonals bisect each other
4. **Strategic placement** simplifies calculations
5. **General proofs** use variables (a, b, c) not numbers
6. Always **verify all conditions** for special quadrilaterals

---

## Day 5: Review and Problem-Solving Strategies

### Week 17 Content Review

**Day 1: Parallelograms**
- Definition: Both pairs of opposite sides parallel
- Properties: Opposite sides ≅, opposite angles ≅, consecutive angles supplementary, diagonals bisect each other
- Five ways to prove a quadrilateral is a parallelogram

**Day 2: Special Parallelograms**
- Rectangle: Parallelogram + 4 right angles → diagonals congruent
- Rhombus: Parallelogram + 4 congruent sides → diagonals perpendicular
- Square: Rectangle + rhombus (all properties)

**Day 3: Trapezoids and Kites**
- Trapezoid: Exactly one pair of parallel sides
- Isosceles trapezoid: Congruent legs → congruent base angles and diagonals
- Trapezoid midsegment: m = (b₁ + b₂)/2
- Kite: Two pairs consecutive congruent sides → diagonals perpendicular

**Day 4: Coordinate Proofs**
- Use slope, distance, midpoint formulas
- Strategic placement on coordinate plane
- Prove special quadrilaterals algebraically

### Quadrilateral Classification Flowchart

**Question 1: How many pairs of parallel sides?**
- 0 pairs → Check for kite (consecutive sides congruent) or general quadrilateral
- 1 pair → **Trapezoid** (check for isosceles)
- 2 pairs → **Parallelogram** (continue to Q2)

**Question 2 (Parallelogram): What about angles?**
- All 90° → **Rectangle** (continue to Q3 for square)
- Not all 90° → Check sides (Q4)

**Question 3 (Rectangle): All sides congruent?**
- Yes → **Square**
- No → **Rectangle only**

**Question 4 (Parallelogram): All sides congruent?**
- Yes → **Rhombus** (if also has right angles → Square)
- No → **Parallelogram only**

### Properties Quick Reference Table

| Quadrilateral | Opposite Sides ∥ | Opposite Sides ≅ | All Sides ≅ | All Angles 90° | Diagonals ≅ | Diagonals ⊥ | Diagonals Bisect Each Other |
|--------------|-----------------|-----------------|-------------|---------------|-------------|-------------|---------------------------|
| Parallelogram | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Rectangle | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✓ |
| Rhombus | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ |
| Square | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Trapezoid | 1 pair | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Isos. Trap. | 1 pair | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| Kite | ✗ | ✗ | 2 pairs consec. | ✗ | ✗ | ✓ | 1 bisects other |

### Problem-Solving Strategies

**Strategy 1: Identifying Quadrilateral Type**

Steps:
1. Check for parallel sides (use slopes in coordinate geometry)
2. Count how many pairs are parallel
3. Check additional properties (sides, angles, diagonals)
4. Classify as specifically as possible

**Strategy 2: Finding Missing Measures**

Angle problems:
- Use: Sum of angles = 360°
- Parallelogram: Opposite angles ≅, consecutive angles supplementary
- Rectangle/Square: All angles = 90°
- Trapezoid: Consecutive angles on same leg are supplementary

Side problems:
- Use properties of congruent sides
- Set up equations if variables are involved
- Remember: opposite sides ≅ in parallelograms

Diagonal problems:
- Parallelogram: Diagonals bisect each other
- Rectangle: Diagonals congruent AND bisect each other
- Rhombus: Diagonals perpendicular AND bisect each other
- Square: Diagonals congruent, perpendicular, bisect each other

**Strategy 3: Proof Problems**

For two-column proofs:
1. Start with given information
2. Use definitions to establish basic properties
3. Prove triangles congruent if needed
4. Use CPCTC to conclude about parts
5. State the final conclusion

For coordinate proofs:
1. Calculate what you need (slopes, distances, midpoints)
2. Show algebraically that properties hold
3. State conclusion clearly

**Strategy 4: Coordinate Geometry**

To prove parallelogram:
- Easiest: Show opposite sides parallel (2 slope calculations)
- Or: Show opposite sides congruent (4 distance calculations)
- Or: Show diagonals bisect (2 midpoint calculations)

To prove rectangle:
- First prove parallelogram
- Then show right angle (perpendicular slopes) or congruent diagonals

To prove rhombus:
- First prove parallelogram
- Then show all sides congruent (4 distance calculations)

To prove square:
- Show all sides congruent AND right angle
- Or show both rectangle and rhombus properties

### Common Mistakes to Avoid

**Mistake 1: Assuming without proof**
- ❌ Assuming a quadrilateral is a parallelogram without checking
- ✓ Always verify all required properties

**Mistake 2: Confusing trapezoid definition**
- ❌ Thinking parallelograms are trapezoids (depends on definition)
- ✓ Use "exactly one pair" for trapezoids

**Mistake 3: Wrong angle relationships**
- ❌ Using ∠A + ∠B = 180° for opposite angles in parallelogram
- ✓ Consecutive angles (adjacent) are supplementary, not opposite

**Mistake 4: Diagonal properties**
- ❌ Thinking all parallelograms have congruent diagonals
- ✓ Only rectangles (and squares) have congruent diagonals

**Mistake 5: Coordinate proof errors**
- ❌ Not simplifying slopes: writing (2-0)/(4-0) instead of 1/2
- ✓ Always simplify to compare slopes easily

**Mistake 6: Perimeter with variables**
- ❌ Forgetting to double opposite sides
- ✓ For parallelogram: P = 2a + 2b (not a + b)

### Formula Summary Sheet

**Angle Sum:**
- Any quadrilateral: **360°**

**Parallelogram Relationships:**
- Opposite angles: **∠A ≅ ∠C, ∠B ≅ ∠D**
- Consecutive angles: **∠A + ∠B = 180°**
- Perimeter: **P = 2a + 2b**

**Special Parallelograms:**
- Rectangle: All angles = **90°**, diagonals **congruent**
- Rhombus: All sides ≅, diagonals **perpendicular**
- Square: All sides ≅, all angles = **90°**

**Trapezoid:**
- Midsegment: **m = (b₁ + b₂)/2**
- Area: **A = ½h(b₁ + b₂)**

**Rhombus/Kite:**
- Area: **A = ½d₁d₂**

**Square:**
- If side = s, diagonal = **s√2**
- Perimeter: **P = 4s**
- Area: **A = s²**

**Coordinate Formulas:**
- Distance: **d = √[(x₂-x₁)² + (y₂-y₁)²]**
- Midpoint: **M = ((x₁+x₂)/2, (y₁+y₂)/2)**
- Slope: **m = (y₂-y₁)/(x₂-x₁)**
- Parallel lines: **m₁ = m₂**
- Perpendicular lines: **m₁ · m₂ = -1**

### Multi-Step Problem Example

**Example: Comprehensive problem**

Given: Quadrilateral ABCD with A(0, 0), B(5, 0), C(5, 5), D(0, 5)

Find:
a) Classify the quadrilateral (be as specific as possible)
b) Find the perimeter
c) Find the area
d) Find the length of each diagonal
e) Find the coordinates where the diagonals intersect

*Solution:*

**a) Classify:**
All sides: AB = 5, BC = 5, CD = 5, DA = 5 (all congruent)
All angles: Slope AB = 0, slope BC = undefined → ∠B = 90°
Since all sides ≅ and has right angle → **Square** ✓

**b) Perimeter:**
P = 4s = 4(5) = **20** ✓

**c) Area:**
A = s² = 5² = **25** ✓

**d) Diagonals:**
AC = √[(5-0)² + (5-0)²] = √50 = **5√2**
BD = √[(0-5)² + (5-0)²] = √50 = **5√2**
(Equal, as expected for a square) ✓

**e) Intersection point:**
Midpoint of AC = ((0+5)/2, (0+5)/2) = **(2.5, 2.5)**
Verify with BD: ((5+0)/2, (0+5)/2) = (2.5, 2.5) ✓

### Practice Problem Categories

For the Week 17 test, expect:

**Category 1: Finding measures (angles, sides, diagonals)**
- Use properties of parallelograms, rectangles, rhombi, squares
- Set up equations with variables
- Use 360° angle sum

**Category 2: Classification**
- Given coordinates, classify quadrilateral
- Use slope/distance/midpoint formulas
- Be as specific as possible

**Category 3: Proofs**
- Two-column proofs using congruent triangles
- Prove quadrilateral is a special type
- Use CPCTC

**Category 4: Coordinate proofs**
- Prove quadrilateral is parallelogram, rectangle, rhombus, square, trapezoid
- Show work with formulas
- State conclusions clearly

**Category 5: Perimeter and area**
- Calculate using coordinate geometry
- Use appropriate formulas
- Simplify radicals

### Study Tips for Week 17 Test

1. **Make flashcards** for:
   - Properties of each quadrilateral type
   - Formulas (perimeter, area, midsegment)
   - Coordinate formulas

2. **Practice identifying** quadrilaterals from:
   - Verbal descriptions
   - Diagrams
   - Coordinates

3. **Master the formulas:**
   - Distance, slope, midpoint
   - When to use each

4. **Review proofs:**
   - Go through practice proof problems
   - Write them out in full
   - Check your reasoning

5. **Time yourself:**
   - The test is 60-75 minutes
   - Practice working efficiently
   - Don't get stuck on one problem

6. **Check your work:**
   - Verify calculations
   - Make sure answers are reasonable
   - Reread questions to ensure you answered what was asked

### Final Thoughts

**Key Themes of Week 17:**
1. Quadrilaterals form a **hierarchy** (square → rectangle/rhombus → parallelogram)
2. **Properties** determine classification
3. **Coordinate geometry** allows algebraic proofs
4. **Triangle congruence** proves quadrilateral properties
5. **Diagonals** are key to distinguishing special types

**You're ready for the test when you can:**
- Classify any quadrilateral from coordinates
- Find missing measures using properties
- Write two-column proofs confidently
- Use coordinate formulas fluently
- Explain why properties work

**You're now 62% done with your plan (16 of 26 weeks)! Keep up your excellent 95%+ performance!**

---

## Week 17 Summary

### Quadrilateral Types
1. **Parallelogram:** Both pairs opposite sides parallel
2. **Rectangle:** Parallelogram with 4 right angles
3. **Rhombus:** Parallelogram with 4 congruent sides
4. **Square:** Rectangle + Rhombus
5. **Trapezoid:** Exactly one pair parallel sides
6. **Isosceles Trapezoid:** Trapezoid with congruent legs
7. **Kite:** Two pairs consecutive congruent sides

### Key Properties to Remember
- Parallelogram: Diagonals bisect each other
- Rectangle: Diagonals congruent
- Rhombus: Diagonals perpendicular
- Square: All of the above
- Isosceles trapezoid: Diagonals congruent, base angles congruent
- Kite: Diagonals perpendicular, one bisects the other

### Essential Formulas
- Angle sum: 360°
- Trapezoid midsegment: (b₁ + b₂)/2
- Areas: Trapezoid: ½h(b₁+b₂), Rhombus/Kite: ½d₁d₂
- Coordinate: distance, midpoint, slope

**Good luck on your Week 17 test!**
