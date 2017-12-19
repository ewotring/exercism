class Raindrops
  def self.convert(drop_count)
    rain_lang = ""
    if drop_count % 3 != 0 && drop_count % 5 != 0 && drop_count % 7 != 0
      return drop_count.to_s
    end
    if drop_count % 3 == 0
      rain_lang << "Pling"
    end
    if drop_count % 5 == 0
      rain_lang <<  "Plang"
    end
    if drop_count % 7 == 0
      rain_lang <<  "Plong"
    end
    return rain_lang
  end
end

module BookKeeping
  VERSION = 3
end
