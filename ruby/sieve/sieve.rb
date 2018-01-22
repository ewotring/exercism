class Sieve
  def initialize(input)
    @input = input
    @range = (2..@input).to_a
    @spectrum = {}
    @new_spectrum = []
  end

  def primes
    return @range unless @input >= 2
    @range.each do |element|
      @spectrum[element] = false
    end
    @spectrum.each do |key, value|
      if value == false
        @spectrum.each do |key_inner, value_inner|
          if key_inner % key == 0 && key_inner > key
            @spectrum[key_inner] = true
          end
        end
      end
    end
    @spectrum.each do |key, value|
      if value == false
        @new_spectrum.push(key)
      end
    end
    @new_spectrum
  end
end

module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
