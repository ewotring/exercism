require_relative 'primes'

class Prime
  def self.prime?(iterable)
    (2...iterable).each do |test_element|
      if iterable % test_element == 0
        return false
      end
    end
  end
  def self.nth(n)
    # build array of prime numbers to the length of the input n
    if n == 0
      raise ArgumentError.new("There is no zeroth prime")
    end

    if n == 1
      return 2
    end
    
    if n == 2
      return 3
    end

    prime_list = []
    i = 2
    while prime_list.length < n
      if prime?(i)
        prime_list.push(i)
      end
      puts "i is #{i}"
      i += 1
    end

    puts "prime_list after loop is #{prime_list}"
    return prime_list[-1]

  end
end

module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end