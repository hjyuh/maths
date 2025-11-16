# Calculus 1 - Unit 1: Limits and Continuity - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100**

---

## Instructions
- Show all work for full credit
- Simplify all final answers
- No calculators allowed
- Use proper mathematical notation
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

**Choose the best answer for each question.**

1. What is lim[x→3] (x² + 2x - 15)/(x - 3)?
   - A) 3
   - B) 5
   - C) 8
   - D) Does not exist

2. If lim[x→c] f(x) = 5 and lim[x→c] g(x) = -2, then lim[x→c] [2f(x) - 3g(x)] equals:
   - A) 4
   - B) 16
   - C) -16
   - D) 10

3. For the function f(x) = {x² if x < 1; 2x if x ≥ 1}, what is lim[x→1] f(x)?
   - A) 1
   - B) 2
   - C) Does not exist
   - D) 3

4. What is lim[x→∞] (3x² - 5x + 1)/(x² + 2)?
   - A) 0
   - B) 3
   - C) ∞
   - D) -5

5. Which of the following is NOT a requirement for f to be continuous at x = c?
   - A) f(c) exists
   - B) lim[x→c] f(x) exists
   - C) f'(c) exists
   - D) lim[x→c] f(x) = f(c)

6. What is lim[x→0] sin(4x)/x?
   - A) 0
   - B) 1
   - C) 4
   - D) Does not exist

7. The function f(x) = 1/(x - 2) has:
   - A) A horizontal asymptote at y = 2
   - B) A vertical asymptote at x = 2
   - C) No asymptotes
   - D) Both horizontal and vertical asymptotes

8. If f is continuous on [2, 5] with f(2) = -3 and f(5) = 7, which theorem guarantees that f(c) = 0 for some c in (2, 5)?
   - A) Squeeze Theorem
   - B) Intermediate Value Theorem
   - C) Mean Value Theorem
   - D) Extreme Value Theorem

9. What is lim[x→0⁺] 1/x?
   - A) -∞
   - B) 0
   - C) 1
   - D) ∞

10. For which value of k is f(x) = {x² + k if x ≤ 2; 3x if x > 2} continuous at x = 2?
    - A) k = -2
    - B) k = 2
    - C) k = 4
    - D) k = 6

---

## Part 2: Short Answer (40 points, 5 points each)

**Show all work. Simplify your answers.**

11. Evaluate lim[h→0] ((3 + h)² - 9)/h

12. Evaluate lim[x→4] (x² - 16)/(√x - 2)

13. Evaluate lim[x→0] (√(x + 9) - 3)/x

14. Evaluate lim[x→∞] (2x³ - 5x)/(x³ + 3x² - 1)

15. For f(x) = {x² - 1 if x < 2; 2x + k if x ≥ 2}, find the value of k that makes f continuous at x = 2.

16. Use the Squeeze Theorem to find lim[x→0] x² sin(1/x).

17. Determine if g(x) = (x² - 25)/(x - 5) is continuous at x = 5. If not, identify the type of discontinuity.

18. Evaluate lim[x→0] sin(6x)/(3x)

---

## Part 3: Free Response (30 points)

**Show all work and explain your reasoning. Partial credit will be awarded.**

### Problem 19 (10 points)

Let f(x) = {ax + b if x < 1; x² + 2 if x ≥ 1}

a) Find values of a and b that make f continuous at x = 1. (5 points)

b) With your values from part (a), sketch a graph of f(x). (5 points)

---

### Problem 20 (10 points)

Consider the function h(x) = x³ - 2x - 5.

a) Evaluate h(2) and h(3). (2 points)

b) Use the Intermediate Value Theorem to prove that h has at least one root in the interval [2, 3]. (5 points)

c) In which half of the interval [2, 3] does the root lie? Justify your answer. (3 points)

---

### Problem 21 (10 points)

Evaluate the following limit. Show all steps clearly.

lim[x→0] (1/(x + 2) - 1/2)/x

---

## Bonus (5 points)

**Bonus Problem:** Evaluate lim[x→∞] (√(x² + 4x) - x)

*Hint: Multiply by the conjugate.*

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **C) 8**
   - Factor: (x - 3)(x + 5)/(x - 3) = x + 5 → 3 + 5 = 8

2. **B) 16**
   - 2(5) - 3(-2) = 10 + 6 = 16

3. **C) Does not exist**
   - Left limit: lim[x→1⁻] x² = 1
   - Right limit: lim[x→1⁺] 2x = 2
   - Since 1 ≠ 2, limit DNE

4. **B) 3**
   - Degrees equal, so limit is ratio of leading coefficients: 3/1 = 3

5. **C) f'(c) exists**
   - Derivative is not required for continuity

6. **C) 4**
   - lim[x→0] sin(4x)/x = 4 · lim[x→0] sin(4x)/(4x) = 4(1) = 4

7. **B) A vertical asymptote at x = 2**
   - Denominator = 0 when x = 2

8. **B) Intermediate Value Theorem**
   - IVT states continuous functions take on all intermediate values

9. **D) ∞**
   - As x approaches 0 from the right, 1/x increases without bound

10. **B) k = 2**
    - Left: lim[x→2⁻] (x² + k) = 4 + k
    - Right: lim[x→2⁺] 3x = 6
    - For continuity: 4 + k = 6, so k = 2

---

## Part 2: Short Answer

11. **Answer: 6**
    ```
    lim[h→0] ((3 + h)² - 9)/h
    = lim[h→0] (9 + 6h + h² - 9)/h
    = lim[h→0] (6h + h²)/h
    = lim[h→0] (6 + h)
    = 6
    ```

12. **Answer: 16**
    ```
    lim[x→4] (x² - 16)/(√x - 2)
    = lim[x→4] (x - 4)(x + 4)/(√x - 2)

    Note: √x - 2 = 0 when x = 4, so rationalize denominator
    Multiply by (√x + 2)/(√x + 2):

    = lim[x→4] [(x - 4)(x + 4)(√x + 2)]/(x - 4)
    = lim[x→4] (x + 4)(√x + 2)
    = (8)(4) = 16
    ```

13. **Answer: 1/6**
    ```
    lim[x→0] (√(x + 9) - 3)/x

    Multiply by conjugate:
    = lim[x→0] [(√(x + 9) - 3)(√(x + 9) + 3)]/[x(√(x + 9) + 3)]
    = lim[x→0] (x + 9 - 9)/[x(√(x + 9) + 3)]
    = lim[x→0] x/[x(√(x + 9) + 3)]
    = lim[x→0] 1/(√(x + 9) + 3)
    = 1/(3 + 3) = 1/6
    ```

14. **Answer: 2**
    ```
    lim[x→∞] (2x³ - 5x)/(x³ + 3x² - 1)

    Divide by x³:
    = lim[x→∞] (2 - 5/x²)/(1 + 3/x - 1/x³)
    = (2 - 0)/(1 + 0 - 0)
    = 2
    ```

15. **Answer: k = -1**
    ```
    For continuity at x = 2:
    lim[x→2⁻] f(x) = lim[x→2⁺] f(x) = f(2)

    Left: lim[x→2⁻] (x² - 1) = 4 - 1 = 3
    Right: lim[x→2⁺] (2x + k) = 4 + k

    For continuity: 3 = 4 + k
    Therefore: k = -1
    ```

16. **Answer: 0**
    ```
    We know: -1 ≤ sin(1/x) ≤ 1

    Multiply by x²: -x² ≤ x² sin(1/x) ≤ x²

    Since lim[x→0] (-x²) = 0 and lim[x→0] x² = 0,
    by Squeeze Theorem: lim[x→0] x² sin(1/x) = 0
    ```

17. **Answer: Not continuous at x = 5; removable discontinuity**
    ```
    g(5) = (25 - 25)/(5 - 5) = 0/0, which is undefined
    Therefore g(5) does not exist

    However: lim[x→5] (x² - 25)/(x - 5)
    = lim[x→5] (x - 5)(x + 5)/(x - 5)
    = lim[x→5] (x + 5) = 10

    Since the limit exists but g(5) ≠ limit,
    this is a removable discontinuity
    ```

18. **Answer: 2**
    ```
    lim[x→0] sin(6x)/(3x)
    = (1/3) · 6 · lim[x→0] sin(6x)/(6x)
    = 2 · (1)
    = 2
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

**a) Find a and b (5 points)**

For continuity at x = 1:
```
lim[x→1⁻] f(x) = lim[x→1⁺] f(x) = f(1)

Left limit: lim[x→1⁻] (ax + b) = a + b
Right limit: lim[x→1⁺] (x² + 2) = 1 + 2 = 3
f(1) = 1² + 2 = 3 (since x = 1 falls in x ≥ 1 case)

For continuity: a + b = 3
```

**There are infinitely many solutions.** Any a and b where a + b = 3 works.

**Example:** a = 1, b = 2 or a = 3, b = 0

**Grading rubric:**
- Recognizing need for left limit = right limit (2 points)
- Computing limits correctly (2 points)
- Finding relationship a + b = 3 (1 point)

**b) Sketch (5 points)**

For a = 1, b = 2:
- For x < 1: f(x) = x + 2 (line with slope 1)
- For x ≥ 1: f(x) = x² + 2 (parabola)
- Both pieces meet at (1, 3)

**Grading rubric:**
- Correct linear portion (2 points)
- Correct parabolic portion (2 points)
- Pieces connect at (1, 3) (1 point)

---

### Problem 20 (10 points)

**a) Evaluate h(2) and h(3) (2 points)**

```
h(2) = 2³ - 2(2) - 5 = 8 - 4 - 5 = -1
h(3) = 3³ - 2(3) - 5 = 27 - 6 - 5 = 16
```

**b) IVT proof (5 points)**

```
h is a polynomial, so h is continuous on [2, 3]

From part (a): h(2) = -1 < 0 and h(3) = 16 > 0

Since h is continuous and 0 is between h(2) and h(3),
by the Intermediate Value Theorem, there exists at least
one value c in (2, 3) such that h(c) = 0.

Therefore, h has at least one root in [2, 3].
```

**Grading rubric:**
- Stating h is continuous (1 point)
- Noting sign change (2 points)
- Invoking IVT correctly (1 point)
- Conclusion (1 point)

**c) Which half? (3 points)**

```
Test midpoint: h(2.5) = (2.5)³ - 2(2.5) - 5
= 15.625 - 5 - 5 = 5.625 > 0

Since h(2) = -1 < 0 and h(2.5) = 5.625 > 0,
the root lies in the interval [2, 2.5]
(the left half of [2, 3])
```

**Grading rubric:**
- Computing h(2.5) (1 point)
- Analyzing sign change (1 point)
- Correct conclusion (1 point)

---

### Problem 21 (10 points)

```
lim[x→0] (1/(x + 2) - 1/2)/x

Find common denominator:
= lim[x→0] [(2 - (x + 2))/(2(x + 2))]/x
= lim[x→0] [(2 - x - 2)/(2(x + 2))]/x
= lim[x→0] [-x/(2(x + 2))]/x
= lim[x→0] -x/[2x(x + 2)]
= lim[x→0] -1/[2(x + 2)]
= -1/[2(2)]
= -1/4
```

**Grading rubric:**
- Finding common denominator (3 points)
- Simplifying complex fraction (3 points)
- Canceling x (2 points)
- Final answer (2 points)

---

## Bonus (5 points)

```
lim[x→∞] (√(x² + 4x) - x)

Multiply by conjugate:
= lim[x→∞] [(√(x² + 4x) - x)(√(x² + 4x) + x)]/(√(x² + 4x) + x)
= lim[x→∞] (x² + 4x - x²)/(√(x² + 4x) + x)
= lim[x→∞] 4x/(√(x² + 4x) + x)

Divide numerator and denominator by x:
= lim[x→∞] 4/(√(1 + 4/x) + 1)
= 4/(√1 + 1)
= 4/2
= 2
```

**Answer: 2**

---

## Grading Rubric

### Performance Levels

- **A (90-100):** Demonstrates mastery of limits and continuity; can solve complex problems; shows clear understanding of theorems
- **B (80-89):** Solid understanding; minor computational errors; understands main concepts
- **C (70-79):** Basic understanding; struggles with complex problems; can apply standard techniques
- **D (60-69):** Significant gaps in understanding; difficulty with algebraic manipulation
- **F (0-59):** Does not demonstrate basic understanding of limits

### Common Errors to Watch For

1. **Confusing lim[x→c] f(x) with f(c)**
2. **Not checking if limit exists before evaluating**
3. **Algebraic errors when simplifying**
4. **Forgetting to rationalize when needed**
5. **Misapplying limit laws**
6. **Not recognizing indeterminate forms**
7. **Confusion about one-sided vs. two-sided limits**
8. **Incorrect application of IVT**

---

**Total: _____ / 100 (_____ / 105 with bonus)**
