# encoding: utf-8

require 'anystyle'
require 'json'

Handler = Proc.new do |req, res|
        ## Fucking ruby sets the encoding to ASCII for some reason
        body = req.body().force_encoding('UTF-8')
        if !body
            res.status = 401
            res['Content-type']= 'text/plain'
            res.body= "Hey you didn't send anything dummy"
            return
        end

        ## Get the 'format' parameter from the request query string
        style =/format=(\w+\b)/.match(req.query_string)[1]

        # parsed = AnyStyle.parse(body,:style)


        res.status = 200
        res['Access-Control-Allow-Origin'] = '*'
        ## if then

        if style == 'json' ||  style == 'csl' || !style
          pp "whoops"
          res['Content-Type'] = 'application/json; charset=utf-8'
          parsed = AnyStyle.parse body, format: 'csl'
          res.body = JSON.generate(parsed)
        else
          parsed = AnyStyle.parse body, format: style
          res['Content-Type'] = 'text/plain; charset=utf-8'
          res.body = parsed.to_s
        end
end

