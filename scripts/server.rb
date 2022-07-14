# frozen_string_literal: true

require 'webrick'

class_handlers = {}

API_PATH_REGEX = %r{/api/(.+).rb}.freeze

Dir['./api/**/*.rb'].each do |file_path|
  api_path = API_PATH_REGEX.match(file_path).captures[0]
  new_module = Module.new
  new_module.module_eval(
    <<-RUBY, __FILE__, __LINE__ + 1
        #{File.read(file_path)}
        class WEBrickHandler < WEBrick::HTTPServlet::AbstractServlet
          def do_GET(req, res)
            puts "AAAAAAAA"
            res.header['Access-Control-Allow-Origin'] = '*'
            Handler.call(req, res)
          end

          # def do_POST req, res
          #   Handler.call(req, res)
          # end
          alias do_POST do_GET
        end
  RUBY
  )
  puts "AAAAAAAAAAAAAAAAAAA"
  class_handlers[api_path] = new_module::WEBrickHandler
end

root = File.expand_path '.'
server = WEBrick::HTTPServer.new Port: 8000, DocumentRoot: root

class_handlers.each do |function, handler|
  server.mount "/api/#{function}", handler
end

# Start the server
trap('INT') { server.shutdown }

puts class_handlers
server.start
