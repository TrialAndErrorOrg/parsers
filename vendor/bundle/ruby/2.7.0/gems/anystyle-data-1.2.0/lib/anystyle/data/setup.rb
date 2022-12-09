module AnyStyle
  module Data
    ROOT = File.expand_path('..', __FILE__).untaint

    def self.setup
      Dictionary.defaults[:source] = File.join(ROOT, 'dict.txt.gz')

      if defined? Dictionary::Marshal
        Dictionary::Marshal.defaults[:path] = File.join(ROOT, 'dict.marshal')
      end

      if defined? Dictionary::GDBM
        Dictionary::GDBM.defaults[:path] = File.join(ROOT, 'dict.db')
      end

      if defined? Dictionary::LDBM
        Dictionary::LDBM.defaults[:path] = ROOT
      end
    end
  end
end
