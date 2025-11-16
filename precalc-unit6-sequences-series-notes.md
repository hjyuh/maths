# Precalculus Unit 6: Sequences, Series & Misc Topics - Notes

## 9.2 Binomial Theorem

### Pascal's Triangle

Pattern for binomial coefficients:
```
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5  10  10   5   1
```

Each entry is the sum of the two numbers above it.

### Binomial Coefficients

**Notation**: ₙCᵣ or (n choose r) or "n choose r"

**Formula**: **ₙCᵣ = n!/(r!(n-r)!)**

where n! = n(n-1)(n-2)···3·2·1

**Example 1**: Calculate ₅C₂
- ₅C₂ = 5!/(2!·3!)
- = (5·4·3·2·1)/((2·1)(3·2·1))
- = 120/(2·6)
- = **10**

### Properties of Binomial Coefficients

- **ₙC₀ = 1**
- **ₙCₙ = 1**
- **ₙC₁ = n**
- **ₙCᵣ = ₙCₙ₋ᵣ** (symmetry property)

**Example 2**: ₁₀C₈ = ₁₀C₂ = 45

### The Binomial Theorem

For any positive integer n:

**(a + b)ⁿ = ₙC₀aⁿ + ₙC₁aⁿ⁻¹b + ₙC₂aⁿ⁻²b² + ... + ₙCₙbⁿ**

Or using sigma notation:

**(a + b)ⁿ = Σ(k=0 to n) ₙCₖ aⁿ⁻ᵏbᵏ**

### Expanding Binomials

**Example 3**: Expand (x + y)⁴

Using Pascal's triangle (row 4): 1, 4, 6, 4, 1

- (x + y)⁴ = 1x⁴ + 4x³y + 6x²y² + 4xy³ + 1y⁴
- = **x⁴ + 4x³y + 6x²y² + 4xy³ + y⁴**

**Example 4**: Expand (2x - 3)³

Row 3: 1, 3, 3, 1
a = 2x, b = -3

- = 1(2x)³ + 3(2x)²(-3) + 3(2x)(-3)² + 1(-3)³
- = 8x³ + 3(4x²)(-3) + 3(2x)(9) + (-27)
- = 8x³ - 36x² + 54x - 27

**Example 5**: Expand (x + 2)⁵

Row 5: 1, 5, 10, 10, 5, 1

- = x⁵ + 5x⁴(2) + 10x³(4) + 10x²(8) + 5x(16) + 32
- = **x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32**

### Finding a Specific Term

The **(r+1)th term** in expansion of (a + b)ⁿ is:

**Tᵣ₊₁ = ₙCᵣ aⁿ⁻ʳbʳ**

**Example 6**: Find the 4th term in the expansion of (x + 3)⁷

- r = 3 (since we want T₄ = T₃₊₁)
- T₄ = ₇C₃ x⁷⁻³(3)³
- = 35x⁴(27)
- = **945x⁴**

**Example 7**: Find the coefficient of x⁵ in (2x - 1)⁸

Need: (2x)⁸⁻ʳ(-1)ʳ to have x⁵
- 8 - r = 5
- r = 3

T₄ = ₈C₃(2x)⁵(-1)³
= 56(32x⁵)(-1)
= **-1792x⁵**

Coefficient is **-1792**

---

## 9.3 Sequences

### Definition

**Sequence**: Ordered list of numbers
- a₁, a₂, a₃, ..., aₙ, ...
- aₙ is the **nth term** or **general term**

**Example 8**: Sequence 2, 4, 6, 8, 10, ...
- a₁ = 2, a₂ = 4, a₃ = 6
- General term: **aₙ = 2n**

### Arithmetic Sequences

**Definition**: Constant difference between consecutive terms

**Common difference**: d = aₙ₊₁ - aₙ

**General term**: **aₙ = a₁ + (n-1)d**

**Example 9**: Find the 20th term of 5, 8, 11, 14, ...
- a₁ = 5, d = 3
- a₂₀ = 5 + (20-1)(3)
- = 5 + 57
- = **62**

**Example 10**: Find the general term of -3, 1, 5, 9, ...
- a₁ = -3, d = 4
- **aₙ = -3 + (n-1)4 = -3 + 4n - 4 = 4n - 7**

### Geometric Sequences

**Definition**: Constant ratio between consecutive terms

**Common ratio**: r = aₙ₊₁/aₙ

**General term**: **aₙ = a₁ · rⁿ⁻¹**

**Example 11**: Find the 8th term of 3, 6, 12, 24, ...
- a₁ = 3, r = 2
- a₈ = 3(2)⁷
- = 3(128)
- = **384**

**Example 12**: Find the general term of 81, 27, 9, 3, ...
- a₁ = 81, r = 1/3
- **aₙ = 81(1/3)ⁿ⁻¹** or **aₙ = 81/3ⁿ⁻¹ = 3⁵⁻ⁿ**

### Recursive Formulas

Define each term using previous terms.

**Example 13**: Fibonacci sequence
- a₁ = 1, a₂ = 1
- **aₙ = aₙ₋₁ + aₙ₋₂** for n ≥ 3
- Sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...

**Example 14**: Convert recursive to explicit
- a₁ = 2, aₙ = 3aₙ₋₁
- This is geometric with r = 3
- **aₙ = 2(3)ⁿ⁻¹**

### Finding Terms

**Example 15**: If a₃ = 12 and a₇ = 28 in an arithmetic sequence, find a₁ and d.

Using aₙ = a₁ + (n-1)d:
- a₃ = a₁ + 2d = 12
- a₇ = a₁ + 6d = 28

Subtract: 4d = 16, so d = 4
Substitute: a₁ + 8 = 12, so a₁ = 4

**a₁ = 4, d = 4**

---

## 9.4 Series

### Definition

**Series**: Sum of terms in a sequence

**Finite series**: Sₙ = a₁ + a₂ + a₃ + ... + aₙ

**Infinite series**: S = a₁ + a₂ + a₃ + ...

### Sigma Notation

**Σ(i=1 to n) aᵢ** = a₁ + a₂ + ... + aₙ

**Example 16**: Evaluate Σ(k=1 to 5) (2k + 1)
- = (2·1+1) + (2·2+1) + (2·3+1) + (2·4+1) + (2·5+1)
- = 3 + 5 + 7 + 9 + 11
- = **35**

**Example 17**: Write in sigma notation: 1 + 4 + 9 + 16 + 25
- = 1² + 2² + 3² + 4² + 5²
- = **Σ(k=1 to 5) k²**

### Arithmetic Series

**Sum formula**: **Sₙ = n(a₁ + aₙ)/2**

or equivalently: **Sₙ = n[2a₁ + (n-1)d]/2**

**Example 18**: Find sum of first 50 positive integers
- a₁ = 1, aₙ = 50, n = 50
- S₅₀ = 50(1 + 50)/2
- = 50(51)/2
- = **1275**

**Example 19**: Find sum of 5 + 9 + 13 + ... + 101
- a₁ = 5, d = 4, aₙ = 101
- First find n: 101 = 5 + (n-1)4
- 96 = 4n - 4
- n = 25
- S₂₅ = 25(5 + 101)/2 = 25(106)/2 = **1325**

### Geometric Series

**Finite geometric series**: **Sₙ = a₁(1 - rⁿ)/(1 - r)** for r ≠ 1

**Example 20**: Find sum of 2 + 6 + 18 + 54 + 162
- a₁ = 2, r = 3, n = 5
- S₅ = 2(1 - 3⁵)/(1 - 3)
- = 2(1 - 243)/(-2)
- = 2(-242)/(-2)
- = **242**

**Example 21**: Find sum: Σ(k=1 to 8) 3(2)ᵏ⁻¹
- This is geometric: a₁ = 3, r = 2, n = 8
- S₈ = 3(1 - 2⁸)/(1 - 2)
- = 3(1 - 256)/(-1)
- = 3(-255)/(-1)
- = **765**

### Infinite Geometric Series

If **|r| < 1**, the infinite series converges:

**S = a₁/(1 - r)**

If **|r| ≥ 1**, the series diverges (no sum).

**Example 22**: Find sum of 1 + 1/2 + 1/4 + 1/8 + ...
- a₁ = 1, r = 1/2
- |r| < 1, so converges
- S = 1/(1 - 1/2) = 1/(1/2) = **2**

**Example 23**: Find sum of 6 - 2 + 2/3 - 2/9 + ...
- a₁ = 6, r = -1/3
- |r| = 1/3 < 1, converges
- S = 6/(1 - (-1/3)) = 6/(4/3) = **9/2**

**Example 24**: Express 0.333... as a fraction
- 0.333... = 0.3 + 0.03 + 0.003 + ...
- = 3/10 + 3/100 + 3/1000 + ...
- This is geometric: a₁ = 3/10, r = 1/10
- S = (3/10)/(1 - 1/10) = (3/10)/(9/10) = 3/9 = **1/3**

### Series Formulas Summary

**Arithmetic**: Sₙ = n(a₁ + aₙ)/2

**Geometric (finite)**: Sₙ = a₁(1 - rⁿ)/(1 - r)

**Geometric (infinite, |r| < 1)**: S = a₁/(1 - r)

**Special sums**:
- Σ(i=1 to n) c = cn
- Σ(i=1 to n) i = n(n+1)/2
- Σ(i=1 to n) i² = n(n+1)(2n+1)/6
- Σ(i=1 to n) i³ = [n(n+1)/2]²

---

## 6.1 Vectors (Optional)

### Vector Notation

**Vector**: Quantity with magnitude and direction

**Notation**: v⃗ or **v** = ⟨a, b⟩ (component form)
- a = horizontal component
- b = vertical component

**Example 25**: v = ⟨3, 4⟩
- Horizontal: 3 units right
- Vertical: 4 units up

### Magnitude

**||v|| = √(a² + b²)**

**Example 26**: Find ||v|| if v = ⟨3, 4⟩
- ||v|| = √(9 + 16) = √25 = **5**

### Vector Operations

**Addition**: ⟨a₁, b₁⟩ + ⟨a₂, b₂⟩ = ⟨a₁ + a₂, b₁ + b₂⟩

**Scalar multiplication**: k⟨a, b⟩ = ⟨ka, kb⟩

**Example 27**: If u = ⟨2, 3⟩ and v = ⟨-1, 4⟩, find:
- u + v = ⟨2-1, 3+4⟩ = **⟨1, 7⟩**
- 3u = ⟨6, 9⟩
- u - v = ⟨2-(-1), 3-4⟩ = **⟨3, -1⟩**

### Direction Angle

**tan θ = b/a** where θ is angle from positive x-axis

**Example 28**: Find direction angle of v = ⟨3, 3⟩
- tan θ = 3/3 = 1
- θ = **45°** or **π/4**

### Unit Vectors

**Unit vector**: Magnitude = 1

To find unit vector in direction of v:
**u = v/||v||**

**Example 29**: Find unit vector in direction of v = ⟨8, 6⟩
- ||v|| = √(64 + 36) = 10
- u = ⟨8/10, 6/10⟩ = **⟨4/5, 3/5⟩**

### Dot Product

**u · v = a₁a₂ + b₁b₂**

**Properties**:
- If u · v = 0, vectors are perpendicular
- u · v = ||u|| ||v|| cos θ

**Example 30**: If u = ⟨2, 3⟩ and v = ⟨4, -1⟩
- u · v = 2(4) + 3(-1) = 8 - 3 = **5**

### Applications

**Force, velocity, displacement** are all vector quantities.

**Example 31**: Two forces of 30N and 40N act at right angles. Find resultant.
- F₁ = ⟨30, 0⟩, F₂ = ⟨0, 40⟩
- R = F₁ + F₂ = ⟨30, 40⟩
- ||R|| = √(900 + 1600) = **50 N**

---

## 6.3 Parametric Equations (Optional)

### Definition

**Parametric equations**: Express x and y in terms of a third variable (parameter), usually t.

**x = f(t)**
**y = g(t)**

**Example 32**: x = 2t, y = t + 1
- When t = 0: (0, 1)
- When t = 1: (2, 2)
- When t = 2: (4, 3)

### Converting to Rectangular Form

Eliminate the parameter t.

**Example 33**: Convert to rectangular form
- x = 2t, y = t + 1
- From first: t = x/2
- Substitute: y = x/2 + 1
- **y = (x/2) + 1** or **y = 0.5x + 1**

**Example 34**: Convert x = cos t, y = sin t
- Recall: sin²t + cos²t = 1
- y² + x² = 1
- **x² + y² = 1** (circle)

### Graphing Parametric Equations

Plot points for various t values, then connect.

**Example 35**: Graph x = t², y = 2t for -2 ≤ t ≤ 2

| t | x | y |
|---|---|---|
| -2 | 4 | -4 |
| -1 | 1 | -2 |
| 0 | 0 | 0 |
| 1 | 1 | 2 |
| 2 | 4 | 4 |

Graph shows parabola opening rightward.

### Parametric Form of a Line

**Point-direction form**:
- x = x₀ + at
- y = y₀ + bt

where (x₀, y₀) is a point and ⟨a, b⟩ is direction vector

**Example 36**: Write parametric equations for line through (2, 3) with slope 4.
- Direction vector: ⟨1, 4⟩
- **x = 2 + t**
- **y = 3 + 4t**

### Applications

**Projectile motion**:
- x = (v₀ cos θ)t
- y = h₀ + (v₀ sin θ)t - 16t²

where v₀ = initial velocity, θ = launch angle, h₀ = initial height

**Example 37**: Ball thrown at 45° with speed 60 ft/s from ground level
- x = 60 cos(45°)t = 60(√2/2)t ≈ 42.43t
- y = 60 sin(45°)t - 16t² ≈ 42.43t - 16t²

---

## Summary of Key Concepts

### Binomial Theorem
- Pascal's triangle
- ₙCᵣ = n!/(r!(n-r)!)
- (a + b)ⁿ expansion
- Finding specific terms

### Sequences
- **Arithmetic**: aₙ = a₁ + (n-1)d
- **Geometric**: aₙ = a₁rⁿ⁻¹
- Recursive vs. explicit formulas

### Series
- **Arithmetic sum**: Sₙ = n(a₁ + aₙ)/2
- **Geometric sum**: Sₙ = a₁(1 - rⁿ)/(1 - r)
- **Infinite geometric**: S = a₁/(1 - r) if |r| < 1
- Sigma notation

### Vectors (Optional)
- Component form: ⟨a, b⟩
- Magnitude: ||v|| = √(a² + b²)
- Operations: addition, scalar multiplication
- Dot product: perpendicularity

### Parametric Equations (Optional)
- x = f(t), y = g(t)
- Converting to rectangular form
- Applications in motion

## Important Formulas

- **Binomial coefficient**: ₙCᵣ = n!/(r!(n-r)!)
- **rth term of binomial**: Tᵣ₊₁ = ₙCᵣaⁿ⁻ʳbʳ
- **Arithmetic sequence**: aₙ = a₁ + (n-1)d
- **Geometric sequence**: aₙ = a₁rⁿ⁻¹
- **Arithmetic series**: Sₙ = n(a₁ + aₙ)/2
- **Geometric series**: Sₙ = a₁(1-rⁿ)/(1-r)
- **Infinite geometric**: S = a₁/(1-r), |r| < 1
- **Vector magnitude**: ||v|| = √(a² + b²)
- **Dot product**: u · v = a₁a₂ + b₁b₂
