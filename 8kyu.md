# 8kyu Problems

### Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Solution 1:

    function even_or_odd(number) {
        if (number%2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }

Solution 2:

    function even_or_odd(number) {
        return number % 2 ? "Odd" : "Even";
    }

### Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Solution 1:

    function paperwork(n, m) {
        if(n < 0 || m < 0) {
            return 0;
        } else {
            return n * m;
        }
    }

Solution 2:

    function paperwork(n, m) {
        return n > 0 && m > 0 ? n * m : 0;
    }

### 