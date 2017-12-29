class Squares
  def initialize(int)
    @int = int
  end
  def square_of_sum
    sum = 0
    for i in 1..@int do
      sum += i
    end
    return sum ** 2
  end

  def sum_of_squares
    sum = 0
    for i in 1..@int do
      sum += i ** 2
    end
    return sum
  end

  def difference
    return square_of_sum - sum_of_squares
  end
end

module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end
