# -*- encoding: utf-8 -*-
# stub: anystyle 1.3.14 ruby lib

Gem::Specification.new do |s|
  s.name = "anystyle".freeze
  s.version = "1.3.14"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Sylvester Keil".freeze]
  s.date = "2022-04-27"
  s.description = "A sophisticated parser for academic reference lists and bibliographies based on machine learning algorithms using conditional random fields.".freeze
  s.email = ["http://sylvester.keil.or.at".freeze]
  s.extra_rdoc_files = ["README.md".freeze, "LICENSE".freeze]
  s.files = ["LICENSE".freeze, "README.md".freeze]
  s.homepage = "http://anystyle.io".freeze
  s.licenses = ["BSD-2-Clause".freeze]
  s.rdoc_options = ["--line-numbers".freeze, "--inline-source".freeze, "--title".freeze, "\"AnyStyle\"".freeze, "--main".freeze, "README.md".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2".freeze)
  s.rubygems_version = "3.3.26".freeze
  s.summary = "Smart and fast bibliography parser.".freeze

  s.installed_by_version = "3.3.26" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<bibtex-ruby>.freeze, ["~> 6.0"])
    s.add_runtime_dependency(%q<anystyle-data>.freeze, ["~> 1.2"])
    s.add_runtime_dependency(%q<wapiti>.freeze, ["~> 2.0"])
    s.add_runtime_dependency(%q<namae>.freeze, ["~> 1.0"])
  else
    s.add_dependency(%q<bibtex-ruby>.freeze, ["~> 6.0"])
    s.add_dependency(%q<anystyle-data>.freeze, ["~> 1.2"])
    s.add_dependency(%q<wapiti>.freeze, ["~> 2.0"])
    s.add_dependency(%q<namae>.freeze, ["~> 1.0"])
  end
end
