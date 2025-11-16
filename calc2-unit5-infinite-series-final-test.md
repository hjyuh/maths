# Calculus 2 - Unit 5: Infinite Series - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100**

---

## Instructions
- Show all work for full credit
- State which test you use for each problem
- Justify all conclusions
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

**Choose the best answer for each question.**

1. If Σaₙ converges, then:
   - A) lim aₙ = 0
   - B) lim aₙ = 1
   - C) lim aₙ does not exist
   - D) Σ|aₙ| converges

2. The geometric series Σ(n=0 to ∞) (3/5)^n converges to:
   - A) 3/5
   - B) 5/3
   - C) 5/2
   - D) 3/2

3. Which p-series diverges?
   - A) Σ 1/n²
   - B) Σ 1/n^(3/2)
   - C) Σ 1/√n
   - D) Σ 1/n³

4. The Ratio Test is inconclusive when:
   - A) L < 1
   - B) L > 1
   - C) L = 1
   - D) L = 0

5. For the alternating series Σ(-1)^n aₙ to converge, we need:
   - A) aₙ increasing only
   - B) aₙ decreasing and lim aₙ = 0
   - C) lim aₙ = 1
   - D) Σaₙ to converge

6. If a series is absolutely convergent, then it is:
   - A) Divergent
   - B) Conditionally convergent
   - C) Convergent
   - D) May or may not converge

7. The harmonic series Σ(n=1 to ∞) 1/n:
   - A) Converges to 1
   - B) Diverges
   - C) Converges to e
   - D) Converges to 0

8. Which test is best for Σ n!/3^n?
   - A) Integral Test
   - B) Comparison Test
   - C) Ratio Test
   - D) Alternating Series Test

9. The series Σ(-1)^(n+1)/n is:
   - A) Absolutely convergent
   - B) Conditionally convergent
   - C) Divergent
   - D) Geometric

10. If lim(n→∞) aₙ = 5, then Σaₙ:
    - A) Converges
    - B) Diverges
    - C) May converge or diverge
    - D) Converges to 5

---

## Part 2: Short Answer (40 points, 5 points each)

**Show all work. State which test you use.**

11. Determine if Σ(n=1 to ∞) (2n + 1)/(3n - 1) converges or diverges.

12. Find the sum of Σ(n=0 to ∞) 3/4^n.

13. Use the Integral Test to determine if Σ(n=1 to ∞) 1/(n² + 1) converges.

14. Use Direct Comparison to show that Σ(n=1 to ∞) 1/(n³ + 5) converges.

15. Use the Ratio Test on Σ(n=1 to ∞) 2^n/n!.

16. Determine if Σ(n=1 to ∞) (-1)^(n+1)/√n converges.

17. Is Σ(n=1 to ∞) (-1)^n/n² absolutely convergent, conditionally convergent, or divergent?

18. Use the Root Test on Σ(n=1 to ∞) (n/(2n + 1))^n.

---

## Part 3: Free Response (30 points)

**Show all work and explain your reasoning. Partial credit will be awarded.**

### Problem 19 (10 points)

Determine the convergence of Σ(n=1 to ∞) (3n + 2)/(n² - 1).

a) Use the Divergence Test. What can you conclude? (3 points)

b) Use the Limit Comparison Test with an appropriate series. (7 points)

---

### Problem 20 (10 points)

Consider the alternating series Σ(n=1 to ∞) (-1)^(n+1)/(2n + 1).

a) Show that the series converges. (5 points)

b) Estimate the sum using the first 3 terms and find the error bound. (5 points)

---

### Problem 21 (10 points)

Determine if Σ(n=1 to ∞) n²/3^n converges or diverges.

a) State which test is most appropriate and why. (2 points)

b) Apply the test and show all work. (6 points)

c) State your conclusion clearly. (2 points)

---

## Bonus (5 points)

**Bonus Problem:** Show that Σ(n=1 to ∞) 1/n² < 2.

*Hint: Use comparison with ∫(1 to ∞) 1/x² dx and a telescoping series argument.*

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **A) lim aₙ = 0**
   - This is a necessary condition for convergence
   - Note: It's not sufficient (e.g., harmonic series)

2. **C) 5/2**
   - Sum = a/(1 - r) = 1/(1 - 3/5) = 1/(2/5) = 5/2

3. **C) Σ 1/√n**
   - p = 1/2 < 1, so diverges
   - All others have p > 1

4. **C) L = 1**
   - When L = 1, the test gives no information

5. **B) aₙ decreasing and lim aₙ = 0**
   - Both conditions required for Alternating Series Test

6. **C) Convergent**
   - If Σ|aₙ| converges, then Σaₙ converges

7. **B) Diverges**
   - p-series with p = 1 ≤ 1

8. **C) Ratio Test**
   - Factorials indicate Ratio Test

9. **B) Conditionally convergent**
   - Converges by Alternating Series Test
   - Σ|aₙ| = Σ1/n diverges (harmonic)

10. **B) Diverges**
    - By Divergence Test: if lim aₙ ≠ 0, series diverges

---

## Part 2: Short Answer

11. **Answer: Diverges**
    ```
    Use Divergence Test:
    lim(n→∞) (2n + 1)/(3n - 1) = lim(n→∞) (2 + 1/n)/(3 - 1/n)
                                = 2/3 ≠ 0

    By Divergence Test, the series diverges.
    ```

12. **Answer: 4**
    ```
    Geometric series with a = 3, r = 1/4

    Sum = a/(1 - r) = 3/(1 - 1/4)
        = 3/(3/4)
        = 4
    ```

13. **Answer: Converges**
    ```
    Let f(x) = 1/(x² + 1)
    - Continuous, positive, decreasing on [1, ∞) ✓

    ∫(1 to ∞) 1/(x² + 1) dx = lim(t→∞) [arctan(x)]₁ᵗ
                              = lim(t→∞) [arctan(t) - arctan(1)]
                              = π/2 - π/4
                              = π/4

    Since integral converges, series converges.
    ```

14. **Answer: Converges by Direct Comparison**
    ```
    For n ≥ 1: n³ + 5 > n³
    Therefore: 1/(n³ + 5) < 1/n³

    Σ 1/n³ is a p-series with p = 3 > 1, so it converges.

    By Direct Comparison Test, Σ 1/(n³ + 5) converges.
    ```

15. **Answer: Converges**
    ```
    Let aₙ = 2^n/n!

    aₙ₊₁/aₙ = [2^(n+1)/(n+1)!] / [2^n/n!]
             = 2/(n+1)

    L = lim(n→∞) 2/(n+1) = 0 < 1

    By Ratio Test, the series converges.
    ```

16. **Answer: Converges**
    ```
    Use Alternating Series Test:

    1. Is aₙ = 1/√n decreasing?
       √(n+1) > √n, so 1/√(n+1) < 1/√n ✓

    2. Does lim(n→∞) 1/√n = 0? Yes ✓

    By Alternating Series Test, the series converges.
    ```

17. **Answer: Absolutely convergent**
    ```
    Test Σ|aₙ| = Σ 1/n²

    This is a p-series with p = 2 > 1, so it converges.

    Therefore, the original series is absolutely convergent.
    ```

18. **Answer: Converges**
    ```
    Let aₙ = (n/(2n + 1))^n

    ⁿ√aₙ = n/(2n + 1)

    L = lim(n→∞) n/(2n + 1) = lim(n→∞) 1/(2 + 1/n) = 1/2 < 1

    By Root Test, the series converges.
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

**a) Divergence Test (3 points)**

```
lim(n→∞) (3n + 2)/(n² - 1) = lim(n→∞) (3/n + 2/n²)/(1 - 1/n²)
                             = 0/1
                             = 0

The Divergence Test is inconclusive (we can't determine convergence yet).
```

**Grading:**
- Computing limit correctly (2 points)
- Correct conclusion (1 point)

**b) Limit Comparison Test (7 points)**

```
The leading term suggests comparing with Σ 3n/n² = Σ 3/n.

Let aₙ = (3n + 2)/(n² - 1)
Let bₙ = 3/n

lim(n→∞) aₙ/bₙ = lim(n→∞) [(3n + 2)/(n² - 1)] · (n/3)
                = lim(n→∞) n(3n + 2)/(3(n² - 1))
                = lim(n→∞) (3n² + 2n)/(3n² - 3)
                = lim(n→∞) (3 + 2/n)/(3 - 3/n²)
                = 3/3
                = 1

Since 0 < 1 < ∞ and Σ 3/n = 3·Σ 1/n diverges (harmonic series),
by Limit Comparison Test, Σ(3n + 2)/(n² - 1) diverges.
```

**Grading:**
- Choosing appropriate comparison series (2 points)
- Setting up limit correctly (2 points)
- Evaluating limit (2 points)
- Correct conclusion (1 point)

---

### Problem 20 (10 points)

**a) Show convergence (5 points)**

```
Use Alternating Series Test for Σ(-1)^(n+1)/(2n + 1):

1. Is aₙ = 1/(2n + 1) decreasing?
   2(n+1) + 1 = 2n + 3 > 2n + 1
   So 1/(2n + 3) < 1/(2n + 1) ✓

2. Does lim(n→∞) 1/(2n + 1) = 0? Yes ✓

By Alternating Series Test, the series converges.
```

**b) Estimate sum with error (5 points)**

```
S₃ = 1/3 - 1/5 + 1/7
   = 1/3 - 1/5 + 1/7
   = 35/105 - 21/105 + 15/105
   = 29/105
   ≈ 0.276

Error bound: |R₃| ≤ a₄ = 1/(2·4 + 1) = 1/9 ≈ 0.111

Estimate: 0.276 ± 0.111
```

---

### Problem 21 (10 points)

**a) Choose test (2 points)**

```
The series has n² in numerator and exponential 3^n in denominator.

The Ratio Test is most appropriate because:
- It handles exponentials well
- The n² factor can be easily managed in the ratio

Alternatively, Root Test could work but is less convenient.
```

**b) Apply Ratio Test (6 points)**

```
Let aₙ = n²/3^n

aₙ₊₁/aₙ = [(n+1)²/3^(n+1)] / [n²/3^n]
         = [(n+1)²/3^(n+1)] · [3^n/n²]
         = (n+1)²/(3n²)
         = (1 + 1/n)²/3

L = lim(n→∞) (1 + 1/n)²/3
  = 1/3 < 1
```

**c) Conclusion (2 points)**

```
Since L = 1/3 < 1, by the Ratio Test, the series Σn²/3^n converges.
```

---

## Bonus (5 points)

```
Σ(n=1 to ∞) 1/n² < 1 + ∫(1 to ∞) 1/x² dx

Evaluate the integral:
∫(1 to ∞) 1/x² dx = lim(t→∞) [-1/x]₁ᵗ
                   = lim(t→∞) [-1/t + 1]
                   = 1

Therefore:
Σ(n=1 to ∞) 1/n² < 1 + 1 = 2

(The actual sum is π²/6 ≈ 1.645)
```

---

## Grading Rubric

### Performance Levels

- **A (90-100):** Mastery of convergence tests; correct test selection; accurate calculations
- **B (80-89):** Solid understanding; minor errors in application or calculation
- **C (70-79):** Basic competence; struggles with test selection or complex series
- **D (60-69):** Significant gaps; difficulty applying tests correctly
- **F (0-59):** Does not demonstrate understanding of series convergence

### Common Errors to Watch For

1. **Confusing necessary and sufficient conditions**
2. **Incorrect test selection**
3. **Arithmetic errors in limit evaluation**
4. **Forgetting to verify all conditions for a test**
5. **Confusing absolute and conditional convergence**
6. **Not stating conclusions clearly**
7. **Incomplete justification**
8. **Misapplying the Divergence Test**

---

**Total: _____ / 100 (_____ / 105 with bonus)**
