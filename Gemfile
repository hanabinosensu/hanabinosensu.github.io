source "https://rubygems.org"

gem "jekyll", "~> 4.2.2"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
gem "tzinfo", "~> 1.2", :platforms => [:mingw, :x64_mingw, :mswin, :jruby]
gem "tzinfo-data", :platforms => [:mingw, :x64_mingw, :mswin, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Needs explicit dependency to webrick to workaround issue #752
gem "webrick", "~> 1.9"
