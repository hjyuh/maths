# Week 21: Circles

## Essential Question
**What characteristics and relationships exist within circles?**

## Learning Objectives
By the end of this week, students will be able to:
- Prove that all circles are similar
- Identify and apply relationships between central angles, inscribed angles, radii, and chords
- Use properties of tangent lines to circles
- Work with inscribed and circumscribed polygons
- Write and graph equations of circles in the coordinate plane
- Use coordinate geometry to prove circle theorems
- Construct inscribed and circumscribed circles for various polygons
- Solve real-world problems involving circles

---

## Part 1: Circle Basics and Vocabulary

### Definitions

**Circle**: The set of all points in a plane that are equidistant from a fixed point (the center).

**Radius**: A segment from the center to a point on the circle. Also, the distance from center to circle.

**Diameter**: A chord that passes through the center. Length = 2r.

**Chord**: A segment whose endpoints are on the circle.

**Secant**: A line that intersects the circle at two points.

**Tangent**: A line that intersects the circle at exactly one point.

**Point of Tangency**: The point where a tangent line touches the circle.

**Arc**: Part of a circle between two points.
- **Minor arc**: Less than 180° (semicircle)
- **Major arc**: Greater than 180°
- **Semicircle**: Exactly 180°

**Central Angle**: An angle whose vertex is at the center of the circle.

**Inscribed Angle**: An angle whose vertex is on the circle and whose sides are chords.

**Inscribed Polygon**: A polygon whose vertices all lie on a circle.

**Circumscribed Polygon**: A polygon whose sides are all tangent to a circle.

### Key Notation
- Circle with center O: ⊙O
- Arc AB: ⌢AB
- Measure of arc AB: m⌢AB
- Length of arc AB: See Week 20 (arc length formulas)

---

## Part 2: All Circles Are Similar (G.C.1)

### Theorem: All circles are similar.

### Proof
Let circle A have radius r₁ and circle B have radius r₂.

**Strategy**: Show that there exists a similarity transformation mapping circle A onto circle B.

**Transformation**:
1. **Translation**: Move center of circle A to center of circle B
2. **Dilation**: Use scale factor k = r₂/r₁

After translation, the circles are concentric (same center).
After dilation with k = r₂/r₁, every point at distance r₁ from center maps to distance kr₁ = r₂ from center.

Therefore, circle A maps onto circle B, proving they are similar.

### Why This Matters
- All circles have the same shape (just different sizes)
- The ratio of circumference to diameter is always π
- All circle theorems apply to every circle
- Angles in circles depend only on arc measures, not circle size

### Example 1: Scale Factor
Circle A has radius 5 and circle B has radius 12. What is the scale factor from A to B?

**Solution:**
k = 12/5 = **2.4**

---

## Part 3: Central Angles and Arcs

### Central Angle Theorem
The measure of a central angle equals the measure of its intercepted arc.

If ∠AOB is a central angle, then: **m∠AOB = m⌢AB**

### Arc Addition Postulate
The measure of an arc formed by two adjacent arcs is the sum of the measures of the two arcs.

m⌢AC = m⌢AB + m⌢BC (when B is between A and C on the circle)

### Example 2: Finding Arc Measures
In ⊙O, m∠AOB = 75° and m∠BOC = 120°. Find:
a) m⌢AB
b) m⌢BC
c) m⌢AC

**Solution:**
a) m⌢AB = 75° (central angle = arc)
b) m⌢BC = 120°
c) m⌢AC = 75° + 120° = **195°**

---

## Part 4: Inscribed Angles (G.C.2)

### Inscribed Angle Theorem
**The measure of an inscribed angle is half the measure of its intercepted arc.**

If ∠ABC is inscribed in a circle, then:
$$m∠ABC = \frac{1}{2}m\overarc{AC}$$

### Proof Outline (Case 1: Center on one side of angle)
Given: ∠ABC inscribed in ⊙O with center O on ray BA

1. Draw radius OC
2. Triangle OBC is isosceles (OB = OC = radius)
3. Let m∠ABC = x, then m∠OCB = x (base angles)
4. ∠AOC is exterior angle, so m∠AOC = 2x
5. m⌢AC = m∠AOC = 2x (central angle)
6. Therefore: m∠ABC = ½m⌢AC

### Corollary 1: Inscribed Angles on Same Arc
Inscribed angles that intercept the same arc are congruent.

### Corollary 2: Angle Inscribed in Semicircle
**An angle inscribed in a semicircle is a right angle.**

If AC is a diameter and B is on the circle, then m∠ABC = 90°.

**Proof**: Semicircle = 180°, so inscribed angle = 180°/2 = 90°

### Example 3: Inscribed Angles
In ⊙O, m⌢AB = 140°. Find the measure of ∠ACB where C is on the circle.

**Solution:**
m∠ACB = ½(140°) = **70°**

### Example 4: Angle in Semicircle
Points A, B, C are on a circle. AB is a diameter. Prove ∠ACB = 90°.

**Solution:**
Since AB is a diameter, m⌢AB = 180° (semicircle)
m∠ACB = ½(180°) = 90° ✓

---

## Part 5: Tangent Lines (G.C.2)

### Tangent Line Theorem
**A tangent line to a circle is perpendicular to the radius at the point of tangency.**

If line ℓ is tangent to ⊙O at point P, then OP ⊥ ℓ.

### Proof
Assume tangent line is not perpendicular to radius. Then we could construct a perpendicular from O to the line, creating a shorter segment than the radius. But this point would be inside the circle (distance < radius), contradicting that the line is tangent (touches circle at only one point).

### Converse
If a line is perpendicular to a radius at its outer endpoint, then the line is tangent to the circle.

### Two-Tangent Theorem
**Tangent segments from an external point to a circle are congruent.**

If PA and PB are tangent to ⊙O at A and B respectively, then PA = PB.

### Example 5: Tangent and Radius
A line is tangent to a circle with radius 8 at point T. Point P is on the tangent line, 6 units from T. Find the distance from P to the center O.

**Solution:**
Triangle OTP is a right triangle with:
- OT = 8 (radius)
- TP = 6 (given)
- OP = hypotenuse

OP² = 8² + 6² = 64 + 36 = 100
OP = **10**

### Example 6: Two Tangents
From point P, two tangent segments PA and PB are drawn to ⊙O. If PA = 12, what is PB?

**Solution:**
By two-tangent theorem: PB = PA = **12**

---

## Part 6: Chord Properties (G.C.2)

### Perpendicular Bisector of Chord Theorem
**The perpendicular bisector of a chord passes through the center of the circle.**

Conversely: A line through the center perpendicular to a chord bisects the chord.

### Equal Chords Theorem
In the same circle or congruent circles:
- **Equal chords are equidistant from the center**
- **Chords equidistant from the center are equal**

### Example 7: Chord and Radius
A chord has length 24 in a circle with radius 13. Find the distance from the center to the chord.

**Solution:**
Draw radius to chord endpoint and perpendicular from center to chord.
This creates a right triangle:
- Hypotenuse = 13 (radius)
- One leg = 12 (half the chord)
- Other leg = distance (d)

d² + 12² = 13²
d² + 144 = 169
d² = 25
d = **5**

---

## Part 7: Angle Relationships in Circles

### Angles Inside the Circle

**Theorem**: The measure of an angle formed by two chords intersecting inside a circle equals half the sum of the intercepted arcs.

$$m∠1 = \frac{1}{2}(m\overarc{AB} + m\overarc{CD})$$

### Angles Outside the Circle

**Theorem**: The measure of an angle formed by two secants, two tangents, or a secant and tangent drawn from an external point equals half the difference of the intercepted arcs.

$$m∠1 = \frac{1}{2}|m\overarc{AB} - m\overarc{CD}|$$

### Example 8: Chords Intersecting Inside
Two chords intersect inside a circle. They intercept arcs of 80° and 100°. Find the angle formed.

**Solution:**
m∠ = ½(80° + 100°) = ½(180°) = **90°**

### Example 9: Secants from External Point
Two secants from point P intercept arcs of 120° and 40°. Find the angle at P.

**Solution:**
m∠P = ½(120° - 40°) = ½(80°) = **40°**

---

## Part 8: Segment Relationships

### Chord-Chord Product Theorem
**When two chords intersect inside a circle, the products of their segments are equal.**

If chords AB and CD intersect at E, then:
$$AE \cdot EB = CE \cdot ED$$

### Secant-Secant Product Theorem
**When two secants are drawn to a circle from an external point, the product of one secant and its external segment equals the product of the other secant and its external segment.**

If secants from P intersect circle at A, B and C, D respectively:
$$PA \cdot PB = PC \cdot PD$$

### Tangent-Secant Product Theorem
**When a tangent and a secant are drawn from an external point, the square of the tangent equals the product of the secant and its external segment.**

If tangent PT and secant through A, B are drawn from P:
$$(PT)^2 = PA \cdot PB$$

### Example 10: Chord-Chord
Two chords intersect inside a circle. One chord is divided into segments of 6 and 8. The other is divided into segments of 4 and x. Find x.

**Solution:**
6 · 8 = 4 · x
48 = 4x
x = **12**

### Example 11: Tangent-Secant
A tangent of length 12 and a secant are drawn from point P. The external part of the secant is 8. Find the total length of the secant.

**Solution:**
Let total secant length = d
12² = 8 · d
144 = 8d
d = **18**

---

## Part 9: Inscribed and Circumscribed Polygons (G.C.3)

### Inscribed Quadrilaterals

**Theorem**: **A quadrilateral can be inscribed in a circle if and only if opposite angles are supplementary.**

If quadrilateral ABCD is inscribed in a circle:
- m∠A + m∠C = 180°
- m∠B + m∠D = 180°

### Circumscribed Polygons

**Theorem**: For a quadrilateral circumscribed about a circle, **the sum of opposite sides are equal**.

If quadrilateral ABCD is circumscribed about a circle:
AB + CD = BC + DA

### Inscribed Regular Polygons
A regular polygon inscribed in a circle:
- All vertices are equidistant from center (on circle)
- Central angle = 360°/n (n = number of sides)
- All sides are equal chords

### Example 12: Inscribed Quadrilateral
Quadrilateral ABCD is inscribed in a circle. If m∠A = 85° and m∠B = 110°, find m∠C and m∠D.

**Solution:**
m∠C = 180° - 85° = **95°**
m∠D = 180° - 110° = **70°**

Verify: 85° + 95° + 110° + 70° = 360° ✓

---

## Part 10: Constructing Inscribed and Circumscribed Circles (G.C.4, G.C.5)

### Circumscribed Circle (Circumcircle)
The **circumcircle** of a triangle passes through all three vertices.
- Center is the **circumcenter** (intersection of perpendicular bisectors)
- Radius is the **circumradius**

### Construction of Circumcircle
1. Construct perpendicular bisector of two sides
2. The intersection is the circumcenter
3. Draw circle with that center through any vertex

### Inscribed Circle (Incircle)
The **incircle** of a triangle is tangent to all three sides.
- Center is the **incenter** (intersection of angle bisectors)
- Radius is the **inradius**

### Construction of Incircle
1. Construct angle bisectors of two angles
2. The intersection is the incenter
3. Construct perpendicular from incenter to any side
4. Draw circle with that center and radius to that perpendicular point

### For Polygons
- Regular polygons always have both inscribed and circumscribed circles
- Irregular polygons may have one, both, or neither

### Example 13: Circumradius of Equilateral Triangle
An equilateral triangle has side length 12. Find the circumradius.

**Solution:**
For equilateral triangle with side s:
$$R = \frac{s}{\sqrt{3}} = \frac{s\sqrt{3}}{3}$$

R = 12√3/3 = **4√3**

---

## Part 11: Inscribing Regular Polygons in Circles (G.CO.12)

### Equilateral Triangle
1. Mark point A on circle
2. Set compass to radius of circle
3. From A, mark arc intersecting circle at B
4. From B, mark arc intersecting circle at C
5. Connect A, B, C

### Square
1. Draw diameter AC
2. Construct perpendicular diameter BD
3. Connect A, B, C, D in order

### Regular Hexagon
1. Mark point A on circle
2. Set compass to radius
3. Mark consecutive points around circle (6 points total)
4. Connect consecutive points

**Why this works**: Central angle of hexagon = 360°/6 = 60°
With radius as side, we create equilateral triangles!

### Example 14: Regular Hexagon Side Length
A regular hexagon is inscribed in a circle with radius 8. Find the side length.

**Solution:**
For a regular hexagon, side length = radius
Side length = **8**

---

## Part 12: Equations of Circles (G.GPE.1)

### Standard Form
A circle with center (h, k) and radius r has equation:
$$(x - h)^2 + (y - k)^2 = r^2$$

### Special Case: Circle Centered at Origin
Center (0, 0), radius r:
$$x^2 + y^2 = r^2$$

### From Equation to Graph
Given: (x - 3)² + (y + 2)² = 25

- Center: (3, -2)  [Note: y-coordinate is opposite of sign]
- Radius: √25 = 5

### From Graph to Equation
Given: Center (4, -1), radius 6

Equation: (x - 4)² + (y + 1)² = 36

### Example 15: Write Equation
Write the equation of a circle with center (-2, 5) and radius 7.

**Solution:**
(x - (-2))² + (y - 5)² = 7²
**(x + 2)² + (y - 5)² = 49**

### Example 16: Identify Center and Radius
Find the center and radius: x² + (y - 4)² = 16

**Solution:**
Center: **(0, 4)**
Radius: **4**

---

## Part 13: Deriving Circle Equations (G.GPE.2)

### Using the Pythagorean Theorem
A circle is the set of all points at distance r from center (h, k).

For any point (x, y) on the circle:
- Horizontal distance from center: |x - h|
- Vertical distance from center: |y - k|
- Distance from center: r

By Pythagorean Theorem:
$$(x - h)^2 + (y - k)^2 = r^2$$

This is the **distance formula** applied to circles!

### Example 17: Points on Circle
Is point (7, 3) on the circle (x - 4)² + (y - 1)² = 13?

**Solution:**
Substitute (7, 3):
(7 - 4)² + (3 - 1)² = 3² + 2² = 9 + 4 = 13 ✓

Yes, the point is on the circle.

---

## Part 14: General Form of Circle Equation

### Converting to General Form
Expand the standard form:
(x - h)² + (y - k)² = r²

This gives: **x² + y² + Dx + Ey + F = 0**

where D = -2h, E = -2k, F = h² + k² - r²

### Completing the Square
To convert from general form back to standard form:

**Steps**:
1. Group x terms and y terms
2. Complete the square for x
3. Complete the square for y
4. Simplify to standard form

### Example 18: Complete the Square
Convert to standard form: x² + y² + 6x - 8y + 9 = 0

**Solution:**
(x² + 6x) + (y² - 8y) = -9

Complete the square:
(x² + 6x + 9) + (y² - 8y + 16) = -9 + 9 + 16
(x + 3)² + (y - 4)² = 16

**Center: (-3, 4), Radius: 4**

---

## Part 15: Using Coordinates to Prove Circle Theorems (G.GPE.6)

### Strategy
1. Place circle conveniently in coordinate plane (often centered at origin)
2. Use coordinates and algebra
3. Prove the relationship

### Example 19: Tangent Perpendicular to Radius
Prove: A tangent to a circle is perpendicular to the radius at the point of tangency.

**Proof** (using coordinates):
Place circle at origin: x² + y² = r²
Let point of tangency be (a, b) where a² + b² = r²

Slope of radius OP: m₁ = b/a

For tangent line, use implicit differentiation:
2x + 2y(dy/dx) = 0
dy/dx = -x/y

At (a, b): slope of tangent = -a/b = m₂

Check if perpendicular: m₁ · m₂ = (b/a)(-a/b) = -1 ✓

Therefore, tangent is perpendicular to radius.

### Example 20: Inscribed Angle is Half Central Angle
Using coordinates, we can verify the inscribed angle theorem for specific cases.

---

## Part 16: Real-World Applications

### Navigation and GPS
Circles are used in:
- Determining position by triangulation
- Range circles for radio/GPS signals
- Circular flight patterns

### Architecture
- Circular buildings and domes
- Arches (semicircular or arc-based)
- Circular windows and decorative elements

### Engineering
- Gears and wheels
- Circular motion and rotation
- Pulleys and cables

### Example 21: Satellite Range
A satellite has a signal range of 500 miles. If the satellite is at position (200, 300) on a map, write the equation for the boundary of its range.

**Solution:**
Center: (200, 300)
Radius: 500

Equation: **(x - 200)² + (y - 300)² = 250,000**

---

## Part 17: Problem-Solving Strategies

### For Circle Theorems
1. **Draw a diagram** - Always!
2. **Mark known information** - angles, radii, tangent points
3. **Identify relationships** - central, inscribed, tangent angles
4. **Use appropriate theorem**

### For Circle Equations
1. **Identify what's given** - center and radius, or equation
2. **Determine what's asked** - equation, center, radius, or point location
3. **Apply standard form** - (x-h)² + (y-k)² = r²
4. **Complete the square if needed**

### For Construction Problems
1. **Know the centers** - circumcenter vs incenter
2. **Use correct construction** - perpendicular bisectors vs angle bisectors
3. **Verify your result**

---

## Part 18: Common Mistakes to Avoid

### Mistake 1: Confusing Central and Inscribed Angles
- Central angle = arc measure
- Inscribed angle = ½ arc measure

### Mistake 2: Sign Errors in Circle Equations
(x - 3)² means center x-coordinate is +3, not -3!
(y + 2)² means center y-coordinate is -2, not +2!

### Mistake 3: Forgetting Perpendicularity
Tangent is ALWAYS perpendicular to radius at point of tangency

### Mistake 4: Wrong Segment Products
- Chords intersecting inside: AE · EB = CE · ED
- Secants from outside: PA · PB = PC · PD (whole × whole)
- Tangent-secant: (PT)² = PA · PB (not PT · TA!)

### Mistake 5: Inscribed Quadrilateral Angles
Opposite angles are supplementary (add to 180°), not equal!

### Mistake 6: Completing the Square Errors
Don't forget to add the same amount to both sides!

---

## Key Theorems and Formulas Summary

### Angle Relationships
| Type | Formula |
|------|---------|
| Central angle | = arc measure |
| Inscribed angle | = ½ arc measure |
| Angle in semicircle | = 90° |
| Chords inside | = ½(sum of arcs) |
| Secants/tangents outside | = ½(difference of arcs) |

### Segment Relationships
| Type | Relationship |
|------|--------------|
| Chord-chord | AE · EB = CE · ED |
| Secant-secant | PA · PB = PC · PD |
| Tangent-secant | (PT)² = PA · PB |
| Two tangents | PA = PB (equal) |

### Circle Equations
| Form | Equation |
|------|----------|
| Standard form | (x-h)² + (y-k)² = r² |
| Center at origin | x² + y² = r² |
| General form | x² + y² + Dx + Ey + F = 0 |

### Special Properties
- Tangent ⊥ radius at point of tangency
- Perpendicular from center bisects chord
- Inscribed quadrilateral: opposite angles supplementary
- All circles are similar

---

## Practice Problems

### Basic Problems
1. In ⊙O, m⌢AB = 120°. Find the measure of central angle ∠AOB.

2. An inscribed angle intercepts an arc of 80°. Find the angle measure.

3. A circle has center (3, -4) and radius 5. Write its equation.

4. Is point (6, 2) on the circle x² + (y - 3)² = 10?

5. A tangent and a radius meet at point T. What is the angle between them?

### Intermediate Problems
6. Two chords intersect inside a circle. One is divided into 5 and 10, the other into 6 and x. Find x.

7. Quadrilateral ABCD is inscribed in a circle. If m∠A = 95° and m∠B = 100°, find m∠C and m∠D.

8. Convert to standard form: x² + y² - 8x + 6y - 11 = 0

9. A chord of length 16 is 6 units from the center of a circle. Find the radius.

10. From point P, tangent PT = 24 and secant through A and B has PA = 18. Find PB.

### Advanced Problems
11. Prove that all circles are similar using transformations.

12. In a circle with radius 10, two chords AB and CD intersect at E. If AE = 8, EB = 6, and CE = 12, find ED.

13. A regular hexagon is inscribed in a circle of radius 10. Find the perimeter.

14. Prove using coordinates: A tangent is perpendicular to the radius at the point of tangency.

15. Three points A(2, 3), B(6, 1), C(4, 5) lie on a circle. Find the equation of the circle.

---

## Connections to Other Topics

### Trigonometry
- Arc length and radian measure
- Unit circle (center at origin, radius 1)
- Trigonometric functions defined on circles

### Algebra
- Solving systems with circle equations
- Quadratic equations from circle problems
- Completing the square

### Previous Geometry
- Pythagorean Theorem (in circle problems)
- Angle relationships
- Similar figures (all circles are similar)

### Calculus (Future)
- Derivatives and tangent lines
- Area under curves
- Polar coordinates

---

## Reflective Questions

1. Why are all circles similar? What does this tell us about circles?

2. How does the inscribed angle theorem relate to the central angle theorem?

3. Why must a tangent line be perpendicular to the radius?

4. What's the connection between the circle equation and the distance formula?

5. How do circle properties apply to real-world situations like wheels, gears, and orbits?

6. What makes inscribed and circumscribed figures special?

---

**End of Week 21 Notes**
