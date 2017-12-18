class Complement
  def self.of_dna(dna_nucleo)
    nucleo_array = dna_nucleo.split('')
    rna_array = []
    nucleo_array.each do |nucleo|
      if nucleo == "C"
        rna_array << "G"
      elsif nucleo == "G"
        rna_array << "C"
      elsif nucleo == "T"
        rna_array << "A"
      elsif nucleo == "A"
        rna_array << "U"
      else
        return rna_string = ""
      end
    end
    rna_string = rna_array.join
    return rna_string
  end
end

module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end
