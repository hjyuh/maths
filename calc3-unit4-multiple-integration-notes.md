# Calculus 3 - Unit 4: Multiple Integration - Notes

## Table of Contents
1. [Double Integrals over Rectangles](#double-integrals-over-rectangles)
2. [Double Integrals over General Regions](#double-integrals-over-general-regions)
3. [Double Integrals in Polar Coordinates](#double-integrals-in-polar-coordinates)
4. [Applications of Double Integrals](#applications-of-double-integrals)
5. [Triple Integrals](#triple-integrals)
6. [Triple Integrals in Cylindrical Coordinates](#triple-integrals-in-cylindrical-coordinates)
7. [Triple Integrals in Spherical Coordinates](#triple-integrals-in-spherical-coordinates)
8. [Change of Variables and Jacobians](#change-of-variables-and-jacobians)
9. [Key Formulas and Reference](#key-formulas-and-reference)

---

## Standards Alignment
- **Evaluating double and triple integrals**
- **Converting between coordinate systems**
- **Computing areas, volumes, and mass**
- **Using polar, cylindrical, and spherical coordinates**

---

## Essential Questions
- How do we extend integration to functions of multiple variables?
- When should we use different coordinate systems?
- How do we calculate volumes and centroids?

---

## Double Integrals over Rectangles

### Definition

For f(x, y) defined on rectangle R = [a, b] × [c, d]:

```
∬_R f(x, y) dA = lim[m,n→∞] ΣΣ f(x_i*, y_j*) ΔA
```

### Fubini's Theorem

If f is continuous on R = [a, b] × [c, d], then:

```
∬_R f(x, y) dA = ∫_c^d ∫_a^b f(x, y) dx dy = ∫_a^b ∫_c^d f(x, y) dy dx
```

### Example 1: Double Integral over Rectangle

Evaluate ∬_R (x² + y) dA where R = [0, 2] × [0, 3].

**Solution:**
```
∫_0^3 ∫_0^2 (x² + y) dx dy

= ∫_0^3 [x³/3 + xy]_0^2 dy
= ∫_0^3 (8/3 + 2y) dy
= [8y/3 + y²]_0^3
= 8 + 9
= 17
```

### Example 2: Order of Integration

Evaluate ∫_0^1 ∫_0^2 xe^(xy) dy dx.

**Solution:**
```
∫_0^1 [e^(xy)]_0^2 dx
= ∫_0^1 (e^(2x) - 1) dx
= [e^(2x)/2 - x]_0^1
= (e²/2 - 1) - (1/2 - 0)
= e²/2 - 3/2
```

### Properties

1. ∬_R [f(x,y) + g(x,y)] dA = ∬_R f dA + ∬_R g dA
2. ∬_R cf(x,y) dA = c∬_R f dA
3. If f(x,y) ≥ 0, then ∬_R f dA ≥ 0
4. Area of R = ∬_R 1 dA

---

## Double Integrals over General Regions

### Type I Region

Region between two functions of x:
```
D = {(x, y) : a ≤ x ≤ b, g₁(x) ≤ y ≤ g₂(x)}

∬_D f(x, y) dA = ∫_a^b ∫_{g₁(x)}^{g₂(x)} f(x, y) dy dx
```

### Type II Region

Region between two functions of y:
```
D = {(x, y) : c ≤ y ≤ d, h₁(y) ≤ x ≤ h₂(y)}

∬_D f(x, y) dA = ∫_c^d ∫_{h₁(y)}^{h₂(y)} f(x, y) dx dy
```

### Example 3: Type I Region

Evaluate ∬_D xy dA where D is bounded by y = x² and y = x.

**Solution:**
```
Intersection points: x² = x → x(x-1) = 0 → x = 0, 1
For 0 ≤ x ≤ 1: x² ≤ y ≤ x

∫_0^1 ∫_{x²}^x xy dy dx
= ∫_0^1 [xy²/2]_{x²}^x dx
= ∫_0^1 (x³/2 - x⁵/2) dx
= [x⁴/8 - x⁶/12]_0^1
= 1/8 - 1/12
= 3/24 - 2/24
= 1/24
```

### Example 4: Reversing Order of Integration

Reverse the order: ∫_0^1 ∫_0^x f(x,y) dy dx

**Solution:**
```
Original region: 0 ≤ x ≤ 1, 0 ≤ y ≤ x

Reversed: For 0 ≤ y ≤ 1, y ≤ x ≤ 1

∫_0^1 ∫_y^1 f(x,y) dx dy
```

### Example 5: Evaluating by Reversing Order

Evaluate ∫_0^1 ∫_x^1 e^(y²) dy dx.

**Solution:**
```
Cannot integrate e^(y²) with respect to y directly.
Reverse order:

Region: 0 ≤ x ≤ 1, x ≤ y ≤ 1
Reversed: 0 ≤ y ≤ 1, 0 ≤ x ≤ y

∫_0^1 ∫_0^y e^(y²) dx dy
= ∫_0^1 xe^(y²)|_0^y dy
= ∫_0^1 ye^(y²) dy
= [e^(y²)/2]_0^1
= (e - 1)/2
```

---

## Double Integrals in Polar Coordinates

### Polar Coordinates

```
x = r cos θ
y = r sin θ
r² = x² + y²
tan θ = y/x
```

### Polar Double Integral

```
∬_D f(x, y) dA = ∫_α^β ∫_{r₁(θ)}^{r₂(θ)} f(r cos θ, r sin θ) r dr dθ
```

**Note:** The extra r comes from the Jacobian.

### Example 6: Circle in Polar Coordinates

Evaluate ∬_D (x² + y²) dA where D is the disk x² + y² ≤ 4.

**Solution:**
```
In polar: x² + y² = r², region is 0 ≤ r ≤ 2, 0 ≤ θ ≤ 2π

∫_0^{2π} ∫_0^2 r² · r dr dθ
= ∫_0^{2π} ∫_0^2 r³ dr dθ
= ∫_0^{2π} [r⁴/4]_0^2 dθ
= ∫_0^{2π} 4 dθ
= 8π
```

### Example 7: Region Between Circles

Find the area between r = 2 and r = 4.

**Solution:**
```
∫_0^{2π} ∫_2^4 r dr dθ
= ∫_0^{2π} [r²/2]_2^4 dθ
= ∫_0^{2π} (8 - 2) dθ
= ∫_0^{2π} 6 dθ
= 12π
```

### Example 8: Cardioid

Find the area enclosed by r = 1 + cos θ.

**Solution:**
```
A = ∫_0^{2π} ∫_0^{1+cos θ} r dr dθ
  = ∫_0^{2π} [r²/2]_0^{1+cos θ} dθ
  = ∫_0^{2π} (1 + cos θ)²/2 dθ
  = (1/2)∫_0^{2π} (1 + 2cos θ + cos²θ) dθ
  = (1/2)∫_0^{2π} [1 + 2cos θ + (1 + cos 2θ)/2] dθ
  = (1/2)∫_0^{2π} [3/2 + 2cos θ + cos 2θ/2] dθ
  = (1/2)[3θ/2 + 2sin θ + sin 2θ/4]_0^{2π}
  = (1/2)(3π)
  = 3π/2
```

---

## Applications of Double Integrals

### Area

```
A = ∬_D 1 dA
```

### Volume Under Surface

Volume between z = f(x, y) and xy-plane:
```
V = ∬_D f(x, y) dA
```

### Example 9: Volume

Find the volume under z = 4 - x² - y² above the xy-plane.

**Solution:**
```
Region: x² + y² ≤ 4 (where z ≥ 0)

In polar: 0 ≤ r ≤ 2, 0 ≤ θ ≤ 2π

V = ∫_0^{2π} ∫_0^2 (4 - r²) r dr dθ
  = ∫_0^{2π} ∫_0^2 (4r - r³) dr dθ
  = ∫_0^{2π} [2r² - r⁴/4]_0^2 dθ
  = ∫_0^{2π} (8 - 4) dθ
  = ∫_0^{2π} 4 dθ
  = 8π
```

### Mass and Center of Mass

For density ρ(x, y):
```
Mass: m = ∬_D ρ(x, y) dA

Moments: M_x = ∬_D yρ(x, y) dA
         M_y = ∬_D xρ(x, y) dA

Center of mass: (x̄, ȳ) = (M_y/m, M_x/m)
```

### Example 10: Center of Mass

Find the center of mass of a triangular plate with vertices (0,0), (2,0), (0,2) with density ρ(x,y) = x + y.

**Solution:**
```
Region: 0 ≤ x ≤ 2, 0 ≤ y ≤ 2-x

m = ∫_0^2 ∫_0^{2-x} (x+y) dy dx
  = ∫_0^2 [xy + y²/2]_0^{2-x} dx
  = ∫_0^2 [x(2-x) + (2-x)²/2] dx
  = ∫_0^2 [2x - x² + 2 - 2x + x²/2] dx
  = ∫_0^2 (2 - x²/2) dx
  = [2x - x³/6]_0^2
  = 4 - 4/3 = 8/3

M_y = ∫_0^2 ∫_0^{2-x} x(x+y) dy dx
    = 8/3 (by symmetry and calculation)

M_x = 8/3 (by symmetry)

Center: (1, 1)
```

---

## Triple Integrals

### Definition

For solid region E:
```
∭_E f(x,y,z) dV = ∫∫∫ f(x,y,z) dz dy dx
```

### Example 11: Triple Integral over Box

Evaluate ∭_E xyz dV where E = [0,1] × [0,2] × [0,3].

**Solution:**
```
∫_0^1 ∫_0^2 ∫_0^3 xyz dz dy dx
= ∫_0^1 ∫_0^2 [xyz²/2]_0^3 dy dx
= ∫_0^1 ∫_0^2 (9xy/2) dy dx
= ∫_0^1 [9xy²/4]_0^2 dx
= ∫_0^1 9x dx
= [9x²/2]_0^1
= 9/2
```

### Type 1 Region (Simple Solid)

```
E = {(x,y,z) : (x,y) ∈ D, u₁(x,y) ≤ z ≤ u₂(x,y)}

∭_E f dV = ∬_D [∫_{u₁(x,y)}^{u₂(x,y)} f(x,y,z) dz] dA
```

### Example 12: Volume of Tetrahedron

Find the volume of the tetrahedron bounded by x + y + z = 1 and the coordinate planes.

**Solution:**
```
E = {(x,y,z) : 0 ≤ x ≤ 1, 0 ≤ y ≤ 1-x, 0 ≤ z ≤ 1-x-y}

V = ∫_0^1 ∫_0^{1-x} ∫_0^{1-x-y} dz dy dx
  = ∫_0^1 ∫_0^{1-x} (1-x-y) dy dx
  = ∫_0^1 [(1-x)y - y²/2]_0^{1-x} dx
  = ∫_0^1 [(1-x)² - (1-x)²/2] dx
  = ∫_0^1 (1-x)²/2 dx
  = [-​(1-x)³/6]_0^1
  = 1/6
```

---

## Triple Integrals in Cylindrical Coordinates

### Cylindrical Coordinates

```
x = r cos θ
y = r sin θ
z = z

dV = r dz dr dθ
```

### Example 13: Cylinder

Find the volume of the region inside x² + y² = 4 between z = 0 and z = 5.

**Solution:**
```
V = ∫_0^{2π} ∫_0^2 ∫_0^5 r dz dr dθ
  = ∫_0^{2π} ∫_0^2 5r dr dθ
  = ∫_0^{2π} [5r²/2]_0^2 dθ
  = ∫_0^{2π} 10 dθ
  = 20π
```

### Example 14: Paraboloid

Find the volume inside z = 9 - r² and above z = 0.

**Solution:**
```
Intersection: 9 - r² = 0 → r = 3

V = ∫_0^{2π} ∫_0^3 ∫_0^{9-r²} r dz dr dθ
  = ∫_0^{2π} ∫_0^3 r(9-r²) dr dθ
  = ∫_0^{2π} ∫_0^3 (9r - r³) dr dθ
  = ∫_0^{2π} [9r²/2 - r⁴/4]_0^3 dθ
  = ∫_0^{2π} (81/2 - 81/4) dθ
  = ∫_0^{2π} 81/4 dθ
  = 81π/2
```

---

## Triple Integrals in Spherical Coordinates

### Spherical Coordinates

```
x = ρ sin φ cos θ
y = ρ sin φ sin θ
z = ρ cos φ

where:
ρ = distance from origin
φ = angle from positive z-axis (0 ≤ φ ≤ π)
θ = angle in xy-plane (0 ≤ θ ≤ 2π)

dV = ρ² sin φ dρ dφ dθ
```

### Example 15: Sphere

Find the volume of a sphere of radius a.

**Solution:**
```
V = ∫_0^{2π} ∫_0^π ∫_0^a ρ² sin φ dρ dφ dθ
  = ∫_0^{2π} ∫_0^π [ρ³/3]_0^a sin φ dφ dθ
  = ∫_0^{2π} ∫_0^π (a³/3) sin φ dφ dθ
  = ∫_0^{2π} (a³/3)[-cos φ]_0^π dθ
  = ∫_0^{2π} (a³/3)(2) dθ
  = (2a³/3)(2π)
  = 4πa³/3
```

### Example 16: Ice Cream Cone

Find the volume inside the cone φ = π/6 and inside the sphere ρ = 2.

**Solution:**
```
V = ∫_0^{2π} ∫_0^{π/6} ∫_0^2 ρ² sin φ dρ dφ dθ
  = ∫_0^{2π} ∫_0^{π/6} [ρ³/3]_0^2 sin φ dφ dθ
  = ∫_0^{2π} ∫_0^{π/6} (8/3) sin φ dφ dθ
  = ∫_0^{2π} (8/3)[-cos φ]_0^{π/6} dθ
  = ∫_0^{2π} (8/3)(1 - √3/2) dθ
  = (8/3)(1 - √3/2)(2π)
  = 16π(2 - √3)/6
```

---

## Change of Variables and Jacobians

### Jacobian Determinant

For transformation x = g(u,v), y = h(u,v):

```
∂(x,y)/∂(u,v) = |∂x/∂u  ∂x/∂v|
                |∂y/∂u  ∂y/∂v|
```

### Change of Variables Formula

```
∬_R f(x,y) dA = ∬_S f(g(u,v), h(u,v)) |∂(x,y)/∂(u,v)| du dv
```

### Example 17: Jacobian for Polar

Find the Jacobian for x = r cos θ, y = r sin θ.

**Solution:**
```
∂x/∂r = cos θ,  ∂x/∂θ = -r sin θ
∂y/∂r = sin θ,  ∂y/∂θ = r cos θ

J = |cos θ    -r sin θ|
    |sin θ     r cos θ|
  = r cos²θ + r sin²θ
  = r

So dA = r dr dθ
```

---

## Key Formulas and Reference

### Double Integrals
```
∬_R f(x,y) dA = ∫_a^b ∫_c^d f(x,y) dy dx
Type I: ∫_a^b ∫_{g₁(x)}^{g₂(x)} f dy dx
Type II: ∫_c^d ∫_{h₁(y)}^{h₂(y)} f dx dy
Polar: ∫_α^β ∫_{r₁}^{r₂} f(r,θ) r dr dθ
```

### Triple Integrals
```
Rectangular: ∫∫∫ f(x,y,z) dx dy dz
Cylindrical: ∫∫∫ f(r,θ,z) r dz dr dθ
Spherical: ∫∫∫ f(ρ,φ,θ) ρ² sin φ dρ dφ dθ
```

### Applications
```
Area: ∬_D 1 dA
Volume: ∭_E 1 dV
Mass: ∬_D ρ(x,y) dA
Center: (x̄, ȳ) = (M_y/m, M_x/m)
```

---

## Practice Problems

1. Evaluate ∬_R xy dA, R = [0,1] × [0,2]
2. Evaluate ∫_0^1 ∫_0^x y dy dx
3. Reverse order: ∫_0^1 ∫_y^1 f(x,y) dx dy
4. Evaluate ∬_D r² dA in polar, D: x² + y² ≤ 1
5. Find volume under z = x + y over triangle (0,0), (1,0), (0,1)
6. Evaluate ∭_E xyz dV, E = [0,1]³
7. Find volume of sphere x² + y² + z² ≤ 9
8. Convert to cylindrical: x² + y² + z² = 25
9. Find Jacobian for u = x + y, v = x - y
10. Evaluate ∫_0^{2π} ∫_0^1 ∫_0^r r dz dr dθ

---

**End of Notes**
