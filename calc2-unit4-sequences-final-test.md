# Calculus 2 - Unit 4: Sequences - Final Test

**Name:** ___________________________
**Date:** ___________________________
**Period:** _____

**Total Points: 100**

---

## Instructions
- Show all work for full credit
- Simplify all final answers
- You have 50 minutes to complete this test

---

## Part 1: Multiple Choice (30 points, 3 points each)

**Choose the best answer for each question.**

1. What is lim(n→∞) (4n + 3)/(2n - 1)?
   - A) 0
   - B) 1
   - C) 2
   - D) 4

2. A sequence is monotonically increasing if:
   - A) aₙ₊₁ > aₙ for all n
   - B) aₙ₊₁ < aₙ for all n
   - C) aₙ₊₁ = aₙ for all n
   - D) aₙ oscillates

3. Which sequence is bounded?
   - A) aₙ = n²
   - B) aₙ = 2^n
   - C) aₙ = sin(n)
   - D) aₙ = n

4. What is lim(n→∞) 1/n?
   - A) 1
   - B) 0
   - C) ∞
   - D) Does not exist

5. The Monotonic Sequence Theorem states that:
   - A) All monotonic sequences converge
   - B) All bounded sequences converge
   - C) All bounded, monotonic sequences converge
   - D) All convergent sequences are monotonic

6. What is lim(n→∞) (1/2)^n?
   - A) 1/2
   - B) 0
   - C) ∞
   - D) Does not exist

7. A formula for the sequence {1, 4, 9, 16, 25, ...} is:
   - A) aₙ = n
   - B) aₙ = 2n
   - C) aₙ = n²
   - D) aₙ = n!

8. To show a sequence is increasing using the ratio test, we show:
   - A) aₙ₊₁ - aₙ > 0
   - B) aₙ₊₁/aₙ > 1
   - C) aₙ₊₁/aₙ < 1
   - D) aₙ₊₁ = aₙ

9. What is lim(n→∞) (1 + 1/n)^n?
   - A) 1
   - B) e
   - C) 2
   - D) ∞

10. The sequence aₙ = (-1)^n:
    - A) Converges to 0
    - B) Converges to 1
    - C) Diverges
    - D) Converges to -1

---

## Part 2: Short Answer (40 points, 5 points each)

**Show all work. Simplify your answers.**

11. Write the first four terms of aₙ = (2n - 1)/(n + 1).

12. Find a formula for the general term of {2, 5, 10, 17, 26, ...}.

13. Evaluate lim(n→∞) (3n² + 5)/(n² - 2).

14. Determine if aₙ = n/(n + 1) is monotonic. If so, state whether it's increasing or decreasing.

15. Determine if aₙ = sin(n)/n converges or diverges. If it converges, find the limit.

16. Show that aₙ = 1/2^n is bounded and state the bounds.

17. Use the ratio test to determine if aₙ = 3^n/n! is (eventually) increasing or decreasing.

18. Evaluate lim(n→∞) √(n² + n) - n.

---

## Part 3: Free Response (30 points)

**Show all work and explain your reasoning. Partial credit will be awarded.**

### Problem 19 (10 points)

Show that the sequence aₙ = (2n + 1)/(3n - 1) converges and find its limit.

a) Evaluate the limit using algebraic techniques. (5 points)

b) Verify your answer makes sense by computing a₁₀ and a₁₀₀. (5 points)

---

### Problem 20 (10 points)

Consider the sequence aₙ = n/e^n.

a) Show that the sequence is eventually decreasing. (5 points)

b) Show that the sequence is bounded below. (2 points)

c) What can you conclude about convergence? State the limit. (3 points)

---

### Problem 21 (10 points)

Consider the recursive sequence defined by a₁ = 2 and aₙ₊₁ = √(3 + aₙ).

a) Compute a₂, a₃, and a₄. (3 points)

b) Show that the sequence is bounded above by 3. (3 points)

c) Assuming the sequence converges to L, find L. (4 points)

---

## Bonus (5 points)

**Bonus Problem:** Show that lim(n→∞) n^(1/n) = 1.

*Hint: Let L = lim(n→∞) n^(1/n) and take logarithms.*

---

---

# ANSWER KEY - FOR TEACHER USE ONLY

---

## Part 1: Multiple Choice

1. **C) 2**
   - Divide by n: lim (4 + 3/n)/(2 - 1/n) = 4/2 = 2

2. **A) aₙ₊₁ > aₙ for all n**
   - Definition of monotonically increasing (strictly)

3. **C) aₙ = sin(n)**
   - -1 ≤ sin(n) ≤ 1, so bounded
   - All others grow without bound

4. **B) 0**
   - Standard limit: 1/n → 0 as n → ∞

5. **C) All bounded, monotonic sequences converge**
   - This is the statement of the theorem

6. **B) 0**
   - For |r| < 1, r^n → 0

7. **C) aₙ = n²**
   - Each term is a perfect square

8. **B) aₙ₊₁/aₙ > 1**
   - Ratio greater than 1 indicates increasing

9. **B) e**
   - Famous limit defining e

10. **C) Diverges**
    - Oscillates between -1 and 1, no limit exists

---

## Part 2: Short Answer

11. **Answer: {1/2, 3/3, 5/4, 7/5} = {1/2, 1, 5/4, 7/5}**
    ```
    a₁ = (2(1) - 1)/(1 + 1) = 1/2
    a₂ = (2(2) - 1)/(2 + 1) = 3/3 = 1
    a₃ = (2(3) - 1)/(3 + 1) = 5/4
    a₄ = (2(4) - 1)/(4 + 1) = 7/5
    ```

12. **Answer: aₙ = n² + 1**
    ```
    Differences: 3, 5, 7, 9, ... (arithmetic with d = 2)
    This suggests quadratic: n² + 1

    Verify: 1² + 1 = 2 ✓
            2² + 1 = 5 ✓
            3² + 1 = 10 ✓
    ```

13. **Answer: 3**
    ```
    lim(n→∞) (3n² + 5)/(n² - 2)

    Divide by n²:
    = lim(n→∞) (3 + 5/n²)/(1 - 2/n²)
    = (3 + 0)/(1 - 0)
    = 3
    ```

14. **Answer: Monotonically increasing**
    ```
    Method 1: aₙ₊₁ - aₙ

    aₙ₊₁ - aₙ = (n+1)/(n+2) - n/(n+1)
               = [(n+1)² - n(n+2)]/[(n+2)(n+1)]
               = [n² + 2n + 1 - n² - 2n]/[(n+2)(n+1)]
               = 1/[(n+2)(n+1)] > 0

    Therefore, the sequence is increasing.
    ```

15. **Answer: Converges to 0**
    ```
    We know -1 ≤ sin(n) ≤ 1

    Divide by n (n > 0):
    -1/n ≤ sin(n)/n ≤ 1/n

    As n → ∞: -1/n → 0 and 1/n → 0

    By Squeeze Theorem: lim(n→∞) sin(n)/n = 0
    ```

16. **Answer: Bounded; 0 < aₙ ≤ 1/2**
    ```
    For all n ≥ 1: 2^n ≥ 2

    Therefore: 0 < 1/2^n ≤ 1/2

    Lower bound: 0
    Upper bound: 1/2 (achieved when n = 1)
    ```

17. **Answer: Eventually decreasing**
    ```
    aₙ₊₁/aₙ = [3^(n+1)/(n+1)!] / [3^n/n!]
             = [3·3^n/(n+1)!] · [n!/3^n]
             = 3/(n+1)

    For n ≥ 2: 3/(n+1) < 1

    Therefore, the sequence is decreasing for n ≥ 2.
    ```

18. **Answer: 1/2**
    ```
    lim(n→∞) √(n² + n) - n

    Multiply by conjugate:
    = lim(n→∞) [√(n² + n) - n] · [√(n² + n) + n]/[√(n² + n) + n]
    = lim(n→∞) (n² + n - n²)/[√(n² + n) + n]
    = lim(n→∞) n/[√(n² + n) + n]

    Divide numerator and denominator by n:
    = lim(n→∞) 1/[√(1 + 1/n) + 1]
    = 1/(1 + 1)
    = 1/2
    ```

---

## Part 3: Free Response

### Problem 19 (10 points)

**a) Find the limit (5 points)**

```
lim(n→∞) (2n + 1)/(3n - 1)

Divide numerator and denominator by n:
= lim(n→∞) (2 + 1/n)/(3 - 1/n)

As n → ∞: 1/n → 0

= (2 + 0)/(3 - 0)
= 2/3

Therefore, the sequence converges to 2/3.
```

**Grading:**
- Dividing by n (2 points)
- Taking limit correctly (2 points)
- Final answer (1 point)

**b) Verify (5 points)**

```
a₁₀ = (2(10) + 1)/(3(10) - 1) = 21/29 ≈ 0.724

a₁₀₀ = (2(100) + 1)/(3(100) - 1) = 201/299 ≈ 0.672

2/3 ≈ 0.667

We see that a₁₀₀ is closer to 2/3 than a₁₀, confirming convergence to 2/3.
```

**Grading:**
- Computing a₁₀ (2 points)
- Computing a₁₀₀ (2 points)
- Verification statement (1 point)

---

### Problem 20 (10 points)

**a) Show eventually decreasing (5 points)**

```
Let f(x) = x/e^x

f'(x) = (e^x - x·e^x)/(e^x)²
      = (1 - x)/e^x

f'(x) < 0 when 1 - x < 0, i.e., x > 1

Therefore, f is decreasing for x > 1.

Hence aₙ is decreasing for n ≥ 2.
```

**b) Show bounded below (2 points)**

```
Since aₙ = n/e^n > 0 for all n,
the sequence is bounded below by 0.
```

**c) Conclusion (3 points)**

```
The sequence is decreasing and bounded below by 0.

By the Monotonic Sequence Theorem, the sequence converges.

Since aₙ > 0 and lim(n→∞) e^n = ∞ (which grows faster than n),
we have lim(n→∞) n/e^n = 0.
```

---

### Problem 21 (10 points)

**a) Compute terms (3 points)**

```
a₁ = 2
a₂ = √(3 + 2) = √5 ≈ 2.236
a₃ = √(3 + √5) ≈ √5.236 ≈ 2.288
a₄ = √(3 + 2.288) ≈ √5.288 ≈ 2.300
```

**b) Show bounded above by 3 (3 points)**

```
Proof by induction:

Base case: a₁ = 2 < 3 ✓

Inductive step: Assume aₖ < 3
Then 3 + aₖ < 6
So aₖ₊₁ = √(3 + aₖ) < √6 < 3 ✓

By induction, aₙ < 3 for all n.
```

**c) Find L (4 points)**

```
Assume the sequence converges to L.

Taking the limit of both sides of aₙ₊₁ = √(3 + aₙ):
L = √(3 + L)

Square both sides:
L² = 3 + L
L² - L - 3 = 0

Using quadratic formula:
L = (1 ± √(1 + 12))/2
  = (1 ± √13)/2

Since aₙ > 0, we take the positive root:
L = (1 + √13)/2 ≈ 2.303
```

---

## Bonus (5 points)

```
Let L = lim(n→∞) n^(1/n)

Take natural logarithm:
ln(L) = lim(n→∞) ln(n^(1/n))
      = lim(n→∞) (1/n) ln(n)
      = lim(n→∞) ln(n)/n

This is ∞/∞ form, apply L'Hôpital's Rule:
= lim(n→∞) (1/n)/1
= lim(n→∞) 1/n
= 0

Therefore: ln(L) = 0
           L = e⁰ = 1

So lim(n→∞) n^(1/n) = 1
```

---

## Grading Rubric

### Performance Levels

- **A (90-100):** Mastery of sequence concepts; correct limit evaluations; clear proofs
- **B (80-89):** Solid understanding; minor errors in calculations or logic
- **C (70-79):** Basic competence; struggles with proofs or complex limits
- **D (60-69):** Significant gaps; difficulty with monotonicity or convergence tests
- **F (0-59):** Does not demonstrate basic understanding

### Common Errors to Watch For

1. **Incorrect limit evaluation (not dividing by highest power)**
2. **Confusing convergence with boundedness**
3. **Sign errors in monotonicity tests**
4. **Forgetting to check both conditions for Monotonic Sequence Theorem**
5. **Algebraic errors when finding limits of recursive sequences**
6. **Not using appropriate method for limit evaluation**
7. **Incorrect application of Squeeze Theorem**
8. **Missing cases in proofs by induction**

---

**Total: _____ / 100 (_____ / 105 with bonus)**
