Integer.class_eval do
  # def initialize(input)
  #   @input = input
  # end

  def to_roman
    input = self
    roman_result = ""
    while input > 0
      if input < 4
        roman_result << "I"
        input -= 1
        puts "roman_result is #{roman_result}"
      end
      if input == 4
        roman_result << "IV"
        input -= 4
        puts "roman_result is #{roman_result}"
      end
    end
    roman_result
  end
end