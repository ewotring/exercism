Integer.class_eval do
  # def initialize(input)
  #   @input = input
  # end

  def to_roman
    input = self
    roman_result = ""
    while input >= 1
      if input < 4
        roman_result << "I"
        input -= 1
      end
      if input >= 4 && input < 5
        roman_result << "IV"
        input -= 4
      end
      if input >= 5 && input < 9
        roman_result << "V"
        input -= 5
      end
      if input >= 9 && input < 10
        roman_result << "IX"
        input -= 9
      end
      if input >= 10 && input < 40
        roman_result << "X"
        input -= 10
      end
      if input >= 40 && input < 50
        roman_result << "XL"
        input -= 40
      end
      if input >= 50 && input < 90
        roman_result << "L"
        input -= 50
      end
      if input >= 90 && input < 100
        roman_result << "XC"
        input -= 90
      end
      if input >= 100 && input < 400
        roman_result << "C"
        input -= 100
      end
      if input >= 400 && input < 500
        roman_result << "CD"
        input -= 400
      end
      if input >= 500 && input < 900
        roman_result << "D"
        input -= 500
      end
      if input >= 900 && input < 1000
        roman_result << "CM"
        input -= 900
      end
      if input >= 1000# && input < 4000
        roman_result << "M"
        input -= 1000
      end
    end
    roman_result
  end
end

module BookKeeping
  VERSION = 2 # Where the version number matches the one in the test.
end
