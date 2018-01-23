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
      if input >= 5
        roman_result << "V"
        input -= 5
      end
      
    end
    roman_result
  end
end