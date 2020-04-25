# Write a program that outputs the string representation of numbers from 1 to n.

# But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

def fizz_buzz(n)
  res = []
  (0...n).each do |num|
    if num % 5.zero? && num % 3.zero?
      res.push("FizzBuzz")
      break
    end
    if num % 3.zero?
      res.push("Fizz")
      break
    end
    if num % 5.zero?
      res.push("Buzz")
      break
    end
    res.push(num.string)
  end
  res
end
