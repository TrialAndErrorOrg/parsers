# encoding: utf-8

require 'anystyle'
require 'json'

Handler = Proc.new do |req, res|

        if !req.body()
            res.status = 401
            res['Content-type']= 'text/plain'
            res.body= "Hey you didn't send anything dummy"
            return
        end
        ## Fucking ruby sets the encoding to ASCII for some reason
        body = req.body().force_encoding('UTF-8')

        ## Get the 'format' parameter from the request query string
        style = req.query_string ? /format=(\w+\b)/.match(req.query_string)[1] : ''

        # parsed = AnyStyle.parse(body,:style)


        res.status = 200
        res['Access-Control-Allow-Origin'] = '*'


        if style == 'biblatex' || style == 'bibtex'
          parsed = AnyStyle.parse body, format: style
          res['Content-Type'] = 'text/plain; charset=utf-8'
          res.body = parsed.to_s
        else
          res['Content-Type'] = 'application/json; charset=utf-8'
          parsed = AnyStyle.parse body, format: 'csl'
          res.body = JSON.generate(parsed)
        end
end
