# Precalculus Unit 3: Analytic Trigonometry - Notes

## 5.1 Fundamental Identities

### The Pythagorean Identity

**sin²θ + cos²θ = 1**

**Derived forms**:
- **tan²θ + 1 = sec²θ** (divide by cos²θ)
- **1 + cot²θ = csc²θ** (divide by sin²θ)

**Example 1**: If sin θ = 3/5 and θ is in Quadrant II, find cos θ and tan θ.
- sin²θ + cos²θ = 1
- (3/5)² + cos²θ = 1
- cos²θ = 1 - 9/25 = 16/25
- cos θ = ±4/5
- In Quadrant II, cos θ < 0, so cos θ = -4/5
- tan θ = sin θ/cos θ = (3/5)/(-4/5) = -3/4

### Reciprocal Identities

- **csc θ = 1/sin θ**
- **sec θ = 1/cos θ**
- **cot θ = 1/tan θ**

### Quotient Identities

- **tan θ = sin θ/cos θ**
- **cot θ = cos θ/sin θ**

### Even-Odd Identities

**Even** (symmetric about y-axis):
- **cos(-θ) = cos θ**
- **sec(-θ) = sec θ**

**Odd** (symmetric about origin):
- **sin(-θ) = -sin θ**
- **tan(-θ) = -tan θ**
- **csc(-θ) = -csc θ**
- **cot(-θ) = -cot θ**

**Example 2**: Simplify sin(-x) cos x + sin x
- = -sin x · cos x + sin x
- = sin x(1 - cos x)

### Cofunction Identities

- **sin θ = cos(90° - θ)**
- **tan θ = cot(90° - θ)**
- **sec θ = csc(90° - θ)**

### Using Identities to Simplify

**Example 3**: Simplify (sin x)(sec x)
- = (sin x)(1/cos x)
- = sin x/cos x
- = tan x

**Example 4**: Simplify 1 - sin²x
- = cos²x (by Pythagorean identity)

**Example 5**: Simplify (tan²θ + 1)/sec θ
- = sec²θ/sec θ (by tan²θ + 1 = sec²θ)
- = sec θ

---

## 5.2 Proving Trigonometric Identities

### Strategies for Proving Identities

1. **Start with more complicated side**
2. **Convert everything to sin and cos**
3. **Factor or combine fractions**
4. **Use fundamental identities**
5. **Multiply by conjugate**
6. **Work on both sides separately** (toward common form)

**Important**: Don't treat it like an equation! Work with one side at a time.

### Example Proofs

**Example 6**: Prove tan θ · csc θ = sec θ

Work with left side:
- tan θ · csc θ
- = (sin θ/cos θ) · (1/sin θ)
- = 1/cos θ
- = sec θ ✓

**Example 7**: Prove (1 - sin²x)/(1 - cos²x) = cot²x

Work with left side:
- (1 - sin²x)/(1 - cos²x)
- = cos²x/sin²x (by Pythagorean identity)
- = (cos x/sin x)²
- = cot²x ✓

**Example 8**: Prove (sec θ + tan θ)(1 - sin θ) = cos θ

Left side:
- (sec θ + tan θ)(1 - sin θ)
- = (1/cos θ + sin θ/cos θ)(1 - sin θ)
- = ((1 + sin θ)/cos θ)(1 - sin θ)
- = (1 + sin θ)(1 - sin θ)/cos θ
- = (1 - sin²θ)/cos θ
- = cos²θ/cos θ
- = cos θ ✓

**Example 9**: Prove sin x/(1 - cos x) = (1 + cos x)/sin x

Multiply left side by (1 + cos x)/(1 + cos x):
- sin x/(1 - cos x) · (1 + cos x)/(1 + cos x)
- = sin x(1 + cos x)/(1 - cos²x)
- = sin x(1 + cos x)/sin²x
- = (1 + cos x)/sin x ✓

---

## 5.3 Sum & Difference Identities

### Sum and Difference Formulas

**Cosine**:
- **cos(α + β) = cos α cos β - sin α sin β**
- **cos(α - β) = cos α cos β + sin α sin β**

**Sine**:
- **sin(α + β) = sin α cos β + cos α sin β**
- **sin(α - β) = sin α cos β - cos α sin β**

**Tangent**:
- **tan(α + β) = (tan α + tan β)/(1 - tan α tan β)**
- **tan(α - β) = (tan α - tan β)/(1 + tan α tan β)**

**Memory tip**: "Cosine needs a MINUS to ADD"

### Finding Exact Values

**Example 10**: Find exact value of cos 75°
- cos 75° = cos(45° + 30°)
- = cos 45° cos 30° - sin 45° sin 30°
- = (√2/2)(√3/2) - (√2/2)(1/2)
- = (√6 - √2)/4

**Example 11**: Find sin 15°
- sin 15° = sin(45° - 30°)
- = sin 45° cos 30° - cos 45° sin 30°
- = (√2/2)(√3/2) - (√2/2)(1/2)
- = (√6 - √2)/4

**Example 12**: Find tan(π/12)
- π/12 = π/3 - π/4
- tan(π/12) = (tan(π/3) - tan(π/4))/(1 + tan(π/3)tan(π/4))
- = (√3 - 1)/(1 + √3 · 1)
- = (√3 - 1)/(1 + √3)
- Rationalize: = (√3 - 1)² / ((1 + √3)(√3 - 1))
- = (3 - 2√3 + 1)/(√3 - 1 + 3 - √3)
- = (4 - 2√3)/2 = 2 - √3

### Using Sum/Difference with Given Values

**Example 13**: If sin α = 3/5 (α in Q I) and cos β = -12/13 (β in Q II), find sin(α + β).

First, find missing values:
- cos α = 4/5 (Q I: positive)
- sin β = 5/13 (Q II: positive)

Then:
- sin(α + β) = sin α cos β + cos α sin β
- = (3/5)(-12/13) + (4/5)(5/13)
- = -36/65 + 20/65
- = -16/65

---

## 5.4 Multiple-Angle Identities

### Double-Angle Formulas

**Sine**:
- **sin 2θ = 2 sin θ cos θ**

**Cosine** (three forms):
- **cos 2θ = cos²θ - sin²θ**
- **cos 2θ = 2cos²θ - 1**
- **cos 2θ = 1 - 2sin²θ**

**Tangent**:
- **tan 2θ = 2 tan θ/(1 - tan²θ)**

**Example 14**: If sin θ = 5/13 and θ is in Q I, find sin 2θ and cos 2θ.
- cos θ = 12/13
- sin 2θ = 2 sin θ cos θ = 2(5/13)(12/13) = 120/169
- cos 2θ = cos²θ - sin²θ = (12/13)² - (5/13)² = 144/169 - 25/169 = 119/169

**Example 15**: Use double-angle formula to find sin 120°
- sin 120° = sin(2 · 60°)
- = 2 sin 60° cos 60°
- = 2(√3/2)(1/2)
- = √3/2

### Power-Reducing Formulas

Solving double-angle formulas for sin²θ and cos²θ:

- **sin²θ = (1 - cos 2θ)/2**
- **cos²θ = (1 + cos 2θ)/2**
- **tan²θ = (1 - cos 2θ)/(1 + cos 2θ)**

**Example 16**: Express sin²x in terms of first power of cosine
- sin²x = (1 - cos 2x)/2

**Example 17**: Simplify cos⁴x
- cos⁴x = (cos²x)²
- = ((1 + cos 2x)/2)²
- = (1 + 2cos 2x + cos²2x)/4
- = (1 + 2cos 2x + (1 + cos 4x)/2)/4
- = (2 + 4cos 2x + 1 + cos 4x)/8
- = (3 + 4cos 2x + cos 4x)/8

### Half-Angle Formulas

- **sin(θ/2) = ±√((1 - cos θ)/2)**
- **cos(θ/2) = ±√((1 + cos θ)/2)**
- **tan(θ/2) = ±√((1 - cos θ)/(1 + cos θ)) = sin θ/(1 + cos θ) = (1 - cos θ)/sin θ**

Sign depends on quadrant of θ/2.

**Example 18**: Find exact value of sin 15°
- sin 15° = sin(30°/2)
- = √((1 - cos 30°)/2)
- = √((1 - √3/2)/2)
- = √((2 - √3)/4)
- = √(2 - √3)/2

**Example 19**: If cos θ = -3/5 and π < θ < 3π/2, find sin(θ/2).
- θ in Q III means θ/2 in Q II
- sin(θ/2) = √((1 - cos θ)/2)
- = √((1 - (-3/5))/2)
- = √((8/5)/2)
- = √(4/5)
- = 2/√5 = 2√5/5 (positive in Q II)

---

## 5.5 & 5.6 Law of Sines and Law of Cosines

### Law of Sines

For any triangle with sides a, b, c opposite to angles A, B, C:

**sin A/a = sin B/b = sin C/c**

or equivalently:

**a/sin A = b/sin B = c/sin C**

**Use when**: You have AAS, ASA, or SSA

### Solving Triangles with Law of Sines

**Example 20** (AAS): In triangle ABC, A = 50°, C = 75°, a = 12. Find b.
- B = 180° - 50° - 75° = 55°
- a/sin A = b/sin B
- 12/sin 50° = b/sin 55°
- b = 12 sin 55°/sin 50° ≈ 12.84

**Example 21** (ASA): A = 40°, B = 60°, c = 20. Find a.
- C = 180° - 40° - 60° = 80°
- a/sin 40° = 20/sin 80°
- a = 20 sin 40°/sin 80° ≈ 13.05

### The Ambiguous Case (SSA)

When given two sides and angle opposite one of them, there may be 0, 1, or 2 triangles!

**Example 22**: a = 20, b = 30, A = 30°. How many triangles?
- sin B/30 = sin 30°/20
- sin B = 30 sin 30°/20 = 0.75
- B = arcsin(0.75) ≈ 48.6° or B = 180° - 48.6° = 131.4°
- Both give valid triangles! (Two solutions)

### Law of Cosines

For any triangle with sides a, b, c opposite to angles A, B, C:

- **a² = b² + c² - 2bc cos A**
- **b² = a² + c² - 2ac cos B**
- **c² = a² + b² - 2ab cos C**

**Use when**: You have SAS or SSS

**Solving for angle**:
- **cos A = (b² + c² - a²)/(2bc)**

**Example 23** (SAS): a = 8, b = 10, C = 60°. Find c.
- c² = a² + b² - 2ab cos C
- c² = 64 + 100 - 2(8)(10) cos 60°
- c² = 164 - 160(0.5) = 164 - 80 = 84
- c = √84 ≈ 9.17

**Example 24** (SSS): a = 7, b = 9, c = 12. Find angle A.
- cos A = (b² + c² - a²)/(2bc)
- cos A = (81 + 144 - 49)/(2 · 9 · 12)
- cos A = 176/216 ≈ 0.815
- A = arccos(0.815) ≈ 35.4°

### Applications

**Example 25**: Two airplanes leave an airport at the same time. One flies at bearing 70° at 300 mph, the other at bearing 150° at 250 mph. How far apart are they after 2 hours?

- After 2 hours: distances are 600 mi and 500 mi
- Angle between paths: 150° - 70° = 80°
- Use law of cosines:
- d² = 600² + 500² - 2(600)(500) cos 80°
- d² = 360000 + 250000 - 600000(0.174)
- d² = 610000 - 104400 = 505600
- d ≈ 711.2 miles

**Example 26**: Find the area of a triangle with sides 8, 10, 12.

First find an angle using law of cosines, then use A = (1/2)ab sin C:
- cos C = (64 + 100 - 144)/160 = 20/160 = 1/8
- C = arccos(1/8) ≈ 82.8°
- Area = (1/2)(8)(10) sin 82.8° ≈ 39.7 sq units

Or use **Heron's Formula**:
- s = (8 + 10 + 12)/2 = 15
- Area = √(s(s-a)(s-b)(s-c)) = √(15 · 7 · 5 · 3) = √1575 ≈ 39.7

---

## Summary

### Fundamental Identities
- **Pythagorean**: sin²θ + cos²θ = 1, tan²θ + 1 = sec²θ, 1 + cot²θ = csc²θ
- **Reciprocal**: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ
- **Quotient**: tan θ = sin θ/cos θ, cot θ = cos θ/sin θ

### Sum/Difference Formulas
- **sin(α ± β) = sin α cos β ± cos α sin β**
- **cos(α ± β) = cos α cos β ∓ sin α sin β**
- **tan(α ± β) = (tan α ± tan β)/(1 ∓ tan α tan β)**

### Double-Angle Formulas
- **sin 2θ = 2 sin θ cos θ**
- **cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ**
- **tan 2θ = 2 tan θ/(1 - tan²θ)**

### Triangle Solutions
- **Law of Sines**: a/sin A = b/sin B = c/sin C (use for AAS, ASA, SSA)
- **Law of Cosines**: a² = b² + c² - 2bc cos A (use for SAS, SSS)
