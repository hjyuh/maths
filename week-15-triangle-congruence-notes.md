# Week 15: Triangle Properties & Congruence - Part 1

## Overview
**Essential Question:** How do transformations reveal the properties within and between triangles?

**Standards Covered:**
- G.CO.4: Congruence via rigid motions
- G.CO.6: Triangle congruence using rigid motions (+)
- G.CO.8: Triangle angle theorems
- G.CO.9: Triangle congruence theorems (SSS, SAS, ASA, AAS, HL)

---

## Day 1: Triangle Congruence Definition & CPCTC

### Definition of Congruent Triangles
**Congruent triangles** are triangles that have exactly the same size and shape. More formally:

**Definition:** Two triangles are congruent if and only if there exists a sequence of rigid motions (translations, rotations, reflections) that maps one triangle exactly onto the other.

**Key Standard (G.CO.4):** Use the definition of congruence in terms of rigid motions to show that two triangles are congruent if and only if corresponding pairs of sides and corresponding pairs of angles are congruent.

### Properties of Congruent Triangles
If △ABC ≅ △DEF, then:
- All corresponding angles are congruent: ∠A ≅ ∠D, ∠B ≅ ∠E, ∠C ≅ ∠F
- All corresponding sides are congruent: AB ≅ DE, BC ≅ EF, AC ≅ DF

### Rigid Motions and Congruence
**Rigid motions** (also called **isometries**) preserve:
1. Distance (side lengths remain unchanged)
2. Angle measures
3. Collinearity of points
4. Orientation (unless reflection is used)

The three types of rigid motions are:
- **Translation:** Slides every point the same distance in the same direction
- **Rotation:** Turns the figure around a fixed point
- **Reflection:** Flips the figure across a line

**Why this matters:** If you can map one triangle onto another using only rigid motions, the triangles are congruent. This is the fundamental definition of congruence.

### CPCTC (Corresponding Parts of Congruent Triangles are Congruent)

**CPCTC Theorem:** If two triangles are congruent, then each pair of corresponding parts (sides and angles) is congruent.

**How to use CPCTC:**
1. First, prove that two triangles are congruent (using one of the congruence theorems)
2. Then, conclude that specific corresponding parts are congruent

**Example:**
Given: △ABC ≅ △XYZ
Prove: ∠B ≅ ∠Y

*Proof:*
1. △ABC ≅ △XYZ (Given)
2. ∠B ≅ ∠Y (CPCTC)

### Naming Congruent Triangles
**Order matters!** When writing △ABC ≅ △DEF, the order tells you the correspondence:
- A ↔ D (first vertices correspond)
- B ↔ E (second vertices correspond)
- C ↔ F (third vertices correspond)

### Practice Considerations
When working with congruence:
1. Identify the rigid motion(s) that map one triangle to another
2. Determine which vertices, sides, and angles correspond
3. Use proper notation (≅ for congruence, not =)
4. Remember: showing triangles are congruent requires proving ALL corresponding parts are congruent OR using a congruence shortcut (coming in Days 2-3)

---

## Day 2: SSS and SAS Congruence Theorems

### Why Congruence Shortcuts Matter
In Day 1, we learned that triangles are congruent if all 6 pairs of corresponding parts are congruent (3 sides and 3 angles). However, checking all 6 is inefficient. The congruence theorems tell us the **minimum information** needed to guarantee congruence.

### SSS (Side-Side-Side) Congruence Theorem

**Theorem:** If three sides of one triangle are congruent to three sides of another triangle, then the triangles are congruent.

**Symbolic Form:**
If AB ≅ DE, BC ≅ EF, and AC ≅ DF, then △ABC ≅ △DEF

**Why it works:** Given three specific side lengths, only one triangle shape is possible. You cannot create two different triangles with the same three side lengths.

**Connection to Rigid Motions (G.CO.6):**
If the three sides match, you can use a sequence of rigid motions (translation, rotation, and possibly reflection) to map one triangle exactly onto the other.

**When to use SSS:**
- When you know all three sides of both triangles
- When sides are shared between triangles
- In coordinate geometry, when you can calculate all three side lengths using the distance formula

**Example Application:**
Given: AB = 5, BC = 7, AC = 9 and DE = 5, EF = 7, DF = 9
Conclusion: △ABC ≅ △DEF by SSS

### SAS (Side-Angle-Side) Congruence Theorem

**Theorem:** If two sides and the included angle of one triangle are congruent to two sides and the included angle of another triangle, then the triangles are congruent.

**Important:** The angle MUST be between the two sides (included angle).

**Symbolic Form:**
If AB ≅ DE, ∠A ≅ ∠D, and AC ≅ DF, then △ABC ≅ △DEF

**Why it works:** Two sides and the angle between them lock the triangle into a specific shape. The third side is forced to be a particular length.

**Connection to Rigid Motions:**
The two sides and included angle uniquely determine the triangle's shape and size, allowing it to be mapped onto another triangle with the same measurements.

**When to use SAS:**
- When you know two sides and the angle between them
- In proofs involving angle bisectors (which create congruent angles)
- In coordinate geometry when you can find two side lengths and the angle between them

**Common Mistake - "SSA" or "ASS":**
Two sides and a NON-included angle DO NOT guarantee congruence! This creates an ambiguous case (except in the special case of HL for right triangles - see Day 3).

**Example:**
Given: AB ≅ XY, ∠B ≅ ∠Y, BC ≅ YZ
Can we conclude △ABC ≅ △XYZ?

*Answer:* Yes, by SAS, because ∠B is between sides AB and BC, and ∠Y is between sides XY and YZ.

### Proving Triangles Congruent: Strategy

**Steps:**
1. **Mark the diagram** with all given information
2. **Identify shared sides or angles** (reflexive property: any segment or angle is congruent to itself)
3. **Look for vertical angles** (always congruent)
4. **Determine which congruence theorem applies** (SSS or SAS)
5. **Write the congruence statement** with vertices in correct order
6. **State the reason** (SSS or SAS)

**Two-Column Proof Format:**
| Statement | Reason |
|-----------|--------|
| Given information | Given |
| Additional congruencies | Definitions, properties, or theorems |
| △ABC ≅ △DEF | SSS or SAS |
| Conclusion using CPCTC | CPCTC |

### Reflexive, Symmetric, and Transitive Properties

These properties apply to congruence:

**Reflexive Property:** Any figure is congruent to itself
- AB ≅ AB, ∠A ≅ ∠A, △ABC ≅ △ABC

**Symmetric Property:** If one figure is congruent to another, then the second is congruent to the first
- If △ABC ≅ △DEF, then △DEF ≅ △ABC

**Transitive Property:** If one figure is congruent to a second, and the second is congruent to a third, then the first is congruent to the third
- If △ABC ≅ △DEF and △DEF ≅ △GHI, then △ABC ≅ △GHI

---

## Day 3: ASA, AAS, and HL Congruence Theorems

### ASA (Angle-Side-Angle) Congruence Theorem

**Theorem:** If two angles and the included side of one triangle are congruent to two angles and the included side of another triangle, then the triangles are congruent.

**Symbolic Form:**
If ∠A ≅ ∠D, AB ≅ DE, and ∠B ≅ ∠E, then △ABC ≅ △DEF

**Why it works:** Two angles determine the shape of the triangle (remember: third angle is determined by 180° - angle sum). The included side determines the size/scale.

**When to use ASA:**
- When you know two angles and the side between them
- When parallel lines create congruent corresponding or alternate interior angles
- In proofs involving perpendicular lines (which create right angles)

**Example:**
Given: ∠A ≅ ∠X, AC ≅ XZ, ∠C ≅ ∠Z
Conclusion: △ABC ≅ △XYZ by ASA

### AAS (Angle-Angle-Side) Congruence Theorem

**Theorem:** If two angles and a non-included side of one triangle are congruent to two angles and the corresponding non-included side of another triangle, then the triangles are congruent.

**Symbolic Form:**
If ∠A ≅ ∠D, ∠B ≅ ∠E, and BC ≅ EF, then △ABC ≅ △DEF

**Why it works:** Two angles determine the triangle's shape. Once shape is known, one side length determines the scale. The third angle is automatically congruent by the Triangle Angle Sum Theorem.

**AAS vs ASA:**
- ASA: The side is BETWEEN the two angles
- AAS: The side is NOT between the two angles

**When to use AAS:**
- When you know two angles and a side that is NOT between them
- Often useful when one side is shared or opposite to one of the angles

**Important Note:** Since knowing two angles of a triangle automatically determines the third angle (by 180° - sum of known angles), AAS is essentially equivalent to ASA in terms of the information it provides.

**Example:**
Given: ∠A ≅ ∠D, ∠C ≅ ∠F, BC ≅ EF
Conclusion: △ABC ≅ △DEF by AAS (side BC is not between angles A and C)

### HL (Hypotenuse-Leg) Congruence Theorem

**Special theorem for RIGHT triangles ONLY**

**Theorem:** If the hypotenuse and a leg of one right triangle are congruent to the hypotenuse and a leg of another right triangle, then the triangles are congruent.

**Symbolic Form:**
Given: △ABC and △DEF are right triangles with right angles at C and F
If AB ≅ DE (hypotenuses) and AC ≅ DF (legs), then △ABC ≅ △DEF

**Why it works:** By the Pythagorean Theorem, if the hypotenuse and one leg are known, the other leg is uniquely determined: leg² = hypotenuse² - other leg²

**Requirements for HL:**
1. Both triangles MUST be right triangles
2. You must know the hypotenuses are congruent
3. You must know one pair of legs are congruent

**When to use HL:**
- Right triangles with congruent hypotenuses and one leg
- Proofs involving perpendicular lines or altitude of triangles
- Coordinate geometry with right triangles

**Why HL resolves the "SSA" ambiguity:**
In a right triangle, if you know the hypotenuse (the side opposite the right angle) and one leg, there's no ambiguity—only one triangle is possible. The right angle "locks in" the configuration.

### Summary: All Five Congruence Theorems

| Theorem | What You Need | Special Notes |
|---------|--------------|---------------|
| **SSS** | 3 sides | Most straightforward |
| **SAS** | 2 sides + included angle | Angle must be BETWEEN the sides |
| **ASA** | 2 angles + included side | Side must be BETWEEN the angles |
| **AAS** | 2 angles + non-included side | Side NOT between the angles |
| **HL** | Hypotenuse + leg | RIGHT TRIANGLES ONLY |

### What DOESN'T Work: AAA and SSA

**AAA (Angle-Angle-Angle):** Three congruent angles only prove SIMILARITY, not congruence. Triangles can have the same angles but different sizes.

**SSA or ASS (Side-Side-Angle):** Two sides and a non-included angle create an ambiguous case—two different triangles are possible (except for HL in right triangles).

### Choosing the Right Theorem

**Strategy:**
1. Mark all given information on the diagram
2. Look for shared sides (reflexive property)
3. Look for vertical angles
4. Count what you have: sides and angles
5. Check if angles are included or non-included
6. Check if triangles are right triangles (for HL)
7. Select the appropriate theorem

---

## Day 4: Interior Angles & Exterior Angle Theorem

### Triangle Angle Sum Theorem

**Theorem:** The sum of the measures of the interior angles of a triangle is 180°.

**Symbolic Form:**
In △ABC: m∠A + m∠B + m∠C = 180°

**Why it works (using parallel lines):**
1. Draw a line through one vertex parallel to the opposite side
2. Use alternate interior angles to show that the three angles of the triangle can be rearranged to form a straight line
3. A straight line measures 180°

**Connection to Rigid Motions:**
By reflecting or rotating angles, we can demonstrate that the three interior angles fit together to form a straight angle.

### Applications of Triangle Angle Sum Theorem

**Finding missing angles:**
If you know two angles of a triangle, you can always find the third:
- Third angle = 180° - (angle 1 + angle 2)

**Example:**
If m∠A = 50° and m∠B = 70°, then m∠C = 180° - (50° + 70°) = 60°

**Solving for variables:**
Given: In △ABC, m∠A = x, m∠B = 2x, m∠C = 3x
Find: The measure of each angle

*Solution:*
x + 2x + 3x = 180°
6x = 180°
x = 30°

Therefore: m∠A = 30°, m∠B = 60°, m∠C = 90°

### Exterior Angles of a Triangle

**Definition:** An **exterior angle** of a triangle is an angle formed by one side of the triangle and the extension of an adjacent side.

**Key points:**
- An exterior angle is ADJACENT to an interior angle (they form a linear pair)
- Each vertex of a triangle can form two exterior angles (one on each side)
- Exterior angles at the same vertex are congruent (vertical angles)

**Remote Interior Angles:**
For any exterior angle, the two interior angles that are NOT adjacent to it are called **remote interior angles**.

**Example:**
In △ABC, if you extend side BC beyond C to point D, then ∠ACD is an exterior angle.
The remote interior angles are ∠A and ∠B.

### Exterior Angle Theorem

**Theorem:** The measure of an exterior angle of a triangle is equal to the sum of the measures of the two remote interior angles.

**Symbolic Form:**
If ∠ACD is an exterior angle of △ABC, then:
m∠ACD = m∠A + m∠B

**Why it works:**
1. ∠ACB + ∠ACD = 180° (linear pair)
2. ∠A + ∠B + ∠ACB = 180° (Triangle Angle Sum Theorem)
3. Therefore: ∠ACB + ∠ACD = ∠A + ∠B + ∠ACB
4. Subtract ∠ACB from both sides: ∠ACD = ∠A + ∠B

**Corollary:** An exterior angle of a triangle is GREATER than either remote interior angle.

### Applications of Exterior Angle Theorem

**Finding missing angles:**
If you know the two remote interior angles, you can find the exterior angle (or vice versa).

**Example 1:**
In △ABC, m∠A = 40° and m∠B = 75°. Find the measure of the exterior angle at C.

*Solution:*
Exterior angle at C = m∠A + m∠B = 40° + 75° = 115°

**Example 2:**
The exterior angle at vertex C measures 130°. If m∠A = 50°, find m∠B.

*Solution:*
130° = 50° + m∠B
m∠B = 80°

### Using Both Theorems Together

**Strategy for complex problems:**
1. Use Triangle Angle Sum for interior angles: sum = 180°
2. Use Linear Pair for interior/exterior at same vertex: sum = 180°
3. Use Exterior Angle Theorem: exterior = sum of remote interior angles

**Example:**
In △ABC, m∠A = 3x, m∠B = 2x, and the exterior angle at C is 125°. Find x and all angle measures.

*Solution:*
Exterior angle at C = m∠A + m∠B (Exterior Angle Theorem)
125° = 3x + 2x
125° = 5x
x = 25°

Therefore:
- m∠A = 3(25°) = 75°
- m∠B = 2(25°) = 50°
- m∠C = 180° - 125° = 55° (or use Triangle Angle Sum: 180° - 75° - 50° = 55°)

### Proofs Using Angle Theorems

**Common proof structure:**
| Statement | Reason |
|-----------|--------|
| m∠A + m∠B + m∠C = 180° | Triangle Angle Sum Theorem |
| m∠exterior = m∠remote₁ + m∠remote₂ | Exterior Angle Theorem |
| ∠1 and ∠2 form a linear pair | Definition of linear pair |
| ∠1 + ∠2 = 180° | Linear Pair Postulate |

---

## Day 5: Isosceles & Equilateral Triangles + Review

### Isosceles Triangles - Definition and Parts

**Definition:** An **isosceles triangle** is a triangle with at least two congruent sides.

**Special parts of an isosceles triangle:**
- **Legs:** The two congruent sides
- **Base:** The third side (may or may not be congruent to the legs)
- **Vertex angle:** The angle formed by the two legs
- **Base angles:** The two angles adjacent to the base

**Important:** In an isosceles triangle, the base angles are opposite the legs.

### Isosceles Triangle Theorem (Base Angles Theorem)

**Theorem:** If two sides of a triangle are congruent, then the angles opposite those sides are congruent.

**Symbolic Form:**
If AB ≅ AC, then ∠B ≅ ∠C

**Why it works (using rigid motions and G.CO.8):**
If you reflect the isosceles triangle over the perpendicular bisector of the base, the triangle maps onto itself. This shows that the base angles must be congruent.

**Application:**
If you know a triangle has two congruent sides, you automatically know two angles are congruent.

### Converse of Isosceles Triangle Theorem

**Theorem:** If two angles of a triangle are congruent, then the sides opposite those angles are congruent.

**Symbolic Form:**
If ∠B ≅ ∠C, then AB ≅ AC

**Application:**
If you know a triangle has two congruent angles, you automatically know it's isosceles (two sides are congruent).

### Corollary: Equilateral Triangles are Equiangular

**Definition:** An **equilateral triangle** is a triangle with all three sides congruent.

**Theorem:** If a triangle is equilateral, then it is equiangular (all angles are congruent).

**Proof:**
1. If AB ≅ BC ≅ AC, then ∠A ≅ ∠B (base angles of isosceles △ABC with legs AB and BC)
2. Also ∠B ≅ ∠C (base angles of isosceles △ABC with legs AB and AC)
3. By transitivity: ∠A ≅ ∠B ≅ ∠C

**Important result:** Each angle of an equilateral triangle measures 60°.
- Let each angle = x
- 3x = 180° (Triangle Angle Sum Theorem)
- x = 60°

### Corollary: Equiangular Triangles are Equilateral

**Theorem:** If a triangle is equiangular (all angles congruent), then it is equilateral (all sides congruent).

**Proof:**
1. If ∠A ≅ ∠B ≅ ∠C, then AB ≅ AC (converse of isosceles triangle theorem)
2. Also BC ≅ AC (converse of isosceles triangle theorem)
3. By transitivity: AB ≅ BC ≅ AC

### Problem-Solving with Isosceles Triangles

**Type 1: Finding missing angles**

Example: In isosceles △ABC with AB ≅ AC, if the vertex angle ∠A = 40°, find the base angles.

*Solution:*
Let each base angle = x
40° + x + x = 180° (Triangle Angle Sum Theorem)
40° + 2x = 180°
2x = 140°
x = 70°

Each base angle measures 70°.

**Type 2: Finding missing sides**

Example: In isosceles △ABC with AB ≅ AC, if AB = 2x + 3 and AC = 3x - 5, find x and the length of the legs.

*Solution:*
2x + 3 = 3x - 5 (legs are congruent)
8 = x

Therefore: AB = AC = 2(8) + 3 = 19

**Type 3: Identifying triangle type**

Example: In △ABC, m∠A = 70°, m∠B = 70°. What type of triangle is △ABC?

*Solution:*
- m∠C = 180° - 70° - 70° = 40°
- Since ∠A ≅ ∠B, then BC ≅ AC (converse of isosceles triangle theorem)
- △ABC is isosceles

### Using Isosceles Triangles in Proofs

**Common proof patterns:**

**Pattern 1: Proving sides congruent**
1. Show two angles are congruent
2. Conclude opposite sides are congruent (converse of isosceles triangle theorem)

**Pattern 2: Proving angles congruent**
1. Show two sides are congruent
2. Conclude opposite angles are congruent (isosceles triangle theorem)

**Pattern 3: Using auxiliary lines**
- Drawing the altitude from the vertex angle to the base creates two congruent right triangles
- This altitude is also the perpendicular bisector of the base and the angle bisector of the vertex angle

### Coordinate Geometry with Isosceles/Equilateral Triangles

**Using distance formula to classify triangles:**

**Steps:**
1. Find the length of all three sides using distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]
2. Compare the lengths:
   - All three equal → equilateral
   - Exactly two equal → isosceles
   - None equal → scalene

**Example:**
Given: A(0, 0), B(4, 0), C(2, 3). Classify △ABC.

*Solution:*
- AB = √[(4-0)² + (0-0)²] = 4
- BC = √[(2-4)² + (3-0)²] = √(4 + 9) = √13
- AC = √[(2-0)² + (3-0)²] = √(4 + 9) = √13

Since BC = AC, △ABC is isosceles.

---

## Week 15 Review Summary

### Key Definitions
- **Congruent triangles:** Triangles that can be mapped onto each other using rigid motions
- **CPCTC:** Corresponding Parts of Congruent Triangles are Congruent
- **Isosceles triangle:** Triangle with at least two congruent sides
- **Equilateral triangle:** Triangle with all three sides congruent
- **Exterior angle:** Angle formed by one side and the extension of an adjacent side

### Five Triangle Congruence Theorems
1. **SSS:** Three sides congruent
2. **SAS:** Two sides and included angle congruent
3. **ASA:** Two angles and included side congruent
4. **AAS:** Two angles and non-included side congruent
5. **HL:** Hypotenuse and leg (RIGHT triangles only)

### Triangle Angle Theorems
- **Triangle Angle Sum:** m∠A + m∠B + m∠C = 180°
- **Exterior Angle Theorem:** Exterior angle = sum of remote interior angles
- **Isosceles Triangle Theorem:** Base angles are congruent if legs are congruent
- **Converse:** Legs are congruent if base angles are congruent

### Problem-Solving Strategies
1. **Mark diagrams** with all given information
2. **Look for shared parts** (reflexive property)
3. **Identify vertical angles** (always congruent)
4. **Check for right triangles** (consider HL)
5. **Determine which theorem applies**
6. **Write congruence statements carefully** (order matters!)
7. **Use CPCTC** to conclude about specific parts

### Common Mistakes to Avoid
- Don't use SSA/ASS (except HL for right triangles)
- Don't forget that AAA only proves similarity, not congruence
- Don't mix up included vs. non-included angles
- Don't forget to check that triangles are right triangles before using HL
- Don't forget that the sum of angles in a triangle is always 180°

---

## Formula Reference Sheet - Week 15

### Congruence Notation
- △ABC ≅ △DEF means triangles ABC and DEF are congruent
- Order of vertices shows correspondence

### Triangle Angle Relationships
- **Angle Sum:** m∠A + m∠B + m∠C = 180°
- **Exterior Angle:** m∠exterior = m∠remote₁ + m∠remote₂
- **Linear Pair:** m∠interior + m∠exterior = 180°

### Isosceles Triangles
- If AB ≅ AC, then ∠B ≅ ∠C (base angles)
- If ∠B ≅ ∠C, then AB ≅ AC (converse)

### Equilateral Triangles
- All sides congruent → all angles congruent (each = 60°)
- All angles congruent → all sides congruent

### Distance Formula (for coordinate geometry)
- d = √[(x₂ - x₁)² + (y₂ - y₁)²]

### Triangle Classification by Sides
- **Scalene:** No sides congruent
- **Isosceles:** At least two sides congruent
- **Equilateral:** All three sides congruent

### Triangle Classification by Angles
- **Acute:** All angles < 90°
- **Right:** One angle = 90°
- **Obtuse:** One angle > 90°
- **Equiangular:** All angles congruent (each = 60°)

---

**Good luck with Week 15! Remember: consistency and precision are key to mastering triangle congruence.**
