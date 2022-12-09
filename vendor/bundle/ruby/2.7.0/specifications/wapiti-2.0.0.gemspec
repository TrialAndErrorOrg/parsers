# -*- encoding: utf-8 -*-
# stub: wapiti 2.0.0 ruby lib
# stub: ext/wapiti/extconf.rb

Gem::Specification.new do |s|
  s.name = "wapiti".freeze
  s.version = "2.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Sylvester Keil".freeze]
  s.date = "2022-04-27"
  s.description = "This gem provides a Ruby API for Conditional Random Fields (CRF).".freeze
  s.email = ["sylvester@keil.or.at".freeze]
  s.extensions = ["ext/wapiti/extconf.rb".freeze]
  s.extra_rdoc_files = ["README.md".freeze, "HISTORY.md".freeze, "LICENSE".freeze]
  s.files = ["HISTORY.md".freeze, "LICENSE".freeze, "README.md".freeze, "ext/wapiti/extconf.rb".freeze]
  s.homepage = "https://github.com/inukshuk/wapiti-ruby".freeze
  s.licenses = ["BSD-2-Clause".freeze]
  s.rdoc_options = ["--line-numbers".freeze, "--inline-source".freeze, "--title".freeze, "\"Wapiti-Ruby\"".freeze, "--main".freeze, "README.md".freeze, "--webcvs=https://github.com/inukshuk/wapiti-ruby/tree/master/".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3".freeze)
  s.rubygems_version = "3.3.26".freeze
  s.summary = "Wicked fast Conditional Random Fields for Ruby.".freeze

  s.installed_by_version = "3.3.26" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<builder>.freeze, ["~> 3.2"])
    s.add_runtime_dependency(%q<rexml>.freeze, ["~> 3.0"])
  else
    s.add_dependency(%q<builder>.freeze, ["~> 3.2"])
    s.add_dependency(%q<rexml>.freeze, ["~> 3.0"])
  end
end
