class Gigasecond
  def self.from(time)
    # add one gigasecond to the time object sent in as an argument
    # This addition can be done directly to the time object in seconds
    new_time = time + 10**9
  end
end

print(Gigasecond.from(Time.utc(2011, 4, 25, 0, 0, 0)))

module BookKeeping
  VERSION = 6
end
