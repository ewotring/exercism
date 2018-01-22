class Sieve
  def initialize(range)
    @range = range
    @spectrum = []
  end
  def primes
    return @spectrum unless @range >= 2
    @spectrum = (2..@range).to_a
    @new_spectrum = @spectrum
    @new_spectrum.delete_if do |element|
      element > 2 &&
      element % 2 == 0
    end
    @new_spectrum.delete_if do |element|
      element > 3 &&
      element % 3 == 0
    end
    return @new_spectrum
  end
end
