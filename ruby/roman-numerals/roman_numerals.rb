Integer.class_eval do
  # def initialize(input)
  #   @input = input
  # end

  def to_roman
    input = self
    roman_result = ""
    while input > 0
      if input < 5
        roman_result << "I"
        input -= 1
      end
    end
    roman_result
  end
end