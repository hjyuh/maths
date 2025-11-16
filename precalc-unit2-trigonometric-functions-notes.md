# Precalculus Unit 2: Trigonometric Functions - Notes

## 4.1 Angles & Measures

### Angle Terminology

**Angle**: Formed by rotating a ray about its endpoint
- **Initial side**: Starting position
- **Terminal side**: Final position
- **Vertex**: Point of rotation
- **Standard position**: Vertex at origin, initial side on positive x-axis

**Positive angles**: Counter-clockwise rotation
**Negative angles**: Clockwise rotation

**Example 1**: Draw 45° and -120° in standard position.

### Degree Measure

**One degree (1°)**: 1/360 of a complete rotation

**DMS (Degrees-Minutes-Seconds)**:
- 1° = 60' (60 minutes)
- 1' = 60" (60 seconds)

**Example 2**: Convert 42.75° to DMS
- 42.75° = 42° + 0.75°
- 0.75° × 60 = 45'
- Answer: 42°45'

**Example 3**: Convert 15°36'45" to decimal degrees
- 45" = 45/60 = 0.75'
- 36.75' = 36.75/60 = 0.6125°
- Answer: 15.6125°

### Radian Measure

**Definition**: One radian is the measure of a central angle θ that intercepts an arc equal in length to the radius of the circle.

**Key relationship**: θ (in radians) = s/r
where s = arc length, r = radius

**Full circle**: 360° = 2π radians

**Conversion formulas**:
- **Degrees to radians**: radians = degrees × (π/180)
- **Radians to degrees**: degrees = radians × (180/π)

**Example 4**: Convert 60° to radians
- 60° × (π/180) = π/3 radians

**Example 5**: Convert 3π/4 radians to degrees
- (3π/4) × (180/π) = 135°

**Common angles**:
| Degrees | Radians |
|---------|---------|
| 30° | π/6 |
| 45° | π/4 |
| 60° | π/3 |
| 90° | π/2 |
| 180° | π |
| 270° | 3π/2 |
| 360° | 2π |

### Arc Length and Sector Area

**Arc Length**: s = rθ (θ in radians)

**Sector Area**: A = (1/2)r²θ (θ in radians)

**Example 6**: Find arc length when r = 5 cm and θ = π/3
- s = 5 × (π/3) = 5π/3 cm ≈ 5.24 cm

**Example 7**: Find area of sector when r = 8 ft and θ = 2π/3
- A = (1/2)(8²)(2π/3) = 64π/3 ft² ≈ 67.02 ft²

### Angular Speed and Linear Speed

**Angular speed** (ω): ω = θ/t (radians per unit time)

**Linear speed** (v): v = s/t

**Relationship**: v = rω

**Example 8**: A wheel with radius 10 inches rotates at 4 revolutions per second. Find angular and linear speeds.
- ω = 4 rev/s × 2π rad/rev = 8π rad/s
- v = rω = 10 × 8π = 80π in/s ≈ 251.3 in/s

### Compass Bearings

**Bearing**: Direction measured clockwise from north

**Example 9**: A plane flies on bearing 135°. This means 135° clockwise from north (southeast direction).

**Navigation**: N 30° E means 30° east of north
S 45° W means 45° west of south

---

## 4.2 Right Triangle Trigonometry

### Six Trigonometric Ratios

For a right triangle with angle θ:

**SOH-CAH-TOA**:
- **sin θ = opposite/hypotenuse**
- **cos θ = adjacent/hypotenuse**
- **tan θ = opposite/adjacent**

**Reciprocal functions**:
- **csc θ = 1/sin θ = hypotenuse/opposite**
- **sec θ = 1/cos θ = hypotenuse/adjacent**
- **cot θ = 1/tan θ = adjacent/opposite**

**Example 10**: Find all six trig functions for angle θ in a right triangle with opposite = 3, adjacent = 4.
- Hypotenuse: c = √(3² + 4²) = 5
- sin θ = 3/5, cos θ = 4/5, tan θ = 3/4
- csc θ = 5/3, sec θ = 5/4, cot θ = 4/3

### Special Right Triangles

**45-45-90 Triangle** (sides in ratio 1:1:√2):
- sin 45° = cos 45° = √2/2
- tan 45° = 1

**30-60-90 Triangle** (sides in ratio 1:√3:2):
- sin 30° = 1/2, cos 30° = √3/2, tan 30° = √3/3
- sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3

**Example 11**: Find exact value of sin 60° · cos 30° + tan 45°
- (√3/2)(√3/2) + 1 = 3/4 + 1 = 7/4

### Complementary Angles

**Cofunction identities**:
- sin θ = cos(90° - θ)
- tan θ = cot(90° - θ)
- sec θ = csc(90° - θ)

**Example 12**: sin 25° = cos 65° (since 25° + 65° = 90°)

### Calculator Modes

**Degree mode**: For angles in degrees
**Radian mode**: For angles in radians

**Always check your mode before calculating!**

**Example 13**:
- sin 30° = 0.5 (in degree mode)
- sin 30 = -0.988... (in radian mode - this is sin(30 radians))

### Application Problems

**Example 14**: A 20-foot ladder leans against a wall at 75° angle with ground. How high up the wall does it reach?
- sin 75° = h/20
- h = 20 sin 75° ≈ 19.3 feet

**Example 15**: From a point 100 feet from the base of a building, the angle of elevation to the top is 60°. Find building height.
- tan 60° = h/100
- h = 100 tan 60° = 100√3 ≈ 173.2 feet

---

## 4.3 Circular Functions

### The Unit Circle

**Unit circle**: Circle with radius 1 centered at origin

**Equation**: x² + y² = 1

**Point P(θ)**: Point where terminal side of angle θ intersects unit circle
- Coordinates: P(θ) = (cos θ, sin θ)

**Example 16**: For θ = π/4, find point P
- P(π/4) = (cos π/4, sin π/4) = (√2/2, √2/2)

### Circular Function Definitions

For angle θ in standard position with point (x, y) on terminal side at distance r from origin:

- **sin θ = y/r**
- **cos θ = x/r**
- **tan θ = y/x** (x ≠ 0)
- **csc θ = r/y** (y ≠ 0)
- **sec θ = r/x** (x ≠ 0)
- **cot θ = x/y** (y ≠ 0)

On the **unit circle** (r = 1):
- **sin θ = y**
- **cos θ = x**
- **tan θ = y/x**

### Reference Angles

**Reference angle**: Acute angle formed by terminal side and x-axis

**Finding reference angles**:
- **Quadrant I**: θ' = θ
- **Quadrant II**: θ' = 180° - θ (or π - θ)
- **Quadrant III**: θ' = θ - 180° (or θ - π)
- **Quadrant IV**: θ' = 360° - θ (or 2π - θ)

**Example 17**: Find reference angle for θ = 210°
- Quadrant III: θ' = 210° - 180° = 30°

**Example 18**: Find reference angle for θ = 5π/6
- Quadrant II: θ' = π - 5π/6 = π/6

### Signs of Trig Functions by Quadrant

**All Students Take Calculus** (ASTC):
- **Quadrant I**: All positive
- **Quadrant II**: Sin (and csc) positive
- **Quadrant III**: Tan (and cot) positive
- **Quadrant IV**: Cos (and sec) positive

**Example 19**: Find sin 150°
- Reference angle: 30°
- Quadrant II: sine is positive
- sin 150° = sin 30° = 1/2

**Example 20**: Find cos 240°
- Reference angle: 60°
- Quadrant III: cosine is negative
- cos 240° = -cos 60° = -1/2

### Finding Trig Functions Given a Point

**Example 21**: Point (-3, 4) is on terminal side of θ. Find all six trig functions.
- r = √((-3)² + 4²) = √25 = 5
- sin θ = 4/5, cos θ = -3/5, tan θ = -4/3
- csc θ = 5/4, sec θ = -5/3, cot θ = -3/4

### Coterminal Angles

**Coterminal angles**: Angles that share the same terminal side

**Formula**: θ + 360°n (or θ + 2πn for radians), where n is any integer

**Example 22**: Find two positive and two negative coterminal angles for 45°
- Positive: 405°, 765°
- Negative: -315°, -675°

---

## 4.4 Graphs of Sine & Cosine Functions

### Basic Sine Function: y = sin x

**Domain**: All real numbers
**Range**: [-1, 1]
**Period**: 2π
**Amplitude**: 1
**Key points** (one period): (0,0), (π/2,1), (π,0), (3π/2,-1), (2π,0)

### Basic Cosine Function: y = cos x

**Domain**: All real numbers
**Range**: [-1, 1]
**Period**: 2π
**Amplitude**: 1
**Key points** (one period): (0,1), (π/2,0), (π,-1), (3π/2,0), (2π,1)

### General Sinusoidal Function

**y = A sin(B(x - C)) + D** or **y = A cos(B(x - C)) + D**

**Parameters**:
- **|A| = Amplitude** (maximum displacement from midline)
- **Period = 2π/B**
- **C = Phase shift** (horizontal shift)
- **D = Vertical shift** (midline is y = D)
- **Frequency = B/(2π)** (number of cycles in interval of length 2π)

**Example 23**: For y = 3 sin(2x)
- Amplitude: 3
- Period: 2π/2 = π
- Phase shift: 0
- Vertical shift: 0

**Example 24**: For y = 2 cos(x - π/4) + 1
- Amplitude: 2
- Period: 2π/1 = 2π
- Phase shift: π/4 right
- Vertical shift: 1 (midline y = 1)
- Range: [-1, 3]

### Graphing Sinusoidal Functions

**Steps**:
1. Identify A, B, C, D
2. Find amplitude, period, phase shift, vertical shift
3. Draw midline at y = D
4. Mark max at y = D + |A| and min at y = D - |A|
5. Divide period into 4 equal parts
6. Plot 5 key points
7. Sketch smooth curve

**Example 25**: Graph y = -2 sin(πx) + 1
- Amplitude: 2
- Period: 2π/π = 2
- Phase shift: 0
- Vertical shift: 1
- Midline: y = 1
- Max: 3, Min: -1
- Key points: (0,1), (0.5,-1), (1,1), (1.5,3), (2,1)
- Note: Negative A reflects graph across midline

### Writing Equations from Graphs

**Given graph**, identify:
1. **Midline** → D
2. **Amplitude** → |A| (distance from midline to max/min)
3. **Period** → Find B using 2π/B = period
4. **Phase shift** → C (check if sine or cosine)
5. Determine sign of A

**Example 26**: A sinusoidal graph has max 5, min -3, period π/2.
- Midline: D = (5 + (-3))/2 = 1
- Amplitude: |A| = (5 - (-3))/2 = 4
- Period: 2π/B = π/2 → B = 4
- If max occurs at x = 0: y = 4 cos(4x) + 1
- If zero occurs at x = 0 and increasing: y = 4 sin(4x) + 1

### Applications

**Example 27**: Temperature in a city varies sinusoidally, with max 85°F at 2 PM and min 65°F at 2 AM. Write function for temperature T as function of hours after midnight.
- Midline: D = (85 + 65)/2 = 75
- Amplitude: A = (85 - 65)/2 = 10
- Period: 24 hours → 2π/B = 24 → B = π/12
- Max at t = 14: Use cosine with shift
- T(t) = 10 cos(π/12(t - 14)) + 75

---

## 4.5 Graphs of Other Trig Functions

### Tangent Function: y = tan x

**Definition**: tan x = sin x/cos x

**Domain**: All reals except x = π/2 + πn (where cos x = 0)
**Range**: All real numbers
**Period**: π (not 2π!)
**Vertical asymptotes**: x = π/2 + πn
**Key points**: (-π/4, -1), (0, 0), (π/4, 1)

**General form**: y = A tan(B(x - C)) + D
- **Period = π/B**
- **Asymptotes**: Solve B(x - C) = π/2 + πn

**Example 28**: Graph y = 2 tan(x/2)
- Amplitude: Undefined (tangent has no amplitude)
- Period: π/(1/2) = 2π
- Asymptotes: x/2 = π/2 + πn → x = π + 2πn
- First asymptotes: x = -π, x = π

### Cotangent Function: y = cot x

**Definition**: cot x = cos x/sin x

**Domain**: All reals except x = πn (where sin x = 0)
**Range**: All real numbers
**Period**: π
**Vertical asymptotes**: x = πn
**Key points**: (π/4, 1), (π/2, 0), (3π/4, -1)

**Example 29**: For y = cot(2x)
- Period: π/2
- Asymptotes: 2x = πn → x = πn/2
- First asymptotes: x = 0, x = π/2

### Secant Function: y = sec x

**Definition**: sec x = 1/cos x

**Domain**: All reals except x = π/2 + πn
**Range**: (-∞, -1] ∪ [1, ∞)
**Period**: 2π
**Vertical asymptotes**: Where cos x = 0
**Graph**: U-shapes between asymptotes

**Graphing tip**: Graph y = cos x first, then sec x has:
- Asymptotes where cos x = 0
- Local max/min where cos x has max/min
- sec x = 1/cos x

**Example 30**: Graph y = sec(x)
- Asymptotes: x = -3π/2, -π/2, π/2, 3π/2, ...
- Local minimums at x = 0, ±2π, ±4π, ... (value = 1)
- Local maximums at x = ±π, ±3π, ... (value = -1)

### Cosecant Function: y = csc x

**Definition**: csc x = 1/sin x

**Domain**: All reals except x = πn
**Range**: (-∞, -1] ∪ [1, ∞)
**Period**: 2π
**Vertical asymptotes**: Where sin x = 0

**Graphing tip**: Graph y = sin x first, then csc x has:
- Asymptotes where sin x = 0
- Local max/min where sin x has max/min

**Example 31**: For y = 2 csc(x - π/4)
- Period: 2π
- Asymptotes: x - π/4 = πn → x = π/4 + πn
- Range: (-∞, -2] ∪ [2, ∞)

---

## 4.7 Inverse Trigonometric Functions

### Inverse Sine: y = arcsin x or y = sin⁻¹ x

**Definition**: y = arcsin x means sin y = x where -π/2 ≤ y ≤ π/2

**Domain**: [-1, 1]
**Range**: [-π/2, π/2] (Quadrants I and IV)

**Example 32**: Find arcsin(1/2)
- Need angle in [-π/2, π/2] where sin y = 1/2
- arcsin(1/2) = π/6

**Example 33**: Find sin⁻¹(-√3/2)
- Need angle in [-π/2, π/2] where sin y = -√3/2
- sin⁻¹(-√3/2) = -π/3

### Inverse Cosine: y = arccos x or y = cos⁻¹ x

**Definition**: y = arccos x means cos y = x where 0 ≤ y ≤ π

**Domain**: [-1, 1]
**Range**: [0, π] (Quadrants I and II)

**Example 34**: Find arccos(1/2)
- Need angle in [0, π] where cos y = 1/2
- arccos(1/2) = π/3

**Example 35**: Find cos⁻¹(-1)
- Need angle in [0, π] where cos y = -1
- cos⁻¹(-1) = π

### Inverse Tangent: y = arctan x or y = tan⁻¹ x

**Definition**: y = arctan x means tan y = x where -π/2 < y < π/2

**Domain**: All real numbers
**Range**: (-π/2, π/2) (Quadrants I and IV)

**Example 36**: Find arctan(1)
- Need angle in (-π/2, π/2) where tan y = 1
- arctan(1) = π/4

**Example 37**: Find tan⁻¹(-√3)
- Need angle in (-π/2, π/2) where tan y = -√3
- tan⁻¹(-√3) = -π/3

### Compositions with Inverse Functions

**Identity relationships**:
- sin(arcsin x) = x for -1 ≤ x ≤ 1
- cos(arccos x) = x for -1 ≤ x ≤ 1
- tan(arctan x) = x for all x

BUT:
- arcsin(sin x) = x only if -π/2 ≤ x ≤ π/2
- arccos(cos x) = x only if 0 ≤ x ≤ π
- arctan(tan x) = x only if -π/2 < x < π/2

**Example 38**: Evaluate sin(arcsin(0.3))
- sin(arcsin(0.3)) = 0.3 (by identity)

**Example 39**: Evaluate arcsin(sin(5π/6))
- sin(5π/6) = 1/2
- arcsin(1/2) = π/6 (NOT 5π/6, since range of arcsin is [-π/2, π/2])

**Example 40**: Evaluate cos(arcsin(3/5))
- Let θ = arcsin(3/5), so sin θ = 3/5 and θ is in [-π/2, π/2]
- In this range, cos θ ≥ 0
- cos²θ = 1 - sin²θ = 1 - 9/25 = 16/25
- cos θ = 4/5

### Solving Equations with Inverse Trig

**Example 41**: Solve 3 sin x - 2 = 0 for x in [0, 2π]
- sin x = 2/3
- x = arcsin(2/3) ≈ 0.7297 (Quadrant I)
- x = π - arcsin(2/3) ≈ 2.4119 (Quadrant II)

---

## 4.8 Applications of Trigonometry

### Right Triangle Applications

**Example 42**: A surveyor stands 50 meters from a building. The angle of elevation to the top is 68°. Find building height.
- tan 68° = h/50
- h = 50 tan 68° ≈ 123.7 meters

**Example 43**: A cable 150 feet long runs from the top of a pole to a point on the ground 60 feet from the base. Find angle the cable makes with ground.
- cos θ = 60/150 = 0.4
- θ = arccos(0.4) ≈ 66.4°

### Navigation and Bearing

**Example 44**: A ship sails 40 km on bearing 120°, then 30 km on bearing 210°. Find distance from starting point.
- Use component method or law of cosines
- (Solution requires vectors or law of cosines from Unit 3)

### Harmonic Motion

**Simple harmonic motion**: d(t) = A cos(ωt) or d(t) = A sin(ωt)
- A = amplitude
- ω = angular frequency
- Period = 2π/ω

**Example 45**: A weight on a spring oscillates with d(t) = 5 cos(2πt) where d is inches and t is seconds.
- Amplitude: 5 inches
- Period: 2π/(2π) = 1 second
- Maximum displacement: 5 inches
- At t = 0.25: d(0.25) = 5 cos(π/2) = 0

---

## Summary of Key Concepts

### Angle Measurement
- **Degrees**: 360° in full rotation
- **Radians**: 2π in full rotation
- **Conversion**: multiply by π/180 or 180/π
- **Arc length**: s = rθ
- **Sector area**: A = (1/2)r²θ

### Right Triangle Trig
- **SOH-CAH-TOA**
- **Special triangles**: 30-60-90 and 45-45-90
- **Cofunctions**: sin θ = cos(90° - θ)

### Unit Circle
- **P(θ) = (cos θ, sin θ)**
- **Reference angles**
- **ASTC**: Sign rules by quadrant

### Graphs
| Function | Period | Domain Issues | Range |
|----------|--------|---------------|-------|
| sin x, cos x | 2π | None | [-1, 1] |
| tan x, cot x | π | Asymptotes | All reals |
| sec x, csc x | 2π | Asymptotes | (-∞,-1]∪[1,∞) |

### Inverse Functions
| Function | Domain | Range |
|----------|--------|-------|
| arcsin x | [-1,1] | [-π/2, π/2] |
| arccos x | [-1,1] | [0, π] |
| arctan x | All reals | (-π/2, π/2) |

### Important Formulas
- **Sinusoidal**: y = A sin(B(x-C)) + D
- **Period**: 2π/B (sin, cos, sec, csc), π/B (tan, cot)
- **Amplitude**: |A| (sin, cos only)
- **Linear/Angular speed**: v = rω
