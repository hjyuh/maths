# Week 19: Right Triangles & Trigonometry

## Essential Question
**What relationships exist within right triangles?**

## Learning Objectives
By the end of this week, students will be able to:
- Define and apply the three trigonometric ratios (sine, cosine, tangent)
- Use trigonometric ratios to find missing sides in right triangles
- Use inverse trigonometric functions to find missing angles
- Solve special right triangles (30-60-90 and 45-45-90)
- Apply the relationship between sine and cosine of complementary angles
- Solve real-world problems using trigonometry
- Understand basic applications of Law of Sines and Cosines

---

## Part 1: Introduction to Trigonometry

### What is Trigonometry?
**Trigonometry** is the study of relationships between angles and sides of triangles, particularly right triangles.

The word comes from Greek:
- **trigonon** = triangle
- **metron** = measure

### Why Trigonometry Works: The Connection to Similarity
In Week 18, we learned that all triangles with the same angle measures are similar. This means:

**Key Insight**: If two right triangles have the same acute angle, they are similar, and the ratios of their corresponding sides are equal.

This is why trigonometric ratios are consistent for a given angle!

### The Standard Right Triangle Setup
```
      C
      |\
      | \
      |  \
    a |   \ c (hypotenuse)
      |    \
      |     \
      |______\
      A   b   B
```

For angle A:
- **Opposite side**: The side across from angle A (side a)
- **Adjacent side**: The side next to angle A (side b)
- **Hypotenuse**: The longest side, opposite the right angle (side c)

**Important**: Which side is opposite and which is adjacent changes depending on which angle you're considering!

---

## Part 2: The Three Basic Trigonometric Ratios

### Definition (G.SRT.7)
The trigonometric ratios are defined as ratios of sides in a right triangle:

### **SINE (sin)**
$$\sin(\theta) = \frac{\text{opposite}}{\text{hypotenuse}}$$

### **COSINE (cos)**
$$\cos(\theta) = \frac{\text{adjacent}}{\text{hypotenuse}}$$

### **TANGENT (tan)**
$$\tan(\theta) = \frac{\text{opposite}}{\text{adjacent}}$$

### Memory Device: SOH-CAH-TOA
- **SOH**: Sine = Opposite / Hypotenuse
- **CAH**: Cosine = Adjacent / Hypotenuse
- **TOA**: Tangent = Opposite / Adjacent

### Example 1: Finding Trig Ratios
In a right triangle, the sides are 3, 4, and 5 (with 5 being the hypotenuse). Find all six trig ratios.

```
      C
      |\
    3 | \ 5
      |  \
      |___\
      A  4  B
```

**For angle A:**
- sin(A) = opposite/hypotenuse = 3/5
- cos(A) = adjacent/hypotenuse = 4/5
- tan(A) = opposite/adjacent = 3/4

**For angle B:**
- sin(B) = opposite/hypotenuse = 4/5
- cos(B) = adjacent/hypotenuse = 3/5
- tan(B) = opposite/adjacent = 4/3

**Notice**: sin(A) = cos(B) and cos(A) = sin(B). We'll explore this pattern later!

---

## Part 3: Special Right Triangles (G.SRT.7)

### The 45-45-90 Triangle
In a 45-45-90 triangle:
- The legs are congruent
- If each leg has length x, the hypotenuse has length x√2

```
      C
      |\
      | \
    x |  \ x√2
      |   \
      |45°_\
      A  x  B
```

**Exact Trigonometric Ratios for 45°:**
- sin(45°) = x/(x√2) = 1/√2 = √2/2
- cos(45°) = x/(x√2) = 1/√2 = √2/2
- tan(45°) = x/x = 1

### The 30-60-90 Triangle
In a 30-60-90 triangle:
- The side opposite 30° has length x
- The side opposite 60° has length x√3
- The hypotenuse has length 2x

```
       C
       |\
       | \
    x√3|  \ 2x
       |   \
       | 30°\
       A__x__B
      60°
```

**Exact Trigonometric Ratios for 30°:**
- sin(30°) = x/(2x) = 1/2
- cos(30°) = x√3/(2x) = √3/2
- tan(30°) = x/(x√3) = 1/√3 = √3/3

**Exact Trigonometric Ratios for 60°:**
- sin(60°) = x√3/(2x) = √3/2
- cos(60°) = x/(2x) = 1/2
- tan(60°) = x√3/x = √3

### Special Angle Summary Table
| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| 30° | 1/2 | √3/2 | √3/3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |

**Memorization Tip**:
- For sin: 1/2, √2/2, √3/2 (think: √1/2, √2/2, √3/2)
- For cos: reverse the pattern
- For tan: √3/3, 1, √3

### Example 2: Using Special Triangles
Find the exact value of all sides in a 30-60-90 triangle if the hypotenuse is 12.

**Solution:**
If hypotenuse = 2x = 12, then x = 6
- Side opposite 30° = x = 6
- Side opposite 60° = x√3 = 6√3
- Hypotenuse = 12

### Example 3: Using Special Triangles
In a 45-45-90 triangle, one leg is 8. Find the other leg and the hypotenuse.

**Solution:**
- Other leg = 8 (legs are congruent)
- Hypotenuse = 8√2

---

## Part 4: Using Trigonometry to Find Missing Sides (G.SRT.9)

### Strategy
1. Identify the given angle and the two relevant sides
2. Determine which sides you have/need (opposite, adjacent, hypotenuse)
3. Choose the appropriate trig ratio
4. Set up and solve the equation

### Example 4: Finding the Opposite Side
In a right triangle, angle A = 35° and the hypotenuse is 20. Find the side opposite to angle A.

**Solution:**
- Given: angle = 35°, hypotenuse = 20
- Need: opposite
- Use: sin(35°) = opposite/20
- opposite = 20 · sin(35°)
- opposite ≈ 20 · 0.5736
- **opposite ≈ 11.47**

### Example 5: Finding the Adjacent Side
In a right triangle, angle B = 52° and the opposite side is 15. Find the adjacent side.

**Solution:**
- Given: angle = 52°, opposite = 15
- Need: adjacent
- Use: tan(52°) = 15/adjacent
- adjacent = 15/tan(52°)
- adjacent ≈ 15/1.2799
- **adjacent ≈ 11.72**

### Example 6: Finding the Hypotenuse
In a right triangle, angle A = 28° and the adjacent side is 40. Find the hypotenuse.

**Solution:**
- Given: angle = 28°, adjacent = 40
- Need: hypotenuse
- Use: cos(28°) = 40/hypotenuse
- hypotenuse = 40/cos(28°)
- hypotenuse ≈ 40/0.8829
- **hypotenuse ≈ 45.31**

### Problem-Solving Tip
When dividing by a trig ratio, you can also multiply by the reciprocal:
- Instead of x/sin(θ), use x · csc(θ)
- Instead of x/cos(θ), use x · sec(θ)
- Instead of x/tan(θ), use x · cot(θ)

However, most calculators don't have these functions, so division is typically easier.

---

## Part 5: Using Trigonometry to Find Missing Angles

### Inverse Trigonometric Functions
To find an angle when you know the ratio, use the inverse functions:
- **sin⁻¹** (or arcsin): "inverse sine"
- **cos⁻¹** (or arccos): "inverse cosine"
- **tan⁻¹** (or arctan): "inverse tangent"

**Calculator Note**: Make sure your calculator is in DEGREE mode!

### Example 7: Using Inverse Sine
In a right triangle, the opposite side is 7 and the hypotenuse is 12. Find the angle.

**Solution:**
- sin(θ) = 7/12
- θ = sin⁻¹(7/12)
- θ = sin⁻¹(0.5833)
- **θ ≈ 35.7°**

### Example 8: Using Inverse Tangent
In a right triangle, the opposite side is 18 and the adjacent side is 24. Find the angle.

**Solution:**
- tan(θ) = 18/24 = 0.75
- θ = tan⁻¹(0.75)
- **θ ≈ 36.9°**

### Example 9: Finding All Angles
A right triangle has legs of 5 and 12. Find all three angles.

**Solution:**
1. One angle is 90° (right angle)

2. For angle A (opposite the side of length 5):
   - tan(A) = 5/12
   - A = tan⁻¹(5/12)
   - **A ≈ 22.6°**

3. For angle B:
   - B = 90° - 22.6°
   - **B ≈ 67.4°**

**Check**: 22.6° + 67.4° + 90° = 180° ✓

---

## Part 6: Complementary Angle Relationships (G.SRT.8)

### Complementary Angles
Two angles are **complementary** if they sum to 90°.

In a right triangle, the two acute angles are always complementary.

### Cofunction Identities
For complementary angles:
- **sin(θ) = cos(90° - θ)**
- **cos(θ) = sin(90° - θ)**
- **tan(θ) = cot(90° - θ)**

### Why This Works
```
      C
      |\
      | \
    a |  \ c
      |   \
      |θ   \
      A__b__B
     (90°-θ)
```

For angle A (which is θ):
- sin(θ) = a/c

For angle B (which is 90° - θ):
- cos(90° - θ) = a/c

Therefore: **sin(θ) = cos(90° - θ)**

### Example 10: Using Cofunction Identities
Find the value without a calculator:
a) sin(25°) if cos(65°) = 0.4226
b) cos(73°) if sin(17°) = 0.2924

**Solution:**
a) Since 25° + 65° = 90°, they're complementary
   - sin(25°) = cos(65°) = **0.4226**

b) Since 73° + 17° = 90°, they're complementary
   - cos(73°) = sin(17°) = **0.2924**

### Example 11: Simplifying Expressions
Simplify: sin(40°) + cos(50°)

**Solution:**
Since 40° + 50° = 90°:
- cos(50°) = sin(40°)
- sin(40°) + cos(50°) = sin(40°) + sin(40°) = **2sin(40°)**

---

## Part 7: Pythagorean Theorem and Trigonometry (G.SRT.9)

### Review: Pythagorean Theorem
In a right triangle with legs a and b and hypotenuse c:
$$a² + b² = c²$$

### Using Both: The Complete Toolkit
Sometimes you need to combine trig and the Pythagorean Theorem.

### Strategy for Complex Problems
1. Use trig if you have an angle and need a side
2. Use Pythagorean Theorem if you have two sides and need the third
3. Use inverse trig if you have two sides and need an angle

### Example 12: Multi-Step Problem
In a right triangle, angle A = 38° and the adjacent side is 15. Find:
a) The opposite side
b) The hypotenuse
c) Angle B

**Solution:**
a) tan(38°) = opposite/15
   - opposite = 15 · tan(38°)
   - opposite ≈ 15 · 0.7813
   - **opposite ≈ 11.72**

b) Using Pythagorean Theorem:
   - c² = 15² + 11.72²
   - c² = 225 + 137.36
   - c² = 362.36
   - **c ≈ 19.04**

   Or using cosine:
   - cos(38°) = 15/hypotenuse
   - hypotenuse = 15/cos(38°)
   - **hypotenuse ≈ 19.04**

c) B = 90° - 38° = **52°**

### Example 13: Working Backwards
A right triangle has hypotenuse 25 and one leg 20. Find all angles.

**Solution:**
First, find the other leg using Pythagorean Theorem:
- a² + 20² = 25²
- a² = 625 - 400 = 225
- a = 15

Now find the angles:
- sin(A) = 15/25 = 0.6
- A = sin⁻¹(0.6)
- **A ≈ 36.9°**

- B = 90° - 36.9° = **53.1°**

- C = **90°**

---

## Part 8: Angle of Elevation and Depression

### Definitions
**Angle of Elevation**: The angle formed by a horizontal line and the line of sight when looking UP at an object.

**Angle of Depression**: The angle formed by a horizontal line and the line of sight when looking DOWN at an object.

```
Angle of Elevation:
        Object
         /|
        / |
       /  |
      /   |
     / θ  |
    /____|
  Observer  Horizontal

Angle of Depression:
  Observer____Horizontal
     \    θ
      \
       \
        \
         \
          Object
```

### Key Insight
The angle of elevation from point A to point B equals the angle of depression from point B to point A (alternate interior angles with parallel horizontal lines).

### Example 14: Angle of Elevation
A person stands 50 feet from the base of a building and looks up at the top with an angle of elevation of 68°. How tall is the building?

**Solution:**
```
      Top
       /|
      / |
     /  | height
    /68°|
   /    |
  /____ |
 50 ft  Base
```

- tan(68°) = height/50
- height = 50 · tan(68°)
- height ≈ 50 · 2.4751
- **height ≈ 123.76 feet**

### Example 15: Angle of Depression
From the top of a 150-foot lighthouse, a boat is spotted with an angle of depression of 12°. How far is the boat from the base of the lighthouse?

**Solution:**
```
Lighthouse top____
    \           12°
     \
      \
       \
        \
         Boat____distance____Base
```

The angle in the triangle at the boat is 12° (alternate interior angles).

- tan(12°) = 150/distance
- distance = 150/tan(12°)
- distance ≈ 150/0.2126
- **distance ≈ 705.8 feet**

### Example 16: Combined Problem
A surveyor stands 80 meters from a building. The angle of elevation to the top is 55° and the angle of depression to the bottom of the building (it's on lower ground) is 15°. Find the height of the building.

**Solution:**
Height above surveyor: 80 · tan(55°) ≈ 114.3 m
Height below surveyor: 80 · tan(15°) ≈ 21.4 m
Total building height: 114.3 + 21.4 = **135.7 m**

---

## Part 9: Area of Triangles Using Trigonometry (G.SRT.10)

### Formula Derivation
For any triangle with two sides a and b and included angle C:

$$A = \frac{1}{2}ab\sin(C)$$

### Why This Works
If we draw an altitude h from one vertex:
- h = b · sin(C)
- Area = (1/2) · base · height = (1/2) · a · h
- Area = (1/2) · a · b · sin(C)

### Example 17: Finding Area
A triangle has sides of 12 cm and 15 cm with an included angle of 75°. Find the area.

**Solution:**
- A = (1/2) · 12 · 15 · sin(75°)
- A = 90 · sin(75°)
- A ≈ 90 · 0.9659
- **A ≈ 86.93 cm²**

### Example 18: Working Backwards
A triangle has sides 8 and 10, and area 24. Find the included angle.

**Solution:**
- 24 = (1/2) · 8 · 10 · sin(θ)
- 24 = 40 · sin(θ)
- sin(θ) = 24/40 = 0.6
- θ = sin⁻¹(0.6)
- **θ ≈ 36.9°**

---

## Part 10: Introduction to Law of Sines (G.SRT.11)

### The Law of Sines
For any triangle with sides a, b, c opposite angles A, B, C:

$$\frac{a}{\sin(A)} = \frac{b}{\sin(B)} = \frac{c}{\sin(C)}$$

Or equivalently:
$$\frac{\sin(A)}{a} = \frac{\sin(B)}{b} = \frac{\sin(C)}{c}$$

### When to Use Law of Sines
Use when you have:
- Two angles and one side (AAS or ASA)
- Two sides and a non-included angle (SSA - ambiguous case)

### Proof Using Right Triangles (Basic)
In any triangle, draw altitude h:
- h = b · sin(A) = a · sin(B)
- Therefore: b · sin(A) = a · sin(B)
- Dividing both sides: a/sin(A) = b/sin(B)

### Example 19: Using Law of Sines
In △ABC, angle A = 40°, angle B = 65°, and side a = 15. Find side b.

**Solution:**
First find angle C: C = 180° - 40° - 65° = 75°

Using Law of Sines:
- a/sin(A) = b/sin(B)
- 15/sin(40°) = b/sin(65°)
- b = 15 · sin(65°)/sin(40°)
- b ≈ 15 · 0.9063/0.6428
- **b ≈ 21.15**

### Example 20: Finding an Angle
In △ABC, a = 18, b = 22, and angle A = 45°. Find angle B.

**Solution:**
- sin(A)/a = sin(B)/b
- sin(45°)/18 = sin(B)/22
- sin(B) = 22 · sin(45°)/18
- sin(B) ≈ 22 · 0.7071/18
- sin(B) ≈ 0.8642
- **B ≈ 59.8°**

---

## Part 11: Introduction to Law of Cosines (G.SRT.11)

### The Law of Cosines
For any triangle with sides a, b, c opposite angles A, B, C:

$$c² = a² + b² - 2ab\cos(C)$$

Or rearranged to solve for an angle:
$$\cos(C) = \frac{a² + b² - c²}{2ab}$$

### When to Use Law of Cosines
Use when you have:
- Two sides and the included angle (SAS)
- Three sides (SSS)

### Connection to Pythagorean Theorem
When C = 90°, cos(90°) = 0, so:
- c² = a² + b² - 2ab(0)
- c² = a² + b²  ← Pythagorean Theorem!

The Law of Cosines generalizes the Pythagorean Theorem to all triangles.

### Example 21: Using Law of Cosines (SAS)
A triangle has sides a = 8, b = 12, and included angle C = 60°. Find side c.

**Solution:**
- c² = 8² + 12² - 2(8)(12)cos(60°)
- c² = 64 + 144 - 192(0.5)
- c² = 208 - 96
- c² = 112
- **c ≈ 10.58**

### Example 22: Using Law of Cosines (SSS)
A triangle has sides 7, 10, and 13. Find the largest angle.

**Solution:**
The largest angle is opposite the longest side (13).

- cos(C) = (7² + 10² - 13²)/(2 · 7 · 10)
- cos(C) = (49 + 100 - 169)/140
- cos(C) = -20/140
- cos(C) = -0.1429
- C = cos⁻¹(-0.1429)
- **C ≈ 98.2°**

---

## Part 12: Real-World Applications

### Application 1: Navigation
A ship travels 25 miles northeast, then 40 miles northwest. How far is it from its starting point?

**Solution:**
The angle between the paths is 90° (NE to NW).
Using Pythagorean Theorem:
- d² = 25² + 40² = 625 + 1600 = 2225
- **d ≈ 47.2 miles**

### Application 2: Construction
A 20-foot ladder leans against a wall, making a 75° angle with the ground. How high up the wall does the ladder reach?

**Solution:**
- sin(75°) = height/20
- height = 20 · sin(75°)
- **height ≈ 19.32 feet**

### Application 3: Astronomy
The angle of elevation to a star from two observatories 100 km apart (on the same meridian) are 82° and 79°. Estimate the distance to the star.

**Solution:**
This creates a triangle where we can use Law of Sines. The angle at the star is 82° - 79° = 3°.

- distance/sin(3°) = 100/sin(1°)
- This gives a very large distance (as expected for a star!)

### Application 4: Sports
A baseball diamond is a square with 90-foot sides. How far does the catcher throw to second base?

**Solution:**
This forms a 45-45-90 triangle.
- distance = 90√2
- **distance ≈ 127.3 feet**

---

## Part 13: Problem-Solving Strategies

### Step 1: Draw and Label a Diagram
- Always draw a picture
- Label all given information
- Mark the right angle
- Identify what you're looking for

### Step 2: Identify the Triangle Type
- Right triangle? Use SOH-CAH-TOA
- Non-right triangle? Consider Law of Sines or Cosines

### Step 3: Choose Your Tool
For right triangles:
- Have angle + one side, need another side? → Trig ratio
- Have two sides, need third side? → Pythagorean Theorem
- Have two sides, need angle? → Inverse trig

For non-right triangles:
- AAS, ASA? → Law of Sines
- SAS, SSS? → Law of Cosines

### Step 4: Set Up the Equation
- Write the formula
- Substitute known values
- Solve for the unknown

### Step 5: Check Your Answer
- Does it make sense?
- Is it reasonable?
- Do the angles sum to 180°?
- Is the longest side opposite the largest angle?

---

## Part 14: Common Mistakes to Avoid

### Mistake 1: Wrong Calculator Mode
**Problem**: Using radians instead of degrees (or vice versa)
**Solution**: Always check your calculator mode before starting!

### Mistake 2: Opposite vs. Adjacent Confusion
**Problem**: Mixing up which side is opposite or adjacent
**Solution**: Always redraw the triangle and label sides relative to YOUR angle

### Mistake 3: Using the Wrong Ratio
**Problem**: Using sine when you should use cosine
**Solution**: Write out "SOH-CAH-TOA" and identify which two sides you're working with

### Mistake 4: Forgetting to Use Inverse Functions
**Problem**: Finding sin(θ) when you need θ
**Solution**: Remember: if you're solving for an angle, you need sin⁻¹, cos⁻¹, or tan⁻¹

### Mistake 5: Not Simplifying Special Angles
**Problem**: Giving sin(30°) as 0.5 instead of 1/2
**Solution**: Memorize the exact values for 30°, 45°, and 60°

### Mistake 6: Applying Pythagorean Theorem to Non-Right Triangles
**Problem**: Using a² + b² = c² when there's no right angle
**Solution**: For non-right triangles, use Law of Cosines instead

---

## Part 15: Key Formulas Summary

### Trigonometric Ratios
- sin(θ) = opposite/hypotenuse
- cos(θ) = adjacent/hypotenuse
- tan(θ) = opposite/adjacent

### Special Right Triangles
**45-45-90**: sides in ratio 1 : 1 : √2
**30-60-90**: sides in ratio 1 : √3 : 2

### Pythagorean Theorem
- a² + b² = c²

### Cofunction Identities
- sin(θ) = cos(90° - θ)
- cos(θ) = sin(90° - θ)

### Area Formula
- A = (1/2)ab·sin(C)

### Law of Sines
- a/sin(A) = b/sin(B) = c/sin(C)

### Law of Cosines
- c² = a² + b² - 2ab·cos(C)
- cos(C) = (a² + b² - c²)/(2ab)

---

## Practice Problems

### Basic Problems
1. Find sin(θ), cos(θ), and tan(θ) for a right triangle with legs 5 and 12.

2. A right triangle has an angle of 32° and hypotenuse of 15. Find the opposite side.

3. Find the exact value of sin(60°) · cos(30°).

4. In a 45-45-90 triangle with hypotenuse 10, find both legs.

5. If sin(θ) = 0.6, find θ.

### Intermediate Problems
6. A 12-foot ladder makes a 70° angle with the ground. How high up the wall does it reach?

7. Find all angles in a right triangle with legs 8 and 15.

8. Simplify: sin(35°)/cos(55°)

9. The angle of elevation to the top of a tower from a point 100 feet away is 42°. Find the height of the tower.

10. Use Law of Sines: In △ABC, A = 50°, B = 70°, a = 10. Find b.

### Advanced Problems
11. A triangle has sides 9 and 12 with included angle 75°. Find the area.

12. Use Law of Cosines: A triangle has sides 5, 7, and 9. Find the largest angle.

13. A plane flies 200 miles east, then 150 miles at a bearing of 60° (northeast). How far is it from the starting point?

14. Prove that in any right triangle, sin²(θ) + cos²(θ) = 1.

15. A surveyor stands at point C, 50 meters from building A and 80 meters from building B. The angle ACB is 110°. How far apart are the two buildings?

---

## Connections to Other Topics

### Algebra
- Solving equations
- Working with radicals
- Rational expressions

### Previous Geometry
- Pythagorean Theorem
- Similar triangles
- Special right triangles

### Future Topics
- Unit circle and circular functions
- Trigonometric identities
- Graphing trig functions
- Calculus applications

### Real World
- Architecture and construction
- Navigation and surveying
- Physics and engineering
- Astronomy

---

## Reflective Questions

1. How does similarity relate to why trigonometric ratios are constant for a given angle?

2. Why do sine and cosine of complementary angles have a special relationship?

3. When would you choose Law of Sines versus Law of Cosines?

4. How is the Pythagorean Theorem a special case of the Law of Cosines?

5. What real-world professions rely heavily on trigonometry?

---

**End of Week 19 Notes**
