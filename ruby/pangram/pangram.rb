class Pangram
  def self.pangram?(sentence)
    for letter in 'a'..'z' do
      return false if !sentence.downcase.include?(letter)
    end
  end
end

module BookKeeping
  VERSION = 6 # Where the version number matches the one in the test.
end
