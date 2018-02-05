class Prime
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

    i = 2
    prime_list = [2]
    
=begin
Take a number as input
that number is the length of the array

=end
    while prime_list.length <= n
      prime_list.each do |prime|
        if i % prime == 0
          prime_list.push(i)
        end
      end
      i += 1
    end
    puts "prime_list is #{prime_list}"
    return prime_list[-1]
  end
end
