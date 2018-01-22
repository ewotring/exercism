class Sieve
  def initialize(input)
    @input = input
    @range = (2..@input).to_a
    @spectrum = {}
    @new_spectrum = []
  end
  def primes
    return @new_spectrum unless @input >= 2
    @new_spectrum = @range
  end
end
