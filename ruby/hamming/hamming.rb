class Hamming
  def self.compute(string1, string2)
    if string1.length != string2.length
      raise ArgumentError.new("Both strings must be the same length.")
    end


    if string1 == string2
      return 0
    end

    if string1 != string2
      count = 0
      index1 = 0
      while index1 < string1.length
        if string1[index1] != string2[index1]
          count += 1
        end
        index1 += 1
      end
      return count
    end
  end
end

module BookKeeping
  VERSION = 3
end
