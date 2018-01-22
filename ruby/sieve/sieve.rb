class Sieve
  def initialize(range)
    @range = range
    @spectrum = []
  end
  def primes
    return @spectrum unless @range >= 2
    @spectrum = (2..@range).to_a
  end
end
