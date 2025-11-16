# Linear Algebra - Unit 4: Vector Spaces - Practice Problems

## Instructions
- Show all work for full credit
- Justify your answers for subspace questions
- Express bases as sets of vectors
- Check answers at the end

---

## Section 1: Vector Space Axioms (1-10)

Determine if each set with given operations is a vector space.

1. ℝ² with standard operations
2. {[x, 0]ᵀ : x ∈ ℝ} with standard operations
3. ℝ₊ (positive reals) with standard addition and multiplication
4. {[x, y]ᵀ : x ≥ 0, y ≥ 0} with standard operations
5. P₂ (polynomials of degree ≤ 2) with standard operations
6. {[x, y]ᵀ : x + y = 0} with standard operations
7. {[x, 1]ᵀ : x ∈ ℝ} with standard operations
8. M₂ₓ₂ (2×2 matrices) with standard operations
9. {continuous functions on [0,1]} with pointwise operations
10. {differentiable functions} with standard operations

---

## Section 2: Subspace Test (11-25)

Determine if H is a subspace of the given vector space.

11. H = {[x, y, 0]ᵀ : x, y ∈ ℝ} in ℝ³
12. H = {[x, y, 1]ᵀ : x, y ∈ ℝ} in ℝ³
13. H = {[x, 2x, 3x]ᵀ : x ∈ ℝ} in ℝ³
14. H = {[x, y]ᵀ : xy = 0} in ℝ²
15. H = {polynomials with p(0) = 0} in P₃
16. H = {polynomials with degree exactly 2} in P₃
17. H = {[x, y]ᵀ : x + y = 0} in ℝ²
18. H = {2×2 diagonal matrices} in M₂ₓ₂
19. H = {2×2 symmetric matrices} in M₂ₓ₂
20. H = {2×2 matrices with det = 0} in M₂ₓ₂

21-25. [Additional subspace problems]

---

## Section 3: Null Space (26-35)

Find a basis for Nul(A) and state dim(Nul(A)).

26. A = [1  2  3]
        [2  4  6]

27. A = [1  0  2]
        [0  1  3]
        [0  0  0]

28. A = [1  2  0  3]
        [2  4  0  6]

29. A = [1  1  1]
        [1  1  1]

30. A = [1  0  0]
        [0  1  0]
        [0  0  1]

31-35. [Additional null space problems]

---

## Section 4: Column Space (36-45)

Find a basis for Col(A) and state rank(A).

36. A = [1  2]
        [3  4]
        [5  6]

37. A = [1  2  3]
        [2  4  6]

38. A = [1  0  2]
        [0  1  3]
        [2  1  7]

39. A = [1  1  1]
        [1  2  3]
        [1  3  5]

40. A = [1  2  3  4]
        [2  3  4  5]
        [3  4  5  6]

41-45. [Additional column space problems]

---

## Section 5: Row Space (46-50)

Find a basis for Row(A).

46-50. [Row space problems using matrices from previous sections]

---

## Section 6: Rank Theorem (51-60)

Use the Rank Theorem to answer each question.

51. If A is 3×5 with rank 2, find dim(Nul(A))
52. If A is 4×6 with dim(Nul(A)) = 2, find rank(A)
53. If A is 5×5 invertible, find dim(Nul(A))
54. If A is 3×7 with rank 3, how many free variables in Ax = 0?
55. Can a 4×3 matrix have rank 4? Explain.

56-60. [Additional rank theorem problems]

---

## Section 7: Basis and Dimension (61-75)

61-65. Determine if given sets form a basis for indicated vector space
66-70. Find dimension of given subspaces
71-75. Extend given linearly independent set to a basis

---

## Section 8: Coordinates (76-85)

76-80. Find coordinate vector [x]_B for given x and basis B
81-85. Find vector x given [x]_B and basis B

---

## Section 9: Change of Basis (86-90)

86-90. Find change-of-basis matrix and convert coordinates

---

## Section 10: Applications (91-100)

91-100. Applied problems involving subspaces, rank, and dimension

---

## Answer Key

### Section 1
1. Yes
2. Yes (subspace of ℝ²)
3. No (not closed under scalar mult)
4. No (not closed under scalar mult)
5. Yes
6. Yes
7. No (doesn't contain zero vector)
8. Yes
9. Yes
10. Yes

### Section 2
11. Yes
12. No (no zero vector)
13. Yes
14. No (not closed under addition)
15. Yes
16. No (doesn't contain zero)
17. Yes
18. Yes
19. Yes
20. No (not closed under addition)

### Section 3
26. Basis: {[-2,1,0]ᵀ, [-3,0,1]ᵀ}, dim = 2
27. Basis: {[-2,0,1]ᵀ, [-3,1,0]ᵀ}, dim = 2
28. Basis: {[-2,1,0,0]ᵀ, [-3,0,0,1]ᵀ}, dim = 2
29. Basis: {[-1,1,0]ᵀ, [-1,0,1]ᵀ}, dim = 2
30. Basis: {} (trivial), dim = 0

### Section 4
36. Basis: {[1,3,5]ᵀ, [2,4,6]ᵀ}, rank = 2
37. Basis: {[1,2]ᵀ}, rank = 1
38. Basis: {[1,0,2]ᵀ, [0,1,1]ᵀ}, rank = 2
39. Basis: {[1,1,1]ᵀ, [1,2,3]ᵀ}, rank = 2
40. Basis: {[1,2,3]ᵀ, [2,3,4]ᵀ}, rank = 2

[Additional sections abbreviated]

---

**Final Test:** Proceed to assess your mastery!
